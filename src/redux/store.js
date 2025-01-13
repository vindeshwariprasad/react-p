


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // rootReducer now combines all reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;

