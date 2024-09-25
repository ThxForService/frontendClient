import React from 'react';
import styled from 'styled-components';
export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.gray};
  padding: 10px;
  border-radius: 3px;
  width: 100%;
`;
