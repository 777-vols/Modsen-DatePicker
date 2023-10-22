import React, { FC } from 'react';

import clearImg from '@/assets/clear.svg';
import { ClearButton, CloseImg } from '@/components/ToDoWindow/styled';

import { CheckBox, Text, Wrapper } from './styled';
import IProps from './types';

const ToDoItem: FC<IProps> = ({ id, isDone, toDoText, deleteToDoHandler }) => {
  const deleteToDo = () => {
    deleteToDoHandler(id);
  };
  return (
    <Wrapper>
      <CheckBox type="checkbox" />
      <Text $isDone={isDone}>{toDoText}</Text>
      <ClearButton onClick={deleteToDo}>
        <CloseImg src={clearImg} alt="clearImg" />
      </ClearButton>
    </Wrapper>
  );
};

export default ToDoItem;
