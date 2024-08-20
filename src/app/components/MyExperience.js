'use client';

import React, { useEffect, useState } from 'react';
import './MyExperience.css';

const MyExperience = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch('/api/get-experience'); // Use relative path for API
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setExperiences(data.data || []);
            } catch (err) {
                setError('Failed to fetch experiences');
                console.error('Error fetching experiences:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    const splitSentences = (text) => {
        return text
            .split(/(?<=\.)\s*|\n+/) // Split by period followed by whitespace or newline
            .filter(sentence => sentence.trim() !== "") // Remove empty sentences
            .map((sentence, index) => <li key={index}>{sentence.trim()}</li>); // Create list items
    };

    return (
        <div className="partfour">
            <section>
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-container">
                        <div className="experience-header">
                            <img 
                                src={`/assets/images/${experience.company_logo}`} 
                                alt={experience.company_name} 
                                className="experience-logo" 
                            />
                            <div>
                                <h2 className="experience-title">
                                    {experience.company_name}, {experience.job_title}
                                </h2>
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
