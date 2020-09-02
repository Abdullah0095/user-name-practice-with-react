import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid maroon',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <p><Link to={`/friend/${id}`}>
                <button>Information{id}</button>
                </Link></p>

        </div>
    );
};

export default Friends;