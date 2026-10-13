'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ExpandableSection from '../ui/ExpandableSection';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function PinnedNarrative() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-navy py-32 flex flex-col items-center justify-center bg-transition" data-bg="navy">
      <div ref={textRef} className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Image flush to left edge */}
          <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-[80vh]">
            <Image
              src="https://i.postimg.cc/j2JWG5zT/3.jpg"
              alt="Luxury Lifestyle"
              fill
              className="object-cover transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Text content with padding */}
          <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center py-12">
            <span className="text-2xl uppercase tracking-[0.4em] text-gold mb-8 block">
              {t('home.about.tag')}
            </span>
            <h2 className="text-[8vw] mb-12 leading-[0.85]">
              {t('home.about.title')}
            </h2>
            
            <div className="flex flex-col">
              <ExpandableSection title={t('home.about.op')} tag={t('home.about.opTag')}>
                {t('home.about.opDesc')}
              </ExpandableSection>
              
              <ExpandableSection title={t('home.about.cur')} tag={t('home.about.curTag')}>
                {t('home.about.curDesc')}
              </ExpandableSection>
              
              <ExpandableSection title={t('home.about.pres')} tag={t('home.about.presTag')}>
                {t('home.about.presDesc')}
              </ExpandableSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
