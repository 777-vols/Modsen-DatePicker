interface IProps {
  daysNumbersArray?: Array<number | string>;
  daysNamesArray?: Array<string>;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  weekFormat: string;
  changeWeekFormat: () => void;
}

export default IProps;
