import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ dict, lang }: { dict: any; lang: 'en' | 'tp' }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.contactRow}>
              <h4 className={styles.contactLabel}>{dict?.contact?.text ?? 'Contact'}</h4>
              <a
                href="https://github.com/markoblogo/toki-free-kit"
                className={`${styles.mailLink} ux-hover-btn ux-focus-ring`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/markoblogo/toki-free-kit
              </a>
            </div>

            <div className={styles.legalRow}>
              <a href="https://toki-free.abvx.xyz" className={`${styles.copyright} ux-hover-btn ux-focus-ring`}>
                {dict?.footer?.copyright ?? '© ABVX.xyz'}
              </a>
              <div className={styles.legalLinks}>
                <Link href={`/${lang}/legal`} className={`${styles.legalLink} ux-hover-btn ux-focus-ring`}>
                  {dict?.footer?.legal_mentions ?? 'Legal'}
                </Link>
                <Link href={`/${lang}/privacy`} className={`${styles.legalLink} ux-hover-btn ux-focus-ring`}>
                  {dict?.footer?.privacy_policy ?? 'Privacy'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
