import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Landmark,
  AlertTriangle,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";
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

      {/* Circuit grid background — espelha o banner */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute inset-0 opacity-[0.08]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/15 blur-3xl animate-float"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-float"
      />

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo + Wordmark — espelha a faixa superior do banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10"
          >
            {/* Shield com 365 + check */}
            <div className="relative">
              <svg
                viewBox="0 0 120 140"
                className="w-24 h-28 md:w-28 md:h-32 drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              >
                <defs>
                  <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d="M60 5 L110 25 V70 C110 100 88 125 60 135 C32 125 10 100 10 70 V25 Z"
                  fill="url(#shieldGrad)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                <text
                  x="60"
                  y="68"
                  textAnchor="middle"
                  className="fill-foreground"
                  style={{ fontSize: 30, fontWeight: 800, letterSpacing: -1 }}
                >
                  365
                </text>
              </svg>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[hsl(var(--brand-check))] flex items-center justify-center shadow-[0_0_15px_hsl(var(--brand-check)/0.6)]">
                <Check className="w-4 h-4 text-white" strokeWidth={4} />
              </span>
            </div>

            {/* Wordmark */}
            <div className="text-center sm:text-left">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                <span className="text-foreground">365</span>
                <span className="text-gradient italic">s</span>
              </h1>
              <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-md">
                Mais que segurança:{" "}
                <span className="text-foreground font-medium">
                  governança, risco e conformidade
                </span>{" "}
                <span className="text-primary font-semibold">365 dias.</span>
              </p>
            </div>
          </motion.div>

          {/* 4 pilares — espelham a faixa inferior do banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Landmark,
                label: "GOVERNANÇA",
                desc: "Estratégia e políticas que geram valor.",
              },
              {
                icon: AlertTriangle,
                label: "RISCOS",
                desc: "Identificação, avaliação e mitigação contínua.",
              },
              {
                icon: ClipboardCheck,
                label: "COMPLIANCE",
                desc: "Conformidade, normas e regulamentações.",
              },
              {
                icon: FileSearch,
                label: "AUDITORIA",
                desc: "Transparência, controles e melhoria contínua.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="glass rounded-xl p-4 border-t-2 border-t-primary/60 hover:border-t-primary transition-colors"
              >
                <p.icon className="w-6 h-6 text-primary mb-2" />
                <div className="text-xs font-bold tracking-wider text-foreground">
                  {p.label}
                </div>
                <div className="text-[11px] text-muted-foreground leading-snug mt-1">
                  {p.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" onClick={() => scrollTo("contato")}>
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" onClick={() => scrollTo("servicos")}>
              Conhecer Serviços
            </Button>
          </motion.div>

          {/* Faixa de valores — espelha o rodapé do banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-12 pt-6 border-t border-primary/20 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            {["Estratégia", "Inovação", "Confiança", "Continuidade"].map((w, i, arr) => (
              <span key={w} className="flex items-center gap-8">
                <span>{w}</span>
                {i < arr.length - 1 && <span className="text-primary">·</span>}
              </span>
            ))}
          </motion.div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Consultoria especializada em GRC, Auditoria e Segurança da Informação
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
