
import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'Services', 'Releases', 'About', 'Contact'];

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white border-b border-gray-200">
      <div className="container">
        <div className="d-flex align-items-center">
          <img 
            src="/lovable-uploads/06074ca4-5d9d-4016-af17-b794bf43f5cc.png" 
            alt="Ghetto Sounds Logo" 
            className="me-2"
            style={{ height: 'auto', width: '250px' }}
          />
          <a className="navbar-brand fs-3 fw-bold text-black" href="#">
            Ghetto Sounds Zimbabwe
          </a>
        </div>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link text-black hover:text-gray-600" 
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
