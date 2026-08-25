import { experience } from '../../data/experience';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import {
  Body,
  Company,
  CompanyLink,
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
      intro="From internships to freelance projects, I have hands-on experience in building real-world applications and solutions."
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
            {item.companyUrl ? (
              <CompanyLink href={item.companyUrl} target="_blank" rel="noreferrer">
                {item.company}
              </CompanyLink>
            ) : (
              <Company>{item.company}</Company>
            )}
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
