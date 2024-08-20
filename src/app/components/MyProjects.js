"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './MyProjects.css'; 

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/project-details/${id}`); // Replace '/project-details' with the actual path to your project details page
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
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

  if (loading) return <p>Loading...</p>; // Optionally, show a loading message

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container" style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
      {projects.map((project) => (
        <div key={project.id} className="card" style={{ width: '20rem' }}>
          {/* 
          <Image 
            src={`/assets/images/${project.image}`} 
            width={150} 
            height={150} 
            className="card-img-top" 
            alt={project.title} 
          /> 
          */}
          <div className="card-container card-body">
            <div className="div-card-title">
              <h5 className="card-title">{project.title}</h5>
            </div>
            <div className="card-description">
              <p className="card-text">{project.description}</p>
            </div>
            <button 
              className="detail-button" 
              onClick={() => handleClick(project.id)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
