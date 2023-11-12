import styled, { css } from 'styled-components';

import { blueDay, flexCenterHorizontally, maxSize, resetButton } from '@/constants/styles/commonStyles';

import { IDayNumber, ITodosIdentifier } from './types';

const sizeS = 32;
const borderRadius = 5;

export const Wrapper = styled.div`
  ${flexCenterHorizontally}
  align-items: center;
  height: ${sizeS}px;
  width: ${sizeS}px;
`;

export const DayNumber = styled.button<IDayNumber>`
  ${maxSize}
  ${resetButton}
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.mediumM}px;
  border-radius: ${borderRadius}px;

  ${({ $bold, theme }) =>
    $bold &&
    css`
      cursor: pointer;
      font-weight: ${theme.fontWeight.l};
      font-size: ${theme.fontSize.mediumL}px;
      transition: 0.2s;

      &:hover {
        background: ${theme.colors.blue};
        font-size: ${theme.fontSize.mediumXL}px;
      }
    `};

  ${({ $isHoliday, $holidaysColor, theme }) =>
    $isHoliday &&
    css`
      background: ${$holidaysColor || theme.colors.lightRed};
    `}

  ${({ $isCurrentDay, theme }) =>
    $isCurrentDay &&
    css`
      border: 2px solid ${theme.colors.blue};
    `}

  ${({ $isActiveDay }) =>
    $isActiveDay &&
    css`
      ${blueDay}
    `}

  ${({ $isWeekend, theme }) =>
    $isWeekend &&
    css`
      color: ${theme.colors.red};
    `}

  ${({ $isIncludeInRange, theme }) =>
    $isIncludeInRange &&
    css`
      border-radius: 0px;
      background: ${theme.colors.gray};
    `}

  ${({ $isStartRangeDay, $isActiveDay }) =>
    $isStartRangeDay &&
    css`
      ${blueDay}
      border-radius: 0px;
      border-top-left-radius: ${borderRadius}px;
      border-bottom-left-radius: ${borderRadius}px;
      opacity: ${$isActiveDay ? 1 : 0.7};
    `}

  ${({ $isEndRangeDay, $isActiveDay }) =>
    $isEndRangeDay &&
    css`
      ${blueDay}
      border-radius: 0px;
      border-top-right-radius: ${borderRadius}px;
      border-bottom-right-radius: ${borderRadius}px;
      opacity: ${$isActiveDay ? 1 : 0.7};
    `}
`;

export const TodosIdentifier = styled.span<ITodosIdentifier>`
  position: absolute;
  display: none;
  top: 0px;
  right: 2px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL}px;
  ${({ $isHaveTodos }) =>
    $isHaveTodos &&
    css`
      display: block;
    `}
`;
