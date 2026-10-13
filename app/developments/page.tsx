'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import MagneticButton from '@/components/ui/MagneticButton';
import { DEVELOPMENTS } from '@/lib/constants';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function DevelopmentsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(heroTitleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      });

      // Philosophy Reveal
      const revealElements = philosophyRef.current?.querySelectorAll('.reveal');
      if (revealElements && revealElements.length > 0) {
        gsap.from(revealElements, {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: 'top 80%',
          },
        });
      }

      // Cards Parallax
      const cards = gsap.utils.toArray('.dev-card');
      cards.forEach((card: any) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <main ref={containerRef} className="bg-navy text-white min-h-screen">
        <Navbar />

        {/* 01 — HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-8">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="https://blog.beminveste.com.br/wp-content/smush-webp/2024/06/pier-oporto-itapema4-1024x576.png.webp"
              alt="Developments Background"
              fill
              className="object-cover opacity-40"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/60 z-1" />
          </div>

          <div className="relative z-10 w-full max-w-screen-2xl px-4">
            <h1 ref={heroTitleRef} className="text-[7vw] md:text-[5.5vw] leading-[0.85] uppercase mb-8 font-bebas tracking-tighter">
              {t('developments.hero.title')}
            </h1>
            <p className="text-xl md:text-3xl tracking-[0.4em] uppercase font-light opacity-80">
              {t('developments.hero.desc')}
            </p>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-16 bg-gold/40 animate-bounce" />
          </div>
        </section>

        {/* 02 — FILOSOFIA DE SELEÇÃO */}
        <section ref={philosophyRef} className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 px-8 md:px-24 flex flex-col justify-center py-12">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-8 block reveal">
                {t('developments.philosophy.tag')}
              </span>
              <h2 className="text-7xl md:text-[6vw] leading-[0.9] reveal">
                {t('developments.philosophy.title')}
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center px-8 md:px-24 lg:pl-0 py-12">
              <p className="text-2xl md:text-4xl leading-relaxed font-light opacity-80 reveal">
                {t('developments.philosophy.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* 03 — CARDS DOS PRODUTOS */}
        <section className="py-32 bg-navy">
          <div className="w-full flex flex-col gap-32">
            {DEVELOPMENTS.map((dev, index) => (
              <div 
                key={dev.slug} 
                className={`dev-card grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch`}
              >
                {/* Image Side */}
                <div className={`lg:col-span-7 relative min-h-[50vh] lg:min-h-0 w-full overflow-hidden group ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={dev.images[0]}
                    alt={dev.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 z-10">
                    <span className="bg-gold text-navy px-6 py-2 text-lg uppercase tracking-widest">
                      {dev.tag[language] || dev.tag.pt}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-5 flex flex-col justify-center gap-8 px-8 md:px-24 py-12 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-2xl text-gold tracking-[0.3em]">0{index + 1} / PROJECT</span>
                  <h3 className="text-6xl md:text-7xl leading-[0.9] uppercase">{dev.title}</h3>
                  
                  <div className="flex flex-col gap-6">
                    <p className="text-2xl text-white font-medium leading-tight">
                      {dev.tagline[language] || dev.tagline.pt}
                    </p>
                    <p className="text-xl text-white/60 font-light leading-relaxed">
                      {dev.description[language] || dev.description.pt}
                    </p>
                  </div>

                  <MagneticButton strength={0.2}>
                    <Link 
                      href={`/developments/${dev.slug}`}
                      className="inline-block text-lg uppercase tracking-widest border border-white/20 px-12 py-4 hover:bg-white hover:text-navy transition-all duration-500"
                    >
                      {t('common.see')} {dev.title}
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 — CTA FINAL */}
        <section className="py-48 px-8 bg-white text-navy text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12">
              {t('developments.cta.tag')}
            </span>
            <h2 className="text-[10vw] md:text-[8vw] leading-[0.8] mb-12">
              {t('developments.cta.title')}
            </h2>
            <p className="text-2xl md:text-4xl mb-16 opacity-60">
              {t('developments.cta.desc')}
            </p>
            
            <MagneticButton strength={0.3}>
              <Link 
                href="https://wa.me/5555984114969"
                target="_blank"
                className="text-2xl uppercase tracking-[0.3em] bg-navy text-white px-16 py-6 hover:bg-gold transition-all duration-500"
              >
                {t('common.contact')}
              </Link>
            </MagneticButton>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
