import React, { FC, memo } from 'react';

import { DayNumber, Wrapper } from './styled';
import IProps from './types';

const doubleClick = 2;

const CalendarDay: FC<IProps> = ({
  dayValue,
  isBold,
  isHoliday,
  holidaysColor,
  isCurrentDay,
  activeDay,
  changeCurrentActiveDay,
  closeOpenToDoHandler
}) => {
  const handleClick = (event: React.MouseEvent) => {
    if (typeof dayValue === 'number' && changeCurrentActiveDay) {
      changeCurrentActiveDay(dayValue);
    }

    if (event.detail === doubleClick && closeOpenToDoHandler) {
      closeOpenToDoHandler();
    }
  };
  const isActive = activeDay === dayValue;
  return (
    <Wrapper>
      <DayNumber
        onClick={handleClick}
        $isHoliday={isHoliday}
        $holidaysColor={holidaysColor}
        $bold={isBold}
        $isActive={isActive}
        $isCurrentDay={isCurrentDay}>
        {dayValue}
      </DayNumber>
    </Wrapper>
  );
};

export default memo(CalendarDay);
