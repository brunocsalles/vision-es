'use client';

import { DEVELOPMENTS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function PropertyShowcase() {
  const { language, t } = useLanguage();

  const products = DEVELOPMENTS.map(dev => ({
    slug: dev.slug,
    title: dev.title.toUpperCase(),
    tag: typeof dev.tag === 'string' ? dev.tag : dev.tag[language] || dev.tag.pt,
    desc: typeof dev.tagline === 'string' ? dev.tagline : dev.tagline[language] || dev.tagline.pt,
    image: dev.images[0],
  }));

  return (
    <section id="empreendimentos" className="w-full bg-navy py-32">
      <div className="px-8 mb-24">
        <span className="text-xl uppercase tracking-widest text-gold mb-4 block">{t('home.projects.tag')}</span>
        <h2 className="text-7xl md:text-9xl">{t('portoBelo.cta.title')}</h2>
        <p className="text-2xl md:text-3xl text-white/60 mt-8 max-w-3xl">
          {t('portoBelo.intro.desc2')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-32 px-8">
        {products.map((dev, index) => (
          <div key={dev.slug} className="flex flex-col gap-8 group">
            <div className="aspect-[16/9] relative overflow-hidden">
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                className="w-full h-full"
              >
                <Image
                  src={dev.image}
                  alt={dev.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute top-6 left-6 bg-gold text-navy px-4 py-1 text-sm uppercase tracking-widest">
                {dev.tag}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-5xl md:text-7xl">{dev.title}</h3>
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-md">
                {dev.desc}
              </p>
              <Link 
                href={`/developments/${dev.slug}`}
                className="group flex items-center gap-4 text-xl uppercase tracking-widest text-gold mt-4"
              >
                {t('common.knowMore')} {dev.title.split(' ')[0]}
                <div className="w-12 h-px bg-gold transition-all duration-500 group-hover:w-24" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 flex justify-center">
        <Link 
          href="/developments"
          className="text-2xl uppercase tracking-widest border border-white/20 px-12 py-4 hover:bg-white hover:text-navy transition-all duration-500"
        >
          {t('common.seeProjects')}
        </Link>
      </div>
    </section>
  );
}
