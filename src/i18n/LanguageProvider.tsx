import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { translations, type Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguage(): Lang {
  const stored = localStorage.getItem("lang") as Lang | null;
  if (stored === "pt" || stored === "en") return stored;
  const browserLang = navigator.language || (navigator as any).userLanguage || "";
  return browserLang.startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLanguage);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
