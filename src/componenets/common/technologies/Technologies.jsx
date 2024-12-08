import PropTypes from "prop-types";
import "./Technologies.css";

export default function Technologies({ technologies }) {
  return (
    <div className="tech-logos">
      {technologies.map((tech, index) => (
        <img
          key={index}
          src={tech}
          alt={`Technology ${index + 1}`}
          className="tech-logo"
        />
      ))}
    </div>
  );
}

// Prop validation for 'technologies'
Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};