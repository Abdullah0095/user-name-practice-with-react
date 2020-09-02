import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const FriendDetail = () => {
    
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data=> setFriend(data));
    },[])


    return (
        <div>
            
            <p>This is friend detail of:{friendId}</p>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>website: {friend.website}</p>

        </div>
    );
};

export default FriendDetail;