import { IToDoObject } from '@/components/ToDoWindow/types';

export const getLocaleStorageItem = (itemName: string): IToDoObject => {
  const data = localStorage.getItem(itemName);
  if (data) {
    return JSON.parse(data) as IToDoObject;
  }
  return {};
};

export const setLocaleStorageItem = (itemName: string, value: unknown) => {
  localStorage.setItem(itemName, JSON.stringify(value));
};

export const clearLocaleStorage = () => localStorage.clear();

export const setStateAndLocaleStorage = (
  itemName: string,
  item: IToDoObject,
  setState: (newSate: IToDoObject) => void
) => {
  setState(item);
  setLocaleStorageItem(itemName, item);
};
