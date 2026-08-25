import { FormEvent, useState } from 'react';
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

export const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name')?.toString() ?? '';
    const email = data.get('email')?.toString() ?? '';
    const message = data.get('message')?.toString() ?? '';

    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Your email app should open with the message ready to send.');
    event.currentTarget.reset();
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
          <SubmitButton type="submit">Send Message</SubmitButton>
          {status ? <SmallNote>{status}</SmallNote> : <SmallNote>This form uses your email app. You can connect EmailJS later if needed.</SmallNote>}
        </Form>
      </Panel>
    </ContactSection>
  );
};
