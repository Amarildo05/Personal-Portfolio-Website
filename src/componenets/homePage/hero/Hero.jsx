import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="image">
        <img
          src="/Amarildo.jpg"
          alt="Amarildo's Photo"
          width={600}
          height={400}
        />
      </div>
      <h1>Hi, I&apos;m Amarildo Kola</h1>
      <p>
        A passionate Junior JavaScript Developer. I specialize in building
        interactive web applications using JavaScript, TypeScript, React, and
        Next.js, and I&apos;m excited to continue growing in the world of programming.
      </p>
    </section>
  );
}