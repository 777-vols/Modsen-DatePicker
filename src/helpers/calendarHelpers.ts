import { holidaysArray } from '@/constants/calendarData';

import { getLocaleStorageItem } from './localeStorageHelpers';

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

interface IdayObject {
  id: number;
  day: {
    dayNumber: string | number;
    isHoliday: boolean;
    isCurrentDay: boolean;
    isWeekend: boolean;
    isHaveTodos: boolean;
  };
}

export const getNumberOfDaysInMonth = (year: number, month: number): number =>
  new Date(year, month, firstDayIndex).getDate();

export const padWithZeros = (value: number, length: number = 2): string =>
  `${value}`.padStart(length, '0');

export const getMonthFirstDayIndex = (month: number, year: number): number =>
  new Date(`${year}-${padWithZeros(month)}-01`).getDay() + oneDay;

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
  if (dayInex === 0 || dayInex === 6) {
    return true;
  }
  return false;
};

const getPropppertiesForDaysArray = (
  daysArray: Array<number | string>,
  month: number,
  year: number,
  isWeekendsOn: boolean
): Array<{
  dayNumber: number | string;
  isHoliday: boolean;
  isCurrentDay: boolean;
  isWeekend: boolean;
  isHaveTodos: boolean;
}> =>
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
      dayObject = { dayNumber: dayIndex, isHoliday: false };
    }

    if (
      new Date().getMonth() === monthIndex &&
      new Date().getDate() === dayObject.dayNumber &&
      new Date().getFullYear() === year
    ) {
      dayObject = { ...dayObject, isCurrentDay: true };
    } else {
      dayObject = { ...dayObject, isCurrentDay: false };
    }

    if (isWeekendsOn && getWeekend(Number(dayIndex), monthIndex, year)) {
      dayObject = { ...dayObject, isWeekend: true };
    } else {
      dayObject = { ...dayObject, isWeekend: false };
    }

    if (localeStorageObject[localeStorageProperty as keyof typeof localeStorageObject]) {
      dayObject = { ...dayObject, isHaveTodos: true };
    } else {
      dayObject = { ...dayObject, isHaveTodos: false };
    }

    return dayObject;
  });

export const getArrayOfDaysForMonthCalendar = (
  beginningOfTheMonth: number,
  endOfTheMonth: number,
  selectedMonth: number,
  selectedYear: number,
  isWeekStartsOnMonday: boolean,
  isWeekendsOn: boolean
): Array<IdayObject> => {
  let numberOfDaysFromPrevMonth: number;
  const currentMonthDaysArray = getArrayOfDaysInMonth(beginningOfTheMonth, endOfTheMonth);

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

  const calendarDaysArray = [
    ...getPropppertiesForDaysArray(
      prevMonthVisibleDays,
      selectedMonth - oneMonth,
      selectedYear,
      isWeekendsOn
    ),
    ...getPropppertiesForDaysArray(
      currentMonthDaysArray,
      selectedMonth,
      selectedYear,
      isWeekendsOn
    ),
    ...getPropppertiesForDaysArray(
      nextMonthVisibleDays,
      selectedMonth + oneMonth,
      selectedYear,
      isWeekendsOn
    )
  ];

  return calendarDaysArray.map((dayObject, index) => ({ id: index, day: dayObject }));
};

export const convertToWeekFormat = (
  monthFormatArray: Array<IdayObject>,
  changeWeeksCount: (newWeeksCount: number) => void,
  changeActiveWeekNumber: (newActiveWeek: number) => void,
  activeWeekNumber: number
): Array<IdayObject> => {
  const convertedArray = [];
  let oneWeekArray = [];

  for (let dayIndex = 0; dayIndex <= monthFormatArray.length; dayIndex += 1) {
    if (oneWeekArray.length === numOfDaysInOneWeek) {
      const filledDaysInWeek = oneWeekArray.filter((dayObj) => {
        if (dayObj.day.isCurrentDay) {
          changeActiveWeekNumber(convertedArray.length);
        }
        if (typeof dayObj.day.dayNumber === 'number') {
          return dayObj;
        }
        return null;
      });

      if (filledDaysInWeek.length > 0) {
        convertedArray.push(oneWeekArray);
        oneWeekArray = [];
      }
    }
    oneWeekArray.push(monthFormatArray[dayIndex]);
  }

  changeWeeksCount(convertedArray.length - 1);
  return convertedArray[activeWeekNumber];
};
