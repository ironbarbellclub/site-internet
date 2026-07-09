import { useState } from 'react'
import logo from '../assets/images/logo/logo-ibc.jpeg'

export default function Header({ content }) {
  const [open, setOpen] = useState(false)
  const { nav } = content

  return (
    <header>
      <nav className="nav">
        <a className="logo" href="#">
          <img className="logo-badge" src={logo} alt="Logo Iron Barbell Club" />
        </a>
        <ul className={`nav-links${open ? ' is-open' : ''}`}>
          {nav.links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href={nav.loginUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              {nav.login}
            </a>
          </li>
        </ul>
        <a className="nav-cta" href="#contact">{nav.cta}</a>
        <button
          className="burger"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>
    </header>
  )
}
