import React, { FC, memo } from 'react';

import calendarImg from '@/assets/calendar.svg';
import clearImg from '@/assets/clear.svg';

import config from './config';
import { Input, Panel, StyledButtton, Title, Wrapper } from './styles';
import InterfaceProps from './types';

const { title, placeholder } = config;

const HeaderDateInput: FC<InterfaceProps> = ({
  dateInputValue,
  dateInputChangeHandler,
  openCalendarHandler
}) => {
  const dateInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dateInputChangeHandler(event.target.value);
  };
  const clearButtonHandler = (): void => {
    dateInputChangeHandler('');
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Panel>
        <StyledButtton onClick={openCalendarHandler}>
          <img src={calendarImg} alt="calendarImg" />
        </StyledButtton>
        <Input placeholder={placeholder} value={dateInputValue} onChange={dateInputHandler} />
        <StyledButtton onClick={clearButtonHandler}>
          <img src={clearImg} alt="clearImg" />
        </StyledButtton>
      </Panel>
    </Wrapper>
  );
};

export default memo(HeaderDateInput);
