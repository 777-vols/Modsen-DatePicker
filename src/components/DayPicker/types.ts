interface IProps {
  title: string;
  isWeekStartsOnMonday: boolean;
  isWeekendsOn: boolean;
  form: 'year' | 'month' | 'week';
  holidaysColor: string;
  minDate: Date;
  maxDate: Date;
}

export default IProps;
