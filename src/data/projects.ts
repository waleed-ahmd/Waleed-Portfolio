import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Web3 Decentralized Application',
    description:
      'A blockchain-based decentralized application that allows users to connect their wallet, buy tokens, sell tokens, and interact with smart contracts securely.',
    features: [
      'Wallet connection',
      'Token buying and selling',
      'Smart contract interaction',
      'Transaction handling',
      'Web3 dashboard',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Solidity', 'Web3.js', 'MetaMask'],
    imageLabel: 'WEB3 DAPP',
    github: 'https://github.com/waleed-ahmd/Web3-DApp',
    image: '/projects/Web3-dapp.png',
  },
  {
    id: 2,
    title: 'Blockchain Messaging Verification App',
    description:
      'A messaging application where blockchain is used to verify message authenticity and detect whether messages have been tampered with.',
    features: [
      'Message verification',
      'Tamper detection',
      'Blockchain-backed proof',
      'Secure message history',
      'Clean user interface',
    ],
    technologies: ['React', 'TypeScript', 'Solidity', 'Blockchain', 'Firebase', 'Smart Contracts'],
    imageLabel: 'MESSAGE VERIFY',
    github: 'https://github.com/waleed-ahmd/Epic-Blockchain',
    image: '/projects/Epic-blockchain.png',
  },
  {
    id: 3,
    title: 'GyneSurgery Connect',
    description:
      "An internal web-based healthcare prototype for St. John's Hospital designed to support gynecology pre-assessment, consultant referrals, nurse status updates, and booking-office visibility.",
    features: [
      'Role-based secure login',
      'PID-based patient lookup',
      'Structured pre-assessment forms',
      'Consultant pathway decisions',
      'Audit logs and PDF downloads',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Docker'],
    imageLabel: 'GYNE SURGERY',
    image: '/projects/GyneSurgery-connect.png',
  },
  {
    id: 4,
    title: 'Digital Communication Board',
    description:
      'An offline tablet-based healthcare prototype for rehabilitation settings, replacing paper communication boards with patient-specific care information stored locally on Android tablets.',
    features: [
      'Staff and family-friendly views',
      'Editable patient care details',
      'PIN-protected admin areas',
      'Offline local storage',
      'Template import/export and backups',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Capacitor', 'Android APK', 'Local Storage'],
    imageLabel: 'CARE BOARD',
    image: '/projects/Digital-Communication-Board.png',
  },
];
