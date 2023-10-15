import styled from 'styled-components';

export const Wrapper = styled.div``;
export const WeekDaysNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
export const DayName = styled.span`
  margin: ${({ theme }) => theme.margin.zero} auto;
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  height: 32px;
  width: 32px;
`;
export const MonthDaysNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 5;
`;
