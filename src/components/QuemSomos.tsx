import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";

export const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              A 365s é a sua parceira em <span className="text-gradient">Governança, Riscos e Compliance</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Somos uma consultoria especializada em segurança da informação,
              privacidade de dados e gestão de riscos. Atuamos 365 dias por ano
              ao lado de organizações que buscam transformar conformidade em
              vantagem competitiva.
            </p>
            <p className="text-muted-foreground">
              Combinamos expertise técnica em normas internacionais com uma
              visão estratégica de negócio, entregando soluções sob medida
              para o contexto e a maturidade de cada cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {[
              {
                icon: Target,
                title: "Missão",
                text: "Apoiar organizações na evolução contínua da segurança da informação e proteção de dados.",
              },
              {
                icon: Eye,
                title: "Visão",
                text: "Ser referência em consultoria de GRC, conectando compliance e segurança à estratégia de negócio.",
              },
              {
                icon: Compass,
                title: "Valores",
                text: "Especialização técnica, ética, abordagem personalizada e foco em resultados mensuráveis.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
