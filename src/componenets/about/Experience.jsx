import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <div>
      <h2>
        My Experience
        <i className="pi pi-briefcase" style={{ marginLeft: "0.5rem" }}></i>
      </h2>
      <p>
        I have had the opportunity to work on real projects and collaborate with
        clients, which has helped me build valuable practical experience. Here
        are some key examples:
      </p>

      <h3>E-Commerce Project</h3>
      <p>
        Played a key role in a complex e-commerce platform built with{" "}
        <strong>Next.js</strong>, <strong>TypeScript</strong>,{" "}
        <strong>Tailwind CSS</strong>, and <strong>PrimeReact</strong>. The
        project included multiple real-world features such as order management
        and client dashboards. This experience strengthened my skills in
        collaborative development, problem-solving, and delivering high-quality
        solutions on a professional team.
      </p>

      <h3>Landing Page for Google Ads</h3>
      <p>
        Delivered a lightweight, optimized landing page in{" "}
        <strong>1.5 days</strong> using <strong>HTML</strong>,{" "}
        <strong>CSS</strong>, <strong>Bootstrap</strong>, and{" "}
        <strong>JavaScript</strong>. Designed for fast load times and ad
        performance. <br />- You can explore the project,
        <Link to="/single-project/5">LandingPage</Link>, for more details.
      </p>

      <h3>Web Applications for Small Businesses</h3>
      <p>
        Designed and developed professional web applications for local
        businesses, such as <Link to="/single-project/2">Bert Electric</Link>{" "}
        and <Link to="/single-project/4">Money Shop Exchange</Link>, using{" "}
        <strong>React</strong>, <strong>Vite</strong>,{" "}
        <strong>Tailwind CSS</strong>, and other modern libraries. These
        projects helped me understand client needs and deliver practical,
        real-world solutions. I am actively seeking to create more tailored
        applications for small businesses to expand my portfolio.
      </p>
    </div>
  );
}