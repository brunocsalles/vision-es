'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Target, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Differentials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.diff-item');
      
      gsap.from('.diff-header', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.diff-header',
          start: 'top 85%',
        }
      });

      gsap.from(items, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.diff-grid',
          start: 'top 80%',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const items = [
    {
      number: '01',
      title: t('home.diff.item1'),
      desc: t('home.diff.desc1'),
      icon: <Zap className="w-12 h-12 text-gold" strokeWidth={1} />
    },
    {
      number: '02',
      title: t('home.diff.item2'),
      desc: t('home.diff.desc2'),
      icon: <Target className="w-12 h-12 text-gold" strokeWidth={1} />
    },
    {
      number: '03',
      title: t('home.diff.item3'),
      desc: t('home.diff.desc3'),
      icon: <ShieldCheck className="w-12 h-12 text-gold" strokeWidth={1} />
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-navy py-48 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="diff-header mb-32">
          <span className="text-[0.7rem] uppercase tracking-[0.5em] text-gold mb-8 block">
            {t('home.diff.tag')}
          </span>
          <h2 className="text-7xl md:text-[8vw] leading-[0.9] uppercase font-bebas tracking-tighter text-gold">
            {t('home.diff.title')}
          </h2>
        </div>
        
        <div className="diff-grid flex flex-col gap-16">
          {items.map((item, i) => (
            <div key={i} className="diff-item grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 items-start group border-b border-white/10 pb-16">
              <div className="md:col-span-4 flex items-center gap-8">
                <span className="text-6xl font-bebas text-white/10 group-hover:text-gold transition-colors duration-500">
                  {item.number}
                </span>
                <div className="mb-2">
                  {item.icon}
                </div>
                <h3 className="text-4xl md:text-5xl uppercase leading-tight font-bebas tracking-tight text-gold">
                  {item.title}
                </h3>
              </div>
              
              <div className="md:col-span-8">
                <p className="text-xl md:text-3xl text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500 max-w-4xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
