export default function Hero({ lang }) {
  const text = {
    en: {
      greeting: "Hi, I'm",
      name: 'Bradley',
      contactBtn: 'Contact Me',
      role: (
        <>
          Innovative Software <span className="highlight">Engineer</span>
        </>
      ),
    },
    fr: {
      greeting: 'Salut, Je suis',
      name: 'Bradley',
      contactBtn: 'Contactez-moi',
      role: (
        <>
          <span className="highlight">Ingénieur</span> Logiciel Innovant
        </>
      ),
    },
  }
  const t = text[lang]

  return (
    <section id="home" className="hero split_layout">
      <div className="hero_welcome">
        <h1>
          {t.greeting} <span className="highlight">{t.name}</span>
        </h1>
        <a href="#contact" className="contact_btn">{t.contactBtn}</a>
      </div>

      <div className="hero_mid">
        <img src="/images/selfie.jpg" alt="Picture of myself" className="selfie" />
      </div>

      <div className="hero_right">
        <p className="role">
          {t.role}
          <span className="inline_social">
            <a href="https://www.linkedin.com/in/bradleyh-desmornes" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/bradleyh212" target="_blank" rel="noopener noreferrer">
              <img src="/images/github.svg" alt="GitHub" />
            </a>
            <a href="/images/Bradley-Hans Desmornes copy.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/images/resume.svg" alt="Resume" />
            </a>
          </span>
        </p>
      </div>
    </section>
  )
}
