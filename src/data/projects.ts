export type ProjectCategory = "Branding" | "Digital" | "Product" | "Development";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  description: string;
  tags: string[];
  tools: string[];
  year: string;
  client: string;
  overview: string;
  challenge: string;
  strategy: string;
  process: string;
  solution: string;
  implementation: string;
  outcome: string;
  impact: string[];
  accentColor: string;
}

export const projects: Project[] = [
  {
    slug: "rastreabilidade-alimentar",
    title: "Plataforma de Rastreabilidade Alimentar",
    subtitle: "Product Design · Frontend Development",
    categories: ["Product", "Development"],
    description: "Sistema digital completo de rastreabilidade para a cadeia alimentar, com dashboard de gestão e interface pública de consulta.",
    tags: ["UX/UI", "Design System", "React"],
    tools: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    year: "2024",
    client: "Indústria Alimentar",
    overview: "Desenvolvimento de uma plataforma digital de rastreabilidade alimentar que permite acompanhar toda a cadeia de produção — do campo ao consumidor final.",
    challenge: "Criar uma experiência digital que simplificasse um processo altamente regulado e complexo, garantindo a conformidade com normas europeias e a acessibilidade para diferentes perfis de utilizador.",
    strategy: "Abordagem centrada no utilizador com research extensivo junto de operadores, gestores e consumidores finais. Definição de uma arquitetura de informação clara e intuitiva.",
    process: "Design iterativo com prototipagem rápida, testes de usabilidade e validação contínua com stakeholders. Desenvolvimento de um design system escalável.",
    solution: "Dashboard de gestão para operadores com visualização de dados em tempo real e interface pública de consulta com acesso por QR code.",
    implementation: "Frontend desenvolvido em React com TypeScript, design system próprio e integração com APIs de rastreabilidade.",
    outcome: "Plataforma em produção com adopção significativa e feedback positivo de todos os stakeholders envolvidos.",
    impact: ["Redução de 60% no tempo de consulta", "100% conformidade regulamentar", "NPS de 4.7/5"],
    accentColor: "accent",
  },
  {
    slug: "hub-inovacao-gaming",
    title: "Hub de Inovação & Gaming",
    subtitle: "Branding · Web Design",
    categories: ["Branding", "Digital"],
    description: "Identidade visual e plataforma digital para ecossistema criativo de gaming e inovação tecnológica.",
    tags: ["Branding", "Web Design", "Motion"],
    tools: ["Figma", "Illustrator", "Photoshop", "WordPress"],
    year: "2023",
    client: "Ecossistema de Inovação",
    overview: "Criação de identidade visual completa e plataforma digital para um hub que conecta gaming, tecnologia e inovação criativa.",
    challenge: "Comunicar um conceito inovador e multifacetado — gaming, tecnologia e criatividade — de forma coesa e apelativa para públicos distintos.",
    strategy: "Posicionamento visual que transmite energia, inovação e comunidade. Linguagem visual dinâmica que reflete a natureza interativa do ecossistema.",
    process: "Exploração de conceitos visuais, moodboards e iteração sobre a marca. Desenvolvimento de guidelines e aplicações digitais.",
    solution: "Identidade visual vibrante com sistema de cores energético e plataforma web com experiência imersiva.",
    implementation: "Website desenvolvido em WordPress com animações motion e integração com sistemas de gestão de eventos.",
    outcome: "Marca reconhecida no ecossistema regional de inovação com forte presença digital.",
    impact: ["3x crescimento de comunidade", "Reconhecimento regional", "45+ eventos realizados"],
    accentColor: "turquoise",
  },
  {
    slug: "luxury-tourism",
    title: "Luxury Tourism Experience",
    subtitle: "UI/UX Design · Frontend",
    categories: ["Digital", "Development"],
    description: "Website premium para experiências de turismo e gastronomia de alto nível, com foco em storytelling visual e conversão.",
    tags: ["UI/UX", "Frontend", "SEO"],
    tools: ["Figma", "HTML/CSS", "SEO", "VS Code"],
    year: "2024",
    client: "Turismo Premium",
    overview: "Design e desenvolvimento de website premium para marca de turismo e gastronomia de luxo, focado em storytelling visual e conversão de reservas.",
    challenge: "Transmitir a exclusividade e sofisticação das experiências oferecidas num website que também funciona como ferramenta de conversão eficaz.",
    strategy: "Storytelling visual imersivo com fotografia de alta qualidade, tipografia editorial e micro-interações que reforçam a percepção de luxo.",
    process: "Research de benchmarking internacional, wireframing estratégico, design visual de alto nível e otimização de performance.",
    solution: "Website com navegação fluida, galerias imersivas, sistema de reservas integrado e SEO otimizado para mercado internacional.",
    implementation: "Frontend com animações suaves, lazy loading, otimização de imagens e schema markup para SEO.",
    outcome: "Aumento significativo de reservas online e reconhecimento como referência visual no setor.",
    impact: ["85% aumento em reservas online", "Score SEO 95+", "Tempo médio de sessão +40%"],
    accentColor: "lavender",
  },
  {
    slug: "incubadora-startups",
    title: "Incubadora de Startups",
    subtitle: "Product Design · Branding",
    categories: ["Product", "Branding"],
    description: "Plataforma digital e identidade visual para incubadora de inovação, conectando startups, mentores e investidores.",
    tags: ["Product Design", "Branding", "Dashboard"],
    tools: ["Figma", "Illustrator", "Design Systems"],
    year: "2023",
    client: "Incubadora de Inovação",
    overview: "Design de produto e identidade visual para plataforma digital de uma incubadora que conecta startups, mentores e investidores.",
    challenge: "Criar uma plataforma que servisse múltiplos perfis de utilizador com necessidades distintas, mantendo coerência visual e funcional.",
    strategy: "Mapeamento de jornadas de utilizador para cada perfil, definição de funcionalidades prioritárias e desenvolvimento de uma linguagem visual institucional mas moderna.",
    process: "Discovery com stakeholders, user research, prototipagem e testes iterativos. Desenvolvimento de brand guidelines completas.",
    solution: "Plataforma com dashboards personalizados, sistema de matching entre startups e mentores, e identidade visual que transmite inovação e credibilidade.",
    implementation: "Design system escalável com componentes reutilizáveis e documentação detalhada para equipa de desenvolvimento.",
    outcome: "Plataforma adoptada por 50+ startups e reconhecida como caso de sucesso no ecossistema de inovação.",
    impact: ["50+ startups activas", "200+ ligações mentor-startup", "Referência no ecossistema"],
    accentColor: "accent",
  },
  {
    slug: "sistema-gestao-interno",
    title: "Sistema de Gestão Interno",
    subtitle: "UX/UI Design · Frontend Development",
    categories: ["Product", "Development"],
    description: "Dashboard e sistema de gestão interno para empresa multinacional, com foco em eficiência e usabilidade.",
    tags: ["Dashboard", "Design System", "React"],
    tools: ["Figma", "Angular", "TypeScript", "Design Systems"],
    year: "2024",
    client: "Empresa Multinacional",
    overview: "Redesign e desenvolvimento de sistema de gestão interno para multinacional, substituindo ferramentas legacy por uma solução moderna e eficiente.",
    challenge: "Modernizar processos internos complexos mantendo a continuidade operacional e reduzindo a curva de aprendizagem para centenas de utilizadores.",
    strategy: "Auditoria UX do sistema existente, workshops com equipas operacionais e definição de prioridades com base em métricas de produtividade.",
    process: "Sprint-based design com entregáveis incrementais, design system corporativo e formação de equipa interna.",
    solution: "Dashboard centralizado com visualização de KPIs, gestão de workflows e sistema de notificações inteligente.",
    implementation: "Frontend em Angular com TypeScript, design system componentizado e integração com sistemas enterprise existentes.",
    outcome: "Adopção completa pela organização com melhorias mensuráveis em produtividade e satisfação dos colaboradores.",
    impact: ["40% redução em tempo de tarefas", "95% adopção interna", "ROI positivo em 6 meses"],
    accentColor: "turquoise-vivid",
  },
  {
    slug: "marca-premium-regional",
    title: "Marca Premium Regional",
    subtitle: "Branding · Web Design",
    categories: ["Branding", "Digital"],
    description: "Identidade visual completa e website institucional premium para marca regional com ambição global.",
    tags: ["Branding", "Web Design", "SEO"],
    tools: ["Figma", "Illustrator", "Photoshop", "WordPress", "SEO"],
    year: "2023",
    client: "Marca Regional Premium",
    overview: "Desenvolvimento de identidade visual completa e website institucional para marca regional que ambiciona posicionamento premium no mercado global.",
    challenge: "Equilibrar autenticidade regional com sofisticação internacional, criando uma marca que comunique qualidade premium sem perder a sua identidade local.",
    strategy: "Pesquisa de mercado internacional, definição de posicionamento estratégico e desenvolvimento de narrativa visual que une herança local e ambição global.",
    process: "Exploração de conceitos, refinamento de marca, design de aplicações e desenvolvimento de website com foco em storytelling.",
    solution: "Identidade visual sofisticada com palette de cores premium, tipografia elegante e website institucional com forte componente visual.",
    implementation: "Website em WordPress com otimização SEO, integração multilingue e performance otimizada para mercado internacional.",
    outcome: "Marca reconhecida a nível nacional com expansão para mercados internacionais em curso.",
    impact: ["Expansão para 3 mercados", "Prémio de design regional", "200% crescimento em leads"],
    accentColor: "lavender",
  },
];

export const categories: ProjectCategory[] = ["Branding", "Digital", "Product", "Development"];
