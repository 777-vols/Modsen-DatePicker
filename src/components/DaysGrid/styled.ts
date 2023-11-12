import styled from 'styled-components';

import {
  flexCenterHorizontally,
  gridSevenColumns,
  maxSize,
  resetButton
} from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spaces.mediumS}px;
`;

export const WeekDaysNames = styled.div`
  ${gridSevenColumns}
  cursor: default;
  height: 32px;
`;

export const DayName = styled.span`
  ${maxSize}
  ${flexCenterHorizontally}
  ${resetButton}
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.l};
  font-size: ${({ theme }) => theme.fontSize.mediumL}px;
`;

export const MonthDaysNumbers = styled.div`
  ${gridSevenColumns}
  grid-template-rows: 5;
`;

export const WeekDaysNumbers = styled.div`
  ${gridSevenColumns}
  grid-template-rows: 1;
`;
