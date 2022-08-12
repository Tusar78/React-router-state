import React, { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data =>setPosts(data))
  }, [])

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    const path = `/posts/${id}`
    navigate(path);
  }
  return (
    <section className='section w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto pt-3 grid grid-cols-12 gap-2'>
        {
          posts.map(post => <button onClick={() => handleNavigate(post.id)} className='badge badge-primary badge-outline'>Post: {post.id}</button>)
        }
      </div>
      <Outlet />
    </section>
  );
};

export default Posts;