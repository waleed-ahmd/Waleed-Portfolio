import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(7, 17, 31, 0.7);
`;

export const Inner = styled.div`
  width: min(100% - 2rem, ${({ theme }) => theme.spacing.container});
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.92rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;
