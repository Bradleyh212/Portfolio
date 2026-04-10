import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { content } from '../content.js'

function JobHeader({ job }) {
  return (
    <div className="tl_card">
      <p className="job_title">{job.title}</p>
      <p className="job_location">{job.location}</p>
    </div>
  )
}

function JobBullets({ job }) {
  if (!job.bullets.length) return null
  return (
    <ul className="job_bullets">
      {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  )
}

function TimelineItem({ job, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className="timeline_item"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Left side */}
      <motion.div
        className={`tl_side tl_left ${isLeft ? 'tl_header_side' : 'tl_bullets_side'}`}
        initial={{ opacity: 0, x: -28 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
      >
        {isLeft ? <JobHeader job={job} /> : <JobBullets job={job} />}
      </motion.div>

      {/* Center dot */}
      <div className="tl_center">
        <motion.div
          className="tl_dot"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, ease: 'backOut', delay: 0.1 }}
        />
      </div>

      {/* Right side */}
      <motion.div
        className={`tl_side tl_right ${isLeft ? 'tl_bullets_side' : 'tl_header_side'}`}
        initial={{ opacity: 0, x: 28 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
      >
        {isLeft ? <JobBullets job={job} /> : <JobHeader job={job} />}
      </motion.div>
    </motion.div>
  )
}

export default function About({ lang }) {
  const { heading, jobs } = content[lang].about
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 25%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="about" className="about_section" ref={sectionRef}>
      <h2 className="about_heading">{heading}</h2>
      <div className="timeline">
        <div className="timeline_track">
          <motion.div className="timeline_progress" style={{ scaleY }} />
        </div>
        {[...jobs].reverse().map((job, i) => (
          <TimelineItem key={i} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}
