import IProps from '@/components/DaysGrid/types';

interface IDecoratorProps extends IProps {
  currentSelectedMonth: number;
  currentSelectedYear: number;
  weekFormat: string;
}

export default IDecoratorProps;
