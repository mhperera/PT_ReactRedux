import classes from './Counter.module.css';

const Counter = () => {
	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>

			<div className={classes.value}> -- COUNTER HERE -- </div>

			<div>
				<button>+ Increment</button>
				<button>+ Increase By 5</button>
				<button>- Decrement</button>
				<button onClick={toggleCounterHandler}>Toggle Counter</button>
			</div>
		</main>
	);
};

export default Counter;
