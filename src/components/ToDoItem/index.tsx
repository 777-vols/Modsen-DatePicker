import React, { FC } from 'react';

import { ClearButton, CloseImg } from '@/components/ToDoWindow/styled';
import Images from '@/constants/images';

import { CheckBox, Text, Wrapper } from './styled';
import IProps from './types';

const { clearImg } = Images;

const ToDoItem: FC<IProps> = ({ id, isDone, toDoText, deleteToDoHandler, completeToDoHandler }) => {
  const deleteToDo = () => {
    deleteToDoHandler(id);
  };
  const isCompleteTodo = () => {
    completeToDoHandler(id);
  };
  return (
    <Wrapper>
      <CheckBox id={`${id}`} onChange={isCompleteTodo} type="checkbox" />
      <label htmlFor={`${id}`}>
        <Text $isDone={isDone}>{toDoText}</Text>
      </label>
      <ClearButton onClick={deleteToDo}>
        <CloseImg src={clearImg} alt="clearImg" />
      </ClearButton>
    </Wrapper>
  );
};

export default ToDoItem;
