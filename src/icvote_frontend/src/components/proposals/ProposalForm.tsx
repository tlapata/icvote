import { FormEvent, useState } from 'react';
import { icvote_backend } from '../../../../declarations/icvote_backend';
import styles from './proposals.module.css';
import WarningIcon from '../icons/Warning';


interface ProposalFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ setShowModal }) => {

    // States
    const [proposalTitle, setProposalTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState<number>(1);

    // Functions
    async function createProposal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (proposalTitle.trim() !== "") {
            const id = await icvote_backend.create_proposal(proposalTitle, description, BigInt(author));
            console.log("Proposal created with ID:", id);
            setProposalTitle(''); // Clear the form
            setDescription(''); // Clear the form
            setShowModal(false);
        }
    }

    return (
        <form action="#" onSubmit={createProposal} className={styles.form}>
            <h2>Create New Proposal</h2>
            <div className={styles.formrow}>
                <label htmlFor="proposalTitle">Proposal Title</label>
                <input 
                    id="proposalTitle" 
                    placeholder="Enter a clear, concise title"
                    type="text" 
                    value={proposalTitle} 
                    onChange={(e) => setProposalTitle(e.target.value)} 
                    required 
                />
            </div>
            <div className={styles.formrow}>
                <label htmlFor="proposalCategory">Category</label>
                <select id="proposalCategory">
                    <option>-- Choose Category --</option>
                    <option>Community Event</option>
                    <option>Infrastructure</option>
                    <option>Governance</option>
                    <option>Partnership</option>
                    <option>Other</option>
                </select>
            </div>
            <div className={styles.formrow}>
                <label htmlFor="proposalDescription">Description</label>
                <textarea 
                    id="proposalDescription" 
                    placeholder="Explain your proposal in detail. What are you proposing and why is it beneficial?"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                />
            </div>
            <div className={styles.formrow}>
                <label htmlFor="proposalDuration">Voting Duration</label>
                <select id="proposalDuration">
                    <option>-- Choose Duration --</option>
                    <option>3 days</option>
                    <option>1 week</option>
                    <option>2 weeks</option>
                    <option>1 month</option>
                </select>
            </div>
            <div className={styles.warning}>
                <WarningIcon />
                <p>Creating a proposal requires <strong>50 wCRYMT</strong> tokens. This is a governance mechanism to ensure quality proposals. Your current balance: <strong>0 wCRYMT</strong></p>
            </div>
            <button type="submit">Submit Proposal</button>
        </form>
    )
}

export default ProposalForm;