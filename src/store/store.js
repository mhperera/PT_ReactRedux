import { createSlice, configureStore } from '@reduxjs/toolkit';

// DEFINE INITIAL STATE OF THE SLICE
const initialState = {
	counter: 0,
	showCounter: true,
};

// DEFINE SLICE
const counterSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.counter++;
		},
		decrement: (state) => {
			state.counter--;
		},
		increase: (state, action) => {
			state.counter += action.payload;
		},
		toggleShowCounter: (state) => {
			state.showCounter = !state.showCounter;
		},
        clear: (state)=>{
            state.counter = initialState.counter;
            state.showCounter = initialState.showCounter;
        }
	},
});

// CREATE STORE
const store = configureStore({
	reducer: counterSlice.reducer,
});

// EXPORTS
export const counterActions = counterSlice.actions;
export default store;
