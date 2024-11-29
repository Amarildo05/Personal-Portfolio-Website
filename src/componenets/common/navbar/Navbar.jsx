import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <NavLink to="/" className="nav-link">
        <img src="/Logo.png" width={260} />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}