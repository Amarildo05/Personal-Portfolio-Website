import "./ProjectCards.css";
import projects from "../../../projectsData";

export default function ProjectCards() {
  return (
    <ul className="project-cards-grid">
      {projects.map((project) => (
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
  );
}