import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1`
  margin: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.mediumS}px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL}px;
  min-height: 20px;
  margin-bottom: ${({ theme }) => theme.spaces.mediumS}px;
  word-wrap: break-word;
`;
export const ErrorMessage = styled.span`
  position: absolute;
  top: -15px;
  right: 15px;
  font-size: ${({ theme }) => theme.fontSize.mediumS}px;
  color: ${({ theme }) => theme.colors.red};
`;
export const Panel = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.mediumM}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  height: 42px;
`;
export const Input = styled.input`
  margin: ${({ theme }) => theme.spaces.zero}px ${({ theme }) => theme.spaces.smallL}px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL}px;
  height: 20px;
  width: 100%;
  border: none;
`;
export const StyledButtton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  transition: 0.2s;
  &:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;
