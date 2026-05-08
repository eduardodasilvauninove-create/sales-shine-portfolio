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
    question: "O que é Governança, Riscos e Compliance (GRC)?",
    answer:
      "GRC é a abordagem integrada para alinhar a gestão da governança corporativa, dos riscos e da conformidade às leis e normas. Aplicado à segurança da informação, garante que a organização atue de forma segura, ética e em conformidade com regulamentações como a LGPD e normas como a ISO 27001.",
  },
  {
    question: "Como funciona um diagnóstico de adequação à LGPD?",
    answer:
      "Realizamos um mapeamento dos tratamentos de dados pessoais, análise de gaps frente à LGPD, avaliação de processos, contratos e controles existentes. Ao final, entregamos um relatório com riscos identificados e um plano de ação priorizado para adequação.",
  },
  {
    question: "Quais portes de empresa a 365s atende?",
    answer:
      "Atendemos organizações de diferentes portes e setores. Nossas soluções são personalizadas conforme a maturidade, contexto e necessidades de cada cliente — de pequenas empresas iniciando sua jornada de conformidade a grandes corporações com programas avançados de SGSI/SGPI.",
  },
  {
    question: "Quanto tempo leva um projeto de adequação?",
    answer:
      "O prazo depende do escopo, complexidade e maturidade atual da organização. Projetos de diagnóstico inicial podem ser concluídos em poucas semanas, enquanto programas completos de implementação de SGSI ou adequação à LGPD costumam variar entre 3 e 12 meses.",
  },
  {
    question: "A 365s realiza certificação ISO 27001?",
    answer:
      "Não emitimos certificações — esse papel cabe a organismos certificadores acreditados. Nós preparamos sua organização para a certificação, estruturando o SGSI, políticas, controles e evidências necessárias para uma auditoria bem-sucedida.",
  },
  {
    question: "Como é feita a gestão de riscos de terceiros?",
    answer:
      "Avaliamos fornecedores e parceiros críticos por meio de questionários, due diligence, análise de controles e monitoramento contínuo. O objetivo é reduzir a exposição da sua organização a incidentes originados na cadeia de suprimentos.",
  },
  {
    question: "Vocês oferecem treinamentos para nossas equipes?",
    answer:
      "Sim. Realizamos treinamentos especializados em segurança da informação, LGPD, ISO 27001, gestão de riscos e programas de conscientização organizacional, adaptados ao público e à realidade de cada empresa.",
  },
  {
    question: "Como iniciar um projeto com a 365s?",
    answer:
      "Basta entrar em contato pelo formulário ou WhatsApp. Agendamos uma conversa inicial sem compromisso para entender seus desafios e propor o caminho mais adequado para sua organização.",
  },
];

export const FAQ = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços. Não encontrou o que procura? Fale conosco.
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
                transition={{ delay: index * 0.05 }}
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
