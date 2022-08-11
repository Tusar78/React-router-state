import React from 'react';

const Friend = ({friend}) => {
  const {name, username, id} = friend;
  return (
    <div style={{border: '1px solid #ddd', margin: '1rem'}}>
      <h2>{name}</h2>
      <button>{username} id:{id}</button>
    </div>
  );
};

export default Friend;