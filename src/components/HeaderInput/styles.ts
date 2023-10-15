import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  height: 20px;
  margin-bottom: ${({ theme }) => theme.padding.smallL};
`;
export const Panel = styled.div`
  padding: ${({ theme }) => theme.padding.zero} ${({ theme }) => theme.padding.mediumM};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  height: 42px;
`;
export const Input = styled.input`
  margin: ${({ theme }) => theme.margin.zero} ${({ theme }) => theme.margin.smallL};
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  height: 20px;
  width: 100%;
  border: none;
`;
export const StyledButtton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  transition: 0.2s;
  &:hover {
    transform: rotate(360deg);
  }
`;
