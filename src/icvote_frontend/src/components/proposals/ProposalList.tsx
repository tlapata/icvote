import { useState } from 'react';
import styles from './proposals.module.css';
import PlusIcon from '../icons/Plus';
import ProposalForm from './ProposalForm';


const ProposalList = () => {

  // States
  const [showModal, setShowModal] = useState(false);

  // Close modal when clicking outside the modal content
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowModal(false);
  };
  
  return (
    <section id="proposals" className={styles.proposals}>
        <div className="container">
            <div className={styles.header}>
                <h2>Community Proposals</h2>
                <button className="purple full" onClick={() => setShowModal(true)}>
                    <PlusIcon /> Create Proposal
                </button>
            </div>

            {/* Proposals Filter */}
            <div className="bg-gray-100 rounded-lg p-4 mb-8 flex flex-wrap items-center justify-between">
                <div className="flex space-x-2 mb-2 sm:mb-0">
                    <button className="bg-riders text-white px-4 py-2 rounded-lg text-sm font-semibold">All Proposals</button>
                    <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">Active</button>
                    <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">Passed</button>
                    <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">Failed</button>
                </div>
                <div className="relative">
                    <input type="text" placeholder="Search proposals..." className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"/>
                    <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                </div>
            </div>

            {/* Proposals List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Proposal 1 */}
                <div className="proposal-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-green-100 text-green-800 px-3 py-1 text-sm font-semibold flex items-center">
                        <i className="fas fa-check-circle mr-1"></i> Active Voting
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Community Ride Event Funding</h3>
                        <p className="text-gray-600 mb-4">Allocate funds for the annual cross-country motorcycle ride event that brings together riders from all chapters.</p>
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-user mr-1"></i> Proposed by: RiderLeader
                            </div>
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-clock mr-1"></i> Ends in: 3 days
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-1">Current Votes:</p>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-green-500 h-4 rounded-full" style={{width: "65%"}}></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span>65% Yes (325 votes)</span>
                                <span>35% No (175 votes)</span>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 flex-1">Vote Yes</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 flex-1">Vote No</button>
                        </div>
                    </div>
                </div>

                {/* Proposal 2 */}
                <div className="proposal-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-semibold flex items-center">
                        <i className="fas fa-hourglass-half mr-1"></i> Pending Review
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">New Safety Gear Standards</h3>
                        <p className="text-gray-600 mb-4">Proposal to update community guidelines for recommended safety gear and establish partnership with gear manufacturers.</p>
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-user mr-1"></i> Proposed by: SafetyFirst
                            </div>
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-clock mr-1"></i> Voting starts: 2 days
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-1">Status:</p>
                            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
                                This proposal is currently under review by moderators and will be open for voting soon.
                            </div>
                        </div>
                        <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300">
                            View Details
                        </button>
                    </div>
                </div>

                {/* Proposal 3 */}
                <div className="proposal-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-gray-100 text-gray-800 px-3 py-1 text-sm font-semibold flex items-center">
                        <i className="fas fa-check mr-1"></i> Passed
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Website Redesign Project</h3>
                        <p className="text-gray-600 mb-4">Approved funding for redesigning our community website with new features including rider route maps and maintenance tips.</p>
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-user mr-1"></i> Proposed by: DigitalRider
                            </div>
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-calendar mr-1"></i> Passed on: Jun 15, 2023
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-1">Final Vote:</p>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-green-500 h-4 rounded-full" style={{width: "82%"}}></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span>82% Yes (410 votes)</span>
                                <span>18% No (90 votes)</span>
                            </div>
                        </div>
                        <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300">
                            View Implementation Status
                        </button>
                    </div>
                </div>

                {/* Proposal 4 */}
                <div className="proposal-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-red-100 text-red-800 px-3 py-1 text-sm font-semibold flex items-center">
                        <i className="fas fa-times-circle mr-1"></i> Failed
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Membership Fee Increase</h3>
                        <p className="text-gray-600 mb-4">Proposal to increase annual membership fees by 15% to fund expanded community services and events.</p>
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-user mr-1"></i> Proposed by: TreasuryTeam
                            </div>
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-calendar mr-1"></i> Failed on: May 28, 2023
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-1">Final Vote:</p>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-red-500 h-4 rounded-full" style={{width: "35%"}}></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span>35% Yes (175 votes)</span>
                                <span>65% No (325 votes)</span>
                            </div>
                        </div>
                        <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300">
                            View Discussion
                        </button>
                    </div>
                </div>

                {/* Proposal 5 */}
                <div className="proposal-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold flex items-center">
                        <i className="fas fa-fire mr-1"></i> Hot Voting
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Community Mechanic Certification</h3>
                        <p className="text-gray-600 mb-4">Establish a community-recognized certification program for motorcycle mechanics with verified expertise.</p>
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-user mr-1"></i> Proposed by: MechanicPro
                            </div>
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-clock mr-1"></i> Ends in: 12 hours
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-1">Current Votes:</p>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-green-500 h-4 rounded-full" style={{width: "52%"}}></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span>52% Yes (260 votes)</span>
                                <span>48% No (240 votes)</span>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 flex-1">Vote Yes</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 flex-1">Vote No</button>
                        </div>
                    </div>
                </div>

                {/* Proposal 6 */}
                <div className="proposal-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 text-sm font-semibold flex items-center">
                        <i className="fas fa-lightbulb mr-1"></i> New
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Regional Chapter Expansion</h3>
                        <p className="text-gray-600 mb-4">Proposal to create five new regional chapters to better serve members in growing geographic areas.</p>
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-user mr-1"></i> Proposed by: GrowthCommittee
                            </div>
                            <div className="text-sm text-gray-500">
                                <i className="fas fa-clock mr-1"></i> Ends in: 5 days
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-1">Current Votes:</p>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-green-500 h-4 rounded-full" style={{width: "78%"}}></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span>78% Yes (78 votes)</span>
                                <span>22% No (22 votes)</span>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 flex-1">Vote Yes</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 flex-1">Vote No</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300">
                    Load More Proposals <i className="fas fa-chevron-down ml-1"></i>
                </button>
            </div>
        </div>
        {showModal && (
          <div className={styles.overly} onClick={handleOverlayClick}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.close}
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ×
              </button>
              <ProposalForm setShowModal={setShowModal} />
            </div>
          </div>
        )}
    </section>
  )
}

export default ProposalList;