interface IProps {
  title: string;
  isWeekStartsOnMonday: boolean;
  isClearButtonVisible: boolean;
  isRangeCalendarOpen: boolean;
  isWeekendsOn: boolean;
  form: 'year' | 'month' | 'week';
  holidaysColor: string;
  minDate: Date;
  maxDate: Date;
  rangeStartDate: Date;
  rangeEndDate: Date;
  onChangeRangeDate: (newDate: Date) => void;
}

export default IProps;
