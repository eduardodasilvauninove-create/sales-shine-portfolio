import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-24"
    >
      <FloatingParticles />
      <motion.div style={{ y }} className="absolute inset-0 bg-glow opacity-50" />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/15 blur-3xl animate-float"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-float"
      />

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Banner oficial 365s — idêntico à identidade visual do LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-2xl overflow-hidden shadow-glow ring-1 ring-primary/20"
          >
            <img
              src={bannerImg}
              alt="365s — Consultoria especializada em GRC, Auditoria e Segurança da Informação. Governança, Riscos, Compliance e Auditoria 365 dias."
              className="w-full h-auto block"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
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
