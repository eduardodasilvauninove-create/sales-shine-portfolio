import { motion } from "framer-motion";
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

export const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher <span className="text-gradient">nossos serviços?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para sua presença digital, 
            com foco em resultados e satisfação total.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
