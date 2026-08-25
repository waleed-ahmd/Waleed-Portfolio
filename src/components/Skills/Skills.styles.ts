import styled from 'styled-components';

export const SkillsSection = styled.section`
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

export const SkillCard = styled.article`
  padding: 1.4rem;
  min-height: 230px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(34, 211, 238, 0.45);
    background: rgba(15, 23, 42, 0.92);
  }
`;

export const Icon = styled.div`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(34, 211, 238, 0.28);
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(34, 211, 238, 0.08);

  svg {
    width: 1.45rem;
    height: 1.45rem;
    stroke-width: 2.2;
  }
`;

export const Title = styled.h3`
  margin-top: 1rem;
  font-size: 1.15rem;
  letter-spacing: -0.03em;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
`;

export const Tag = styled.span`
  padding: 0.45rem 0.65rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.mutedText};
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.82rem;
  font-weight: 700;
`;
