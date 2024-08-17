'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleClick = () => {
    router.push('/project-details'); // Replace '/next-page' with the actual path to your next page
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
    <div className="container" style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
    {projects.map((project) => (
      <div key={project.id} className="card" style={{ width: '20rem' }}>
        {/* If you have a project image URL, replace the src with project.imageURL */}
        <Image src="/assets/images/mayphoologo.png" width={150} height={150} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text"><strong>Description:</strong> {project.description}</p>
          <button onClick={handleClick}>
     View details
    </button>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default MyProjects;
