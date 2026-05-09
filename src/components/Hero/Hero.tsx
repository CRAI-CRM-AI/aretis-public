import { useInView } from '../../hooks/useInView'
import styles from './Hero.module.css'

export function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="hero" className={styles.hero}>
      <div
        ref={ref}
        className={`${styles.content} ${styles.animated} ${inView ? styles.visible : ''}`}
      >
        <div className={styles.logo} role="img" aria-label="Aretis" />
        <p className={styles.tagline}>
          Building the future of collaborative problem-solving.
        </p>
        <a href="#problem" className={styles.cta}>
          Learn more
        </a>
      </div>
    </section>
  )
}
