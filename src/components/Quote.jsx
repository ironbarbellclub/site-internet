export default function Quote({ content }) {
  return (
    <section className="quote-section">
      <div className="container">
        <blockquote>
          {content.textLine1}<br />
          {content.textLine2} <span className="accent">{content.textAccent}</span>
        </blockquote>
        <cite>{content.author}</cite>
      </div>
    </section>
  )
}
