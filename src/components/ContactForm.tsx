import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Schema com validação estrita (defesa contra injeção/XSS em qualquer integração futura)
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo")
    .regex(/^[\p{L}\s'.-]+$/u, "Nome contém caracteres inválidos"),
  email: z.string().trim().toLowerCase().email("Email inválido").max(255),
  phone: z
    .string()
    .trim()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .max(20, "Telefone muito longo")
    .regex(/^[+()\d\s-]+$/, "Telefone contém caracteres inválidos"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem muito longa")
    // bloqueia tags HTML / scripts copiados/colados (mitigação extra de XSS)
    .refine((v) => !/<\/?[a-z][\s\S]*>/i.test(v), "A mensagem não pode conter código HTML"),
});

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" ref={sectionRef} className="py-24 relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-glow opacity-20" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Contato</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Vamos <span className="text-gradient">conversar?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conte-nos sobre seus desafios em segurança, privacidade e compliance.
              Nosso time entrará em contato em breve.
            </p>
          </motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isFormInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground">
                  Obrigado pelo contato. Retornaremos em breve!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={`bg-secondary/50 border-border focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={`bg-secondary/50 border-border focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    WhatsApp / Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className={`bg-secondary/50 border-border focus:border-primary ${errors.phone ? 'border-destructive' : ''}`}
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Sua Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o projeto que você tem em mente..."
                    rows={5}
                    className={`bg-secondary/50 border-border focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
