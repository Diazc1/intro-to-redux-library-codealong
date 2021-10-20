// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"; //import createStore function 
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

//create store here using the createStore function 
//1. we call our createStore() method 
//2. We pass our createStore() method a reducer,
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //code change

ReactDOM.render(
    // <App />, 
    //3. pass our newly created store to our App component as a prop
    <App store={store} />,
    document.getElementById('root')
);
