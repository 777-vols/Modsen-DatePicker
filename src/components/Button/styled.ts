import styled from 'styled-components';

interface Props {
  $bgColor: string;
}

const ButtonS = styled.button<Props>`
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : 'green')};
`;

export default ButtonS;
