import React, { useEffect } from 'react';
import { useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data =>setPosts(data))
  }, [])
  return (
    <section className='section w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto pt-3 grid grid-cols-12 gap-2'>
        {
          posts.map(post => <button className='badge bg-amber-500'>Post: {post.id}</button>)
        }
      </div>
    </section>
  );
};

export default Posts;