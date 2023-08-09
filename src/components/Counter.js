import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './../store/store';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();

	console.log(counter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increaseHandler = (count) => {
		dispatch(counterActions.increase(count));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleShowCounter());
	};

	const clearCountHandler = () => {
		dispatch(counterActions.clear());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Toolkit Counter</h1>

			{showCounter && <div className={classes.value}> {counter} </div>}

			<div>
				<button onClick={incrementHandler}>+ Increment</button>
				<button
					onClick={() => {
						increaseHandler(5);
					}}
				>
					+ Increase By 5
				</button>
				<button onClick={decrementHandler}>- Decrement</button>
				<button onClick={toggleCounterHandler}>Toggle Counter</button>
				<button onClick={clearCountHandler}>Clear Count</button>
			</div>
		</main>
	);
};

export default Counter;
