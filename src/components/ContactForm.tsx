
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser'; // ✅ ADICIONADO
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(255),
  phone: z.string().trim().min(10).max(20),
  message: z.string().trim().min(10).max(1000),
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

      // ✅ ENVIO REAL DE EMAIL
      await emailjs.send(
        'service_9y0tnhz',           // ✅ seu service ID
        ''template_469id9u'',           // 🔴 COLOQUE SEU TEMPLATE ID AQUI
        {
          name: formData.name,
          email: formData.email,
          telefone: formData.phone,
          message: formData.message,
        },
        'SQ84PrwGxYau80K-M'          // ✅ sua public key
      );

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
      } else {
        console.error(error);
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" ref={sectionRef} className="py-24 relative overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 bg-glow opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">

          <motion.div
            ref={formRef}
            className="glass rounded-2xl p-8 md:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p>Obrigado pelo contato. Retornaremos em breve!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefone" />
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem" />

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>

              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
``
