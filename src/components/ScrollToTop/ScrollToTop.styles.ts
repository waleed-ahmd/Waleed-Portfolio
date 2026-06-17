import styled from 'styled-components';

export const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 15;
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadow};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '0.7rem')});
  transition: opacity 180ms ease, transform 180ms ease;
`;
