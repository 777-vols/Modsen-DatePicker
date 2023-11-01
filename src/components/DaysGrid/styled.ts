import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spaces.mediumS}px;
`;
export const WeekDaysNames = styled.div`
  cursor: default;
  display: grid;
  height: 32px;
  grid-template-columns: repeat(7, 1fr);
`;
export const DayName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.l};
  font-size: ${({ theme }) => theme.fontSize.mediumL}px;
`;
export const MonthDaysNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 5;
`;
export const WeekDaysNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1;
`;
