import React from "react";
import { Link } from "react-router-dom";
import {SearchBar} from '../SearchBar/SearchBar'
import styles from './Navbar.module.css'

import {FaGamepad} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'



export const Navbar = ({OnSearch}) => {
  return (
    <header>
      <div>
      <Link to='/' className={styles.logoLink}>
        <i><FaGamepad className={styles.logo}/></i><span className={styles.title}>Jm Rawg</span>
      </Link>
      </div>
      

      <FaBars className={styles.menubar} />
      <div>
      <nav className={styles.Navbar}>
      <Link to='/home' className={styles.link}>
        <i></i><span className={styles.title}>home</span>
      </Link>
      <Link to='/create' className={styles.link}>
        <i></i><span className={styles.title}>create</span>
      </Link>
      <Link to='/about' className={styles.link}>
        <i></i><span className={styles.title}>about</span>
      </Link>
      </nav>
      </div>
      <div>
      <SearchBar OnSearch={OnSearch}/>
      </div>
    </header>
  );
};
