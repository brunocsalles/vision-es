'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-navy py-12 px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-bebas text-2xl tracking-tighter text-white">
          Vision Estates
        </div>
        
        <div className="flex gap-12 text-sm uppercase tracking-widest text-white/40">
          <Link href="/porto-belo" className="hover:text-white transition-colors">{t('nav.portoBelo')}</Link>
          <Link href="/hospitality" className="hover:text-white transition-colors">{t('nav.hospitality')}</Link>
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
        </div>

        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/20">
          © 2026 Vision Estates. {t('common.tagline')}.
        </p>
      </div>
    </footer>
  );
}
