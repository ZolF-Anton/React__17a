import React, { useEffect, useRef, useState } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCount] = useState(0);
    const timerIdRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);
    useEffect(() => {
        if (isCounting) {
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }

        return () => {
            console.log('unMount');
            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        };
    }, [isCounting]);

    // componentDidMount() {
    //     const localCount = localStorage.getItem('timer');
    //     if (localCount) {
    //         this.setState({ count: +localCount });
    //     }
    // }

    // componentDidUpdate() {
    //     localStorage.setItem('timer', this.state.count);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.counterID);
    // }

    const handleReset = () => {
        setCount(0);
        setIsCount(false);
    };

    const handleStart = () => {
        setIsCount(true);
    };
    const handleStop = () => {
        setIsCount(false);
    };

    return (
        <div className='Timer'>
            <h3>React Timer</h3>
            <h4>{count}</h4>
            {!isCounting ? (
                <button onClick={handleStart}>Start</button>
            ) : (
                <button onClick={handleStop}>Stop</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
