interface IProps {
  form: 'year' | 'month' | 'week';
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
  holidaysColor: string;
  activeWeekNumber: number;
  weeksCount: number;
  minDate: Date;
  maxDate: Date;
  changeCurrentSelectedMonth: (newMonth: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeWeeksCount: (newWeeksCount: number) => void;
  changeCurrentActiveDay: (newActiveDay: number) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  closeOpenToDoHandler: () => void;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
}

export default IProps;
