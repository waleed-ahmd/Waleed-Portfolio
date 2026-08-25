import styled from 'styled-components';

export const ProjectsSection = styled.section`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(167, 139, 250, 0.45);
  }
`;

export const ProjectVisual = styled.div`
  height: clamp(190px, 24vw, 260px);
  display: grid;
  place-items: center;
  padding: 0.75rem;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background:
    linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(34, 211, 238, 0.18)),
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 14rem);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    border-radius: ${({ theme }) => theme.radii.md};
  }

  span {
    padding: 0.7rem 1rem;
    border-radius: ${({ theme }) => theme.radii.full};
    color: ${({ theme }) => theme.colors.text};
    background: rgba(7, 17, 31, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.16);
    font-weight: 950;
    letter-spacing: 0.14em;
  }
`;

export const ProjectBody = styled.div`
  padding: 1.4rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  line-height: 1.2;
  letter-spacing: -0.04em;
`;

export const Description = styled.p`
  margin-top: 0.85rem;
  color: ${({ theme }) => theme.colors.mutedText};
`;

export const FeatureList = styled.ul`
  display: grid;
  gap: 0.55rem;
  margin-top: 1rem;
  padding-left: 1.15rem;
  color: ${({ theme }) => theme.colors.mutedText};

  li::marker {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
`;

export const Tag = styled.span`
  padding: 0.42rem 0.62rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.mutedText};
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.78rem;
  font-weight: 700;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 900;
  font-size: 0.92rem;

  &:hover {
    text-decoration: underline;
  }
`;
