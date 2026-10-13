'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface DevelopmentCarouselProps {
  images: string[];
  caption?: string;
}

export default function DevelopmentCarousel({ images, caption }: DevelopmentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-[90vh] bg-navy overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption Overlay */}
      {caption && (
        <div className="absolute top-12 right-12 z-10 max-w-sm text-right">
          <p className="text-white text-lg md:text-xl font-light leading-relaxed opacity-80">
            {caption}
          </p>
        </div>
      )}

      {/* Navigation Button (Bottom Left) */}
      <div className="absolute bottom-12 left-12 z-20">
        <button 
          onClick={next}
          className="bg-white text-navy px-8 py-6 flex items-center gap-8 hover:bg-gold transition-all duration-500 group/btn"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-bebas text-4xl">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="font-bebas text-xl opacity-40">
              / {String(images.length).padStart(2, '0')}
            </span>
          </div>
          <div className="w-px h-8 bg-navy/10" />
          <span className="text-sm uppercase tracking-[0.3em] font-medium">Próxima Imagem</span>
          <ChevronRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <motion.div 
          className="h-full bg-gold"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
