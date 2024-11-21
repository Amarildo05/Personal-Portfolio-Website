import "./ProjectCard.css";

export default function ProjectCard() {
  return (
    <li className="project-card">
      <div className="card-image">
        <img
          src={
            "https://thumbs.dreamstime.com/z/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg?ct=jpeg"
          }
          alt="image"
          width={400}
          height={300}
        />
      </div>
      <div className="content">
        <h3>Project</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </li>
  );
}