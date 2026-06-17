import { services } from '../../data/services';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Description, Grid, Number, ServiceCard, ServicesSection, Title } from './Services.styles';

export const Services = () => (
  <ServicesSection id="services">
    <SectionHeading
      eyebrow="Services"
      title="Clear services for clients, Fiverr buyers, and small businesses."
      intro="This section turns the portfolio into a business-facing website, not just a personal profile."
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
