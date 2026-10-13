'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { name: t('nav.portoBelo'), href: '/porto-belo' },
    { name: t('nav.developments'), href: '/developments' },
    { name: t('nav.hospitality'), href: '/hospitality' },
  ];

  const languages = [
    { code: 'pt', name: 'PT' },
    { code: 'en', name: 'EN' },
    { code: 'es', name: 'ES' },
  ] as const;

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-8 md:px-12 py-6 md:py-10 bg-gradient-to-b from-navy/40 to-transparent backdrop-blur-[2px]"
      >
        <MagneticButton strength={0.1}>
          <Link href="/" className="text-3xl md:text-4xl font-bebas tracking-tighter text-white">
            VISION <span className="text-gold">ESTATES</span>
          </Link>
        </MagneticButton>
        
        {/* Centered Links (Desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-16 text-sm tracking-[0.4em] uppercase font-bebas text-white items-center">
          {menuItems.map((item) => (
            <MagneticButton key={item.name} strength={0.2}>
              <Link href={item.href} className="hover:text-gold transition-colors">{item.name}</Link>
            </MagneticButton>
          ))}
          
          {/* Language Switcher Desktop */}
          <div className="flex items-center gap-4 ml-8 border-l border-white/10 pl-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-[0.7rem] font-medium transition-colors duration-300 ${
                  language === lang.code ? 'text-gold' : 'text-white/40 hover:text-white'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Right Aligned Contact & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <MagneticButton strength={0.2}>
              <Link 
                href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Vim%20para%20saber%20mais%20sobre%20os%20produtos%20da%20Vision%20Estates"
                target="_blank"
                className="text-sm font-bebas uppercase tracking-[0.3em] bg-gold text-navy px-8 py-3 hover:bg-white transition-all duration-500 backdrop-blur-sm"
              >
                {t('common.contact')}
              </Link>
            </MagneticButton>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-gold transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-navy flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-12 text-4xl font-bebas tracking-[0.2em] uppercase text-white">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gold transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-8 mt-8">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`text-xl font-bebas tracking-widest transition-colors ${
                      language === lang.code ? 'text-gold' : 'text-white/40'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>

              <Link 
                href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Vim%20para%20saber%20mais%20sobre%20os%20produtos%20da%20Vision%20Estates"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-navy px-12 py-4 text-2xl tracking-[0.1em]"
              >
                {t('common.contact')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
