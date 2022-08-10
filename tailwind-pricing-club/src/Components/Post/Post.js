import React from 'react';

const Post = ({post}) => {
  const {body, title} = post
  return (
    <div className='w-72 shadow-md rounded-md bg-white p-2'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;