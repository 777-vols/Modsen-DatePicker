interface IProps {
  dateInputValue: string;
  dateInputChangeHandler: (value: string) => void;
  openCalendarHandler: () => void;
  changeCurrentActiveDay: (newMonth: number) => void;
  changeCurrentSelectedMonth: (newActiveDay: number) => void;
  changeCurrentSelectedYear: (newYear: number) => void;
}

export default IProps;
