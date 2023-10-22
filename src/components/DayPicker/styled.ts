import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  padding: 10px;
`;
export const WrapperInner = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
`;
