import React from 'react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Responsive Layout</a>
        <button className="navbar-toggler d-lg-none" type="button" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Topbar;