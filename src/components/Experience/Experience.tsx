import { experience } from '../../data/experience';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import {
  Body,
  Company,
  Description,
  ExperienceSection,
  Highlights,
  Meta,
  Role,
  Timeline,
  TimelineItem,
} from './Experience.styles';

export const Experience = () => (
  <ExperienceSection id="experience">
    <SectionHeading
      eyebrow="Experience"
      title="Practical experience across software projects, CMS workflows, and product-style development."
      intro="This section connects your learning with real development work and gives employers confidence in your practical ability."
    />

    <Timeline>
      {experience.map((item) => (
        <TimelineItem key={`${item.role}-${item.company}`}>
          <Meta>
            <strong>{item.period}</strong>
            <span>{item.company}</span>
          </Meta>
          <Body>
            <Role>{item.role}</Role>
            <Company>{item.company}</Company>
            <Description>{item.description}</Description>
            <Highlights>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </Highlights>
          </Body>
        </TimelineItem>
      ))}
    </Timeline>
  </ExperienceSection>
);
