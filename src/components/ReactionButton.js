import React from 'react';
import { FaSmile, FaThumbsUp, FaHeart } from 'react-icons/fa'; 

const ReactionButton = ({ index, onReact, recruitName }) => {
    const emojis = [
        { icon: <FaSmile />, label: '😊' }, 
        { icon: <FaThumbsUp />, label: '👍' }, 
        { icon: <FaHeart />, label: '❤️' } 
    ];

    return (
        <div className="reaction-buttons">
            {emojis.map((emoji, i) => (
                <button key={i} onClick={() => onReact(index, recruitName, emoji.label)} className="reaction-button">
                    {emoji.icon}
                </button>
            ))}
        </div>
    );
};

export default ReactionButton;

