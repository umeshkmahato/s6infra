import type { ContactFormInputs } from '@/lib/validations';

export type EnquiryDetails = Pick<ContactFormInputs, 'name' | 'email' | 'phone' | 'subject' | 'message'>;

const normalizeValue = (value: string, fallback = 'Not provided') => value.trim() || fallback;

export const buildEnquirySubject = (details: EnquiryDetails) =>
  `New Project Enquiry - ${normalizeValue(details.subject, 'General')}`;

export const buildEnquiryWhatsAppMessage = (details: EnquiryDetails) =>
  [
    '🏗️ *NEW PROJECT ENQUIRY*',
    `*${normalizeValue(details.subject, 'General')}*`,
    '',
    '━━━━━━━━━━━━━━━',
    '👤 *CONTACT DETAILS*',
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Email: ${details.email}`,
    '',
    '📋 *PROJECT DETAILS*',
    `Requirement: ${normalizeValue(details.subject)}`,
    `Message: ${details.message}`,
    '',
    '━━━━━━━━━━━━━━━',
    '_Sent via S6 Infra Website_',
  ].join('\n');

export const buildEnquiryEmailText = (details: EnquiryDetails) =>
  [
    '🏗️ NEW PROJECT ENQUIRY',
    `Project: ${normalizeValue(details.subject, 'General')}`,
    '',
    '━━━━━━━━━━━━━━━',
    'CONTACT DETAILS',
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Email: ${details.email}`,
    '',
    'PROJECT DETAILS',
    `Requirement: ${normalizeValue(details.subject)}`,
    'Message:',
    details.message,
    '',
    '━━━━━━━━━━━━━━━',
    'Sent via S6 Infra Website',
  ].join('\n');

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatMultilineHtml = (value: string) => escapeHtml(value).replace(/\n/g, '<br />');

export const buildEnquiryEmailHtml = (details: EnquiryDetails) => `
  <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
    <h2 style="margin-bottom: 8px;">🏗️ New Project Enquiry</h2>
    <p style="margin: 0 0 16px; color: #4b5563; font-weight: 600;">${escapeHtml(
      normalizeValue(details.subject, 'General')
    )}</p>
    <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
      <tbody>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb; font-weight: 700; width: 180px;">Name</td>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${escapeHtml(details.name)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb; font-weight: 700;">Phone</td>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${escapeHtml(details.phone)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb; font-weight: 700;">Email</td>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${escapeHtml(details.email)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb; font-weight: 700;">Requirement</td>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${escapeHtml(
            normalizeValue(details.subject)
          )}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb; font-weight: 700; vertical-align: top;">Message</td>
          <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${formatMultilineHtml(details.message)}</td>
        </tr>
      </tbody>
    </table>
    <p style="margin-top: 16px; color: #6b7280; font-size: 12px;">Sent via S6 Infra Website</p>
  </div>
`;
