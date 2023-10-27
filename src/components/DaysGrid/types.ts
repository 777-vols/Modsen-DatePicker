interface IProps {
  form: 'year' | 'month' | 'week';
  daysNumbersArray?: Array<number | string>;
  daysNamesArray?: Array<string>;
  isCurrentDay?: boolean;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
  holidaysColor: string;
  activeDay: number;
  activeWeekNumber: number;
  changeCurrentActiveDay: (newActiveDay: number) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  closeOpenToDoHandler: () => void;
}

export default IProps;
