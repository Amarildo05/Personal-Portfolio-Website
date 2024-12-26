import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".header ul");
      const menuIcon = document.querySelector(".mobile-menu-icon");

      // Close the menu if the click is outside the menu or icon
      if (
        menu &&
        !menu.contains(event.target) &&
        menuIcon &&
        !menuIcon.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    // Add the event listener when the component is mounted
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Close menu when any link is clicked
  const closeMenuOnLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <img className="nav-logo" src="/Logo.png" alt="Logo" />
      </NavLink>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
      </div>
      <nav>
        <ul className={`${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={closeMenuOnLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={closeMenuOnLinkClick}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={closeMenuOnLinkClick}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}