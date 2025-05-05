use candid::{CandidType, Deserialize};
use std::collections::HashMap;
use ic_cdk::{query, update};
//use chrono::{DateTime, Utc};


// Constants
const DEADLINE_DURATION: u64 = 30 * 24 * 60 * 60; // 30 days in seconds
static mut NEXT_ID: u64 = 0;

// Structures
#[derive(CandidType, Deserialize, Clone)]
struct Proposal {
    id: u64,
    title: String,
    description: String,
    author: u64,         // id of user
    timestamp: u64,
    category: ProposalCategory,
    execution_type: ExecutionType,
    status: ProposalStatus,
    votes_for: u32,
    votes_against: u32,
    quorum: u32,
    executed_by: Option<String>, // Principal or name of executor
}

#[derive(CandidType, Deserialize, Clone)]
enum ProposalStatus {
    Open,
    Passed,
    Rejected,
    RejectedDueToNoQuorum,
    Executed,
}

#[derive(CandidType, Deserialize, Clone)]
enum ExecutionType {
    Manual,   // Dev-executed
    Automatic // Smart-contract executed (future)
}

#[derive(CandidType, Deserialize, Clone)]
enum ProposalCategory {
    Feature,
    Funding,
    Upgrade,
    Other,
}


// calculating deadline of voting
impl Proposal {
    fn deadline(&self) -> u64 {
        self.timestamp + DEADLINE_DURATION
    }
    fn is_open(&self, now: u64) -> bool {
        now <= self.deadline()
    }
}

#[query]
fn get_proposal_deadline(id: u64) -> u64 {
    PROPOSALS.with(|p| {
        if let Some(proposal) = p.borrow().get(&id) {
            proposal.deadline()
        } else {
            0 // Or some default/error value
        }
    })
}


thread_local! {
    static PROPOSALS: std::cell::RefCell<HashMap<u64, Proposal>> = std::cell::RefCell::new(HashMap::new());
}

// Default query for greeting
#[query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[query]
fn get_proposals() -> Vec<Proposal> {
    PROPOSALS.with(|p| p.borrow().values().cloned().collect())
}

// Creating New Proposal
#[update]
fn create_proposal(
        title: String, 
        description: String, 
        author: u64
    ) -> u64 {

    // proposal id
    let id = unsafe {
        NEXT_ID += 1;
        NEXT_ID
    };
    
    // now timestamp
    let timestamp = ic_cdk::api::time() / 1_000_000_000;

    // new proposal
    let proposal = Proposal {
        id,
        title,
        description,
        timestamp,
        author,
        category: ProposalCategory::Feature,
        execution_type: ExecutionType::Manual,
        status: ProposalStatus::Open,
        votes_for: 0,
        votes_against: 0,
        quorum: 10,
        executed_by: Some("CryptoMoto Team".to_string())
    };
    PROPOSALS.with(|p| p.borrow_mut().insert(id, proposal));
    id
}

#[ic_cdk::update]
fn vote(id: u64, in_favor: bool) {
    PROPOSALS.with(|p| {
        if let Some(prop) = p.borrow_mut().get_mut(&id) {
            if in_favor {
                prop.votes_for += 1;
            } else {
                prop.votes_against += 1;
            }
        }
    });
}

// Enable Candid export
ic_cdk::export_candid!();