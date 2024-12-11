import PropTypes from "prop-types";
import "./ProjectDetails.css";
import Carousel from "../common/carousel/Carousel";
import { Link } from "react-router-dom";
import Technologies from "../common/technologies/Technologies";

export default function ProjectDetails({ project }) {
  // Added some line breaks to the "detailedDescription"
  const replacedDetailedDescription = project.detailedDescription.replace(
    /\n/g,
    "<br />"
  );

  return (
    <article className="project-content">
      <header className="project-header">
        <h1>{project.title}</h1>
        <img src={project.photo} alt={project.title} width={200} height={150} />
      </header>
      <p dangerouslySetInnerHTML={{ __html: replacedDetailedDescription }}></p>
      <Carousel images={project.images} />
      <p>
      💻 Github Repository:{" "}
        <Link to={project.gitHubRepo} target="_blank">
          {project.gitHubRepo}
        </Link>
      </p>
      <p>
      🔗 Deployment Link:{" "}
        <Link to={project.deploymentLink} target="_blank">
          {project.deploymentLink}
        </Link>
      </p>
      <p className="technologies">{project.technologiesDescription}</p>
      <Technologies technologies={project.technologies} />
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
    isFeatured: PropTypes.bool,
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    gitHubRepo: PropTypes.string.isRequired,
    deploymentLink: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologiesDescription: PropTypes.string.isRequired,
  }).isRequired,
};