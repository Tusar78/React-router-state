import React from 'react';
import {useNavigate} from 'react-router-dom';

const Friend = ({friend}) => {
  const {name, username, id} = friend;

  const navigate = useNavigate()

  const showFriendDetails = _ => {
    const path = `friend/${id}`;
    navigate(path);
  }
  return (
    <div style={{border: '1px solid #ddd', margin: '1rem'}}>
      <h2>{name}</h2>
      <button onClick={showFriendDetails}>{username} id:{id}</button>
    </div>
  );
};

export default Friend;