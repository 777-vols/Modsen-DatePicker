import styled from 'styled-components';

import {
  flexCenterHorizontally,
  flexCenterVertical,
  flexSpaceBetween,
  greyBorder,
  maxSize,
  resetButton
} from '@/constants/styles/commonStyles';

const buttonSize = 17;
const closeImgSize = 16;
const borderRadiusS = 5;

export const Wrapper = styled.div`
  ${maxSize}
  ${flexCenterHorizontally}
  ${greyBorder}
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: blue;
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

export const WrapperInner = styled.div`
  ${maxSize}
  position: relative;
`;

export const SelectedDateHeader = styled.h1`
  ${flexCenterHorizontally}
  font-size: ${({ theme }) => theme.fontSize.mediumM}px;
`;

export const CloseButton = styled.button`
  ${resetButton}
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  transition: 0.2s;
  &:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;

export const CloseImg = styled.img`
  ${maxSize}
  min-height: ${closeImgSize}px;
  min-width: ${closeImgSize}px;
`;

export const AddToDoWrapper = styled.div`
  ${flexSpaceBetween};
  margin-top: ${({ theme }) => theme.spaces.mediumS}px;
  width: 100%;
  border-radius: ${borderRadiusS}px;
`;

export const InputWrapper = styled.div`
  ${greyBorder}
  ${flexSpaceBetween};
  width: 100%;
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  border-radius: ${borderRadiusS}px;
  padding: ${({ theme }) => theme.spaces.smallS}px;
`;

export const AddToDoInput = styled.input`
  border: none;
`;

export const ClearButton = styled.button`
  ${flexCenterVertical}
  ${resetButton}
  cursor: pointer;
  transition: 0.2s;
  padding-right: ${({ theme }) => theme.spaces.smallS}px;
`;

export const AddToDoButton = styled.button`
  ${greyBorder}
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.largeL}px;
  background: transparent;
  width: 30px;
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }
`;

export const ToDoListWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.mediumL}px;
  max-height: 60%;
  overflow-x: auto;
`;
