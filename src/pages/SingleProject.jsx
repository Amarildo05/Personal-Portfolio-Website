import { useParams } from "react-router-dom";
import ProjectDetails from "../componenets/singleProject/ProjectDetails";
import projects from "../projectsData";

export default function SingleProject() {
  const { id } = useParams(); // Get project ID from the URL
  const project = projects.find((project) => project.id === parseInt(id)); // Find the project by ID

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
}