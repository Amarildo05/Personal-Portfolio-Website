export default function Contact() {
  return (
    <div>
      <h2>
        Contact Me
        <i className="pi pi-comments" style={{ marginLeft: "0.5rem" }}></i>
      </h2>
      <p>
        If you&apos;d like to work together or just want to say hi, feel free to
        reach out!
      </p>
      <ul>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <i className="pi pi-envelope" style={{ fontSize: "1.2rem" }}></i>
          <strong style={{ minWidth: "80px" }}>Email:</strong>
          <a href="mailto:amarildokola36@gmail.com">amarildokola36@gmail.com</a>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <i className="pi pi-phone" style={{ fontSize: "1.2rem" }}></i>
          <strong style={{ minWidth: "80px" }}>Phone:</strong>
          <a href="tel:+355698226967">+355 69 8226967</a>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <i className="pi pi-desktop" style={{ fontSize: "1.2rem" }}></i>
          <strong style={{ minWidth: "80px" }}>GitHub:</strong>
          <a
            href="https://github.com/Amarildo05"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Amarildo05
          </a>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <i className="pi pi-link" style={{ fontSize: "1.2rem" }}></i>
          <strong style={{ minWidth: "80px" }}>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/amarildo-kola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/amarildo-kola/
          </a>
        </li>
      </ul>
    </div>
  );
}