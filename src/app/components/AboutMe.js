import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme">
            <section className="aboutme-container">
                <div className="aboutme-image">
                    <img src="/assets/images/mayphoo.jpg" alt="About Me" />
                </div>
                <div className="aboutme-text">
                    <h4 className="aboutme-title"><b>Full Stack Developer</b></h4>
                    <div>
                   
                    <p className='aboutme-p'>
                        I am a Full Stack Developer passionate about creating intuitive and engaging applications. 
                        My skills and personal projects reflect my dedication to quality and innovation. 
                        Instead of focusing solely on years of experience, I invite you to explore my work and see 
                        how I continuously learn and apply new skills.
                    </p>

                 
                  
                   </div>
                    <div className="aboutme-info">
                        <div className="info-item">
                            <img src="/assets/images/name.png" alt="Name" />
                            <span><b>Name:&nbsp;</b> May Phoo Wint Zay Oo</span>
                        </div>
                        <div className="info-item">
                            <img src="/assets/images/education.png" alt="Education" />
                            <span><b>Education:&nbsp;</b> Bachelor of Computer Science</span>
                        </div>
                        <div className="info-item">
                            <img src="/assets/images/phone.png" alt="Phone" />
                            <span><b>Phone:&nbsp;</b> +66 0979873362</span>
                        </div>
                        <div className="info-item">
                            <img src="/assets/images/address.png" alt="Address" />
                            <span><b>Address:&nbsp;</b> Plum Condo Mix Chaengwattana, Lak Si, Bangkok</span>
                        </div>
                        <div className="info-item">
                            <img src="/assets/images/gmail.png" alt="Gmail" />
                            <span><b>Gmail:&nbsp;</b> <a href="mailto:mayphoowintzayoo@gmail.com">mayphoowintzayoo@gmail.com</a></span>
                        </div>
                        <div className="info-item">
                            <img src="/assets/images/github.png" alt="GitHub" />
                            <span><b>GitHub:&nbsp;</b> <a href="https://github.com/MayPhoo-tech-2020" target="_blank" rel="noopener noreferrer">Git Account</a></span>
                        </div>
                        <div className="info-item">
                            <img src="/assets/images/linkedin.png" alt="LinkedIn" />
                            <span><b>LinkedIn:&nbsp;</b> <a href="https://www.linkedin.com/in/mayphoo" target="_blank" rel="noopener noreferrer">LinkedIn Account</a></span>
                        </div>
                        <div className="info-item">
                            <img src="/assets/images/experience1.png" alt="Experience" />
                            <span><b>Experience:&nbsp;</b> 5 years</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
