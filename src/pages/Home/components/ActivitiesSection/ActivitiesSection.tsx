import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components/ui';

const SectionContainer = styled.section`
  padding: 80px 0;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const ActivityCard = styled(Card)`
  text-align: center;
  padding: 32px 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, #ebf4ff 0%, #e6fffa 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 12px;
  }

  p {
    font-size: 15px;
    color: #4a5568;
    line-height: 1.6;
    margin: 0 0 20px;
  }

  ul {
    text-align: left;
    margin: 0;
    padding: 0 0 0 20px;
    color: #4a5568;
    font-size: 14px;
    line-height: 1.6;

    li {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const activities = [
    {
        icon: '🚦',
        title: 'Организация дорожного движения',
        description: 'Комплексный подход к управлению транспортными потоками',
        features: [
            'Управление светофорами',
            'Оптимизация схем движения',
            'Мониторинг загруженности'
        ]
    },
    {
        icon: '🅿️',
        title: 'Управление парковками',
        description: 'Создание комфортной парковочной инфраструктуры',
        features: [
            'Платные парковки',
            'Парковочная навигация',
            'Контроль нарушений'
        ]
    },
    {
        icon: '🔄',
        title: 'Интеллектуальные системы',
        description: 'Внедрение современных технологий управления',
        features: [
            'Умные светофоры',
            'Адаптивное управление',
            'Анализ данных'
        ]
    },
    {
        icon: '📱',
        title: 'Информационные сервисы',
        description: 'Удобные цифровые решения для граждан',
        features: [
            'Мобильные приложения',
            'Онлайн-карты',
            'Информирование'
        ]
    }
];

export const ActivitiesSection: React.FC = () => {
    return (
        <SectionContainer>
            <SectionContent>
                <SectionHeader>
                    <SectionTitle>Основные направления деятельности</SectionTitle>
                    <SectionDescription>
                        Мы развиваем транспортную инфраструктуру региона, внедряя современные технологии и создавая комфортную городскую среду
                    </SectionDescription>
                </SectionHeader>

                <ActivitiesGrid>
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} variant="elevated">
                            <div className="icon">{activity.icon}</div>
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                            <ul>
                                {activity.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </ActivityCard>
                    ))}
                </ActivitiesGrid>
            </SectionContent>
        </SectionContainer>
    );
};
