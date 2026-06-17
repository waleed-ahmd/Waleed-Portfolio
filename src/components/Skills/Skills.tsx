import { skillGroups } from '../../data/skills';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Grid, Icon, SkillCard, Tag, Tags, Title } from './Skills.styles';
import { SkillsSection } from './Skills.styles';

export const Skills = () => (
  <SkillsSection id="skills">
    <SectionHeading
      eyebrow="Skills"
      title="A focused technical stack for modern software development."
      intro="Grouped skills make the portfolio easier to understand for recruiters, clients, and technical interviewers."
    />

    <Grid>
      {skillGroups.map((group) => (
        <SkillCard key={group.title}>
          <Icon>{group.icon}</Icon>
          <Title>{group.title}</Title>
          <Tags>
            {group.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </Tags>
        </SkillCard>
      ))}
    </Grid>
  </SkillsSection>
);
