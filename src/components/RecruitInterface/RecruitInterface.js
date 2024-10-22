import React from 'react';
import { useAnnouncements } from '../../context/AnnouncementContext';
import ReactionButton from '../ReactionButton'; 
import './RecruitInterface.css';

const RecruitInterface = ({ recruitName }) => { 
    const { announcements, addReaction } = useAnnouncements(); 

    return (
        <div className="dashboard-container">
            <h2>DASHBOARD</h2>
            <div className="announcements-list">
                {announcements.length === 0 ? (
                    <p>No announcements yet.</p>
                ) : (
                    announcements.map((item, index) => (
                        <div key={index} className="announcement-card">
                            <div className="announcement-content">
                                <strong>{item.username}</strong>
                                <p>{item.announcement}</p>
                                {item.image && <img src={item.image} alt="Announcement" className="announcement-image" />}
                                <small>{item.date}</small>
                                <div className="reactions-list">
                                    {item.reactions.length > 0 ? (
                                        item.reactions.map((reaction, i) => (
                                            <span key={i}>
                                                {reaction.username} reacted: {reaction.reaction} 
                                            </span>
                                        ))
                                    ) : (
                                        <span>No reactions yet.</span>
                                    )}
                                </div>
                                {/* Include the ReactionButton for recruits to react */}
                                <ReactionButton index={index} onReact={addReaction} recruitName={recruitName} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecruitInterface;








