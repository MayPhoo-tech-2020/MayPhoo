import React from 'react';
import './MySkill.css';

const MySkill = ()=>{
return(
    <div className="partthree">      
    <section>
        <div className="skills-container">
            <h2 className="skills-title">Programming Languages</h2>
            <hr className="skills-line" />
            <div className="skills-images">
                <div className="skill">
                    <img src="/assets/images/java.png" alt="Language 1" className="skill-img" />
                    <p className="skill-title">Java</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/java-script.png" alt="Language 2" className="skill-img" />
                    <p className="skill-title">JavaScript</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/typescript.png" alt="Language 3" className="skill-img" />
                    <p className="skill-title">Typescript</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/c-sharp.png" alt="Language 4" className="skill-img" />
                    <p className="skill-title">C#</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/python.png" alt="Language 5" className="skill-img" />
                    <p className="skill-title">Python</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/php.png" alt="Language 6" className="skill-img" />
                    <p className="skill-title">PHP</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/kotlin.png" alt="Language 7" className="skill-img" />
                    <p className="skill-title">Kotlin</p>
                </div>
                <div className="skill">
                    <img src="/assets/images/c-plus.png" alt="Language 8" className="skill-img" />
                    <p className="skill-title">C++</p>
                </div>
                
            </div>
        </div>
    </section>
</div>
);
};
export default MySkill;
