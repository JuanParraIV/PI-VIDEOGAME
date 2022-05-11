import React, { useState } from "react";
import styles from "./Paginate.module.css";
import { FaPlay } from "react-icons/fa";

export const Paginate = ({ page, setPage, maxPage }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    if (page < maxPage) {
      setInput(parseInt(input) + 1);
      setPage(parseInt(page) + 1);
    }
    
  };
  const prevPage = () => {
    if (page > 1) {
      setInput(parseInt(input) - 1);
      setPage(parseInt(page) - 1);
    }
  };
  


  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      setPage(parseInt(event.target.value));
      if (
        parseInt(event.target.value) > Math.ceil(maxPage) ||
        parseInt(event.target.value) < 1 ||
        isNaN(parseInt(event.target.value)) ||
        parseInt(event.target.value) === page
      ) {
        setPage(1);
        setInput(1);
      }else{
        setPage(parseInt(event.target.value));
      }
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };


  console.log({
    page,
    setPage,
    maxPage,
  });
  return (
    <div className={styles.paginateContainer}>
      <button
      disabled={(page === 1 || page < 1)}
      className={styles.prevPageBtn}
      onClick={prevPage}>
      
        <FaPlay className={styles.prevPageBtnImage} />
        
      </button>
      <input
        onKeyDown={event =>onKeyDown(event)}
        className={styles.pageInput}
        name="page"
        autoComplete="off"
        type="text"
        value={input}
        onChange={(event)=>onChange(event)}
      />
      <p>of {maxPage}</p>
      <button
      disabled={(page === Math.ceil(maxPage) || page > Math.ceil(maxPage))}
      className={styles.nextPageBtn}
      onClick={nextPage}>
      
        <FaPlay className={styles.nextPageBtnImage} />
        
      </button>
    </div>
  );
};

export default Paginate;
