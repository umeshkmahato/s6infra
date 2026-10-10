import type { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import BackToTop from '@/components/BackToTop';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import CTASection from '@/components/CTASection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'S6 Infra | Infrastructure & Construction',
  description:
    'S6 Infra provides civil construction, infrastructure development, EPC, road, bridge, building, drainage, irrigation and allied construction services.',
  keywords: [
    'construction',
    'infrastructure',
    'civil engineering',
    'EPC',
    'road construction',
    'bridge construction',
  ],
  authors: [{ name: 'S6 Infrastructure' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://s6infra.com',
    siteName: 'S6 Infra',
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
