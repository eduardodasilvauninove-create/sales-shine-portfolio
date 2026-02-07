import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, Zap, Crown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const plans = [
  {
    name: "Básico",
    price: "R$999",
    priceNote: "pagamento único",
    description: "Perfeito para quem está começando",
    icon: Zap,
    features: [
      "Site institucional simples (1 a 3 páginas)",
      "Design responsivo",
      "Formulário de contato",
      "Integração com WhatsApp",
      "Otimização básica de velocidade",
      "SEO básico (títulos, descrição e indexação no Google)",
      "Avaliação personalizada de novas funcionalidades",
      "Suporte por 30 dias",
    ],
    indication: "profissionais autônomos, pequenos negócios locais, portfólios simples",
    popular: false,
  },
  {
    name: "Profissional",
    price: "Até R$1999",
    priceNote: "pagamento parcelado",
    description: "Para empresas que querem mais credibilidade e funcionalidades",
    icon: Sparkles,
    features: [
      "Site completo de até 7 páginas",
      "Design mais personalizado (identidade visual)",
      "Blog ou área de notícias",
      "Integração com redes sociais",
      "Formulários avançados (orçamento, cadastro, etc.)",
      "SEO intermediário",
      "Otimização de desempenho e segurança",
      "Integração com Google Analytics / Search Console",
      "Suporte estendido por 3 meses",
      "Avaliação personalizada de novas funcionalidades",
    ],
    indication: "pequenas e médias empresas, prestadores de serviço, clínicas, escritórios",
    popular: true,
  },
  {
    name: "Premium",
    price: "A partir de R$2999",
    priceNote: "pagamento parcelado",
    description: "Para quem quer performance, marketing e recursos avançados",
    icon: Crown,
    features: [
      "Site totalmente personalizado ou sistema web",
      "Páginas sob demanda",
      "Design exclusivo (UX/UI profissional)",
      "Área administrativa ou painel do cliente",
      "Loja virtual ou sistema de pagamentos",
      "SEO avançado",
      "Otimização máxima de velocidade e segurança",
      "Integração com APIs, CRM, automações e e-mail marketing",
      "Suporte prioritário",
      "Avaliação personalizada de novas funcionalidades",
    ],
    indication: "empresas maiores, e-commerce, startups e projetos sob medida",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Páginas incluídas", basic: "1 a 3", pro: "Até 7", premium: "Ilimitadas" },
  { feature: "Design responsivo", basic: true, pro: true, premium: true },
  { feature: "Formulário de contato", basic: true, pro: true, premium: true },
  { feature: "Integração WhatsApp", basic: true, pro: true, premium: true },
  { feature: "Design personalizado", basic: false, pro: true, premium: true },
  { feature: "Blog / Área de notícias", basic: false, pro: true, premium: true },
  { feature: "Integração redes sociais", basic: false, pro: true, premium: true },
  { feature: "Formulários avançados", basic: false, pro: true, premium: true },
  { feature: "Google Analytics", basic: false, pro: true, premium: true },
  { feature: "Área administrativa", basic: false, pro: false, premium: true },
  { feature: "Loja virtual / Pagamentos", basic: false, pro: false, premium: true },
  { feature: "Integração APIs / CRM", basic: false, pro: false, premium: true },
  { feature: "SEO", basic: "Básico", pro: "Intermediário", premium: "Avançado" },
  { feature: "Otimização de velocidade", basic: "Básica", pro: "Avançada", premium: "Máxima" },
  { feature: "Suporte", basic: "30 dias", pro: "3 meses", premium: "Prioritário" },
];

export const Pricing = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const renderComparisonValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
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
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{plan.priceNote}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="bg-muted/50 rounded-lg p-3 mb-6">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">👉 Indicado para:</span>{" "}
                    {plan.indication}
                  </p>
                </div>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={scrollToContact}
                >
                  Escolher Plano
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Tabela <span className="text-gradient">Comparativa</span>
          </h3>
          
          <div className="glass rounded-2xl overflow-hidden border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="text-foreground font-semibold">Recurso</TableHead>
                  <TableHead className="text-center text-foreground font-semibold">
                    <div className="flex flex-col items-center gap-1">
                      <Zap className="w-5 h-5 text-muted-foreground" />
                      <span>Básico</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-foreground font-semibold bg-primary/10">
                    <div className="flex flex-col items-center gap-1">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span>Profissional</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-foreground font-semibold">
                    <div className="flex flex-col items-center gap-1">
                      <Crown className="w-5 h-5 text-muted-foreground" />
                      <span>Premium</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className="border-border/30 hover:bg-muted/30"
                  >
                    <TableCell className="font-medium text-foreground/90">
                      {item.feature}
                    </TableCell>
                    <TableCell className="text-center">
                      {renderComparisonValue(item.basic)}
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      {renderComparisonValue(item.pro)}
                    </TableCell>
                    <TableCell className="text-center">
                      {renderComparisonValue(item.premium)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          * Todos os planos podem ser personalizados. A avaliação de novas funcionalidades pode gerar custos adicionais.
        </motion.p>
      </div>
    </section>
  );
};
