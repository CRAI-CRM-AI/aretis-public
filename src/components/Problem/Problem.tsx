import { useInView } from '../../hooks/useInView'
import styles from './Problem.module.css'

export function Problem() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="problem" className={styles.problem}>
      <div
        ref={ref}
        className={`${styles.inner} ${styles.animated} ${inView ? styles.visible : ''}`}
      >
        <h2 className={styles.heading}>Bridging the gap between data silos</h2>
        <p className={styles.body}>
          The name Aretis combines the ancient Greek concepts of Aretē
          (excellence and intelligence) and Iris (the swift messenger) to
          perfectly reflect its mission: acting as the intelligent communicator
          for your business data. As a centralized AI interface, Aretis connects
          directly to platforms like SuperOffice and RecMan to eliminate data
          silos. Instead of navigating complex menus or jumping between apps,
          you can simply converse with your entire CRM ecosystem using natural
          language. Just ask direct questions to instantly pull up client
          histories, summarize candidate interactions, and cross-reference data
          across services to make faster, more informed decisions.
        </p>
      </div>
    </section>
  )
}
