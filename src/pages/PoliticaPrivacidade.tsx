import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Eye, Database, Share2, Trash2, FileText, Scale } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Introdução e Compromisso",
    text: "A 365s está comprometida com a proteção da privacidade e dos dados pessoais de todos os indivíduos com quem interagimos. Esta política descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD) – Lei nº 13.709/2018.",
  },
  {
    icon: Database,
    title: "Dados Coletados e Finalidade",
    text: "Coletamos apenas os dados pessoais necessários para a prestação de nossos serviços: nome, e-mail, telefone, dados profissionais e informações fornecidas voluntariamente em formulários de contato. Não realizamos coleta excessiva e a finalidade é sempre comunicada de forma transparente no momento da coleta.",
  },
  {
    icon: Eye,
    title: "Transparência e Direitos do Titular",
    text: "Respeitamos integralmente os direitos dos titulares previstos na LGPD: acesso, correção, anonimização, portabilidade, eliminação e revogação de consentimento. Você pode exercer seus direitos a qualquer momento entrando em contato pelo e-mail contato@365s.com.br.",
  },
  {
    icon: Lock,
    title: "Segurança no Tratamento",
    text: "Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra acessos não autorizados, vazamentos, alterações indevidas e destruição. Isso inclui criptografia, controles de acesso, monitoramento e auditorias periódicas.",
  },
  {
    icon: Share2,
    title: "Compartilhamento de Dados",
    text: "Não vendemos, alugamos ou comercializamos dados pessoais. O compartilhamento ocorre apenas quando necessário para a execução dos serviços contratados, sempre com parceiros que também observam a LGPD e mediante contratos com cláusulas de confidencialidade.",
  },
  {
    icon: Trash2,
    title: "Retenção e Exclusão",
    text: "Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir a finalidade do tratamento ou para atender obrigações legais e regulatórias. Após esse período, os dados são anonimizados ou eliminados de forma segura.",
  },
  {
    icon: Scale,
    title: "Encarregado de Dados (DPO)",
    text: "A 365s possui um encarregado de dados pessoais responsável por orientar a organização e interagir com titulares e a ANPD. Para questões sobre privacidade e proteção de dados, entre em contato pelo e-mail contato@365s.com.br.",
  },
];

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Política de <span className="text-gradient">Privacidade e Proteção de Dados</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Entenda como a 365s respeita sua privacidade e protege seus dados pessoais, em conformidade com a LGPD.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Final note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center text-sm text-muted-foreground pt-8"
              >
                <p>
                  Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação. Recomendamos consultar esta página regularmente.
                </p>
                <p className="mt-2">Última atualização: maio de 2026.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaPrivacidade;
