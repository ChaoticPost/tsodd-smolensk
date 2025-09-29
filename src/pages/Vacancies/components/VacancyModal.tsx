import React from 'react';
import styled from 'styled-components';
import type { Vacancy } from '../../../data/vacancies';

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
  padding: 32px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
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

  &:hover {
    background: #f7fafc;
    color: #2d3748;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px;
  padding-right: 40px;
`;

const Department = styled.div`
  font-size: 16px;
  color: #62A744;
  margin-bottom: 16px;
`;

const Salary = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 24px;
`;

const Section = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 12px;
  }

  ul {
    margin: 0;
    padding: 0 0 0 20px;
    
    li {
      margin-bottom: 8px;
      color: #4a5568;
      line-height: 1.6;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
  }
`;

const Contact = styled.div`
  background: #f7fafc;
  border-radius: 8px;
  padding: 20px;
  margin-top: 32px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 12px;
  }

  p {
    margin: 0 0 8px;
    color: #4a5568;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ApplyButton = styled.button`
  background: #62A744;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background: #528F39;
  }
`;

interface VacancyModalProps {
    vacancy: Vacancy;
    onClose: () => void;
}

export const VacancyModal: React.FC<VacancyModalProps> = ({ vacancy, onClose }) => {
    return (
        <Overlay onClick={onClose}>
            <Modal onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>✕</CloseButton>
                <Title>{vacancy.title}</Title>
                <Department>{vacancy.department}</Department>
                <Salary>{vacancy.salary}</Salary>

                <Section>
                    <p>{vacancy.description}</p>
                </Section>

                <Section>
                    <h3>Требования:</h3>
                    <ul>
                        {vacancy.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </Section>

                <Section>
                    <h3>Обязанности:</h3>
                    <ul>
                        {vacancy.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>
                </Section>

                <Section>
                    <h3>Условия:</h3>
                    <ul>
                        {vacancy.conditions.map((cond, index) => (
                            <li key={index}>{cond}</li>
                        ))}
                    </ul>
                </Section>

                <Contact>
                    <h3>Контактная информация:</h3>
                    <p>{vacancy.contact.name}</p>
                    <p>Телефон: {vacancy.contact.phone}</p>
                    <p>Email: {vacancy.contact.email}</p>
                </Contact>

                <ApplyButton onClick={() => window.location.href = `mailto:${vacancy.contact.email}?subject=Вакансия: ${vacancy.title}`}>
                    Откликнуться на вакансию
                </ApplyButton>
            </Modal>
        </Overlay>
    );
};
