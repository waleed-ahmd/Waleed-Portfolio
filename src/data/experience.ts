import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Healthcare Software Placement',
    company: 'Rapid Innovation Unit, University of Limerick',
    companyUrl: 'https://riu.ie/',
    period: '22 June 2026 - 28 August 2026',
    description:
      "Developed internal healthcare software prototypes for hospital settings, including GyneSurgery Connect for St. John's Hospital and an offline Digital Communication Board for rehabilitation care.",
    highlights: [
      'Built full-stack and offline-first prototypes using React, TypeScript, Node.js/Express, SQLite, Docker, Vite, Capacitor, and Android APK packaging.',
      'Designed secure healthcare workflows covering role-based access, patient lookup, pre-assessment forms, referral decisions, nurse status updates, audit logs, and booking-office visibility.',
      'Prepared prototypes for real-world handover with Docker support, environment configuration, SQL Server lookup integration, manual testing, local data backup, and hospital IT documentation.',
    ],
  },
  {
    role: 'Software Engineering Placement',
    company: 'DevEire',
    companyUrl: 'https://www.deveire.com/',
    period: '23 June 2025 - 19 December 2025',
    description:
      'Worked on private client website projects using Java, Node.js, and Brightspot CMS, supporting development, debugging, QA testing, and website review activities.',
    highlights: [
      'Built and supported three private websites using Brightspot CMS, Java, and Node.js.',
      'Performed debugging, QA testing, and website reviews to identify issues and improve delivery quality.',
      'Wrote and managed test cases in Jira while supporting content workflows and professional software delivery tasks.',
    ],
  },
  {
    role: 'React, TypeScript & Web3 Developer',
    company: 'Personal and Freelance Projects',
    period: 'Ongoing',
    description:
      'Built portfolio-ready web, mobile, and blockchain application concepts focused on clean UI, type-safe code, and real-world functionality.',
    highlights: [
      'Created project structures using reusable components and typed data models.',
      'Worked with wallet connection, smart contract interaction, and app UI flows.',
      'Focused on practical software solutions suitable for clients and employers.',
    ],
  },
];
