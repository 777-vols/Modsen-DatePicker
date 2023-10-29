import { holidaysArray } from '@/constants/calendarData';

import { getLocaleStorageItem } from './localeStorageHelpers';
import { IDay, IDayObject } from './types';

const firstDayIndex = 0;

const firstDayIndexOfTheWeek = 0;
const firstMonthIndex = 0;
const lastDayIndexOfTheWeek = 6;
const lastMonthIndex = 11;
const oneDay = 1;
const twoDays = 2;
const oneMonth = 1;

const numOfWeeksInCalendar = 6;
const numOfDaysInOneWeek = 7;

export const getNumberOfDaysInMonth = (year: number, month: number): number =>
  new Date(year, month, firstDayIndex).getDate();

export const padWithZeros = (value: number, length: number = 2): string =>
  `${value}`.padStart(length, '0');

export const getMonthFirstDayIndex = (month: number, year: number): number =>
  new Date(`${year}-${padWithZeros(month)}-01`).getDay() + oneDay;

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
  type ReduceType = { daysArray: number[]; dayNumber: number };
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
    const localeStorageObject = getLocaleStorageItem('allDaysToDoObject') as object;
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
      if (localeStorageObject[localeStorageProperty as keyof typeof localeStorageObject]) {
        dayObject = { ...dayObject, isHaveTodos: true };
      }
    }

    if (rangeStartDate && rangeEndDate) {
      const currentDayDate = new Date(year, monthIndex, Number(dayObject.dayNumber));
      if (compareDates(rangeStartDate, currentDayDate)) {
        dayObject = { ...dayObject, rangeStart: true };
      }
      if (compareDates(rangeEndDate, currentDayDate)) {
        dayObject = { ...dayObject, rangeEnd: true };
      }
      if (currentDayDate > rangeStartDate && currentDayDate < rangeEndDate) {
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
    numberOfDaysFromPrevMonth = monthFirstDay - twoDays;
    if (numberOfDaysFromPrevMonth === -oneDay) {
      if (monthFirstDay === oneDay) {
        numberOfDaysFromPrevMonth = lastDayIndexOfTheWeek;
      } else {
        numberOfDaysFromPrevMonth = oneDay;
      }
    }
  } else {
    numberOfDaysFromPrevMonth = monthFirstDay - oneDay;
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

  for (let dayIndex = 0; dayIndex <= monthFormatArray.length; dayIndex += oneDay) {
    if (oneWeekArray.length === numOfDaysInOneWeek) {
      const weekIncludesCurrentMonthDays = oneWeekArray.filter((dayObj) => {
        if (typeof dayObj.day.dayNumber === 'number') {
          return dayObj;
        }
        return null;
      });

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
    getCurrentPrevAndNextMonthDays(month, year, isWeekStartsOnMonday);

  const monthArray = [...prevMonthVisibleDays, ...currentMonthDaysArray, ...nextMonthVisibleDays];

  const convertedArray = [];
  let oneWeekArray = [];

  for (let dayIndex = 0; dayIndex <= monthArray.length; dayIndex += oneDay) {
    if (oneWeekArray.length === numOfDaysInOneWeek) {
      const filledDaysInWeek = oneWeekArray.filter((dayNumber) => {
        if (typeof dayNumber === 'number') {
          return dayNumber;
        }
        return null;
      });

      if (filledDaysInWeek.length > 0) {
        convertedArray.push(oneWeekArray);
        oneWeekArray = [];
      }
    }
    if (monthArray[dayIndex] === day) {
      return convertedArray.length;
    }
    oneWeekArray.push(monthArray[dayIndex]);
  }
  return 0;
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
