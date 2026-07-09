export default function Pricing({ content }) {
  return (
    <section id="tarifs">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow">{content.eyebrow}</div>
          <h2>{content.titleLine1} {content.titleLine2}</h2>
        </div>
        <div className="pricing-grid two-col">
          {content.plans.map((plan, i) => (
            <div className={`price-card${plan.popular ? ' pop' : ''}`} key={i}>
              <div className="price-tag">{plan.tag}</div>
              <h3>{plan.title}</h3>
              <div className="price-amount">{plan.amount}<sup>{plan.currency}</sup></div>
              <div className="price-period">{plan.period}</div>
              <ul className="price-feats">
                {plan.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a className="btn" href="#contact">{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
