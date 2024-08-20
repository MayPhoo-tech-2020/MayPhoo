"use client"
import React, { useState, useEffect } from 'react';
import './Body.css';
import Intro from './Intro';
import AboutMe from './AboutMe';
import MySkill from './MySkill';
import MyExperience from './MyExperience';
import MyProjects from './MyProjects';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., data fetching or other async tasks)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Adjust timeout as needed

        return () => clearTimeout(timer); // Clean up on component unmount
    }, []);

    if (loading) {
        return <div className="loading-message">Loading...</div>; // Loading indicator
    }

    return (
        <div className='body' id="home">
            <div className="main-content">
                <Intro/>
                <hr className="line" />

                <h2 id="about">About Me</h2>
                <AboutMe/>
                <hr className='line'/>

                <h2 id="skill">My Skill</h2>
                <MySkill/>
                <hr className="line" />

                <h2 id="experience">My Experience</h2>
                <MyExperience/>
                <hr className="line" />

                <h2 id="project">My Projects</h2>
                <MyProjects/>
            </div>
        </div>
    );
};

export default Body;
