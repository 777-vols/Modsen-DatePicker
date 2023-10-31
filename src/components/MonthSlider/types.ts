export interface IProps {
  form: 'year' | 'month' | 'week';
  changeCurrentSelectedMonth: (newMonth: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeWeekNumber: number;
  minDate: Date;
  maxDate: Date;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
}

export type OptionType = {
  value: number;
  label: number;
};
