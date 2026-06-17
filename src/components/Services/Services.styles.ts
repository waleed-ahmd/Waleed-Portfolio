import styled from 'styled-components';

export const ServicesSection = styled.section`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  padding: 1.35rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: rgba(255, 255, 255, 0.04);
  min-height: 190px;
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(34, 211, 238, 0.45);
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.12em;
`;

export const Title = styled.h3`
  margin-top: 0.85rem;
  font-size: 1.2rem;
  line-height: 1.2;
  letter-spacing: -0.03em;
`;

export const Description = styled.p`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedText};
`;
