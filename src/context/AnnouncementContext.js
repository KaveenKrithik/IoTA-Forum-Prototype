import React, { createContext, useContext, useState } from 'react';

const AnnouncementContext = createContext();

export const useAnnouncements = () => {
    return useContext(AnnouncementContext);
};

export const AnnouncementProvider = ({ children }) => {
    const [announcements, setAnnouncements] = useState([]);

    const addAnnouncement = (username, announcement, image) => {
        const newAnnouncement = {
            username,
            announcement,
            date: new Date().toLocaleString(), // Current date and time
            image,
            reactions: [] // Initialize with an empty array for reactions
        };
        setAnnouncements((prev) => [...prev, newAnnouncement]);
    };

    const addReaction = (index, recruitName, reaction) => {
        setAnnouncements((prev) => {
            const newAnnouncements = [...prev];
            const announcement = newAnnouncements[index];

            // Check if the recruit has already reacted
            const existingReaction = announcement.reactions.find(r => r.username === recruitName);
            if (existingReaction) {
                existingReaction.reaction = reaction; // Update the existing reaction
            } else {
                announcement.reactions.push({ username: recruitName, reaction }); // Add new reaction
            }
            return newAnnouncements;
        });
    };

    const deleteAnnouncement = (index) => {
        setAnnouncements((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <AnnouncementContext.Provider value={{ announcements, addAnnouncement, deleteAnnouncement, addReaction }}>
            {children}
        </AnnouncementContext.Provider>
    );
};



