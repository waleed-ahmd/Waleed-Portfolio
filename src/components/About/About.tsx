import { profile } from '../../data/profile';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import {
  AboutSection,
  Avatar,
  Copy,
  Grid,
  Highlight,
  Highlights,
  MetaList,
  ProfileCard,
  ProfileName,
  ProfileRole,
} from './About.styles';

export const About = () => (
  <AboutSection id="about">
    <SectionHeading
      eyebrow="About Me"
      title="A practical developer focused on clean software and real-world products."
      intro="My portfolio is designed to show not only what I know, but what I can actually build."
    />

    <Grid>
      <ProfileCard>
        <Avatar>WA</Avatar>
        <ProfileName>{profile.name}</ProfileName>
        <ProfileRole>{profile.role}</ProfileRole>
        <MetaList>
          <li>
            <span>Location</span>
            <span>{profile.location}</span>
          </li>
          <li>
            <span>Main stack</span>
            <span>React + TypeScript</span>
          </li>
          <li>
            <span>Focus</span>
            <span>Web, Mobile, Web3</span>
          </li>
        </MetaList>
      </ProfileCard>

      <Copy>
        <p>{profile.about}</p>
        <p>
          My experience includes Web3 decentralized applications, blockchain-based message verification,
          Android development with Kotlin, and industry-based software projects involving Brightspot CMS
          and backend architecture.
        </p>
        <Highlights>
          <Highlight>
            <strong>Frontend</strong>
            <span>Responsive interfaces with React, TypeScript, and styled-components.</span>
          </Highlight>
          <Highlight>
            <strong>Web3</strong>
            <span>Wallet connection, smart contracts, and blockchain-based app logic.</span>
          </Highlight>
          <Highlight>
            <strong>Industry</strong>
            <span>CMS workflows, API analysis, testing, and real client project exposure.</span>
          </Highlight>
        </Highlights>
      </Copy>
    </Grid>
  </AboutSection>
);
