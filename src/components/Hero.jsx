export default function Hero({ content }) {
  return (
    <section className="hero">
      <div className="hero-ring"></div>
      <div className="container hero-content">
        <h1>
          <span className="line1">{content.line1}</span><br />
          <span className="line2">{content.line2}</span><br />
          <span className="line3">{content.line3}</span>
        </h1>
        <p className="hero-sub">{content.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">{content.ctaPrimary}</a>
          <a className="btn btn-outline" href="#disciplines">{content.ctaSecondary}</a>
        </div>
      </div>
      <div className="container">
        <div className="hero-stats">
          {content.stats.map((s, i) => (
            <div className="stat" key={i}>
              <span className="num">{s.num}</span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
