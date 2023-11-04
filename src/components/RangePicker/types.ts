export type Form = 'year' | 'month' | 'week';

export interface IBaseProps {
  form: Form;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
  holidaysColor: string;
  minDate: Date;
  maxDate: Date;
  isClearButtonVisible: boolean;
}

export interface IProps extends IBaseProps {
  isClearButtonVisible: boolean;
  isRangeCalendarOpen: boolean;
  defaultRangeStartDate: Date;
  defaultRangeEndDate: Date;
}
