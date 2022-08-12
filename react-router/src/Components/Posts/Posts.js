import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [])
  return (
    <div style={{width: '1000px'}}>
      <h2>Hello World {posts.length}</h2>
      {
        posts.map(post => <Link style={{margin: '1rem'}} key={post.id} to={`/posts/${post.id}`}>{post.id}</Link>)
      }
      <Outlet />
    </div>
  );
};

export default Posts;