interface InterfaceProps {
  daysNumbersArray?: Array<number | string>;
  daysNamesArray?: Array<string>;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  weekFormat: string;
  changeWeekFormat: () => void;
}

export default InterfaceProps;
