import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 720px;
  margin-bottom: 2.75rem;
`;

export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const Heading = styled.h2`
  margin-top: 0.55rem;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
`;

export const Intro = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 1.02rem;
`;
