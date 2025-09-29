import React from 'react';
import styled from 'styled-components';
import { newsData } from '../../../../data';
import type { NewsCategory } from '../../../../types';

const WidgetContainer = styled.div`
  h2 {
    margin: 0 0 24px 0;
    color: #1a202c;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
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

const AllNewsButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #62A744;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: #528F39;
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 8px 16px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 14px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 5px 12px;
  }
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const NewsItem = styled.a`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  padding: 24px;
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #62A744;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    gap: 18px;
    grid-template-columns: 1fr 180px;
  }

  @media (max-width: 768px) {
    padding: 18px;
    gap: 16px;
    grid-template-columns: 1fr 160px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NewsDate = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  .date {
    color: #62A744;
    font-weight: 600;
    font-size: 14px;
  }

  .category {
    background-color: #f1f5f9;
    color: #64748b;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    .date {
      font-size: 13px;
    }
    .category {
      font-size: 11px;
      padding: 3px 10px;
    }
  }

  @media (max-width: 768px) {
    .date {
      font-size: 12px;
    }
    .category {
      font-size: 10px;
      padding: 2px 8px;
    }
  }
`;

const NewsTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const NewsImage = styled.div<{ $bgColor?: string }>`
  width: 200px;
  height: 120px;
  border-radius: 12px;
  background: ${props => props.$bgColor || '#f1f5f9'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
  }

  @media (max-width: 1024px) {
    width: 180px;
    height: 110px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 100px;
    font-size: 18px;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 150px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    height: 120px;
    font-size: 20px;
  }
`;

const getNewsIcon = (category: NewsCategory): string => {
  switch (category) {
    case 'Перекрытия': return '🚧';
    case 'Аналитика': return '📊';
    case 'Проекты': return '🏗️';
    default: return '📰';
  }
};

const getNewsColor = (category: NewsCategory): string => {
  switch (category) {
    case 'Перекрытия': return '#fee2e2';
    case 'Аналитика': return '#dbeafe';
    case 'Проекты': return '#d1fae5';
    default: return '#f1f5f9';
  }
};

export const NewsWidget: React.FC = () => {
  return (
    <WidgetContainer>
      <h2>
        Последние новости
        <AllNewsButton href="/news">
          Все новости
        </AllNewsButton>
      </h2>

      <NewsList>
        {newsData.slice(0, 2).map((news) => (
          <NewsItem key={news.id} href={`/news/${news.id}`}>
            <NewsContent>
              <NewsDate>
                <span className="date">{(() => {
                  try {
                    const date = new Date(news.date);
                    return isNaN(date.getTime()) ? news.date : date.toLocaleDateString('ru-RU', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    }).replace(/\./g, '.');
                  } catch {
                    return news.date;
                  }
                })()}</span>
                <span className="category">ОДД</span>
              </NewsDate>
              <NewsTitle>{news.title}</NewsTitle>
            </NewsContent>
            <NewsImage $bgColor={getNewsColor(news.category)}>
              {getNewsIcon(news.category)}
            </NewsImage>
          </NewsItem>
        ))}
      </NewsList>
    </WidgetContainer>
  );
};