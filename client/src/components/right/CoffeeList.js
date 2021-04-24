import React, { useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import { coffeeAction } from '../../redux/actions/coffeeAction'

const CoffeeList = () => {
    const dispatch = useDispatch();
    const {coffeeList, filterObj } = useSelector(s => ({ 
        coffeeList: s.coffeeReducer.coffeeList ?? [],
        filterObj: s.coffeeReducer.filterObj
    }), shallowEqual);

    useEffect(() => {
        dispatch(coffeeAction.GetCoffeeList());
    }, [filterObj]);

    return (
        <>
            {
                coffeeList.filter((coffee, index, currentList) => {
                    if (filterObj.search !== 'All Coffees') {
                        const filterValue = coffee[filterObj.searchKey].toLowerCase();
                        return filterValue.includes(filterObj.search.toLowerCase());
                    }
                    return currentList;
                })
                .map((coffee, index) => (
                    <div key={index} className="mb-5">
                        <h2>{coffee.title}</h2>
                        <p>{coffee.description}</p>
                        <span>Ingredients: {coffee.ingredients}</span>
                    </div>
                ))
            }
        </>
    )
}

export default CoffeeList
