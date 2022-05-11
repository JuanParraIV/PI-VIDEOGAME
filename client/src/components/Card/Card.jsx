import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Card.module.css";

export const Card = ({ id,name, image, genres, rating }) => {
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
  return (
    <div className={styles.container}>
        <div className={styles.boxImg}>
          <img src={image} alt={name} />
        </div>
      <div className={styles.text}>
        <p> Rating: {ratingStars(rating)}</p>
        <h5>{genres}</h5>
          <h3>{name}</h3>
      </div>
    </div>
  );
};
