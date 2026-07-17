import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  FileText,
  Calendar,
  DollarSign,
  MessageCircle,
  Layers,
  Lock,
  Scale,
  Sparkles,
} from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const valores = [
  {
    icon: Users,
    title: "Parceria Estratégica em GRC",
    text: "Atuamos como extensão do seu time, integrando Governança, Riscos e Compliance ao dia a dia do negócio.",
  },
  {
    icon: Calendar,
    title: "Acompanhamento 365 Dias",
    text: "Suporte contínuo ao longo do ano, com evolução medida em indicadores de maturidade.",
  },
  {
    icon: TrendingUp,
    title: "Transformação da Conformidade",
    text: "Conformidade deixa de ser custo e passa a ser vantagem competitiva e habilitador de novos negócios.",
  },
  {
    icon: Target,
    title: "Foco em Maturidade",
    text: "Evolução gradual e sustentável baseada em frameworks reconhecidos (ISO 27001, NIST, LGPD).",
  },
];

const escopo = [
  {
    icon: Lock,
    title: "Segurança da Informação",
    items: [
      "Diagnóstico e gap analysis ISO 27001",
      "Políticas, normas e procedimentos",
      "Gestão de riscos e controles",
      "Conscientização e treinamentos",
    ],
  },
  {
    icon: Scale,
    title: "Privacidade e LGPD",
    items: [
      "Mapeamento de dados e RoPA",
      "Adequação à LGPD",
      "DPO as a Service",
      "Atendimento a titulares e ANPD",
    ],
  },
  {
    icon: Layers,
    title: "Governança e Compliance",
    items: [
      "Estruturação de comitês e papéis",
      "Frameworks GRC integrados",
      "Auditoria independente ISO 27001",
      "Governança de IA e Prompt Injection",
    ],
  },
];

const entregaveis = [
  "Relatório executivo de diagnóstico e maturidade",
  "Plano de ação priorizado por risco e impacto",
  "Políticas, normas e procedimentos aprovados",
  "Matriz de riscos e plano de tratamento",
  "Programa de treinamento e conscientização",
  "Relatórios periódicos de evolução para a diretoria",
];

const cronograma = [
  { fase: "Fase 1 · Diagnóstico", prazo: "30 dias", desc: "Assessment, entrevistas, gap analysis e priorização." },
  { fase: "Fase 2 · Implementação", prazo: "60–120 dias", desc: "Políticas, controles, treinamentos e adequações." },
  { fase: "Fase 3 · Sustentação", prazo: "Contínuo", desc: "Monitoramento, indicadores e melhoria contínua." },
];

const diferenciais = [
  "Auditores líderes ISO 27001 com acreditação Exemplar Global",
  "Metodologia própria integrando ISO 27001, NIST CSF e LGPD",
  "Modelo de acompanhamento 365 dias com SLA definido",
  "Governança de IA e proteção contra Prompt Injection",
  "Confidencialidade e sigilo garantidos em contrato (NDA)",
  "Time sênior com atuação em setores regulados",
];

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-20 ${className}`}>
    <div className="container mx-auto px-4">{children}</div>
  </section>
);

const PropostaComercial = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-20 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Apresentação Executiva GRC
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Proposta <span className="text-gradient">Comercial 365s</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Governança, Riscos e Compliance com acompanhamento{" "}
                <strong className="text-foreground">365 dias por ano</strong>.
                Transformamos conformidade em vantagem competitiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <Button variant="hero" size="lg" onClick={openWhatsApp}>
                  <MessageCircle className="w-4 h-4" />
                  Solicitar Proposta Personalizada
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cenário */}
        <Section>
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
              Contexto Estratégico
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              O cenário atual de riscos digitais
            </h2>
            <p className="text-muted-foreground mt-4">
              Ataques cibernéticos, exigências regulatórias (LGPD, ANPD, setoriais)
              e a adoção acelerada de IA elevaram o custo do não-compliance.
              Organizações que tratam GRC de forma reativa expõem receita, marca
              e continuidade do negócio.
            </p>
          </div>
        </Section>

        {/* Proposta de Valor */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Nossa <span className="text-gradient">Proposta de Valor</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Escopo */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Escopo dos Serviços</h2>
            <p className="text-muted-foreground mt-3">
              Frentes de trabalho combináveis conforme a maturidade e prioridades
              do cliente.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {escopo.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Entregáveis */}
        <Section>
          <div className="max-w-5xl mx-auto glass rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Entregáveis</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {entregaveis.map((e) => (
                <div
                  key={e}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Cronograma */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Cronograma Referencial</h2>
            <p className="text-muted-foreground mt-3">
              Prazos ajustáveis conforme escopo e porte da organização.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cronograma.map((c) => (
              <div key={c.fase} className="glass rounded-2xl p-6">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                  {c.prazo}
                </div>
                <h3 className="text-lg font-semibold mt-2 mb-2">{c.fase}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Investimento */}
        <Section>
          <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 text-center">
            <DollarSign className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Modelo de Investimento
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com <strong className="text-foreground">projetos fechados</strong>,{" "}
              <strong className="text-foreground">retainer mensal</strong> (GRC as a Service)
              e <strong className="text-foreground">bolsa de horas</strong>. Cada proposta é
              construída sob medida após uma reunião de alinhamento sem custo.
            </p>
          </div>
        </Section>

        {/* Diferenciais */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Diferenciais Competitivos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {diferenciais.map((d) => (
              <div key={d} className="glass rounded-2xl p-5 flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{d}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Próximos Passos */}
        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Próximos Passos
            </h2>
            <p className="text-muted-foreground mb-8">
              Agende uma conversa de 30 minutos com nossos especialistas para
              receber uma proposta personalizada para a sua organização.
            </p>
            <Button variant="hero" size="lg" onClick={openWhatsApp}>
              <MessageCircle className="w-4 h-4" />
              Falar com Especialista
            </Button>
            <p className="text-xs text-muted-foreground mt-6">
              Validade da proposta: 30 dias · Sigilo garantido (NDA)
            </p>
          </div>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropostaComercial;
