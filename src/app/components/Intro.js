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
            <p>I am A Blogger. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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