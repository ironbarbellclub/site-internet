export default function Ticker({ items }) {
  // Contenu dupliqué pour un défilement infini fluide
  const doubled = [...items, ...items]
  return (
    <div className="ticker" aria-label={items.join(' — ')}>
      <div className="ticker-track" aria-hidden="true">
        {doubled.map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  )
}
