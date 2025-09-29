import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components/ui';
import { trafficStats } from '../../../../data';

const WidgetContainer = styled.div`
  h2 {
    margin: 0 0 24px 0;
    color: #1a202c;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: center;
    justify-content: center;
    
    @media (max-width: 1024px) {
      font-size: 22px;
      margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 18px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
`;

const StatsHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;

  h3 {
    margin: 0 0 8px 0;
    color: #1a202c;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #718096;
    font-size: 14px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    gap: 14px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const StatCard = styled.div<{ $color: string }>`
  text-align: center;
  padding: 24px 20px;
  background: ${({ $color }) => {
    switch ($color) {
      case 'red': return 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)';
      case 'blue': return 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)';
      case 'green': return 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)';
      default: return 'linear-gradient(135deg, #f8f9ff 0%, #f1f3ff 100%)';
    }
  }};
  border-radius: 16px;
  border: 1px solid ${({ $color }) => {
    switch ($color) {
      case 'red': return '#fecaca';
      case 'blue': return '#bfdbfe';
      case 'green': return '#bbf7d0';
      default: return '#e0e7ff';
    }
  }};
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
    background: ${({ $color }) => {
    switch ($color) {
      case 'red': return 'linear-gradient(90deg, #ef4444, #dc2626)';
      case 'blue': return 'linear-gradient(90deg, #3b82f6, #1d4ed8)';
      case 'green': return 'linear-gradient(90deg, #10b981, #059669)';
      default: return 'linear-gradient(90deg, #6366f1, #4f46e5)';
    }
  }};
  }
`;

const StatIcon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
`;

const StatValue = styled.div<{ $color: string }>`
  font-size: 32px;
  font-weight: 700;
  color: ${({ $color }) => {
    switch ($color) {
      case 'red': return '#dc2626';
      case 'blue': return '#1d4ed8';
      case 'green': return '#059669';
      default: return '#1a202c';
    }
  }};
  margin-bottom: 8px;
  line-height: 1;
`;

const StatLabel = styled.div<{ $color: string }>`
  font-size: 14px;
  color: ${({ $color }) => {
    switch ($color) {
      case 'red': return '#dc2626';
      case 'blue': return '#1d4ed8';
      case 'green': return '#059669';
      default: return '#6366f1';
    }
  }};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const StatDescription = styled.div`
  font-size: 12px;
  color: #718096;
  line-height: 1.3;
`;

const StatTrend = styled.div<{ $trend: 'up' | 'down' | 'stable' }>`
  font-size: 12px;
  font-weight: 600;
  margin-top: 8px;
  color: ${({ $trend }) => {
    switch ($trend) {
      case 'up': return '#dc2626';
      case 'down': return '#059669';
      case 'stable': return '#6b7280';
      default: return '#6b7280';
    }
  }};

  &::before {
    content: '${({ $trend }) => {
    switch ($trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      case 'stable': return '→';
      default: return '';
    }
  }}';
    margin-right: 4px;
  }
`;

const PeriodNote = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 12px;
  background-color: #f7fafc;
  border-radius: 8px;
  font-size: 14px;
  color: #4a5568;
  border: 1px solid #e2e8f0;
`;

export const StatsWidget: React.FC = () => {
  return (
    <Card variant="elevated" padding="large">
      <WidgetContainer>
        <h2>📊 Статистика безопасности</h2>

        <StatsHeader>
          <h3>Дорожная обстановка в цифрах</h3>
          <p>Ключевые показатели за текущий период</p>
        </StatsHeader>

        <StatsGrid>
          <StatCard $color="red">
            <StatIcon>🚗</StatIcon>
            <StatLabel $color="red">ДТП</StatLabel>
            <StatValue $color="red">{trafficStats.accidents}</StatValue>
            <StatDescription>Зарегистрировано происшествий</StatDescription>
            <StatTrend $trend="down">-15% к прошлому месяцу</StatTrend>
          </StatCard>

          <StatCard $color="blue">
            <StatIcon>🚛</StatIcon>
            <StatLabel $color="blue">Эвакуации</StatLabel>
            <StatValue $color="blue">{trafficStats.evacuations}</StatValue>
            <StatDescription>Транспорта эвакуировано</StatDescription>
            <StatTrend $trend="up">+8% к прошлому месяцу</StatTrend>
          </StatCard>

          <StatCard $color="green">
            <StatIcon>⚡</StatIcon>
            <StatLabel $color="green">Штрафы</StatLabel>
            <StatValue $color="green">{trafficStats.fines.toLocaleString('ru-RU')}</StatValue>
            <StatDescription>Нарушений зафиксировано</StatDescription>
            <StatTrend $trend="stable">Стабильно</StatTrend>
          </StatCard>
        </StatsGrid>

        <PeriodNote>
          📅 {trafficStats.period} • Данные обновляются ежедневно
        </PeriodNote>
      </WidgetContainer>
    </Card>
  );
};