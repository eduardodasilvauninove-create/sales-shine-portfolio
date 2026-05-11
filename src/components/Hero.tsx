import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-24"
    >
      <FloatingParticles />
      <motion.div style={{ y }} className="absolute inset-0 bg-glow opacity-50" />

      {/* Circuit grid background — identidade tech do banner 365s */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Escudo 365 — recriado em SVG seguindo a identidade do banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <svg
              viewBox="0 0 200 240"
              className="w-32 md:w-40 lg:w-48 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              aria-label="Escudo 365s"
            >
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(200 90% 35%)" />
                </linearGradient>
                <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M100 10 L185 40 L185 130 C185 180 145 215 100 230 C55 215 15 180 15 130 L15 40 Z"
                fill="url(#shieldGrad)"
                stroke="url(#shieldStroke)"
                strokeWidth="2"
              />
              <text
                x="100"
                y="135"
                textAnchor="middle"
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight="800"
                fontSize="64"
                fill="white"
                letterSpacing="-2"
              >
                365
              </text>
            </svg>
            {/* Check verde no canto inferior do escudo */}
            <div className="absolute -bottom-2 right-2 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--brand-check))] flex items-center justify-center ring-4 ring-background shadow-lg">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
            </div>
          </motion.div>

          {/* Wordmark 365s — tipografia forte com "s" em itálico/gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-extrabold tracking-tight leading-none text-6xl md:text-7xl lg:text-8xl text-foreground"
          >
            365<span className="italic text-gradient font-black">s</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl"
          >
            Mais que segurança:{" "}
            <span className="text-primary font-semibold">
              governança, risco e conformidade
            </span>{" "}
            365 dias.
          </motion.p>

          {/* Faixa de valores */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-[11px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground/80"
          >
            Estratégia <span className="text-primary mx-2">·</span> Inovação
            <span className="text-primary mx-2">·</span> Confiança
            <span className="text-primary mx-2">·</span> Continuidade
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button variant="hero" size="xl" onClick={() => scrollTo("contato")}>
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" onClick={() => scrollTo("servicos")}>
              Conhecer Serviços
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
