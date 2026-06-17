import { profile } from '../../data/profile';
import { FooterWrapper, Inner } from './Footer.styles';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Inner>
        <p>
          © {year} <strong>{profile.name}</strong>. All rights reserved.
        </p>
        <p>Built with React, TypeScript, and styled-components.</p>
      </Inner>
    </FooterWrapper>
  );
};
