import content from './content'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Philosophy from './components/Philosophy.jsx'
import Disciplines from './components/Disciplines.jsx'
import Quote from './components/Quote.jsx'
import Coach from './components/Coach.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header content={content} />
      <Hero content={content.hero} />
      <Ticker items={content.ticker} />
      <Philosophy content={content.philosophy} />
      <Disciplines content={content.disciplines} />
      <Quote content={content.quote} />
      <Coach content={content.coach} />
      <Pricing content={content.pricing} />
      <Contact content={content.contact} />
      <Footer content={content} />
    </>
  )
}
