import React from 'react';

export default class Timer extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };

    componentDidMount() {
        const localCount = localStorage.getItem('timer');
        if (localCount) {
            this.setState({ count: +localCount });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('timer', this.state.count);
    }

    componentWillUnmount() {
        clearInterval(this.counterID);
    }

    handleStart = () => {
        this.setState({ isCounting: true });
        this.counterID = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    };
    handleStop = () => {
        this.setState({ isCounting: false });
        clearInterval(this.counterID);
    };
    handleReset = () => {
        clearInterval(this.counterID);
        this.setState({ isCounting: false, count: 0 });
    };

    render() {
        return (
            <div className="Timer">
                <h3>React Timer</h3>
                <h4>{this.state.count}</h4>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
