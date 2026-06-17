import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background:
      radial-gradient(circle at top left, rgba(124, 58, 237, 0.22), transparent 32rem),
      radial-gradient(circle at top right, rgba(34, 211, 238, 0.16), transparent 26rem),
      ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  section {
    scroll-margin-top: 5.5rem;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
