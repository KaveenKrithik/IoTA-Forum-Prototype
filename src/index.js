import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AnnouncementProvider } from './context/AnnouncementContext';
import { UserProvider } from './context/UserContext'; 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider> {/* Wrap your app with UserProvider */}
            <AnnouncementProvider>
                <App />
            </AnnouncementProvider>
        </UserProvider>
    </React.StrictMode>
);



