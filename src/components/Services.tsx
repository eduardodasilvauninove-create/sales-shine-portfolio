import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Lock, ShieldAlert, FileCheck, Users2, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Lock,
    title: "Privacidade e LGPD",
    items: [
      "Diagnóstico e análise de gaps (LGPD)",
      "Estruturação de processos e adequação regulatória",
      "Implementação de boas práticas de proteção de dados",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Gestão de Riscos e Segurança da Informação",
    items: [
      "Condução de gestão de riscos",
      "Estruturação e evolução do SGSI",
      "Avaliação de maturidade",
      "Roadmap de segurança",
    ],
  },
  {
    icon: FileCheck,
    title: "Governança e Compliance",
    items: [
      "Elaboração e revisão de políticas",
      "Auditoria interna em SGSI e SGPI",
      "Avaliação de aderência a normas (ISO 27K)",
    ],
  },
  {
    icon: Users2,
    title: "Terceiros e Fornecedores",
    items: [
      "Avaliação de fornecedores de TI",
      "Due diligence de parceiros críticos",
      "Gestão de riscos de terceiros",
      "Compliance de fornecedores",
    ],
  },
  {
    icon: GraduationCap,
    title: "Cultura e Conscientização",
    items: [
      "Treinamentos especializados em segurança",
      "Programas de conscientização organizacional",
      "Fortalecimento da cultura de segurança",
    ],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group p-7 rounded-2xl glass hover:border-primary/40 transition-all duration-300 h-full flex flex-col"
    >
      <motion.div
        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <service.icon className="w-7 h-7 text-primary" />
      </motion.div>
      <h3 className="text-lg font-semibold mb-4 leading-snug">{service.title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary mt-1">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="servicos" ref={ref} className="py-24 relative overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 bg-glow opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Soluções completas para <span className="text-gradient">proteger e gerar valor</span> ao seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atuamos em cinco frentes estratégicas para elevar a maturidade de segurança e compliance da sua organização.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
