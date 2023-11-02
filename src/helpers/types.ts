export interface IDay {
  dayNumber: string | number;
  isHoliday?: boolean;
  isCurrentDay?: boolean;
  isWeekend?: boolean;
  isHaveTodos?: boolean;
  rangeStart?: boolean;
  rangeEnd?: boolean;
  isIncludeInRange?: boolean;
}

export interface IDayObject {
  id: number;
  day: IDay;
}

export type ReduceType = { daysArray: number[]; dayNumber: number };
