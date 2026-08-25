import styled from 'styled-components';

export const ExperienceSection = styled.section`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

export const Timeline = styled.div`
  display: grid;
  gap: 1rem;
`;

export const TimelineItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 230px 1fr;
  gap: 1.5rem;
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Meta = styled.div`
  color: ${({ theme }) => theme.colors.mutedText};

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  span {
    display: block;
    margin-top: 0.5rem;
  }
`;

export const Body = styled.div``;

export const Role = styled.h3`
  font-size: 1.35rem;
  letter-spacing: -0.04em;
`;

export const Company = styled.p`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 800;
`;

export const CompanyLink = styled.a`
  display: inline-block;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 800;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.colors.mutedText};
`;

export const Highlights = styled.ul`
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-left: 1.15rem;
  color: ${({ theme }) => theme.colors.mutedText};

  li::marker {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
