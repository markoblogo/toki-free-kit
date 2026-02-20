import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '@/get-dictionary';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const siteBase = 'https://toki-free.abvx.xyz';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = (lang === 'tp' || lang === 'en') ? (lang as 'en' | 'tp') : 'en';
  const dict = await getDictionary(safeLang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${siteBase}/${safeLang}`,
      languages: {
        en: `${siteBase}/en`,
        ['tok' as any]: `${siteBase}/tp`,
      } as any,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${siteBase}/${safeLang}`,
      siteName: 'toki pona free kit',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${siteBase}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'toki pona free kit',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${siteBase}/twitter-card.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang = (lang === 'tp' || lang === 'en') ? (lang as 'en' | 'tp') : 'en';
  return (
    <html lang={safeLang === 'tp' ? 'tok' : 'en'} className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
