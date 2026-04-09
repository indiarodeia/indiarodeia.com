import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { portfolioEnabled } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { projects, categories, type ProjectCategory } from "@/data/projects";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
  const { lang, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  if (!portfolioEnabled) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title="Portfolio — India Rodeia"
          description={lang === "pt"
            ? "O portfolio completo será publicado em breve."
            : "The full portfolio will be published soon."}
          path="/portfolio"
          noindex
        />
        <Navbar />
        <main className="pt-40 pb-24">
          <section className="container mx-auto px-6">
            <div className="max-w-3xl rounded-3xl border border-border bg-card p-8 sm:p-10 md:p-12">
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-accent">
                {t.projects.soonBadge[lang]}
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground leading-[0.98]">
                {t.projects.soonTitle[lang]}
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                {t.projects.soonText[lang]}
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Portfolio — India Rodeia"
        description={lang === "pt"
          ? "Projetos de UX/UI, branding, product design e frontend development. Seleção de case studies de India Rodeia com foco em estratégia, execução e impacto."
          : "UX/UI, branding, product design, and frontend development projects. Selected case studies by India Rodeia focused on strategy, execution, and measurable impact."}
        path="/portfolio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "India Rodeia Portfolio",
          url: "https://indiarodeia.com/portfolio",
          description: lang === "pt"
            ? "Seleção de projetos de UX/UI, branding, product design e frontend development."
            : "Selected UX/UI, branding, product design, and frontend development work.",
        }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 bg-gradient-hero grain relative overflow-hidden">
          <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] rounded-full bg-turquoise/8 blur-[100px] pointer-events-none" aria-hidden="true" />
          <div className="container mx-auto px-6 relative z-10">
            <span className="label-caps mb-4 block">{t.portfolio.label[lang]}</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground leading-[0.95] mb-6">
              {t.portfolio.title[lang]}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              {t.portfolio.subtitle[lang]}
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-12 sm:py-20 bg-background" aria-label={lang === "pt" ? "Projetos" : "Projects"}>
          <div className="container mx-auto px-6">
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-16" role="group" aria-label={lang === "pt" ? "Filtros de categoria" : "Category filters"}>
              <button
                onClick={() => setActiveFilter("All")}
                aria-pressed={activeFilter === "All"}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  activeFilter === "All"
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {t.portfolio.all[lang]}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={activeFilter === cat}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    activeFilter === cat
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {filtered.map((project, index) => (
                <Link
                  to={`/portfolio/${project.slug}`}
                  key={project.slug}
                  className="group relative rounded-2xl border border-border bg-card overflow-hidden hover-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {/* Visual preview area */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-accent/10 via-card to-card">
                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <span className="text-[80px] sm:text-[120px] font-heading font-bold text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors duration-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 w-16 h-1 rounded-full bg-accent opacity-60 group-hover:w-24 transition-all duration-500" aria-hidden="true" />
                    <div className="absolute top-4 right-4 p-2 rounded-full border border-border bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2" aria-hidden="true">
                      <ArrowUpRight size={16} className="text-foreground" />
                    </div>

                    {project.impact.length > 0 && (
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <span className="text-[10px] font-mono font-semibold bg-accent/15 text-accent px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {project.impact[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.categories.map((cat) => (
                        <span key={cat} className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent">
                          {cat}
                        </span>
                      ))}
                      <span className="text-[10px] font-mono text-muted-foreground ml-auto">{project.year}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span key={tool} className="text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
