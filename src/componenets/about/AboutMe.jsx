import "./AboutMe.css";
import Approach from "./Approach";
import Contact from "./Contact";
import Experience from "./Experience";
import HeroAbout from "./HeroAbout";
import Journey from "./Journey";
import Technologies from "./Technologies";

export default function AboutMe() {
  return (
    <section className="about fade-up">
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      <div className="about-content">
        <HeroAbout />
        <Technologies />
        <Experience />
        <Journey />
        <Approach />
        <Contact />
      </div>
    </section>
  );
}