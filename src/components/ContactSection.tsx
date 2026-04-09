import { ArrowUpRight, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const ContactSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-mesh-dark text-primary-foreground grain relative overflow-hidden" aria-label={lang === "pt" ? "Contacto" : "Contact"}>
      <div className="absolute top-0 right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-0 left-[5%] w-72 h-72 bg-purple-glow/15 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-8 sm:space-y-10">
          <span className="font-mono text-xs tracking-[0.14em] uppercase font-semibold text-accent">
            {t.contact.label[lang]}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold leading-[1.05]">
            {t.contact.title1[lang]}{" "}
            <span className="text-accent-gradient">{t.contact.titleAccent[lang]}</span>
          </h2>

          <p className="text-primary-foreground/50 text-base sm:text-lg max-w-xl leading-relaxed">
            {t.contact.subtitle[lang]}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="mailto:hello@indiarodeia.com"
              className="bg-gradient-brand text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Mail size={16} />
              hello@indiarodeia.com
            </a>
            <a
              href="https://www.linkedin.com/in/indiarodeia/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/15 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/indiarodeia"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/15 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Elsewhere */}
          <div className="pt-6 border-t border-primary-foreground/10">
            <span className="font-mono text-xs tracking-widest uppercase text-primary-foreground/30 font-semibold">
              {t.contact.elsewhere[lang]}
            </span>
            <div className="flex gap-6 mt-4">
              <a href="https://www.instagram.com/india.rodeia/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/indiarodeia/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/indiarodeia" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
