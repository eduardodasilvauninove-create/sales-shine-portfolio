import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, AlertTriangle, ClipboardCheck, FileSearch } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";
import bannerImg from "@/assets/365s-linkedin-banner.png";

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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-24">
      <FloatingParticles />

      <motion.div style={{ y }} className="absolute inset-0 bg-glow opacity-50" />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute inset-0 opacity-[0.07]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"
      />

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4"
            >
              Consultoria especializada em GRC, Auditoria e Segurança da Informação
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Mais que segurança:{" "}
              <span className="text-gradient">governança, risco e conformidade</span>{" "}
              <span className="whitespace-nowrap">365 dias.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Apoiamos organizações na evolução contínua da segurança da informação,
              governança, riscos e proteção de dados — todos os dias do ano.
            </motion.p>

            {/* Quatro pilares — espelham o banner do LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-xl"
            >
              {[
                { icon: Landmark, label: "GOVERNANÇA", desc: "Estratégia e políticas que geram valor." },
                { icon: AlertTriangle, label: "RISCOS", desc: "Identificação, avaliação e mitigação contínua." },
                { icon: ClipboardCheck, label: "COMPLIANCE", desc: "Conformidade, normas e regulamentações." },
                { icon: FileSearch, label: "AUDITORIA", desc: "Transparência, controles e melhoria contínua." },
              ].map((p, i) => (
                <div key={i} className="glass rounded-lg p-3">
                  <p.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-[11px] font-bold tracking-wider">{p.label}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight mt-1">{p.desc}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" onClick={() => scrollTo("contato")}>
                Falar com Especialista
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => scrollTo("servicos")}>
                Conhecer Serviços
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual lado direito — banner oficial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden glass shadow-glow">
              <img
                src={bannerImg}
                alt="365s · Governança, Riscos, Compliance e Auditoria"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Faixa de valores — espelha o rodapé do banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          {["Estratégia", "Inovação", "Confiança", "Continuidade"].map((w, i, arr) => (
            <span key={w} className="flex items-center gap-6">
              <span>{w}</span>
              {i < arr.length - 1 && <span className="text-primary">·</span>}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
