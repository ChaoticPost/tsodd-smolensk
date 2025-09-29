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
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 60px;
`;

const Section = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #62A744 0%, #22c55e 100%);
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 24px;
    display: flex;
    align-items: center;
    gap: 16px;

    .icon {
      font-size: 32px;
      color: #62A744;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    margin: 0 0 20px;
    font-size: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .highlight {
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    padding: 24px;
    border-radius: 12px;
    border-left: 4px solid #62A744;
    margin: 24px 0;
    
    p {
      margin: 0;
      font-weight: 500;
      color: #166534;
    }
  }
`;

const GoalsSection = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 40px;
  border: 1px solid #bbf7d0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%2362A744" stroke-width="2" opacity="0.2"/><circle cx="50" cy="50" r="20" fill="%2362A744" opacity="0.1"/></svg>') no-repeat center;
    background-size: contain;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #166534;
    margin: 0 0 24px;
    text-align: center;
  }

  .goals-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

    li {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: relative;
      padding-left: 60px;
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &::before {
        content: '🎯';
        position: absolute;
        left: 20px;
        top: 20px;
        font-size: 24px;
      }

      strong {
        color: #166534;
        font-weight: 600;
        display: block;
        margin-bottom: 8px;
        font-size: 16px;
      }

      p {
        color: #4a5568;
        font-size: 14px;
        line-height: 1.6;
        margin: 0;
      }
    }
  }
`;

const ActivitiesSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
  }

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
  }

  .activity-item {
    background: #f8fafc;
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid #3b82f6;
    position: relative;
    padding-left: 50px;
    transition: all 0.2s ease;

    &:hover {
      background: #f1f5f9;
      transform: translateY(-2px);
    }

    &::before {
      content: '⚙️';
      position: absolute;
      left: 20px;
      top: 20px;
      font-size: 18px;
    }

    p {
      color: #4a5568;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }
  }
`;

const Timeline = styled.div`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 40px;
  border: 1px solid #f59e0b;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 4px;
    height: calc(100% - 40px);
    background: #f59e0b;
    border-radius: 2px;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #92400e;
    margin: 0 0 24px;
    text-align: center;
  }

  .timeline-item {
    position: relative;
    padding-left: 40px;
    margin-bottom: 24px;

    &::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 8px;
      width: 12px;
      height: 12px;
      background: #f59e0b;
      border-radius: 50%;
      border: 3px solid white;
    }

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #92400e;
      margin: 0 0 8px;
    }

    p {
      color: #92400e;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }
  }
`;

export const HistoryPage: React.FC = () => {
    return (
        <PageContainer>
            <Header>
                <Title>История создания</Title>
                <Subtitle>
                    Путь становления Центра организации дорожного движения Смоленской области
                </Subtitle>
            </Header>

            <Content>
                <Section>
                    <h2>
                        <span className="icon">🏛️</span>
                        О нас
                    </h2>
                    <p>
                        Смоленское областное государственное бюджетное учреждение «Центр организации дорожного движения»
                        создано путем выделения из состава смоленского областного государственного бюджетного учреждения
                        «Управление областных автомобильных дорог» филиала «Специализированный монтажно-эксплуатационный участок».
                    </p>
                    <div className="highlight">
                        <p>
                            Предметом деятельности организации является совершенствование и оптимизация системы управления
                            в сфере транспорта на территории Смоленской области, а также выполнение мероприятий по организации
                            дорожного движения на территории Смоленской области.
                        </p>
                    </div>
                </Section>

                <Timeline>
                    <h2>Этапы развития</h2>
                    <div className="timeline-item">
                        <h3>Создание филиала</h3>
                        <p>Выделение «Специализированного монтажно-эксплуатационного участка» из состава УОАД</p>
                    </div>
                    <div className="timeline-item">
                        <h3>Образование ЦОДД</h3>
                        <p>Создание самостоятельного учреждения для организации дорожного движения</p>
                    </div>
                    <div className="timeline-item">
                        <h3>Развитие технологий</h3>
                        <p>Внедрение современных систем управления дорожным движением</p>
                    </div>
                </Timeline>

                <GoalsSection>
                    <h2>Цели деятельности СОГБУ «ЦОДД»</h2>
                    <ul className="goals-list">
                        <li>
                            <strong>Повышение безопасности дорожного движения</strong>
                            <p>
                                Обеспечение эффективности организации дорожного движения на территории,
                                в отношении которой Учреждение уполномочено осуществлять деятельность
                                в области организации дорожного движения
                            </p>
                        </li>
                        <li>
                            <strong>Развитие технических средств фиксации</strong>
                            <p>
                                Обеспечение развития и эксплуатации работающих в автоматическом режиме
                                специальных технических средств фиксации нарушений правил дорожного движения,
                                имеющих функции фото-, киносъемки, видеозаписи
                            </p>
                        </li>
                        <li>
                            <strong>Поддержание дорожной инфраструктуры</strong>
                            <p>
                                Поддержание технико-эксплуатационных показателей состояния автомобильных дорог
                                общего пользования на территории Смоленской области на уровне, обеспечивающем
                                бесперебойное движение автотранспорта
                            </p>
                        </li>
                        <li>
                            <strong>Внедрение интеллектуальных систем</strong>
                            <p>
                                Внедрение и обеспечение функционирования интеллектуальных транспортных систем,
                                предусматривающих автоматизацию процессов управления дорожным движением
                                в городских агломерациях
                            </p>
                        </li>
                    </ul>
                </GoalsSection>

                <ActivitiesSection>
                    <h2>Основные виды деятельности</h2>
                    <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '24px' }}>
                        Для достижения указанных целей СОГБУ «ЦОДД» осуществляет следующие основные виды деятельности:
                    </p>
                    <div className="activities-grid">
                        <div className="activity-item">
                            <p>установку, замену, демонтаж и содержание технических средств организации дорожного движения</p>
                        </div>
                        <div className="activity-item">
                            <p>нанесение и восстановление элементов горизонтальной и вертикальной дорожной разметки</p>
                        </div>
                        <div className="activity-item">
                            <p>строительство, реконструкцию и техническое перевооружение светофорных объектов</p>
                        </div>
                        <div className="activity-item">
                            <p>планирование, проектирование и внедрение программ и схем организации дорожного движения</p>
                        </div>
                        <div className="activity-item">
                            <p>моделирование дорожного движения</p>
                        </div>
                        <div className="activity-item">
                            <p>мониторинг дорожного движения</p>
                        </div>
                        <div className="activity-item">
                            <p>внедрение и обслуживание автоматизированных систем управления дорожным движением</p>
                        </div>
                        <div className="activity-item">
                            <p>рассмотрение проектов организации дорожного движения и комплексных схем</p>
                        </div>
                        <div className="activity-item">
                            <p>обеспечение технического обслуживания, ремонта, развития и эксплуатации специальных технических средств</p>
                        </div>
                        <div className="activity-item">
                            <p>организацию работ по проведению полного цикла обработки информации</p>
                        </div>
                    </div>
                </ActivitiesSection>
            </Content>
        </PageContainer>
    );
};
