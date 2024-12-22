import { Link } from "react-router-dom";

export default function Journey() {
  return (
    <div>
      <h2>
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        My Journey
      </h2>
      <p>
        My journey into programming started with a deep curiosity about how the
        digital world operates. I was fascinated by the ability to transform
        abstract ideas into working code, and this fascination sparked my
        interest in web development. I began by following simple online
        tutorials, gradually expanding my knowledge and diving into more complex
        resources and documentation. As I became more engaged in programming, I
        realized the power of JavaScript and its ecosystem in building dynamic,
        interactive web applications.
      </p>
      <p>
        To formalize and deepen my knowledge, I enrolled in several online
        courses, including:
      </p>
      <ul>
        <li>- JavaScript Basics</li>
        <li>- Web Development Guide</li>
        <li>- Next.js 15 & React - The Complete Guide (Udemy)</li>
        <li>
          - The Next.js 13 Bootcamp - The Complete Developer Guide (Udemy)
        </li>
      </ul>
      <p>
        These courses helped me build a strong foundation in JavaScript, web
        development, and popular frameworks. The next step in my journey was the{" "}
        <strong>
          JavaScript Bootcamp at Software Development Academy (SDA)
        </strong>{" "}
        by Protik in Tirana, Albania. This experience greatly enhanced my
        practical skills in frontend development, while also providing a
        foundational understanding of backend concepts and how they integrate
        with the frontend. Here are the key elements I gained from the bootcamp:
      </p>

      <h3>JavaScript Bootcamp at SDA by Protik</h3>
      <p>
        The <strong>JavaScript from Scratch</strong> bootcamp was an intensive
        280-hour program that provided a comprehensive understanding of both
        frontend and backend web development. The curriculum was designed to
        equip us with the skills required to develop modern web applications
        from start to finish.
      </p>
      <h3>General Scope of the Bootcamp:</h3>
      <ol>
        <li>
          <strong>JavaScript Developer – Introduction</strong> <br />- An
          introduction to the JavaScript programming language, including its
          syntax, data structures, and core principles.
        </li>
        <li>
          <strong>JavaScript Programming Language</strong> <br />- In-depth
          exploration of JavaScript basics and advanced concepts such as:
          <ul>
            <li>Structural programming</li>
            <li>Object-Oriented Programming (OOP) in JavaScript</li>
            <li>Key JavaScript frameworks and their applications</li>
          </ul>
        </li>
        <li>
          <strong>HTML & CSS</strong> <br />- Mastery of HTML and CSS
          fundamentals, including:
          <ul>
            <li>Advanced HTML elements and structures</li>
            <li>CSS preprocessors like SASS</li>
            <li>Responsive Web Design (RWD) principles and techniques</li>
          </ul>
        </li>
        <li>
          <strong>Software Engineering</strong> <br />- Introduction to software
          engineering practices including:
          <ul>
            <li>Testing methodologies</li>
            <li>
              Design patterns and industry best practices for building scalable
              applications
            </li>
          </ul>
        </li>
        <li>
          <strong>Frontend and Backend Technologies</strong> <br />- A deep dive
          into frontend and backend technologies, covering:
          <ul>
            <li>Key differences between frontend and backend development</li>
            <li>
              Frameworks for both frontend (React, Next.js) and backend
              (Node.js)
            </li>
            <li>CMS integration and development tools</li>
          </ul>
        </li>
        <li>
          <strong>Final Project</strong> <br />- The bootcamp culminated in a
          hands-on final project where I applied all the skills I had learned to
          develop a fully functional web application, showcasing my ability to
          solve complex problems. <br />- The project,{" "}
          <Link to="/single-project/1">
            CinemaVerse
          </Link>
          , can be explored further here.
        </li>
      </ol>

      <p>
        <strong>Key Details:</strong>
      </p>
      <ul>
        <li>Total Program Duration: 280 hours</li>
        <li>Attendance: 100%</li>
        <li>
          Program Provider: Software Development Academy Albania (SDA) in
          collaboration with Protik
        </li>
      </ul>
      <p>
        This bootcamp equipped me with not only the technical skills but also a
        problem-solving mindset. It was an invaluable experience that shaped me
        into a well-rounded developer, prepared to tackle complex challenges in
        the tech industry.
      </p>
    </div>
  );
}
