import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <div>
      {" "}
      <h2>
        My Experience
        <i className="pi pi-briefcase" style={{ marginLeft: "0.5rem" }}></i>
      </h2>
      <p>
        I have had the opportunity to work on real projects and collaborate with
        clients, which has helped me build valuable practical experience. Here
        are some key projects:
      </p>
      <h3>E-Commerce Project</h3>
      <p>
        I worked remotely with a team on an e-commerce project. This was my
        first time working in a team on a real project, and I was responsible
        for completing simple tasks. It was an exciting experience where I
        learned the importance of teamwork, responsibility, and meeting
        deadlines. The project was built using <strong>Next.js</strong> with{" "}
        <strong> TypeScript</strong>,<strong>Tailwind CSS</strong> for the
        design, and <strong>PrimeReact</strong> for most of the components.
      </p>
      <h3>Landing Page for Google Ads</h3>
      <p>
        I developed a landing page for a client that would later be used for
        Google Ads. The project was challenging as the deadline was tight — just
        one and a half days! Despite the time constraints, I was dedicated and
        fully invested in completing the task with high quality. The landing
        page was built using <strong>HTML</strong>, <strong>CSS</strong>,{" "}
        <strong>Bootstrap</strong>, and a bit of <strong>JavaScript</strong> to
        keep the page lightweight and optimized for Google Ads. <br />- You can
        explore the project, <Link to="/single-project/2">LandingPage</Link>,
        for more details.
      </p>
    </div>
  );
}