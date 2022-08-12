import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
  const {friendId} = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    fetch(`${url}/${friendId}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [friendId]) 

  const {name, username, email, phone} = details;

  return (
    <div>
      <h2>Thanks for coming! {friendId} </h2>
      <h3>{name} <small>{username}</small></h3>
      <p>email: {email}</p>
      <p><small>Phone {phone}</small></p>
    </div>
  );
};

export default FriendDetails;