import styled from 'styled-components';

export const ContactSection = styled.section`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.14), rgba(34, 211, 238, 0.06));

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.7rem;
    letter-spacing: -0.04em;
  }

  p {
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.colors.mutedText};
  }
`;

export const Links = styled.div`
  display: grid;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

export const LinkCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  background: rgba(255, 255, 255, 0.05);
  font-weight: 800;
  transition: transform 180ms ease, border-color 180ms ease;

  span {
    color: ${({ theme }) => theme.colors.mutedText};
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
`;

export const Field = styled.label`
  display: grid;
  gap: 0.45rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;

  input,
  textarea {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    padding: 0.85rem 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    background: rgba(7, 17, 31, 0.72);
    outline: none;
    transition: border-color 160ms ease;
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }

  input:focus,
  textarea:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SubmitButton = styled.button`
  min-height: 3rem;
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.background};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  font-weight: 950;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.68;
  }
`;

export const SmallNote = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.88rem;
`;
