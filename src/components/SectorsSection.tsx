import { useLanguage } from "@/i18n/LanguageProvider";

const capabilities = [
  {
    icon: "◆",
    title: { pt: "Identidades que escalam", en: "Brand identities that scale" },
    description: {
      pt: "Sistemas visuais estratégicos que crescem com o negócio — coerentes, memoráveis e prontos para qualquer contexto.",
      en: "Strategic visual systems that grow with the business — coherent, memorable and ready for any context.",
    },
    color: "text-accent",
  },
  {
    icon: "◈",
    title: { pt: "Websites que convertem", en: "Websites that convert" },
    description: {
      pt: "Design editorial premium com implementação frontend de alto nível, SEO otimizado e foco em resultados mensuráveis.",
      en: "Premium editorial design with high-level frontend implementation, optimized SEO and focus on measurable results.",
    },
    color: "text-turquoise",
  },
  {
    icon: "◉",
    title: { pt: "Produtos digitais com usabilidade real", en: "Digital products with real usability" },
    description: {
      pt: "Interfaces centradas no utilizador que simplificam fluxos complexos e entregam experiências intuitivas e eficientes.",
      en: "User-centered interfaces that simplify complex flows and deliver intuitive, efficient experiences.",
    },
    color: "text-lavender",
  },
  {
    icon: "⬡",
    title: { pt: "Sistemas que simplificam a complexidade", en: "Systems that simplify complexity" },
    description: {
      pt: "Design systems escaláveis e dashboards que transformam dados e processos complexos em experiências claras e acessíveis.",
      en: "Scalable design systems and dashboards that turn complex data and processes into clear, accessible experiences.",
    },
    color: "text-turquoise-vivid",
  },
  {
    icon: "△",
    title: { pt: "MVPs prontos para lançar", en: "MVPs ready for launch" },
    description: {
      pt: "Da ideia ao produto mínimo viável com design validado, frontend funcional e foco em tração e aprendizagem rápida.",
      en: "From idea to minimum viable product with validated design, functional frontend and focus on traction and rapid learning.",
    },
    color: "text-accent",
  },
  {
    icon: "✦",
    title: { pt: "Frontend construído com precisão", en: "Frontend built with precision" },
    description: {
      pt: "Código limpo, performante e fiel ao design — onde a visão criativa se traduz em implementação técnica impecável.",
      en: "Clean, performant code true to the design — where the creative vision translates into flawless technical implementation.",
    },
    color: "text-turquoise",
  },
];

const SectorsSection = () => {
  const { lang } = useLanguage();

  const label = { pt: "O que entrego", en: "What I deliver" };
  const title1 = { pt: "Soluções que", en: "Solutions that" };
  const titleAccent = { pt: "geram impacto", en: "drive impact" };
  const subtitle = {
    pt: "Versatilidade estratégica e execução técnica para projetos que exigem pensamento sénior e resultados reais.",
    en: "Strategic versatility and technical execution for projects that demand senior thinking and real results.",
  };

  return (
    <section className="py-24 sm:py-32" aria-label={label[lang]}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <span className="label-caps">{label[lang]}</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-foreground">
            {title1[lang]}{" "}
            <span className="text-accent-gradient">{titleAccent[lang]}</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            {subtitle[lang]}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8 md:p-10 space-y-4 group hover:bg-card hover:border-accent/30 hover:shadow-card transition-all duration-500 hover-card"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xl ${cap.color}`} aria-hidden="true">{cap.icon}</span>
                <span className="font-mono text-xs text-muted-foreground/40 font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                {cap.title[lang]}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cap.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
