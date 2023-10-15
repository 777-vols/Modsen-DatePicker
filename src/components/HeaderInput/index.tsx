import React, { memo } from 'react';

import calendarImg from '@/assets/calendar.svg';
import clearImg from '@/assets/clear.svg';
import InterfaceProps from './types';
import { StyledButtton, Input, Panel, Title, Wrapper } from './styles';
import config from './config';

const { title, placeholder } = config;

const HeaderInput = memo(function HeaderInput({ value, inputHandler }: InterfaceProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Panel>
        <StyledButtton>
          <img src={calendarImg} alt="calendarImg" />
        </StyledButtton>
        <Input placeholder={placeholder} value={value} onChange={inputHandler} />
        <StyledButtton>
          <img src={clearImg} alt="clearImg" />
        </StyledButtton>
      </Panel>
    </Wrapper>
  );
});

export default HeaderInput;
