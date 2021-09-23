import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './Chap/Timer';
import Collection from './Chap/Collection';
import { Form } from './Form/Form';
import Formwork from './Form/Formwork';

ReactDOM.render(
    <React.StrictMode>
        <div className="wrapper">
            <div className="first">
                <App />
                <Timer />
                <Collection />
            </div>
            <div className="second">
                <h2>FORM-1</h2>
                <Form />
            </div>
            <div>
                <Formwork />
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
