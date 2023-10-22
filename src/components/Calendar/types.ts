interface IProps {
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
  changeCurrentSelectedMonth: (newMonth: number) => void;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeCurrentActiveDay: (newActiveDay: number) => void;
  closeOpenToDoHandler: () => void;
}

export default IProps;
