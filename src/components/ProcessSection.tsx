import { useLanguage } from "@/i18n/LanguageProvider";

const colors = ["text-accent", "text-turquoise", "text-lavender", "text-turquoise-vivid"];

const ProcessSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="process" className="py-24 sm:py-32" aria-label={lang === "pt" ? "Processo de trabalho" : "Work process"}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="space-y-4 lg:sticky lg:top-32 lg:self-start">
            <span className="label-caps">{t.process.label[lang]}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t.process.title[lang]}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {t.process.subtitle[lang]}
            </p>
          </div>

          <div className="space-y-4">
            {t.process.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8 md:p-10 group hover:bg-card hover:border-accent/30 hover:shadow-card transition-all duration-500"
              >
                <div className="flex gap-5 sm:gap-8 items-start">
                  <span className={`font-mono text-2xl sm:text-3xl font-bold shrink-0 ${colors[i]}`} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {step.title[lang]}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                      {step.description[lang]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
