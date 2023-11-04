import styled from 'styled-components';

const buttonSize = 17;
const closeImgSize = 16;
const borderRadiusS = 5;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
`;

export const WrapperInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SelectedDateHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.mediumM}px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  transition: 0.2s;
  &:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;

export const CloseImg = styled.img`
  width: 100%;
  height: 100%;
  min-height: ${closeImgSize}px;
  min-width: ${closeImgSize}px;
`;

export const AddToDoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces.mediumS}px;
  width: 100%;
  border-radius: ${borderRadiusS}px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  margin-right: ${({ theme }) => theme.spaces.mediumS}px;
  border-radius: ${borderRadiusS}px;
  padding: ${({ theme }) => theme.spaces.smallS}px;
`;

export const AddToDoInput = styled.input`
  border: none;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  transition: 0.2s;
  padding-right: ${({ theme }) => theme.spaces.smallS}px;
`;

export const AddToDoButton = styled.button`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.largeL}px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray};
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
