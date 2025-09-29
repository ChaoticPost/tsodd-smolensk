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

const ContactCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: #62A744;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 20px;
    display: flex;
    align-items: center;
    gap: 12px;

    .icon {
      font-size: 28px;
    }

    &::after {
      content: '';
      width: 4px;
      height: 24px;
      background: #62A744;
      border-radius: 2px;
    }
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;

    .icon {
      font-size: 20px;
      color: #62A744;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .content {
      flex: 1;

      .label {
        font-size: 14px;
        color: #64748b;
        margin-bottom: 4px;
      }

      .value {
        font-size: 16px;
        color: #1a202c;
        font-weight: 500;
        line-height: 1.4;

        a {
          color: #62A744;
          text-decoration: none;
          transition: color 0.2s ease;

          &:hover {
            color: #528F39;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const MapSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 40px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 20px;
    display: flex;
    align-items: center;
    gap: 12px;

    .icon {
      font-size: 28px;
    }
  }

  .map-placeholder {
    height: 300px;
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #62A744;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="%2362A744" opacity="0.1"/></svg>') repeat;
      background-size: 20px 20px;
    }
  }
`;

const DepartmentsSection = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #bbf7d0;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #166534;
    margin: 0 0 24px;
    text-align: center;
  }

  .departments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .department {
    background: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #1a202c;
      margin: 0 0 12px;
    }

    p {
      color: #64748b;
      font-size: 14px;
      margin: 0 0 12px;
      line-height: 1.5;
    }

    .contact {
      font-size: 14px;
      color: #62A744;
      font-weight: 500;
    }
  }
`;

const WorkingHours = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin-bottom: 40px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 20px;
    display: flex;
    align-items: center;
    gap: 12px;

    .icon {
      font-size: 28px;
    }
  }

  .hours-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .hours-item {
    text-align: center;
    padding: 20px;
    background: #f8fafc;
    border-radius: 8px;

    .day {
      font-size: 16px;
      font-weight: 600;
      color: #1a202c;
      margin-bottom: 8px;
    }

    .time {
      font-size: 14px;
      color: #64748b;
    }
  }
`;

export const ContactsPage: React.FC = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Контакты</Title>
        <Subtitle>
          Свяжитесь с нами для получения информации о наших услугах 
          и решениях в области организации дорожного движения
        </Subtitle>
      </Header>

      <Content>
        <ContactCard>
          <h2>
            <span className="icon">📍</span>
            Основная информация
          </h2>
          <div className="contact-item">
            <span className="icon">🏢</span>
            <div className="content">
              <div className="label">Полное наименование</div>
              <div className="value">
                Смоленское областное государственное бюджетное учреждение 
                «Центр организации дорожного движения»
              </div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <div className="content">
              <div className="label">Адрес</div>
              <div className="value">
                214000, г. Смоленск, ул. Ленина, д. 1
              </div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <div className="content">
              <div className="label">Телефон</div>
              <div className="value">
                <a href="tel:+74812345678">+7 (4812) 34-56-78</a>
              </div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <div className="content">
              <div className="label">Email</div>
              <div className="value">
                <a href="mailto:info@codd.smolensk.ru">info@codd.smolensk.ru</a>
              </div>
            </div>
          </div>
        </ContactCard>

        <ContactCard>
          <h2>
            <span className="icon">👥</span>
            Руководство
          </h2>
          <div className="contact-item">
            <span className="icon">👨‍💼</span>
            <div className="content">
              <div className="label">Директор</div>
              <div className="value">Иванов Иван Иванович</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <div className="content">
              <div className="label">Телефон директора</div>
              <div className="value">
                <a href="tel:+74812345679">+7 (4812) 34-56-79</a>
              </div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <div className="content">
              <div className="label">Email директора</div>
              <div className="value">
                <a href="mailto:director@codd.smolensk.ru">director@codd.smolensk.ru</a>
              </div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">👨‍💼</span>
            <div className="content">
              <div className="label">Заместитель директора</div>
              <div className="value">Петров Петр Петрович</div>
            </div>
          </div>
        </ContactCard>
      </Content>

      <MapSection>
        <h2>
          <span className="icon">🗺️</span>
          Расположение
        </h2>
        <div className="map-placeholder">
          🗺️
        </div>
      </MapSection>

      <WorkingHours>
        <h2>
          <span className="icon">🕒</span>
          Режим работы
        </h2>
        <div className="hours-grid">
          <div className="hours-item">
            <div className="day">Понедельник - Четверг</div>
            <div className="time">09:00 - 18:00</div>
          </div>
          <div className="hours-item">
            <div className="day">Пятница</div>
            <div className="time">09:00 - 17:00</div>
          </div>
          <div className="hours-item">
            <div className="day">Суббота</div>
            <div className="time">10:00 - 15:00</div>
          </div>
          <div className="hours-item">
            <div className="day">Воскресенье</div>
            <div className="time">Выходной</div>
          </div>
        </div>
      </WorkingHours>

      <DepartmentsSection>
        <h2>Наши отделы</h2>
        <div className="departments-grid">
          <div className="department">
            <h3>Отдел организации дорожного движения</h3>
            <p>Планирование и проектирование схем организации движения</p>
            <div className="contact">Тел: +7 (4812) 34-56-80</div>
          </div>
          <div className="department">
            <h3>Отдел технического обслуживания</h3>
            <p>Обслуживание светофорных объектов и технических средств</p>
            <div className="contact">Тел: +7 (4812) 34-56-81</div>
          </div>
          <div className="department">
            <h3>Отдел фотовидеофиксации</h3>
            <p>Установка и обслуживание систем видеонаблюдения</p>
            <div className="contact">Тел: +7 (4812) 34-56-82</div>
          </div>
          <div className="department">
            <h3>Отдел мониторинга</h3>
            <p>Контроль дорожной ситуации и анализ данных</p>
            <div className="contact">Тел: +7 (4812) 34-56-83</div>
          </div>
        </div>
      </DepartmentsSection>
    </PageContainer>
  );
};
