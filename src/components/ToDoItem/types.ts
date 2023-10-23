interface IProps {
  id: number;
  toDoText: string;
  isDone: boolean;
  deleteToDoHandler: (toDoItemId: number) => void;
  completeToDoHandler: (toDoItemId: number) => void;
}

export default IProps;
