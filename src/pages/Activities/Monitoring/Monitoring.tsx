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

const MonitoringGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MonitoringCard = styled(Card)`
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #62A744 0%, #4ade80 100%);
  }

  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 12px 0;
  }

  p {
    font-size: 14px;
    color: #64748b;
    line-height: 1.6;
    margin: 0 0 16px 0;
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    background: #f0f9ff;
    color: #0369a1;
  }

  .status.active {
    background: #f0fdf4;
    color: #16a34a;
  }
`;

const CameraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 48px;
`;

const CameraCard = styled(Card)`
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .camera-preview {
    width: 100%;
    height: 150px;
    background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
    }
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

const StatsSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;

  .number {
    font-size: 32px;
    font-weight: 700;
    color: #62A744;
    margin: 0 0 8px 0;
  }

  .label {
    font-size: 14px;
    color: #64748b;
    margin: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 24px 0;
  text-align: center;
`;

export const Monitoring: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Мониторинг дорожного движения</PageTitle>
          <PageSubtitle>
            Система непрерывного наблюдения за дорожной ситуацией и анализ транспортных потоков
          </PageSubtitle>
        </PageHeader>

        <MonitoringGrid>
          <MonitoringCard>
            <div className="icon">📹</div>
            <h3>Видеонаблюдение</h3>
            <p>Круглосуточное наблюдение за дорожной ситуацией через сеть камер</p>
            <div className="status active">Активно</div>
          </MonitoringCard>

          <MonitoringCard>
            <div className="icon">📊</div>
            <h3>Анализ данных</h3>
            <p>Обработка и анализ информации о транспортных потоках в реальном времени</p>
            <div className="status active">Активно</div>
          </MonitoringCard>

          <MonitoringCard>
            <div className="icon">🚨</div>
            <h3>Система оповещений</h3>
            <p>Автоматические уведомления о нарушениях и аварийных ситуациях</p>
            <div className="status active">Активно</div>
          </MonitoringCard>

          <MonitoringCard>
            <div className="icon">📱</div>
            <h3>Мобильное приложение</h3>
            <p>Доступ к информации о дорожной ситуации через мобильное приложение</p>
            <div className="status">В разработке</div>
          </MonitoringCard>
        </MonitoringGrid>

        <StatsSection>
          <SectionTitle>Статистика мониторинга</SectionTitle>
          <StatsGrid>
            <StatItem>
              <div className="number">45</div>
              <div className="label">Камер видеонаблюдения</div>
            </StatItem>
            <StatItem>
              <div className="number">24/7</div>
              <div className="label">Непрерывный мониторинг</div>
            </StatItem>
            <StatItem>
              <div className="number">98%</div>
              <div className="label">Время работы системы</div>
            </StatItem>
            <StatItem>
              <div className="number">15</div>
              <div className="label">Минут время отклика</div>
            </StatItem>
            <StatItem>
              <div className="number">1,200</div>
              <div className="label">Нарушений зафиксировано</div>
            </StatItem>
            <StatItem>
              <div className="number">85%</div>
              <div className="label">Точность распознавания</div>
            </StatItem>
          </StatsGrid>
        </StatsSection>

        <SectionTitle>Камеры видеонаблюдения</SectionTitle>
        <CameraGrid>
          <CameraCard>
            <div className="camera-preview">📹</div>
            <h4>ул. Ленина - ул. Советская</h4>
            <p>Перекресток с интенсивным движением</p>
          </CameraCard>
          <CameraCard>
            <div className="camera-preview">📹</div>
            <h4>ул. Кирова - ул. Пушкина</h4>
            <p>Пешеходный переход у школы</p>
          </CameraCard>
          <CameraCard>
            <div className="camera-preview">📹</div>
            <h4>пр. Гагарина - ул. Багратиона</h4>
            <p>Выезд на федеральную трассу</p>
          </CameraCard>
          <CameraCard>
            <div className="camera-preview">📹</div>
            <h4>ул. Дзержинского - ул. Крупской</h4>
            <p>Торговая зона</p>
          </CameraCard>
          <CameraCard>
            <div className="camera-preview">📹</div>
            <h4>ул. Смоленская - ул. Ленина</h4>
            <p>Центральная площадь</p>
          </CameraCard>
          <CameraCard>
            <div className="camera-preview">📹</div>
            <h4>ул. Революции - ул. Комсомольская</h4>
            <p>Жилой район</p>
          </CameraCard>
        </CameraGrid>
      </Container>
    </PageContainer>
  );
};
