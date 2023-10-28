import styled from 'styled-components';

interface WrapperProps {
  theme: object;
}

export const Wrapper = styled.div<WrapperProps>`
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.padding.smallL};
  padding: ${({ theme }) => theme.padding.mediumS};
  padding-bottom: 0;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  padding: ${({ theme }) => theme.padding.mediumS} ${({ theme }) => theme.padding.zero};
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  background: transparent;
  transition: 0.2s;
  &:hover {
    font-size: ${({ theme }) => theme.fontSize.mediumM};
    color: ${({ theme }) => theme.colors.blue};
  }
`;
