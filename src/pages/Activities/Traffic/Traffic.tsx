import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../components/ui';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: 32px 24px;
  background: linear-gradient(135deg, #62A744 0%, #4ade80 100%);
  color: white;
  border: none;

  h3 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 16px;
    margin: 0;
    opacity: 0.9;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ContentCard = styled(Card)`
  padding: 32px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 16px 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  p {
    font-size: 14px;
    color: #64748b;
    line-height: 1.6;
    margin: 0 0 16px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 14px;
    color: #64748b;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #62A744;
      font-weight: 600;
    }
  }
`;

const TrafficLightsSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 24px 0;
  text-align: center;
`;

const TrafficLightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

const TrafficLightCard = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #62A744;
    transform: translateY(-2px);
  }

  .icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 14px;
    color: #64748b;
    margin: 0;
  }
`;

export const Traffic: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Организация дорожного движения</PageTitle>
          <PageSubtitle>
            Комплексная система управления транспортными потоками и обеспечение безопасности дорожного движения
          </PageSubtitle>
        </PageHeader>

        <StatsGrid>
          <StatCard>
            <h3>156</h3>
            <p>Светофорных объектов</p>
          </StatCard>
          <StatCard>
            <h3>45</h3>
            <p>Камер видеонаблюдения</p>
          </StatCard>
          <StatCard>
            <h3>98%</h3>
            <p>Исправность оборудования</p>
          </StatCard>
          <StatCard>
            <h3>24/7</h3>
            <p>Мониторинг движения</p>
          </StatCard>
        </StatsGrid>

        <ContentGrid>
          <ContentCard>
            <h3>🚦 Светофорное регулирование</h3>
            <p>Управление светофорными объектами для оптимизации транспортных потоков</p>
            <ul>
              <li>Адаптивное управление по времени суток</li>
              <li>Координация работы перекрестков</li>
              <li>Приоритет общественному транспорту</li>
              <li>Экстренное переключение режимов</li>
            </ul>
          </ContentCard>

          <ContentCard>
            <h3>📊 Аналитика движения</h3>
            <p>Сбор и анализ данных о транспортных потоках для принятия решений</p>
            <ul>
              <li>Подсчет интенсивности движения</li>
              <li>Выявление проблемных участков</li>
              <li>Прогнозирование заторов</li>
              <li>Оптимизация маршрутов</li>
            </ul>
          </ContentCard>

          <ContentCard>
            <h3>🛣️ Дорожная разметка</h3>
            <p>Нанесение и поддержание горизонтальной дорожной разметки</p>
            <ul>
              <li>Разметка пешеходных переходов</li>
              <li>Направляющие линии движения</li>
              <li>Стоп-линии и стоп-зоны</li>
              <li>Специальная разметка</li>
            </ul>
          </ContentCard>

          <ContentCard>
            <h3>🚧 Временные ограничения</h3>
            <p>Организация движения при проведении дорожных работ</p>
            <ul>
              <li>Установка временных знаков</li>
              <li>Организация объездов</li>
              <li>Координация с подрядчиками</li>
              <li>Информирование водителей</li>
            </ul>
          </ContentCard>
        </ContentGrid>

        <TrafficLightsSection>
          <SectionTitle>Типы светофорных объектов</SectionTitle>
          <TrafficLightsGrid>
            <TrafficLightCard>
              <div className="icon">🚦</div>
              <h4>Т-образные перекрестки</h4>
              <p>Светофоры для Т-образных пересечений дорог</p>
            </TrafficLightCard>
            <TrafficLightCard>
              <div className="icon">➕</div>
              <h4>Четырехсторонние</h4>
              <p>Светофоры для четырехсторонних перекрестков</p>
            </TrafficLightCard>
            <TrafficLightCard>
              <div className="icon">🚶</div>
              <h4>Пешеходные</h4>
              <p>Светофоры для пешеходных переходов</p>
            </TrafficLightCard>
            <TrafficLightCard>
              <div className="icon">🚌</div>
              <h4>Транспортные</h4>
              <p>Светофоры для общественного транспорта</p>
            </TrafficLightCard>
            <TrafficLightCard>
              <div className="icon">🚨</div>
              <h4>Аварийные</h4>
              <p>Резервные светофоры для экстренных ситуаций</p>
            </TrafficLightCard>
            <TrafficLightCard>
              <div className="icon">🌙</div>
              <h4>Ночные</h4>
              <p>Светофоры с ночным режимом работы</p>
            </TrafficLightCard>
          </TrafficLightsGrid>
        </TrafficLightsSection>
      </Container>
    </PageContainer>
  );
};
