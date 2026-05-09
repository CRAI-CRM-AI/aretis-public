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
        <h2 className={styles.heading}>The Problem</h2>
        <p className={styles.body}>
          Teams today struggle with fragmented workflows and siloed knowledge.
          Critical insights get lost between tools, meetings, and chat threads —
          slowing decisions and stifling innovation. Aretis brings clarity to
          complexity by unifying how teams think, share, and act together.
        </p>
      </div>
    </section>
  )
}
