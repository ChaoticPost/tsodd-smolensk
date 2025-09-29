import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { documentsData, documentCategories, type Document } from '../../data/documents';
import { DocumentCard } from './components/DocumentCard';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto 24px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const InfoBox = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 32px;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    color: #166534;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px;
  }

  p {
    color: #166534;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 8px;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? '#62A744' : 'white'};
  color: ${props => props.$active ? 'white' : '#475569'};
  border: 1px solid ${props => props.$active ? '#62A744' : '#e2e8f0'};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${props => props.$active ? '#528F39' : '#f8fafc'};
    border-color: ${props => props.$active ? '#528F39' : '#d1d5db'};
  }
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const NoDocuments = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 12px;
  color: #64748b;

  h3 {
    font-size: 20px;
    margin: 0 0 8px;
    color: #475569;
  }

  p {
    margin: 0;
    font-size: 16px;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;

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

export const DocumentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredDocuments = useMemo(() => {
    return documentsData.filter(doc =>
      selectedCategory === 'Все' || doc.category === selectedCategory
    );
  }, [selectedCategory]);

  const requiredDocuments = documentsData.filter(doc => doc.isRequired);
  const totalSize = documentsData.reduce((acc, doc) => {
    const size = parseFloat(doc.size.replace(' МБ', ''));
    return acc + size;
  }, 0);

  const handlePreview = (document: Document) => {
    // В реальном приложении здесь бы открывался просмотрщик документов
    window.open(document.url, '_blank');
  };

  return (
    <PageContainer>
      <Header>
        <Title>Документы</Title>
        <Subtitle>
          Обязательные для публикации документы бюджетного учреждения
        </Subtitle>
        <InfoBox>
          <h3>Информация о публикации документов</h3>
          <p>
            В соответствии с требованиями законодательства РФ, бюджетные учреждения
            обязаны публиковать определенные документы в открытом доступе.
            Все представленные документы актуальны и соответствуют установленным требованиям.
          </p>
        </InfoBox>
      </Header>

      <Filters>
        {documentCategories.map(category => (
          <FilterButton
            key={category}
            $active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </Filters>

      {filteredDocuments.length > 0 ? (
        <DocumentsGrid>
          {filteredDocuments.map(document => (
            <DocumentCard
              key={document.id}
              document={document}
              onPreview={handlePreview}
            />
          ))}
        </DocumentsGrid>
      ) : (
        <NoDocuments>
          <h3>Документы не найдены</h3>
          <p>По выбранной категории документов пока нет</p>
        </NoDocuments>
      )}

      <Stats>
        <StatCard>
          <h3>{documentsData.length}</h3>
          <p>Всего документов</p>
        </StatCard>
        <StatCard>
          <h3>{requiredDocuments.length}</h3>
          <p>Обязательных документов</p>
        </StatCard>
        <StatCard>
          <h3>{totalSize.toFixed(1)} МБ</h3>
          <p>Общий размер</p>
        </StatCard>
        <StatCard>
          <h3>2025</h3>
          <p>Актуальный год</p>
        </StatCard>
      </Stats>
    </PageContainer>
  );
};
