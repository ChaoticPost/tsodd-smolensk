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

const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const AnalyticsCard = styled(Card)`
  padding: 32px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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
      font-size: 24px;
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

const ChartSection = styled.div`
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

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ChartCard = styled.div`
  padding: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: #62A744;
    transform: translateY(-2px);
  }

  .chart-icon {
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
    margin: 0 0 12px 0;
  }

  .chart-value {
    font-size: 20px;
    font-weight: 700;
    color: #62A744;
  }
`;

const ReportSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

const ReportCard = styled.div`
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: #f0f9ff;
    transform: translateY(-2px);
  }

  .report-icon {
    font-size: 32px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 12px;
    color: #64748b;
    margin: 0;
  }
`;

export const Analytics: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Аналитика дорожного движения</PageTitle>
          <PageSubtitle>
            Глубокий анализ транспортных потоков и выработка рекомендаций по оптимизации дорожного движения
          </PageSubtitle>
        </PageHeader>

        <AnalyticsGrid>
          <AnalyticsCard>
            <div className="icon">📈</div>
            <h3>Анализ интенсивности</h3>
            <p>Изучение пиковых нагрузок и распределения транспортных потоков по времени суток</p>
            <div className="metrics">
              <div className="metric">
                <div className="value">2,500</div>
                <div className="label">авт/час</div>
              </div>
              <div className="metric">
                <div className="value">+15%</div>
                <div className="label">рост</div>
              </div>
            </div>
          </AnalyticsCard>

          <AnalyticsCard>
            <div className="icon">🚦</div>
            <h3>Оптимизация светофоров</h3>
            <p>Анализ эффективности работы светофорных объектов и предложения по улучшению</p>
            <div className="metrics">
              <div className="metric">
                <div className="value">-20%</div>
                <div className="label">время ожидания</div>
              </div>
              <div className="metric">
                <div className="value">98%</div>
                <div className="label">исправность</div>
              </div>
            </div>
          </AnalyticsCard>

          <AnalyticsCard>
            <div className="icon">⚠️</div>
            <h3>Анализ аварийности</h3>
            <p>Выявление аварийно-опасных участков и разработка мер по повышению безопасности</p>
            <div className="metrics">
              <div className="metric">
                <div className="value">-25%</div>
                <div className="label">ДТП</div>
              </div>
              <div className="metric">
                <div className="value">12</div>
                <div className="label">опасных участков</div>
              </div>
            </div>
          </AnalyticsCard>

          <AnalyticsCard>
            <div className="icon">🌍</div>
            <h3>Экологический анализ</h3>
            <p>Оценка влияния дорожного движения на экологию и разработка экологических программ</p>
            <div className="metrics">
              <div className="metric">
                <div className="value">-10%</div>
                <div className="label">выбросы</div>
              </div>
              <div className="metric">
                <div className="value">85%</div>
                <div className="label">эффективность</div>
              </div>
            </div>
          </AnalyticsCard>
        </AnalyticsGrid>

        <ChartSection>
          <SectionTitle>Аналитические отчеты</SectionTitle>
          <ChartGrid>
            <ChartCard>
              <div className="chart-icon">📊</div>
              <h4>Ежедневный отчет</h4>
              <p>Анализ дорожной ситуации за день</p>
              <div className="chart-value">Готов</div>
            </ChartCard>
            <ChartCard>
              <div className="chart-icon">📅</div>
              <h4>Еженедельный отчет</h4>
              <p>Сводка за неделю с трендами</p>
              <div className="chart-value">Готов</div>
            </ChartCard>
            <ChartCard>
              <div className="chart-icon">📆</div>
              <h4>Ежемесячный отчет</h4>
              <p>Детальный анализ за месяц</p>
              <div className="chart-value">Готов</div>
            </ChartCard>
            <ChartCard>
              <div className="chart-icon">📈</div>
              <h4>Квартальный отчет</h4>
              <p>Комплексный анализ за квартал</p>
              <div className="chart-value">В работе</div>
            </ChartCard>
          </ChartGrid>
        </ChartSection>

        <ReportSection>
          <SectionTitle>Специализированные исследования</SectionTitle>
          <ReportGrid>
            <ReportCard>
              <div className="report-icon">🚌</div>
              <h4>Общественный транспорт</h4>
              <p>Анализ маршрутов и расписаний</p>
            </ReportCard>
            <ReportCard>
              <div className="report-icon">🚶</div>
              <h4>Пешеходные потоки</h4>
              <p>Исследование пешеходного движения</p>
            </ReportCard>
            <ReportCard>
              <div className="report-icon">🚛</div>
              <h4>Грузовые перевозки</h4>
              <p>Анализ грузового транспорта</p>
            </ReportCard>
            <ReportCard>
              <div className="report-icon">🌧️</div>
              <h4>Погодные условия</h4>
              <p>Влияние погоды на движение</p>
            </ReportCard>
            <ReportCard>
              <div className="report-icon">🎯</div>
              <h4>Целевые аудитории</h4>
              <p>Анализ пользователей дорог</p>
            </ReportCard>
            <ReportCard>
              <div className="report-icon">🔮</div>
              <h4>Прогнозирование</h4>
              <p>Модели будущего развития</p>
            </ReportCard>
          </ReportGrid>
        </ReportSection>
      </Container>
    </PageContainer>
  );
};
