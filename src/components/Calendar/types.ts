interface IProps {
  currentSelectedMonth: number;
  currentSelectedYear: number;
  changeCurrentSelectedMonth: (newMonth: number) => void;
  changeCurrentSelectedYear: (newYear: number) => void;
}

export default IProps;
