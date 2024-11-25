import projects from "../../../projectsData";
import "../../../PagesLayout.css";

export default function FeaturedProjects() {
  // Filter the featured projects
  const featuredProjects = projects.filter((proejct) => proejct.isFeatured);

  return (
    <section className="page-layout">
      <h2>Featured Projects</h2>
      <ul className="project-cards-grid">
        {featuredProjects.map((project) => (
          <li key={project.id} className="project-card">
            <div className="card-image">
              <img src={project.photo} alt={project.title} />
            </div>
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}