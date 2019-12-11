
export const actionTimer = (action, seconds:number = 60) => {
    const millisecondsInSeconds = seconds * 1000;
    let timer;

    clearInterval(timer);
    action();
    timer = setInterval(action, millisecondsInSeconds);
}
