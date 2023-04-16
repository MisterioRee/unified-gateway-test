import React, { ReactNode } from 'react';
import {
  CardDescription,
  CardFooter,
  CardIcon,
  CardTitle,
  CardTitleContainer,
  ServiceCardContainer,
} from './ServiceCards.styles';
import Button from 'components/common/Button/Button';

export type ServiceCardType = {
  title: string;
  description: string;
  icon: ReactNode;
};

const ServiceCards: React.FC<ServiceCardType> = ({
  title,
  description,
  icon,
}) => {
  return (
    <ServiceCardContainer>
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
        <CardIcon>{icon}</CardIcon>
      </CardTitleContainer>
      <CardDescription>{description}</CardDescription>
      <CardFooter>
        <Button type="link">
          <b>Learn more</b>
        </Button>
      </CardFooter>
    </ServiceCardContainer>
  );
};

export default ServiceCards;
