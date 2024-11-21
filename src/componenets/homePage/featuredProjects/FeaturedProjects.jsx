import ProjectsGrid from "../../projects/projectsGrid/ProjectsGrid";
import "../../../PagesLayout.css";

export default function FeaturedProjects() {
  return (
    <section className="page-layout">
      <h2>Featured Projects</h2>
      <ProjectsGrid />
    </section>
  );
}