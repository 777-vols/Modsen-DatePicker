export interface IProps {
  closeOpenToDoHandler: () => void;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
}

export interface IToDo {
  id: number;
  toDoText: string;
  isDone: boolean;
}
