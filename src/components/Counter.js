import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch({ type: 'INCREMENT' });
	};
	const decrementHandler = () => {
		dispatch({ type: 'DECREMENT' });
	};
	const increaseHandler = (count) => {
		dispatch({ type: 'INCREASE', count: count });
	};
	const toggleCounterHandler = () => {
		dispatch({ type: 'TOGGLE' });
	};
	const clearCounterHandler = () => {
		dispatch({ type: 'CLEAR' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>

			{showCounter && <div className={classes['value']}> {counter}</div>}

			<div>
				<button onClick={incrementHandler}>+ Increment</button>
				<button onClick={decrementHandler}>- Decrement</button>
				<button onClick={() => increaseHandler(5)}>+ Increase By 5</button>
				<button onClick={toggleCounterHandler}>Toggle Counter</button>
				<button onClick={clearCounterHandler}>Clear Counter</button>
			</div>
		</main>
	);
};

export default Counter;
