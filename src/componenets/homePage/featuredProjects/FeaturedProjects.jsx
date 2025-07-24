import projects from "../../../projectsData";
import ProjectCards from "../../projects/projectCard/ProjectCards";
import "../../../PagesLayout.css";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  // Filter the featured projects
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section className="page-layout">
      <h2>Featured Projects</h2>
      <ProjectCards projects={featuredProjects} />

      <div className="featured-btn-container">
        <Link to="/projects">
          <button className="featured-btn">
            View More Projects{" "}
            <i className="pi pi-search" style={{ marginLeft: "0.3rem" }} />
          </button>
        </Link>
      </div>
    </section>
  );
}