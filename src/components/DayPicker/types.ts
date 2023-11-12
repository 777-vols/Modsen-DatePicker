import { Form } from '@/components/RangePicker/types';

export interface IProps {
  form: Form;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
  holidaysColor: string;
  minDate: Date;
  maxDate: Date;
  isClearButtonVisible: boolean;
  title: string;
  isRangeCalendarOpen?: boolean;
  rangeStartDate?: Date;
  rangeEndDate?: Date;
  defaultRangeDate?: Date;
  onChangeRangeDate?: (newDate: Date) => void;
}
