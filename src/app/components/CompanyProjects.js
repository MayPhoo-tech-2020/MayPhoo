'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './CompanyProjects.css';
import Image from 'next/image';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));

        const response = await axios.get('/api/get-company-project', {
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
        <div key={project.id} className="card-company d-flex flex-column">
          <Image 
            src={`/assets/images/${project.image}`} 
            width={300} 
            height={170} 
            className="card-img-top rounded-3" 
            alt={project.title} 
          /> 
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <div className='card-tech'>
                <p className='card-item'>
                  <b>Technoloies:</b> {project.technologies}
                </p>
                <p className='card-item'>
                  <b>Languages:</b> {project.languages}
                </p>
             
              </div>
            <a href={project.githublink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary mt-2">
                Go To PlayStore
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
