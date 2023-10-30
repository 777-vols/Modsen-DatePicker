interface IProps {
  title: string;
  form: 'year' | 'month' | 'week';
  dateInputValue: string;
  isWeekStartsOnMonday: boolean;
  minDate: Date;
  maxDate: Date;
  dateInputChangeHandler: (value: string) => void;
  openCalendarHandler: () => void;
  changeCurrentActiveDay: (newMonth: number) => void;
  changeCurrentSelectedMonth: (newActiveDay: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  onChangeRangeDate: (newDate: Date) => void;
}

export default IProps;
