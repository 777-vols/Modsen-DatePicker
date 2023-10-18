import { daysNamesStartsWithMon } from '@/constants/calendarData';

const firstDayIndex = 0;

const firstDayIndexOfTheWeek = 0;
const lastDayIndexOfTheWeek = 6;
const oneDay = 1;
const oneMonth = 1;
const twoDays = 2;

const numOfWeeksInCalendar = 6;
const numOfDaysInOneWeek = 7;

export const getNumberOfDaysInMonth = (year: number, month: number): number =>
  new Date(year, month, firstDayIndex).getDate();

export const padWithZeros = (value: number, length: number = 2): string =>
  `${value}`.padStart(length, '0');

export const getMonthFirstDayIndex = (month: number, year: number): number =>
  new Date(`${year}-${padWithZeros(month, 2)}-01`).getDay() + oneDay;

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
export const getArrayOfDaysForCalendar = (
  beginningOfTheMonth: number,
  endOfTheMonth: number,
  selectedMonth: number,
  selectedYear: number,
  beginningOfTheWeek: string
): Array<{ id: number; day: string | number }> => {
  const arrayOfDaysInMonth = getArrayOfDaysInMonth(beginningOfTheMonth, endOfTheMonth);

  const monthFirstDay = getMonthFirstDayIndex(selectedMonth, selectedYear);

  const prevMonthDaysNumber =
    getNumberOfDaysInMonth(selectedYear, selectedMonth - oneMonth) + oneDay;
  const prevMonthDaysArray = getArrayOfDaysInMonth(oneDay, prevMonthDaysNumber);

  const nextMonthDaysNumber =
    getNumberOfDaysInMonth(selectedYear, selectedMonth + oneMonth) - oneDay;
  const nextMonthDaysArray = getArrayOfDaysInMonth(oneDay, nextMonthDaysNumber);

  let numberOfDaysFromPrevMonth: number;
  if (beginningOfTheWeek === daysNamesStartsWithMon[firstDayIndex]) {
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
    (numberOfDaysFromPrevMonth + arrayOfDaysInMonth.length);

  const prevMonthVisibleDays = prevMonthDaysArray
    .slice(prevMonthDaysArray.length - numberOfDaysFromPrevMonth)
    .map((item) => String(item));

  const nextMonthVisibleDays = nextMonthDaysArray
    .slice(firstDayIndexOfTheWeek, numberOfDaysFromNextMonth)
    .map((item) => String(item));

  const rangedResult = [...prevMonthVisibleDays, ...arrayOfDaysInMonth, ...nextMonthVisibleDays];

  return rangedResult.map((dayIndex, index) => ({ id: index, day: dayIndex }));
};
