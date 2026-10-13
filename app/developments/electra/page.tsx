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
  Palette, 
  Maximize2, 
  Layout, 
  Home, 
  TrendingUp, 
  PenTool,
  Zap,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GENERAL_IMAGES = [
  'https://i.postimg.cc/5tdM3t0c/electra_2026_CLIENTE_Vimagem_(1)_imagens_20.jpg',
  'https://i.postimg.cc/13NQwFyp/electra-2026-CLIENTE-Vimagem-(1)-imagens-10.jpg',
  'https://i.postimg.cc/3xDTmG3X/electra-2026-CLIENTE-Vimagem-(1)-imagens-11.jpg',
  'https://i.postimg.cc/R05zR003/electra-2026-CLIENTE-Vimagem-(1)-imagens-12.jpg',
  'https://i.postimg.cc/Zqthcqqp/electra-2026-CLIENTE-Vimagem-(1)-imagens-13.jpg',
  'https://i.postimg.cc/0NRqfNN7/electra-2026-CLIENTE-Vimagem-(1)-imagens-14.jpg',
  'https://i.postimg.cc/MG28DGG7/electra-2026-CLIENTE-Vimagem-(1)-imagens-15.jpg',
  'https://i.postimg.cc/FK5QZKKg/electra-2026-CLIENTE-Vimagem-(1)-imagens-16.jpg',
  'https://i.postimg.cc/5tdM3ttk/electra-2026-CLIENTE-Vimagem-(1)-imagens-17.jpg',
  'https://i.postimg.cc/q7VdL77Y/electra-2026-CLIENTE-Vimagem-(1)-imagens-18.jpg',
  'https://i.postimg.cc/Bv9Ggvvd/electra-2026-CLIENTE-Vimagem-(1)-imagens-19.jpg',
  'https://i.postimg.cc/GpFnS1BW/electra-2026-CLIENTE-Vimagem-(1)-imagens-22.jpg',
  'https://i.postimg.cc/jjHYkrwY/electra-2026-CLIENTE-Vimagem-(1)-imagens-23.jpg',
  'https://i.postimg.cc/vmrwSdgy/electra-2026-CLIENTE-Vimagem-(1)-imagens-24.jpg',
  'https://i.postimg.cc/fbcQght3/electra-2026-CLIENTE-Vimagem-(1)-imagens-25.jpg',
  'https://i.postimg.cc/yNmCrzgD/electra-2026-CLIENTE-Vimagem-(1)-imagens-26.jpg',
  'https://i.postimg.cc/yd74Mrc7/electra-2026-CLIENTE-Vimagem-(1)-imagens-27.jpg',
];

const PRIVATE_IMAGES = [
  'https://i.postimg.cc/50fdhkLN/electra-2026-CLIENTE-Vimagem-(1)-imagens-28.jpg',
  'https://i.postimg.cc/C1wT36kz/electra-2026-CLIENTE-Vimagem-(1)-imagens-29.jpg',
  'https://i.postimg.cc/ZKQmWHzZ/electra-2026-CLIENTE-Vimagem-(1)-imagens-3.jpg',
  'https://i.postimg.cc/pTPbw1z9/electra-2026-CLIENTE-Vimagem-(1)-imagens-30.jpg',
  'https://i.postimg.cc/fLMnGgm9/electra-2026-CLIENTE-Vimagem-(1)-imagens-31.jpg',
  'https://i.postimg.cc/cHdyp5ww/electra-2026-CLIENTE-Vimagem-(1)-imagens-32.jpg',
  'https://i.postimg.cc/76q8FQ01/electra-2026-CLIENTE-Vimagem-(1)-imagens-33.jpg',
  'https://i.postimg.cc/m2n4PjW4/electra-2026-CLIENTE-Vimagem-(1)-imagens-4.jpg',
  'https://i.postimg.cc/7YR459rP/electra-2026-CLIENTE-Vimagem-(1)-imagens-5.jpg',
];

