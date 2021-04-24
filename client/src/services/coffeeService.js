import axiosAuth from '../helpers/AxiosInterceptor';
import {HandleResponse} from '../helpers/HandleResponse';

const GetCoffeeList = async () => {

  return axiosAuth.get('/')
    .then(HandleResponse.Result)
    .then((result) => {
      if (!result.success) return Promise.reject(result.message);

      const coffeeList = result.data;
      return coffeeList;
    });
};


export const coffeeService = { 
    GetCoffeeList
}