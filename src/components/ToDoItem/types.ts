export interface IProps {
  id: string;
  toDoText: string;
  isDone: boolean;
  deleteToDoHandler: (toDoItemId: string) => void;
  completeToDoHandler: (toDoItemId: string) => void;
}

export interface InterfaceTextSpan {
  $isDone: boolean;
}
