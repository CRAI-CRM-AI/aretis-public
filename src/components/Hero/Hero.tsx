import { useInView } from '../../hooks/useInView'
import styles from './Hero.module.css'

export function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const text = {
    description:
      'Unify your scattered CRM platforms with an intelligent AI companion that lets you query, analyze, and manage your entire customer ecosystem from a single intuitive interface.',
    button: 'Learn more',
  }

  return (
    <section id="hero" className={styles.hero}>
      <div
        ref={ref}
        className={`${styles.content} ${styles.animated} ${inView ? styles.visible : ''}`}
      >
        <div className={styles.logo} role="img" aria-label="Aretis" />
        <p className={styles.tagline}>{text.description}</p>
        <a href="#problem" className={styles.cta}>
          {text.button}
        </a>
      </div>
    </section>
  )
}
