import React from "react";
import { Navbar } from "../NavBar/NavBar";
import styles from "./About.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import html from "./skills/html.png";
import css from "./skills/css.png";
import javascript from "./skills/js.png";
import react from "./skills/react.png";
import thunk from "./skills/thunk.png";
import nodejs from "./skills/nodejs.png";
import express from "./skills/Expressjs.png";
import postgres from "./skills/Postgresql_elephant.svg.png";
import sequelize from "./skills/sequelize.png";
import Footer from "../Footer/Footer";

export const About = () => {
  return (
    <div>
        <Navbar />
      <section className={styles.about}>
        <h1 className={styles.heading}>
          about <span>me</span>
        </h1>

        <div className={styles.container}>
          <div className={styles.infoContainer}>
          <h1>personal <span>info</span></h1>

            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <h3>
                  <span>name</span> : Juan Mario Parra D'Errico
                </h3>
                <h3>
                  <span>age</span> : 28
                </h3>
                <h3>
                  <span>email</span> : jmparra1993@gmail.com
                </h3>
                <h3>
                  <span>phone</span> : +57 3502053590
                </h3>
                <h3>
                  <span>location</span> : Valledupar, Colombia
                </h3>
                <a href="https://github.com/JuanParraIV">
                  <FaGithub className={styles.btnIcon} />
                </a>

                <a href="https://www.linkedin.com/in/juanparraiv/">
                  <FaLinkedin className={styles.btnIcon} />
                </a>
              </div>
              <div className={styles.box}>
                <h3>
                  <span>name</span> : Juan Mario Parra D'Errico
                </h3>
                <h3>
                  <span>age</span> : 28
                </h3>
                <h3>
                  <span>email</span> : jmparra1993@gmail.com
                </h3>
                <h3>
                  <span>phone</span> : +57 3502053590
                </h3>
                <h3>
                  <span>location</span> : Valledupar, Colombia
                </h3>
                <a href="https://github.com/JuanParraIV">
                  <FaGithub className={styles.btnIcon} />
                </a>

                <a href="https://www.linkedin.com/in/juanparraiv/">
                  <FaLinkedin className={styles.btnIcon} />
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <h1 className={styles.heading}>
          skills used in this <span>project</span>
        </h1>

        <h3 className={styles.heading}>frontend <span>side</span></h3>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <img src={html} alt='html logo'></img>
            <h3>html</h3>
          </div>
          <div className={styles.box}>
            <img src={css} alt='css logo'></img>
            <h3>css</h3>
          </div>
          <div className={styles.box}>
            <img src={javascript} alt='javascript logo'></img>
            <h3>javascript</h3>
          </div>
          <div className={styles.box}>
            <img src={react} alt='react logo'></img>
            <h3>react js</h3>
          </div>
          <div className={styles.box}>
            <img src={thunk} alt='thunk logo'></img>
            <h3>redux thunk</h3>
          </div>
        </div>


        <h3 className={styles.heading}>backend <span>side</span></h3>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
          <img src={nodejs} alt='nodejs logo'></img>
            <h3>node.js</h3>
          </div>
          <div className={styles.box}>
          <img src={express} alt='express logo'></img>
            <h3>express.js</h3>
          </div>
          <div className={styles.box}>
          <img src={postgres} alt='postgres logo'></img>
            <h3>postgres SQL</h3>
          </div>
          <div className={styles.box}>
          <img src={sequelize} alt='sequelize logo'></img>
            <h3>sequelize</h3>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
