import React, { FC, memo, useState } from 'react';

import clearImg from '@/assets/clear.svg';
import ToDoItem from '@/components/ToDoItem';
import { allMonthsNames } from '@/constants/calendarData';
import { getLocaleStorageItem, setLocaleStorageItem } from '@/helpers/localeStorageHelpers';

import config from './config';
import {
  AddToDoButton,
  AddToDoInput,
  AddToDoWrapper,
  ClearButton,
  CloseButton,
  CloseImg,
  InputWrapper,
  SelectedDateHeader,
  ToDoListWrapper,
  Wrapper,
  WrapperInner
} from './styled';
import { IProps, IToDo } from './types';

const { placeholder, addTodoButtonSpan } = config;

const ToDoWindow: FC<IProps> = ({
  closeOpenToDoHandler,
  activeDay,
  currentSelectedMonth,
  currentSelectedYear
}) => {
  const [inputValue, setInputValue] = useState('');
  const [toDoObject, setToDoObject] = useState<object>(
    getLocaleStorageItem('toDoObject') as object
  );
  const selectedDayDate = `${activeDay} ${currentSelectedMonth} ${currentSelectedYear}`;
  const toDoArray: IToDo[] = toDoObject[selectedDayDate as keyof typeof toDoObject];

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const clearInputHandler = () => {
    setInputValue('');
  };

  const addToDoHandler = () => {
    if (inputValue.length !== 0) {
      const toDoItem = {
        id: selectedDayDate + Math.random(),
        toDoText: inputValue,
        isDone: false
      };
      const toDoObjectLocaleStorage = getLocaleStorageItem('toDoObject') as object;
      const toDoArrayLocaleStorage: IToDo[] =
        toDoObjectLocaleStorage[selectedDayDate as keyof typeof toDoObjectLocaleStorage] ?? [];
      setInputValue('');
      setLocaleStorageItem('toDoObject', {
        ...toDoObjectLocaleStorage,
        [selectedDayDate]: [...toDoArrayLocaleStorage, toDoItem]
      });
      setToDoObject({ ...toDoObject, [selectedDayDate]: [...toDoArrayLocaleStorage, toDoItem] });
    }
  };

  const deleteToDoHandler = (id: number) => {
    const toDoObjectLocaleStorage = getLocaleStorageItem('toDoObject') as object;
    const filtredToDo = [...toDoArray.filter((item) => item.id !== id)];

    setToDoObject({ ...toDoObject, [selectedDayDate]: [...filtredToDo] });
    setLocaleStorageItem('toDoObject', {
      ...toDoObjectLocaleStorage,
      [selectedDayDate]: [...filtredToDo]
    });
  };

  const completeToDoHandler = (id: number) => {
    const toDoObjectLocaleStorage = getLocaleStorageItem('toDoObject') as object;
    const withCompletedToDo = [
      ...toDoArray.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    ];

    setToDoObject({ ...toDoObject, [selectedDayDate]: [...withCompletedToDo] });
    setLocaleStorageItem('toDoObject', {
      ...toDoObjectLocaleStorage,
      [selectedDayDate]: [...withCompletedToDo]
    });
  };

  return (
    <Wrapper>
      <WrapperInner>
        <CloseButton onClick={closeOpenToDoHandler}>
          <CloseImg src={clearImg} alt="clearImg" />
        </CloseButton>
        <SelectedDateHeader>{`${activeDay} ${
          allMonthsNames[currentSelectedMonth - 1]
        } ${currentSelectedYear}`}</SelectedDateHeader>
        <AddToDoWrapper>
          <InputWrapper>
            <AddToDoInput placeholder={placeholder} onChange={inputHandler} value={inputValue} />
            <ClearButton onClick={clearInputHandler}>
              <CloseImg src={clearImg} alt="clearImg" />
            </ClearButton>
          </InputWrapper>
          <AddToDoButton onClick={addToDoHandler}>{addTodoButtonSpan}</AddToDoButton>
        </AddToDoWrapper>

        {toDoArray && (
          <ToDoListWrapper>
            {toDoArray.map(({ id, toDoText, isDone }) => (
              <ToDoItem
                key={id}
                id={id}
                toDoText={toDoText}
                isDone={isDone}
                deleteToDoHandler={deleteToDoHandler}
                completeToDoHandler={completeToDoHandler}
              />
            ))}
          </ToDoListWrapper>
        )}
      </WrapperInner>
    </Wrapper>
  );
};

export default memo(ToDoWindow);
