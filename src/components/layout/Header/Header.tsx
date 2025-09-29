import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #62A744 0%, #4ade80 100%);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0;
  box-shadow: 0 4px 20px rgba(98, 167, 68, 0.3);
  border-radius: 0 0 16px 16px;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    margin: 0 16px;
    border-radius: 0 0 12px 12px;
  }
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 32px;

  @media (max-width: 1200px) {
    gap: 24px;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    height: 60px;
    gap: 16px;
    padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 16px;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding: 6px 10px;
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-image: url('/src/assets/icons/icon_geo.png');
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;

  ${Logo}:hover & {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    background-size: 20px 20px;
  }
`;

const LogoText = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 800;
    color: white;
    margin: 0;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    margin-top: 2px;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 18px;
    }
    span {
      font-size: 11px;
    }
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 16px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  @media (max-width: 1200px) {
    gap: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &.has-submenu {
    padding-right: 24px;
    position: relative;

    &::after {
      content: '▾';
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 10px;
      transition: transform 0.3s ease;
      opacity: 0.8;
    }

    &:hover::after {
      transform: translateY(-50%) rotate(180deg);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    padding: 6px 12px;
    font-size: 13px;
    height: 36px;
  }
`;

const Submenu = styled.div`
  position: absolute;
  top: calc(100% - 5px);
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  min-width: 220px;
  padding: 8px;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 2px;
  }
`;

const SubmenuLink = styled(Link)`
  text-decoration: none;
  color: #475569;
  font-size: 14px;
  padding: 10px 16px;
  display: block;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #62A744;
    background: #f0fdf4;
  }

  @media (max-width: 1200px) {
    font-size: 13px;
    padding: 8px 14px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`;

const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
`;

const SearchButton = styled(ActionButton)`
  @media (max-width: 640px) {
    display: none;
  }

  &:hover {
    background: #62A744;
    transform: scale(1.1);
  }
`;

const BurgerButton = styled(ActionButton)`
  display: none;
  font-size: 24px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const SearchOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
`;

const SearchContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 600px;
  padding: 32px;
  position: relative;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 24px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #62A744;
    box-shadow: 0 0 0 3px rgba(98, 167, 68, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SearchResults = styled.div`
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
`;

const SearchResultItem = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    background: #f8fafc;
    border-color: #e2e8f0;
  }

  h4 {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 600;
    color: #1a202c;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #64748b;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #1a202c;
  }
`;


const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 99;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;

  &::before {
    content: '';
    position: fixed;
    top: 48px;
    left: 0;
    right: 0;
    height: 1px;
    background: #e2e8f0;
  }
`;

const MobileMenuItem = styled.div`
  margin-bottom: 4px;
`;

const MobileMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  color: #475569;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  background: white;

  &:hover {
    background: #f0fdf4;
    color: #62A744;
  }
`;

const MobileSubmenu = styled.div`
  padding: 1px 0 4px 32px;
  margin-top: 1px;
  border-left: 2px solid #e2e8f0;
  margin-left: 16px;
`;

const MobileSubmenuLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  color: #64748b;
  text-decoration: none;
  font-size: 12px;
  border-radius: 5px;
  transition: all 0.2s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -16px;
    top: 50%;
    width: 8px;
    height: 2px;
    background: #e2e8f0;
    transform: translateY(-50%);
  }

  &:hover {
    color: #62A744;
    background: #f0fdf4;

    &::before {
      background: #62A744;
    }
  }
`;

const NavMenu = [
  {
    path: '/about',
    label: 'О центре',
    icon: '👥',
    submenu: [
      { path: '/about/history', label: 'История' },
      { path: '/about/structure', label: 'Структура' },
      { path: '/about/leadership', label: 'Руководство' },
      { path: '/about/documents', label: 'Документы' },
      { path: '/anti-corruption', label: 'Противодействие коррупции' }
    ]
  },
  {
    path: '/activities',
    label: 'Деятельность',
    icon: '📊',
    submenu: [
      { path: '/activities/traffic', label: 'Организация движения' },
      { path: '/activities/monitoring', label: 'Мониторинг' },
      { path: '/activities/analytics', label: 'Аналитика' },
      { path: '/activities/projects', label: 'Проекты' }
    ]
  },
  {
    path: '/services',
    label: 'Сервисы',
    icon: '⚡',
    submenu: [
      { path: '/services/cameras', label: 'Камеры' },
      { path: '/services/traffic-lights', label: 'Светофоры' },
      { path: '/services/roads', label: 'Дороги' },
      { path: '/services/transport', label: 'Транспорт' }
    ]
  },
  {
    path: '/press',
    label: 'Пресс-центр',
    icon: '📰',
    submenu: [
      { path: '/press/news', label: 'Новости' },
      { path: '/press/announcements', label: 'Анонсы' },
      { path: '/press/media', label: 'Медиа' },
      { path: '/press/contacts', label: 'Контакты для СМИ' },
      { path: '/vacancies', label: 'Вакансии' },
      { path: '/contacts', label: 'Контакты' }
    ]
  }
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <LogoIcon>🚦</LogoIcon>
          <LogoText>
            <h1>ЦОДД Смоленск</h1>
            <span>Центр организации дорожного движения</span>
          </LogoText>
        </Logo>

        <Nav>
          {NavMenu.map((item) => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                className={item.submenu ? 'has-submenu' : ''}
              >
                {item.label}
              </NavLink>
              {item.submenu && (
                <Submenu>
                  {item.submenu.map((subItem) => (
                    <SubmenuLink key={subItem.path} to={subItem.path}>
                      {subItem.label}
                    </SubmenuLink>
                  ))}
                </Submenu>
              )}
            </NavItem>
          ))}
        </Nav>

        <HeaderActions>
          <SearchButton
            onClick={() => setIsSearchOpen(true)}
            aria-label="Поиск"
          >
            🔍
          </SearchButton>
          <BurgerButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </BurgerButton>
        </HeaderActions>
      </HeaderContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {NavMenu.map((item) => (
          <MobileMenuItem key={item.path}>
            <MobileMenuLink
              to={item.path}
              onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
            >
              {item.label}
            </MobileMenuLink>
            {item.submenu && (
              <MobileSubmenu>
                {item.submenu.map((subItem) => (
                  <MobileSubmenuLink
                    key={subItem.path}
                    to={subItem.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subItem.label}
                  </MobileSubmenuLink>
                ))}
              </MobileSubmenu>
            )}
          </MobileMenuItem>
        ))}
      </MobileMenu>

      <SearchOverlay
        $isOpen={isSearchOpen}
        onClick={() => setIsSearchOpen(false)}
      >
        <SearchContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setIsSearchOpen(false)}>
            ✕
          </CloseButton>

          <SearchInput
            type="text"
            placeholder="Поиск по сайту..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />

          {searchQuery && (
            <SearchResults>
              <SearchResultItem>
                <h4>Новости</h4>
                <p>Найдено результатов: 5</p>
              </SearchResultItem>
              <SearchResultItem>
                <h4>Документы</h4>
                <p>Найдено результатов: 3</p>
              </SearchResultItem>
              <SearchResultItem>
                <h4>Сервисы</h4>
                <p>Найдено результатов: 2</p>
              </SearchResultItem>
              <SearchResultItem>
                <h4>Контакты</h4>
                <p>Найдено результатов: 1</p>
              </SearchResultItem>
            </SearchResults>
          )}
        </SearchContainer>
      </SearchOverlay>
    </HeaderContainer>
  );
};