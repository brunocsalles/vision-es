'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import MagneticButton from '@/components/ui/MagneticButton';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Users, 
  Sparkles, 
  ShieldCheck,
  Calendar
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function HospitalityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach((el: any) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      });

      // Stagger items
      gsap.from('.stagger-item', {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stagger-container',
          start: 'top 75%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <main ref={containerRef} className="bg-navy text-white min-h-screen">
        <Navbar />

        {/* 01 — HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-8 md:px-24 text-center">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="https://info.ehl.edu/hubfs/hotel-front-desk_header.jpg"
              alt="Vision Estates Hospitality"
              fill
              className="object-cover opacity-40"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/60 z-1" />
          </div>

          <div className="relative z-10 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              <span className="text-[0.7rem] uppercase tracking-[0.5em] text-gold">{t('hospitality.hero.tag')}</span>
              <span className="bg-gold text-navy px-4 py-1 text-[0.6rem] uppercase tracking-widest font-bold">{t('hospitality.hero.badge')}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[8vw] md:text-[6vw] leading-[0.85] uppercase font-bebas tracking-tighter mb-16"
            >
              {t('hospitality.hero.title')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/80 leading-tight max-w-4xl font-light tracking-wide mx-auto mb-20"
            >
              {t('hospitality.hero.desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <MagneticButton strength={0.3}>
                <a 
                  href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20o%20investimento%20em%20gestão%20e%20hospitalidade%20da%20Vision!"
                  target="_blank"
                  className="text-xl uppercase tracking-[0.3em] bg-white text-navy px-12 py-6 hover:bg-gold transition-all duration-500 inline-flex items-center gap-6"
                >
                  {t('hospitality.hero.cta')}
                  <ArrowRight size={20} />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* 02 — O PROBLEMA QUE RESOLVEMOS */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-[80vh] reveal">
              <Image
                src="https://i.postimg.cc/pdfM1thx/Vivatalk_Inc31_CLIENTE_imagens_46.jpg"
                alt="Property Management Problem"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center py-12">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">{t('hospitality.problem.tag')}</span>
              <h2 className="text-5xl md:text-[4.5vw] leading-[0.9] uppercase reveal mb-12">
                {t('hospitality.problem.title')}
              </h2>
              <div className="flex flex-col gap-12 text-xl md:text-2xl leading-relaxed text-navy/70 reveal">
                <p>
                  {t('hospitality.problem.desc1')}
                </p>
                <p className="text-navy font-medium">
                  {t('hospitality.problem.desc2')}
                </p>
                <p>
                  {t('hospitality.problem.desc3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — O QUE É O HOSPITALITY INVESTMENT */}
        <section className="py-32 px-8 md:px-24 bg-navy">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">{t('hospitality.service.tag')}</span>
              <h2 className="text-7xl md:text-[8vw] leading-[0.8] uppercase reveal">{t('hospitality.service.title')}</h2>
              <p className="text-xl md:text-2xl text-white/60 mt-12 max-w-4xl reveal">
                {t('hospitality.service.desc')}
              </p>
            </div>

            <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
              <div className="stagger-item flex flex-col gap-8">
                <BarChart3 className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">{t('hospitality.service.item1.title')}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t('hospitality.service.item1.desc')}
                </p>
              </div>

              <div className="stagger-item flex flex-col gap-8">
                <Users className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">{t('hospitality.service.item2.title')}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t('hospitality.service.item2.desc')}
                </p>
              </div>

              <div className="stagger-item flex flex-col gap-8">
                <Sparkles className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">{t('hospitality.service.item3.title')}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t('hospitality.service.item3.desc')}
                </p>
              </div>

              <div className="stagger-item flex flex-col gap-8">
                <ShieldCheck className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">{t('hospitality.service.item4.title')}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t('hospitality.service.item4.desc')}
                </p>
              </div>

              <div className="stagger-item flex flex-col gap-8">
                <Calendar className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">{t('hospitality.service.item5.title')}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t('hospitality.service.item5.desc')}
                </p>
              </div>

              <div className="stagger-item flex flex-col gap-8">
                <Clock className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">{t('hospitality.service.item6.title')}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {t('hospitality.service.item6.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — PARA QUEM É */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-[80vh] reveal">
              <Image
                src="https://feldmann.adv.br/wp-content/uploads/2022/08/Requisitos-do-Contrato-de-Compra-e-Venda-de-Imo%CC%81vel.png"
                alt="Hospitality Target Audience"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center py-12">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">{t('hospitality.audience.tag')}</span>
              <h2 className="text-5xl md:text-[4.5vw] leading-[0.9] uppercase reveal mb-16">
                {t('hospitality.audience.title')}
              </h2>
              <div className="flex flex-col gap-16 reveal">
                <div className="flex flex-col gap-6">
                  <h3 className="text-4xl font-bebas text-gold">{t('hospitality.audience.item1.title')}</h3>
                  <p className="text-xl md:text-2xl text-navy/70 leading-relaxed">
                    {t('hospitality.audience.item1.desc')}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-4xl font-bebas text-gold">{t('hospitality.audience.item2.title')}</h3>
                  <p className="text-xl md:text-2xl text-navy/70 leading-relaxed">
                    {t('hospitality.audience.item2.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — POR QUE PORTO BELO */}
        <section className="py-32 bg-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center py-12">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">{t('hospitality.market.tag')}</span>
              <h2 className="text-5xl md:text-[4.5vw] leading-[0.9] uppercase reveal mb-12">
                {t('hospitality.market.title')}
              </h2>
              <div className="flex flex-col gap-12 text-xl md:text-2xl leading-relaxed text-white/70 reveal">
                <p>
                  {t('hospitality.market.desc1')}
                </p>
                <p className="text-gold font-medium">
                  {t('hospitality.market.desc2')}
                </p>
                <p>
                  {t('hospitality.market.desc3')}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-[80vh] reveal">
              <Image
                src="https://blog.viplaggeimoveis.com/wp-content/uploads/sites/27/2023/02/blueforest.jpg"
                alt="Porto Belo Market Context"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* 06 — COMING SOON */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-[80vh] reveal">
              <Image
                src="https://i.postimg.cc/pV9q2JCY/36.jpg"
                alt="Hospitality Coming Soon"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center py-12">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">{t('hospitality.status.tag')}</span>
              <h2 className="text-5xl md:text-[4.5vw] leading-[0.9] uppercase reveal mb-12">
                {t('hospitality.status.title')}
              </h2>
              <div className="flex flex-col gap-12 text-xl md:text-2xl leading-relaxed text-navy/70 reveal">
                <p>
                  {t('hospitality.status.desc1')}
                </p>
                <p className="text-navy font-medium">
                  {t('hospitality.status.desc2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CTA FINAL */}
        <section className="py-64 px-8 bg-navy text-center border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-[8vw] leading-[0.85] uppercase mb-12 font-bebas">
              {t('hospitality.cta.title')}
            </h2>
            <p className="text-xl md:text-2xl mb-16 opacity-60 max-w-3xl">
              {t('hospitality.cta.desc')}
            </p>
            
            <MagneticButton strength={0.3}>
              <a 
                href="https://wa.me/5555999937665?text=Olá%20Bruno!%20Quero%20saber%20mais%20sobre%20o%20investimento%20em%20gestão%20e%20hospitalidade%20da%20Vision!"
                target="_blank"
                className="text-2xl uppercase tracking-[0.3em] bg-gold text-navy px-16 py-8 hover:bg-white transition-all duration-500 inline-flex items-center gap-6"
              >
                {t('hospitality.cta.button')}
                <ArrowRight size={24} />
              </a>
            </MagneticButton>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
