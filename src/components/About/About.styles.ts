import styled from 'styled-components';

export const AboutSection = styled.section`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileCard = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 20px 60px ${({ theme }) => theme.colors.shadow};
`;

export const Avatar = styled.div`
  display: grid;
  place-items: center;
  width: 7rem;
  height: 7rem;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.background};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  font-size: 2.3rem;
  font-weight: 950;
  letter-spacing: -0.08em;
`;

export const ProfileName = styled.h3`
  margin-top: 1.4rem;
  font-size: 1.65rem;
  letter-spacing: -0.04em;
`;

export const ProfileRole = styled.p`
  margin-top: 0.45rem;
  color: ${({ theme }) => theme.colors.mutedText};
`;

export const MetaList = styled.ul`
  display: grid;
  gap: 0.85rem;
  margin-top: 1.5rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.85rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.mutedText};
  }

  span:last-child {
    font-weight: 800;
  }
`;

export const Copy = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: rgba(255, 255, 255, 0.04);

  p {
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 1.02rem;
  }

  p + p {
    margin-top: 1rem;
  }
`;

export const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Highlight = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(255, 255, 255, 0.04);

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }

  span {
    display: block;
    margin-top: 0.4rem;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 0.9rem;
  }
`;
