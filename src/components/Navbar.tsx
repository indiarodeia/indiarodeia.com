import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/i18n/LanguageProvider";
import logoDark from "@/assets/logo_simple.png";
import logoLight from "@/assets/logo_light.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: t.nav.work[lang], href: "/#work" },
    { label: t.nav.portfolio[lang], href: "/portfolio" },
    { label: t.nav.services[lang], href: "/#services" },
    { label: t.nav.about[lang], href: "/#about" },
    { label: t.nav.contact[lang], href: "/#contact" },
  ];

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/#" + id);
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <nav
      role="navigation"
      aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
          <img src={resolvedTheme === "dark" ? logoLight : logoDark} alt="India Rodeia — Home" className="h-8 md:h-9" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium line-reveal pb-1 focus-visible:outline-none focus-visible:text-accent"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium line-reveal pb-1 focus-visible:outline-none focus-visible:text-accent"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300 text-sm font-medium text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={lang === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
          >
            <Globe size={14} />
            <span className="uppercase text-xs font-semibold tracking-wider">{lang === "pt" ? "EN" : "PT"}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={resolvedTheme === "dark" ? (lang === "pt" ? "Mudar para tema claro" : "Switch to light theme") : (lang === "pt" ? "Mudar para tema escuro" : "Switch to dark theme")}
          >
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="/#contact"
            onClick={(e) => handleAnchorClick(e, "/#contact")}
            className="bg-gradient-brand text-accent-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {t.nav.cta[lang]}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="p-2.5 rounded-full border border-border text-xs font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={lang === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
          >
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="text-foreground p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? (lang === "pt" ? "Fechar menu" : "Close menu") : (lang === "pt" ? "Abrir menu" : "Open menu")}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-2xl px-6 py-6 space-y-5">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a key={item.label} href={item.href} onClick={(e) => handleAnchorClick(e, item.href)} className="block text-foreground text-lg font-heading font-semibold">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)} className="block text-foreground text-lg font-heading font-semibold">
                {item.label}
              </Link>
            )
          )}
          <a href="/#contact" onClick={(e) => handleAnchorClick(e, "/#contact")} className="inline-block bg-gradient-brand text-accent-foreground px-6 py-2.5 rounded-full text-sm font-semibold mt-2">
            {t.nav.cta[lang]}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
