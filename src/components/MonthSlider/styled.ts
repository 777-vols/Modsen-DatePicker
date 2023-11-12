import styled from 'styled-components';

import { flexCenterVertical, flexSpaceBetween, resetButton } from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  ${flexSpaceBetween};
  align-items: center;
`;

export const ChangeMonthButton = styled.button`
  ${resetButton}
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
`;

export const MonthName = styled.span`
  padding: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.smallS}px;
  font-size: ${({ theme }) => theme.fontSize.mediumL}px;
  font-weight: ${({ theme }) => theme.fontWeight.l};
`;

export const Panel = styled.div`
  ${flexCenterVertical}
  font-size: ${({ theme }) => theme.fontSize.mediumM}px;
  font-weight: ${({ theme }) => theme.fontWeight.l};
`;
