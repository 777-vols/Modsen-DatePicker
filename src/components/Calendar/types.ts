interface IProps {
  form: 'year' | 'month' | 'week';
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
  holidaysColor: string;
  activeWeekNumber: number;
  minDate: Date;
  maxDate: Date;
  rangeStartDate: Date;
  rangeEndDate: Date;
  changeCurrentSelectedMonth: (newMonth: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeCurrentActiveDay: (newActiveDay: number) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  closeOpenToDoHandler: () => void;
  clearCalendarHandler: () => void;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
  isClearButtonVisible: boolean;
}

export default IProps;
