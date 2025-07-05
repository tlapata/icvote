import styles from './header.module.css';
import WalletIcon from '../../icons/Wallet';


const Nav = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <a href="/">
                <span className={styles.sign}><img src="/logo.svg" alt="IC vote for CryptoMoto" width={220} height={40} /></span>
                <span>Moto<span>DAO</span></span>
            </a>
        </div>
        <div className={styles.menu}>
            <a href="#proposals">Proposals</a>
            <a href="#community">Community</a>
            <a href="#about">About</a>
        </div>
        <div className={styles.buttons}>
            <button id="connectWallet" className="purple">
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