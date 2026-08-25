import type { IconType } from 'react-icons';
import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiHardDrive, FiSmartphone } from 'react-icons/fi';
import { skillGroups } from '../../data/skills';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Grid, Icon, SkillCard, Tag, Tags, Title } from './Skills.styles';
import { SkillsSection } from './Skills.styles';

const skillIcons: Record<string, IconType> = {
  frontend: FiCode,
  backend: FiCpu,
  mobile: FiSmartphone,
  web3: FiGitBranch,
  database: FiDatabase,
  tools: FiHardDrive,
};

export const Skills = () => (
  <SkillsSection id="skills">
    <SectionHeading
      eyebrow="Skills"
      title="A focused technical stack for modern software development."
      intro="From frontend to backend, mobile, and Web3 development, I have a well-rounded skill set that enables me to build complete software solutions."
    />

    <Grid>
      {skillGroups.map((group) => {
        const SkillIcon = skillIcons[group.icon] ?? FiCode;

        return (
          <SkillCard key={group.title}>
            <Icon aria-hidden="true">
              <SkillIcon />
            </Icon>
            <Title>{group.title}</Title>
            <Tags>
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </Tags>
          </SkillCard>
        );
      })}
    </Grid>
  </SkillsSection>
);
