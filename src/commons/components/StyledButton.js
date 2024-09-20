import styled, { css } from 'styled-components';
import { colors } from '@/theme/colors';
import fontSizes from '@/theme/fontSizes';

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

  // 기본 그림자 추가
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:focus {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.gray};
    color: ${colors.white};
  }
`;



// Size settings
const sizeStyles = {
  large: css`
    width: 165px;
    height: 50px;
    font-size: ${fontSizes.medium}px;
  `,
  medium: css`
    width: 100px;
    height: 50px;
    font-size: ${fontSizes.small}px;
  `,
  small: css`
    width: 100px;
    height: 36px;
    f font-size: ${fontSizes.extraSmall}px;
  `,
};

// StyledButton with updated sizes, colors, and states
export const StyledButton = styled.button`
  ${({
    size = 'large',
    variant = 'primary',
    width,
    height,
    border,
    defaultColor = colors.primary,
    hoverColor = colors.primaryLight,
  }) => {
    return css`
      ${commonStyles}
      ${sizeStyles[size]} // sizeStyles에서 해당 사이즈의 스타일을 한 번에 적용
      color: ${variant === 'primary' ? colors.white : colors.text};
      background-color: ${variant === 'primary'
        ? defaultColor
        : colors[variant]};
      border: ${border};

      &:hover {
        background-color: ${variant === 'primary'
          ? hoverColor
          : colors[variant]};
        // 호버 시 텍스트 그림자 추가
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    `;
  }}
`;
