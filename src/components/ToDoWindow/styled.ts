import styled from 'styled-components';

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
  padding: ${({ theme }) => theme.padding.mediumS};
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
`;
export const WrapperInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
export const SelectedDateHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
`;
export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  width: 17px;
  height: 17px;
  transition: 0.2s;
  &:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;
export const CloseImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const AddToDoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.margin.mediumS};
  width: 100%;
  border-radius: 5px;
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  width: 100%;
  margin-right: ${({ theme }) => theme.margin.mediumS};
  border-radius: 5px;
  padding: ${({ theme }) => theme.padding.smallS};
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
  padding-right: ${({ theme }) => theme.padding.smallS};
`;
export const AddToDoButton = styled.button`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.largeL};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  width: 30px;
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }
`;
export const ToDoListWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.mediumL};
  height: 100%;
`;
