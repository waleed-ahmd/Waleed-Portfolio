import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight } from 'react-icons/fi';
import { profile, socialLinks } from '../../data/profile';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import {
  ContactInfo,
  ContactSection,
  Field,
  Form,
  LinkCard,
  Links,
  Panel,
  SmallNote,
  SubmitButton,
} from './Contact.styles';

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString() ?? '';
    const email = data.get('email')?.toString() ?? '';
    const message = data.get('message')?.toString() ?? '';

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus('EmailJS is not configured yet. Please email me directly using the contact link.');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending your message...');

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: name,
          from_email: email,
          message,
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      setStatus('Thanks, your message has been sent.');
      form.reset();
    } catch {
      setStatus('Sorry, the message could not be sent. Please email me directly using the contact link.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something useful, modern, and professional."
        intro="Use this section for job opportunities, placement discussions, freelance work, or project collaboration."
      />

      <Panel>
        <ContactInfo>
          <h3>Contact details</h3>
          <p>
            Interested in working together? Reach out for web development, mobile app development,
            blockchain projects, or software engineering opportunities.
          </p>

          <Links>
            <LinkCard href={`mailto:${profile.email}`}>
              Email <span>{profile.email}</span>
            </LinkCard>
            {socialLinks.map((link) => (
              <LinkCard key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <FiArrowUpRight />
              </LinkCard>
            ))}
          </Links>
        </ContactInfo>

        <Form onSubmit={handleSubmit}>
          <Field>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </Field>
          <Field>
            Email
            <input name="email" type="email" placeholder="name@email.com" required />
          </Field>
          <Field>
            Message
            <textarea name="message" placeholder="Tell me about your project or opportunity" required />
          </Field>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {status ? <SmallNote>{status}</SmallNote> : <SmallNote>Messages are sent securely through EmailJS.</SmallNote>}
        </Form>
      </Panel>
    </ContactSection>
  );
};
