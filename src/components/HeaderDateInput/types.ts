interface IProps {
  dateInputValue: string;
  dateInputChangeHandler: (value: string) => void;
  openCalendarHandler: () => void;
  changeCurrentSelectedMonth: (newMonth: number) => void;
  changeCurrentSelectedYear: (newYear: number) => void;
}

export default IProps;
