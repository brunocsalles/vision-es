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
  MapPin, 
  Building2, 
  Layout, 
  Waves, 
  Leaf, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GENERAL_IMAGES = [
  'https://i.postimg.cc/0ND9Rw3R/Vivatalk-Inc31-CLIENTE-imagens-0.jpg',
  'https://i.postimg.cc/xCPYqSnK/Vivatalk-Inc31-CLIENTE-imagens-10.jpg',
  'https://i.postimg.cc/cHcZ6N0M/Vivatalk-Inc31-CLIENTE-imagens-11.jpg',
  'https://i.postimg.cc/vBvMDdb3/Vivatalk-Inc31-CLIENTE-imagens-12.jpg',
  'https://i.postimg.cc/ZRLZ0h4w/Vivatalk-Inc31-CLIENTE-imagens-13.jpg',
  'https://i.postimg.cc/8cPG6nCg/Vivatalk-Inc31-CLIENTE-imagens-14.jpg',
  'https://i.postimg.cc/SRN4MtKF/Vivatalk-Inc31-CLIENTE-imagens-15.jpg',
  'https://i.postimg.cc/bY3ph86q/Vivatalk-Inc31-CLIENTE-imagens-19.jpg',
  'https://i.postimg.cc/zfKqZgM5/Vivatalk-Inc31-CLIENTE-imagens-2.jpg',
  'https://i.postimg.cc/3JN7r66G/Vivatalk-Inc31-CLIENTE-imagens-20.jpg',
  'https://i.postimg.cc/RVYmWd5k/Vivatalk-Inc31-CLIENTE-imagens-22.jpg',
  'https://i.postimg.cc/024vzn1R/Vivatalk-Inc31-CLIENTE-imagens-23.jpg',
  'https://i.postimg.cc/5NrJXgWW/Vivatalk-Inc31-CLIENTE-imagens-24.jpg',
  'https://i.postimg.cc/wTrz12Yp/Vivatalk-Inc31-CLIENTE-imagens-25.jpg',
  'https://i.postimg.cc/xTZQX5Vf/Vivatalk-Inc31-CLIENTE-imagens-26.jpg',
  'https://i.postimg.cc/Fs6vYpXK/Vivatalk-Inc31-CLIENTE-imagens-27.jpg',
  'https://i.postimg.cc/g26W8hGp/Vivatalk-Inc31-CLIENTE-imagens-28.jpg',
  'https://i.postimg.cc/x1b2Mm9S/Vivatalk-Inc31-CLIENTE-imagens-29.jpg',
  'https://i.postimg.cc/k5K73bZM/Vivatalk-Inc31-CLIENTE-imagens-3.jpg',
  'https://i.postimg.cc/Vkb8ntzS/Vivatalk-Inc31-CLIENTE-imagens-30.jpg',
  'https://i.postimg.cc/pLnHzjP5/Vivatalk-Inc31-CLIENTE-imagens-31.jpg',
  'https://i.postimg.cc/DwbTLG7X/Vivatalk-Inc31-CLIENTE-imagens-32.jpg',
  'https://i.postimg.cc/fR0NmdM0/Vivatalk-Inc31-CLIENTE-imagens-33.jpg',
  'https://i.postimg.cc/P58jYDdz/Vivatalk-Inc31-CLIENTE-imagens-34.jpg',
  'https://i.postimg.cc/N0qw4002/Vivatalk-Inc31-CLIENTE-imagens-35.jpg',
  'https://i.postimg.cc/VNQcRNNr/Vivatalk-Inc31-CLIENTE-imagens-36.jpg',
  'https://i.postimg.cc/wB8dVBBN/Vivatalk-Inc31-CLIENTE-imagens-37.jpg',
  'https://i.postimg.cc/VNQcRNN9/Vivatalk-Inc31-CLIENTE-imagens-38.jpg',
  'https://i.postimg.cc/jj0rXjjX/Vivatalk-Inc31-CLIENTE-imagens-39.jpg',
  'https://i.postimg.cc/CKkwTqtx/Vivatalk-Inc31-CLIENTE-imagens-4.jpg',
  'https://i.postimg.cc/0NRqfNNn/Vivatalk-Inc31-CLIENTE-imagens-40.jpg',
  'https://i.postimg.cc/KYSyNYYp/Vivatalk-Inc31-CLIENTE-imagens-41.jpg',
  'https://i.postimg.cc/VNQcRN6Q/Vivatalk-Inc31-CLIENTE-imagens-42.jpg',
  'https://i.postimg.cc/vmrwSd1S/Vivatalk-Inc31-CLIENTE-imagens-43.jpg',
  'https://i.postimg.cc/TPVvHXys/Vivatalk-Inc31-CLIENTE-imagens-44.jpg',
  'https://i.postimg.cc/cJRG5NKj/Vivatalk-Inc31-CLIENTE-imagens-45.jpg',
  'https://i.postimg.cc/pdfM1thx/Vivatalk-Inc31-CLIENTE-imagens-46.jpg',
  'https://i.postimg.cc/TPVvHXL6/Vivatalk-Inc31-CLIENTE-imagens-47.jpg',
  'https://i.postimg.cc/KYPhsykY/Vivatalk-Inc31-CLIENTE-imagens-48.jpg',
];

