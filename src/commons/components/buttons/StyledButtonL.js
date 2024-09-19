import styled, { css } from 'styled-components';
import colors from '@/theme/colors';

// 공통 스타일
const buttonStyles = css`
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.3s ease;

  &:focus {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// Large Button
export const LLargeButton = styled.button`
  height: 50px;
  font-size: 16pt;
  padding: 0 20px;
  ${buttonStyles}

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${colors.white};
      border: 2px solid ${colors.primary};
      color: ${colors.primary};
    `}
`;

// Medium Button
export const LMediumButton = styled.button`
  height: 45px;
  font-size: 15pt;
  padding: 0 18px;
  ${buttonStyles}

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${colors.white};
      border: 2px solid ${colors.primary};
      color: ${colors.primary};
    `}
`;

// Small Button
export const LSmallButton = styled.button`
  height: 36px;
  font-size: 13pt;
  padding: 0 16px;
  ${buttonStyles}

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${colors.white};
      border: 2px solid ${colors.primary};
      color: ${colors.primary};
    `}
`;
