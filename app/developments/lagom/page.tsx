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
  Maximize2, 
  Trees, 
  Compass, 
  Home, 
  TrendingUp, 
  PenTool,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GENERAL_IMAGES = [
  'https://i.postimg.cc/L476r2CD/LAGOM_ƒçº_ƒç_À_(1)_imagens_18.jpg',
  'https://i.postimg.cc/1XLm6rV5/LAGOM_ƒçº_ƒç_À_(1)_imagens_19.jpg',
  'https://i.postimg.cc/CLqL0X90/LAGOM_ƒçº_ƒç_À_(1)_imagens_21.jpg',
  'https://i.postimg.cc/15q5S2br/LAGOM_ƒçº_ƒç_À_(1)_imagens_22.jpg',
  'https://i.postimg.cc/3xQrx9HG/LAGOM_ƒçº_ƒç_À_(1)_imagens_23.jpg',
  'https://i.postimg.cc/YCB2C8w3/LAGOM_ƒçº_ƒç_À_(1)_imagens_24.jpg',
  'https://i.postimg.cc/qBCzBN3k/LAGOM_ƒçº_ƒç_À_(1)_imagens_61.jpg',
  'https://i.postimg.cc/ydDWZdrq/LAGOM_ƒçº_ƒç_À_(1)_imagens_62.jpg',
  'https://i.postimg.cc/qqnR1FTK/LAGOM_ƒçº_ƒç_À_(1)_imagens_64.jpg',
  'https://i.postimg.cc/MKQKwNgY/LAGOM_ƒçº_ƒç_À_(1)_imagens_25.jpg',
  'https://i.postimg.cc/k5nnx4GG/LAGOM_ƒçº_ƒç_À_(1)_imagens_26.jpg',
  'https://i.postimg.cc/KYZZnzj1/LAGOM_ƒçº_ƒç_À_(1)_imagens_28.jpg',
  'https://i.postimg.cc/fbwwxLy2/LAGOM_ƒçº_ƒç_À_(1)_imagens_31.jpg',
  'https://i.postimg.cc/nLHHvzrB/LAGOM_ƒçº_ƒç_À_(1)_imagens_32.jpg',
  'https://i.postimg.cc/mDkB55QB/LAGOM_ƒçº_ƒç_À_(1)_imagens_34.jpg',
  'https://i.postimg.cc/qBCzBN3k/LAGOM_ƒçº_ƒç_À_(1)_imagens_61.jpg',
  'https://i.postimg.cc/Xv8Yh5tM/LAGOM_ƒçº_ƒç_À_(1)_imagens_7.jpg',
  'https://i.postimg.cc/vmzZjnkS/LAGOM_ƒçº_ƒç_À_(1)_imagens_8.jpg',
];

const PRIVATE_IMAGES = [
  'https://i.postimg.cc/SsRkvvcH/LAGOM_ƒçº_ƒç_À_(1)_imagens_35.jpg',
  'https://i.postimg.cc/KzWxSDN4/LAGOM_ƒçº_ƒç_À_(1)_imagens_37.jpg',
  'https://i.postimg.cc/1XNP9VC7/LAGOM_ƒçº_ƒç_À_(1)_imagens_38.jpg',
  'https://i.postimg.cc/23RY3jgn/LAGOM_ƒçº_ƒç_À_(1)_imagens_39.jpg',
  'https://i.postimg.cc/59ZQ8BVj/LAGOM_ƒçº_ƒç_À_(1)_imagens_40.jpg',
  'https://i.postimg.cc/YqYGRvrD/LAGOM_ƒçº_ƒç_À_(1)_imagens_45.jpg',
  'https://i.postimg.cc/65n2c8WL/LAGOM_ƒçº_ƒç_À_(1)_imagens_46.jpg',
  'https://i.postimg.cc/jSTWFRCY/LAGOM_ƒçº_ƒç_À_(1)_imagens_48.jpg',
  'https://i.postimg.cc/y8KJb7Wx/LAGOM_ƒçº_ƒç_À_(1)_imagens_50.jpg',
  'https://i.postimg.cc/FHvfBh1R/LAGOM_ƒçº_ƒç_À_(1)_imagens_51.jpg',
  'https://i.postimg.cc/T3cy8BWP/LAGOM_ƒçº_ƒç_À_(1)_imagens_52.jpg',
  'https://i.postimg.cc/YCx4cTms/LAGOM_ƒçº_ƒç_À_(1)_imagens_53.jpg',
  'https://i.postimg.cc/L8VqdGZC/LAGOM_ƒçº_ƒç_À_(1)_imagens_54.jpg',
  'https://i.postimg.cc/Gph4bzkg/LAGOM_ƒçº_ƒç_À_(1)_imagens_55.jpg',
  'https://i.postimg.cc/3wJk39gS/LAGOM_ƒçº_ƒç_À_(1)_imagens_56.jpg',
  'https://i.postimg.cc/cJ9rCYh1/LAGOM_ƒçº_ƒç_À_(1)_imagens_57.jpg',
  'https://i.postimg.cc/HLZVn5zs/LAGOM_ƒçº_ƒç_À_(1)_imagens_58.jpg',
];

