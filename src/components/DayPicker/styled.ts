import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  padding: ${({ theme }) => theme.padding.mediumS};
`;
export const WrapperInner = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
`;
