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

const ImportantBox = styled.div`
  background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
  border: 1px solid #fca5a5;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 40px;
  text-align: center;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #dc2626;
    margin: 0 0 16px;
  }

  p {
    font-size: 18px;
    color: #dc2626;
    margin: 0 0 24px;
  }

  .hotline {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: inline-block;

    .number {
      font-size: 24px;
      font-weight: 700;
      color: #dc2626;
      margin-bottom: 8px;
    }

    .label {
      font-size: 14px;
      color: #64748b;
    }
  }
`;

const DocumentsSection = styled.div`
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
    margin: 0 0 24px;
    text-align: center;
  }

  .documents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .document-item {
    background: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #62A744;
    transition: all 0.2s ease;

    &:hover {
      background: #f0fdf4;
      transform: translateY(-2px);
    }

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #1a202c;
      margin: 0 0 8px;
    }

    p {
      color: #64748b;
      font-size: 14px;
      margin: 0 0 12px;
      line-height: 1.5;
    }

    .download-link {
      color: #62A744;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s ease;

      &:hover {
        color: #528F39;
        text-decoration: underline;
      }
    }
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #bbf7d0;
  text-align: center;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #166534;
    margin: 0 0 16px;
  }

  p {
    font-size: 18px;
    color: #166534;
    margin: 0 0 24px;
  }

  .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-top: 24px;
  }

  .contact-item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    .icon {
      font-size: 24px;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #1a202c;
      margin: 0 0 8px;
    }

    p {
      color: #64748b;
      font-size: 14px;
      margin: 0;
    }

    a {
      color: #62A744;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        color: #528F39;
        text-decoration: underline;
      }
    }
  }
`;

export const AntiCorruptionPage: React.FC = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Противодействие коррупции</Title>
        <Subtitle>
          Информация о мерах по противодействию коррупции в СОГБУ «ЦОДД»
        </Subtitle>
      </Header>

      <ImportantBox>
        <h2>🚨 Горячая линия</h2>
        <p>Сообщить о фактах коррупции можно круглосуточно</p>
        <div className="hotline">
          <div className="number">+7 (4812) 34-56-99</div>
          <div className="label">Телефон доверия</div>
        </div>
      </ImportantBox>

      <Content>
        <Section>
          <h2>
            <span className="icon">📋</span>
            Нормативные документы
          </h2>
          <p>
            Деятельность по противодействию коррупции в СОГБУ «ЦОДД» осуществляется
            в соответствии с федеральным законодательством и нормативными актами
            Смоленской области.
          </p>
          <ul>
            <li>Федеральный закон «О противодействии коррупции»</li>
            <li>Указ Президента РФ «О мерах по противодействию коррупции»</li>
            <li>Положение о комиссии по противодействию коррупции</li>
            <li>Кодекс этики и служебного поведения</li>
          </ul>
        </Section>

        <Section>
          <h2>
            <span className="icon">🎯</span>
            Основные принципы
          </h2>
          <p>
            В своей деятельности по противодействию коррупции мы руководствуемся
            следующими принципами:
          </p>
          <ul>
            <li>Признание, обеспечение и защита основных прав и свобод человека</li>
            <li>Законность</li>
            <li>Публичность и открытость деятельности</li>
            <li>Неотвратимость ответственности за совершение коррупционных правонарушений</li>
            <li>Комплексное использование политических, организационных мер</li>
          </ul>
        </Section>
      </Content>

      <DocumentsSection>
        <h2>Документы по противодействию коррупции</h2>
        <div className="documents-grid">
          <div className="document-item">
            <h3>Положение о комиссии по противодействию коррупции</h3>
            <p>Порядок работы комиссии и рассмотрения обращений</p>
            <a href="#" className="download-link">📄 Скачать PDF</a>
          </div>
          <div className="document-item">
            <h3>Кодекс этики и служебного поведения</h3>
            <p>Правила поведения сотрудников учреждения</p>
            <a href="#" className="download-link">📄 Скачать PDF</a>
          </div>
          <div className="document-item">
            <h3>План противодействия коррупции на 2025 год</h3>
            <p>Мероприятия по профилактике коррупционных правонарушений</p>
            <a href="#" className="download-link">📄 Скачать PDF</a>
          </div>
          <div className="document-item">
            <h3>Отчет о мерах по противодействию коррупции</h3>
            <p>Итоги работы за 2023 год</p>
            <a href="#" className="download-link">📄 Скачать PDF</a>
          </div>
          <div className="document-item">
            <h3>Памятка для граждан</h3>
            <p>Как распознать и противодействовать коррупции</p>
            <a href="#" className="download-link">📄 Скачать PDF</a>
          </div>
          <div className="document-item">
            <h3>Форма обращения о коррупции</h3>
            <p>Бланк для подачи заявления о коррупционных нарушениях</p>
            <a href="#" className="download-link">📄 Скачать PDF</a>
          </div>
        </div>
      </DocumentsSection>

      <ContactSection>
        <h2>Куда обращаться</h2>
        <p>Если вы стали свидетелем коррупционных действий</p>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">📞</div>
            <h3>Телефон доверия</h3>
            <p><a href="tel:+74812345699">+7 (4812) 34-56-99</a></p>
          </div>
          <div className="contact-item">
            <div className="icon">📧</div>
            <h3>Электронная почта</h3>
            <p><a href="mailto:anticorruption@codd.smolensk.ru">anticorruption@codd.smolensk.ru</a></p>
          </div>
          <div className="contact-item">
            <div className="icon">📮</div>
            <h3>Почтовый адрес</h3>
            <p>214000, г. Смоленск, ул. Ленина, д. 1</p>
          </div>
          <div className="contact-item">
            <div className="icon">🌐</div>
            <h3>Онлайн-приемная</h3>
            <p><a href="#">Подать обращение онлайн</a></p>
          </div>
        </div>
      </ContactSection>
    </PageContainer>
  );
};
