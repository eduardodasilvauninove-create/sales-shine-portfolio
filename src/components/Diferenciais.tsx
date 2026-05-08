import { motion } from "framer-motion";
import { Award, UserCheck, TrendingUp, BarChart3 } from "lucide-react";

const diferenciais = [
  {
    icon: Award,
    title: "Especialização técnica",
    text: "Equipe especializada em LGPD, ISO 27001 e gestão de riscos com atuação 365 dias por ano.",
  },
  {
    icon: UserCheck,
    title: "Abordagem personalizada",
    text: "Soluções desenhadas para o contexto, maturidade e setor de cada organização.",
  },
  {
    icon: TrendingUp,
    title: "Visão estratégica",
    text: "Conectamos compliance e segurança à estratégia de negócio, gerando valor real.",
  },
  {
    icon: BarChart3,
    title: "Resultados mensuráveis",
    text: "Entregas com indicadores claros de evolução da postura de segurança.",
  },
];

export const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Por que a <span className="text-gradient">365s</span> é a parceira ideal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {diferenciais.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
