export const loadState = (KEY: string) => {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = async (state: any, KEY: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (error) {
    console.error(error);
  }
};

export const deleteState = async (KEY: string) => {
  try {
    localStorage.removeItem(KEY);
  } catch (error) {
    console.error(error);
  }
};
