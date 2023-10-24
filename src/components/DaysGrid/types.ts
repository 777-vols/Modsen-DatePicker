interface IProps {
  daysNumbersArray?: Array<number | string>;
  daysNamesArray?: Array<string>;
  isCurrentDay?: boolean;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  isWeekStartsOnMonday: boolean;
  activeDay: number;
  changeCurrentActiveDay: (newActiveDay: number) => void;
  closeOpenToDoHandler: () => void;
}

export default IProps;
