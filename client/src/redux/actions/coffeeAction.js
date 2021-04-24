import * as actionTypes from './ConstantActionTypes';
import { coffeeService } from '../../services/coffeeService'

  const GetCoffeeList = () => {
    return (dispatch) => {
      
      dispatch(requestGetCoffeeList());
      return coffeeService.GetCoffeeList().then(
        (result) => {
          dispatch(successGetCoffeeList(result));
        },
        (error) => {
          dispatch(failureGetCoffeeList(error));
        }
      );
    };
  };
  const requestGetCoffeeList = () => { return { type: actionTypes.COFFEE_LIST_PENDING };}
  const successGetCoffeeList = (coffee) => { return { type: actionTypes.COFFEE_LIST_FULFILLED, payload: coffee };}
  const failureGetCoffeeList = (error) => { return { type: actionTypes.COFFEE_LIST_REJECTED, payload: error };}

  const GetFilterObj = ({searchKey, search}) => { 
    const filterObj = { searchKey, search };
      return {
        type: 'FilterObj', 
        payload: filterObj
      }
  }

  export const coffeeAction = {
      GetCoffeeList,
      GetFilterObj
  }