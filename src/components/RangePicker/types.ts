interface IProps {
  isWeekendsOn: boolean;
  isWeekStartsOnMonday: boolean;
  holidaysColor: string;
  form: 'year' | 'month' | 'week';
  minDate: Date;
  maxDate: Date;
}

export default IProps;
