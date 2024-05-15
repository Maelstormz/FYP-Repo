import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Modal from "./CandidateModal";
import './CandidateProfiles.css';

function ElectionManagerCandidateProfiles() {
    const [modalOpen, setModalOpen] = useState(false);
    const [candidates, setCandidates] = useState([]); // Initialize candidate list as empty

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleAddCandidate = (candidate) => {
        setCandidates([...candidates, candidate]); //set the candidates array by combining the existing array with the new candidate
        handleCloseModal();
    };

    const handleRemoveCandidate = (candidateName) => {
        setCandidates(candidates.filter(c => c.name !== candidateName)); //set the candidates array to a new array that
                                                                        // has all the candidates except the one that matches candidateName
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="candidate-profiles-page">
                    <Sidebar />
                    <main className="candidate-content">
                        <div className="header-search">
                            <h1>Candidates</h1>
                            <div className="search-container">
                                <input type="text" placeholder="Search for candidate" />
                                <button type="button">Search</button>
                            </div>
                        </div>

                        {candidates.map((candidate, index) => (
                            <div key={index} className="candidate-profile">
                                <div className="candidate-card">
                                    <span className="candidate-name">{candidate.name}</span>
                                    <span className="candidate-role">{candidate.role}</span>
                                    <button onClick={() => handleRemoveCandidate(candidate.name)} className="remove-candidate-button">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button onClick={handleOpenModal} className="add-candidate-button">
                            Add New Candidate
                        </button>
                        <Modal isOpen={modalOpen} onClose={handleCloseModal} onSave={handleAddCandidate} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default ElectionManagerCandidateProfiles;