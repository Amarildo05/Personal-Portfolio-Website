import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <NavLink to="/" className="nav-link">
        <img src="/Logo.png" width={180} alt="Logo" />
      </NavLink>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
      </div>
      <nav>
        <ul className={`${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}