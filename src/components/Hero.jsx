
import React from 'react';

const Hero = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center bg-white text-black">
      <div className="container text-center">
        <h1 className="display-2 fw-bold mb-4 text-black">
          Ngoma neHosho
        </h1>
        <p className="lead mb-5 fs-4 text-gray-600">
          Home to good music & good vibes 
        </p>
        <button className="btn btn-dark btn-lg">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
