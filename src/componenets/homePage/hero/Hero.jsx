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
        A passionate JavaScript Developer. I focus on building interactive web
        applications using JavaScript, TypeScript, React, and Next.js, and
        i&apos;m excited to continue growing in the world of programming.
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