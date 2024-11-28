import projects from "../../../projectsData";
import "../../../PagesLayout.css";
import ProjectCards from "../../projects/projectCard/ProjectCards";

export default function FeaturedProjects() {
  // Filter the featured projects
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section className="page-layout">
      <h2>Featured Projects</h2>
      <ProjectCards projects={featuredProjects} />
    </section>
  );
}