

'use client';

import React, { useEffect, useState } from 'react';
import './MyExperience.css';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const MyExperience = () => {
    const [experiences, setExperiences] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch(`${baseURL}/api/get-experience`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setExperiences(data.data);
            } catch (err) {
                setError('Failed to fetch experiences');
                console.error('Error fetching experiences:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    if (loading) return <p>Loading experiences...</p>;

    if (error) return <div className="error-message">{error}</div>;

    const splitSentences = (text) => {
        return text
            .split(/(?<=\.)\s*|\n+/)
            .filter(sentence => sentence.trim() !== "")
            .map((sentence, index) => <li key={index}>{sentence.trim()}</li>);
    };

    return (
        <div className="partfour">
            <section>
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-container">
                        <div className="experience-header">
                            <img src={`/assets/images/${experience.company_logo}`} alt={experience.company_name} className="experience-logo" />
                            <div>
                                <h2 className="experience-title">{experience.company_name}, {experience.job_title}</h2>
                                <h5>{experience.location}</h5>
                            </div>
                        </div>
                        <hr className="experience-line" />
                        <div className="experience-details">
                            <p className="experience-description">
                                {experience.qualification_title}
                            </p>
                            <ul className="experience-list">
                                {splitSentences(experience.qualification_description)}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MyExperience;
