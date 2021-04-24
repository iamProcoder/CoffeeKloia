import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Input } from 'reactstrap';

import { coffeeAction } from '../../redux/actions/coffeeAction'

const Search = () => {
  const [searchInput, setSearchInput] = useState({
    searchKey: "title",
    search: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coffeeAction.GetFilterObj(searchInput));
  }, [searchInput])

  const handleSearchChange = (e) => {    
    const { name, value } = e.target;
    if (value.length > 2) {
      setSearchInput({
        ...searchInput,
        [name]: value,
      });
    }
    else if (value.length === 0){
      setSearchInput({
        ...searchInput,
        searchKey: "title",
        search: "",
      });
    }


  }

    return (
      <div>
          <Input type="text" id="searchInput" name="search" placeholder="search" onChange={handleSearchChange} />
      </div>
    );
}

export default Search
