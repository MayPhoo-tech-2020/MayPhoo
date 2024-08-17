import React from 'react';
import './AboutMe.css';
const AboutMe = () =>{
    return(
        <div className="parttwo">
            <section>
                <div className="parttwo-container">
                    <div className="parttwo-img">
                        <img src="/assets/images/mayphoo.jpg" alt="About Me" />
                    </div>
                    <div className="parttwo-content">
                        <h2>Full Stack Developer</h2>
                        <p>I am A Blogger. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <div className="txt-list">
                            <ul>
                                <li><img src="/assets/images/name.png" alt="Name" /> <b>Name:&nbsp;</b> May Phoo Wint Zay Oo</li>
                                <li><img src="/assets/images/education.png" alt="Education" /> <b>Education:&nbsp;</b> Bachelor of Computer Science (B.C.Sc.)</li>
                                <li><img src="/assets/images/phone.png" alt="Phone" /> <b>Phone:&nbsp;</b> +66 0979873362</li>
                                <li><img src="/assets/images/address.png" alt="Address" /> <b>Address:&nbsp;</b> Plum Condo Mix Chaengwattana, Lak Si, Bangkok</li>
                            </ul>
                            <ul>
                                <li><img src="/assets/images/gmail.png" alt="Gmail" /> <b>Gmail:&nbsp;</b> mayphoowintzayoo@gmail.com</li>
                                <li><img src="/assets/images/github.png" alt="GitHub" /> <b>GitHub:&nbsp;</b> <a href='https://github.com/MayPhoo-tech-2020'>Git Account</a></li>
                                <li><img src="/assets/images/linkedin.png" alt="LinkedIn" /> <b>LinkedIn:&nbsp;</b> <a href='https://www.linkedin.com/in/mayphoo'>LinkedIn Account</a></li>
                                <li><img src="/assets/images/experience1.png" alt="Experience" /> <b>Experience:&nbsp;</b> 5 years</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AboutMe;