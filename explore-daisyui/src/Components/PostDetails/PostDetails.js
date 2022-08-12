import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(`${BASE_URL}/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [postId])

  const { title, body, id } = post;
  return (
    <section className='section mt-4'>
      <div className='max-w-screen-lg mx-auto border rounded-md p-4'>
        <span className='badge badge-secondary'>Post : {id}</span>
        <h2 className='font-semibold text-2xl text-amber-400 first-letter:capitalize'>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default PostDetails;