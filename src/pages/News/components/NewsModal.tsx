import React from 'react';
import styled from 'styled-components';
import type { NewsItem } from '../../../data/news';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const Modal = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 20px;
    max-height: calc(100vh - 40px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #4a5568;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: #f7fafc;
    color: #2d3748;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
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
  padding: 32px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const Category = styled.span`
  background: #f0fdf4;
  color: #62A744;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const Date = styled.time`
  color: #64748b;
  font-size: 14px;
`;

const Author = styled.span`
  color: #64748b;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 20px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ContentText = styled.div`
  color: #4a5568;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;

  p {
    margin: 0 0 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
`;

const Tag = styled.span`
  background: #f8fafc;
  color: #475569;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
`;

const ImportantBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #dc2626;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

interface NewsModalProps {
  news: NewsItem;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ news, onClose }) => {
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
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <ImageContainer>
          {news.isImportant && <ImportantBadge>Важно</ImportantBadge>}
          📰
        </ImageContainer>
        <Content>
          <Header>
            <Meta>
              <Category>{news.category}</Category>
              <Date dateTime={news.date}>{formatDate(news.date)}</Date>
              <Author>{news.author}</Author>
            </Meta>
            <Title>{news.title}</Title>
          </Header>
          <ContentText>
            <p>{news.content}</p>
          </ContentText>
          <Tags>
            {news.tags.map(tag => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </Tags>
        </Content>
      </Modal>
    </Overlay>
  );
};
