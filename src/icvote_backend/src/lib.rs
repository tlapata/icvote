use candid::{CandidType, Deserialize};
use std::collections::HashMap;
use ic_cdk::{query, update};


// Default query for greeting
#[query]
fn greet(name: String) -> String {
    format!("Hello, World and {}!", name)
}

#[query]
fn bye(name: String) -> String {
    format!("Bye-bye, {}!", name)
}

#[update]
fn world(name: String) -> String {
    format!("World, {}!", name)
}

#[derive(CandidType, Deserialize, Clone)]

struct Proposal {
    id: u64,
    title: String,
    votes_for: u32,
    votes_against: u32,
}

static mut NEXT_ID: u64 = 0;

thread_local! {
    static PROPOSALS: std::cell::RefCell<HashMap<u64, Proposal>> = std::cell::RefCell::new(HashMap::new());
}

#[ic_cdk::query]
fn get_proposals() -> Vec<Proposal> {
    PROPOSALS.with(|p| p.borrow().values().cloned().collect())
}

#[ic_cdk::update]
fn create_proposal(title: String) -> u64 {
    let id = unsafe {
        NEXT_ID += 1;
        NEXT_ID
    };
    let proposal = Proposal {
        id,
        title,
        votes_for: 0,
        votes_against: 0,
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