import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import '../../styles/category.css'

import { coffeeAction } from '../../redux/actions/coffeeAction'

function Categories() {
    const categories = [
        {id: 1, name: "All Coffees"},
        {id: 2, name: "Hot"},
        {id: 3, name: "Iced"},
    ];

    return categories;
}

const initialParams = {
  searchKey: "category",
  search: "hot",
};

const Category = () => {

    const [active, setActive] = useState(2);
    const [filterParam, setFilterParam] = useState(initialParams);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(coffeeAction.GetFilterObj(filterParam));
    }, [active]);

    const selectCategory = (c) => {        
        setFilterParam({
            ...filterParam, 
            searchKey: 'category',
            search: c.name
        });
        setActive(c.id);     
    }
    
    return (
      <>
        <ul id="category" className="categoryPlace">
            {
                Categories().map(c => (
                    <li key={c.id} id={c.id} name={c.id} className={active === c.id ? "active" : ""} onClick={() => selectCategory(c)}>{c.name}</li>
                ))
            }
        </ul>
      </>
    );
}

export default Category
