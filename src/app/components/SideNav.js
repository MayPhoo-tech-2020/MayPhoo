"use client"
import React, { useState } from 'react';
import './SideNav.css';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`sidenav ${isOpen ? 'open' : ''}`}>
                <a href="#home" className="nav-link">
                    <img src="/assets/images/mayphoologo.png" className="nav-img" alt="Home" />
                </a>
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#company-project" className="nav-link">Company Projects</a>
                <a href="#skill" className="nav-link">Skill</a>
                <a href="#project" className="nav-link">Personal Projects</a>
            </div>
            <div className={`content ${isOpen ? 'shifted' : ''}`}>
                {/* Your other components go here */}
            </div>
        </>
    );
};

export default SideNav;
