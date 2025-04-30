import React, { FormEvent, useState } from "react";
import { icvote_backend } from '../../declarations/icvote_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [proposalTitle, setProposalTitle] = useState('');
  const [voteId, setVoteId] = useState<number>(0);
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
      const id = await icvote_backend.create_proposal(proposalTitle);
      console.log("Proposal created with ID:", id);
      setProposalTitle(''); // Clear the form
    }
  }

  async function vote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await icvote_backend.vote(BigInt(voteId), inFavor);
    setVoteId(0); // Clear the form
  }

  async function fetchProposals() {
    const proposalsList = await icvote_backend.get_proposals();
    setProposals(proposalsList);
  }

  return (
    <main style={{ padding: 20 }}>
      <img src="/logo.svg" alt="CryptoMoto" width={300} />
      <br />
      <br />
      
      {/* Greet Form */}
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" required />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <br />

      {/* Create Proposal Form */}
      <form action="#" onSubmit={createProposal}>
        <label htmlFor="proposalTitle">Proposal Title: &nbsp;</label>
        <input 
          id="proposalTitle" 
          type="text" 
          value={proposalTitle} 
          onChange={(e) => setProposalTitle(e.target.value)} 
          required 
        />
        <button type="submit">Create Proposal</button>
      </form>

      <br />

      {/* Vote Form */}
      <form action="#" onSubmit={vote}>
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
              <strong>{proposal.title}</strong> (ID: {proposal.id}) - 
              {proposal.votes_for} For / {proposal.votes_against} Against
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;