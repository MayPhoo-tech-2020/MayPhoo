import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get ID from query parameters
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        try {
          // Use the ID from path parameters
          const response = await axios.get(`/api/get-each-project/${id}`);
          setProject(response.data.data);
        } catch (error) {
          console.error('Error fetching project:', error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!project) return <p>No project found.</p>;

  return (
    <div>
      <h1>Project Details</h1>
      <h2>Project ID: {project.id}</h2>
      <p>Title: {project.title}</p>
      <p>Description: {project.description}</p>
      {/* Add more project details as needed */}
    </div>
  );
};

export default ProjectDetails;
