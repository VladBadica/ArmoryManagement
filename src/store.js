import {createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {ammunitionsReducer } from './reducers/ammunitionsReducers';

const reducer = combineReducers({
    storeAmmunitions: ammunitionsReducer,
})

const initialState = {
    storeAmmunitions: {}
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;