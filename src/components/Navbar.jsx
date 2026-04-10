import { useState } from 'react'

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false)

  const t = {
    en: { about: 'About', projects: 'Projects', contact: 'Contact', toggle: 'FR' },
    fr: { about: 'À propos', projects: 'Projets', contact: 'Contact', toggle: 'EN' },
  }[lang]

  const close = () => setOpen(false)

  return (
    <header className="fnav_wrap">
      <nav className={`fnav${open ? ' fnav_open' : ''}`}>

        {/* Brand + hamburger row (always visible) */}
        <div className="fnav_row">
          <a href="#home" className="fnav_brand" onClick={close}>
            Bradley-Hans
          </a>

          <button
            className={`fnav_toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Nav links — always visible on desktop, toggled on mobile */}
        <div className="fnav_links">
          <a href="#about"   className="fnav_link" onClick={close}>{t.about}</a>
          <a href="#projects" className="fnav_link" onClick={close}>{t.projects}</a>
          <a href="mailto:bradleydesmornes@gmail.com" className="fnav_link">{t.contact}</a>
          <button
            className="fnav_lang"
            onClick={() => { setLang(lang === 'en' ? 'fr' : 'en'); close() }}
          >
            {t.toggle}
          </button>
        </div>

      </nav>
    </header>
  )
}
