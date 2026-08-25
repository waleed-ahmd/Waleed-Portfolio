import { services } from '../../data/services';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Description, Grid, Number, ServiceCard, ServicesSection, Title } from './Services.styles';

export const Services = () => (
  <ServicesSection id="services">
    <SectionHeading
      eyebrow="Services"
      title="Clear services for clients, Fiverr buyers, and small businesses."
      intro="I provide a range of services to help clients and businesses achieve their goals, from web development to blockchain and healthcare solutions."
    />

    <Grid>
      {services.map((service, index) => (
        <ServiceCard key={service.title}>
          <Number>{String(index + 1).padStart(2, '0')}</Number>
          <Title>{service.title}</Title>
          <Description>{service.description}</Description>
        </ServiceCard>
      ))}
    </Grid>
  </ServicesSection>
);
