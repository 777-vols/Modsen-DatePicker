import React, { FC, memo, useState } from 'react';

import calendarImg from '@/assets/calendar.svg';
import clearImg from '@/assets/clear.svg';
import dateInputCheckHelper from '@/helpers/dateInputCheckHelpers';

import config from './config';
import { ErrorMessage, Input, Panel, StyledButtton, Title, TitleWrapper, Wrapper } from './styles';
import InterfaceProps from './types';

const { title, placeholder, errorMessage } = config;

const HeaderDateInput: FC<InterfaceProps> = ({
  dateInputValue,
  dateInputChangeHandler,
  openCalendarHandler
}) => {
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const dateInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dateInputChangeHandler(event.target.value);
    setIsErrorMessage(false);

    if (!dateInputCheckHelper(event.target.value)) {
      setIsErrorMessage(true);
    }
    if (event.target.value === '') {
      setIsErrorMessage(false);
    }
  };

  const clearButtonHandler = (): void => {
    dateInputChangeHandler('');
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        {isErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TitleWrapper>
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
