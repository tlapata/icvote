import React, { FormEvent, useState } from "react";
import { icvote_backend } from '../../declarations/icvote_backend';
import Nav from "./components/layout/header/Nav";
import Intro from "./components/partial/Intro";
import AuthModal from "./components/partial/AuthModal";
import WalletStatus from "./components/partial/WalletStatus";


function App() {
  const [greeting, setGreeting] = useState('');
  const [proposalTitle, setProposalTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState<number>(1);
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

  async function createProposal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (proposalTitle.trim() !== "") {
      const id = await icvote_backend.create_proposal(proposalTitle, description, BigInt(author));
      console.log("Proposal created with ID:", id);
      setProposalTitle(''); // Clear the form
    }
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
      
      {/* Greet Form */}
      <form action="#" onSubmit={handleSubmit} style={{width:'50vw', margin: '0 auto'}}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" required />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <br />

      {/* Create Proposal Form */}
      <form action="#" onSubmit={createProposal} style={{width:'50vw', margin: '0 auto'}}>
        <label htmlFor="proposalTitle">Proposal Title: &nbsp;</label>
        <input 
          id="proposalTitle" 
          type="text" 
          value={proposalTitle} 
          onChange={(e) => setProposalTitle(e.target.value)} 
          required 
        />
        <label htmlFor="description">Proposal description: &nbsp;</label>
        <input 
          id="description" 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          id="author" 
          type="number" 
          value={author} 
          onChange={(e) => setAuthor(Number(e.target.value))} 
          required 
        />
        <button type="submit">Create Proposal</button>
      </form>

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
    </main>
  );
}

export default App;