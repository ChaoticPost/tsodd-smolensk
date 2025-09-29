import React from 'react';
import styled from 'styled-components';
import {
  ActivitiesSection,
  ServicesGrid,
  PartnerBanners,
  NewsSlider
} from './components';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
`;

const Section = styled.section`
  padding: 60px 0;
  
  @media (max-width: 1024px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

const SectionContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    padding: 0 18px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 32px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    gap: 28px;
    margin-bottom: 36px;
  }

  @media (max-width: 768px) {
    gap: 24px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 28px;
  }
`;

const TwoColumnGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;


const MainContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    padding: 32px;
    margin-bottom: 36px;
  }

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 28px;
  }
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%);
  color: white;
  padding: 80px 0;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/src/assets/images/smol_nite.jpg') center/cover;
    opacity: 0.3;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.7) 100%);
    z-index: 2;
  }

  @media (max-width: 1024px) {
    padding: 60px 0;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
    margin-bottom: 30px;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    padding: 0 18px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 24px;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 42px;
    margin: 0 0 20px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 0 0 18px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin: 0 0 16px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0 0 60px;
  text-align: left;
  max-width: 800px;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 19px;
    margin: 0 0 50px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0 0 40px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 0 0 30px;
  }
`;

const QuickLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    gap: 16px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    max-width: 100%;
  }
`;

const QuickLink = styled.a`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 24px 20px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 20px 16px;
    gap: 14px;
  }

  @media (max-width: 768px) {
    padding: 18px 16px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px 14px;
    gap: 10px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: white;

    .text h3,
    .text p {
      color: white;
    }
  }

  .icon {
    font-size: 24px;
    opacity: 0.9;
    flex-shrink: 0;

    @media (max-width: 1024px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .text {
    flex: 1;
    
    h3 {
      margin: 0 0 4px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.3;

      @media (max-width: 1024px) {
        font-size: 15px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 480px) {
        font-size: 13px;
      }
    }

    p {
      margin: 0;
      font-size: 13px;
      opacity: 0.8;
      line-height: 1.4;

      @media (max-width: 1024px) {
        font-size: 12px;
      }

      @media (max-width: 768px) {
        font-size: 11px;
      }

      @media (max-width: 480px) {
        font-size: 10px;
      }
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 24px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 0 0 22px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin: 0 0 18px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  text-align: center;
  margin: 0 0 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 17px;
    margin: 0 0 36px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 32px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 0 28px;
  }
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Центр организации дорожного движения Смоленской области</HeroTitle>
          <HeroSubtitle>
            Мы работаем над тем, чтобы сделать дороги Смоленска безопаснее и комфортнее для всех участников движения
          </HeroSubtitle>

          <QuickLinks>
            <QuickLink href="/road-situation">
              <div className="icon">🚦</div>
              <div className="text">
                <h3>Дорожная обстановка</h3>
                <p>Актуальная информация о ситуации на дорогах</p>
              </div>
            </QuickLink>

            <QuickLink href="/services">
              <div className="icon">⚡</div>
              <div className="text">
                <h3>Онлайн-сервисы</h3>
                <p>Удобные сервисы для водителей и пешеходов</p>
              </div>
            </QuickLink>

            <QuickLink href="/report-problem">
              <div className="icon">📱</div>
              <div className="text">
                <h3>Сообщить о проблеме</h3>
                <p>Оставьте обращение о дорожной ситуации</p>
              </div>
            </QuickLink>
          </QuickLinks>
        </HeroContent>
      </HeroSection>

      {/* Секция "Последние новости" */}
      <Section>
        <SectionContent>
          <MainContent>
            <SectionTitle>Последние новости</SectionTitle>
            <SectionSubtitle>
              Актуальная информация о дорожной ситуации и деятельности ЦОДД
            </SectionSubtitle>

            <NewsSlider />
          </MainContent>
        </SectionContent>
      </Section>

      {/* Секция "Быстрые сервисы" */}
      <Section>
        <SectionContent>
          <MainContent>
            <SectionTitle>Быстрые сервисы</SectionTitle>
            <SectionSubtitle>
              Получите доступ к основным сервисам ЦОДД одним кликом
            </SectionSubtitle>

            <ServicesGrid />
          </MainContent>
        </SectionContent>
      </Section>

      {/* Секция "Партнёрские проекты" */}
      <Section>
        <SectionContent>
          <MainContent>
            <SectionTitle>Партнёрские проекты</SectionTitle>
            <SectionSubtitle>
              Официальные ресурсы и дружественные организации
            </SectionSubtitle>

            <PartnerBanners />
          </MainContent>
        </SectionContent>
      </Section>

      {/* Секция "Деятельность" */}
      <Section>
        <SectionContent>
          <ActivitiesSection />
        </SectionContent>
      </Section>
    </HomeContainer>
  );
};