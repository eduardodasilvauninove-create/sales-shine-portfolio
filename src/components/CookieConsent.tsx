import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostra o pop-up sempre que a página carregar
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-6 md:max-w-md"
        >
          <div className="glass rounded-xl p-5 shadow-card border border-border/50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-relaxed">
                  A <strong>365s</strong> utiliza somente os cookies necessários para o funcionamento do site.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors shrink-0"
                aria-label="Fechar aviso de cookies"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