const PRIVATE_IMAGES = [
  'https://i.postimg.cc/0NY1HqMy/Vivatalk-Inc31-CLIENTE-imagens-49.jpg',
  'https://i.postimg.cc/wvzg6B8p/Vivatalk-Inc31-CLIENTE-imagens-5.jpg',
  'https://i.postimg.cc/QtjG2n1X/Vivatalk-Inc31-CLIENTE-imagens-50.jpg',
  'https://i.postimg.cc/nznbywBF/Vivatalk-Inc31-CLIENTE-imagens-51.jpg',
  'https://i.postimg.cc/sX3dk07X/Vivatalk-Inc31-CLIENTE-imagens-52.jpg',
  'https://i.postimg.cc/V6zQxHn5/Vivatalk-Inc31-CLIENTE-imagens-53.jpg',
  'https://i.postimg.cc/cHdyp5wg/Vivatalk-Inc31-CLIENTE-imagens-54.jpg',
  'https://i.postimg.cc/rmqXBYx4/Vivatalk-Inc31-CLIENTE-imagens-55.jpg',
  'https://i.postimg.cc/TwTMzHgm/Vivatalk-Inc31-CLIENTE-imagens-56.jpg',
  'https://i.postimg.cc/FRh5Mn30/Vivatalk-Inc31-CLIENTE-imagens-57.jpg',
  'https://i.postimg.cc/zBqZsPKC/Vivatalk-Inc31-CLIENTE-imagens-58.jpg',
  'https://i.postimg.cc/9Mc56NZY/Vivatalk-Inc31-CLIENTE-imagens-59.jpg',
  'https://i.postimg.cc/ydKsVN4s/Vivatalk-Inc31-CLIENTE-imagens-6.jpg',
  'https://i.postimg.cc/sX3dk07J/Vivatalk-Inc31-CLIENTE-imagens-60.jpg',
  'https://i.postimg.cc/gJGFCB84/Vivatalk-Inc31-CLIENTE-imagens-61.jpg',
  'https://i.postimg.cc/cHTy0MBM/Vivatalk-Inc31-CLIENTE-imagens-62.jpg',
  'https://i.postimg.cc/G2zwdJxx/Vivatalk-Inc31-CLIENTE-imagens-63.jpg',
  'https://i.postimg.cc/pTkbRYBN/Vivatalk-Inc31-CLIENTE-imagens-64.jpg',
  'https://i.postimg.cc/bJLcpHRc/Vivatalk-Inc31-CLIENTE-imagens-65.jpg',
  'https://i.postimg.cc/wMvKvyWY/Vivatalk-Inc31-CLIENTE-imagens-66.jpg',
  'https://i.postimg.cc/HnxGxcSs/Vivatalk-Inc31-CLIENTE-imagens-67.jpg',
  'https://i.postimg.cc/T1w8wLkh/Vivatalk-Inc31-CLIENTE-imagens-68.jpg',
  'https://i.postimg.cc/gjJ9JXML/Vivatalk-Inc31-CLIENTE-imagens-69.jpg',
  'https://i.postimg.cc/KzbxZYS1/Vivatalk-Inc31-CLIENTE-imagens-7.jpg',
  'https://i.postimg.cc/ZnRkRBfd/Vivatalk-Inc31-CLIENTE-imagens-70.jpg',
  'https://i.postimg.cc/sx0kZj8X/Vivatalk-Inc31-CLIENTE-imagens-71.jpg',
  'https://i.postimg.cc/HnPq7YKV/Vivatalk-Inc31-CLIENTE-imagens-72.jpg',
  'https://i.postimg.cc/4yFDhfM7/Vivatalk-Inc31-CLIENTE-imagens-73.jpg',
  'https://i.postimg.cc/5ykhF4Gv/Vivatalk-Inc31-CLIENTE-imagens-74.jpg',
  'https://i.postimg.cc/Kjs6gGVt/Vivatalk-Inc31-CLIENTE-imagens-75.jpg',
  'https://i.postimg.cc/1XYkNmTG/Vivatalk-Inc31-CLIENTE-imagens-76.jpg',
  'https://i.postimg.cc/PJFg8XcQ/Vivatalk-Inc31-CLIENTE-imagens-77.jpg',
  'https://i.postimg.cc/90N6qmS1/Vivatalk-Inc31-CLIENTE-imagens-78.jpg',
  'https://i.postimg.cc/vTSJ6Yj0/Vivatalk-Inc31-CLIENTE-imagens-79.jpg',
  'https://i.postimg.cc/k4Cqn536/Vivatalk-Inc31-CLIENTE-imagens-8.jpg',
  'https://i.postimg.cc/MHrCj64s/Vivatalk-Inc31-CLIENTE-imagens-80.jpg',
  'https://i.postimg.cc/0jHTJk34/Vivatalk-Inc31-CLIENTE-imagens-81.jpg',
  'https://i.postimg.cc/vBybQmFf/Vivatalk-Inc31-CLIENTE-imagens-9.jpg',
];

