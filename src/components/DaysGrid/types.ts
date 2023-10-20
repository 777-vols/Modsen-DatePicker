interface IProps {
  daysNumbersArray?: Array<number | string>;
  daysNamesArray?: Array<string>;
  isCurrentDay?: boolean;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  weekFormat: string;
  changeWeekFormat: () => void;
  activeDay: number;
  changeCurrentActiveDay: (newActiveDay: number) => void;
}

export default IProps;
