export interface IProps {
  closeOpenToDoHandler: () => void;
  currentSelectedMonth: number;
  currentSelectedYear: number;
  activeDay: number;
}

export interface IToDo {
  id: string;
  toDoText: string;
  isDone: boolean;
}

export interface IToDoObject {
  [key: string]: IToDo[];
}
