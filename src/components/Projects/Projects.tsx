import { projects } from '../../data/projects';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import {
  Description,
  FeatureList,
  Grid,
  ProjectBody,
  ProjectCard,
  ProjectLink,
  ProjectLinks,
  ProjectTitle,
  ProjectVisual,
  Tag,
  Tags,
} from './Projects.styles';
import { ProjectsSection } from './Projects.styles';

export const Projects = () => (
  <ProjectsSection id="projects">
    <SectionHeading
      eyebrow="Projects"
      title="Featured work that proves the skills, not just lists them."
      intro="Each project is a real-world application that demonstrates my ability to build functional, user-focused software solutions."
    />

    <Grid>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectVisual>
            {project.image ? (
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            ) : (
              <span>{project.imageLabel}</span>
            )}
          </ProjectVisual>

          <ProjectBody>
            <ProjectTitle>{project.title}</ProjectTitle>
            <Description>{project.description}</Description>

            <FeatureList>
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </FeatureList>

            <Tags>
              {project.technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </Tags>

            <ProjectLinks>
              {project.github && project.github !== '#' ? (
                <ProjectLink href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </ProjectLink>
              ) : null}
              {project.liveDemo && project.liveDemo !== '#' ? (
                <ProjectLink href={project.liveDemo} target="_blank" rel="noreferrer">
                  Live Demo
                </ProjectLink>
              ) : null}
            </ProjectLinks>
          </ProjectBody>
        </ProjectCard>
      ))}
    </Grid>
  </ProjectsSection>
);
