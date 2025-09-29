import React from 'react';
import styled from 'styled-components';
import type { NewsItem } from '../../../data/news';

const Card = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: #62A744;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
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
`;

const Content = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
  gap: 12px;
`;

const Category = styled.span`
  background: #f0fdf4;
  color: #62A744;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;

const Date = styled.time`
  color: #64748b;
  font-size: 12px;
  white-space: nowrap;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Excerpt = styled.p`
  color: #4a5568;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Author = styled.span`
  color: #64748b;
  font-size: 12px;
`;

const ReadMore = styled.button`
  background: transparent;
  color: #62A744;
  border: 1px solid #62A744;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #62A744;
    color: white;
  }
`;

const ImportantBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #dc2626;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

interface NewsCardProps {
  news: NewsItem;
  onClick: (news: NewsItem) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news, onClick }) => {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }
      return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <Card onClick={() => onClick(news)}>
      <ImageContainer>
        {news.isImportant && <ImportantBadge>Важно</ImportantBadge>}
        📰
      </ImageContainer>
      <Content>
        <Header>
          <Category>{news.category}</Category>
          <Date dateTime={news.date}>{formatDate(news.date)}</Date>
        </Header>
        <Title>{news.title}</Title>
        <Excerpt>{news.excerpt}</Excerpt>
        <Footer>
          <Author>{news.author}</Author>
          <ReadMore>Читать далее</ReadMore>
        </Footer>
      </Content>
    </Card>
  );
};
