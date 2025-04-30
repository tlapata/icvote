import { HttpAgent, Actor } from "@dfinity/agent";
//import { idlFactory as dao_idl, canisterId as dao_id } from "../icvote_backend";
import { icvote_backend } from '../../declarations/icvote_backend';

//const agent = new HttpAgent({ host: "http://localhost:4943" });
//const dao = Actor.createActor(dao_idl, { agent, canisterId: dao_id });

async function createProposal(title: string) {
  const id = await icvote_backend.create_proposal(title);
  console.log("Proposal created with ID:", id);
}

async function vote(id: number, inFavor: boolean) {
  await icvote_backend.vote(BigInt(id), inFavor);
}

async function fetchProposals() {
  const proposals = await icvote_backend.get_proposals();
  console.log("Proposals:", proposals);
}