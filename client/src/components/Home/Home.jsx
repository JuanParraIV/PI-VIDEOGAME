import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getVideoGames,
  filterVideogamesByGenre,
  filterCreated,
  orderBy,
  getGenres,
} from "../../redux/actions";
import { Card } from "../Card/Card";
import { Navbar } from "../NavBar/NavBar";
import { Paginate } from "../Paginate/Paginate";
import {Footer} from "../Footer/Footer"
import styles from "./Home.module.css";
import loadingImage from "../../assets/images/Loading.gif";
import gameOverError from "../../assets/images/ERROR.gif";

export const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  const allGenres = useSelector((state) => state.genres);
const [, setSort] = useState("");
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, ] = useState(15);
  const maxPage = Math.ceil(allVideogames.length / perPage);

  const gamesOfActualPage = allVideogames.slice(
    (page - 1) * perPage,
    (page - 1) * perPage + perPage
  );

  const handleFilterGenres=(event) => {
    const {value} = event.target;
    dispatch(filterVideogamesByGenre(value));
    setPage(page);
  }


const handleFilterCreated=(event) => {
  const {value} = event.target;
  dispatch(filterCreated(value));
  setPage(page);
}


  const handleSort=(event)=>{
const results =dispatch(orderBy(event.target.value));
setSort(results);
    setPage(page);
  }

useEffect(() => {
  dispatch(getVideoGames());
  dispatch(getGenres());
}, [dispatch]);

  if (gamesOfActualPage.length > 0 && loader) {
    setLoader(false);
  }
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.emptySpace}></div>
        <div className={styles.ContainerFilters}>
          <div className={styles.filters}>
            <div className={styles.filterBy}>
              <h1 className={styles.heading}>order <span>by</span></h1>
              <select onChange={handleSort}>
                <option value="All" default>
                  All
                </option>
                <option value="Asc_name" >
                  Alphabetically (A-Z)
                </option>
                <option value="Desc_name" >
                  Alphabetically (Z-A)
                </option>
                <option value="Asc_rating" >
                  Rating (Lower-Higher)
                </option>
                <option value="Desc_rating" >
                  Rating (Higher-Lower)
                </option>
              </select>
            </div>
            <div className={styles.filterBy}>
            <h1 className={styles.heading}>filter by <span>genre</span></h1>
              <select onChange={handleFilterGenres}>
                <option value="All" key="All" default>
                  All
                </option>
                {allGenres?.map((genre) => (
                  <option value={genre.name} key={genre.name}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.filterBy}>
            <h1 className={styles.heading}>filter by<span> creator</span></h1>
              <select onChange={handleFilterCreated}>
                <option value="All" key="All" default>
                  All
                </option>
                <option value="Api" key="Api">
                  Api videogames
                </option>
                <option value="Created" key="Created">
                  User videogames
                </option>
              </select>
            </div>
          </div>
        </div>
        <Paginate page={page} setPage={setPage} maxPage={maxPage} />
        <div className={styles.boxContainer}>
          {gamesOfActualPage.length > 0 && !loader ? (
            gamesOfActualPage?.map((e) => (
              <div key={e.name}>
                <Link to={`/videogame/${e.id}`}>
                  <Card
                  key={e.name}
                    name={e.name}
                    image={e.image}
                    rating={e.rating}
                    genres={e.genres.map((el, il) =>
                      el.name
                        ? il <= e.genres.length - 2
                          ? el.name + ", "
                          : el.name
                        : il <= e.genres.length - 2
                        ? el + ", "
                        : el
                    )}
                  />
                </Link>
              </div>
            ))
          ) : !gamesOfActualPage.length && loader ? (
            <div className={styles.loaderContainer}>
              <img src={loadingImage} alt="loading Videogames" />
            </div>
          ) : (
            <div className={styles.center}>
              <img src={gameOverError} alt="error" />
            </div>
          )}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
