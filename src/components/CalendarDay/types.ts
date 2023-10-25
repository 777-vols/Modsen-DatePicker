interface IProps {
  dayNumber: number | string;
  isCurrentDay: boolean;
  isWeekend: boolean;
  holidaysColor?: string;
  isBold?: boolean;
  isHoliday?: boolean;
  activeDay?: number;
  closeOpenToDoHandler?: () => void;
  changeCurrentActiveDay?: (newActiveDay: number) => void;
}

export default IProps;
