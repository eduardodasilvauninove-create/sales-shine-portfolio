import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "997",
    description: "Perfeito para quem está começando",
    icon: Zap,
    features: [
      "Site de até 3 páginas",
      "Design responsivo",
      "Otimização básica SEO",
      "Formulário de contato",
      "Hospedagem por 1 ano",
      "Suporte por email",
    ],
    popular: false,
  },
  {
    name: "Profissional",
    price: "1.997",
    description: "O mais escolhido pelos nossos clientes",
    icon: Sparkles,
    features: [
      "Site de até 7 páginas",
      "Design premium responsivo",
      "Otimização avançada SEO",
      "Integração WhatsApp",
      "Blog integrado",
      "Hospedagem por 1 ano",
      "Suporte prioritário",
      "Analytics configurado",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "3.497",
    description: "Solução completa para empresas",
    icon: Crown,
    features: [
      "Site ilimitado de páginas",
      "Design exclusivo",
      "SEO completo + ADS",
      "E-commerce integrado",
      "Painel administrativo",
      "Hospedagem por 2 anos",
      "Suporte 24/7 dedicado",
      "Manutenção mensal",
      "Relatórios mensais",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="precos" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos e <span className="text-gradient">Preços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem design moderno,
            performance otimizada e suporte dedicado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "glass-strong border-primary/50 scale-105"
                  : "glass border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                    plan.popular
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <plan.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">pagamento único</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
                onClick={scrollToContact}
              >
                Escolher Plano
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          * Todos os planos podem ser personalizados. Entre em contato para um orçamento sob medida.
        </motion.p>
      </div>
    </section>
  );
};
