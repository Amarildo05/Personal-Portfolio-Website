import ProjectCards from "../componenets/projects/projectCard/ProjectCards";
import '../PagesLayout.css';

export default function Projects() {
  return (
    <div className="page-layout">
      <h2>Projects</h2>
      <ProjectCards />
    </div>
  );
}