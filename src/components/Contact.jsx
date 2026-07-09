import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import contactImg from '../assets/images/contact/groupe-aslak.jpg'

// Clés EmailJS lues depuis les variables d'environnement
// (fichier .env en local / variables Netlify en production)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


export default function Contact({ content }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const f = content.form

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert('EmailJS non configuré : renseigne les variables VITE_EMAILJS_* (voir README).')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY
      })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('Erreur EmailJS:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="contact-wrap">
        <img className="contact-img" src={contactImg} alt={content.imageAlt} />
        <div className="contact-form">
          <div className="eyebrow">{content.eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>
            {content.titleLine1} {content.titleLine2}
          </h2>
          <p className="lead" style={{ marginBottom: 36 }}>{content.lead}</p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>{f.firstName.label}</label>
                <input type="text" name="prenom" placeholder={f.firstName.placeholder} required />
              </div>
              <div className="field">
                <label>{f.lastName.label}</label>
                <input type="text" name="nom" placeholder={f.lastName.placeholder} required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>{f.email.label}</label>
                <input type="email" name="email" placeholder={f.email.placeholder} required />
              </div>
              <div className="field">
                <label>{f.phone.label}</label>
                <input type="tel" name="telephone" placeholder={f.phone.placeholder} />
              </div>
            </div>
            <div className="field">
              <label>{f.plan.label}</label>
              <select name="formule" defaultValue={f.plan.options[0]}>
                {f.plan.options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>{f.message.label}</label>
              <textarea name="message" placeholder={f.message.placeholder}></textarea>
            </div>

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? f.sending : f.submit}
            </button>

            {status === 'success' && (
              <p style={{ marginTop: 18, color: '#4ade80', fontSize: 14, fontWeight: 600 }}>
                {f.success}
              </p>
            )}
            {status === 'error' && (
              <p style={{ marginTop: 18, color: 'var(--red)', fontSize: 14, fontWeight: 600 }}>
                {f.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
