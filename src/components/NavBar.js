import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.scss"

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/portfolio/'); // Navigate to the desired page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const handleProjectsClick = () => {
    navigate('/portfolio/projects'); // Navigate to the desired page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };


  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const st = window.scrollY;
    const threshold = 50; // Set your desired threshold here

    if (st > threshold) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="navbar" style={{justifyContent:'flex-end', alignItems:'center', paddingRight: "20px", paddingTop: "20px", paddingBottom:"20px", boxShadow: '0px 4px 4px -2px rgba(0,0,0,0.2)',}} className="navbar">
      <ul>
        <li>
            <h2 className="section-title" onClick={handleHomeClick}
            style={{
              cursor: 'pointer', // Change the cursor to a pointer on hover
            }}
            >
              HOME
            </h2>
        </li>
        <li>
            <h2 className="section-title" onClick={handleProjectsClick}
            style={{
              cursor: 'pointer', // Change the cursor to a pointer on hover
            }}
            >
              PROJECTS
            </h2>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
