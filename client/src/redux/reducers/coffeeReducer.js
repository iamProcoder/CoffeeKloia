import * as actionTypes from '../actions/ConstantActionTypes';
import initialState from './initialState';

const coffeeReducer = (state = initialState, action) => {

        switch (action.type) {
          //COFFEE_LIST
            case actionTypes.COFFEE_LIST_FULFILLED:
              return {
                ...state,
                coffeeList: action.payload,
              };
            case actionTypes.COFFEE_LIST_PENDING:
              return {
                ...state,
              };
            case actionTypes.COFFEE_LIST_REJECTED:
              return {
                ...state,
                error: {
                  message: action.payload.message,
                },
              };

            case 'FilterObj':
              return {
                ...state,
                filterObj: action.payload
              }

            default:
              return state;
        }

}

export default coffeeReducer;