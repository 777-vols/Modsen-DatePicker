export interface IProps {
  rangeStart?: boolean;
  rangeEnd?: boolean;
  isIncludeInRange?: boolean;
  dayNumber: number | string;
  isCurrentDay?: boolean | undefined;
  isWeekend?: boolean | undefined;
  isHaveTodos?: boolean;
  holidaysColor?: string;
  isBold?: boolean;
  isHoliday?: boolean | undefined;
  activeDay?: number;
  closeOpenToDoHandler?: () => void;
  changeCurrentActiveDay?: (newActiveDay: number) => void;
}

export interface IDayNumber {
  $isWeekend: boolean | undefined;
  $bold?: boolean;
  $isHoliday?: boolean | undefined;
  $isCurrentDay?: boolean;
  $holidaysColor?: string;
  $isActiveDay?: boolean;
  $isIncludeInRange?: boolean;
  $isStartRangeDay?: boolean;
  $isEndRangeDay?: boolean;
}

export interface ITodosIdentifier {
  $isHaveTodos?: boolean;
}
