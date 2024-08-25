import React from 'react';
import './Intro.css';
const Intro = () =>{

return(
<div className="partone">
<section>
    <img src="/assets/images/mayphooprofile.jpg" alt="Home" className="partone-img" />
    <div className="partone-content">
        <p className='intro'>Hello, I&apos;m</p>
        <h2>May Phoo Wint Zay Oo</h2>
        <div className='intro-txt'>
            <p>Hello, I&apos;m a Full-Stack Developer with a passion for creating seamless and efficient web applications. I enjoy tackling challenges that require both front-end creativity and back-end precision, always striving to deliver robust and scalable solutions.</p>
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