import React, { FC, memo, useState } from 'react';

import calendarImg from '@/assets/calendar.svg';
import clearImg from '@/assets/clear.svg';
import { getWeekNumberForDay } from '@/helpers/calendarHelpers';
import dateInputCheckHelper from '@/helpers/dateInputCheckHelpers';

import config from './config';
import { ErrorMessage, Input, Panel, StyledButtton, Title, TitleWrapper, Wrapper } from './styles';
import IProps from './types';

const { defaultTitle, placeholder, errorMessage } = config;

const HeaderDateInput: FC<IProps> = ({
  title,
  form,
  dateInputValue,
  isWeekStartsOnMonday,
  dateInputChangeHandler,
  openCalendarHandler,
  changeCurrentActiveDay,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  changeActiveWeekNumber
}) => {
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const dateInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    dateInputChangeHandler(target.value);
    setIsErrorMessage(false);

    if (!dateInputCheckHelper(target.value)) {
      setIsErrorMessage(true);
    }
    if (dateInputCheckHelper(target.value)) {
      const [day, month, year] = target.value.split('/');

      changeCurrentActiveDay(Number(day));
      changeCurrentSelectedMonth(Number(month) - 1);
      changeCurrentSelectedYear(Number(year));
      if (form === 'week') {
        changeActiveWeekNumber(
          getWeekNumberForDay(Number(day), Number(month), Number(year), isWeekStartsOnMonday)
        );
      }
    }
    if (target.value === '') {
      setIsErrorMessage(false);
    }
  };

  const clearButtonHandler = () => {
    dateInputChangeHandler('');
    setIsErrorMessage(false);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title || defaultTitle}</Title>
      </TitleWrapper>
      <Panel>
        {isErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
