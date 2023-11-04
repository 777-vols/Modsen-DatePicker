import styled from 'styled-components';

import Images from '@/constants/images';

const { errorImg } = Images;

const sizeS = 250;
const sizeM = 300;
const sizeL = 500;
const sizeXL = 700;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightRed};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  min-height: ${sizeS}px;
  min-width: ${sizeS}px;
  width: ${sizeXL}px;
  height: ${sizeXL}px;
  display: flex;
  justify-content: center;
  background-image: url(${errorImg});
  @media (${({ theme }) => theme.breakPoints.mediumS}) {
    width: ${sizeL}px;
    height: ${sizeXL}px;
  }
  @media (${({ theme }) => theme.breakPoints.smallL}) {
    width: ${sizeM}px;
    height: ${sizeM}px;
  }
  @media (${({ theme }) => theme.breakPoints.smallS}) {
    width: ${sizeS}px;
    height: ${sizeS}px;
  }
`;
