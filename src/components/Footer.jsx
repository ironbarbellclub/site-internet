import logo from '../assets/images/logo/logo-ibc.jpeg'

export default function Footer({ content }) {
  const { footer, nav } = content
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <a className="logo" href="#">
            <img className="logo-badge" src={logo} alt="Logo Iron Barbell Club" style={{ width: 56, height: 56 }} />
          </a>
          <p className="footer-description">{footer.description}</p>
        </div>
        <div className="footer-col">
          <h4>{footer.navTitle}</h4>
          <ul>
            {nav.links.map(link => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{footer.trainingTitle}</h4>
          <ul>
            {footer.trainingLines.map((line, i) => (
              <li key={i}>
                {line.url
                  ? <a href={line.url} target="_blank" rel="noopener noreferrer">{line.label}</a>
                  : line.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{footer.followTitle}</h4>
          <ul>
            {footer.socials.map((s, i) => (
              <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{footer.copyright}</span>
        <div className="socials">
          {footer.socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
