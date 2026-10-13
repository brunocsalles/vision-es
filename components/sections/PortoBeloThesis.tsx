'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

export default function PortoBeloThesis() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white text-navy py-48 px-12 bg-transition" data-bg="white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-2xl uppercase tracking-[0.4em] text-gold mb-12 block">
              {t('portoBelo.hero.tag')}
            </span>
            <h2 className="text-[10vw] md:text-[8vw] leading-[0.85] mb-12">
              {t('portoBelo.hero.title')}
            </h2>
            <MagneticButton strength={0.2}>
              <Link 
                href="/porto-belo"
                className="text-3xl uppercase tracking-widest flex items-center gap-6 group"
              >
                {t('common.learnMore')}
                <div className="w-16 h-px bg-navy transition-all duration-500 group-hover:w-32" />
              </Link>
            </MagneticButton>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-16 pt-12">
            <div className="text-3xl md:text-5xl leading-[1.1] flex flex-col gap-12 opacity-90 font-light">
              <p>
                {t('portoBelo.numbers.footer')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 border-t border-navy/10 pt-12">
              <div className="flex flex-col">
                <span className="text-7xl font-bebas text-gold">R$ 11.4B</span>
                <span className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.vgv')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-7xl font-bebas text-gold">400%</span>
                <span className="text-lg uppercase tracking-widest opacity-60">{t('portoBelo.numbers.growth')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
