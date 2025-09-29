import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/ui';

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

const FilterTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 8px;
  }
`;

const FilterTab = styled.button<{ $active: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  ${({ $active }) => $active ? `
    background: #62A744;
    color: white;
  ` : `
    background: white;
    color: #64748b;
    border: 1px solid #e2e8f0;

    &:hover {
      background: #f8fafc;
      border-color: #62A744;
      color: #62A744;
    }
  `}
`;

const AnnouncementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const AnnouncementCard = styled(Card)`
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const AnnouncementDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #62A744;
  font-weight: 600;
`;

const AnnouncementTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 12px 0;
  line-height: 1.4;
`;

const AnnouncementDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 16px 0;
`;

const AnnouncementMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;

const AnnouncementCategory = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const ReadMoreLink = styled.a`
  color: #62A744;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
`;

const EmptyStateTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #1a202c;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  margin: 0;
`;

// Mock data
const announcementsData = [
  {
    id: '1',
    title: 'Плановые работы по ремонту светофорных объектов на ул. Ленина',
    description: 'С 15 по 20 марта 2025 года будут проводиться плановые работы по техническому обслуживанию светофорных объектов на участке ул. Ленина от ул. Советской до ул. Гагарина.',
    date: '2025-03-10',
    category: 'Технические работы',
    isUrgent: false
  },
  {
    id: '2',
    title: 'Временное перекрытие движения на перекрестке ул. Кирова и ул. Пушкина',
    description: 'В связи с проведением работ по замене дорожного покрытия движение на перекрестке будет ограничено с 8:00 до 18:00 в период с 18 по 22 марта.',
    date: '2025-03-08',
    category: 'Перекрытия',
    isUrgent: true
  },
  {
    id: '3',
    title: 'Установка новых камер видеонаблюдения на основных магистралях',
    description: 'В рамках программы "Безопасные дороги" планируется установка 15 новых камер видеонаблюдения на основных магистралях города.',
    date: '2025-03-05',
    category: 'Проекты',
    isUrgent: false
  },
  {
    id: '4',
    title: 'Обновление системы управления дорожным движением',
    description: 'С 25 марта будет запущена обновленная система управления дорожным движением, которая позволит более эффективно регулировать потоки транспорта.',
    date: '2025-03-03',
    category: 'Инновации',
    isUrgent: false
  },
  {
    id: '5',
    title: 'Проведение конкурса на лучший проект организации дорожного движения',
    description: 'ЦОДД объявляет конкурс среди студентов и молодых специалистов на лучший проект по организации дорожного движения в историческом центре города.',
    date: '2025-02-28',
    category: 'Конкурсы',
    isUrgent: false
  },
  {
    id: '6',
    title: 'Семинар по безопасности дорожного движения для водителей',
    description: '30 марта в 14:00 в конференц-зале ЦОДД состоится бесплатный семинар по безопасности дорожного движения для всех желающих.',
    date: '2025-02-25',
    category: 'Образование',
    isUrgent: false
  }
];

const categories = ['Все', 'Технические работы', 'Перекрытия', 'Проекты', 'Инновации', 'Конкурсы', 'Образование'];

export const Announcements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredAnnouncements = activeCategory === 'Все'
    ? announcementsData
    : announcementsData.filter(item => item.category === activeCategory);

  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Анонсы</PageTitle>
          <PageSubtitle>
            Актуальная информация о предстоящих мероприятиях, работах и изменениях в организации дорожного движения
          </PageSubtitle>
        </PageHeader>

        <FilterTabs>
          {categories.map(category => (
            <FilterTab
              key={category}
              $active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterTab>
          ))}
        </FilterTabs>

        {filteredAnnouncements.length > 0 ? (
          <AnnouncementsGrid>
            {filteredAnnouncements.map(announcement => (
              <AnnouncementCard key={announcement.id}>
                <AnnouncementDate>
                  📅 {(() => {
                    try {
                      const date = new Date(announcement.date);
                      return isNaN(date.getTime()) ? announcement.date : date.toLocaleDateString('ru-RU');
                    } catch {
                      return announcement.date;
                    }
                  })()}
                  {announcement.isUrgent && <span style={{ color: '#ef4444' }}> • СРОЧНО</span>}
                </AnnouncementDate>

                <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                <AnnouncementDescription>{announcement.description}</AnnouncementDescription>

                <AnnouncementMeta>
                  <AnnouncementCategory>{announcement.category}</AnnouncementCategory>
                  <ReadMoreLink href={`/announcements/${announcement.id}`}>
                    Подробнее →
                  </ReadMoreLink>
                </AnnouncementMeta>
              </AnnouncementCard>
            ))}
          </AnnouncementsGrid>
        ) : (
          <EmptyState>
            <EmptyStateTitle>Анонсы не найдены</EmptyStateTitle>
            <EmptyStateText>
              В выбранной категории пока нет анонсов
            </EmptyStateText>
          </EmptyState>
        )}
      </Container>
    </PageContainer>
  );
};
