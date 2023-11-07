import styled from 'styled-components';

import { greyBorder, resetButton } from '@/constants/styles/commonStyles';

export const Wrapper = styled.div`
  ${greyBorder}
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spaces.smallL}px;
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  padding-bottom: ${({ theme }) => theme.spaces.smallS}px;
  position: relative;
`;

export const Clue = styled.span`
  display: none;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  font-size: ${({ theme }) => theme.fontSize.mediumS}px;
  position: absolute;
  bottom: 1px;
  right: 7px;
  ${Wrapper}:hover & {
    display: block;
  }
  @media (${({ theme }) => theme.breakPoints.smallM}) {
    display: block;
  }
`;

export const ClearButton = styled.button`
  ${resetButton}
  cursor: pointer;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.mediumM}px;
  font-weight: ${({ theme }) => theme.fontWeight.l};
  height: 35px;
  border-top: 2px solid ${({ theme }) => theme.colors.gray};
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
