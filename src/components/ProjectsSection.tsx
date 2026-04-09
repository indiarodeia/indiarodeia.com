import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

const ProjectsSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="work" className="py-24 sm:py-32 bg-gradient-section grain" aria-label={lang === "pt" ? "Projetos selecionados" : "Selected projects"}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-4">
            <span className="label-caps">{t.projects.label[lang]}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-foreground">
              {t.projects.title[lang]}{" "}
              <span className="text-accent-gradient">{t.projects.titleAccent[lang]}</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md">
            {t.projects.subtitle[lang]}
          </p>
        </div>

        <div className="space-y-4">
          {projects.slice(0, 4).map((project, index) => (
            <Link
              to={`/portfolio/${project.slug}`}
              key={project.slug}
              className="group block rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 sm:p-8 md:p-10 cursor-pointer hover:bg-background hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 md:gap-10">
                <span className="font-mono text-sm text-accent font-bold w-8 shrink-0" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-1 sm:space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight size={22} className="text-muted-foreground group-hover:text-accent shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-1 hidden sm:block" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm max-w-xl leading-relaxed hidden md:block">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link to="/portfolio" className="inline-flex items-center gap-2 bg-gradient-brand text-accent-foreground px-8 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
            {t.projects.viewAll[lang]} <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
