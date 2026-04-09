export default function Navbar({ lang, setLang }) {
  const labels = {
    en: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact Me', toggle: 'FR' },
    fr: { home: 'Accueil', about: 'À propos', projects: 'Projets', contact: 'Contactez-moi', toggle: 'EN' },
  }
  const t = labels[lang]

  return (
    <nav id="top_navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Bradley-Hans Desmornes</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">{t.home}</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">{t.about}</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">{t.projects}</a></li>
            <li className="nav-item">
              <a href="mailto:bradleydesmornes@gmail.com" className="nav-link">{t.contact}</a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-secondary btn-sm ms-3"
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              >
                {t.toggle}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
