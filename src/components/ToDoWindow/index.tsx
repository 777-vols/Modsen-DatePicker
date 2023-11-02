import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react';

import ToDoItem from '@/components/ToDoItem';
import { allMonthsNames } from '@/constants/calendarData';
import Images from '@/constants/images';
import { getLocaleStorageItem, setStateAndLocaleStorage } from '@/helpers/localeStorageHelpers';

import { config } from './config';
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
import { IProps, IToDo, IToDoObject } from './types';

const { placeholder, addTodoButtonText } = config;
const { clearImg } = Images;

const ToDoWindow: FC<IProps> = ({
  closeOpenToDoHandler,
  activeDay,
  currentSelectedMonth,
  currentSelectedYear
}) => {
  const leeresArray = useRef([]);
  const [inputNewToDo, setInputNewToDo] = useState<string>('');
  const [allDaysToDoStateObject, setAllDaysToDoStateObject] = useState<IToDoObject>(
    getLocaleStorageItem('allDaysToDoObject') as IToDoObject
  );

  const selectedDayDate = `${activeDay} ${currentSelectedMonth} ${currentSelectedYear}`;
  const toDoArray: IToDo[] =
    allDaysToDoStateObject[selectedDayDate as keyof typeof allDaysToDoStateObject] ??
    leeresArray.current;

  const addToDoHandler = useCallback(() => {
    if (inputNewToDo.length !== 0) {
      const toDoItem = {
        id: selectedDayDate + Math.random(),
        toDoText: inputNewToDo,
        isDone: false
      };

      setInputNewToDo('');
      setStateAndLocaleStorage(
        'allDaysToDoObject',
        {
          ...allDaysToDoStateObject,
          [selectedDayDate]: [...toDoArray, toDoItem]
        },
        setAllDaysToDoStateObject
      );
    }
  }, [inputNewToDo, selectedDayDate, allDaysToDoStateObject, toDoArray]);

  const deleteToDoHandler = useCallback(
    (toDoItemId: string) => {
      const toDoObjectLocaleStorage = getLocaleStorageItem('allDaysToDoObject') as IToDoObject;
      const filtredToDo = [...toDoArray.filter(({ id }) => id !== toDoItemId)];

      setStateAndLocaleStorage(
        'allDaysToDoObject',
        {
          ...toDoObjectLocaleStorage,
          [selectedDayDate]: [...filtredToDo]
        },
        setAllDaysToDoStateObject
      );

      if (filtredToDo.length === 0) {
        delete toDoObjectLocaleStorage[selectedDayDate as keyof typeof toDoObjectLocaleStorage];
        setStateAndLocaleStorage(
          'allDaysToDoObject',
          toDoObjectLocaleStorage,
          setAllDaysToDoStateObject
        );
      }
    },
    [selectedDayDate, toDoArray]
  );

  const completeToDoHandler = useCallback(
    (toDoItemId: string) => {
      const toDoObjectLocaleStorage = getLocaleStorageItem('allDaysToDoObject') as IToDoObject;
      const withCompletedToDo = [
        ...toDoArray.map((item) => {
          const { id, isDone } = item;
          return id === toDoItemId ? { ...item, isDone: !isDone } : item;
        })
      ];
      setStateAndLocaleStorage(
        'allDaysToDoObject',
        {
          ...toDoObjectLocaleStorage,
          [selectedDayDate]: [...withCompletedToDo]
        },
        setAllDaysToDoStateObject
      );
    },
    [selectedDayDate, toDoArray]
  );

  const toDoItemsComponentsArray = useMemo(
    () =>
      toDoArray.map(({ id, toDoText, isDone }) => (
        <ToDoItem
          key={id}
          id={id}
          toDoText={toDoText}
          isDone={isDone}
          deleteToDoHandler={deleteToDoHandler}
          completeToDoHandler={completeToDoHandler}
        />
      )),
    [completeToDoHandler, deleteToDoHandler, toDoArray]
  );

  const inputNewToDoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputNewToDo(target.value);
  };

  const clearInputHandler = () => {
    setInputNewToDo('');
  };

  return (
    <Wrapper>
      <WrapperInner>
        <CloseButton data-testid="closeToDoWindow" onClick={closeOpenToDoHandler}>
          <CloseImg src={clearImg} alt="clearImg" />
        </CloseButton>
        <SelectedDateHeader>{`${activeDay} ${allMonthsNames[currentSelectedMonth]} ${currentSelectedYear}`}</SelectedDateHeader>

        <AddToDoWrapper>
          <InputWrapper>
            <AddToDoInput
              placeholder={placeholder}
              onChange={inputNewToDoHandler}
              value={inputNewToDo}
            />
            <ClearButton data-testid="clearToDoInput" onClick={clearInputHandler}>
              <CloseImg src={clearImg} alt="clearImg" />
            </ClearButton>
          </InputWrapper>
          <AddToDoButton data-testid="addToDo" onClick={addToDoHandler}>
            {addTodoButtonText}
          </AddToDoButton>
        </AddToDoWrapper>

        {toDoArray && <ToDoListWrapper>{toDoItemsComponentsArray}</ToDoListWrapper>}
      </WrapperInner>
    </Wrapper>
  );
};

export default memo(ToDoWindow);
