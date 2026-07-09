import founderImg from '../assets/images/fondateur/christophe-chali-fondateur.jpg'

export default function Coach({ content }) {
  return (
    <section className="section-alt" id="coach">
      <div className="container coach-wrap">
        <div className="philosophy-img">
          <img className="founder-photo" src={founderImg} alt={content.photoAlt} />
        </div>
        <div>
          <div className="eyebrow">{content.eyebrow}</div>
          <h2>{content.titleLine1} {content.titleLine2}</h2>
          <p className="lead">{content.lead}</p>
          <div className="cred-grid">
            {content.creds.map((c, i) => (
              <div className="cred" key={i}>
                <div className="t">{c.title}</div>
                <div className="d">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
