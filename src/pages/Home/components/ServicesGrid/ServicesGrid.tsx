import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { quickServices } from '../../../../data';

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const ServiceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 0;
  background: white;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  min-height: 200px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #62A744;
  }

  @media (max-width: 1024px) {
    min-height: 180px;
  }

  @media (max-width: 768px) {
    min-height: 160px;
  }

  @media (max-width: 480px) {
    min-height: 140px;
  }
`;

const ServiceTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ServiceDescription = styled.p`
  margin: 0 0 20px 0;
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
  flex: 1;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px 24px 0 24px;

  @media (max-width: 1024px) {
    padding: 20px 20px 0 20px;
  }

  @media (max-width: 768px) {
    padding: 18px 18px 0 18px;
  }

  @media (max-width: 480px) {
    padding: 16px 16px 0 16px;
  }
`;

const ServiceVisual = styled.div<{ $visual: string }>`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: auto;

  ${({ $visual }) => {
    switch ($visual) {
      case 'phone-app':
        return `
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        `;
      case 'phone-login':
        return `
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        `;
      case 'speech-bubble':
        return `
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
        `;
      case 'people-chat':
        return `
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
        `;
      default:
        return `
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        `;
    }
  }}

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 70px;
  }
`;


const ServiceIcon = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  opacity: 0.7;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
`;

export const ServicesGrid: React.FC = () => {
  return (
    <ServicesContainer>
      {quickServices.map((service) => (
        <ServiceCard key={service.id} to={service.url}>
          <ServiceContent>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceContent>

          <ServiceVisual $visual={service.visual} />
          <ServiceIcon>
            {service.icon}
          </ServiceIcon>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
};
