import styled, { css } from 'styled-components';

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
