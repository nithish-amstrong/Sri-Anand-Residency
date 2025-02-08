import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';


const Layout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="d-flex">
      {/* Sidebar with Hamburger Icon */}
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      
      <div className="content flex-grow-1" style={{ marginTop: '56px' }}>
        {/* Topbar */}
        <Topbar toggleSidebar={toggleSidebar} />
        
        {/* Main content passed as children */}
        <div className="main-content pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
