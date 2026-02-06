import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Globe, Rocket, Shield, Smartphone, Search, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Represente sua empresa com um site profissional que transmite credibilidade e conquista clientes.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Seu site perfeito em qualquer dispositivo: desktop, tablet ou smartphone.",
  },
  {
    icon: Rocket,
    title: "Alta Performance",
    description: "Sites rápidos que carregam em segundos, melhorando experiência e conversões.",
  },
  {
    icon: Search,
    title: "Otimização SEO",
    description: "Apareça nas primeiras posições do Google e seja encontrado por mais clientes.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Certificado SSL, proteção contra ataques e backups automáticos inclusos.",
  },
  {
    icon: Zap,
    title: "Suporte Dedicado",
    description: "Atendimento humanizado e suporte técnico para você nunca ficar na mão.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300"
    >
      <motion.div 
        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <service.icon className="w-6 h-6 text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-muted-foreground">{service.description}</p>
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
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-glow opacity-30" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Por que escolher <span className="text-gradient">nossos serviços?</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Oferecemos soluções completas para sua presença digital, 
            com foco em resultados e satisfação total.
          </motion.p>
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
