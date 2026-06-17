import { Eyebrow, Heading, Intro, Wrapper } from './SectionHeading.styles';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

export const SectionHeading = ({ eyebrow, title, intro }: SectionHeadingProps) => (
  <Wrapper>
    <Eyebrow>{eyebrow}</Eyebrow>
    <Heading>{title}</Heading>
    {intro ? <Intro>{intro}</Intro> : null}
  </Wrapper>
);
