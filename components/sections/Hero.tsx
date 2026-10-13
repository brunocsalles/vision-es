'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation: Split text reveal
      const titleLines = titleRef.current?.innerText.split(' ');
      if (titleRef.current) {
        titleRef.current.innerHTML = titleLines?.map(word => `<span class="inline-block overflow-hidden px-[0.05em] -mx-[0.05em]"><span class="inline-block translate-y-full">${word}</span></span>`).join(' ') || '';
      }

      const spans = titleRef.current?.querySelectorAll('span span');
      if (spans && spans.length > 0) {
        gsap.to(spans, {
          y: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power4.out',
          delay: 0.5,
        });
      }

      gsap.from(subtextRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out',
      });

      // Scroll Zoom-out Reveal
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-between bg-black">
      {/* Background Image with Contrast Overlay */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full z-0 scale-110 transition-transform">
        <Image
          src="https://i.postimg.cc/P5404rvK/Vertice.jpg"
          alt="Vision Estates Architecture"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60 z-1" />
      </div>
      
      {/* Top Title */}
      <div className="relative z-10 text-center pt-32 px-4 w-full max-w-screen-2xl">
        <h1 ref={titleRef} className="text-[12vw] md:text-[8vw] leading-[0.9] text-white uppercase tracking-tighter pr-[0.05em]">
          Vision <span className="text-gold">Estates</span>
        </h1>
      </div>

      {/* Bottom Content */}
      <div ref={subtextRef} className="relative z-10 flex flex-col items-center gap-8 pb-24 px-4 w-full">
        <p className="text-2xl md:text-4xl tracking-[0.6em] text-white/90 uppercase font-light">
          {t('nav.portoBelo')}
        </p>
        
        <MagneticButton strength={0.2}>
          <Link 
            href="/#empreendimentos"
            className="text-lg uppercase tracking-[0.3em] border border-white/20 px-12 py-4 hover:bg-white hover:text-navy transition-all duration-500 backdrop-blur-sm"
          >
            {t('common.explore')}
          </Link>
        </MagneticButton>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gold/40 animate-bounce" />
      </div>
    </section>
  );
}
