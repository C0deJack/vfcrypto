
export const actionTimer = (action:Function, seconds:number = 60) => {
	const millisecondsInSeconds = 1000;
	let timer;

	clearInterval(timer);
	action();
	timer = setInterval(action, seconds * millisecondsInSeconds);
};
