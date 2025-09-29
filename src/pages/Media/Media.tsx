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

const MediaTabs = styled.div`
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

const MediaTab = styled.button<{ $active: boolean }>`
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

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MediaCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const MediaImage = styled.div<{ $bgColor: string }>`
  height: 200px;
  background: ${props => props.$bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
  }
`;

const MediaContent = styled.div`
  padding: 24px;
`;

const MediaDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #62A744;
  font-weight: 600;
`;

const MediaTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const MediaDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 16px 0;
`;

const MediaMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;

const MediaCategory = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const MediaLink = styled.a`
  color: #62A744;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const VideoPlayer = styled.div`
  position: relative;
  height: 200px;
  background: #1a202c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2d3748;
  }

  &::after {
    content: '▶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    background: rgba(98, 167, 68, 0.9);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  height: 200px;
`;

const PhotoItem = styled.div<{ $bgColor: string }>`
  background: ${props => props.$bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
  }
`;

// Mock data
const mediaData = [
  {
    id: '1',
    title: 'Новые светофоры на главных улицах Смоленска',
    description: 'Видеорепортаж о запуске новых интеллектуальных светофорных объектов',
    date: '2025-03-15',
    category: 'Видео',
    type: 'video',
    icon: '🎥'
  },
  {
    id: '2',
    title: 'Фотоотчет: Работы по нанесению дорожной разметки',
    description: 'Галерея фотографий с места проведения работ по обновлению дорожной разметки',
    date: '2025-03-12',
    category: 'Фото',
    type: 'gallery',
    icon: '📸'
  },
  {
    id: '3',
    title: 'Инфографика: Статистика ДТП за 2024 год',
    description: 'Наглядная инфографика с анализом дорожно-транспортных происшествий',
    date: '2025-03-10',
    category: 'Инфографика',
    type: 'image',
    icon: '📊'
  },
  {
    id: '4',
    title: 'Интервью с директором ЦОДД',
    description: 'Эксклюзивное интервью о планах развития транспортной инфраструктуры',
    date: '2025-03-08',
    category: 'Видео',
    type: 'video',
    icon: '🎤'
  },
  {
    id: '5',
    title: 'Документальный фильм о работе ЦОДД',
    description: 'Полнометражный документальный фильм о деятельности центра',
    date: '2025-03-05',
    category: 'Видео',
    type: 'video',
    icon: '🎬'
  },
  {
    id: '6',
    title: 'Фотогалерея: Строительство нового перекрестка',
    description: 'Подробная фотосессия процесса строительства современного перекрестка',
    date: '2025-03-02',
    category: 'Фото',
    type: 'gallery',
    icon: '🏗️'
  }
];

const mediaTypes = ['Все', 'Видео', 'Фото', 'Инфографика'];

const getMediaColor = (type: string): string => {
  switch (type) {
    case 'video': return 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)';
    case 'gallery': return 'linear-gradient(135deg, #2f855a 0%, #38a169 100%)';
    case 'image': return 'linear-gradient(135deg, #805ad5 0%, #9f7aea 100%)';
    default: return 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)';
  }
};

export const Media: React.FC = () => {
  const [activeType, setActiveType] = useState('Все');

  const filteredMedia = activeType === 'Все'
    ? mediaData
    : mediaData.filter(item => item.category === activeType);

  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Медиа</PageTitle>
          <PageSubtitle>
            Фотографии, видео, инфографика и другие медиаматериалы о деятельности ЦОДД
          </PageSubtitle>
        </PageHeader>

        <MediaTabs>
          {mediaTypes.map(type => (
            <MediaTab
              key={type}
              $active={activeType === type}
              onClick={() => setActiveType(type)}
            >
              {type}
            </MediaTab>
          ))}
        </MediaTabs>

        <MediaGrid>
          {filteredMedia.map(media => (
            <MediaCard key={media.id}>
              {media.type === 'video' ? (
                <VideoPlayer>
                  {media.icon}
                </VideoPlayer>
              ) : media.type === 'gallery' ? (
                <PhotoGallery>
                  <PhotoItem $bgColor={getMediaColor(media.type)}>
                    {media.icon}
                  </PhotoItem>
                  <PhotoItem $bgColor={getMediaColor(media.type)}>
                    {media.icon}
                  </PhotoItem>
                  <PhotoItem $bgColor={getMediaColor(media.type)}>
                    {media.icon}
                  </PhotoItem>
                  <PhotoItem $bgColor={getMediaColor(media.type)}>
                    {media.icon}
                  </PhotoItem>
                </PhotoGallery>
              ) : (
                <MediaImage $bgColor={getMediaColor(media.type)}>
                  {media.icon}
                </MediaImage>
              )}

              <MediaContent>
                <MediaDate>
                  📅 {(() => {
                    try {
                      const date = new Date(media.date);
                      return isNaN(date.getTime()) ? media.date : date.toLocaleDateString('ru-RU');
                    } catch {
                      return media.date;
                    }
                  })()}
                </MediaDate>

                <MediaTitle>{media.title}</MediaTitle>
                <MediaDescription>{media.description}</MediaDescription>

                <MediaMeta>
                  <MediaCategory>{media.category}</MediaCategory>
                  <MediaLink href={`/media/${media.id}`}>
                    Смотреть →
                  </MediaLink>
                </MediaMeta>
              </MediaContent>
            </MediaCard>
          ))}
        </MediaGrid>
      </Container>
    </PageContainer>
  );
};
