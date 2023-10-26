interface IProps {
  form: 'year' | 'month' | 'week';
  changeCurrentSelectedMonth: (newMonth: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeWeekNumber: number;
  weeksCount: number;
}

export default IProps;
