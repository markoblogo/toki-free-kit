import LanguageSwitch from './LanguageSwitch';
import styles from './Header.module.css';

export default function Header({ lang }: { lang: 'en' | 'tp' }) {
  const homeHref = `/${lang}`;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>&gt;</span>
          <a href={homeHref} className={`${styles.brandTitle} ux-focus-ring`} style={{ textDecoration: 'none' }}>
            toki pona free kit
          </a>
        </div>

        <nav className={styles.nav} aria-label="Site navigation">
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href={`${homeHref}#collection`}>
            Free books
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href={`${homeHref}#faq`}>
            FAQ
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="https://toki.abvx.xyz/kit/">
            Legacy kit
          </a>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitch currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
