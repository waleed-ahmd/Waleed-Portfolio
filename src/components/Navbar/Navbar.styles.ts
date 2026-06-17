import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(7, 17, 31, 0.82);
  backdrop-filter: blur(18px);
`;

export const Nav = styled.nav`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  height: 4.7rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 900;
  letter-spacing: -0.03em;

  span {
    display: grid;
    place-items: center;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: ${({ theme }) => theme.radii.sm};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const Links = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.15rem;

  a {
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 0.92rem;
    font-weight: 700;
    transition: color 160ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: 5rem;
    display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
    grid-template-columns: 1fr;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.surfaceSolid};
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadow};
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5rem;
  padding: 0 1rem;
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.text} !important;
  background: rgba(124, 58, 237, 0.18);
  border: 1px solid rgba(167, 139, 250, 0.35);
`;

export const MenuButton = styled.button`
  display: none;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.text};
  background: rgba(255, 255, 255, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    place-items: center;
  }
`;
