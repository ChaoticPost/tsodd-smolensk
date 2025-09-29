import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components/ui';

const WidgetContainer = styled.div`
  h2 {
    margin: 0 0 32px 0;
    color: #1a202c;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    
    @media (max-width: 1024px) {
      font-size: 24px;
      margin-bottom: 28px;
    }
    
    @media (max-width: 768px) {
      font-size: 22px;
      margin-bottom: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 18px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

const BannerCard = styled.a`
  display: block;
  padding: 24px;
  border-radius: 16px;
  text-decoration: none;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    
    h3, p, span, div {
      color: white !important;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    min-height: 180px;
  }

  @media (max-width: 768px) {
    padding: 18px;
    min-height: 160px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    min-height: 140px;
  }
`;

const GovernmentBanner = styled(BannerCard)`
  background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
  
  &::after {
    content: '🏛️';
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    opacity: 0.2;
    z-index: 1;
  }
`;

const NationalProjectsBanner = styled(BannerCard)`
  background: linear-gradient(135deg, #c53030 0%, #e53e3e 100%);
  
  &::after {
    content: '🇷🇺';
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    opacity: 0.2;
    z-index: 1;
  }
`;

const SafeRoadsBanner = styled(BannerCard)`
  background: linear-gradient(135deg, #2f855a 0%, #38a169 100%);
  
  &::after {
    content: '📱';
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    opacity: 0.2;
    z-index: 1;
  }
`;

const DigitalEconomyBanner = styled(BannerCard)`
  background: linear-gradient(135deg, #805ad5 0%, #9f7aea 100%);
  
  &::after {
    content: '🚨';
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    opacity: 0.2;
    z-index: 1;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  z-index: 2;
  margin-top: 40px;

  @media (max-width: 1024px) {
    margin-top: 35px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 25px;
  }
`;

const BannerTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const BannerDescription = styled.p`
  margin: 0 0 20px 0;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.9;
  position: relative;
  z-index: 2;
  flex: 1;

  @media (max-width: 1024px) {
    font-size: 13px;
    margin: 0 0 18px 0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 0 16px 0;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin: 0 0 14px 0;
  }
`;

const BannerLink = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  ${BannerCard}:hover &::after {
    transform: translateX(4px);
  }

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

const BannerStatus = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  z-index: 2;

  @media (max-width: 1024px) {
    font-size: 11px;
    padding: 3px 10px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px 8px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 2px 6px;
  }
`;

export const PartnerBanners: React.FC = () => {
  return (
    <BannerGrid>
      <GovernmentBanner
        href="https://www.admin-smolensk.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BannerStatus>Официальный</BannerStatus>
        <BannerContent>
          <BannerTitle>Правительство Смоленской области</BannerTitle>
          <BannerDescription>
            Официальный портал органов власти Смоленской области с актуальной информацией
            о программах развития транспортной инфраструктуры
          </BannerDescription>
          <BannerLink>Перейти на портал</BannerLink>
        </BannerContent>
      </GovernmentBanner>

      <NationalProjectsBanner
        href="https://национальныепроекты.рф/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BannerStatus>Активный</BannerStatus>
        <BannerContent>
          <BannerTitle>Национальные проекты</BannerTitle>
          <BannerDescription>
            Официальный сайт национальных проектов России. Участие в федеральных программах
            по улучшению дорожной инфраструктуры и безопасности движения
          </BannerDescription>
          <BannerLink>Узнать подробнее</BannerLink>
        </BannerContent>
      </NationalProjectsBanner>

      <SafeRoadsBanner
        href="https://www.gosuslugi.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BannerStatus>Популярно</BannerStatus>
        <BannerContent>
          <BannerTitle>Госуслуги</BannerTitle>
          <BannerDescription>
            Единый портал государственных услуг Российской Федерации.
            Получение услуг в сфере транспорта и дорожного хозяйства
          </BannerDescription>
          <BannerLink>Перейти на портал</BannerLink>
        </BannerContent>
      </SafeRoadsBanner>

      <DigitalEconomyBanner
        href="https://www.mchs.gov.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BannerStatus>Безопасность</BannerStatus>
        <BannerContent>
          <BannerTitle>МЧС России</BannerTitle>
          <BannerDescription>
            Министерство по чрезвычайным ситуациям. Информация о безопасности
            дорожного движения и действиях в чрезвычайных ситуациях
          </BannerDescription>
          <BannerLink>Перейти на сайт</BannerLink>
        </BannerContent>
      </DigitalEconomyBanner>
    </BannerGrid>
  );
};
