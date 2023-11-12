import { IBaseProps } from '@/components/RangePicker/types';

export interface IChangeFuntions {
  changeCurrentSelectedMonth: (newMonth: number) => boolean;
  changeCurrentSelectedYear: (newYear: number) => void;
  changeCurrentActiveDay: (newMonth: number, isHeaderInputValue?: boolean) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
}

export interface IProps extends IBaseProps, IChangeFuntions {
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
  activeWeekNumber: number;
  rangeStartDate?: Date;
  rangeEndDate?: Date;
  closeOpenToDoHandler: () => void;
  clearCalendarHandler: () => void;
}
