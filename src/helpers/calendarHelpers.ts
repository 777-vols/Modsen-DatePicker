import { holidaysArray } from '@/constants/calendarData';

import { getLocaleStorageItem } from './localeStorageHelpers';
import { IDay, IDayObject, ReduceType } from './types';

const firstDayIndex = 0;

const firstDayIndexOfTheWeek = 0;
const firstMonthIndex = 0;
const lastDayIndexOfTheWeek = 6;
const lastMonthIndex = 11;
const oneDay = 1;
const oneMonth = 1;

const numOfWeeksInCalendar = 6;
const numOfDaysInOneWeek = 7;

export const getNumberOfDaysInMonth = (year: number, month: number): number =>
  new Date(year, month, firstDayIndex).getDate();

export const paddingWithZeros = (value: number, length: number = 2): string =>
  `${value}`.padStart(length, '0');

export const getMonthFirstDayIndex = (month: number, year: number): number =>
  new Date(`${year}-${paddingWithZeros(month)}-01`).getDay();

export const compareDates = (date1: Date, date2: Date) => {
  if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  ) {
    return true;
  }
  return false;
};

export const getArrayOfDaysInMonth = (
  beginningOfTheMonth: number,
  endOfTheMonth: number
): Array<number> => {
  const length = Math.abs(endOfTheMonth - beginningOfTheMonth);

  const { daysArray } = Array.from({ length }).reduce(
    ({ daysArray: daysArrayCopy, dayNumber }: ReduceType) => ({
      daysArray: [...daysArrayCopy, dayNumber],
      dayNumber: dayNumber + oneDay
    }),
    { daysArray: [], dayNumber: beginningOfTheMonth }
  );

  return daysArray;
};

export const getWeekend = (day: number, month: number, year: number) => {
  const dayInex = new Date(year, month, day).getDay();
  if (dayInex === firstDayIndexOfTheWeek || dayInex === lastDayIndexOfTheWeek) {
    return true;
  }
  return false;
};

const getProppertiesForDaysArray = (
  daysArray: Array<number | string>,
  month: number,
  year: number,
  isWeekendsOn: boolean,
  rangeStartDate?: Date,
  rangeEndDate?: Date
): Array<IDay> =>
  daysArray.map((dayIndex) => {
    const localeStorageObject = getLocaleStorageItem('allDaysToDoObject');
    const localeStorageProperty = `${dayIndex} ${month - 1} ${year}`;

    const monthIndex = month - oneMonth;
    let dayObject;
    let dataMonthIndex = monthIndex > lastMonthIndex ? firstMonthIndex : monthIndex;
    dataMonthIndex = monthIndex < firstMonthIndex ? lastMonthIndex : monthIndex;

    if (holidaysArray[dataMonthIndex]?.day.includes(Number(dayIndex))) {
      dayObject = { dayNumber: dayIndex, isHoliday: true };
    } else {
      dayObject = { dayNumber: dayIndex };
    }

    if (
      new Date().getMonth() === monthIndex &&
      new Date().getDate() === dayObject.dayNumber &&
      new Date().getFullYear() === year
    ) {
      dayObject = { ...dayObject, isCurrentDay: true };
    }

    if (isWeekendsOn && getWeekend(Number(dayIndex), monthIndex, year)) {
      dayObject = { ...dayObject, isWeekend: true };
    }

    if (!(rangeStartDate && rangeEndDate)) {
      if (localeStorageObject[localeStorageProperty]) {
        dayObject = { ...dayObject, isHaveTodos: true };
      }
    }

    if (rangeStartDate && rangeEndDate) {
      const currentDayDate = new Date(year, monthIndex, Number(dayObject.dayNumber));

      if (compareDates(rangeStartDate, currentDayDate)) {
        dayObject = { ...dayObject, rangeStart: true };
      } else if (compareDates(rangeEndDate, currentDayDate)) {
        dayObject = { ...dayObject, rangeEnd: true };
      } else if (currentDayDate > rangeStartDate && currentDayDate < rangeEndDate) {
        dayObject = { ...dayObject, isIncludeInRange: true };
      }
    }

    return dayObject;
  });

