import React from 'react';
import styled from 'styled-components';
import type { Service } from '../../../data/services';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #62A744;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #62A744, #4ade80);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border-radius: 12px;
  font-size: 24px;
  flex-shrink: 0;
`;

const TitleSection = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const Category = styled.span`
  display: inline-block;
  background: #f1f5f9;
  color: #64748b;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #62A744;
`;

const Duration = styled.div`
  font-size: 12px;
  color: #64748b;
  background: #f8fafc;
  padding: 4px 8px;
  border-radius: 6px;
`;

const Badges = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

const Badge = styled.span<{ $type: 'popular' | 'urgent' }>`
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => props.$type === 'popular' && `
    background: #fef3c7;
    color: #d97706;
  `}
  
  ${props => props.$type === 'urgent' && `
    background: #fecaca;
    color: #dc2626;
  `}
`;

const Features = styled.div`
  margin-top: 16px;
`;

const FeaturesTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const FeatureItem = styled.li`
  font-size: 12px;
  color: #64748b;
  background: #f8fafc;
  padding: 4px 8px;
  border-radius: 4px;
  border-left: 3px solid #62A744;
`;

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Badges>
        {service.isPopular && <Badge $type="popular">Популярно</Badge>}
        {service.isUrgent && <Badge $type="urgent">Срочно</Badge>}
      </Badges>

      <Header>
        <Icon>{service.icon}</Icon>
        <TitleSection>
          <Title>{service.title}</Title>
          <Category>{service.category}</Category>
          <Description>{service.description}</Description>
        </TitleSection>
      </Header>

      <Features>
        <FeaturesTitle>Основные возможности:</FeaturesTitle>
        <FeaturesList>
          {service.features.slice(0, 3).map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
          {service.features.length > 3 && (
            <FeatureItem>+{service.features.length - 3} еще</FeatureItem>
          )}
        </FeaturesList>
      </Features>

      <Footer>
        <Price>{service.price}</Price>
        <Duration>{service.duration}</Duration>
      </Footer>
    </Card>
  );
};
