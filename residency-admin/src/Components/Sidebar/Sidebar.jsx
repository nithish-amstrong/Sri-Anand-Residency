import React from 'react';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div>
      {/* Hamburger Button for small screens */}
      <button
        className="btn btn-dark d-lg-none position-fixed top-0 start-0 m-3"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Sidebar: Visible based on isVisible prop */}
      <div
        className={`bg-dark text-white vh-100 position-fixed start-0 top-0 p-2 transition-all duration-300 ${isVisible ? 'd-block' : 'd-none d-lg-block'}`}
        style={{ width: '250px', zIndex: 1000 }}
      >
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;