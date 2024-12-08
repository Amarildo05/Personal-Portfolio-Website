import { Link } from "react-router-dom";
import "./ProjectCards.css";
import PropTypes from "prop-types";
import Technologies from "../../common/technologies/Technologies";

export default function ProjectCards({ projects }) {
  return (
    <ul className="project-cards-grid">
      {projects.map((project) => (
        <li key={project.id} className="project-card">
          <Link to={`/single-project/${project.id}`}>
            <div className="card-image">
              <img src={project.photo} alt={project.title} />
            </div>
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Technologies technologies={project.technologies} />
            </div>
          </Link>
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
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};