import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import '../project-details/ProjectDetails.css'; // Import the CSS file

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        try {
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
    <div className="projectDetailsContainer">
      <div className="card">
        <h1 className="projectTitle">{project.title}</h1>
        <Link href={project.githublink} target="_blank" className="githubButton">
          View on GitHub
        </Link>
        <div className="projectContent">
          <div className="imageContainer">
            {/*
            <Image
              src={`/assets/images/${project.image}`}
              alt={project.title}
              width={800}
              height={450}
              className="projectImage"
            />*/
            }
          </div>
          <div className="projectInfo">
            <p className="projectDescription">{project.description}</p>
            <ul className="infoList">
              <li><strong>Technologies:</strong> {project.technologies}</li>
              <li><strong>Languages:</strong> {project.languages}</li>
              <li><strong>Contributions:</strong> {project.contributions}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
