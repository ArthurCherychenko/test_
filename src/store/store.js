
import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './slice/timerSlice';

const store = configureStore({
    reducer: {
        timer: timerReducer,
    },
});

export default store;
