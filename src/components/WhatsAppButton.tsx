import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5511969369888";
  const message = encodeURIComponent("Olá! Gostaria de conhecer os serviços da 365s em Governança, Riscos e Compliance.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Fale Conosco</span>
    </motion.a>
  );
};
