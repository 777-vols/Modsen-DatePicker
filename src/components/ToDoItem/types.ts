interface IProps {
  id: number;
  toDoText: string;
  isDone: boolean;
  deleteToDoHandler: (id: number) => void;
}

export default IProps;
