import { useRef, useEffect, useState } from "react";

export default function Section({ id, num, title, children }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true),
      { threshold: 0.12 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`section ${vis ? "in" : ""}`}>
      <div className="section-head">
        <span className="num">{num}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
