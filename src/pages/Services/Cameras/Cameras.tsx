import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../components/ui';

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

const CameraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CameraCard = styled(Card)`
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CameraPreview = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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

  .status {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    background: rgba(16, 185, 129, 0.9);
    color: white;
  }

  .status.offline {
    background: rgba(239, 68, 68, 0.9);
  }
`;

const CameraInfo = styled.div`
  padding: 24px;
`;

const CameraTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px 0;
`;

const CameraLocation = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0 0 12px 0;
`;

const CameraDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;

const CameraType = styled.span`
  font-size: 12px;
  color: #64748b;
  background: #f1f5f9;
  padding: 4px 8px;
  border-radius: 6px;
`;

const CameraButton = styled.button`
  background: #62A744;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #528F39;
  }
`;

const StatsSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 24px 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;

  .number {
    font-size: 32px;
    font-weight: 700;
    color: #62A744;
    margin: 0 0 8px 0;
  }

  .label {
    font-size: 14px;
    color: #64748b;
    margin: 0;
  }
`;

const FilterSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 8px;
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
    background: #f1f5f9;
    color: #64748b;

    &:hover {
      background: #e2e8f0;
    }
  `}
`;

export const Cameras: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Камеры видеонаблюдения</PageTitle>
          <PageSubtitle>
            Сеть камер видеонаблюдения для контроля дорожной ситуации и обеспечения безопасности
          </PageSubtitle>
        </PageHeader>

        <StatsSection>
          <SectionTitle>Статистика камер</SectionTitle>
          <StatsGrid>
            <StatItem>
              <div className="number">45</div>
              <div className="label">Всего камер</div>
            </StatItem>
            <StatItem>
              <div className="number">42</div>
              <div className="label">Активных</div>
            </StatItem>
            <StatItem>
              <div className="number">3</div>
              <div className="label">На обслуживании</div>
            </StatItem>
            <StatItem>
              <div className="number">98%</div>
              <div className="label">Время работы</div>
            </StatItem>
            <StatItem>
              <div className="number">24/7</div>
              <div className="label">Мониторинг</div>
            </StatItem>
            <StatItem>
              <div className="number">HD</div>
              <div className="label">Качество записи</div>
            </StatItem>
          </StatsGrid>
        </StatsSection>

        <FilterSection>
          <SectionTitle>Фильтр камер</SectionTitle>
          <FilterTabs>
            <FilterTab $active={true}>Все камеры</FilterTab>
            <FilterTab $active={false}>Перекрестки</FilterTab>
            <FilterTab $active={false}>Пешеходные переходы</FilterTab>
            <FilterTab $active={false}>Магистрали</FilterTab>
            <FilterTab $active={false}>Торговые зоны</FilterTab>
          </FilterTabs>
        </FilterSection>

        <CameraGrid>
          <CameraCard>
            <CameraPreview>
              <div className="status">Онлайн</div>
              📹
            </CameraPreview>
            <CameraInfo>
              <CameraTitle>ул. Ленина - ул. Советская</CameraTitle>
              <CameraLocation>Перекресток с интенсивным движением</CameraLocation>
              <CameraDetails>
                <CameraType>Перекресток</CameraType>
                <CameraButton>Смотреть</CameraButton>
              </CameraDetails>
            </CameraInfo>
          </CameraCard>

          <CameraCard>
            <CameraPreview>
              <div className="status">Онлайн</div>
              📹
            </CameraPreview>
            <CameraInfo>
              <CameraTitle>ул. Кирова - ул. Пушкина</CameraTitle>
              <CameraLocation>Пешеходный переход у школы №1</CameraLocation>
              <CameraDetails>
                <CameraType>Пешеходный переход</CameraType>
                <CameraButton>Смотреть</CameraButton>
              </CameraDetails>
            </CameraInfo>
          </CameraCard>

          <CameraCard>
            <CameraPreview>
              <div className="status offline">Офлайн</div>
              📹
            </CameraPreview>
            <CameraInfo>
              <CameraTitle>пр. Гагарина - ул. Багратиона</CameraTitle>
              <CameraLocation>Выезд на федеральную трассу М1</CameraLocation>
              <CameraDetails>
                <CameraType>Магистраль</CameraType>
                <CameraButton disabled>Обслуживание</CameraButton>
              </CameraDetails>
            </CameraInfo>
          </CameraCard>

          <CameraCard>
            <CameraPreview>
              <div className="status">Онлайн</div>
              📹
            </CameraPreview>
            <CameraInfo>
              <CameraTitle>ул. Дзержинского - ул. Крупской</CameraTitle>
              <CameraLocation>Торговая зона "Галерея"</CameraLocation>
              <CameraDetails>
                <CameraType>Торговая зона</CameraType>
                <CameraButton>Смотреть</CameraButton>
              </CameraDetails>
            </CameraInfo>
          </CameraCard>

          <CameraCard>
            <CameraPreview>
              <div className="status">Онлайн</div>
              📹
            </CameraPreview>
            <CameraInfo>
              <CameraTitle>ул. Смоленская - ул. Ленина</CameraTitle>
              <CameraLocation>Центральная площадь города</CameraLocation>
              <CameraDetails>
                <CameraType>Площадь</CameraType>
                <CameraButton>Смотреть</CameraButton>
              </CameraDetails>
            </CameraInfo>
          </CameraCard>

          <CameraCard>
            <CameraPreview>
              <div className="status">Онлайн</div>
              📹
            </CameraPreview>
            <CameraInfo>
              <CameraTitle>ул. Революции - ул. Комсомольская</CameraTitle>
              <CameraLocation>Жилой район "Солнечный"</CameraLocation>
              <CameraDetails>
                <CameraType>Жилой район</CameraType>
                <CameraButton>Смотреть</CameraButton>
              </CameraDetails>
            </CameraInfo>
          </CameraCard>
        </CameraGrid>
      </Container>
    </PageContainer>
  );
};
