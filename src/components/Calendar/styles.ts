import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spaces.smallL}px;
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  padding-bottom: ${({ theme }) => theme.spaces.smallS}px;
  position: relative;
`;
export const Clue = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  font-size: ${({ theme }) => theme.fontSize.mediumS}px;
  position: absolute;
  bottom: 1px;
  right: 7px;
`;
export const ClearButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.mediumM}px;
  font-weight: ${({ theme }) => theme.fontWeight.l};
  height: 35px;
  border-top: 2px solid ${({ theme }) => theme.colors.gray};
  background: transparent;
  transition: 0.2s;
  &:hover {
    font-size: ${({ theme }) => theme.fontSize.mediumM}px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;
