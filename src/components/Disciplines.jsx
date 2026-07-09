import programmesImg from '../assets/images/disciplines/programmes.jpg'

export default function Disciplines({ content }) {
  return (
    <section className="section-alt" id="disciplines">
      <div className="container section-head section-head--center">
        <div className="eyebrow">{content.eyebrow}</div>
        <h2>{content.titleLine1} {content.titleLine2}</h2>
      </div>
      <div className="programmes-banner">
        <img src={programmesImg} alt={content.bannerAlt} />
        <div className="prog-caption prog-caption-left">
          <div className="disc-tag">{content.captionLeft.tag}</div>
          <h3>{content.captionLeft.title}</h3>
        </div>
        <div className="prog-caption prog-caption-right">
          <div className="disc-tag">{content.captionRight.tag}</div>
          <h3>{content.captionRight.title}</h3>
        </div>
      </div>
    </section>
  )
}
