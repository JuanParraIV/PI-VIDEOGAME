import React from "react";
import { useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import { getDetail,clearVideogame } from "../../redux/actions";
import styles from "./DetailedCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import loadingImage from "../../assets/images/Loading.gif";


import { Navbar } from "../NavBar/NavBar";
import { FaStar, FaUndo } from "react-icons/fa";

export const DetailedCard = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const videogame = useSelector((state) => state.detailedVideogame);

  const ratingStars = (rating) => {
    let stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <span key={i}>
          <FaStar className={styles.stars} />
        </span>
      );
    }
    return stars;
  };

  useEffect(() => {
    dispatch(clearVideogame());
    dispatch(getDetail(id));
  }, [dispatch, id]);

  
  return (
    <section>
      <Navbar />
      {
        videogame.name ?
        <div className={styles.DetailedCardContainer}>
          <div className={styles.containerMainImage}>
            <img
              className={styles.mainImage}
              src={videogame.image}
              alt={videogame.name}
            />
          </div>
          <div className={styles.container}>
            <h1>{videogame.name}</h1>
            <div className={styles.description}>
              <p>
              <span>Description: </span>
              {videogame.description.replaceAll(/<(.|\n)*?>/g, "")}
              </p>
            </div>
            <div className={styles.containerItems}>
              <div className={styles.items}>
                <p>
                  <span>Released: </span>
                  {videogame.released
                    ? videogame.released
                    : videogame.release_date}
                </p>
              </div>
              <div >
                <p>
                  <span>Rating: </span>
                  {ratingStars(videogame.rating)}
                </p>
              </div>
              <div className={styles.items}>
                <p>
                  <span>Platforms: </span>
                  {videogame.platforms[0].name
                    ? videogame.platforms.map((e, i) =>
                        i <= videogame.platforms.length - 2
                          ? e.name + ", "
                          : e.name
                      )
                    : videogame.platforms.join(", ")}
                </p>
              </div>
              <div className={styles.items}>
                <p>
                  <span>Genres: </span>
                  {videogame.genres.map((e, i) =>
                    e.name
                      ? i <= videogame.genres.length - 2
                        ? e.name + ", "
                        : e.name
                      : i <= videogame.genres.length - 2
                      ? e + ", "
                      : e
                  )}
                </p>
              </div>
              <button className={styles.btn}>
                <Link to="/home">
                  <FaUndo className={styles.btnIcon} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      :
        <div className={styles.loaderContainer}>
          <img src={loadingImage} alt="Loading videogame" />
        </div>
      }
    </section>
  );
};


export default DetailedCard;
