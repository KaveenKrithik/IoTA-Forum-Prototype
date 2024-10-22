import React, { useState } from 'react';
import { useAnnouncements } from '../../context/AnnouncementContext';
import { useUser } from '../../context/UserContext';
import { FaPaperPlane, FaTrashAlt } from 'react-icons/fa';
import ReactionButton from '../ReactionButton'; 
import './BoardMemberInterface.css';


const BoardMemberInterface = () => {
    const { addAnnouncement, announcements, deleteAnnouncement, addReaction } = useAnnouncements();
    const { user } = useUser();
    const [announcement, setAnnouncement] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAnnouncement(user, announcement, image);
        setAnnouncement('');
        setImage(null); 
    };

    return (
        <div className="dashboard-container">
            <div className="announcement-form-container">
                <h2>POST</h2>
                <form onSubmit={handleSubmit} className="announcement-form">
                    <textarea
                        value={announcement}
                        onChange={(e) => setAnnouncement(e.target.value)}
                        placeholder="Announcement"
                        rows="4"
                        required
                        className="announcement-input"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="image-input"
                    />
                    <button type="submit" className="post-button">
                        <FaPaperPlane /> Post
                    </button>
                </form>
            </div>

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
                                <ReactionButton index={index} onReact={addReaction} recruitName={item.username} />
                            </div>
                            <button className="delete-button" onClick={() => deleteAnnouncement(index)}>
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BoardMemberInterface;
