interface IProps {
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
  holidaysColor: string;
  changeCurrentSelectedMonth: (newMonth: number) => void;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeCurrentActiveDay: (newActiveDay: number) => void;
  closeOpenToDoHandler: () => void;
  isWeekStartsOnMonday: boolean;
}

export default IProps;
