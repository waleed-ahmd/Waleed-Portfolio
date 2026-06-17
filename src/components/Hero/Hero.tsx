import { profile } from '../../data/profile';
import {
  ActionLink,
  Actions,
  BrowserDots,
  CodeCard,
  CodeLine,
  Content,
  HeroSection,
  Intro,
  Pill,
  Role,
  StatCard,
  StatsGrid,
  Status,
  TechPills,
  Title,
  Visual,
} from './Hero.styles';

const techStack = ['React', 'TypeScript', 'styled-components', 'Kotlin', 'Web3', 'AWS'];

export const Hero = () => (
  <HeroSection id="home">
    <Content>
      <Status>{profile.availability}</Status>
      <Title>
        Hi, I’m <span>{profile.name}</span>
      </Title>
      <Role>{profile.role}</Role>
      <Intro>{profile.shortIntro}</Intro>

      <Actions>
        <ActionLink href="#projects" $variant="primary">
          View Projects
        </ActionLink>
        <ActionLink href="#contact" $variant="secondary">
          Contact Me
        </ActionLink>
      </Actions>

      <TechPills aria-label="Main technologies">
        {techStack.map((tech) => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </TechPills>
    </Content>

    <Visual aria-hidden="true">
      <CodeCard>
        <BrowserDots>
          <span />
          <span />
          <span />
        </BrowserDots>
        <CodeLine>
          <code>
            type Developer = {'{'}
  name: <strong>'Waleed Ahmad'</strong>;
  stack: <em>['React', 'TypeScript', 'Web3']</em>;
  focus: <strong>'Practical software solutions'</strong>;
{'}'};

const portfolio: Developer = {'{'}
  name: <strong>'Waleed Ahmad'</strong>,
  stack: <em>['React', 'TypeScript', 'Web3']</em>,
  focus: <strong>'Clean, secure, scalable apps'</strong>,
{'}'};
          </code>
        </CodeLine>
      </CodeCard>

      <StatsGrid>
        <StatCard>
          <strong>4+</strong>
          <span>Featured project areas</span>
        </StatCard>
        <StatCard>
          <strong>6</strong>
          <span>Core technology groups</span>
        </StatCard>
        <StatCard>
          <strong>Web</strong>
          <span>React and TypeScript</span>
        </StatCard>
        <StatCard>
          <strong>Web3</strong>
          <span>Blockchain app focus</span>
        </StatCard>
      </StatsGrid>
    </Visual>
  </HeroSection>
);
