import ContactForm from "@/components/contact-form";
import PageShell from "@/components/page-shell";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Get in Touch"
      description="Use this form to send me a message."
    >
      <ContactForm />
    </PageShell>
  );
}
