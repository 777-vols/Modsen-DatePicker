interface IProps {
  dayValue: number | string;
  isBold?: boolean;
  isHoliday?: boolean;
  isCurrentDay?: boolean;
  activeDay?: number;
  changeCurrentActiveDay?: (newActiveDay: number) => void;
}

export default IProps;
