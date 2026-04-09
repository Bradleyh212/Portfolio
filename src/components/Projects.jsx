import { content, projects } from '../content.js'

export default function Projects({ lang }) {
  const { heading } = content[lang].projects

  return (
    <section id="projects" className="projects_section">
      <div className="container">
        <h2>{heading}</h2>
        <div className="project_grid">
          {projects.map((p) => (
            <div id={p.id} className="project_card" key={p.id}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.label[lang]}>
                <div className="project_placeholder">{p.label[lang]}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
