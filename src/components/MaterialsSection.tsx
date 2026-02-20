import { materials } from '@/data/materials';
import styles from './MaterialsSection.module.css';

export default function MaterialsSection() {
  return (
    <section id="materials" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Материалы</h2>
          <p className={styles.subtitle}>Подборка бесплатных учебных материалов по toki pona.</p>
        </header>

        <div className={styles.grid}>
          {materials.map((material) => (
            <article key={material.id} className={`${styles.card} ux-hover-card`}>
              <h3 className={styles.cardTitle}>{material.title}</h3>
              <p className={styles.cardDescription}>{material.description}</p>
              <div className={styles.meta}>
                <span>Language: {material.language}</span>
                <span>Format: {material.format}</span>
              </div>
              <a
                href={material.link}
                className={`${styles.link} ux-hover-btn ux-focus-ring`}
                target={material.link.startsWith('http') ? '_blank' : undefined}
                rel={material.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                Открыть материал
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
