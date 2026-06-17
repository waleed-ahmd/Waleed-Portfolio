import type { NavItem, SocialLink } from '../types';

export const profile = {
  name: 'Waleed Ahmad',
  role: 'Software Engineer | Full-Stack Developer | Blockchain & Mobile App Developer',
  location: 'Ireland',
  email: 'your.email@example.com',
  resumeUrl: '#',
  shortIntro:
    'I build modern web, mobile, and blockchain-based applications using React, TypeScript, Kotlin, Web3, and backend technologies.',
  about:
    'I am a software engineering student and developer with practical experience in building web applications, mobile apps, blockchain-based systems, and CMS-supported platforms. I enjoy turning ideas into working products through clean code, structured design, and user-focused development.',
  availability: 'Available for internships, placements, freelance projects, and collaboration.',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/your-github-username' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-linkedin-username' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/your-fiverr-username' },
];
