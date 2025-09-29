import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { servicesData, serviceCategories } from '../../data/services';
import type { Service } from '../../data/services';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #1a202c;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #1a202c, #62A744);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
`;

const FilterSelect = styled.select`
  padding: 8px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;

  &:focus {
    outline: none;
    border-color: #62A744;
    box-shadow: 0 0 0 3px rgba(98, 167, 68, 0.1);
  }

  &:hover {
    border-color: #cbd5e1;
  }
`;

const SearchSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 8px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #62A744;
    box-shadow: 0 0 0 3px rgba(98, 167, 68, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background: #62A744;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #528F39;
    transform: translateY(-1px);
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border-radius: 12px;
  border: 1px solid #bbf7d0;
  min-width: 120px;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #62A744;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px dashed #e2e8f0;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
`;

const EmptyText = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
`;

const PopularServices = styled.div`
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  margin: 0 0 32px 0;
`;

const PopularGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const PopularCard = styled.div`
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border: 1px solid #bbf7d0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(98, 167, 68, 0.15);
  }
`;

const PopularIcon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
`;

const PopularTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px 0;
`;

const PopularDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
`;

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = useMemo(() => {
    return servicesData.filter(service => {
      const matchesCategory = selectedCategory === 'Все услуги' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const popularServices = servicesData.filter(service => service.isPopular);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleSearch = () => {
    // Поиск уже работает через useMemo
  };

  return (
    <Container>
      <Header>
        <Title>Наши услуги</Title>
        <Subtitle>
          Полный спектр услуг по организации дорожного движения,
          проектированию светофорных объектов и техническому обслуживанию
        </Subtitle>
      </Header>

      <Stats>
        <StatItem>
          <StatNumber>{servicesData.length}</StatNumber>
          <StatLabel>Видов услуг</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>{serviceCategories.length - 1}</StatNumber>
          <StatLabel>Направлений</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>24/7</StatNumber>
          <StatLabel>Поддержка</StatLabel>
        </StatItem>
      </Stats>

      <Controls>
        <FilterSection>
          <FilterLabel htmlFor="category-filter">Категория:</FilterLabel>
          <FilterSelect
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {serviceCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FilterSelect>
        </FilterSection>

        <SearchSection>
          <SearchInput
            type="text"
            placeholder="Поиск услуг..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>
            Найти
          </SearchButton>
        </SearchSection>
      </Controls>

      {filteredServices.length > 0 ? (
        <ServicesGrid>
          {filteredServices.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </ServicesGrid>
      ) : (
        <EmptyState>
          <EmptyIcon>🔍</EmptyIcon>
          <EmptyTitle>Услуги не найдены</EmptyTitle>
          <EmptyText>
            Попробуйте изменить параметры поиска или выберите другую категорию
          </EmptyText>
        </EmptyState>
      )}

      {popularServices.length > 0 && (
        <PopularServices>
          <SectionTitle>Популярные услуги</SectionTitle>
          <PopularGrid>
            {popularServices.map(service => (
              <PopularCard key={service.id} onClick={() => handleServiceClick(service)}>
                <PopularIcon>{service.icon}</PopularIcon>
                <PopularTitle>{service.title}</PopularTitle>
                <PopularDescription>{service.description}</PopularDescription>
              </PopularCard>
            ))}
          </PopularGrid>
        </PopularServices>
      )}

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Container>
  );
};
