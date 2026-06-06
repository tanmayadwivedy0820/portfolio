import Section from "./Section";
import { about, skills, projects, education, certifications, languages, profile } from "../data/content";

export function About() {
  return (
    <Section id="about" num="01" title="About">
      <div className="about-grid">
        <p className="about-lead">{about.lead}</p>
        <p className="about-body">{about.body}</p>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" num="02" title="Skills">
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" num="03" title="Projects">
      {projects.map((p) => (
        <article className="project" key={p.id}>
          <div className="project-index">{p.id}</div>
          <div className="project-body">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <div className="tags">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            {p.link && p.link !== "#" && (
              <a className="project-link" href={p.link} target="_blank" rel="noopener">
                View repository ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" num="04" title="Education">
      {education.map((e, i) => (
        <div className="edu-item" key={i}>
          <div className="edu-when">{e.when}</div>
          <div className="edu-what">
            <h3>{e.title}</h3>
            <p className="edu-org">{e.org}</p>
            {e.detail && <p>{e.detail}</p>}
          </div>
        </div>
      ))}
      <div className="certs">
        <h3>Certifications</h3>
        <ul>
          {certifications.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
        <p className="langs"><strong>Languages:</strong> {languages}</p>
      </div>
    </Section>
  );
}

export function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["LinkedIn", profile.linkedin === "#" ? "Add your LinkedIn URL" : profile.linkedin, profile.linkedin],
    ["GitHub", profile.github === "#" ? "Add your GitHub URL" : profile.github, profile.github],
  ];
  return (
    <Section id="contact" num="05" title="Contact">
      <p className="contact-lead">Open to internships and roles in Machine Learning &amp; Data Science.</p>
      <div className="contact-rows">
        {rows.map(([label, val, href]) => (
          <a className="contact-row" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
            <span className="cr-label">{label}</span>
            <span className="cr-val">{val}</span>
          </a>
        ))}
      </div>
      <a href={profile.resume} className="btn btn-primary" download="Tanmaya_Dwivedy_Resume.pdf">Download Résumé</a>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Tanmaya Dwivedy</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
