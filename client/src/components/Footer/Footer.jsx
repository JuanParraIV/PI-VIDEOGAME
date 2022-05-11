import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
export const Footer = () => {
  return (
    <section className={styles.footer} id="footer">
        <div className={styles.share}>
            <a href="https://github.com/JuanParraIV">
                  <FaGithub className={styles.btnIcon} />
            </a>
            
            <a href="https://www.linkedin.com/in/juanparraiv/">
                  <FaLinkedin className={styles.btnIcon} />
            </a>
        </div>

        <h1 className={styles.credit}>created by <span> Juan M. Parra D.</span> all rights reserved!</h1>
    </section>
  )
}

export default Footer
