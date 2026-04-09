import { useLanguage } from "@/i18n/LanguageProvider";

const icons = ["✦", "◈", "◉", "⬡", "◇", "△"];

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 bg-mesh-dark text-primary-foreground grain relative overflow-hidden" aria-label={lang === "pt" ? "Serviços" : "Services"}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 sm:mb-20 space-y-4">
          <span className="font-mono text-xs tracking-[0.14em] uppercase font-semibold text-accent">
            {t.services.label[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold">
            {t.services.title1[lang]}{" "}
            <span className="text-accent-gradient">{t.services.titleAccent[lang]}</span>
          </h2>
          <p className="text-primary-foreground/50 text-base max-w-lg">
            {t.services.subtitle[lang]}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-primary-foreground/8 bg-primary-foreground/3 p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5 group hover:bg-primary-foreground/6 hover:border-accent/30 transition-all duration-500 hover-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl text-accent" aria-hidden="true">{icons[index]}</span>
                <span className="font-mono text-xs text-primary-foreground/30 font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold group-hover:text-accent transition-colors duration-300">
                {service.title[lang]}
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                {service.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
