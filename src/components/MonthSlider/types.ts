interface InterfaceProps {
  changeCurrentSelectedMonth: (newMonth: number) => void;
  changeCurrentSelectedYear: (newYear: number) => void;
  currentSelectedMonth: number;
  currentSelectedYear: number;
}

export default InterfaceProps;
