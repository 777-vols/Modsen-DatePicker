interface IProps {
  title: string;
  form: 'year' | 'month' | 'week';
  dateInputValue: string;
  isWeekStartsOnMonday: boolean;
  dateInputChangeHandler: (value: string) => void;
  openCalendarHandler: () => void;
  changeCurrentActiveDay: (newMonth: number) => void;
  changeCurrentSelectedMonth: (newActiveDay: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
}

export default IProps;
