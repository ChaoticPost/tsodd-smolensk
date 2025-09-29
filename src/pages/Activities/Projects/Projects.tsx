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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled(Card)`
  padding: 32px;
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

  .status {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
  }

  .status.active {
    background: #f0fdf4;
    color: #16a34a;
  }

  .status.completed {
    background: #f0f9ff;
    color: #0369a1;
  }

  .status.planned {
    background: #fef3c7;
    color: #d97706;
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

  .progress {
    margin-bottom: 16px;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #62A744 0%, #4ade80 100%);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .progress-text {
    font-size: 12px;
    color: #64748b;
    text-align: right;
  }

  .metrics {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
  }

  .metric {
    text-align: center;

    .value {
      font-size: 18px;
      font-weight: 700;
      color: #62A744;
      margin: 0 0 4px 0;
    }

    .label {
      font-size: 12px;
      color: #64748b;
      margin: 0;
    }
  }
`;

const StatsSection = styled.div`
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

const TimelineSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .timeline-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #62A744;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    flex-shrink: 0;
  }

  .timeline-content {
    flex: 1;

    h4 {
      font-size: 16px;
      font-weight: 600;
      color: #1a202c;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 14px;
      color: #64748b;
      margin: 0;
    }
  }

  .timeline-date {
    font-size: 12px;
    color: #64748b;
    background: #f1f5f9;
    padding: 4px 8px;
    border-radius: 6px;
  }
`;

export const Projects: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Проекты ЦОДД</PageTitle>
          <PageSubtitle>
            Крупные инфраструктурные проекты и программы развития дорожной инфраструктуры
          </PageSubtitle>
        </PageHeader>

        <StatsSection>
          <SectionTitle>Статистика проектов</SectionTitle>
          <StatsGrid>
            <StatItem>
              <div className="number">12</div>
              <div className="label">Активных проектов</div>
            </StatItem>
            <StatItem>
              <div className="number">8</div>
              <div className="label">Завершенных проектов</div>
            </StatItem>
            <StatItem>
              <div className="number">156</div>
              <div className="label">Млн руб. инвестиций</div>
            </StatItem>
            <StatItem>
              <div className="number">45</div>
              <div className="label">Новых объектов</div>
            </StatItem>
          </StatsGrid>
        </StatsSection>

        <ProjectsGrid>
          <ProjectCard>
            <div className="status active">В работе</div>
            <div className="icon">🚦</div>
            <h3>Интеллектуальная система управления светофорами</h3>
            <p>Внедрение адаптивной системы управления светофорными объектами с использованием ИИ</p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
              <div className="progress-text">75% завершено</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <div className="value">25</div>
                <div className="label">светофоров</div>
              </div>
              <div className="metric">
                <div className="value">45</div>
                <div className="label">млн руб.</div>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard>
            <div className="status completed">Завершен</div>
            <div className="icon">📹</div>
            <h3>Система видеонаблюдения "Безопасные дороги"</h3>
            <p>Установка камер видеонаблюдения на основных магистралях города</p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
              <div className="progress-text">100% завершено</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <div className="value">45</div>
                <div className="label">камер</div>
              </div>
              <div className="metric">
                <div className="value">32</div>
                <div className="label">млн руб.</div>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard>
            <div className="status active">В работе</div>
            <div className="icon">🛣️</div>
            <h3>Реконструкция перекрестка ул. Ленина - ул. Советская</h3>
            <p>Модернизация крупнейшего перекрестка города с установкой новых светофоров</p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
              <div className="progress-text">60% завершено</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <div className="value">4</div>
                <div className="label">светофора</div>
              </div>
              <div className="metric">
                <div className="value">28</div>
                <div className="label">млн руб.</div>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard>
            <div className="status planned">Планируется</div>
            <div className="icon">🚌</div>
            <h3>Приоритетные полосы для общественного транспорта</h3>
            <p>Создание выделенных полос для автобусов и троллейбусов на основных маршрутах</p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '0%' }}></div>
              </div>
              <div className="progress-text">0% завершено</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <div className="value">15</div>
                <div className="label">км полос</div>
              </div>
              <div className="metric">
                <div className="value">18</div>
                <div className="label">млн руб.</div>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard>
            <div className="status active">В работе</div>
            <div className="icon">📱</div>
            <h3>Мобильное приложение "ЦОДД Смоленск"</h3>
            <p>Разработка мобильного приложения для информирования о дорожной ситуации</p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '40%' }}></div>
              </div>
              <div className="progress-text">40% завершено</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <div className="value">iOS/Android</div>
                <div className="label">платформы</div>
              </div>
              <div className="metric">
                <div className="value">12</div>
                <div className="label">млн руб.</div>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard>
            <div className="status completed">Завершен</div>
            <div className="icon">🌙</div>
            <h3>Освещение пешеходных переходов</h3>
            <p>Установка светодиодного освещения на нерегулируемых пешеходных переходах</p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
              <div className="progress-text">100% завершено</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <div className="value">25</div>
                <div className="label">переходов</div>
              </div>
              <div className="metric">
                <div className="value">8</div>
                <div className="label">млн руб.</div>
              </div>
            </div>
          </ProjectCard>
        </ProjectsGrid>

        <TimelineSection>
          <SectionTitle>Хронология проектов</SectionTitle>
          <TimelineItem>
            <div className="timeline-icon">✅</div>
            <div className="timeline-content">
              <h4>Завершена установка камер видеонаблюдения</h4>
              <p>Установлено 45 камер на основных магистралях города</p>
            </div>
            <div className="timeline-date">Декабрь 2024</div>
          </TimelineItem>
          <TimelineItem>
            <div className="timeline-icon">🚦</div>
            <div className="timeline-content">
              <h4>Запуск интеллектуальных светофоров</h4>
              <p>Внедрена адаптивная система управления на 15 перекрестках</p>
            </div>
            <div className="timeline-date">Октябрь 2024</div>
          </TimelineItem>
          <TimelineItem>
            <div className="timeline-icon">🌙</div>
            <div className="timeline-content">
              <h4>Завершено освещение пешеходных переходов</h4>
              <p>Установлено светодиодное освещение на 25 переходах</p>
            </div>
            <div className="timeline-date">Август 2024</div>
          </TimelineItem>
          <TimelineItem>
            <div className="timeline-icon">📊</div>
            <div className="timeline-content">
              <h4>Внедрена система аналитики</h4>
              <p>Запущена платформа для анализа дорожного движения</p>
            </div>
            <div className="timeline-date">Июнь 2024</div>
          </TimelineItem>
        </TimelineSection>
      </Container>
    </PageContainer>
  );
};
