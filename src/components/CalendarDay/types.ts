interface IProps {
  rangeStart?: boolean;
  rangeEnd?: boolean;
  isIncludeInRange?: boolean;
  dayNumber: number | string;
  isCurrentDay: boolean | undefined;
  isWeekend: boolean | undefined;
  isHaveTodos?: boolean;
  holidaysColor?: string;
  isBold?: boolean;
  isHoliday?: boolean | undefined;
  activeDay?: number;
  closeOpenToDoHandler?: () => void;
  changeCurrentActiveDay?: (newActiveDay: number) => void;
}

export default IProps;
