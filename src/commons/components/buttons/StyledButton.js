import styled, { css } from 'styled-components';
import colors from '@/theme/colors';

// Common styles for all buttons
const commonStyles = css`
  border-radius: 12px;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.3s ease;

  &:focus {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.gray};
    color: ${colors.textLight};
  }
`;

// StyledButton with updated sizes, colors, and states
export const StyledButton = styled.button`
  ${({ variant, size, width, height }) => {
    const defaultColor = colors.primary;
    const hoverColor = colors.primaryLight;
    const border =
      variant === 'transparent' ? `1px solid ${colors.black}` : 'none';

    // Size settings
    const sizeStyles = {
      large: css`
        width: 165px;
        height: 50px;
        font-size: 16pt;
      `,
      medium: css`
        width: 165px;
        height: 50px;
        font-size: 15pt;
      `,
      small: css`
        width: 120px;
        height: 36px;
        font-size: 13pt;
      `,
    };

    return css`
      ${commonStyles}
      color: ${variant === 'primary' ? colors.white : colors.text};
      background-color: ${variant === 'primary'
        ? defaultColor
        : colors[variant]};
      border: ${border};
      width: ${width ?? sizeStyles[size]?.width ?? '100%'};
      height: ${height ?? sizeStyles[size]?.height ?? '38px'};
      font-size: ${sizeStyles[size]?.fontSize ?? '15pt'};

      &:hover {
        background-color: ${variant === 'primary'
          ? hoverColor
          : colors[variant]};
      }
    `;
  }}
`;

// Usage in a component
const ButtonExample = () => {
  return (
    <div>
      {/* Large Buttons */}
      <StyledButton size="large" variant="primary">
        Primary
      </StyledButton>
      <StyledButton size="large" variant="secondary">
        Secondary
      </StyledButton>

      {/* Medium Buttons */}
      <StyledButton size="medium" variant="primary">
        Primary
      </StyledButton>
      <StyledButton size="medium" variant="secondary">
        Secondary
      </StyledButton>

      {/* Small Buttons */}
      <StyledButton size="small" variant="primary">
        Primary
      </StyledButton>
      <StyledButton size="small" variant="secondary">
        Secondary
      </StyledButton>
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
