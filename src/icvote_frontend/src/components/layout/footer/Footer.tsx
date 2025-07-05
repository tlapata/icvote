import styles from './footer.module.css';


const Footer = () => {
  return (
      <footer className={styles.footer}>
          <div className="container">
              <div className="row">
                  <div className='col-4'>
                      <div className="flex items-center mb-4">
                          <span className="text-xl font-bold">RidersVote</span>
                      </div>
                      <p className="text-gray-300 mb-4">The premier decentralized governance platform for motorcycle enthusiasts worldwide.</p>
                      <div className="flex space-x-4">
                          <a href="#" className="text-gray-300 hover:text-white transition">
                              <i className="fab fa-twitter text-xl"></i>
                          </a>
                          <a href="#" className="text-gray-300 hover:text-white transition">
                              <i className="fab fa-facebook text-xl"></i>
                          </a>
                          <a href="#" className="text-gray-300 hover:text-white transition">
                              <i className="fab fa-instagram text-xl"></i>
                          </a>
                          <a href="#" className="text-gray-300 hover:text-white transition">
                              <i className="fab fa-discord text-xl"></i>
                          </a>
                          <a href="#" className="text-gray-300 hover:text-white transition">
                              <i className="fab fa-telegram text-xl"></i>
                          </a>
                      </div>
                  </div>
                  <div className='col-4'>
                      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
                          <li><a href="#proposals" className="text-gray-300 hover:text-white transition">Proposals</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Community</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Token</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">FAQ</a></li>
                      </ul>
                  </div>
                  <div className='col-4'>
                      <h3 className="text-lg font-semibold mb-4">Resources</h3>
                      <ul className="space-y-2">
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Documentation</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Whitepaper</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">API</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Brand Assets</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
                      </ul>
                  </div>
                  <div className='col-4'>
                      <h3 className="text-lg font-semibold mb-4">Legal</h3>
                      <ul className="space-y-2">
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Cookie Policy</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Disclaimers</a></li>
                          <li><a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
                      </ul>
                  </div>
              </div>
              <div className={styles.copyrights}>
                  <p>&copy; 2025 MotoDAO. All rights reserved.</p>
                  <p>wCRYMT token is a utility token for community governance purposes only. Not a financial instrument or investment advice.</p>
              </div>
          </div>
      </footer>    
  )
}

export default Footer;