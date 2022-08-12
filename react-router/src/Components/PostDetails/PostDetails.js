import React from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
  const {postId} = useParams();

  return (
    <div>
      <h2>Hello World {postId}</h2>      
    </div>
  );
};

export default PostDetails;