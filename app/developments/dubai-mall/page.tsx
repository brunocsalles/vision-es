'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import DevelopmentCarousel from '@/components/ui/DevelopmentCarousel';
import MagneticButton from '@/components/ui/MagneticButton';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingBag, 
  Waves, 
  Cpu, 
  Layout, 
  MapPin,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GENERAL_IMAGES = [
  'https://picsum.photos/seed/dubai-ext1/1920/1080',
  'https://picsum.photos/seed/dubai-ext2/1920/1080',
  'https://picsum.photos/seed/dubai-ext3/1920/1080',
  'https://picsum.photos/seed/dubai-ext4/1920/1080',
  'https://picsum.photos/seed/dubai-ext5/1920/1080',
];

const PRIVATE_IMAGES = [
  'https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-27.jpg',
  'https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-26.jpg',
  'https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-32.jpg',
  'https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-29.jpg',
  'https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-2.jpg',
  'https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-18.jpg',
  'https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-10.jpg',
];

export default function DubaiMallPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach((el: any) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      });

      // Benefits stagger
      gsap.from('.benefit-item', {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 75%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <main ref={containerRef} className="bg-navy text-white min-h-screen">
        <Navbar />

        {/* 01 — HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-8 md:px-24">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="https://lancamentosemportobelo.com.br/wp-content/uploads/2025/05/Dubai-Mall-Porto-Belo-17.jpg"
              alt="Dubai Mall Porto Belo"
              fill
              className="object-cover opacity-40"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/60 z-1" />
          </div>

          <div className="relative z-10 max-w-7xl text-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-[0.7rem] uppercase tracking-[0.5em] text-gold mb-12 block"
            >
              01 — DUBAI MALL
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[7vw] md:text-[5vw] leading-[0.85] uppercase font-bebas tracking-tighter mb-16"
            >
              Uma escala que <span className="text-gold">Porto Belo nunca viu.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-2xl md:text-4xl text-white/80 leading-tight max-w-4xl font-light tracking-wide mx-auto"
            >
              6 torres. 31 andares. Mais de 140.000m² construídos. Shopping privativo, infraestrutura de resort e residências que redefinem o morar bem.
            </motion.p>
          </div>
        </section>

        {/* 02 — OPORTUNIDADE */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">02 — OPORTUNIDADE</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                Quando um empreendimento cria seu próprio contexto.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  O Dubai Mall não está inserido em um bairro consolidado. Ele é um polo em si mesmo. Com shopping privativo de alto padrão, gastronomia e seis torres residenciais, o empreendimento gera fluxo contínuo e demanda constante.
                </p>
                <p className="text-navy font-medium">
                  Projetos de uso misto com escala real são os ativos de menor volatilidade.
                </p>
                <p>
                  Em um mercado que acumula valorização histórica de até 400%, o Dubai Mall se posiciona como um marco. A 900 metros do mar, no bairro Perequê, dentro do eixo de expansão que conecta Itapema a Porto Belo. A localização é parte da tese.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://i.postimg.cc/Zny91RrB/7.jpg"
                alt="Dubai Mall Opportunity"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* 03 — VÍDEO DO EMPREENDIMENTO */}
        <section className="w-full bg-black py-24">
          <div className="max-w-7xl mx-auto px-8 md:px-24">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl reveal">
              <iframe 
                src="https://www.youtube.com/embed/Guyl1CNsJUE" 
                title="Dubai Mall Porto Belo"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* 04 — BENEFÍCIOS */}
        <section className="py-32 px-8 md:px-24 bg-navy">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">04 — BENEFÍCIOS</span>
              <h2 className="text-7xl md:text-[8vw] leading-[0.8] uppercase reveal">O que define o Dubai Mall.</h2>
            </div>

            <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
              {/* Benefit Items */}
              <div className="benefit-item flex flex-col gap-8">
                <Building2 className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">6 torres residenciais</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Complexo com torres exclusivas (Torre A) e tipologias versáteis (Torres B a F), atendendo desde flats compactos a apartamentos de alto luxo.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <ShoppingBag className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Shopping privativo</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Lojas, serviços e gastronomia refinada integrados ao complexo. O fluxo contínuo impacta diretamente na liquidez de todas as unidades.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Waves className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Infraestrutura de resort</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Piscinas, quadra de tênis, spa, academia e concierge 24h. Uma decisão de não precisar sair para encontrar o extraordinário.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Cpu className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Automação completa</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Tecnologia integrada nas unidades da Torre A. Conforto e segurança sem atrito para uma vida conectada e moderna.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Layout className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Tipologias híbridas</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Dos flats de 36m² aos apartamentos de 130m² com living de 58m². Comporta tanto o investidor quanto o cliente de moradia real.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <MapPin className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Localização estratégica</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Av. Gov. Celso Ramos, Perequê. A 900 metros do mar, dentro do eixo de maior crescimento do litoral norte catarinense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — CARROSSEL 02 — ÁREA PRIVATIVA */}
        <section className="w-full">
          <DevelopmentCarousel 
            images={PRIVATE_IMAGES} 
            caption="Plantas inteligentes. Acabamentos nobres. Varandas com vista para o mar e a cidade. Cada tipologia com sua própria lógica de valor."
          />
        </section>

        {/* 06 — PROPOSTA DE VALOR */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://static.orulo.com.br/images/properties/large/1860073.jpeg?1723660983"
                alt="Dubai Mall Value Proposition"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold reveal mb-12 block">06 — PROPOSTA DE VALOR</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                Estabilidade não é ausência de crescimento.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  O Dubai Mall foi concebido para gerar demanda própria. O shopping movimenta o complexo. O complexo valoriza as unidades. É um ciclo que se retroalimenta e torna este ativo menos sensível às variações de mercado.
                </p>
                <p>
                  Para o investidor que prioriza previsibilidade, é o produto certo: fluxo constante, múltiplas tipologias e uma escala que dificilmente será replicada na região.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CTA FINAL */}
        <section className="py-64 px-8 bg-navy text-center border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-[8vw] leading-[0.85] uppercase mb-12 font-bebas">
              Conheça o Dubai Mall em detalhe.
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-60 max-w-3xl">
              Fale com a Vision Estates e receba todas as informações sobre condições, tipologias e disponibilidade.
            </p>
            
            <MagneticButton strength={0.3}>
              <a 
                href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20o%20Dubai%20Mall"
                target="_blank"
                className="text-2xl uppercase tracking-[0.3em] bg-gold text-navy px-16 py-8 hover:bg-white transition-all duration-500 inline-flex items-center gap-6"
              >
                Entrar em contato
                <ArrowRight size={24} />
              </a>
            </MagneticButton>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
