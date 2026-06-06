import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-tag">{profile.tagline}</div>
      <h1 className="hero-title">
        Tanmaya<br /><span className="accent">Dwivedy</span>
      </h1>
      <p className="hero-sub">{profile.summary}</p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-ghost">Get in Touch</a>
      </div>
      <div className="hero-meta">
        {profile.meta.map((m, i) => (
          <span key={i}>
            {m}
            {i < profile.meta.length - 1 && <span className="sep"> / </span>}
          </span>
        ))}
      </div>
    </section>
  );
}
