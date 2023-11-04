import React, { useMemo } from 'react';

import CalendarDay from '@/components/CalendarDay';
import { Form } from '@/components/RangePicker/types';
import { convertToWeekFormat, getArrayOfDaysForMonthCalendar } from '@/helpers/calendarHelpers';

const useDaysNumbers = (
  form: Form,
  currentSelectedMonth: number,
  currentSelectedYear: number,
  isWeekendsOn: boolean,
  isWeekStartsOnMonday: boolean,
  activeWeekNumber: number,
  holidaysColor: string,
  activeDay: number,
  changeCurrentActiveDay: (newActiveDay: number) => void,
  closeOpenToDoHandler: () => void,
  rangeStartDate?: Date,
  rangeEndDate?: Date
) =>
  useMemo(() => {
    let arrayOfDaysForCalendar;
    const arrayOfDays = getArrayOfDaysForMonthCalendar(
      currentSelectedMonth + 1,
      currentSelectedYear,
      isWeekStartsOnMonday,
      isWeekendsOn,
      rangeStartDate,
      rangeEndDate
    );

    if (form === 'week') {
      const arrayOfweeks = convertToWeekFormat(arrayOfDays);
      arrayOfDaysForCalendar = arrayOfweeks[activeWeekNumber] || arrayOfweeks[0];
    } else {
      arrayOfDaysForCalendar = arrayOfDays;
    }

    return arrayOfDaysForCalendar.map(({ id, day }) => {
      const {
        dayNumber,
        isHoliday,
        isCurrentDay,
        isWeekend,
        isHaveTodos,
        rangeStart,
        rangeEnd,
        isIncludeInRange
      } = day;
      if (typeof dayNumber === 'string') {
        return (
          <CalendarDay
            key={id}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            isIncludeInRange={isIncludeInRange}
            dayNumber={dayNumber}
            isHoliday={isHoliday}
            isWeekend={isWeekend}
            holidaysColor={holidaysColor}
            isCurrentDay={isCurrentDay}
          />
        );
      }

      return (
        <CalendarDay
          key={id}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          isIncludeInRange={isIncludeInRange}
          dayNumber={dayNumber}
          isHoliday={isHoliday}
          isWeekend={isWeekend}
          isHaveTodos={isHaveTodos}
          holidaysColor={holidaysColor}
          isCurrentDay={isCurrentDay}
          activeDay={activeDay}
          changeCurrentActiveDay={changeCurrentActiveDay}
          closeOpenToDoHandler={closeOpenToDoHandler}
          isBold
        />
      );
    });
  }, [
    currentSelectedMonth,
    currentSelectedYear,
    isWeekStartsOnMonday,
    isWeekendsOn,
    rangeStartDate,
    rangeEndDate,
    form,
    activeWeekNumber,
    holidaysColor,
    activeDay,
    changeCurrentActiveDay,
    closeOpenToDoHandler
  ]);

export default useDaysNumbers;
