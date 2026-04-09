import { content } from '../content.js'

export default function Footer({ lang }) {
  return (
    <footer>
      <p>{content[lang].footer}</p>
    </footer>
  )
}
