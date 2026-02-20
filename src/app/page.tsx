import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MaterialsSection from '@/components/MaterialsSection';
import HowToUseSection from '@/components/HowToUseSection';
import FeedbackSection from '@/components/FeedbackSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <MaterialsSection />
      <HowToUseSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}
