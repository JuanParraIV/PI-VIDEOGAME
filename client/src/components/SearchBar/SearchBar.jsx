import React from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideoGameByName } from "../../redux/actions";


export const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleOnSearch = (event) => {
    const {value} = event.target;
    
    if (event && event.preventDefault) event.preventDefault();
    setSearch('');
    setSearch(value);
  };

  const handleSubmit = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    if (search) {
      dispatch(searchVideoGameByName(search));
      setSearch('');
    }else{
      alert('Enter a videogame!')
    }
  };
  return (
    <form action="" onSubmit={(event)=>handleSubmit(event)}>
      <div className={styles.SearchBar}>
        <input
          className={styles.inputSearchBar}
          placeholder="Search:"
          autoComplete="off"
          type="search"
          onChange={(event)=>handleOnSearch(event)}
          value={search}
          onKeyPress={(event) => {
            if (event.key === 13) handleOnSearch(event);
          }}
        />

        <button  className={styles.button}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
