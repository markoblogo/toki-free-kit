import styles from './WhySection.module.css';

const steps = [
  {
    title: '1. Выберите базовый материал',
    text: 'Начните со Starter Reader Kit: он даёт минимальный вход в тексты и практику чтения.',
  },
  {
    title: '2. Читайте короткими сессиями',
    text: 'Идите маленькими блоками: один фрагмент, повтор, затем короткая проверка понимания.',
  },
  {
    title: '3. Собирайте свой мини-пакет',
    text: 'Комбинируйте PDF, веб-страницы и словарь, чтобы собрать собственный сценарий обучения.',
  },
  {
    title: '4. Возвращайтесь к переводам',
    text: 'Черновые переводы и заметки лучше работают при регулярном перечитывании.',
  },
];

export default function HowToUseSection() {
  return (
    <section id="how-to-use" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Как пользоваться</h2>
        </header>

        <div className={styles.grid}>
          {steps.map((step) => (
            <article key={step.title} className={`${styles.card} ux-hover-card`}>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
