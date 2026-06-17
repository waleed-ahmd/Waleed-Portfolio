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
    technologies: ['React', 'TypeScript', 'Solidity', 'Web3.js', 'MetaMask'],
    imageLabel: 'WEB3 DAPP',
    github: 'https://github.com/your-github-username/web3-dapp',
    liveDemo: '#',
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
    technologies: ['React', 'Kotlin', 'Blockchain', 'Firebase', 'Smart Contracts'],
    imageLabel: 'MESSAGE VERIFY',
    github: 'https://github.com/your-github-username/blockchain-message-app',
    liveDemo: '#',
  },
  {
    id: 3,
    title: 'HeimGuard Profile Management System',
    description:
      'A profile management utility designed to be integrated into different applications, with a planned migration from Brightspot-based APIs to Rust APIs backed by AWS DynamoDB.',
    features: [
      'Profile management',
      'Access control concepts',
      'API-based architecture',
      'DynamoDB storage design',
      'CMS-independent backend planning',
    ],
    technologies: ['Rust', 'AWS DynamoDB', 'Brightspot CMS', 'API Design', 'Backend Architecture'],
    imageLabel: 'HEIMGUARD',
    github: '#',
    liveDemo: '#',
  },
  {
    id: 4,
    title: 'Brightspot CMS Industry Projects',
    description:
      'Industry-based experience working with Brightspot CMS on real client projects involving publishing workflows, content modules, testing, and frontend/backend integration.',
    features: [
      'CMS publishing workflows',
      'Editorial content support',
      'Content module testing',
      'Frontend/backend integration',
      'Client-facing project experience',
    ],
    technologies: ['Brightspot CMS', 'Java', 'HTML', 'CSS', 'CMS Workflows'],
    imageLabel: 'BRIGHTSPOT',
    github: '#',
    liveDemo: '#',
  },
];
