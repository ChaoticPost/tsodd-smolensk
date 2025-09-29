import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../../../components/ui';
import { quickServices } from '../../../../data';

const WidgetContainer = styled.div`
  h2 {
    margin: 0 0 24px 0;
    color: #1a202c;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    
    @media (max-width: 1024px) {
      font-size: 22px;
      margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 18px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  color: #718096;
  font-size: 16px;
  margin: -20px 0 32px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: -16px 0 24px 0;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const ServiceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 115, 232, 0.05) 0%, rgba(66, 165, 245, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(26, 115, 232, 0.15);
    border-color: #1a73e8;
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #1a202c;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  position: relative;
  z-index: 1;
  line-height: 1.3;
`;

const ServiceDescription = styled.p`
  margin: 0;
  color: #718096;
  font-size: 14px;
  text-align: center;
  line-height: 1.4;
  position: relative;
  z-index: 1;
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
`;

export const QuickServices: React.FC = () => {
  const popularServices = ['1', '2', '3']; // ID популярных сервисов

  return (
    <ServicesGrid>
      {quickServices.map((service) => (
        <ServiceCard key={service.id} to={service.url}>
          {popularServices.includes(service.id) && (
            <PopularBadge>Популярно</PopularBadge>
          )}
          <ServiceIcon>{service.icon}</ServiceIcon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </ServicesGrid>
  );
};
