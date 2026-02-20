import LanguageSwitch from './LanguageSwitch';
import styles from './Header.module.css';

export default function Header({ lang, dict }: { lang: 'en' | 'tp'; dict?: any }) {
  const pageHref = `/${lang}`;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>&gt;</span>
          <a href={pageHref} className={`${styles.brandTitle} ux-focus-ring`} style={{ textDecoration: 'none' }}>
            {dict?.header?.brand ?? 'toki pona free kit'}
          </a>
        </div>

        <nav className={styles.nav} aria-label="Site navigation">
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href={`${pageHref}#collection`}>
            {dict?.header?.nav?.free_books ?? 'Free books'}
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href={`${pageHref}#faq`}>
            {dict?.header?.nav?.faq ?? 'FAQ'}
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="https://toki.abvx.xyz/kit/" target="_blank" rel="noopener noreferrer">
            {dict?.header?.nav?.legacy ?? 'Legacy kit'}
          </a>
          <a className={`${styles.navLink} ${styles.navLinkActive} ux-hover-btn ux-focus-ring`} href={pageHref}>
            {dict?.header?.nav?.current ?? 'Free kit'}
          </a>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitch currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
