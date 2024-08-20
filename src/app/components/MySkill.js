"use client";

import React, { useEffect, useState } from 'react';
import './MySkill.css';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const MySkill = () => {
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                console.log(`Fetching skills from ${baseURL}/api/get-skill`);
                const response = await fetch(`${baseURL}/api/get-skill`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Fetched skills data:', data);

                const groupedSkills = data.data.reduce((acc, skill) => {
                    if (!acc[skill.category]) {
                        acc[skill.category] = [];
                    }
                    acc[skill.category].push(skill);
                    return acc;
                }, {});

                setSkills(groupedSkills);
            } catch (err) {
                setError(`Failed to fetch skills: ${err.message}`);
                console.error('Error fetching skills:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading) return <p>Loading skills...</p>;

    if (error) return <div className="error-message">{error}</div>;

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
