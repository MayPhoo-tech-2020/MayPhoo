'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './MyProjects.css'; 
import Image from 'next/image';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/project-details/${id}`); // Replace '/project-details' with the actual path to your next page
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));

        const response = await axios.get('/api/get-project', {
          headers: { 'Cache-Control': 'no-cache' },
        });

        const projectsData = response.data.data || []; // Accessing the 'data' field
        console.log('Fetched projects:', projectsData); // Log projects
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      {projects.map((project) => (
        <div key={project.id} className="card">
         
          {/* <Image 
            src={`/assets/images/${project.image}`} 
            width={300} 
            height={200} 
            className="card-img-top" 
            alt={project.title} 
          />*/ }
          <div className="card-container">
            <div className="div-card-title">
              <h5 className="card-title">{project.title}</h5>
            </div>
            <div className="card-description">
              <p className="card-text">{project.description}</p>
            </div>
            <div className='card-tech'>
                <p className='card-item'>
                  <b>Technologies:</b> {project.technologies}
                </p>
                <p className='card-item'>
                  <b>Languages:</b> {project.languages}
                </p>
             
              </div>
            <button 
              className="detail-button" 
              onClick={() => handleClick(project.id)}
            >
              View Details
            </button>
            <a href={project.githublink} target="_blank" rel="noopener noreferrer">
              <button className="git-button">
                Go To GitHub
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
