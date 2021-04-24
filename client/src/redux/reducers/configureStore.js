import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reduxPromise from "redux-promise-middleware";

import rootReducer from './rootReducer';

export default function configureStore() {
    return createStore(rootReducer,  composeWithDevTools(applyMiddleware(reduxPromise, thunk, logger)));
}