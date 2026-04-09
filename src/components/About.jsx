import { content } from '../content.js'

export default function About({ lang }) {
  const { heading, jobs } = content[lang].about

  return (
    <section id="about" className="about_section">
      <div className="container">
        <h2>{heading}</h2>
        {jobs.map((job, i) => (
          <div className="job" key={i}>
            <h3>{job.title}</h3>
            <p className="location">{job.location}</p>
            {job.bullets.length > 0 && (
              <ul>
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
