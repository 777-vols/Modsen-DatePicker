import { css } from 'styled-components';

import theme from '@/constants/theme';

export const maxSize = css`
  width: 100%;
  height: 100%;
`;

export const flexCenterVertical = css`
  display: flex;
  justify-content: space-between;
`;

export const flexCenterHorizontally = css`
  display: flex;
  justify-content: center;
`;

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const greyBorder = css`
  border: 2px solid ${theme.colors.gray};
`;

export const gridSevenColumns = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const blueDay = css`
  font-size: ${theme.fontSize.mediumXL}px;
  color: ${theme.colors.white};
  background: ${theme.colors.blue};
`;

export const resetButton = css`
  border: none;
  background: transparent;
`;
