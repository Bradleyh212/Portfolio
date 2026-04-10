import { content } from '../content.js'

// Simple Icons CDN
const SI = (slug) => `https://cdn.simpleicons.org/${slug}`

// Devicon CDN
const DI = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

/*
  Best practice:
  - First source can be a local SVG in /public/icons/
  - Then fallback to CDN versions
  - If all fail, the icon hides but the label stays visible
*/
const iconMap = {
  // Programming / Frameworks
  Python: [
    SI('python'),
  ],
  Pandas: [
    SI('pandas'),
  ],
  Tkinter: [
    SI('python'), // no official Tkinter icon, reuse Python
  ],
  Flask: [
    SI('flask'),
  ],
  Pytest: [
    DI('pytest'),
  ],
  PyTorch: [
    SI('pytorch'),
  ],
  TensorFlow: [
    SI('tensorflow'),
  ],
  Java: [
    DI('java'),
  ],
  'C++': [
    SI('cplusplus'),
  ],
  React: [
    SI('react'),
  ],
  JavaScript: [
    SI('javascript'),
  ],
  HTML: [
    SI('html5'),
  ],
  CSS: [
    '/icons/css3.svg',
    SI('css3'),
  ],
  Bootstrap: [
    SI('bootstrap'),
  ],
  SQL: [
    SI('mysql'),
  ],

  // Tools / Platforms
  Git: [
    SI('git'),
  ],
  GitHub: [
    SI('github'),
  ],
  Kubernetes: [
    SI('kubernetes'),
  ],

  // These are the ones most likely to fail from CDN slugs,
  // so local files are recommended first.
  'Power Apps': [
    '/icons/power-apps.svg',
    SI('microsoftpowerapps'),
  ],
  'Power Automate': [
    '/icons/power-automate.svg',
    SI('microsoftpowerautomate'),
  ],
  SharePoint: [
    '/icons/sharepoint.svg',
    SI('microsoftsharepoint'),
  ],
  'Microsoft Office': [
    '/icons/microsoft-office.svg',
    SI('microsoftoffice'),
  ],

  'Android Studio': [
    SI('androidstudio'),
  ],
  Figma: [
    SI('figma'),
  ],
  Jira: [
    SI('jira'),
  ],

  // ChatGPT often works better using OpenAI branding as fallback
  ChatGPT: [
    '/icons/chatgpt.svg',
    SI('chatgpt'),
    SI('openai'),
  ],
  Copilot: [
    SI('githubcopilot'),
  ],

  // Systems / Hardware
  'Raspberry Pi': [
    SI('raspberrypi'),
  ],
  Arduino: [
    SI('arduino'),
  ],
  'BBC micro:bit': [
    '/icons/microbit.svg',
    SI('microbit'),
  ],
  Linux: [
    SI('linux'),
  ],
  macOS: [
    SI('apple'),
  ],
  Windows: [
    '/icons/windows.svg',
    SI('windows'),
  ],
}

const row1 = [
  'Python',
  'Pandas',
  'Tkinter',
  'Flask',
  'Pytest',
  'PyTorch',
  'TensorFlow',
  'Java',
  'C++',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Bootstrap',
  'SQL',
]

const row2 = [
  'Git',
  'GitHub',
  'Kubernetes',
  'Power Apps',
  'Power Automate',
  'SharePoint',
  'Android Studio',
  'Figma',
  'Jira',
  'Microsoft Office',
  'ChatGPT',
  'Copilot',
  'Raspberry Pi',
  'Arduino',
  'BBC micro:bit',
  'Linux',
  'macOS',
  'Windows',
]

function TechItem({ name }) {
  const sources = iconMap[name] || []

  const handleError = (e) => {
    const currentIndex = Number(e.currentTarget.dataset.index || 0)
    const nextIndex = currentIndex + 1

    console.log(`Failed icon for "${name}":`, e.currentTarget.src)

    if (nextIndex < sources.length) {
      e.currentTarget.src = sources[nextIndex]
      e.currentTarget.dataset.index = String(nextIndex)
    } else {
      e.currentTarget.style.display = 'none'
    }
  }

  return (
    <div className="tech_item">
      {sources.length > 0 && (
        <img
          className="tech_icon"
          src={sources[0]}
          alt={name}
          loading="lazy"
          draggable={false}
          data-index="0"
          onError={handleError}
        />
      )}
      <span className="tech_label">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]

  return (
    <div className="marquee_viewport">
      <div className={`marquee_track${reverse ? ' marquee_reverse' : ''}`}>
        {doubled.map((name, i) => (
          <TechItem key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack({ lang }) {
  const { heading, sub } = content[lang].techStack

  return (
    <section id="techstack" className="techstack_section">
      <h2 className="techstack_heading">{heading}</h2>
      {sub && <p className="techstack_sub">{sub}</p>}

      <div className="marquee_rows">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  )
}