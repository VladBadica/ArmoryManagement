import {createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {ammunitionsReducer, bulletsDetailsReducer, primersDetailsReducer, powdersDetailsReducer } from './reducers/ammunitionsReducers';

const reducer = combineReducers({
    storeAmmunitions: ammunitionsReducer,
    storePrimersDetails: primersDetailsReducer,
    storeBulletsDetails: bulletsDetailsReducer,
    storePowdersDetails: powdersDetailsReducer,
})

const initialState = {
    storeAmmunitions: {},
    storePrimersDetails: {},
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;