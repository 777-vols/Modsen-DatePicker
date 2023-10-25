import React, { FC, memo } from 'react';

import { DayNumber, Wrapper } from './styled';
import IProps from './types';

const doubleClick = 2;

const CalendarDay: FC<IProps> = ({
  dayNumber,
  isBold,
  isHoliday,
  holidaysColor,
  isCurrentDay,
  activeDay,
  isWeekend,
  changeCurrentActiveDay,
  closeOpenToDoHandler
}) => {
  const handleClick = (event: React.MouseEvent) => {
    if (typeof dayNumber === 'number' && changeCurrentActiveDay) {
      changeCurrentActiveDay(dayNumber);
    }

    if (event.detail === doubleClick && closeOpenToDoHandler) {
      closeOpenToDoHandler();
    }
  };
  const isActive = activeDay === dayNumber;
  return (
    <Wrapper>
      <DayNumber
        onClick={handleClick}
        $isHoliday={isHoliday}
        $isWeekend={isWeekend}
        $holidaysColor={holidaysColor}
        $bold={isBold}
        $isActive={isActive}
        $isCurrentDay={isCurrentDay}>
        {dayNumber}
      </DayNumber>
    </Wrapper>
  );
};

export default memo(CalendarDay);
