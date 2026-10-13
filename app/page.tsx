'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import PinnedNarrative from '@/components/sections/PinnedNarrative';
import PortoBeloThesis from '@/components/sections/PortoBeloThesis';
import HorizontalDevelopments from '@/components/sections/HorizontalDevelopments';
import Differentials from '@/components/sections/Differentials';
import HospitalityTeaser from '@/components/sections/HospitalityTeaser';
import Footer from '@/components/ui/Footer';
import MagneticButton from '@/components/ui/MagneticButton';

import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const { t } = useLanguage();
  useEffect(() => {
    const sections = document.querySelectorAll('[data-bg]');
    
    sections.forEach((section) => {
      const bg = section.getAttribute('data-bg');
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => updateColors(bg),
        onEnterBack: () => updateColors(bg),
      });
    });

    function updateColors(bg: string | null) {
      const body = document.body;
      if (bg === 'white') {
        gsap.to(body, { backgroundColor: '#FFFFFF', color: '#0A1128', duration: 1 });
      } else if (bg === 'black') {
        gsap.to(body, { backgroundColor: '#050505', color: '#FFFFFF', duration: 1 });
      } else {
        gsap.to(body, { backgroundColor: '#0A1128', color: '#FFFFFF', duration: 1 });
      }
    }
  }, []);

  return (
    <div className="grain">
      <SmoothScroll>
        <main className="bg-transition">
          <Navbar />
          <div data-bg="black">
            <Hero />
          </div>
          <PinnedNarrative />
          <PortoBeloThesis />
          <div data-bg="white">
            <HorizontalDevelopments />
          </div>
          <Differentials />
          <HospitalityTeaser />
          
          {/* 07 — ENTRE EM CONTATO */}
          <section className="py-48 px-12 bg-transition flex flex-col items-center justify-center text-center border-t border-white/5" data-bg="navy">
            <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12">
              {t('home.contact.tag')}
            </span>
            <h2 className="text-[12vw] md:text-[10vw] mb-12 max-w-7xl leading-[0.8]">
              {t('home.contact.title')}
            </h2>
            <p className="text-3xl md:text-5xl text-white/60 mb-24 max-w-4xl font-light">
              {t('home.contact.desc')}
            </p>
            
            <MagneticButton strength={0.2}>
              <a 
                href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Vim%20para%20saber%20mais%20sobre%20os%20produtos%20da%20Vision%20Estates"
                target="_blank"
                className="text-4xl uppercase tracking-[0.2em] bg-gold text-navy px-24 py-8 hover:bg-white transition-all duration-500"
              >
                {t('home.contact.button')}
              </a>
            </MagneticButton>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </div>
  );
}
