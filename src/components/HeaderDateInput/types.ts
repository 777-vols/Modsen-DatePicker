import { IChangeFuntions } from '@/components/Calendar/types';
import { Form } from '@/components/RangePicker/types';

export interface IProps extends IChangeFuntions {
  form: Form;
  title: string;
  dateInputValue: string;
  isWeekStartsOnMonday: boolean;
  minDate: Date;
  maxDate: Date;
  dateInputChangeHandler: (value: string) => void;
  openCalendarHandler: () => void;
  onChangeRangeDate?: (newDate: Date) => void;
}
