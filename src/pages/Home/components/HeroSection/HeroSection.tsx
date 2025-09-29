import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  min-height: 70vh;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: -80px 0 0;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%);

  @media (max-width: 1024px) {
    min-height: 65vh;
    margin: -70px 0 0;
  }

  @media (max-width: 768px) {
    min-height: 60vh;
    margin: -60px 0 0;
  }

  @media (max-width: 480px) {
    min-height: 50vh;
    margin: -50px 0 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/src/assets/images/smol_nite.jpg') center/cover no-repeat;
    z-index: 0;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.7) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 200px 20px 80px;
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: left;

  @media (max-width: 1024px) {
    padding: 180px 20px 70px;
  }

  @media (max-width: 768px) {
    padding: 160px 16px 60px;
  }

  @media (max-width: 480px) {
    padding: 140px 16px 50px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 24px;
  line-height: 1.2;
  max-width: 1000px;

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


export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Центр организации дорожного движения Смоленской области
        </HeroTitle>
        <HeroSubtitle>
          Мы работаем над тем, чтобы сделать дороги Смоленска безопаснее и комфортнее для всех участников движения
        </HeroSubtitle>

        <QuickLinks>
          <QuickLink href="#traffic">
            <div className="icon">🚦</div>
            <div className="text">
              <h3>Дорожная обстановка</h3>
              <p>Актуальная информация о ситуации на дорогах</p>
            </div>
          </QuickLink>
          <QuickLink href="#services">
            <div className="icon">⚡</div>
            <div className="text">
              <h3>Онлайн-сервисы</h3>
              <p>Удобные сервисы для водителей и пешеходов</p>
            </div>
          </QuickLink>
          <QuickLink href="#report">
            <div className="icon">📱</div>
            <div className="text">
              <h3>Сообщить о проблеме</h3>
              <p>Оставьте обращение о дорожной ситуации</p>
            </div>
          </QuickLink>
        </QuickLinks>
      </HeroContent>
    </HeroContainer>
  );
};