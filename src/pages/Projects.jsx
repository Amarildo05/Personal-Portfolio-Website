import ProjectsGrid from "../componenets/projects/projectsGrid/ProjectsGrid";
import '../PagesLayout.css';

export default function Projects() {
  return (
    <div className="page-layout">
      <h2>Projects</h2>
      <ProjectsGrid />
    </div>
  );
}