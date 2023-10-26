interface IProps {
  title: string;
  dateInputValue: string;
  dateInputChangeHandler: (value: string) => void;
  openCalendarHandler: () => void;
  changeCurrentActiveDay: (newMonth: number) => void;
  changeCurrentSelectedMonth: (newActiveDay: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
}

export default IProps;
