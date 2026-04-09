import { useLanguage } from "@/i18n/LanguageProvider";
import portrait from "@/assets/portrait.png";

const expertise = [
  "UX/UI Design", "Product Design", "Branding", "Web Design",
  "Frontend Development", "Design Systems", "Figma", "Illustrator",
  "Photoshop", "VS Code", "Angular", "HTML/CSS", "WordPress", "SEO",
];

const AboutSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-section grain" aria-label={lang === "pt" ? "Sobre mim" : "About me"}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <span className="label-caps">{t.about.label[lang]}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-foreground">
              {t.about.name1[lang]}{" "}
              <span className="text-accent-gradient">{t.about.name2[lang]}</span>
            </h2>

            {/* Portrait */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-turquoise/10" aria-hidden="true" />
              <img
                src={portrait}
                alt="India Rodeia — UX/UI Designer & Frontend Developer"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                width={224}
                height={224}
              />
            </div>

            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              {t.about.bio[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="font-mono text-sm font-bold text-foreground tracking-wider uppercase">
                {t.about.skillsTitle[lang]}
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label={t.about.skillsTitle[lang]}>
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="border border-border text-muted-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-accent">8+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{t.about.statsYears[lang]}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-turquoise">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{t.about.statsProjects[lang]}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-lavender">30+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{t.about.statsClients[lang]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
