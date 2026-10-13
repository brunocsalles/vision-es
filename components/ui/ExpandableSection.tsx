'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  tag?: string;
  className?: string;
}

export default function ExpandableSection({ title, children, tag, className = '' }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full border-b border-white/10 py-12 ${className}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <div className="flex flex-col gap-4">
          {tag && <span className="text-gold text-sm uppercase tracking-[0.3em]">{tag}</span>}
          <h3 className="text-4xl md:text-6xl uppercase tracking-tighter group-hover:text-gold transition-colors duration-500">
            {title}
          </h3>
        </div>
        
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Glassmorphism Circle */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-full transition-transform duration-500 group-hover:scale-110" />
          {isOpen ? <Minus className="relative z-10 text-gold" size={32} /> : <Plus className="relative z-10 text-gold" size={32} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-12 pb-4 text-xl md:text-3xl text-white/60 leading-relaxed font-light max-w-4xl">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
