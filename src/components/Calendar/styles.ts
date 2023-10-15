import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.padding.smallL};
  padding: ${({ theme }) => theme.padding.mediumS};
`;
