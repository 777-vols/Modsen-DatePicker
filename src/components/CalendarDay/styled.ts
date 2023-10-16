import styled, { css } from 'styled-components';

interface InterfaceDayNumber {
  bold?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
`;
export const DayNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  ${({ bold }: InterfaceDayNumber) =>
    bold &&
    css`
      font-weight: 700;
    `}
`;
