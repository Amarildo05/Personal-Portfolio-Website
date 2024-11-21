import ProjectCard from "../projectCard/ProjectCard";
import "./ProjectsGrid.css";

export default function ProjectsGrid() {
  return (
    <ul className="projects-grid">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ul>
  );
}