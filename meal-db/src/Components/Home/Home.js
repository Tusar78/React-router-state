import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    const path = `/meals`
    navigate(path);
  }
  return (
    <section className="bg-base-200">
      <div className="hero min-h-screen  max-w-screen-lg mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to our Restaurant!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary" onClick={handleNavigate}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
