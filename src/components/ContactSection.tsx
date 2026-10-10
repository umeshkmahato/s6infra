'use client';

import { useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Reveal from '@/components/Reveal';
import { buildEnquiryWhatsAppMessage } from '@/lib/enquiryMessage';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/hooks/useToast';
import { createContactFormSchema, type ContactFormInputs } from '@/lib/validations';


const WHATSAPP_PHONE_NUMBER = '918298804849';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.25l8 5 8-5V7H4Zm16 10V9.5l-7.47 4.67a1 1 0 0 1-1.06 0L4 9.5V17h16Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2a10 10 0 0 0-8.57 15.2L2 22l4.94-1.37A10 10 0 1 0 12 2Zm0 18a7.96 7.96 0 0 1-4.08-1.12l-.29-.17-2.93.81.78-2.85-.19-.3A8 8 0 1 1 12 20Zm4.62-5.84c-.25-.12-1.47-.73-1.7-.82s-.4-.12-.57.12c-.17.25-.66.82-.81.99s-.3.18-.55.06a6.57 6.57 0 0 1-1.94-1.2 7.27 7.27 0 0 1-1.35-1.67c-.14-.25-.01-.38.1-.5.1-.1.24-.26.36-.4.12-.13.16-.25.24-.42s.04-.31-.02-.43c-.06-.12-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.08s.9 2.39 1.03 2.56c.12.17 1.76 2.69 4.26 3.77.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

export default function ContactSection() {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const formStartedAtRef = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);
  const contactFormSchema = useMemo(
    () => createContactFormSchema(t.contact.form.validation),
    [t.contact.form.validation]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          company: honeypotRef.current?.value ?? '',
          formStartedAt: formStartedAtRef.current,
        }),
      });

      const result = (await response.json()) as {
        success: boolean;
        message?: string;
        error?: string;
        code?: 'INVALID_SUBMISSION' | 'SPAM_DETECTED' | 'TOO_MANY_REQUESTS' | 'SERVER_ERROR';
      };

      if (!response.ok || !result.success) {
        if (result.code === 'SPAM_DETECTED') {
          throw new Error(t.contact.form.spamBlocked);
        }

        if (result.code === 'TOO_MANY_REQUESTS') {
          throw new Error(t.contact.form.tooManyRequests);
        }

        throw new Error(response.status === 400 ? result.error || t.contact.form.error : t.contact.form.error);
      }

      showToast({ type: 'success', message: t.contact.form.success });
      reset();
      formStartedAtRef.current = Date.now();

      if (honeypotRef.current) {
        honeypotRef.current.value = '';
      }
    } catch (error) {
      showToast({
        type: 'error',
        message: error instanceof Error ? error.message : t.contact.form.error,
      });
    }
  };

  const onWhatsAppClick = handleSubmit((data) => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
      buildEnquiryWhatsAppMessage(data)
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <div className="section-label">{t.contact.label}</div>

          <h2 className="section-title">{t.contact.title}</h2>

          <p className="section-text">{t.contact.description}</p>

          <div className="contact-details">
            {t.contact.details.map((item) => (
              <div key={item.title} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="hp-field" aria-hidden="true">
              <input
                ref={honeypotRef}
                type="text"
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="new-password"
                data-lpignore="true"
                spellCheck={false}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name}</label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  placeholder={t.contact.form.namePlaceholder}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="field-error">{errors.name.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t.contact.form.phone}</label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  placeholder={t.contact.form.phonePlaceholder}
                  disabled={isSubmitting}
                />
                {errors.phone && <p className="field-error">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder={t.contact.form.emailPlaceholder}
                disabled={isSubmitting}
              />
              {errors.email && <p className="field-error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t.contact.form.service}</label>
              <select {...register('subject')} id="subject" disabled={isSubmitting}>
                <option value="">{t.contact.form.servicePlaceholder}</option>
                {t.contact.form.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.subject && <p className="field-error">{errors.subject.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                {...register('message')}
                id="message"
                placeholder={t.contact.form.messagePlaceholder}
                rows={5}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <p className="field-error">{errors.message.message}</p>}
            </div>

            <div className="contact-actions">
              <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                <span className="button-icon">
                  <MailIcon />
                </span>
                <span>{isSubmitting ? t.contact.form.sending : t.contact.form.submit}</span>
              </button>

              <button
                type="button"
                className="btn btn-outline contact-submit contact-submit--whatsapp"
                onClick={onWhatsAppClick}
                disabled={isSubmitting}
              >
                <span className="button-icon">
                  <WhatsAppIcon />
                </span>
                <span>{t.contact.form.whatsapp}</span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
