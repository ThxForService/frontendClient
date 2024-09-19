import styled, { css } from 'styled-components';
import colors from '@/theme/colors';

// Common styles for all buttons
const commonStyles = css`
  border-radius: 50px;
  cursor: pointer;
  border: none;
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

// Large button styles
export const LargeButton = styled.button`
  height: 50px;
  font-size: 16pt;
  ${commonStyles}

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

// Medium button styles
export const MediumButton = styled.button`
  height: 45px;
  font-size: 15pt;
  ${commonStyles}

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

// Small button styles
export const SmallButton = styled.button`
  height: 36px;
  font-size: 13pt;
  ${commonStyles}

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

// StyledButton using theme and common colors
export const StyledButton = styled.button`
  ${({ variant, size, width, height }) => {
    const border =
      variant === 'transparent' ? `1px solid ${colors.black}` : 'none';
    width = width ?? '100%';
    height = height ?? '38px';
    return css`
      color: ${variant === 'primary' ? colors.white : colors.text};
      background-color: ${colors[variant]};
      border: ${border};
      font-size: ${size === 'large'
        ? '16pt'
        : size === 'medium'
        ? '15pt'
        : '13pt'};
      width: ${width};
      height: ${height};
    `;
  }}

  border-radius: 12px;
  letter-spacing: 0;
  cursor: pointer;
  &:focus {
    opacity: 0.8;
  }
`;

// Usage in a component
const ButtonExample = () => {
  return (
    <div>
      {/* Large Buttons */}
      <LargeButton variant="primary">Primary</LargeButton>
      <LargeButton variant="secondary">Secondary</LargeButton>

      {/* Medium Buttons */}
      <MediumButton variant="primary">Primary</MediumButton>
      <MediumButton variant="secondary">Secondary</MediumButton>

      {/* Small Buttons */}
      <SmallButton variant="primary">Primary</SmallButton>
      <SmallButton variant="secondary">Secondary</SmallButton>
    </div>
  );
};

/* 
export const StyledButton = styled.button`
  ${({ variant, theme, size, width, height }) => {
    const border =
      variant === 'transparent' ? `1px solid ${theme.colors.black}` : 'none';
    width = width ?? '100%';
    height = height ?? '38px';
    return css`
      color: #fff;
      background-color: ${theme.colors[variant]};
      border: ${border};
      font-size: ${theme.fontSizes[size] || '14px'};
      width: ${width};
      height: ${height};
    `;
  }}

  border-radius: 12px;
  letter-spacing: 0;
  cursor: pointer;
  &:focus {
    opacity: 0.8;
  }
`;

*/
