import "./ProjectCards.css";
import PropTypes from "prop-types";

export default function ProjectCards({ projects }) {
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

// Prop validation for 'projects'
ProjectCards.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      isFeatured: PropTypes.bool.isRequired,
    })
  ).isRequired,
};