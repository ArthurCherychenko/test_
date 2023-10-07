import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        log: [],
    },
    reducers: {
        addToLog: (state, action) => {
            state.log.push(action.payload);
        },
        clearLog: (state) => {
            state.log = [];
        },
    },
});

export const { addToLog, clearLog } = timerSlice.actions;
export default timerSlice.reducer;
