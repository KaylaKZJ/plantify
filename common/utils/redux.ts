import { Dispatch } from '@reduxjs/toolkit';
import store from '../store/store';

export const reduxState = () => {
  let storeState = store.getState();
  let plants = storeState.plants;

  return {
    plants,
  };
};

export const resetReduxState = (dispatch: Dispatch<any>) => {
  //   dispatch(resetPlantState());
};
