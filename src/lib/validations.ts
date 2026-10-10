import { z } from 'zod';

type ContactValidationMessages = {
  nameMin: string;
  nameMax: string;
  email: string;
  phoneMin: string;
  phoneMax: string;
  subjectMax: string;
  messageMin: string;
  messageMax: string;
};

export const createContactFormSchema = (messages: ContactValidationMessages) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: messages.nameMin })
      .max(100, { message: messages.nameMax }),
    email: z.string().trim().email({ message: messages.email }),
    phone: z
      .string()
      .trim()
      .min(10, { message: messages.phoneMin })
      .max(20, { message: messages.phoneMax }),
    subject: z.string().trim().max(200, { message: messages.subjectMax }),
    message: z
      .string()
      .trim()
      .min(10, { message: messages.messageMin })
      .max(5000, { message: messages.messageMax }),
  });

const defaultMessages: ContactValidationMessages = {
  nameMin: 'Name must be at least 2 characters',
  nameMax: 'Name must not exceed 100 characters',
  email: 'Please enter a valid email address',
  phoneMin: 'Phone must be at least 10 digits',
  phoneMax: 'Phone must not exceed 20 digits',
  subjectMax: 'Subject must not exceed 200 characters',
  messageMin: 'Message must be at least 10 characters',
  messageMax: 'Message must not exceed 5000 characters',
};

export const contactFormSchema = createContactFormSchema(defaultMessages);

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
