import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const path = `/contact`;
    navigate(path);
  }
  return (
    <section className="bg-base-200">
      <div
        className="hero min-h-screen"
        style={{backgroundImage: 'url(https://placeimg.com/1000/800/arch)'}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">WE ARE.</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary" onClick={handleNavigate}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
