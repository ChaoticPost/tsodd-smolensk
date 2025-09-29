import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #62A744;
  }
`;

const CardImage = styled.div<{ $gradient: string }>`
  height: 200px;
  background: ${props => props.$gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></svg>') repeat;
    background-size: 20px 20px;
  }
`;

const CardContent = styled.div`
  padding: 32px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 20px;
  font-size: 16px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px;

  li {
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #62A744;
      font-weight: bold;
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
`;

const StatusBadge = styled.span<{ $status: 'active' | 'development' | 'planned' }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => {
    switch (props.$status) {
      case 'active': return '#dcfce7';
      case 'development': return '#fef3c7';
      case 'planned': return '#e0e7ff';
      default: return '#f1f5f9';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'active': return '#166534';
      case 'development': return '#92400e';
      case 'planned': return '#3730a3';
      default: return '#64748b';
    }
  }};
`;

const LearnMoreButton = styled.button`
  background: transparent;
  color: #62A744;
  border: 1px solid #62A744;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #62A744;
    color: white;
  }
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 16px;
  padding: 48px 32px;
  margin-bottom: 60px;
  text-align: center;
  border: 1px solid #bbf7d0;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #166534;
    margin: 0 0 16px;
  }

  p {
    font-size: 18px;
    color: #166534;
    margin: 0 0 32px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  margin-top: 32px;
`;

const StatItem = styled.div`
  text-align: center;

  .number {
    font-size: 36px;
    font-weight: 700;
    color: #166534;
    margin: 0 0 8px;
  }

  .label {
    font-size: 14px;
    color: #166534;
    font-weight: 500;
  }
`;

const activities = [
  {
    id: 'asudd',
    title: 'АСУДД',
    description: 'Автоматизированная система управления дорожным движением',
    icon: '🚦',
    gradient: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
    status: 'active' as const,
    features: [
      'Централизованное управление светофорами',
      'Адаптивное регулирование движения',
      'Мониторинг транспортных потоков',
      'Оптимизация времени ожидания'
    ]
  },
  {
    id: 'road-signs',
    title: 'Установка, замена и обслуживание дорожных знаков',
    description: 'Комплексные работы по установке и поддержанию дорожных знаков',
    icon: '🛑',
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
    status: 'active' as const,
    features: [
      'Установка новых дорожных знаков',
      'Замена устаревших знаков',
      'Плановое техническое обслуживание',
      'Восстановление после повреждений'
    ]
  },
  {
    id: 'traffic-lights',
    title: 'Строительство, реконструкция и обслуживание светофорных объектов',
    description: 'Полный цикл работ со светофорными объектами',
    icon: '🚥',
    gradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    status: 'active' as const,
    features: [
      'Строительство новых светофорных объектов',
      'Реконструкция существующих',
      'Техническое обслуживание',
      'Модернизация оборудования'
    ]
  },
  {
    id: 'photo-video-fixation',
    title: 'Установка и обслуживание комплексов фотовидеофиксации',
    description: 'Системы автоматической фиксации нарушений ПДД',
    icon: '📹',
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
    status: 'active' as const,
    features: [
      'Стационарные комплексы фиксации',
      'Высокое качество видео',
      'Автоматическая обработка данных',
      'Интеграция с центральной системой'
    ]
  },
  {
    id: 'mobile-fixation',
    title: 'Мобильные комплексы фотовидеофиксации',
    description: 'Переносные системы для контроля дорожного движения',
    icon: '🚐',
    gradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    status: 'development' as const,
    features: [
      'Мобильные комплексы',
      'Быстрое развертывание',
      'Автономное питание',
      'Гибкость в размещении'
    ]
  },
  {
    id: 'parkon',
    title: 'ПАРКОН',
    description: 'Система автоматического контроля парковки',
    icon: '🅿️',
    gradient: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    status: 'planned' as const,
    features: [
      'Контроль парковочных мест',
      'Автоматическое начисление штрафов',
      'Интеграция с платежными системами',
      'Мониторинг загруженности'
    ]
  }
];

export const ActivitiesPage: React.FC = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Наши работы</Title>
        <Subtitle>
          Комплексные решения в области организации дорожного движения 
          и обеспечения безопасности на дорогах Смоленской области
        </Subtitle>
      </Header>

      <ActivitiesGrid>
        {activities.map(activity => (
          <ActivityCard key={activity.id}>
            <CardImage $gradient={activity.gradient}>
              {activity.icon}
            </CardImage>
            <CardContent>
              <CardTitle>{activity.title}</CardTitle>
              <CardDescription>{activity.description}</CardDescription>
              <FeaturesList>
                {activity.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </FeaturesList>
              <CardFooter>
                <StatusBadge $status={activity.status}>
                  {activity.status === 'active' && 'Активно'}
                  {activity.status === 'development' && 'В разработке'}
                  {activity.status === 'planned' && 'Планируется'}
                </StatusBadge>
                <LearnMoreButton>Подробнее</LearnMoreButton>
              </CardFooter>
            </CardContent>
          </ActivityCard>
        ))}
      </ActivitiesGrid>

      <StatsSection>
        <h2>Наши достижения</h2>
        <p>Цифры, которые говорят о качестве нашей работы</p>
        <StatsGrid>
          <StatItem>
            <div className="number">350+</div>
            <div className="label">Светофорных объектов</div>
          </StatItem>
          <StatItem>
            <div className="number">1200+</div>
            <div className="label">Камер видеонаблюдения</div>
          </StatItem>
          <StatItem>
            <div className="number">5000+</div>
            <div className="label">Дорожных знаков</div>
          </StatItem>
          <StatItem>
            <div className="number">24/7</div>
            <div className="label">Мониторинг</div>
          </StatItem>
        </StatsGrid>
      </StatsSection>
    </PageContainer>
  );
};
