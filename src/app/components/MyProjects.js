"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import './MyProjects.css';

const MyProjects = () => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push('/project-details');
  };

  return (
    <div className="partfive">
      <div className="card" style={{ width: '18rem' }}>
        <img src="/assets/images/github.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <button onClick={handleViewDetails} className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
