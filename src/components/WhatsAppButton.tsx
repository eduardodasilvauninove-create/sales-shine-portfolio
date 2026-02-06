import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5500000000000"; // Replace with actual phone number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de criação de sites.");
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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse-glow"
      style={{ 
        boxShadow: '0 0 20px hsl(142 70% 45% / 0.4)'
      }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Fale Conosco</span>
    </motion.a>
  );
};
