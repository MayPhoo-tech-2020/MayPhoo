import React from 'react';
import './SideNav.css'; // Import the CSS file for styling

const SideNav = () => {
    return (
        <div className="sidenav">
            <a href="#home">
                <img src="/assets/images/mayphoologo.png" className="nav-img" alt="Home"/>
            </a>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skill">My Skill</a>
            <a href="#experience">My Experience</a>
            <a href="#project">Projects</a>
        </div>
    );
};

export default SideNav;
