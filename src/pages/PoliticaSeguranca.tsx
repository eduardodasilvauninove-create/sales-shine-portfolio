import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, UserCheck, Server, RefreshCw } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Compromisso com a Segurança",
    text: "A 365s reconhece que a segurança da informação é fundamental para a continuidade dos negócios dos nossos clientes e para a manutenção da confiança depositada em nós. Adotamos uma postura proativa na identificação, tratamento e mitigação de riscos relacionados à informação.",
  },
  {
    icon: Lock,
    title: "Confidencialidade",
    text: "Todas as informações recebidas ou geradas durante nossos trabalhos são tratadas como estritamente confidenciais. Utilizamos criptografia em trânsito (TLS 1.2+) e em repouso, além de controles de acesso baseados em necessidade de conhecimento (need-to-know).",
  },
  {
    icon: FileCheck,
    title: "Integridade dos Dados",
    text: "Implementamos controles técnicos e processuais para garantir a precisão e completude das informações. Realizamos backups regulares, validações de consistência e mantemos logs de auditoria de todas as operações críticas.",
  },
  {
    icon: Server,
    title: "Disponibilidade",
    text: "Nossos sistemas e infraestrutura são projetados com redundância e planos de recuperação de desastres. Monitoramos continuamente a disponibilidade dos serviços e temos SLAs claros com nossos fornecedores de infraestrutura.",
  },
  {
    icon: UserCheck,
    title: "Conscientização e Treinamento",
    text: "Nossos colaboradores recebem treinamento contínuo em segurança da informação, incluindo conscientização sobre phishing, engenharia social, boas práticas de senhas e manipulação segura de dados sensíveis.",
  },
  {
    icon: RefreshCw,
    title: "Melhoria Contínua",
    text: "A política de segurança da informação da 365s é revisada periodicamente e aprimorada com base em auditorias internas, feedbacks de incidentes e evolução das ameaças. Estamos sempre em busca de elevar nosso nível de maturidade.",
  },
];

const PoliticaSeguranca = () => {
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
                Política de <span className="text-gradient">Segurança da Informação</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Conheça os princípios e práticas que guiam a 365s na proteção das informações que nos são confiadas.
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
                  Para dúvidas ou solicitações relacionadas à segurança da informação, entre em contato pelo e-mail{" "}
                  <a href="mailto:contato@365s.com.br" className="text-primary hover:underline">
                    contato@365s.com.br
                  </a>
                  .
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

export default PoliticaSeguranca;
