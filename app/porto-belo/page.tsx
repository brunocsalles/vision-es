'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { 
  TrendingUp, 
  BarChart3, 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  Activity,
  Layers
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function PortoBeloPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dataSectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Data blocks animation
      const dataBlocks = gsap.utils.toArray('.data-block');
      dataBlocks.forEach((block: any) => {
        gsap.from(block, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 90%',
          },
        });
      });

      // Text reveal animation
      const reveals = gsap.utils.toArray('.text-reveal');
      reveals.forEach((text: any) => {
        gsap.from(text, {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
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
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-8 md:px-24">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="https://www.creditoreal.com.br/blog/wp-content/uploads/2023/10/shutterstock_2089019347-scaled-e1696615985143-2000x1127.jpg"
              alt="Porto Belo Skyline"
              fill
              className="object-cover opacity-40"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/60 z-1" />
          </div>

          <div className="relative z-10 max-w-7xl text-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-[0.7rem] uppercase tracking-[0.5em] text-gold mb-12 block"
            >
              {t('portoBelo.hero.tag')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[10vw] md:text-[8vw] leading-[0.85] uppercase font-bebas tracking-tighter mb-16"
            >
              {t('portoBelo.hero.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-2xl md:text-4xl text-white/80 leading-tight max-w-4xl font-light tracking-wide mx-auto"
            >
              {t('portoBelo.hero.desc')}
            </motion.p>
          </div>
        </section>

        {/* 02 — INTRODUÇÃO (Editorial) */}
        <section className="py-32 bg-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-0 text-reveal">
              <Image
                src="https://picsum.photos/seed/portobelo-intro/1920/1080"
                alt="Porto Belo Lifestyle"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center px-8 md:px-24 py-12">
              <p className="text-3xl md:text-5xl leading-tight mb-16 text-reveal">
                {t('portoBelo.intro.title')}
              </p>
              <div className="flex flex-col gap-8 text-left items-start max-w-3xl">
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed text-reveal">
                  {t('portoBelo.intro.desc1')}
                </p>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed text-reveal">
                  {t('portoBelo.intro.desc2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — OS NÚMEROS (White Section) */}
        <section ref={dataSectionRef} className="py-32 px-8 md:px-24 bg-white text-navy">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
              <div className="max-w-2xl">
                <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-8 block">{t('portoBelo.numbers.tag')}</span>
                <h2 className="text-7xl md:text-[6vw] leading-[0.9] uppercase">
                  {t('portoBelo.numbers.title')}
                </h2>
              </div>
              <div className="hidden md:block w-32 h-px bg-navy/20 mb-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-32">
              {/* Data Blocks */}
              <div className="data-block flex flex-col gap-6 p-12 border border-navy/5 hover:border-gold/40 transition-colors duration-500">
                <BarChart3 className="w-12 h-12 text-gold" strokeWidth={1} />
                <span className="text-5xl md:text-6xl font-bebas">R$ 11,4 bi</span>
                <p className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.vgv')}</p>
              </div>

              <div className="data-block flex flex-col gap-6 p-12 border border-navy/5 hover:border-gold/40 transition-colors duration-500">
                <DollarSign className="w-12 h-12 text-gold" strokeWidth={1} />
                <span className="text-5xl md:text-6xl font-bebas">R$ 10,2 bi</span>
                <p className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.sales')}</p>
              </div>

              <div className="data-block flex flex-col gap-6 p-12 border border-navy/5 hover:border-gold/40 transition-colors duration-500">
                <Users className="w-12 h-12 text-gold" strokeWidth={1} />
                <span className="text-5xl md:text-6xl font-bebas">+9.000</span>
                <p className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.units')}</p>
              </div>

              <div className="data-block flex flex-col gap-6 p-12 border border-navy/5 hover:border-gold/40 transition-colors duration-500">
                <TrendingUp className="w-12 h-12 text-gold" strokeWidth={1} />
                <span className="text-5xl md:text-6xl font-bebas">+69,1%</span>
                <p className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.val')}</p>
              </div>

              <div className="data-block flex flex-col gap-6 p-12 border border-navy/5 hover:border-gold/40 transition-colors duration-500">
                <ArrowUpRight className="w-12 h-12 text-gold" strokeWidth={1} />
                <span className="text-5xl md:text-6xl font-bebas">300% a 400%</span>
                <p className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.growth')}</p>
              </div>

              <div className="data-block flex flex-col gap-6 p-12 border border-navy/5 hover:border-gold/40 transition-colors duration-500">
                <Activity className="w-12 h-12 text-gold" strokeWidth={1} />
                <span className="text-5xl md:text-6xl font-bebas">R$ 35k/m²</span>
                <p className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.premium')}</p>
              </div>
            </div>

            <p className="text-2xl md:text-3xl text-navy/60 leading-relaxed max-w-4xl italic text-reveal">
              {t('portoBelo.numbers.footer')}
            </p>
          </div>
        </section>

        {/* 04 — A TESE (Narrative) */}
        <section className="py-32 bg-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-0 text-reveal">
              <Image
                src="https://cdn.myside.com.br/base/57e/5cb/96e/vsta-vertice-vivapark.jpg"
                alt="Porto Belo Development"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center gap-12 px-8 md:px-24 py-12">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold">{t('portoBelo.thesis.tag')}</span>
              <h2 className="text-6xl md:text-7xl leading-[0.9] uppercase text-reveal">
                {t('portoBelo.thesis.title')}
              </h2>
              <div className="flex flex-col gap-8 text-xl text-white/60 leading-relaxed text-reveal">
                <p>
                  {t('portoBelo.thesis.desc1')}
                </p>
                <p>
                  {t('portoBelo.thesis.desc2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — REPRECIFICAÇÃO (Concept Block) */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center py-12">
              <div className="flex items-center gap-8 mb-16 reveal">
                <Layers className="w-16 h-16 text-gold" strokeWidth={1} />
                <h2 className="text-6xl md:text-[6vw] leading-[0.9] uppercase">{t('portoBelo.repricing.title')}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-2xl leading-relaxed text-navy/80 reveal">
                <p>
                  {t('portoBelo.repricing.desc1')}
                </p>
                <p>
                  {t('portoBelo.repricing.desc2')}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://locana.com.br/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-at-12.48.05-e1748540081637.jpeg"
                alt="Porto Belo Value"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* 06 — POR QUE AGORA (Urgency) */}
        <section className="py-32 bg-navy border-t border-white/5 overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 min-h-[60vh] lg:min-h-0 text-reveal">
              <div className="relative h-full min-h-[30vh]">
                <Image
                  src="https://static.ndmais.com.br/2023/05/arquivobruno-golembiewskind-scaled.jpg"
                  alt="Porto Belo Opportunity 1"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-full min-h-[30vh]">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:GcSNH_nDlcQJTd5YwVk5Da_Bew_sTzlbPa-36g&s"
                  alt="Porto Belo Opportunity 2"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center px-8 md:px-24 py-12">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block">{t('portoBelo.whyNow.tag')}</span>
              <h2 className="text-7xl md:text-[6vw] leading-[0.8] uppercase mb-12 text-reveal">
                {t('portoBelo.whyNow.title')}
              </h2>
              <div className="flex flex-col gap-12">
                <p className="text-3xl md:text-4xl leading-tight text-white/80 text-reveal">
                  {t('portoBelo.whyNow.desc1')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl text-white/40 leading-relaxed text-reveal">
                  <p>
                    {t('portoBelo.whyNow.desc2')}
                  </p>
                  <p>
                    {t('portoBelo.whyNow.desc3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CTA FINAL */}
        <section className="py-64 px-8 bg-white text-navy text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-[8vw] leading-[0.85] uppercase mb-12 font-bebas">
              {t('portoBelo.cta.title')}
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-60 max-w-3xl">
              {t('portoBelo.cta.desc')}
            </p>
            
            <MagneticButton strength={0.3}>
              <Link 
                href="/developments"
                className="text-2xl uppercase tracking-[0.3em] bg-navy text-white px-16 py-8 hover:bg-gold transition-all duration-500 inline-block"
              >
                {t('common.seeProjects')}
              </Link>
            </MagneticButton>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
