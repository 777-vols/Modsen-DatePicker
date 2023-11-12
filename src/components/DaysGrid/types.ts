import { Form } from '@/components/RangePicker/types';

export interface IProps {
  form: Form;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
  holidaysColor: string;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
  activeWeekNumber: number;
  rangeStartDate?: Date;
  rangeEndDate?: Date;
  daysNumbersArray?: Array<number | string>;
  daysNamesArray?: Array<string>;
  isCurrentDay?: boolean;
  changeCurrentActiveDay: (newMonth: number, isHeaderInputValue?: boolean) => void;
  changeActiveWeekNumber: (newActiveWeek: number) => void;
  closeOpenToDoHandler: () => void;
}
