import styles from './Header.module.css';

export default function Header({ lang }: { lang?: 'en' | 'tp' }) {
  const homeHref = lang ? `/${lang}` : '/';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>&gt;</span>
          <a href={homeHref} className={`${styles.brandTitle} ux-focus-ring`} style={{ textDecoration: 'none' }}>
            toki pona - free kit
          </a>
        </div>

        <nav className={styles.nav} aria-label="Site navigation">
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="#materials">
            Материалы
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="#how-to-use">
            Как пользоваться
          </a>
          <a className={`${styles.navLink} ux-hover-btn ux-focus-ring`} href="#feedback">
            Как помочь
          </a>
          <a className={`${styles.navLink} ${styles.navLinkActive} ux-hover-btn ux-focus-ring`} href="https://toki.abvx.xyz/kit/">
            Старый kit
          </a>
        </nav>
      </div>
    </header>
  );
}
