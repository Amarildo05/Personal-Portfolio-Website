import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="image pop-fade-in-soft">
        <img
          src="/Amarildo.jpg"
          alt="Amarildo's Photo"
          width={600}
          height={400}
        />
      </div>
      <h1 className="slide-fade-in-reverse">Hi, I&apos;m Amarildo Kola</h1>
      <p className="slide-fade-in">
        A Software Developer focused on building modern web applications using
        JavaScript, TypeScript, React, and Next.js. I’m committed to continuous
        learning and professional growth, exploring new technologies and
        delivering clean, efficient, and user-friendly solutions.
      </p>
      <Link to="/about">
        <button className="hero-btn pop-fade-in">
          Learn More{" "}
          <i className="pi pi-search" style={{ marginLeft: "0.3rem" }} />
        </button>
      </Link>
    </section>
  );
}