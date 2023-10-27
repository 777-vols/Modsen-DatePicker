import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ChangeMonthButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
`;
export const MonthName = styled.span`
  padding: 0 5px;
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  font-weight: ${({ theme }) => theme.fontWeight.l};
`;
export const Panel = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  font-weight: ${({ theme }) => theme.fontWeight.l};
`;
