import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
    }, [])
  return (
    <div>
      <h2>I have more than friend.</h2>
      <p>All of friends Are good</p>
      <p><small>My total friend are: {friends.length}</small></p>
      {
        friends.map(friend => <Friend key={friend.id} friend={friend} />)
      }
    </div>
  );
};

export default Friends;