import { configureStore } from '@reduxjs/toolkit';
import { loadState } from '../utils/localStorage';
import plantSlice from './plantSlice';

if (typeof window !== 'undefined') {
  var preloadedState = loadState('redux');
}
export function makeStore() {
  return configureStore({
    reducer: {
      plants: plantSlice,
    },
    preloadedState: preloadedState,
  });
}

const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
