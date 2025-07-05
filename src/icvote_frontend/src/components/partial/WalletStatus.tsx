import styles from './partial.module.css';
import WalletIcon from '../icons/Wallet';


const WalletStatus = () => {
  return (
    <section className={styles.wallet}>
        <div className={styles.container}>
            <div id="walletNotConnected" className={styles.connected}>
                <div>
                    <h2>Connect your wallet to access full features</h2>
                    <p>You need to connect your crypto wallet with wCRYMT tokens to create proposals and vote</p>
                </div>
                <button className='orange full'>
                    <WalletIcon />
                    <span>Connect Now</span>
                </button>
            </div>
            <div id="walletConnected" className="hidden bg-white rounded-lg shadow p-6 flex items-center justify-between" style={{display:'none'}}>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Wallet Connected</h2>
                    <p className="text-gray-600 mt-2">Address: <span className="font-mono">0x1a2b...3c4d</span> | wCRYMT Balance: <span className="font-bold">250 tokens</span></p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        <i className="fas fa-check-circle mr-1"></i> Voting Eligible
                    </div>
                    <button className="text-gray-600 hover:text-gray-800">
                        <i className="fas fa-sign-out-alt mr-1"></i> Disconnect
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WalletStatus;