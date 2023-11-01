import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  padding: ${({ theme }) => theme.spaces.mediumS}px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
export const WrapperInner = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
`;
