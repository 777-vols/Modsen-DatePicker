import getNumberOfDaysInMonthNumber from './calendarHelpers';

const dateInputCheckHelper = (dateValue: string): boolean => {
  const oneMonth = 1;
  const firstDayIndex = 1;
  const decemberIndex = 12;
  const checkDateRegExp = /^\d{2}\/\d{2}\/\d{4}$/;
  const [dayNumber, monthNumber, yearNumber] = dateValue
    .split('/')
    .map((dateItem) => Number(dateItem));

  if (
    !checkDateRegExp.test(dateValue) ||
    monthNumber < oneMonth ||
    monthNumber > decemberIndex ||
    dayNumber < firstDayIndex ||
    dayNumber > getNumberOfDaysInMonthNumber(yearNumber, monthNumber)
  ) {
    return false;
  }
  return true;
};

export default dateInputCheckHelper;
