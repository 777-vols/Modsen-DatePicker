import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  font-weight: ${({ theme }) => theme.fontWeight.l};
`;
