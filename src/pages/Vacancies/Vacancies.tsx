import React, { useState } from 'react';
import styled from 'styled-components';
import { vacancies } from '../../data/vacancies';
import { VacancyCard } from './components/VacancyCard';
import { VacancyModal } from './components/VacancyModal';
import type { Vacancy } from '../../data/vacancies';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

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

const VacanciesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const NoVacancies = styled.div`
  text-align: center;
  padding: 40px;
  background: #f7fafc;
  border-radius: 12px;
  color: #4a5568;
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 16px;
  }

  p {
    color: #4a5568;
    margin: 0 0 24px;
    line-height: 1.6;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #62A744;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #528F39;
  }
`;

export const VacanciesPage: React.FC = () => {
    const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

    return (
        <PageContainer>
            <Header>
                <Title>Вакансии</Title>
                <Subtitle>
                    Присоединяйтесь к команде профессионалов, которые делают дороги Смоленска безопаснее и комфортнее
                </Subtitle>
            </Header>

            {vacancies.length > 0 ? (
                <VacanciesGrid>
                    {vacancies.map(vacancy => (
                        <VacancyCard
                            key={vacancy.id}
                            vacancy={vacancy}
                            onClick={() => setSelectedVacancy(vacancy)}
                        />
                    ))}
                </VacanciesGrid>
            ) : (
                <NoVacancies>
                    В данный момент нет открытых вакансий
                </NoVacancies>
            )}

            <ContactSection>
                <h2>Не нашли подходящую вакансию?</h2>
                <p>
                    Отправьте нам своё резюме, и мы свяжемся с вами, когда появится подходящая позиция
                </p>
                <ContactButton href="mailto:hr@codd.smolensk.ru">
                    ✉️ Отправить резюме
                </ContactButton>
            </ContactSection>

            {selectedVacancy && (
                <VacancyModal
                    vacancy={selectedVacancy}
                    onClose={() => setSelectedVacancy(null)}
                />
            )}
        </PageContainer>
    );
};
