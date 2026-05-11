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

      {/* Circuit grid background */}
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
        <div className="max-w-6xl mx-auto">
          {/* Layout horizontal: escudo à esquerda + wordmark/tagline à direita */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Escudo 365 com check */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative shrink-0"
            >
              <svg
                viewBox="0 0 200 240"
                className="w-28 md:w-36 lg:w-44 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
                aria-label="Escudo 365"
              >
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(200 90% 35%)" />
                  </linearGradient>
                </defs>
                <path
                  d="M100 10 L185 40 L185 130 C185 180 145 215 100 230 C55 215 15 180 15 130 L15 40 Z"
                  fill="url(#shieldGrad)"
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />
                <text
                  x="100"
                  y="138"
                  textAnchor="middle"
                  fontFamily="Inter, system-ui, sans-serif"
                  fontWeight="800"
                  fontSize="62"
                  fill="white"
                  letterSpacing="-2"
                >
                  365
                </text>
              </svg>
              <div className="absolute bottom-1 right-0 md:right-2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[hsl(var(--brand-check))] flex items-center justify-center ring-4 ring-background shadow-lg">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={3} />
              </div>
            </motion.div>

            {/* Divisor vertical decorativo (md+) */}
            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

            {/* Wordmark + headline + subheadline */}
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-extrabold tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-6xl text-foreground"
              >
                Mais que segurança:<br />
                governança, risco e conformidade{" "}
                <span className="text-gradient">365 dias</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl"
              >
                Ajudamos empresas a fortalecer sua segurança da informação,
                privacidade, compliance e gestão de riscos.
              </motion.p>
            </div>
          </div>

          {/* Faixa de valores */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center text-[11px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground/80"
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
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button variant="hero" size="xl" onClick={() => scrollTo("contato")}>
              Solicitar Diagnóstico
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
