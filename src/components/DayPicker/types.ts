import { IBaseProps } from '@/components/RangePicker/types';

export interface IProps extends IBaseProps {
  title: string;
  isRangeCalendarOpen?: boolean;
  rangeStartDate?: Date;
  rangeEndDate?: Date;
  defaultRangeDate?: Date;
  onChangeRangeDate?: (newDate: Date) => void;
}
