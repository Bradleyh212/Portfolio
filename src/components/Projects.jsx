import { content, projects } from '../content.js'

export default function Projects({ lang }) {
  const { heading } = content[lang].projects

  return (
    <section id="projects" className="projects_section">
      <div className="container">
        <h2>{heading}</h2>
        <div className="project_grid">
          {projects.map((p) => (
            <div className="project_card" key={p.id}>
              <div className="card_image_wrap">
                <img className="card_image" src={p.image} alt={p.label[lang]} />
              </div>
              <div className="card_body">
                <h3 className="card_title">{p.label[lang]}</h3>
                <p className="card_desc">{p.description[lang]}</p>
                <div className="tech_tags">
                  {p.tech.map((tag) => (
                    <span className="tech_tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="card_links">
                  {p.github && (
                    <a className="card_btn github" href={p.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a className="card_btn live" href={p.live} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
