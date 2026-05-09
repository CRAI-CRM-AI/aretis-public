import { useInView } from '../../hooks/useInView'
import styles from './Founders.module.css'

const founders = [
  {
    initials: 'MA',
    name: 'Marie Audrey Raux',
    role: 'Founder and ...',
    bio: 'Short text about Marie Audrey Raux',
    image: undefined as string | undefined,
  },
  {
    initials: 'VN',
    name: 'Vahid Niamadpour',
    role: 'Founder and ...',
    bio: 'Short text about Vahid Niamadpour',
    image: undefined as string | undefined,
  },
  {
    initials: 'HF',
    name: 'Henrik Falla',
    role: 'Founder and ...',
    bio: 'Short text about Henrik Falla',
    image: undefined as string | undefined,
  },
]

export function Founders() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="founders"
      ref={ref}
      className={`${styles.founders} ${inView ? styles.visible : ''}`}
    >
      <h2 className={styles.heading}>Meet the Founders</h2>
      <div className={styles.grid}>
        {founders.map((founder) => (
          <article key={founder.name} className={styles.card}>
            {founder.image ? (
              <img
                src={founder.image}
                alt={founder.name}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.avatar}>{founder.initials}</div>
            )}
            <h3 className={styles.name}>{founder.name}</h3>
            <p className={styles.role}>{founder.role}</p>
            <p className={styles.bio}>{founder.bio}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
