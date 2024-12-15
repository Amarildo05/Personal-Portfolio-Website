import "./AboutMe.css";
import Approach from "./Approach";
import Experience from "./Experience";
import HeroAbout from "./HeroAbout";
import Journey from "./Journey";
import Technologies from "./Technologies";

export default function AboutMe() {
  return (
    <section className="about">
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      <div className="about-content">
        <HeroAbout />
        <Technologies />
        <Experience />
        <Journey />
        <Approach />
      </div>
    </section>
  );
}