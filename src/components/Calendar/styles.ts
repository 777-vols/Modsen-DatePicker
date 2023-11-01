import styled from 'styled-components';

import { IWrapperProps } from './types';

export const Wrapper = styled.div<IWrapperProps>`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spaces.smallL};
  padding: ${({ theme }) => theme.spaces.mediumS};
  padding-bottom: 0;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  padding: ${({ theme }) => theme.spaces.mediumS} ${({ theme }) => theme.spaces.zero};
  border-top: 2px solid ${({ theme }) => theme.colors.gray};
  background: transparent;
  transition: 0.2s;
  &:hover {
    font-size: ${({ theme }) => theme.fontSize.mediumM};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
