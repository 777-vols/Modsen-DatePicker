import styled from 'styled-components';

interface WrapperProps {
  theme: object;
}

const Wrapper = styled.div<WrapperProps>`
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.padding.smallL};
  padding: ${({ theme }): object => theme.padding.mediumS};
`;

export default Wrapper;
