import { useInView } from '../../hooks/useInView'
import styles from './Founders.module.css'

const founders = [
  {
    initials: 'MA',
    name: 'Marie-Audrey Raux',
    role: 'Founder and Product Owner',
    bio: 'Marie-Audrey Raux is passionate about emerging technologies and innovation. She connects business needs with technology to deliver meaningful and impactful solutions.',
    image: '/ma.jpg',
  },
  {
    initials: 'VN',
    name: 'Vahid Niamadpour',
    role: 'Founder and Backend/AI Developer',
    bio: 'Vahid is a Pythonista holding multiple Microsoft AI certificates and is behind the API and AI development of Aretis.',
    image: '/vahid.jpg',
  },
  {
    initials: 'HF',
    name: 'Henrik Falla',
    role: 'Founder and Frontend Developer',
    bio: 'With more than 10 years of experience in frontend development, Henrik is the driving force behind the user-friendly interface of Aretis.',
    image: '/henrik.jpg',
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
