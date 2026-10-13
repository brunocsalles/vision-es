'use client';

import { DEVELOPMENTS } from '@/lib/constants';
import { notFound } from 'next/navigation';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Carousel from '@/components/ui/Carousel';
import { motion } from 'framer-motion';
import { use } from 'react';

import { useLanguage } from '@/context/LanguageContext';

export default function DevelopmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const dev = DEVELOPMENTS.find((d) => d.slug === slug);
  const { t, language } = useLanguage();

  if (!dev) return notFound();

  return (
    <SmoothScroll>
      <main className="bg-navy">
        <Navbar />
        
        {/* Header Section */}
        <section className="pt-48 pb-24 px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-6 block">
              {dev.location}
            </span>
            <h1 className="text-[12vw] leading-[0.8] mb-12">{dev.title}</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <p className="text-2xl text-white/60 leading-relaxed max-w-xl">
              {dev.tagline[language] || dev.tagline.pt} {dev.description[language] || dev.description.pt}
            </p>
            <div className="flex flex-col gap-4 md:items-end">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">Status</span>
              <span className="text-2xl font-bebas">{t('common.exclusiveLaunch')}</span>
            </div>
          </div>
        </section>

        {/* Full Width Carousel */}
        <Carousel images={dev.images} />

        {/* Details Section */}
        <section className="py-32 px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">{t('common.architecture')}</span>
            <p className="text-white/60">{t('common.architectureDesc')}</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">{t('common.lifestyle')}</span>
            <p className="text-white/60">{t('common.lifestyleDesc')}</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">{t('common.investment')}</span>
            <p className="text-white/60">{t('common.investmentDesc')}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-8 border-t border-white/5 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl mb-12">{t('common.interestedIn')} {dev.title}?</h2>
          <a 
            href={`https://wa.me/5555984114969?text=Oi%20Pedro!%20Vim%20para%20saber%20mais%20sobre%20o%20${dev.title}`}
            target="_blank"
            className="text-[0.7rem] uppercase tracking-[0.2em] border border-gold px-12 py-4 hover:bg-gold hover:text-navy transition-all duration-500"
          >
            {t('common.requestPdf')}
          </a>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
