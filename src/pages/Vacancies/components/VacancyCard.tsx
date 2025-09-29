import React from 'react';
import styled from 'styled-components';
import type { Vacancy } from '../../../data/vacancies';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: #62A744;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px;
`;

const Department = styled.div`
  font-size: 14px;
  color: #62A744;
  margin-bottom: 12px;
`;

const Salary = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: transparent;
  color: #62A744;
  border: 1px solid #62A744;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #62A744;
    color: white;
  }
`;

interface VacancyCardProps {
    vacancy: Vacancy;
    onClick: (vacancy: Vacancy) => void;
}

export const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy, onClick }) => {
    return (
        <Card onClick={() => onClick(vacancy)}>
            <Title>{vacancy.title}</Title>
            <Department>{vacancy.department}</Department>
            <Salary>{vacancy.salary}</Salary>
            <Description>{vacancy.description}</Description>
            <Button>Подробнее</Button>
        </Card>
    );
};
