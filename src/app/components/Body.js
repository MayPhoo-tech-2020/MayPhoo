import React from 'react';
import './Body.css';
import Intro from './Intro';
import AboutMe from './AboutMe';
import MySkill from './MySkill';
import MyExperience from './MyExperience';
import MyProjects from './MyProjects';
import CompanyProjects from './CompanyProjects';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
    return (
        <div className='body' id="home">
            <div className="main-content">
                <Intro/>
                <hr className="line" />

                <h2 id="about">About Me</h2>
                <AboutMe/>
                <hr className="line" />
                <hr className='line'/>
                <h2 id="experience">My Experience</h2>
                <MyExperience/>
                <hr className='line'/>
                <h2 id="company-project">Company Projects</h2>
                <CompanyProjects/>
                <h2 id="skill">My Skill</h2>
                <MySkill/>
                <hr className="line" />

                <h2 id="project">Personal Projects</h2>
                <MyProjects/>
               
                
                
            </div>
        </div>
    );
};

export default Body;
