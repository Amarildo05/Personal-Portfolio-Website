import ProjectCards from "../../projects/projectCard/ProjectCards";
import "../../../PagesLayout.css";

export default function FeaturedProjects() {
  return (
    <section className="page-layout">
      <h2>Featured Projects</h2>
      <ProjectCards />
    </section>
  );
}