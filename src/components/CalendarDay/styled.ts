import styled, { css } from 'styled-components';

import { IDayNumber, ITodosIdentifier } from './types';

const sizeS = 32;
const borderRadius = 5;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizeS}px;
  width: ${sizeS}px;
`;
export const DayNumber = styled.button<IDayNumber>`
  position: relative;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  border-radius: ${borderRadius}px;
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
  ${({ $isActiveDay }) =>
    $isActiveDay &&
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
      border-radius: 0px;
      background: ${({ theme }) => theme.colors.gray};
    `}
  ${({ $isStartRangeDay }) =>
    $isStartRangeDay &&
    css`
      font-size: ${({ theme }) => theme.fontSize.mediumXL};
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0px;
      border-top-left-radius: ${borderRadius}px;
      border-bottom-left-radius: ${borderRadius}px;
      opacity: 0.7;
    `}
    ${({ $isStartRangeDay, $isActiveDay }) =>
    $isStartRangeDay &&
    $isActiveDay &&
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
      border-top-right-radius: ${borderRadius}px;
      border-bottom-right-radius: ${borderRadius}px;
      opacity: 0.7;
    `}
  ${({ $isEndRangeDay, $isActiveDay }) =>
    $isEndRangeDay &&
    $isActiveDay &&
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