export default function LagomPage() {
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
        stagger: 0.15,
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
              src="https://lancamento.invexo.com.br/wp-content/uploads/2025/12/lagom-pereque-porto-belo-001.jpg"
              alt="Lagom Perequê"
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
              01 — LAGOM PEREQUÊ
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[7vw] md:text-[5vw] leading-[0.85] uppercase font-bebas tracking-tighter mb-16"
            >
              O equilíbrio que o <span className="text-gold">mercado exige.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-2xl md:text-4xl text-white/80 leading-tight max-w-4xl font-light tracking-wide mx-auto"
            >
              Baixa densidade. Arquitetura autoral. Natureza integrada. Em um dos mercados mais valorizados do litoral sul brasileiro.
            </motion.p>
          </div>
        </section>

        {/* 02 — OPORTUNIDADE */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">02 — OPORTUNIDADE</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                Um produto que vai na direção contrária.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  Enquanto Porto Belo registra valorização acumulada de até 300% e consolida seu posicionamento como mercado de alto padrão, a maioria dos empreendimentos da região segue a mesma lógica: mais unidades, mais densidade, mais giro.
                </p>
                <p className="text-navy font-medium">
                  O Lagom Perequê foi concebido com a lógica oposta.
                </p>
                <p>
                  Menos unidades por área. Mais espaço entre elas. Arquitetura que conversa com o entorno em vez de ignorá-lo. Plantas projetadas para quem vai viver — não apenas investir.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://lancamento.invexo.com.br/wp-content/uploads/2025/12/lagom-pereque-porto-belo-001.jpg"
                alt="Lagom Opportunity"
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
            caption="Arquitetura contemporânea. Linhas limpas. Materiais naturais. Um projeto que não precisa se explicar."
          />
        </section>

        {/* 04 — BENEFÍCIOS */}
        <section className="py-32 px-8 md:px-24 bg-navy">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">04 — BENEFÍCIOS</span>
              <h2 className="text-7xl md:text-[8vw] leading-[0.8] uppercase reveal">O que define o Lagom.</h2>
            </div>

            <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
              {/* Benefit Items */}
              <div className="benefit-item flex flex-col gap-8">
                <Maximize2 className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Baixa densidade</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Menos unidades por área significa menos concorrência interna, mais privacidade e uma percepção de valor que o tempo consolida — não dilui.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <PenTool className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Arquitetura autoral</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Linguagem contemporânea com uso de materiais naturais e integração visual com o entorno. Um produto que não se confunde com nenhum outro na região.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Trees className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Integração real com a natureza</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Não é paisagismo decorativo. É um projeto que considera o ambiente como parte da experiência — não como plano de fundo.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Home className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Plantas para viver</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Múltiplas suítes, áreas sociais amplas, integração sala e cozinha, varandas generosas. O foco não é otimizar metros — é garantir que cada metro valha.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Compass className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Localização estratégica</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Inserido no bairro Perequê, dentro do eixo de expansão entre Itapema e Porto Belo — uma das regiões de maior crescimento estrutural do litoral catarinense.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <TrendingUp className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Valorização por escassez</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Em um mercado que adensa progressivamente, produtos de baixa densidade tornam-se cada vez mais raros. E o que é raro, valoriza de forma consistente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — CARROSSEL 02 — ÁREA PRIVATIVA */}
        <section className="w-full">
          <DevelopmentCarousel 
            images={PRIVATE_IMAGES} 
            caption="Espaços pensados para permanência. Para quem sabe a diferença entre um imóvel e um lugar."
          />
        </section>

        {/* 06 — PROPOSTA DE VALOR */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://i.postimg.cc/FF2k0y4b/LAGOM_ƒçº_ƒç_À_(1)_imagens_43.jpg"
                alt="Lagom Value Proposition"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold reveal mb-12 block">06 — PROPOSTA DE VALOR</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                Para quem este produto foi feito.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  O Lagom não foi projetado para especulação. Foi projetado para quem já entendeu que o valor real de um ativo está na sua capacidade de preservar capital — e oferecer qualidade de vida ao mesmo tempo.
                </p>
                <p>
                  É o produto certo para quem busca um ativo de longo prazo dentro de um mercado em expansão comprovada. Para quem valoriza exclusividade sem ostentação. Para quem quer morar bem — ou manter um patrimônio que o tempo trabalha a favor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CTA FINAL */}
        <section className="py-64 px-8 bg-navy text-center border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-[8vw] leading-[0.85] uppercase mb-12 font-bebas">
              Conheça o Lagom em detalhes.
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-60 max-w-3xl">
              Fale com a Vision Estates e receba todas as informações sobre condições, tipologias e disponibilidade.
            </p>
            
            <MagneticButton strength={0.3}>
              <a 
                href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20o%20Lagom%20Perequê"
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
