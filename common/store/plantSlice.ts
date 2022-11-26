import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

export interface Plants {
  plants: any[];
}

const initialState: Plants = {
  plants: [],
};

export const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    resetPostState: () => {
      return initialState;
    },
    addPlant: (state, action: PayloadAction<any>) => {
      state.plants.push(action.payload);
    },
    removePlant: (state, action: PayloadAction<any>) => {
      state.plants = state.plants.filter((plant) => {
        return plant.client_id !== action.payload;
      });
    },
    waterPlant: (state, action: PayloadAction<any>) => {
      let index = state.plants.findIndex(
        (plant) => plant.client_id === action.payload
      );
      state.plants[index].last_watered = moment();
    },
  },
});

export const { addPlant, removePlant, waterPlant } = plantSlice.actions;

export default plantSlice.reducer;
