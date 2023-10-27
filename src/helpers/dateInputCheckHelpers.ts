import { getNumberOfDaysInMonth } from './calendarHelpers';

const dateInputCheckHelper = (dateValue: string, minDate: Date, maxDate: Date): boolean => {
  const oneMonth = 1;
  const firstDayIndex = 1;
  const decemberIndex = 12;
  const checkDateRegExp = /^\d{2}\/\d{2}\/\d{4}$/;
  const [dayNumber, monthNumber, yearNumber] = dateValue
    .split('/')
    .map((dateItem) => Number(dateItem));

  let date;
  if (dayNumber && monthNumber && String(yearNumber).length === 4) {
    date = new Date(yearNumber, monthNumber - 1, dayNumber);
  }

  if (
    !checkDateRegExp.test(dateValue) ||
    monthNumber < oneMonth ||
    monthNumber > decemberIndex ||
    dayNumber < firstDayIndex ||
    dayNumber > getNumberOfDaysInMonth(yearNumber, monthNumber)
  ) {
    return false;
  }
  if (date && (date < minDate || date > maxDate)) {
    return false;
  }
  return true;
};

export default dateInputCheckHelper;
