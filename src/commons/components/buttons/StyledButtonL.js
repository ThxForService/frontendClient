import styled, { css } from 'styled-components';
import colors from '@/theme/colors';

// 공통 스타일
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
export const StyledButtonL = styled.button`
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
      ${sizeStyles[size]}
    color: ${variant === 'primary' ? colors.white : colors.primary};
      background-color: ${variant === 'primary' ? defaultColor : colors.white};
      border: ${border};
      width: ${width ?? sizeStyles[size]?.width ?? '100%'};
      height: ${height ?? sizeStyles[size]?.height ?? '50px'};

      &:hover {
        background-color: ${variant === 'primary' ? hoverColor : colors.white};
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
