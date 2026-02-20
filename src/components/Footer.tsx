import styles from './Footer.module.css';

export default function Footer({ dict, lang }: { dict?: unknown; lang?: 'en' | 'tp' }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.contactRow}>
              <h4 className={styles.contactLabel}>Project</h4>
              <a href="https://github.com/markoblogo/toki-free-kit" className={`${styles.mailLink} ux-hover-btn ux-focus-ring`} target="_blank" rel="noopener noreferrer">
                github.com/markoblogo/toki-free-kit
              </a>
            </div>

            <div className={styles.legalRow}>
              <a href="https://toki-free.abvx.xyz" className={`${styles.copyright} ux-hover-btn ux-focus-ring`}>
                © 2026 toki-free.abvx.xyz
              </a>
              <div className={styles.legalLinks}>
                <span className={styles.legalLink}>License: TODO</span>
                <span className={styles.legalLink}>Attribution: TODO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
