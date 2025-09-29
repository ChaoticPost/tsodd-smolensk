import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components/ui';

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

const ContactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ContactCard = styled(Card)`
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #62A744 0%, #4ade80 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 24px;
  color: white;
`;

const ContactTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 16px 0;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #64748b;
`;

const ContactLink = styled.a`
  color: #62A744;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #62A744;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #528F39;
    transform: translateY(-1px);
  }
`;

const PressKitSection = styled.div`
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
  margin: 0 0 20px 0;
  text-align: center;
`;

const PressKitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

const PressKitItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &:hover {
    border-color: #62A744;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(98, 167, 68, 0.2);
  }
`;

const PressKitIcon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
`;

const PressKitName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1a202c;
  text-align: center;
`;

const GuidelinesSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const GuidelinesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const GuidelinesItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #62A744;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GuidelinesIcon = styled.div`
  font-size: 20px;
  margin-top: 2px;
`;

const GuidelinesText = styled.div`
  flex: 1;
`;

const GuidelinesTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 4px 0;
`;

const GuidelinesDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
`;

export const MediaContacts: React.FC = () => {
    return (
        <PageContainer>
            <Container>
                <PageHeader>
                    <PageTitle>Контакты для СМИ</PageTitle>
                    <PageSubtitle>
                        Информация для представителей средств массовой информации и пресс-служб
                    </PageSubtitle>
                </PageHeader>

                <ContactsGrid>
                    <ContactCard>
                        <ContactIcon>👨‍💼</ContactIcon>
                        <ContactTitle>Пресс-секретарь</ContactTitle>
                        <ContactInfo>
                            <ContactItem>
                                <span>📧</span>
                                <ContactLink href="mailto:press@codd67.ru">press@codd67.ru</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>📞</span>
                                <ContactLink href="tel:+74812384567">+7 (4812) 38-45-67</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>📱</span>
                                <ContactLink href="tel:+79123456789">+7 (912) 345-67-89</ContactLink>
                            </ContactItem>
                        </ContactInfo>
                        <ContactButton href="mailto:press@codd67.ru">
                            Написать письмо
                        </ContactButton>
                    </ContactCard>

                    <ContactCard>
                        <ContactIcon>👩‍💼</ContactIcon>
                        <ContactTitle>Руководитель пресс-службы</ContactTitle>
                        <ContactInfo>
                            <ContactItem>
                                <span>📧</span>
                                <ContactLink href="mailto:media@codd67.ru">media@codd67.ru</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>📞</span>
                                <ContactLink href="tel:+74812384568">+7 (4812) 38-45-68</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>📱</span>
                                <ContactLink href="tel:+79123456790">+7 (912) 345-67-90</ContactLink>
                            </ContactItem>
                        </ContactInfo>
                        <ContactButton href="mailto:media@codd67.ru">
                            Связаться
                        </ContactButton>
                    </ContactCard>

                    <ContactCard>
                        <ContactIcon>📺</ContactIcon>
                        <ContactTitle>Телевизионные съемки</ContactTitle>
                        <ContactInfo>
                            <ContactItem>
                                <span>📧</span>
                                <ContactLink href="mailto:tv@codd67.ru">tv@codd67.ru</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>📞</span>
                                <ContactLink href="tel:+74812384569">+7 (4812) 38-45-69</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>⏰</span>
                                <span>Пн-Пт: 9:00-18:00</span>
                            </ContactItem>
                        </ContactInfo>
                        <ContactButton href="mailto:tv@codd67.ru">
                            Заказать съемку
                        </ContactButton>
                    </ContactCard>

                    <ContactCard>
                        <ContactIcon>📰</ContactIcon>
                        <ContactTitle>Печатные СМИ</ContactTitle>
                        <ContactInfo>
                            <ContactItem>
                                <span>📧</span>
                                <ContactLink href="mailto:print@codd67.ru">print@codd67.ru</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>📞</span>
                                <ContactLink href="tel:+74812384570">+7 (4812) 38-45-70</ContactLink>
                            </ContactItem>
                            <ContactItem>
                                <span>📱</span>
                                <ContactLink href="tel:+79123456791">+7 (912) 345-67-91</ContactLink>
                            </ContactItem>
                        </ContactInfo>
                        <ContactButton href="mailto:print@codd67.ru">
                            Получить информацию
                        </ContactButton>
                    </ContactCard>
                </ContactsGrid>

                <PressKitSection>
                    <SectionTitle>Пресс-кит</SectionTitle>
                    <PressKitGrid>
                        <PressKitItem href="/press-kit/logo.zip" download>
                            <PressKitIcon>🎨</PressKitIcon>
                            <PressKitName>Логотипы и брендбук</PressKitName>
                        </PressKitItem>
                        <PressKitItem href="/press-kit/photos.zip" download>
                            <PressKitIcon>📸</PressKitIcon>
                            <PressKitName>Фотоматериалы</PressKitName>
                        </PressKitItem>
                        <PressKitItem href="/press-kit/videos.zip" download>
                            <PressKitIcon>🎥</PressKitIcon>
                            <PressKitName>Видеоматериалы</PressKitName>
                        </PressKitItem>
                        <PressKitItem href="/press-kit/presentation.pdf" download>
                            <PressKitIcon>📊</PressKitIcon>
                            <PressKitName>Презентация ЦОДД</PressKitName>
                        </PressKitItem>
                        <PressKitItem href="/press-kit/statistics.pdf" download>
                            <PressKitIcon>📈</PressKitIcon>
                            <PressKitName>Статистика и отчеты</PressKitName>
                        </PressKitItem>
                        <PressKitItem href="/press-kit/contacts.pdf" download>
                            <PressKitIcon>📋</PressKitIcon>
                            <PressKitName>Контакты и реквизиты</PressKitName>
                        </PressKitItem>
                    </PressKitGrid>
                </PressKitSection>

                <GuidelinesSection>
                    <SectionTitle>Рекомендации для СМИ</SectionTitle>
                    <GuidelinesList>
                        <GuidelinesItem>
                            <GuidelinesIcon>📝</GuidelinesIcon>
                            <GuidelinesText>
                                <GuidelinesTitle>Подача заявок</GuidelinesTitle>
                                <GuidelinesDescription>
                                    Заявки на интервью и комментарии необходимо подавать не менее чем за 24 часа
                                </GuidelinesDescription>
                            </GuidelinesText>
                        </GuidelinesItem>
                        <GuidelinesItem>
                            <GuidelinesIcon>📅</GuidelinesIcon>
                            <GuidelinesText>
                                <GuidelinesTitle>Рабочие часы</GuidelinesTitle>
                                <GuidelinesDescription>
                                    Пресс-служба работает с 9:00 до 18:00 в рабочие дни. Экстренные запросы обрабатываются круглосуточно
                                </GuidelinesDescription>
                            </GuidelinesText>
                        </GuidelinesItem>
                        <GuidelinesItem>
                            <GuidelinesIcon>🎥</GuidelinesIcon>
                            <GuidelinesText>
                                <GuidelinesTitle>Съемки на объектах</GuidelinesTitle>
                                <GuidelinesDescription>
                                    Для проведения съемок на объектах ЦОДД необходимо получить разрешение и соблюдать технику безопасности
                                </GuidelinesDescription>
                            </GuidelinesText>
                        </GuidelinesItem>
                        <GuidelinesItem>
                            <GuidelinesIcon>📊</GuidelinesIcon>
                            <GuidelinesText>
                                <GuidelinesTitle>Статистические данные</GuidelinesTitle>
                                <GuidelinesDescription>
                                    Официальная статистика публикуется ежемесячно. Запросы на дополнительные данные рассматриваются индивидуально
                                </GuidelinesDescription>
                            </GuidelinesText>
                        </GuidelinesItem>
                        <GuidelinesItem>
                            <GuidelinesIcon>🔒</GuidelinesIcon>
                            <GuidelinesText>
                                <GuidelinesTitle>Конфиденциальность</GuidelinesTitle>
                                <GuidelinesDescription>
                                    Некоторые аспекты деятельности ЦОДД могут быть ограничены для публичного освещения в целях безопасности
                                </GuidelinesDescription>
                            </GuidelinesText>
                        </GuidelinesItem>
                    </GuidelinesList>
                </GuidelinesSection>
            </Container>
        </PageContainer>
    );
};
