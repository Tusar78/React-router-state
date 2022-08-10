import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))    
  }, [])
  console.log(posts);
  return (
    <div className='mt-4 max-w-screen-lg bg-gray-50 mx-auto'>
      <div className="grid grid-cols-3 gap-4">
        {
          posts.map(post => <Post key={post.id} post={post} />)
        }
      </div>
    </div>
  );
};

export default Posts;