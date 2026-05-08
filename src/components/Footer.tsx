import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2 mb-4">
              <h3 className="text-3xl font-bold text-gradient">365s</h3>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Governança · Riscos<br />Compliance
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Apoiamos organizações na evolução contínua da segurança da
              informação, governança, riscos e proteção de dados.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:border-primary/40 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
              <a
                href="mailto:contato@365s.com.br"
                aria-label="Email"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:border-primary/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#" },
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Serviços", href: "#servicos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Normas", href: "#normas" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                contato@365s.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                São Paulo · SP
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <p>© {currentYear} 365s. Todos os direitos reservados.</p>
          <p>365s.com.br · Governança · Riscos · Compliance</p>
        </div>
      </div>
    </footer>
  );
};
