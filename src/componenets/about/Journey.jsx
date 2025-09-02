import { Link } from "react-router-dom";

export default function Journey() {
  return (
    <div>
      <h2>
        My Journey
        <i className="pi pi-hourglass" style={{ marginLeft: "0.5rem" }}></i>
      </h2>
      <p>
        My journey into programming started with curiosity about how the digital
        world operates. I was fascinated by turning abstract ideas into working
        code, which sparked my interest in web development. I began with online
        tutorials, various documentations, and gradually progressed to more
        complex projects, discovering the power of JavaScript and its ecosystem
        for building interactive web applications.
      </p>

      <p>
        To formalize my skills, I completed several online courses and studied
        various technical documentations, including:
      </p>
      <ul>
        <li>- JavaScript Basics</li>
        <li>- Web Development Guide</li>
        <li>- Ultimate React Course</li>
        <li>- Next.js & React - The Complete Guide (Udemy)</li>
        <li>- The Next.js 13 Bootcamp - Complete Developer Guide (Udemy)</li>
      </ul>

      <p>
        These resources provided a strong foundation in JavaScript, web
        development, and modern frameworks. <br />
        <br />
        The next step was the{" "}
        <strong>
          JavaScript Bootcamp at Software Development Academy (SDA) by Protik
        </strong>{" "}
        in Tirana, Albania, which greatly enhanced my practical frontend skills
        and introduced essential backend concepts.
      </p>

      <h3>JavaScript Bootcamp at SDA</h3>
      <p>
        This intensive 280-hour program covered frontend and backend web
        development, focusing on:
      </p>
      <ul>
        <li>- Modern JavaScript (OOP, frameworks, and best practices)</li>
        <li>- HTML, CSS, responsive design, and preprocessors like SASS</li>
        <li>
          - Software engineering fundamentals, testing, and scalable application
          design
        </li>
        <li>
          - Integration of frontend (React, Next.js) with backend (Node.js)
        </li>
      </ul>

      <p>
        The bootcamp culminated in a hands-on final project where I developed a
        fully functional web application,
        <Link to="/single-project/1">CinemaVerse</Link>, applying all the skills
        I had learned. This experience strengthened my problem-solving mindset
        and prepared me to tackle complex challenges in real-world development.
      </p>

      <p>
        <strong>Program Provider:</strong> Software Development Academy Albania
        (SDA) in collaboration with Protik
      </p>
    </div>
  );
}