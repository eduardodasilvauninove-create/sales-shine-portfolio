import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";

const normas = [
  { code: "ISO 27001", label: "Sistema de Gestão de Segurança da Informação" },
  { code: "ISO 27701", label: "Sistema de Gestão de Privacidade da Informação" },
  { code: "LGPD", label: "Lei Geral de Proteção de Dados" },
  { code: "SGSI", label: "Estruturação e Evolução do SGSI" },
  { code: "SGPI", label: "Estruturação e Evolução do SGPI" },
  { code: "Gestão de Riscos", label: "Frameworks reconhecidos de mercado" },
];

export const Normas = () => {
  const scrollToContact = () =>
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="normas" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Normas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Conformidade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Aderência às principais <span className="text-gradient">normas e frameworks</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Atuamos alinhados aos principais referenciais internacionais e
              melhores práticas do mercado.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {normas.map((n, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-4 flex items-start gap-3"
                >
                  <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">{n.code}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{n.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass rounded-2xl p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para elevar sua segurança ao{" "}
                <span className="text-gradient">próximo nível?</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Agende uma conversa e descubra como a 365s pode transformar a
                maturidade de segurança da sua organização.
              </p>
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Falar com Especialista
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
