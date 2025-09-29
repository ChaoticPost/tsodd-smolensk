import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 20px;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
      content: '';
      width: 4px;
      height: 24px;
      background: #62A744;
      border-radius: 2px;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0 0 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0 0 0 20px;
    
    li {
      color: #4a5568;
      line-height: 1.6;
      margin-bottom: 8px;
    }
  }
`;

const GoalsSection = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  border: 1px solid #bbf7d0;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #166534;
    margin: 0 0 24px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

    li {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      position: relative;
      padding-left: 50px;

      &::before {
        content: '🎯';
        position: absolute;
        left: 20px;
        top: 20px;
        font-size: 20px;
      }

      strong {
        color: #166534;
        font-weight: 600;
        display: block;
        margin-bottom: 8px;
      }
    }
  }
`;

const ActivitiesSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 24px;
    text-align: center;
  }

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 24px;

    .activity-item {
      background: #f8fafc;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #62A744;
      position: relative;
      padding-left: 50px;

      &::before {
        content: '⚙️';
        position: absolute;
        left: 20px;
        top: 20px;
        font-size: 18px;
      }

      strong {
        color: #1a202c;
        font-weight: 600;
        display: block;
        margin-bottom: 8px;
      }

      p {
        color: #64748b;
        font-size: 14px;
        margin: 0;
        line-height: 1.5;
      }
    }
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 60px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: #62A744;
  }

  .icon {
    font-size: 32px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #62A744;
    margin: 0 0 8px;
  }

  p {
    color: #64748b;
    font-size: 14px;
    margin: 0;
  }
`;

export const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <Header>
        <Title>О центре</Title>
        <Subtitle>
          Смоленское областное государственное бюджетное учреждение 
          «Центр организации дорожного движения»
        </Subtitle>
      </Header>

      <Content>
        <Section>
          <h2>История создания</h2>
          <p>
            Смоленское областное государственное бюджетное учреждение «Центр организации дорожного движения» 
            создано путем выделения из состава смоленского областного государственного бюджетного учреждения 
            «Управление областных автомобильных дорог» филиала «Специализированный монтажно-эксплуатационный участок».
          </p>
          <p>
            Предметом деятельности организации является совершенствование и оптимизация системы управления 
            в сфере транспорта на территории Смоленской области, а также выполнение мероприятий по организации 
            дорожного движения на территории Смоленской области.
          </p>
        </Section>

        <Section>
          <h2>Наша миссия</h2>
          <p>
            Мы работаем над тем, чтобы сделать дороги Смоленска безопаснее и комфортнее для всех участников движения. 
            Наша деятельность направлена на повышение эффективности транспортной системы региона и обеспечение 
            безопасности дорожного движения.
          </p>
          <p>
            Используя современные технологии и инновационные решения, мы создаем интеллектуальную транспортную 
            инфраструктуру, которая отвечает потребностям жителей и гостей Смоленской области.
          </p>
        </Section>
      </Content>

      <GoalsSection>
        <h2>Цели деятельности</h2>
        <ul>
          <li>
            <strong>Повышение безопасности дорожного движения</strong>
            Обеспечение эффективности организации дорожного движения на территории Смоленской области
          </li>
          <li>
            <strong>Развитие технических средств фиксации</strong>
            Обеспечение развития и эксплуатации специальных технических средств фиксации нарушений ПДД
          </li>
          <li>
            <strong>Поддержание дорожной инфраструктуры</strong>
            Поддержание технико-эксплуатационных показателей состояния автомобильных дорог
          </li>
          <li>
            <strong>Внедрение интеллектуальных систем</strong>
            Внедрение и обеспечение функционирования интеллектуальных транспортных систем
          </li>
        </ul>
      </GoalsSection>

      <ActivitiesSection>
        <h2>Основные виды деятельности</h2>
        <div className="activities-grid">
          <div className="activity-item">
            <strong>Установка и содержание ТСОДД</strong>
            <p>Установка, замена, демонтаж и содержание технических средств организации дорожного движения</p>
          </div>
          <div className="activity-item">
            <strong>Дорожная разметка</strong>
            <p>Нанесение и восстановление элементов горизонтальной и вертикальной дорожной разметки</p>
          </div>
          <div className="activity-item">
            <strong>Светофорные объекты</strong>
            <p>Строительство, реконструкция и техническое перевооружение светофорных объектов</p>
          </div>
          <div className="activity-item">
            <strong>Планирование и проектирование</strong>
            <p>Планирование, проектирование и внедрение программ и схем организации дорожного движения</p>
          </div>
          <div className="activity-item">
            <strong>Моделирование движения</strong>
            <p>Моделирование дорожного движения и мониторинг транспортных потоков</p>
          </div>
          <div className="activity-item">
            <strong>Автоматизированные системы</strong>
            <p>Внедрение и обслуживание автоматизированных систем управления дорожным движением</p>
          </div>
          <div className="activity-item">
            <strong>Фотовидеофиксация</strong>
            <p>Обеспечение технического обслуживания и эксплуатации средств фотовидеофиксации</p>
          </div>
          <div className="activity-item">
            <strong>Обработка информации</strong>
            <p>Организация работ по проведению полного цикла обработки информации с камер</p>
          </div>
        </div>
      </ActivitiesSection>

      <StatsSection>
        <StatCard>
          <div className="icon">🚦</div>
          <h3>350+</h3>
          <p>Светофорных объектов</p>
        </StatCard>
        <StatCard>
          <div className="icon">📹</div>
          <h3>1200+</h3>
          <p>Камер видеонаблюдения</p>
        </StatCard>
        <StatCard>
          <div className="icon">🛣️</div>
          <h3>24/7</h3>
          <p>Мониторинг дорог</p>
        </StatCard>
        <StatCard>
          <div className="icon">⚡</div>
          <h3>100%</h3>
          <p>Автоматизация процессов</p>
        </StatCard>
      </StatsSection>
    </PageContainer>
  );
};
