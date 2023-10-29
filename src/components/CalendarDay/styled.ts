import styled, { css } from 'styled-components';

interface IDayNumber {
  $isWeekend: boolean | undefined;
  $bold?: boolean;
  $isHoliday?: boolean | undefined;
  $isCurrentDay?: boolean;
  $holidaysColor?: string;
  $isActive?: boolean;
  $isIncludeInRange?: boolean;
  $isStartRangeDay?: boolean;
  $isEndRangeDay?: boolean;
}
interface ITodosIdentifier {
  $isHaveTodos?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
`;
export const DayNumber = styled.button<IDayNumber>`
  position: relative;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  border-radius: 5px;
  ${({ $bold }) =>
    $bold &&
    css`
      cursor: pointer;
      font-weight: ${({ theme }) => theme.fontWeight.l};
      font-size: ${({ theme }) => theme.fontSize.mediumL};
      transition: 0.2s;
      &:hover {
        background: ${({ theme }) => theme.colors.blue};
        font-size: ${({ theme }) => theme.fontSize.mediumXL};
      }
    `};
  ${({ $isHoliday, $holidaysColor }) =>
    $isHoliday &&
    $holidaysColor &&
    css`
      background: ${$holidaysColor};
    `}
  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      background: ${({ theme }) => theme.colors.lightRed};
    `}
  ${({ $isHoliday, $holidaysColor }) =>
    $isHoliday &&
    css`
      background: ${$holidaysColor};
    `}
  ${({ $isCurrentDay }) =>
    $isCurrentDay &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.blue};
    `}
  ${({ $isActive }) =>
    $isActive &&
    css`
      font-size: ${({ theme }) => theme.fontSize.mediumXL};
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ $isWeekend }) =>
    $isWeekend &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}
  ${({ $isIncludeInRange }) =>
    $isIncludeInRange &&
    css`
      background: ${({ theme }) => theme.colors.grey};
    `}
  ${({ $isStartRangeDay }) =>
    $isStartRangeDay &&
    css`
      font-size: ${({ theme }) => theme.fontSize.mediumXL};
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      opacity: 0.7;
    `}
    ${({ $isStartRangeDay, $isActive }) =>
    $isStartRangeDay &&
    $isActive &&
    css`
      opacity: 1;
    `}
  ${({ $isEndRangeDay }) =>
    $isEndRangeDay &&
    css`
      font-size: ${({ theme }) => theme.fontSize.mediumXL};
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      opacity: 0.7;
    `}
  ${({ $isEndRangeDay, $isActive }) =>
    $isEndRangeDay &&
    $isActive &&
    css`
      opacity: 1;
    `}
`;

export const TodosIdentifier = styled.span<ITodosIdentifier>`
  position: absolute;
  display: none;
  top: 0px;
  right: 2px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  ${({ $isHaveTodos }) =>
    $isHaveTodos &&
    css`
      display: block;
    `}
`;
