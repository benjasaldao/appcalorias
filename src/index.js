import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
    "user": {},
    "personalInformation": {
        "weight": 0,
        "height": 0,
        "age": 0,
        "gender": "",
        "activityLevel": "",
        "weightGoal": ""
    },
    "results": {
        "BMR": 0, 
        "caloriesToMaintain": 0,
        "caloriesObjetive1": 0,
        "caloriesObjetive2": 0,
        "daysForGoal": 0
    }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
 
    <Provider store={store}>
    <App />
    </ Provider>,

document.getElementById("app"));

