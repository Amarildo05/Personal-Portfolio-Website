import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Amarildo Kola. All rights reserved.</p>
    </footer>
  );
}