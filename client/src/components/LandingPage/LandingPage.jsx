import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
export const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
<div className={styles.LandingPageBg}>

      <div className={styles.divPressStartBtn}>
        <Link to="/home">
          <img className={styles.bounce}  src="https://i.gifer.com/ZS3t.gif" alt="Press Button"/>
        </Link>
      </div>
</div>
    </div>
  );
};
