import PropTypes from "prop-types";
import "./ProjectDetails.css";

export default function ProjectDetails({ project }) {
  return (
    <article className="project-content">
      <header className="project-header">
        <h1>{project.title}</h1>
        <img src={project.photo} alt={project.title} width={200} height={150} />
      </header>
      <div>{project.description}</div>
    </article>
  );
}

// Prop validation for 'project details'
ProjectDetails.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    detailedDescription: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool, // Optional field
    id: PropTypes.number.isRequired, // Assuming 'id' is always required
  }).isRequired,
};