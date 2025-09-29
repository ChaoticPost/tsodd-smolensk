import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'elevated' | 'outline';
    padding?: 'none' | 'small' | 'medium' | 'large';
    className?: string;
    onClick?: () => void;
}

const StyledCard = styled.div<CardProps>`
  border-radius: 12px;
  background-color: white;
  transition: all 0.2s ease;

  ${({ variant }) => {
        switch (variant) {
            case 'elevated':
                return css`
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          
          &:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        `;
            case 'outline':
                return css`
          border: 1px solid #e5e7eb;
          
          &:hover {
            border-color: #d1d5db;
          }
        `;
            default:
                return css`
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          
          &:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
        `;
        }
    }}

  ${({ padding }) => {
        switch (padding) {
            case 'none':
                return css`
          padding: 0;
        `;
            case 'small':
                return css`
          padding: 12px;
        `;
            case 'large':
                return css`
          padding: 32px;
        `;
            default:
                return css`
          padding: 24px;
        `;
        }
    }}

  ${({ onClick }) =>
        onClick &&
        css`
      cursor: pointer;
    `}
`;

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    padding = 'medium',
    className,
    onClick,
}) => {
    return (
        <StyledCard
            variant={variant}
            padding={padding}
            className={className}
            onClick={onClick}
        >
            {children}
        </StyledCard>
    );
};
