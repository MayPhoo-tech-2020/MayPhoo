'use client';

import React, { useEffect, useState } from 'react';
import './MySkill.css';

const MySkill = () => {
    const [skills, setSkills] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('/api/get-skill'); // Use relative path for API
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Group skills by category
                const groupedSkills = data.data.reduce((acc, skill) => {
                    if (!acc[skill.category]) {
                        acc[skill.category] = [];
                    }
                    acc[skill.category].push(skill);
                    return acc;
                }, {});

                setSkills(groupedSkills);
            } catch (err) {
                setError('Failed to fetch skills');
                console.error('Error fetching skills:', err);
            }
        };

        fetchSkills();
    }, []);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="partthree">      
            <section>
                {Object.keys(skills).map(category => (
                    <div key={category} className="skills-container">
                        <h2 className="skills-title">{category}</h2>
                        <hr className="skills-line" />
                        <div className="skills-images">
                            {skills[category].map(skill => (
                                <div key={skill.id} className="skill">
                                    <img 
                                        src={`/assets/images/${skill.img_name}`} 
                                        alt={skill.title} 
                                        className="skill-img" 
                                    />
                                    <p className="each-title">{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MySkill;
