import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    icon: 'frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'styled-components'],
  },
  {
    title: 'Backend Development',
    icon: 'backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'API Design'],
  },
  {
    title: 'Mobile Development',
    icon: 'mobile',
    skills: ['Kotlin', 'Android Development', 'Mobile UI', 'App Architecture'],
  },
  {
    title: 'Blockchain / Web3',
    icon: 'web3',
    skills: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethers.js', 'MetaMask'],
  },
  {
    title: 'Databases & Cloud',
    icon: 'database',
    skills: ['MongoDB', 'Firebase', 'SQLite', 'DynamoDB', 'AWS'],
  },
  {
    title: 'Tools & Workflow',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Brightspot CMS'],
  },
];
