"use client"
import React, { useState } from 'react';
import './SideNav.css'; // Import the CSS file for styling

const SideNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`sidenav ${menuOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link">
                    <img src="/assets/images/mayphoologo.png" className="nav-img" alt="Home" />
                </a>
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#skill" className="nav-link">My Skill</a>
                <a href="#project" className="nav-link">My Projects</a>
                <a href="#experience" className="nav-link">My Experience</a>
               
            </div>
        </>
    );
};

export default SideNav;
