import React from 'react';
import styles from './partial.module.css';


const Intro = () => {
  return (
    <section className={styles.intro}>
        <h1>Community Governance for Motorcyclists</h1>
        <p>Shape the future of our motorcyclist community with blockchain-powered voting!</p>
        <div className={styles.buttons}>
            <a href='#proposals' className='button'>
                Explore Proposals
            </a>
            <a href='#' className='button orange'>
                Learn More
            </a>
        </div>
    </section>
  )
}

export default Intro;