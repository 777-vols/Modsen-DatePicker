import React, { FC, memo } from 'react';

import { DayNumber, TodosIdentifier, Wrapper } from './styled';
import { IProps } from './types';

const doubleClick = 2;

const CalendarDay: FC<IProps> = (props) => {
  const {
    rangeStart,
    rangeEnd,
    isIncludeInRange,
    dayNumber,
    isBold,
    isHoliday,
    holidaysColor,
    isCurrentDay,
    activeDay,
    isWeekend,
    isHaveTodos,
    changeCurrentActiveDay,
    closeOpenToDoHandler
  } = props;

  const handleClick = (event: React.MouseEvent) => {
    if (typeof dayNumber === 'number' && changeCurrentActiveDay) {
      changeCurrentActiveDay(dayNumber);
    }

    if (event.detail === doubleClick && closeOpenToDoHandler) {
      closeOpenToDoHandler();
    }
  };

  const isActiveDay = activeDay === dayNumber;

  return (
    <Wrapper>
      <DayNumber
        data-testid="monthDay"
        onClick={handleClick}
        $isHoliday={isHoliday}
        $isWeekend={isWeekend}
        $holidaysColor={holidaysColor}
        $bold={isBold}
        $isActiveDay={isActiveDay}
        $isCurrentDay={isCurrentDay}
        $isIncludeInRange={isIncludeInRange}
        $isStartRangeDay={rangeStart}
        $isEndRangeDay={rangeEnd}>
        {dayNumber}
        <TodosIdentifier $isHaveTodos={isHaveTodos}>!</TodosIdentifier>
      </DayNumber>
    </Wrapper>
  );
};

export default memo(CalendarDay);
