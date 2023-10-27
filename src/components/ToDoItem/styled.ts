import styled, { css } from 'styled-components';

interface InterfaceTextSpan {
  $isDone: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;
export const Text = styled.span<InterfaceTextSpan>`
  cursor: pointer;
  max-width: 180px;
  width: 100%;
  word-wrap: break-word;
  ${({ $isDone }) =>
    $isDone &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.red};
    `};
`;