export default function VerticePage() {
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
              src="https://classic.exame.com/wp-content/uploads/2022/06/vokkan-viva-park-porto-belo.jpg?quality=70&strip=info"
              alt="Vértice VivaPark"
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
              01 — VÉRTICE VIVAPARK
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[7vw] md:text-[5vw] leading-[0.85] uppercase font-bebas tracking-tighter mb-16"
            >
              No centro de tudo. <span className="text-gold">Literalmente.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-2xl md:text-4xl text-white/80 leading-tight max-w-4xl font-light tracking-wide mx-auto"
            >
              Em frente ao mercado gastronômico e ao parque Viva Energia, o Vértice é o único onde morar, trabalhar e viver bem acontecem no mesmo endereço.
            </motion.p>
          </div>
        </section>

        {/* 02 — OPORTUNIDADE */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">02 — OPORTUNIDADE</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                Centralidade não é apenas localização. É liquidez.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  O VivaPark cresce em todas as direções — e o Vértice está no ponto de convergência desse crescimento. Inspirado na arquitetura de uso misto de Copenhagen, o empreendimento foi posicionado estrategicamente em frente ao coração do ecossistema.
                </p>
                <p className="text-navy font-medium">
                  Quem compra no Vértice compra a posição mais vantajosa dentro de um bairro planejado em expansão.
                </p>
                <p>
                  Em mercados que crescem por estrutura, os ativos mais centrais são também os mais líquidos. A obra já está em andamento, com entrega prevista para junho de 2027.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXvZbXvZ-jN5x_04yiAIY9giAnEmD6EcXjA&s"
                alt="Vertice Opportunity"
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
            caption="Arquitetura assinada por Nicholas Alencar. Construção pelo Grupo Torresani — mais de 35 anos de trajetória. Certificação LEED em andamento."
          />
        </section>

        {/* 04 — BENEFÍCIOS */}
        <section className="py-32 px-8 md:px-24 bg-navy">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold mb-12 block reveal">04 — BENEFÍCIOS</span>
              <h2 className="text-7xl md:text-[8vw] leading-[0.8] uppercase reveal">O que define o Vértice.</h2>
            </div>

            <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
              {/* Benefit Items */}
              <div className="benefit-item flex flex-col gap-8">
                <MapPin className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Localização central</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Em frente ao parque Viva Energia e ao mercado gastronômico. Áreas verdes, lago, coworking e gastronomia a menos de um minuto a pé.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Building2 className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Cidade compacta</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Inspirado em Copenhagen, integra moradia, trabalho e vida social. Uma tendência global que reduz deslocamentos e eleva a qualidade de vida.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Layout className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Tipologias versáteis</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Studios de 31m² a duplexes de 161m² com piscina privativa e terraço. A mesma lógica de valor aplicada em diferentes escalas de moradia.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Waves className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Lazer extraordinário</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Pub, wine bar, piscina aquecida, estúdio de música e espaço games. Um programa pensado para quem usa, não apenas para quem visita.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <Leaf className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Certificação LEED</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Sustentabilidade internacional que agrega valor real e atrai um perfil de comprador e locatário cada vez mais consciente e relevante.
                </p>
              </div>

              <div className="benefit-item flex flex-col gap-8">
                <ShieldCheck className="w-16 h-16 text-gold" strokeWidth={1} />
                <h3 className="text-4xl uppercase font-bebas">Histórico comprovado</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  Grupo Torresani — 35 anos de atuação e 5.000 imóveis entregues. Obra iniciada com estrutura e alvenarias já concluídas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — CARROSSEL 02 — ÁREA PRIVATIVA */}
        <section className="w-full">
          <DevelopmentCarousel 
            images={PRIVATE_IMAGES} 
            caption="Espaços que integram. Plantas que respeitam quem vai morar. Do studio ao duplex, a mesma atenção ao detalhe."
          />
        </section>

        {/* 06 — PROPOSTA DE VALOR */}
        <section className="py-32 bg-white text-navy overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
            <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-0 reveal">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5CtUhLZ_cxORoaD7EYIpjG526_W1hIVTqw&s"
                alt="Vertice Value Proposition"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 px-8 md:px-24 flex flex-col justify-center">
              <span className="text-2xl uppercase tracking-[0.5em] text-gold reveal mb-12 block">06 — PROPOSTA DE VALOR</span>
              <h2 className="text-6xl md:text-[5vw] leading-[0.9] uppercase reveal mb-12">
                O ativo que cresce junto com o bairro.
              </h2>
              <div className="flex flex-col gap-12 text-2xl md:text-3xl leading-relaxed text-navy/70 reveal">
                <p>
                  O VivaPark está projetado para movimentar R$ 25 bilhões até 2047. O Vértice não apenas se beneficia desse crescimento — ele está no epicentro dele.
                </p>
                <p>
                  Para o investidor, é o produto com maior liquidez: unidades compactas, uso misto e uma posição geográfica que nenhum outro empreendimento replica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CTA FINAL */}
        <section className="py-64 px-8 bg-navy text-center border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-[8vw] leading-[0.85] uppercase mb-12 font-bebas">
              Conheça o Vértice em detalhe.
            </h2>
            <p className="text-2xl md:text-3xl mb-16 opacity-60 max-w-3xl">
              Fale com a Vision Estates e receba todas as informações sobre condições, tipologias e disponibilidade.
            </p>
            
            <MagneticButton strength={0.3}>
              <a 
                href="https://wa.me/5555984114969?text=Oi%20Pedro!%20Quero%20saber%20mais%20sobre%20o%20Vértice"
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
