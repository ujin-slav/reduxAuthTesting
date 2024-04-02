import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlices';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});