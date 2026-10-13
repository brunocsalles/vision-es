'use client';

import Image from 'next/image';
import Link from 'next/link';
import ExpandableSection from '../ui/ExpandableSection';
import MagneticButton from '../ui/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

export default function HospitalityTeaser() {
  const { t } = useLanguage();

  return (
    <section id="hospitality" className="w-full bg-white text-navy py-32 bg-transition overflow-hidden" data-bg="white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center py-12">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-2xl uppercase tracking-[0.4em] text-gold">{t('home.hospitality.tag')}</span>
              <span className="bg-navy text-white px-6 py-2 text-lg uppercase tracking-widest">{t('common.comingSoon')}</span>
            </div>
            <h2 className="text-[10vw] md:text-[8vw] leading-[0.85] mb-12">
              {t('home.hospitality.title')}
            </h2>
            
            <ExpandableSection title={t('home.hospitality.model')} className="border-navy/10">
              <p className="text-navy opacity-80">
                {t('home.hospitality.modelDesc')}
              </p>
            </ExpandableSection>
            
            <ExpandableSection title={t('home.hospitality.services')} className="border-navy/10">
              <p className="text-navy opacity-80">
                {t('home.hospitality.servicesDesc')}
              </p>
            </ExpandableSection>

            <div className="mt-16">
              <MagneticButton strength={0.2}>
                <Link 
                  href="/hospitality"
                  className="text-2xl uppercase tracking-widest flex items-center gap-6 group"
                >
                  {t('home.hospitality.cta')}
                  <div className="w-16 h-px bg-navy transition-all duration-500 group-hover:w-32" />
                </Link>
              </MagneticButton>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center gap-12">
            <div className="relative min-h-[60vh] lg:min-h-0 h-full w-full overflow-hidden">
              <Image
                src="https://i.postimg.cc/pdfM1thx/Vivatalk-Inc31-CLIENTE-imagens-46.jpg"
                alt="Hospitality Lifestyle"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-4 px-8 md:px-24 lg:px-0 pb-12">
              <span className="text-sm uppercase tracking-widest opacity-40">{t('common.comingSoon')}</span>
              <span className="text-4xl font-bebas">Q4 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
