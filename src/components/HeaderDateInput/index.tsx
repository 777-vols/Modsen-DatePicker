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
  minDate,
  maxDate,
  dateInputValue,
  isWeekStartsOnMonday,
  dateInputChangeHandler,
  openCalendarHandler,
  changeCurrentActiveDay,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  changeActiveWeekNumber,
  onChangeRangeDate
}) => {
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const dateInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const isInputCorrect = dateInputCheckHelper(target.value, minDate, maxDate);
    dateInputChangeHandler(target.value);
    setIsErrorMessage(false);

    if (!isInputCorrect) {
      setIsErrorMessage(true);
    }
    if (isInputCorrect) {
      const [day, month, year] = target.value.split('/');

      changeCurrentSelectedYear(Number(year));
      changeCurrentSelectedMonth(Number(month) - 1);
      changeCurrentActiveDay(Number(day));
      onChangeRangeDate(new Date(Number(year), Number(month) - 1, Number(day)));

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
        <StyledButtton data-testid="show-hideButton" onClick={openCalendarHandler}>
          <img src={calendarImg} alt="calendarImg" />
        </StyledButtton>
        <Input
          data-testid="headerInput"
          placeholder={placeholder}
          value={dateInputValue}
          onChange={dateInputHandler}
        />
        <StyledButtton data-testid="clearInput" onClick={clearButtonHandler}>
          <img src={clearImg} alt="clearImg" />
        </StyledButtton>
      </Panel>
    </Wrapper>
  );
};

export default memo(HeaderDateInput);
