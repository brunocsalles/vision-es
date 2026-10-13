'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';

import { DEVELOPMENTS } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalDevelopments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  const PRODUCTS = DEVELOPMENTS.map(dev => ({
    slug: dev.slug,
    title: dev.title.toUpperCase(),
    tag: typeof dev.tag === 'string' ? dev.tag : dev.tag[language] || dev.tag.pt,
    desc: typeof dev.tagline === 'string' ? dev.tagline : dev.tagline[language] || dev.tagline.pt,
    image: dev.images[0],
    lifestyle: dev.images[1] || dev.images[0],
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: '-300vw',
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: '2000 top',
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => pin.kill();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-white">
      <div ref={sectionRef} className="relative flex h-screen w-[400vw] flex-row items-center text-navy">
        {PRODUCTS.map((dev, index) => (
          <div key={dev.slug} className="relative flex h-screen w-screen items-center justify-center px-12 md:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full max-w-[90vw]">
              
              {/* Architecture Image */}
              <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden group rounded-sm">
                <Image
                  src={dev.image}
                  alt={dev.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8 z-10">
                  <span className="bg-navy text-white px-6 py-2 text-lg uppercase tracking-widest">
                    {dev.tag}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <span className="text-xl md:text-2xl text-gold tracking-[0.3em]">0{index + 1} / PROJECT</span>
                <h3 className="text-5xl md:text-[8vw] leading-[0.8]">{dev.title}</h3>
                <p className="text-lg md:text-2xl text-navy/60 leading-relaxed font-light">
                  {dev.desc}
                </p>
                <MagneticButton strength={0.2}>
                  <Link 
                    href={`/developments/${dev.slug}`}
                    className="text-xl uppercase tracking-widest border border-navy/20 px-12 py-4 hover:bg-navy hover:text-white transition-all duration-500 backdrop-blur-sm"
                  >
                    {t('common.explore')}
                  </Link>
                </MagneticButton>
              </div>

              {/* Lifestyle Image (Smaller, Offset) */}
              <div className="hidden lg:block lg:col-span-3 relative aspect-[3/4] w-full overflow-hidden rounded-sm translate-y-24">
                <Image
                  src={dev.lifestyle}
                  alt={`${dev.title} Lifestyle`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
