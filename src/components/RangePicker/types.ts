export interface IProps {
  isWeekendsOn: boolean;
  isWeekStartsOnMonday: boolean;
  isRangeCalendarOpen: boolean;
  isClearButtonVisible: boolean;
  holidaysColor: string;
  form: 'year' | 'month' | 'week';
  minDate: Date;
  maxDate: Date;
  defaultRangeStartDate: Date;
  defaultRangeEndDate: Date;
}
