import styles from './Hero.module.css';

const heroNotes = [
  'Бесплатные пособия для чтения и перевода на toki pona.',
  'Подборка материалов для новичков и практики.',
  'Один вход в набор ресурсов: PDF, web-страницы и черновики.',
];

export default function Hero({ dict, lang }: { dict?: unknown; lang?: 'en' | 'tp' }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftCol}>
          <h1 className={styles.title}>toki pona - free kit</h1>
          <p className={styles.subtitle}>
            Бесплатные учебные материалы и переводы по toki pona в одном месте. Стартовый набор,
            практические тексты и полезные черновики для самостоятельного обучения.
          </p>
          <div className={styles.ctaRow}>
            <a href="#materials" className="btn btn-accent ux-hover-btn ux-focus-ring">Открыть материалы</a>
            <a href="https://toki.abvx.xyz/kit/" className="btn ux-hover-btn ux-focus-ring">Перейти к текущему kit</a>
          </div>
        </div>

        <div className={styles.rightCol}>
          <ul className={styles.noteList}>
            {heroNotes.map((item) => (
              <li key={item} className={`${styles.noteItem} ux-hover-card`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
