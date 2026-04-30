import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a short subject."),
  message: z.string().min(15, "Please include a message with at least 15 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
