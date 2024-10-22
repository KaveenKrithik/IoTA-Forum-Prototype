import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { FaUserShield } from 'react-icons/fa'; 
import './BoardMemberLogin.css';

const BoardMemberLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Board Member Logged In:', { username, password });
        login(username);
        navigate('/board');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">
                    <FaUserShield className="login-icon" /> {/* Added icon here */}
                    
                </h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        className="login-input"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default BoardMemberLogin;
