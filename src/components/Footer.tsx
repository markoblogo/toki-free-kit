import Link from 'next/link';
import styles from './Footer.module.css';

type BannerVariant = 'translator' | 'learn' | 'kit' | 'ukr';

type BannerProps = {
  href: string;
  title: string;
  subtitle: string;
  variant: BannerVariant;
  iconText?: string;
  thumbSrc?: string;
};

function Banner({ href, title, subtitle, variant, iconText = '>', thumbSrc }: BannerProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.bannerCard} ${styles[`banner_${variant}`]} ux-hover-card ux-focus-ring`}
    >
      <div className={styles.bannerInner}>
        {thumbSrc ? (
          <img src={thumbSrc} alt="" className={styles.bannerThumb} loading="lazy" />
        ) : (
          <span className={styles.bannerIcon}>{iconText}</span>
        )}

        <div className={styles.bannerText}>
          <div className={styles.bannerTitle}>{title}</div>
          <div className={styles.bannerSubtitle}>{subtitle}</div>
        </div>
      </div>
    </a>
  );
}

export default function Footer({ dict, lang }: { dict: any; lang: 'en' | 'tp' }) {
  const socialGitHub = 'https://github.com/markoblogo/toki-free-kit';
  const socialLegacy = 'https://toki.abvx.xyz/kit/';
  const socialProject = 'https://toki-free.abvx.xyz';
  const contactHref = dict?.contact?.url ?? 'mailto:todo@example.com';
  const contactText = dict?.contact?.value ?? 'TODO';

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.contactRow}>
              <h4 className={styles.contactLabel}>{dict?.contact?.text ?? 'Contact'}</h4>
              <a href={contactHref} className={`${styles.mailLink} ux-hover-btn ux-focus-ring`}>{contactText}</a>

              <div className={styles.socials}>
                <a href={socialGitHub} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ux-hover-btn ux-focus-ring`}>
                  GitHub
                </a>
                <a href={socialLegacy} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ux-hover-btn ux-focus-ring`}>
                  {dict?.footer?.legacy_label ?? 'Legacy kit'}
                </a>
                <a href={socialProject} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ux-hover-btn ux-focus-ring`}>
                  {dict?.footer?.project_label ?? 'Project'}
                </a>
              </div>
            </div>

            <div className={styles.legalRow}>
              <a href={socialProject} target="_blank" rel="noopener noreferrer" className={`${styles.copyright} ux-hover-btn ux-focus-ring`}>
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

          <div className={styles.rightCol}>
            <div className={styles.banners}>
              <Banner
                variant="translator"
                href="/books/reader-kit/reader-kit.pdf"
                title={dict?.footer?.banners?.reader?.title ?? 'Reader’s Kit'}
                subtitle={dict?.footer?.banners?.reader?.subtitle ?? 'Free starter pack for toki pona.'}
                thumbSrc="/books/reader-kit/cover.jpg"
              />
              <Banner
                variant="learn"
                href="/books/chinese-wisdom/chinese-wisdom.pdf"
                title={dict?.footer?.banners?.chinese?.title ?? 'Chinese Wisdom'}
                subtitle={dict?.footer?.banners?.chinese?.subtitle ?? 'Free kit with parallel reading.'}
                thumbSrc="/books/chinese-wisdom/cover.jpg"
              />
              <Banner
                variant="kit"
                href="/books/heart-sutra/heart-sutra.pdf"
                title={dict?.footer?.banners?.sutra?.title ?? 'Heart Sutra'}
                subtitle={dict?.footer?.banners?.sutra?.subtitle ?? 'Free translation in toki pona.'}
                thumbSrc="/books/heart-sutra/cover.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
