import { useState, useEffect } from "react";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar({ theme, toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="brand">TD<span className="dot">.</span></a>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>

      <div className="nav-right">
        <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
          {theme === "dark" ? "☾" : "☀"}
        </button>
        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
