import React from 'react';
import logo from './logo.svg';
import './App.css';

//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
    state = {
        count: 0,
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState(
            (prevState) => ({ count: prevState.count + 1 }),
            () => {
                console.log('setState complite');
            }
        );
        console.log('End of handleClick');
    };
    handleClickM = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <>
                <div className="App">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Loading...</h2>
                    <button onClick={this.handleClick}>PLUS</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.handleClickM}>MINUS</button>
                </div>
            </>
        );
    }
}
export default App;
