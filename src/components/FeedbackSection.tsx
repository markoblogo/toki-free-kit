import styles from './FAQ.module.css';

export default function FeedbackSection() {
  return (
    <section id="feedback" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Как помочь / обратная связь</h2>
          <p className={styles.subtitle}>Коротко: замечания по материалам, правки переводов и предложения новых наборов.</p>
        </header>

        <div className={styles.list}>
          <article className={`${styles.item} ux-hover-card`}>
            <h3 className={styles.question}>GitHub Issues</h3>
            <div className={styles.answer}>
              <p>
                Откройте issue в репозитории, если нашли ошибку, битую ссылку или хотите предложить новый
                бесплатный материал.
              </p>
              <p>
                <a className="ux-hover-btn ux-focus-ring" href="https://github.com/markoblogo/toki-free-kit" target="_blank" rel="noopener noreferrer">
                  Перейти в репозиторий
                </a>
              </p>
            </div>
          </article>

          <article className={`${styles.item} ux-hover-card`}>
            <h3 className={styles.question}>Direct feedback</h3>
            <div className={styles.answer}>
              <p>
                TODO: добавить постоянный email/форму обратной связи для предложений по контенту и
                сотрудничеству.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
