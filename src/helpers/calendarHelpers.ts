import { daysNamesStartsWithMonday, holidaysArray } from '@/constants/calendarData';

const firstDayIndex = 0;

const firstDayIndexOfTheWeek = 0;
const firstMonthIndex = 0;
const lastDayIndexOfTheWeek = 6;
const lastMonthIndex = 11;
const oneDay = 1;
const twoDays = 2;
const oneMonth = 1;
const twoMonth = 2;

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
): Array<{
  id: number;
  day: { dayNumber: string | number; isHoliday: boolean; isCurrentDay: boolean };
}> => {
  let numberOfDaysFromPrevMonth: number;
  const currentMonthDaysArray = getArrayOfDaysInMonth(beginningOfTheMonth, endOfTheMonth);

  const monthFirstDay = getMonthFirstDayIndex(selectedMonth, selectedYear);

  const prevMonthDaysNumber =
    getNumberOfDaysInMonth(selectedYear, selectedMonth - oneMonth) + oneDay;
  const prevMonthDaysArray = getArrayOfDaysInMonth(oneDay, prevMonthDaysNumber);

  const nextMonthDaysNumber =
    getNumberOfDaysInMonth(selectedYear, selectedMonth + oneMonth) - oneDay;
  const nextMonthDaysArray = getArrayOfDaysInMonth(oneDay, nextMonthDaysNumber);

  const markHolidaysAndCurrentDay = (
    daysArray: Array<number | string>,
    monthIndex: number
  ): Array<{ dayNumber: number | string; isHoliday: boolean; isCurrentDay: boolean }> =>
    daysArray.map((dayIndex) => {
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
        new Date().getFullYear() === selectedYear
      )
        dayObject = { ...dayObject, isCurrentDay: true };
      else dayObject = { ...dayObject, isCurrentDay: false };

      return dayObject;
    });

  if (beginningOfTheWeek === daysNamesStartsWithMonday[firstDayIndex]) {
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
    ...markHolidaysAndCurrentDay(prevMonthVisibleDays, selectedMonth - twoMonth),
    ...markHolidaysAndCurrentDay(currentMonthDaysArray, selectedMonth - oneMonth),
    ...markHolidaysAndCurrentDay(nextMonthVisibleDays, selectedMonth)
  ];

  return calendarDaysArray.map((dayObject, index) => ({ id: index, day: dayObject }));
};
