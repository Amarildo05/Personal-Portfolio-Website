import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".header ul");
      const menuIcon = document.querySelector(".mobile-menu-icon");

      // Close the menu if the click is outside the menu or icon
      if (
        isMobileMenuOpen &&
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
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close menu when any link is clicked
  const closeMenuOnLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <img className="nav-logo slide-fade-in" src="/Logo.png" alt="Logo" />
      </NavLink>

      <div
        className="mobile-menu-icon slide-fade-in-reverse"
        onClick={toggleMobileMenu}
      >
        <span className="menu-icon">&#9776;</span>
      </div>

      <nav>
        <ul
          className={`${isMobileMenuOpen ? "open" : ""} ${
            isDesktop ? "pop-fade-in" : ""
          }`}
        >
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