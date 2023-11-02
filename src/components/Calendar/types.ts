interface IProps {
  form: 'year' | 'month' | 'week';
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
  holidaysColor: string;
  activeWeekNumber: number;
  minDate: Date;
  maxDate: Date;
  rangeStartDate?: Date;
  rangeEndDate?: Date;
  isStartCalendar?: boolean;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
  isClearButtonVisible: boolean;
  changeCurrentSelectedMonth: (newMonth: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeCurrentActiveDay: (newMonth: number, isHeaderInputValue?: boolean) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  closeOpenToDoHandler: () => void;
  clearCalendarHandler: () => void;
}

export default IProps;
