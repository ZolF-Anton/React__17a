import React, { useEffect, useReducer } from 'react';

const countReducer = (state, { type }) => {
    if (type === 'START') {
        return {
            ...state,
            isCounting: true,
        };
    }
    if (type === 'STOP') {
        return {
            ...state,
            isCounting: false,
        };
    }
    if (type === 'RESET') {
        return {
            count: 0,
            isCounting: false,
        };
    }
    if (type === 'TICK') {
        return {
            ...state,
            count: state.count + 1,
        };
    }

    return state;
};

function setDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}

export default function Timer() {
    const [{ count, isCounting }, dispatch] = useReducer(countReducer, {
        count: setDefaultValue(),
        isCounting: false,
    });

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);
    useEffect(() => {
        let timerId = null;
        if (isCounting) {
            console.log('isCounting true in useEffect 2');
            timerId = setInterval(() => {
                dispatch({ type: 'TICK' });
            }, 1000);
        }

        return () => {
            console.log('unMount');
            timerId && clearInterval(timerId);
            timerId = null;
        };
    }, [isCounting]);

    return (
        <div className="Timer">
            <h3>React Timer</h3>
            <h4>{count}</h4>
            {!isCounting ? (
                <button onClick={() => dispatch({ type: 'START' })}>Start</button>
            ) : (
                <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
            )}
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
}
