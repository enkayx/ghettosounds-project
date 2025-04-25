
import React from 'react';

const sevices = () => {
  const sevices = [
    { name: "Neural Pulse", genre: "Electronic", image: "https://picsum.photos/400/400?random=1" },
    { name: "Quantum Beat", genre: "Techno", image: "https://picsum.photos/400/400?random=2" },
    { name: "Digital Echo", genre: "Ambient", image: "https://picsum.photos/400/400?random=3" },
    { name: "Binary Flow", genre: "House", image: "https://picsum.photos/400/400?random=4" },
  ];

  return (
    <section id="sevices" className="py-5 bg-gray-100">
      <div className="container">
        <h2 className="text-center display-4 mb-5 text-black">Our sevices</h2>
        <div className="row g-4">
          {sevices.map((services) => (
            <div className="col-md-6 col-lg-3" key={services.name}>
              <div className="card h-100 shadow-sm bg-white">
                <img
                  src={services.image}
                  className="card-img-top"
                  alt={services.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-black">{services.name}</h5>
                  <p className="card-text text-gray-600">{services.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default sevices;
