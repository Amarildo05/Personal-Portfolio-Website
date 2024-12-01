import projects from "../../../projectsData";
import ProjectCards from "../../projects/projectCard/ProjectCards";
import "../../../PagesLayout.css";

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