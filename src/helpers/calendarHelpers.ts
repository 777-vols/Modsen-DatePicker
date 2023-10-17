const firstDayIndex = 0;

const getNumberOfDaysInMonthNumber = (yearNumber: number, monthNumber: number): number =>
  new Date(yearNumber, monthNumber, firstDayIndex).getDate();

export default getNumberOfDaysInMonthNumber;
