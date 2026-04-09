import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageProvider";

const NotFound = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <span className="font-mono text-sm text-accent font-semibold tracking-wider">404</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mt-4 mb-6">
            {lang === "pt" ? "Página não encontrada" : "Page not found"}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            {lang === "pt"
              ? "A página que procura não existe ou foi movida."
              : "The page you're looking for doesn't exist or has been moved."}
          </p>
          <Link
            to="/"
            className="inline-flex bg-gradient-brand text-accent-foreground px-8 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
          >
            {lang === "pt" ? "Voltar ao início" : "Back to home"}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
