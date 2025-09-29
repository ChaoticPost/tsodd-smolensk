import React from 'react';
import styled from 'styled-components';
import type { Document } from '../../../data/documents';

const Card = styled.article`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: #62A744;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const Icon = styled.div<{ $type: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 24px;
  flex-shrink: 0;
  background: ${props => {
    switch (props.$type) {
      case 'pdf': return '#fef2f2';
      case 'doc': return '#eff6ff';
      case 'xls': return '#f0fdf4';
      case 'zip': return '#fefce8';
      default: return '#f8fafc';
    }
  }};
  color: ${props => {
    switch (props.$type) {
      case 'pdf': return '#dc2626';
      case 'doc': return '#2563eb';
      case 'xls': return '#16a34a';
      case 'zip': return '#ca8a04';
      default: return '#64748b';
    }
  }};
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = styled.p`
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  color: #64748b;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Category = styled.span`
  background: #f0fdf4;
  color: #62A744;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
`;

const RequiredBadge = styled.div`
  background: #dc2626;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
`;

const DownloadButton = styled.a`
  background: #62A744;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  flex: 1;
  justify-content: center;

  &:hover {
    background: #528F39;
  }
`;

const PreviewButton = styled.button`
  background: transparent;
  color: #62A744;
  border: 1px solid #62A744;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #62A744;
    color: white;
  }
`;

interface DocumentCardProps {
  document: Document;
  onPreview: (document: Document) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document, onPreview }) => {
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'doc': return '📝';
      case 'xls': return '📊';
      case 'zip': return '📦';
      default: return '📄';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }
      return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <Card>
      <Header>
        <Icon $type={document.type}>
          {getFileIcon(document.type)}
        </Icon>
        <Content>
          <Title>{document.title}</Title>
          <Description>{document.description}</Description>
          <Meta>
            <MetaItem>📅 {formatDate(document.date)}</MetaItem>
            <MetaItem>📏 {document.size}</MetaItem>
            <Category>{document.category}</Category>
            {document.isRequired && <RequiredBadge>Обязательный</RequiredBadge>}
          </Meta>
        </Content>
      </Header>
      <Actions>
        <DownloadButton href={document.url} download>
          ⬇️ Скачать
        </DownloadButton>
        <PreviewButton onClick={() => onPreview(document)}>
          👁️ Просмотр
        </PreviewButton>
      </Actions>
    </Card>
  );
};
