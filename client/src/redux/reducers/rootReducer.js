import {combineReducers} from 'redux';
import coffeeReducer from './coffeeReducer';

const rootReducer = combineReducers({
    coffeeReducer,
});

export default rootReducer;