import React, { FC, memo } from 'react';

import { DayNumber, Wrapper } from './styled';
import IProps from './types';

const CalendarDay: FC<IProps> = ({
  dayValue,
  isBold,
  isHoliday,
  isCurrentDay,
  activeDay,
  changeCurrentActiveDay
}) => {
  const handleClick = () => {
    if (typeof dayValue === 'number' && changeCurrentActiveDay) {
      changeCurrentActiveDay(dayValue);
    }
  };
  const isActive = activeDay === dayValue;
  return (
    <Wrapper>
      <DayNumber
        onClick={handleClick}
        $isHoliday={isHoliday}
        $bold={isBold}
        $isActive={isActive}
        $isCurrentDay={isCurrentDay}>
        {dayValue}
      </DayNumber>
    </Wrapper>
  );
};

export default memo(CalendarDay);
