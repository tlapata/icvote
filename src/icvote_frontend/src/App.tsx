import { FormEvent, useState } from "react";
import { icvote_backend } from '../../declarations/icvote_backend';
import Nav from "./components/layout/header/Nav";
import Intro from "./components/partial/Intro";
//import AuthModal from "./components/partial/AuthModal";
import WalletStatus from "./components/partial/WalletStatus";
import ProposalList from "./components/proposals/ProposalList";


function App() {

    const [greeting, setGreeting] = useState('');
    const [voteId, setVoteId] = useState<number>(1);
    const [inFavor, setInFavor] = useState<boolean>(true);
    const [proposals, setProposals] = useState<any[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = (event.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement;
    icvote_backend.greet(name.value).then((greeting) => {
      setGreeting(greeting);
    });
  }

  async function vote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await icvote_backend.vote(BigInt(voteId), inFavor);
    setVoteId(1); // Clear the form
  }

  async function fetchProposals() {
    const proposalsList = await icvote_backend.get_proposals();
    setProposals(proposalsList);
  }

  return (
    <main>
        <Nav />
        <Intro />
        {/*<AuthModal />*/}
        <WalletStatus />
        <ProposalList />


    {/* Platform Links Section */}
    <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Join Our Community Platform</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Access the complete RidersVote experience on all your devices. Connect with fellow riders, participate in discussions, and never miss important proposals.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

                {/* Mobile App - iOS */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="text-5xl text-gray-800 mb-4">
                        <i className="fab fa-apple"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">iOS App</h3>
                    <p className="text-gray-600 mb-4">Download our iOS app from the App Store to access RidersVote on your iPhone or iPad.</p>
                    <a href="#" className="btn-riders text-white px-4 py-2 rounded-lg inline-block font-semibold hover:bg-opacity-90">
                        <i className="fas fa-download mr-2"></i> App Store
                    </a>
                </div>
                
                {/* Mobile App - Android */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="text-5xl text-gray-800 mb-4">
                        <i className="fab fa-android"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Android App</h3>
                    <p className="text-gray-600 mb-4">Get our Android app from Google Play Store for your Android smartphones and tablets.</p>
                    <a href="#" className="btn-riders text-white px-4 py-2 rounded-lg inline-block font-semibold hover:bg-opacity-90">
                        <i className="fas fa-download mr-2"></i> Play Store
                    </a>
                </div>
                
                {/* Web App */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="text-5xl text-gray-800 mb-4">
                        <i className="fas fa-globe"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Web Platform</h3>
                    <p className="text-gray-600 mb-4">Access all features through our web platform from any browser on any device.</p>
                    <a href="#" className="btn-riders text-white px-4 py-2 rounded-lg inline-block font-semibold hover:bg-opacity-90">
                        <i className="fas fa-external-link-alt mr-2"></i> Launch Web App
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* Token Information */}
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">wCRYMT Token Governance</h2>
                    <p className="text-gray-600 mb-4">The wCRYMT token powers our community governance system, allowing token holders to create and vote on proposals that shape the future of our motorcyclist community.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-700">Create proposals with a minimum of 50 wCRYMT tokens</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-700">Vote weight proportional to your token holdings</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-700">Earn tokens by participating in community activities</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-700">Trade tokens on supported exchanges</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <a href="#" className="btn-riders text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-opacity-90">
                            Learn More About wCRYMT
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-gray-100 rounded-lg p-6 shadow-inner">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Token Statistics</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between pb-2 border-b border-gray-300">
                                <span className="text-gray-600">Total Supply:</span>
                                <span className="font-bold text-gray-800">10,000,000 wCRYMT</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-300">
                                <span className="text-gray-600">Circulating Supply:</span>
                                <span className="font-bold text-gray-800">6,345,892 wCRYMT</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-300">
                                <span className="text-gray-600">Governance Threshold:</span>
                                <span className="font-bold text-gray-800">50 wCRYMT</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-300">
                                <span className="text-gray-600">Current Value:</span>
                                <span className="font-bold text-gray-800">$0.87 USD</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-300">
                                <span className="text-gray-600">24h Volume:</span>
                                <span className="font-bold text-gray-800">$124,563 USD</span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="bg-white border border-riders text-riders px-4 py-2 rounded-lg font-semibold hover:bg-riders hover:bg-opacity-10 transition">
                                <i className="fas fa-wallet mr-2"></i> Connect Wallet to Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* Connected Backend */} 
{/* add category into proposal*/}

      {/* Greet Form */}
      <form action="#" onSubmit={handleSubmit} style={{width:'50vw', margin: '0 auto'}}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" required />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <br />

      {/* Vote Form */}
      <form action="#" onSubmit={vote} style={{width:'50vw', margin: '0 auto'}}>
        <label htmlFor="voteId">Proposal ID: &nbsp;</label>
        <input 
          id="voteId" 
          type="number" 
          value={voteId} 
          onChange={(e) => setVoteId(Number(e.target.value))} 
          required 
        />
        <label htmlFor="inFavor">Vote In Favor: &nbsp;</label>
        <input 
          type="checkbox" 
          checked={inFavor} 
          onChange={(e) => setInFavor(e.target.checked)} 
        />
        <button type="submit">Vote</button>
      </form>

      <br />

      {/* Fetch Proposals Button */}
      <button onClick={fetchProposals}>Fetch Proposals</button>

      {/* Display Proposals */}
      <section id="proposals">
        <h3>Proposals:</h3>
        <ul>
          {proposals.map((proposal, index) => (
            <li key={index}>
              <strong>{proposal.title}</strong> (ID: {proposal.id}):  
              <p>{proposal.votes_for} For / {proposal.votes_against} Against</p>
            </li>
          ))}
        </ul>
      </section>
{/* End of Connected Backend */} 

      
    </main>
  );
}

export default App;