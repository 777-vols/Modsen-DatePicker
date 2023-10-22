export const getLocaleStorageItem = (itemName: string): unknown => {
  const data = localStorage.getItem(itemName);
  if (data) {
    return JSON.parse(data);
  }
  return {};
};
export const setLocaleStorageItem = (itemName: string, value: unknown) => {
  localStorage.setItem(itemName, JSON.stringify(value));
};
export const clearLocaleStorage = () => localStorage.clear();
