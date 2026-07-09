import arracheImg from '../assets/images/philosophie/arrache-chris.png'

export default function Philosophy({ content }) {
  return (
    <section>
      <div className="container split">
        <div className="philosophy-img">
          <img className="philosophy-cutout" src={arracheImg} alt={content.imageAlt} />
          <div className="badge-float">
            <span className="n">{content.badgeNum}</span>
            <span className="l">{content.badgeLabel}</span>
          </div>
        </div>
        <div>
          <div className="eyebrow">{content.eyebrow}</div>
          <h2>{content.titleLine1} <span className="accent">{content.titleLine2}</span></h2>
          <p className="lead">{content.lead}</p>
          <ul className="check-list">
            {content.checklist.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <a className="btn btn-outline" href="#coach">{content.cta}</a>
        </div>
      </div>
    </section>
  )
}
