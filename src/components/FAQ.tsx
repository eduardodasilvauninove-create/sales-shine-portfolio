import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quanto tempo leva para criar meu site?",
    answer:
      "O prazo varia de acordo com o plano escolhido e a complexidade do projeto. Sites básicos são entregues em até 7 dias úteis, enquanto projetos mais elaborados podem levar de 15 a 30 dias. Sempre mantemos você informado sobre o progresso.",
  },
  {
    question: "Preciso fornecer o conteúdo do site?",
    answer:
      "Sim, você precisará fornecer textos, logotipo e imagens do seu negócio. Caso não tenha imagens profissionais, podemos utilizar bancos de imagens de alta qualidade. Também oferecemos serviço de redação de textos por um valor adicional.",
  },
  {
    question: "O site será responsivo (adaptado para celular)?",
    answer:
      "Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em qualquer dispositivo - computadores, tablets e smartphones.",
  },
  {
    question: "Está incluso a hospedagem do site?",
    answer:
      "Não, nós deixamos o controle da hospedagem e domínio para o cliente. Deverá ser assinado os serviços de registro de domínio e hospedagem e prestaremos todo o suporte necessário para as assinaturas destes serviços.",
  },
  {
    question: "Posso fazer alterações no site depois de pronto?",
    answer:
      "Claro! Oferecemos um período de 30 dias para pequenas alterações após a entrega. Para alterações maiores ou contínuas, temos planos de manutenção mensal que garantem suporte dedicado.",
  },
  {
    question: "O site terá boa posição no Google?",
    answer:
      "Sim! Todos os sites são desenvolvidos seguindo as melhores práticas de SEO (otimização para buscadores). Isso inclui estrutura otimizada, velocidade de carregamento, meta tags e muito mais. Planos superiores incluem estratégias avançadas de SEO.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Trabalhamos com 50% de entrada para iniciar o projeto e 50% na entrega final. Aceitamos PIX, transferência bancária e cartão de crédito em até 3x sem juros.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Trabalhamos com aprovação por etapas, então você acompanha todo o processo. Oferecemos até 3 rodadas de revisão em cada etapa para garantir sua satisfação. Nosso objetivo é entregar exatamente o que você imagina!",
  },
];

export const FAQ = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços. Não encontrou o que procura?
            Entre em contato conosco!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium text-foreground">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
