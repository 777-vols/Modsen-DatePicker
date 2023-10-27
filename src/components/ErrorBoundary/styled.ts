import styled from 'styled-components';

import error from '@/assets/error.svg';

export const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightRed};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  min-height: 250px;
  min-width: 250px;
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  background-image: url(${error});
  @media (${({ theme }) => theme.breakPoints.mediumS}) {
    width: 500px;
    height: 500px;
  }
  @media (${({ theme }) => theme.breakPoints.smallS}) {
    width: 300px;
    height: 300px;
  }
`;
