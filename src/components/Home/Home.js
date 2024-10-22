import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa'; // Import any icons you want to use

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="circle">
                <div className="welcome-message-container">
                    <h2 className="welcome-message">IoTA FORUM</h2>
                    <p className="tagline">Where Innovation Meets Collaboration</p>
                </div>
                <div className="button-container">
                    <button onClick={() => navigate('/board/login')} className="role-button">
                        <FaChalkboardTeacher className="icon" /> Board Member
                    </button>
                    <button onClick={() => navigate('/recruit/login')} className="role-button">
                        <FaUsers className="icon" /> Recruit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
