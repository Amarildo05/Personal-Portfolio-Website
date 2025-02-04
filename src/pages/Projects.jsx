import ProjectCards from "../componenets/projects/projectCard/ProjectCards";
import projects from "../projectsData";
import "../PagesLayout.css";

export default function Projects() {
  return (
    <div className="page-layout">
      <h2>Projects</h2>
      <ProjectCards projects={projects} />
    </div>
  );
}