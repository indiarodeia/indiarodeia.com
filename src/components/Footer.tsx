import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTheme } from "./ThemeProvider";
import logoDark from "@/assets/logo_simple.png";
import logoLight from "@/assets/logo_light.png";

const Footer = () => {
  const { lang, t } = useLanguage();
  const { resolvedTheme } = useTheme();

  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src={resolvedTheme === "dark" ? logoLight : logoDark} alt="India Rodeia" className="h-7" />

          <nav className="flex gap-5 items-center" aria-label={lang === "pt" ? "Redes sociais" : "Social links"}>
            <a href="mailto:hello@indiarodeia.com" className="text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/indiarodeia/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/indiarodeia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.instagram.com/india.rodeia/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </nav>

          <span className="text-sm text-muted-foreground">{t.footer.copyright[lang]}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
