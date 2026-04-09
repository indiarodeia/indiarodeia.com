import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const HeroSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center relative pt-20 bg-gradient-hero grain overflow-hidden" aria-label={lang === "pt" ? "Apresentação" : "Introduction"}>
      {/* Decorative orbs */}
      <div className="absolute top-32 right-[10%] w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-[5%] w-64 h-64 bg-purple-glow/20 rounded-full blur-[80px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl space-y-8 sm:space-y-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-accent">
              {t.hero.badge[lang]}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] tracking-tight text-foreground">
            {t.hero.h1_1[lang]}{" "}
            <span className="text-accent-gradient">{t.hero.h1_accent[lang]}</span>
            {t.hero.h1_2[lang]}
            <span className="text-muted-foreground font-light italic"> {t.hero.h1_italic[lang]}</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            {t.hero.subtitle[lang]}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2 sm:pt-4">
            <a href="#work" className="bg-gradient-brand text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
              {t.hero.cta1[lang]}
            </a>
            <a href="#contact" className="border border-border text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
              {t.hero.cta2[lang]}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
        aria-label={lang === "pt" ? "Scroll para projetos" : "Scroll to projects"}
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
