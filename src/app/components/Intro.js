import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="partone">
      <section className="intro-section">
        <img src="/assets/images/mayphooprofile.jpg" alt="Home" className="partone-img" />
        <div className="partone-content">
          <p className="intro">Hello, I&apos;m</p>
          <h2>May Phoo Wint Zay Oo</h2>
          <div className="intro-txt">
            <p>
              Full-Stack Developer passionate about building scalable web applications. I thrive on new challenges,
              enjoy sharing knowledge, and am eager to learn and ready to work.
            </p>
          </div>
          <div className="buttons-container">
            <a href="/assets/document/mayphoowintzayooresume.pdf" download>
              <button className="resume-button">Download Resume</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
