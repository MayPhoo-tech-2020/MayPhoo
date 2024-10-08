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
                <h2 id="about" className="sub-title">About Me</h2>
                <AboutMe/>
                <hr className='line'/>
                <h2 id="experience" className="sub-title">Experience</h2>
                <MyExperience/>
                <hr className='line'/>
                <h2 id="company-project" className="sub-title">Company Projects</h2>
                <CompanyProjects/>
                <hr className="line" />
                <h2 id="skill" className="sub-title">Skill</h2>
                <MySkill/>
                <hr className="line" />
                <h2 id="project" className="sub-title">Personal Projects</h2>
                <MyProjects/>
            </div>
        </div>
    );
};

export default Body;
