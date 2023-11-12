import {
  compareDates,
  convertToWeekFormat,
  getArrayOfDaysForMonthCalendar,
  getArrayOfDaysInMonth,
  getCurrentPrevAndNextMonthDays,
  getMonthFirstDayIndex,
  getNumberOfDaysInMonth,
  getWeekend,
  getWeekNumberForDay,
  getWeeksCount,
  getYearsOptionsArray,
  paddingWithZeros
} from './calendarHelpers';

describe('Testing getNumberOfDaysInMonth', () => {
  it('Should return correct number of days in month', () => {
    const result = getNumberOfDaysInMonth(2023, 11);
    expect(result).toBe(30);
  });
});

describe('Testing paddingWithZeros', () => {
  it('Should return string padding with nulls to lenght 2', () => {
    const result = paddingWithZeros(9);
    expect(result).toBe('09');
  });
});

describe('Testing getMonthFirstDayIndex', () => {
  it('Should return first day index in month', () => {
    const result = getMonthFirstDayIndex(11, 2023);
    expect(result).toBe(3);
  });
});

describe('Testing compareDates', () => {
  it('Should return true if dates are equial', () => {
    const result = compareDates(new Date(2023, 10, 1), new Date(2023, 10, 1));
    expect(result).toBe(true);
  });
  it('Should return true if dates are equial', () => {
    const result = compareDates(new Date(2023, 11, 1), new Date(2023, 10, 1));
    expect(result).toBe(false);
  });
});

describe('Testing getArrayOfDaysInMonth', () => {
  it('Should return the array of days nums', () => {
    const result = getArrayOfDaysInMonth(1, getNumberOfDaysInMonth(2023, 11) + 1);
    expect(result.length).toBe(30);
  });
});

describe('Testing getWeekend', () => {
  it('Should return true if the day is weekend', () => {
    const result = getWeekend(10, 10, 2023);
    expect(result).toBe(false);
  });
  it('Should return true if the day is weekend', () => {
    const result = getWeekend(19, 10, 2023);
    expect(result).toBe(true);
  });
});

describe('Testing getCurrentPrevAndNextMonthDays', () => {
  it('Should return the array of oject days for calendar', () => {
    const result = getCurrentPrevAndNextMonthDays(11, 2023, true);
    expect(result[0].length).toBe(2);
    expect(result[1].length).toBe(30);
    expect(result[2].length).toBe(10);
  });
});

describe('Testing getArrayOfDaysForMonthCalendar', () => {
  it('Should return the array of oject days for calendar', () => {
    const result = getArrayOfDaysForMonthCalendar(11, 2023, true, true);
    expect(result.length).toBe(42);
    expect(result.filter((dayObject) => typeof dayObject.day.dayNumber === 'number').length).toBe(
      30
    );
    expect(result.filter((dayObject) => typeof dayObject.day.dayNumber === 'string').length).toBe(
      12
    );
  });
});

describe('Testing convertToWeekFormat', () => {
  it('Should return number of week for day', () => {
    const result = convertToWeekFormat(getArrayOfDaysForMonthCalendar(11, 2023, true, true));
    expect(result.length).toBe(5);
  });
});
describe('Testing getWeekNumberForDay', () => {
  it('Should return number of week for day', () => {
    const result = getWeekNumberForDay(10, 10, 2023, true);
    expect(result).toBe(1);
  });
});

describe('Testing getYearsOptionsArray', () => {
  it('Should return the options array', () => {
    const result = getYearsOptionsArray(new Date(2020, 10, 10), new Date(2030, 10, 10));
    expect(result.length).toBe(11);
  });
});

describe('Testing getWeeksCount', () => {
  it('Should return the num of weeks in month', () => {
    const result = getWeeksCount(11, 2023, true, true);
    expect(result).toBe(4);
  });
});
