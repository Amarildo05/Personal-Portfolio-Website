import ProjectsGrid from "../../projects/projectsGrid/ProjectsGrid";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section className="featured">
      <h2>Featured Projects</h2>
      <ProjectsGrid />
    </section>
  );
}