export default function ElectraPage() {
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
              src="https://lancamento.invexo.com.br/wp-content/uploads/2025/10/fachada-electra-tower-porto-belo.jpg"
              alt="Electra"
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
              01 — ELECTRA
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[6vw] md:text-[4.5vw] leading-[0.85] uppercase font-bebas tracking-tighter mb-16"
            >
              Onde a inovação <span className="text-gold">encontra o design.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-2xl md:text-4xl text-white/80 leading-tight max-w-4xl font-light tracking-wide mx-auto"
            >
              Arte, arquitetura escultórica e 5.000m² de lazer concebido como galeria. Inserido no maior projeto urbano do sul do Brasil.
            </motion.p>
          </div>
        </section>

        {/* 02 — OPORTUNIDADE */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">02 — OPORTUNIDADE</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                Estar dentro do VivaPark não é só uma escolha de endereço.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  O VivaPark já movimentou mais de R$ 6 bilhões e projeta R$ 25 bilhões até 2047. Não é uma promessa — é um bairro planejado que já existe, já funciona e já comprovou sua capacidade de valorização.
                </p>
                <p className="text-navy font-medium">
                  O INC31 é o primeiro empreendimento da Expansão III — a fase Viva Arte.
                </p>
                <p>
                  Quem entra agora entra no início de um novo ciclo dentro de um mercado que já validou o anterior. A valorização histórica de até 250% dentro do VivaPark não é coincidência. É a consequência de um projeto que cresce com estrutura, identidade e demanda real.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://framerusercontent.com/images/7OYQHnhRgminEruBy662iTuTbY.jpeg?width=1120&height=1600"
                alt="Electra Opportunity"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* 03 — CARROSSEL 01 — EMPREENDIMENTO GERAL */}
        <section className="w-full">
          <DevelopmentCarousel 
            images={GENERAL_IMAGES} 
            caption="Um edifício integralmente branco. Estrutura orgânica. Leitura escultórica. A arquitetura como tela."
          />
        </section>

        {/* 04 — BENEFÍCIOS */}
        <section className="py-32 px-8 md:px-24 bg-navy">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">04 — BENEFÍCIOS</span>
              <h2 className="text-7xl md:text-[8vw] leading-[0.8] uppercase reveal">O que define este produto.</h2>
            </div>

            <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
              {/* Benefit Items */}
              <div className="benefit-item flex flex-col gap-8">
                <PenTool className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Arquitetura escultórica</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Concebido pela Voo Arquitetura. Um edifício de estrutura orgânica, formas vivas e linguagem que rompe o convencional. Não se parece com nenhum outro.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Palette className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Arte como elemento</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  O INC31 integra arte no lazer, áreas comuns e interiores. Hall com obras expostas e galerias interna e externa com esculturas.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Maximize2 className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">5.000m² de lazer</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  A única área de lazer inteiramente em um único pavimento. Piscina adulto, beach club, coworking e academia concebidos como espaços de descoberta.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Layout className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Lofts duplex</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Unidades de 47m² em dois pavimentos com pé-direito duplo e integração total. Cada loft é uma composição entre arquitetura e arte.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Home className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Maximalismo sofisticado</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Design expressivo e curadoria estética refinada. Interiores que viram destino, posicionando o ativo acima da média do mercado.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Zap className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Conexão com o parque</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Térreo permeável sem ruas entre o edifício e o parque. Integração direta com o espaço público e fluxo contínuo urbano.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8 lg:col-span-3">
                <TrendingUp className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Alto potencial de locação</h3>
                <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                  Design marcante gera mais conversão. Estética diferenciada permite cobrar entre 15% e 40% a mais na diária, mantendo ocupação alta o ano todo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — CARROSSEL 02 — ÁREA PRIVATIVA */}
        <section className="w-full">
          <DevelopmentCarousel 
            images={PRIVATE_IMAGES} 
            caption="Do lazer extraordinário ao refúgio particular. Cada detalhe com intenção."
          />
        </section>

        {/* 06 — PROPOSTA DE VALOR */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://img.nsctotal.com.br/wp-content/uploads/2025/10/electra-2.jpg"
                alt="Vivapark Value Proposition"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold reveal mb-12 block">06 — PROPOSTA DE VALOR</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                Um ativo com duas lógicas de retorno.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  O VivaPark cresce. O INC31 cresce com ele — mas por razões que vão além da localização. Arquitetura premiada, arte integrada e lazer como experiência sensorial criam demanda própria.
                </p>
                <p>
                  Para quem quer morar, é um endereço com identidade real. Para quem quer investir, é um ativo com alta atratividade de locação e valorização sustentada pelo crescimento contínuo do ecossistema VivaPark.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CTA FINAL */}
        <section className="py-64 px-8 bg-navy text-center border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-[8vw] leading-[0.85] uppercase mb-12 font-bebas">
              Conheça o Electra em detalhe.
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-60 max-w-3xl">
              Fale com a Vision Estates e receba todas as informações sobre condições, tipologias e disponibilidade.
            </p>
            
            <MagneticButton strength={0.3}>
              <a 
                href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20o%20Electra"
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
