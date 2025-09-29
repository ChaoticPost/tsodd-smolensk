import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a202c;
  color: #e2e8f0;
  padding: 80px 0 40px;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 60px 0 32px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 40px;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 12px;
  }

  a {
    color: #a0aec0;
    text-decoration: none;
    transition: color 0.2s ease;
    font-size: 15px;

    &:hover {
      color: #ffffff;
    }
  }
`;

const ContactInfo = styled.div`
  p {
    margin: 0 0 16px;
    color: #a0aec0;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon {
    color: #4299e1;
    font-size: 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  a {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #2d3748;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: all 0.2s ease;

    &:hover {
      background: #4299e1;
      transform: translateY(-2px);
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #2d3748;
  margin: 0 0 32px;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #718096;
  font-size: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: #718096;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>ЦОДД Смоленской области</h3>
            <ContactInfo>
              <p>
                <span className="icon">📍</span>
                г. Смоленск, ул. Примерная, 1
              </p>
              <p>
                <span className="icon">📞</span>
                +7 (4812) 123-456
              </p>
              <p>
                <span className="icon">📧</span>
                info@tsoddd-smolensk.ru
              </p>
              <p>
                <span className="icon">⚡</span>
                Экстренная служба: 112
              </p>
              <SocialLinks>
                <a href="#vk" aria-label="ВКонтакте">🌐</a>
                <a href="#telegram" aria-label="Telegram">📱</a>
                <a href="#youtube" aria-label="YouTube">📺</a>
              </SocialLinks>
            </ContactInfo>
          </FooterSection>

          <FooterSection>
            <h3>О нас</h3>
            <ul>
              <li><a href="#about">О ЦОДД</a></li>
              <li><a href="#mission">Миссия и цели</a></li>
              <li><a href="#structure">Структура</a></li>
              <li><a href="#vacancies">Вакансии</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Деятельность</h3>
            <ul>
              <li><a href="#traffic">Организация движения</a></li>
              <li><a href="#parking">Парковки</a></li>
              <li><a href="#monitoring">Мониторинг</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#analytics">Аналитика</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Пресс-центр</h3>
            <ul>
              <li><a href="#news">Новости</a></li>
              <li><a href="#press">Пресс-релизы</a></li>
              <li><a href="#media">СМИ о нас</a></li>
              <li><a href="#gallery">Фотогалерея</a></li>
              <li><a href="#contacts">Контакты для СМИ</a></li>
            </ul>
          </FooterSection>
        </FooterGrid>

        <Divider />

        <BottomBar>
          <div>© 2025 ЦОДД Смоленской области. Все права защищены.</div>
          <BottomLinks>
            <a href="#privacy">Политика конфиденциальности</a>
            <a href="#terms">Условия использования</a>
            <a href="#map">Карта сайта</a>
          </BottomLinks>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};