import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { newsData, newsCategories, type NewsItem } from '../../data/news';
import { NewsCard } from './components/NewsCard';
import { NewsModal } from './components/NewsModal';

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
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const NoNews = styled.div`
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;

const PageButton = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active ? '#62A744' : 'white'};
  color: ${props => props.$active ? 'white' : '#475569'};
  border: 1px solid ${props => props.$active ? '#62A744' : '#e2e8f0'};
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;

  &:hover:not(:disabled) {
    background: ${props => props.$active ? '#528F39' : '#f8fafc'};
    border-color: ${props => props.$active ? '#528F39' : '#d1d5db'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ITEMS_PER_PAGE = 6;

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    return newsData.filter(news => 
      selectedCategory === 'Все' || news.category === selectedCategory
    );
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageContainer>
      <Header>
        <Title>Новости</Title>
        <Subtitle>
          Актуальная информация о деятельности Центра организации дорожного движения
        </Subtitle>
      </Header>

      <Filters>
        {newsCategories.map(category => (
          <FilterButton
            key={category}
            $active={selectedCategory === category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </FilterButton>
        ))}
      </Filters>

      {paginatedNews.length > 0 ? (
        <>
          <NewsGrid>
            {paginatedNews.map(news => (
              <NewsCard
                key={news.id}
                news={news}
                onClick={setSelectedNews}
              />
            ))}
          </NewsGrid>

          {totalPages > 1 && (
            <Pagination>
              <PageButton
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ←
              </PageButton>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <PageButton
                  key={page}
                  $active={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PageButton>
              ))}
              
              <PageButton
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                →
              </PageButton>
            </Pagination>
          )}
        </>
      ) : (
        <NoNews>
          <h3>Новости не найдены</h3>
          <p>По выбранной категории новостей пока нет</p>
        </NoNews>
      )}

      {selectedNews && (
        <NewsModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </PageContainer>
  );
};
