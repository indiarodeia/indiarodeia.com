import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { portfolioEnabled } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { projects } from "@/data/projects";

const SectionBlock = ({ label, title, children }: { label: string; title: string; children: React.ReactNode }) => (
  <div className="editorial-border pt-12 pb-4">
    <span className="label-caps mb-3 block">{label}</span>
    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">{title}</h3>
    <div className="text-muted-foreground text-base leading-relaxed max-w-3xl">{children}</div>
  </div>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!portfolioEnabled) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title="Portfolio — India Rodeia"
          description={lang === "pt"
            ? "Os case studies completos serão publicados em breve."
            : "Full case studies will be published soon."}
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

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title={`${t.caseStudy.notFound[lang]} — India Rodeia`}
          description={lang === "pt" ? "O projeto pedido não foi encontrado." : "The requested project could not be found."}
          path="/portfolio"
          noindex
        />
        <Navbar />
        <main className="pt-40 pb-20 text-center container mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">{t.caseStudy.notFound[lang]}</h1>
          <Link to="/portfolio" className="text-accent hover:underline">{t.caseStudy.backLink[lang]}</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${project.title} — India Rodeia`}
        description={project.description}
        path={`/portfolio/${project.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          url: `https://indiarodeia.com/portfolio/${project.slug}`,
          description: project.description,
          creator: {
            "@type": "Person",
            name: "India Rodeia",
          },
          dateCreated: project.year,
          keywords: project.tags.join(", "),
        }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-gradient-hero grain relative overflow-hidden">
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" aria-hidden="true" />
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium mb-8 sm:mb-10 focus-visible:outline-none focus-visible:text-accent">
              <ArrowLeft size={16} /> {t.caseStudy.back[lang]}
            </Link>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              <div className="lg:col-span-3 space-y-5 sm:space-y-6">
                <div className="flex gap-3 flex-wrap">
                  {project.categories.map((cat) => (
                    <span key={cat} className="label-caps">{cat}</span>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[0.95]">
                  {project.title}
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">{project.overview}</p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 space-y-4 sm:space-y-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.caseStudy.client[lang]}</span>
                    <p className="text-foreground font-medium mt-1">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.caseStudy.year[lang]}</span>
                    <p className="text-foreground font-medium mt-1">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.caseStudy.services[lang]}</span>
                    <p className="text-foreground font-medium mt-1">{project.subtitle}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.caseStudy.tools[lang]}</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1 rounded-full">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual mockup placeholder */}
        <section className="py-4 bg-background" aria-label="Project visual">
          <div className="container mx-auto px-6">
            <div className="aspect-[21/9] rounded-2xl border border-border bg-gradient-to-br from-accent/10 via-card to-card flex items-center justify-center">
              <span className="text-muted-foreground/40 font-mono text-sm">Mockup / Visual Preview</span>
            </div>
          </div>
        </section>

        {/* Case study content */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-6 max-w-4xl space-y-4">
            <SectionBlock label="01" title={t.caseStudy.challenge[lang]}>
              <p>{project.challenge}</p>
            </SectionBlock>
            <SectionBlock label="02" title={t.caseStudy.strategy[lang]}>
              <p>{project.strategy}</p>
            </SectionBlock>
            <SectionBlock label="03" title={t.caseStudy.process[lang]}>
              <p>{project.process}</p>
            </SectionBlock>

            <div className="py-6 sm:py-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-xl border border-border bg-card flex items-center justify-center">
                  <span className="text-muted-foreground/40 font-mono text-sm">Process Image</span>
                </div>
                <div className="aspect-[4/3] rounded-xl border border-border bg-card flex items-center justify-center">
                  <span className="text-muted-foreground/40 font-mono text-sm">UI Screens</span>
                </div>
              </div>
            </div>

            <SectionBlock label="04" title={t.caseStudy.solution[lang]}>
              <p>{project.solution}</p>
            </SectionBlock>
            <SectionBlock label="05" title={t.caseStudy.implementation[lang]}>
              <p>{project.implementation}</p>
            </SectionBlock>

            <div className="py-6 sm:py-8">
              <div className="aspect-[16/9] rounded-xl border border-border bg-card flex items-center justify-center">
                <span className="text-muted-foreground/40 font-mono text-sm">Final Mockup</span>
              </div>
            </div>

            <SectionBlock label="06" title={t.caseStudy.outcome[lang]}>
              <p>{project.outcome}</p>
            </SectionBlock>

            {/* Impact metrics */}
            <div className="pt-12">
              <span className="label-caps mb-6 block">{t.caseStudy.impact[lang]}</span>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.impact.map((metric, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5 sm:p-6 text-center">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-accent">
                      {metric.split(" ")[0]}
                    </span>
                    <p className="text-muted-foreground text-sm mt-2">
                      {metric.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="py-16 sm:py-20 bg-gradient-section grain">
          <div className="container mx-auto px-6 text-center">
            <span className="label-caps mb-4 block">{t.caseStudy.next[lang]}</span>
            <Link to={`/portfolio/${nextProject.slug}`} className="group inline-block focus-visible:outline-none">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground group-hover:text-accent group-focus-visible:text-accent transition-colors duration-300 mb-4">
                {nextProject.title}
              </h2>
              <span className="inline-flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors text-sm">
                {t.caseStudy.viewProject[lang]} <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
