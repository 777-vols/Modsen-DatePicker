import styled, { css } from 'styled-components';

interface InterfaceDayNumber {
  $bold?: boolean;
  $isHoliday?: boolean;
  $isCurrentDay?: boolean;
  $isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
`;
export const DayNumber = styled.button<InterfaceDayNumber>`
  cursor: pointer;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  border-radius: 5px;
  ${({ $bold }) =>
    $bold &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.l};
      font-size: ${({ theme }) => theme.fontSize.mediumL};
    `};
  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.red};
      background: ${({ theme }) => theme.colors.lightRed};
    `}
  ${({ $isCurrentDay }) =>
    $isCurrentDay &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.black};
    `}
  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    `}
`;
