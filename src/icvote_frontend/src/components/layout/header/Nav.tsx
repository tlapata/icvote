import React from 'react';
import styles from './header.module.css';
import WalletIcon from '../../icons/Wallet';


const Nav = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <img src="/logo.svg" alt="IC vote for CryptoMoto" width={220} height={40} />
        </div>
        <div className={styles.menu}>
            <a href="#proposals">Proposals</a>
            <a href="#community">Community</a>
            <a href="#about">About</a>
        </div>
        <div className={styles.buttons}>
            <button id="connectWallet" className="orange">
                <WalletIcon />
                <span>Connect Wallet</span>
            </button>
            <button id="loginBtn" className="bordered">
                Login
            </button>
            <button id="signupBtn">
                Sign Up
            </button>
        </div>
    </nav>
  )
}

export default Nav;