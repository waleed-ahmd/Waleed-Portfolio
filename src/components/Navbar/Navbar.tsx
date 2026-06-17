import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems, profile } from '../../data/profile';
import { Header, Links, Logo, MenuButton, Nav, ResumeButton } from './Navbar.styles';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <Header>
      <Nav aria-label="Main navigation">
        <Logo href="#home" onClick={closeMenu} aria-label="Go to home section">
          <span>WA</span>
          {profile.name}
        </Logo>

        <Links $isOpen={isOpen}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <ResumeButton href={profile.resumeUrl} download={profile.resumeUrl !== '#'}>
            Download CV
          </ResumeButton>
        </Links>

        <MenuButton
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </MenuButton>
      </Nav>
    </Header>
  );
};
