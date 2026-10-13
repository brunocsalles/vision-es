'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[80vh] bg-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Overlay for Index */}
      <div className="absolute bottom-12 left-12 z-10 flex items-baseline gap-2">
        <span className="text-navy font-bebas text-6xl">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="text-navy/40 font-bebas text-2xl">
          / {String(images.length).padStart(2, '0')}
        </span>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-12 right-12 z-10 flex gap-4">
        <button 
          onClick={prev}
          className="w-16 h-16 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-500 text-navy"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="w-16 h-16 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-500 text-navy"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
