import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { buildEnquiryEmailHtml, buildEnquiryEmailText, buildEnquirySubject } from '@/lib/enquiryMessage';
import { appendContactEnquiryToSheet } from '@/lib/googleSheets';
import { checkRateLimit } from '@/lib/rateLimit';
import { contactFormSchema } from '@/lib/validations';

export const runtime = 'nodejs';

const DEFAULT_RECIPIENT = 'info.s6infra@gmail.com';
const MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_LINK_COUNT = 2;

type ContactErrorCode = 'INVALID_SUBMISSION' | 'SPAM_DETECTED' | 'TOO_MANY_REQUESTS' | 'SERVER_ERROR';

const createErrorResponse = (status: number, error: string, code: ContactErrorCode, retryAfter?: number) =>
  NextResponse.json(
    {
      success: false,
      error,
      code,
      ...(retryAfter ? { retryAfter } : {}),
    },
    { status }
  );

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const getStringValue = (record: Record<string, unknown>, key: string) =>
  typeof record[key] === 'string' ? record[key] : '';

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') ?? 'unknown';
};

const countLinks = (value: string) => value.match(/https?:\/\/|www\./gi)?.length ?? 0;

const getMailConfig = () => {
  const host = process.env.SMTP_HOST ?? 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT ?? '587');
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? DEFAULT_RECIPIENT;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? user;
  const from = `S6 Infra <${fromEmail}>`;

  if (!user || !pass || !fromEmail) {
    throw new Error('Missing SMTP configuration for contact form email delivery.');
  }

  return {
    transport: {
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    },
    to,
    from,
  };
};

export async function POST(request: Request) {
  try {
    let payload: unknown;

    try {
      payload = await request.json();
    } catch {
      return createErrorResponse(400, 'Invalid request payload.', 'INVALID_SUBMISSION');
    }

    if (!isRecord(payload)) {
      return createErrorResponse(400, 'Invalid request payload.', 'INVALID_SUBMISSION');
    }

    const clientIp = getClientIp(request);
    const userAgent = request.headers.get('user-agent') ?? 'Unknown';
    const rateLimit = checkRateLimit(`contact:${clientIp}`, MAX_REQUESTS, RATE_LIMIT_WINDOW_MS);

    if (!rateLimit.allowed) {
      return createErrorResponse(
        429,
        'Too many enquiries from this connection. Please wait and try again.',
        'TOO_MANY_REQUESTS',
        rateLimit.retryAfter
      );
    }

    const honeypotValue = getStringValue(payload, 'company').trim();
    if (honeypotValue) {
      return createErrorResponse(400, 'Spam detected.', 'SPAM_DETECTED');
    }

    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message ?? 'Please provide valid contact details.';

      return createErrorResponse(400, firstIssue, 'INVALID_SUBMISSION');
    }

    const { name, email, phone, subject, message } = parsed.data;

    if (countLinks(`${subject}\n${message}`) > MAX_LINK_COUNT) {
      return createErrorResponse(400, 'Spam detected.', 'SPAM_DETECTED');
    }

    const { transport, to, from } = getMailConfig();
    const transporter = nodemailer.createTransport(transport);
    const enquiryDetails = { name, email, phone, subject, message };

    const [emailResult, storageResult] = await Promise.allSettled([
      transporter.sendMail({
        to,
        from,
        replyTo: email,
        subject: buildEnquirySubject(enquiryDetails),
        text: buildEnquiryEmailText(enquiryDetails),
        html: buildEnquiryEmailHtml(enquiryDetails),
      }),
      appendContactEnquiryToSheet({
        submittedAt: new Date().toISOString(),
        name,
        email,
        phone,
        subject: subject || 'Not provided',
        message,
        ipAddress: clientIp,
        userAgent,
      }),
    ]);

    if (emailResult.status === 'rejected') {
      throw emailResult.reason;
    }

    if (storageResult.status === 'rejected') {
      console.error('Failed to store contact enquiry in Google Sheets.', storageResult.reason);
    } else if (storageResult.value?.stored === false) {
      console.warn('Google Sheets storage skipped:', storageResult.value.reason);
    } else {
      console.log('Contact enquiry successfully stored in Google Sheets');
    }

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been sent successfully.',
    });
  } catch (error) {
    console.error('Failed to send contact enquiry email.', error);

    return createErrorResponse(
      500,
      'We could not send your enquiry right now. Please try again shortly.',
      'SERVER_ERROR'
    );
  }
}
