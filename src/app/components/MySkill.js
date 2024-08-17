import React from 'react';
import './MySkill.css';

const MySkill = ()=>{
return(
    <div className="partthree">      
    <section>
        <div className="skills-container">
            <h2 className="skills-title">Java</h2>
            <hr className="skills-line" />
            <div className="skills-images">
                <div className="skill">
                    <img src="/assets/images/name.png" alt="Language 1" className="skill-img" />
                    <p className="skill-title">Java</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/name.png" alt="Language 2" className="skill-img" />
                    <p className="skill-title">Python</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/name.png" alt="Language 3" className="skill-img" />
                    <p className="skill-title">JavaScript</p>
                </div>
            </div>
        </div>
    </section>
</div>
);
};
export default MySkill;
