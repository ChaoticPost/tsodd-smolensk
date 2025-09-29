import React from 'react';
import styled from 'styled-components';
import type { Service } from '../../../data/services';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const Modal = styled.div`
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Header = styled.div`
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  background: white;
  border-radius: 16px 16px 0 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  border: none;
  background: #f1f5f9;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #64748b;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
    color: #1a202c;
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-right: 40px;
`;

const Icon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border-radius: 16px;
  font-size: 28px;
  flex-shrink: 0;
`;

const TitleInfo = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const Category = styled.span`
  display: inline-block;
  background: #f0fdf4;
  color: #62A744;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
`;

const Content = styled.div`
  padding: 24px;
`;

const Section = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #62A744, #4ade80);
    border-radius: 2px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  background: #f8fafc;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #62A744;
`;

const InfoLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const InfoValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1a202c;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: flex-start;
  gap: 12px;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '✓';
    color: #62A744;
    font-weight: bold;
    font-size: 14px;
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #bbf7d0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #62A744;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 12px;
  color: #64748b;
  margin-bottom: 2px;
`;

const ContactValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1a202c;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const Button = styled.button<{ $primary?: boolean }>`
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.$primary ? `
    background: #62A744;
    color: white;
    
    &:hover {
      background: #528F39;
      transform: translateY(-1px);
    }
  ` : `
    background: white;
    color: #62A744;
    border: 2px solid #62A744;
    
    &:hover {
      background: #f0fdf4;
      transform: translateY(-1px);
    }
  `}
`;

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  const handleCall = () => {
    window.location.href = `tel:${service.contactInfo.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${service.contactInfo.email}`;
  };

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseButton onClick={onClose}>×</CloseButton>
          <TitleSection>
            <Icon>{service.icon}</Icon>
            <TitleInfo>
              <Title>{service.title}</Title>
              <Category>{service.category}</Category>
              <Description>{service.description}</Description>
            </TitleInfo>
          </TitleSection>
        </Header>

        <Content>
          <Section>
            <SectionTitle>Информация об услуге</SectionTitle>
            <InfoGrid>
              {service.price && (
                <InfoItem>
                  <InfoLabel>Стоимость</InfoLabel>
                  <InfoValue>{service.price}</InfoValue>
                </InfoItem>
              )}
              {service.duration && (
                <InfoItem>
                  <InfoLabel>Срок выполнения</InfoLabel>
                  <InfoValue>{service.duration}</InfoValue>
                </InfoItem>
              )}
            </InfoGrid>
          </Section>

          <Section>
            <SectionTitle>Что входит в услугу</SectionTitle>
            <List>
              {service.features.map((feature, index) => (
                <ListItem key={index}>{feature}</ListItem>
              ))}
            </List>
          </Section>

          {service.requirements && service.requirements.length > 0 && (
            <Section>
              <SectionTitle>Требования к заказчику</SectionTitle>
              <List>
                {service.requirements.map((requirement, index) => (
                  <ListItem key={index}>{requirement}</ListItem>
                ))}
              </List>
            </Section>
          )}

          {service.documents && service.documents.length > 0 && (
            <Section>
              <SectionTitle>Результат работы</SectionTitle>
              <List>
                {service.documents.map((document, index) => (
                  <ListItem key={index}>{document}</ListItem>
                ))}
              </List>
            </Section>
          )}

          <Section>
            <SectionTitle>Контакты</SectionTitle>
            <ContactInfo>
              <ContactGrid>
                <ContactItem>
                  <ContactIcon>📞</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Телефон</ContactLabel>
                    <ContactValue>{service.contactInfo.phone}</ContactValue>
                  </ContactDetails>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>✉️</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>{service.contactInfo.email}</ContactValue>
                  </ContactDetails>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>🕒</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Режим работы</ContactLabel>
                    <ContactValue>{service.contactInfo.workingHours}</ContactValue>
                  </ContactDetails>
                </ContactItem>
              </ContactGrid>
            </ContactInfo>
          </Section>

          <ActionButtons>
            <Button $primary onClick={handleCall}>
              Позвонить
            </Button>
            <Button onClick={handleEmail}>
              Написать
            </Button>
          </ActionButtons>
        </Content>
      </Modal>
    </Overlay>
  );
};
