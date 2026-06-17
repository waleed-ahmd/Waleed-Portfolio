import styled from 'styled-components';

export const HeroSection = styled.section`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  margin-inline: auto;
  min-height: calc(100vh - 4.7rem);
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 4rem;
  padding: 5rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 2.75rem;
  }
`;

export const Content = styled.div``;

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.mutedText};
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.88rem;
  font-weight: 700;

  &::before {
    content: '';
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.success};
    box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.14);
  }
`;

export const Title = styled.h1`
  margin-top: 1.4rem;
  font-size: clamp(2.7rem, 7vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: -0.07em;

  span {
    display: block;
    color: transparent;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryLight}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const Role = styled.p`
  max-width: 760px;
  margin-top: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 800;
`;

export const Intro = styled.p`
  max-width: 680px;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 1.05rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ActionLink = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.1rem;
  padding: 0 1.25rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme, $variant }) =>
    $variant === 'primary' ? 'transparent' : theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
      : 'rgba(255, 255, 255, 0.05)'};
  color: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.background : theme.colors.text)};
  font-weight: 900;
  box-shadow: ${({ theme, $variant }) =>
    $variant === 'primary' ? `0 14px 34px rgba(34, 211, 238, 0.18)` : 'none'};
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const TechPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 2rem;
`;

export const Pill = styled.span`
  padding: 0.55rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.mutedText};
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.86rem;
  font-weight: 700;
`;

export const Visual = styled.div`
  position: relative;
  min-height: 520px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 420px;
  }
`;

export const CodeCard = styled.div`
  position: absolute;
  inset: 2rem 0 auto auto;
  width: min(100%, 430px);
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.92), rgba(15, 23, 42, 0.72));
  box-shadow: 0 24px 80px ${({ theme }) => theme.colors.shadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: relative;
    inset: auto;
    width: 100%;
  }
`;

export const BrowserDots = styled.div`
  display: flex;
  gap: 0.45rem;
  margin-bottom: 1rem;

  span {
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

export const CodeLine = styled.pre`
  overflow-x: auto;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.88rem;
  line-height: 1.75;

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 800;
  }

  em {
    color: ${({ theme }) => theme.colors.primaryLight};
    font-style: normal;
  }
`;

export const StatsGrid = styled.div`
  position: absolute;
  left: 0;
  bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  width: min(100%, 380px);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: relative;
    bottom: auto;
    width: 100%;
    margin-top: 1rem;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(255, 255, 255, 0.05);

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 0.45rem;
    color: ${({ theme }) => theme.colors.mutedText};
    font-size: 0.88rem;
  }
`;
