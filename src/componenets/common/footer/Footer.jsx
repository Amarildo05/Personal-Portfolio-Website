import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="pop-fade-in">
        Designed and developed by Amarildo Kola. &copy; {currentYear}. All
        rights reserved.
      </p>

      {/* Social Media and Contact Links */}
      <div className="footer-links pop-fade-in">
        <a
          href="https://www.linkedin.com/in/amarildo-kola-7566b7297"
          target="_blank"
        >
          <img src="/Footer/linkedin-logo.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Amarildo05" target="_blank">
          <img src="/Footer/github-logo.png" alt="GitHub" />
        </a>
        <a href="mailto:amarildokola36@gmail.com">
          <img src="/Footer/email-logo.jpg" alt="Email" />
        </a>
        <a href="tel:+355698226967">
          <img src="/Footer/phone-logo.png" alt="Phone" />
        </a>
      </div>
    </footer>
  );
}