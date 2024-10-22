import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AnimatedSplash from './components/AnimatedSplash/AnimatedSplash';
import Home from './components/Home/Home';
import BoardMemberInterface from './components/BoardMemberInterface/BoardMemberInterface';
import RecruitInterface from './components/RecruitInterface/RecruitInterface';
import BoardMemberLogin from './components/BoardMemberLogin/BoardMemberLogin';
import RecruitLogin from './components/RecruitLogin/RecruitLogin';
import './App.css';

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Routes>
                {showSplash ? (
                    <Route path="/" element={<AnimatedSplash />} />
                ) : (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/board/login" element={<BoardMemberLogin />} />
                        <Route path="/recruit/login" element={<RecruitLogin />} />
                        <Route path="/board" element={<BoardMemberInterface />} />
                        <Route path="/recruit" element={<RecruitInterface />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;
