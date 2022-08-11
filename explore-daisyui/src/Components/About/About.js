import React from "react";

const About = () => {
  return (
    <section className="bg-base-200">
      <div className="hero max-w-screen-lg mx-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            alt="hero img"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About Us!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              natus eos. Nisi doloremque asperiores distinctio iure expedita
              beatae corporis voluptates, soluta, non provident error maiores
              quidem veritatis nam quo maxime dignissimos eveniet natus id
              nesciunt rerum similique quia ut dolorem. Iste quis laborum
              assumenda id necessitatibus eius illum! Impedit, beatae!
            </p>
            <button className="btn btn-primary">Reach Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