export const getCurrentPrevAndNextMonthDays = (
  selectedMonth: number,
  selectedYear: number,
  isWeekStartsOnMonday: boolean
) => {
  let numberOfDaysFromPrevMonth: number;
  const endOfTheMonth = getNumberOfDaysInMonth(selectedYear, selectedMonth) + oneDay;
  const currentMonthDaysArray = getArrayOfDaysInMonth(oneDay, endOfTheMonth);

  const monthFirstDay = getMonthFirstDayIndex(selectedMonth, selectedYear);

  const prevMonthDaysNumber =
    getNumberOfDaysInMonth(selectedYear, selectedMonth - oneMonth) + oneDay;
  const prevMonthDaysArray = getArrayOfDaysInMonth(oneDay, prevMonthDaysNumber);

  const nextMonthDaysNumber =
    getNumberOfDaysInMonth(selectedYear, selectedMonth + oneMonth) - oneDay;
  const nextMonthDaysArray = getArrayOfDaysInMonth(oneDay, nextMonthDaysNumber);

  if (isWeekStartsOnMonday) {
    numberOfDaysFromPrevMonth = monthFirstDay - oneDay;
    if (numberOfDaysFromPrevMonth === -oneDay) {
      numberOfDaysFromPrevMonth = lastDayIndexOfTheWeek;
    }
  } else {
    numberOfDaysFromPrevMonth = monthFirstDay;
  }

  const numberOfDaysFromNextMonth =
    numOfWeeksInCalendar * numOfDaysInOneWeek -
    (numberOfDaysFromPrevMonth + currentMonthDaysArray.length);

  const prevMonthVisibleDays = prevMonthDaysArray
    .slice(prevMonthDaysArray.length - numberOfDaysFromPrevMonth)
    .map((item) => String(item));

  const nextMonthVisibleDays = nextMonthDaysArray
    .slice(firstDayIndexOfTheWeek, numberOfDaysFromNextMonth)
    .map((item) => String(item));

  return [prevMonthVisibleDays, currentMonthDaysArray, nextMonthVisibleDays];
};

export const getArrayOfDaysForMonthCalendar = (
  selectedMonth: number,
  selectedYear: number,
  isWeekStartsOnMonday: boolean,
  isWeekendsOn: boolean,
  rangeStartDate?: Date,
  rangeEndDate?: Date
): Array<IDayObject> => {
  const [prevMonthVisibleDays, currentMonthDaysArray, nextMonthVisibleDays] =
    getCurrentPrevAndNextMonthDays(selectedMonth, selectedYear, isWeekStartsOnMonday);

  const calendarDaysArray = [
    ...getProppertiesForDaysArray(
      prevMonthVisibleDays,
      selectedMonth - oneMonth,
      selectedYear,
      isWeekendsOn,
      rangeStartDate,
      rangeEndDate
    ),
    ...getProppertiesForDaysArray(
      currentMonthDaysArray,
      selectedMonth,
      selectedYear,
      isWeekendsOn,
      rangeStartDate,
      rangeEndDate
    ),
    ...getProppertiesForDaysArray(
      nextMonthVisibleDays,
      selectedMonth + oneMonth,
      selectedYear,
      isWeekendsOn,
      rangeStartDate,
      rangeEndDate
    )
  ];
  return calendarDaysArray.map((dayObject, index) => ({ id: index, day: dayObject }));
};

export const convertToWeekFormat = (monthFormatArray: Array<IDayObject>): Array<IDayObject[]> => {
  const convertedArray = [];
  let oneWeekArray = [];

  for (let dayIndex = 0; dayIndex < monthFormatArray.length; dayIndex += 1) {
    if (oneWeekArray.length === numOfDaysInOneWeek) {
      const weekIncludesCurrentMonthDays = oneWeekArray.filter(
        (dayObj) => typeof dayObj.day.dayNumber === 'number'
      );

      if (weekIncludesCurrentMonthDays.length > 0) {
        convertedArray.push(oneWeekArray);
        oneWeekArray = [];
      }
    }
    oneWeekArray.push(monthFormatArray[dayIndex]);
  }
  return convertedArray;
};

export const getWeekNumberForDay = (
  day: number,
  month: number,
  year: number,
  isWeekStartsOnMonday: boolean
): number => {
  const [prevMonthVisibleDays, currentMonthDaysArray, nextMonthVisibleDays] =
    getCurrentPrevAndNextMonthDays(month + oneMonth, year, isWeekStartsOnMonday);

  const monthArray = [...prevMonthVisibleDays, ...currentMonthDaysArray, ...nextMonthVisibleDays];

  const filledWeeks = monthArray.reduce(
    (weeks: Array<Array<number | string>>, dayNumber, index) => {
      const weeksCopy = [...weeks];
      const weekIndex = Math.floor(index / numOfDaysInOneWeek);
      weeksCopy[weekIndex] = weeks[weekIndex] || [];
      weeksCopy[weekIndex].push(dayNumber);
      return weeksCopy;
    },
    []
  );

  const weekIndex = filledWeeks.findIndex((week) => week.includes(day));
  return weekIndex >= 0 ? weekIndex : 0;
};

export const getYearsOptionsArray = (
  minDate: Date,
  maxDate: Date
): Array<{ value: number; label: number }> => {
  const minYear = minDate.getFullYear();
  const maxYear = maxDate.getFullYear();
  const yearsArray: number[] = [];

  for (let yearNumber = minYear; yearNumber <= maxYear; yearNumber += 1) {
    yearsArray.push(yearNumber);
  }
  return yearsArray.map((year) => ({ value: year, label: year }));
};

export const getWeeksCount = (
  month: number,
  year: number,
  isWeekStartsOnMonday: boolean,
  isWeekendsOn: boolean
) => {
  const arrayOfDays = getArrayOfDaysForMonthCalendar(
    month + oneMonth,
    year,
    isWeekStartsOnMonday,
    isWeekendsOn
  );

  const arrayOfweeks = convertToWeekFormat(arrayOfDays);
  return arrayOfweeks.length - 1;
};
