'use client';

import styles from './Hero.module.css';
import HeroCoverGrid from './HeroCoverGrid';
import { books, Book } from '@/data/books';
import GiftBadge from './GiftBadge';

export default function Hero({ dict, lang }: { dict: any; lang: 'en' | 'tp' }) {
  const handleSelectBook = (book: Book) => {
    const element = document.getElementById(book.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftCol}>
          <h1 className={styles.title}>{dict.hero.title}</h1>
          <p className={styles.subtitle}>{dict.hero.subtitle}</p>
          <p className={styles.note}>{dict.hero.note}</p>
          <div className={styles.ctaRow}>
            <a href={`/${lang}#collection`} className="btn btn-accent ux-hover-btn ux-focus-ring">
              {dict.hero.primary_cta}
            </a>
            <a href="https://toki.abvx.xyz/kit/" target="_blank" rel="noopener noreferrer" className="btn ux-hover-btn ux-focus-ring">
              {dict.hero.secondary_cta}
            </a>
          </div>
        </div>

        <div className={styles.rightCol}>
          <GiftBadge label={dict.hero.all_free_badge} className={styles.heroBadge} />
          <HeroCoverGrid books={books} onSelect={handleSelectBook} selectedBookId={null} dict={dict} lang={lang} />
        </div>
      </div>
    </section>
  );
}
