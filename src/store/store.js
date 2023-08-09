import { createStore } from 'redux';

const initialState = {
	counter: 0,
	showCounter: true,
};

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return {
			showCounter: state.showCounter,
			counter: ++state.counter,
		};
	}
	if (action.type === 'DECREMENT') {
		return {
			showCounter: state.showCounter,
			counter: --state.counter,
		};
	}
	if (action.type === 'INCREASE') {
		return {
			showCounter: state.showCounter,
			counter: (state.counter += 5),
		};
	}
	if (action.type === 'TOGGLE') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}
    if (action.type === 'CLEAR') {
		return {
			counter: 0,
			showCounter: state.showCounter,
		};
	}
	return state;
};

const store = createStore(counterReducer);

export default store;
