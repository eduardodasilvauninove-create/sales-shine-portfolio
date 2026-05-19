import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Shield, BarChart3, Megaphone, Settings2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  acceptAll,
  rejectAll,
  saveConsent,
  getConsent,
  defaultCategories,
  OPEN_PREFERENCES_EVENT,
  type ConsentCategories,
} from "@/lib/cookieConsent";

const categoryMeta = [
  {
    key: "necessary" as const,
    icon: Shield,
    title: "Estritamente necessários",
    description:
      "Essenciais para o funcionamento do site (preferência de tema e registro do próprio consentimento). Não podem ser desativados.",
    locked: true,
  },
  {
    key: "preferences" as const,
    icon: Settings2,
    title: "Preferências",
    description:
      "Permitem lembrar escolhas que você faz no site, como idioma ou região, para uma experiência personalizada.",
    locked: false,
  },
  {
    key: "analytics" as const,
    icon: BarChart3,
    title: "Analíticos",
    description:
      "Ajudam a entender como os visitantes interagem com o site, de forma anônima, para melhorarmos a navegação.",
    locked: false,
  },
  {
    key: "marketing" as const,
    icon: Megaphone,
    title: "Marketing",
    description:
      "Utilizados para exibir conteúdo e anúncios mais relevantes em outros sites com base na sua navegação.",
    locked: false,
  },
];

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState<ConsentCategories>(defaultCategories);

  useEffect(() => {
    const existing = getConsent();
    if (existing) {
      setPrefs(existing.categories);
    } else {
      setShowBanner(true);
    }

    const openHandler = () => {
      const current = getConsent();
      setPrefs(current?.categories ?? defaultCategories);
      setShowModal(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openHandler);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePrefs = () => {
    saveConsent(prefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const toggle = (key: keyof ConsentCategories) => {
    if (key === "necessary") return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            role="dialog"
            aria-live="polite"
            aria-label="Aviso de cookies"
            className="fixed bottom-4 left-4 right-4 z-[100] md:left-6 md:right-6 md:max-w-2xl md:mx-auto"
          >
            <div className="glass rounded-2xl p-5 md:p-6 shadow-card border border-border/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-foreground mb-1">
                    Sua privacidade é importante
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A <strong>365s</strong> utiliza cookies estritamente
                    necessários para o funcionamento do site. Com seu
                    consentimento, também podemos usar cookies analíticos, de
                    marketing e de preferências para melhorar sua experiência,
                    conforme a LGPD. Saiba mais em nossa{" "}
                    <a
                      href="/politica-de-privacidade"
                      className="text-primary hover:underline"
                    >
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </div>
                <button
                  onClick={handleRejectAll}
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors shrink-0"
                  aria-label="Rejeitar não essenciais e fechar"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                <Button
                  variant="outline"
                  onClick={() => setShowModal(true)}
                  className="w-full sm:w-auto"
                >
                  Personalizar
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto"
                >
                  Rejeitar não essenciais
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto"
                >
                  Aceitar todos
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Preferências de cookies</DialogTitle>
            <DialogDescription>
              Personalize o uso de cookies neste site. Você pode alterar suas
              preferências a qualquer momento.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {categoryMeta.map((cat) => {
              const Icon = cat.icon;
              const checked = prefs[cat.key];
              return (
                <div
                  key={cat.key}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/40"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="font-medium text-foreground">
                        {cat.title}
                        {cat.locked && (
                          <span className="ml-2 text-[10px] uppercase tracking-wider text-primary">
                            Sempre ativo
                          </span>
                        )}
                      </h3>
                      <Switch
                        checked={checked}
                        disabled={cat.locked}
                        onCheckedChange={() => toggle(cat.key)}
                        aria-label={cat.title}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:justify-end mt-6">
            <Button variant="outline" onClick={handleRejectAll}>
              Rejeitar não essenciais
            </Button>
            <Button variant="outline" onClick={handleSavePrefs}>
              Salvar preferências
            </Button>
            <Button onClick={handleAcceptAll}>Aceitar todos</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
