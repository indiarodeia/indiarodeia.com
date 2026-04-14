export type Lang = 'pt' | 'en';

export const translations = {
    nav: {
        work: { pt: 'Trabalho', en: 'Work' },
        portfolio: { pt: 'Portfolio', en: 'Portfolio' },
        services: { pt: 'Serviços', en: 'Services' },
        about: { pt: 'Sobre', en: 'About' },
        contact: { pt: 'Contacto', en: 'Contact' },
        cta: { pt: 'Contactar', en: 'Get in Touch' },
    },

    hero: {
        badge: { pt: 'Disponível para projetos', en: 'Available for projects' },
        h1_1: { pt: 'Design estratégico,', en: 'Strategic design,' },
        h1_accent: { pt: 'branding', en: 'branding' },
        h1_2: { pt: ' e produtos digitais', en: ' & digital products' },
        h1_italic: { pt: 'com execução técnica real.', en: 'with real technical execution.' },
        subtitle: {
            pt: 'Ajudo marcas e projetos a transformar ideias em experiências digitais claras, funcionais e memoráveis.',
            en: 'I help brands and projects turn ideas into digital experiences that are clear, functional and memorable.',
        },
        cta1: { pt: 'Ver Projetos', en: 'View Projects' },
        ctaSoon: { pt: 'Portfolio em breve', en: 'Portfolio coming soon' },
        cta2: { pt: 'Iniciar Projeto', en: 'Start a Project' },
    },

    projects: {
        label: { pt: 'Portfolio', en: 'Portfolio' },
        title: { pt: 'Projetos', en: 'Selected' },
        titleAccent: { pt: 'Selecionados', en: 'Projects' },
        subtitle: {
            pt: 'Uma seleção de projetos que demonstra a interseção entre estratégia, design e implementação técnica.',
            en: 'A selection of projects that showcases the intersection of strategy, design and technical implementation.',
        },
        soonBadge: { pt: 'Em breve', en: 'Coming soon' },
        soonTitle: { pt: 'O portfolio está a ser preparado.', en: 'The portfolio is being prepared.' },
        soonText: {
            pt: 'Os projetos e case studies completos serão publicados em breve. A estrutura já está pronta e o conteúdo está neste momento a ser finalizado.',
            en: 'The full projects and case studies will be published soon. The structure is already in place and the content is currently being finalized.',
        },
        viewAll: { pt: 'Ver Portfolio Completo', en: 'View Full Portfolio' },
    },

    services: {
        label: { pt: 'Serviços', en: 'Services' },
        title1: { pt: 'Do conceito à', en: 'From concept to' },
        titleAccent: { pt: 'implementação', en: 'implementation' },
        subtitle: {
            pt: 'Serviços de design e desenvolvimento pensados para projetos que valorizam detalhe, clareza e boa execução.',
            en: 'Design and development services for projects that value detail, clarity and strong execution.',
        },
        items: [
            {
                title: { pt: 'UX/UI Design', en: 'UX/UI Design' },
                description: {
                    pt: 'Interfaces intuitivas e visualmente sofisticadas, centradas no utilizador e nos objetivos do negócio.',
                    en: 'Intuitive and visually sophisticated interfaces, centered on the user and business goals.',
                },
            },
            {
                title: { pt: 'Product Design', en: 'Product Design' },
                description: {
                    pt: 'Design de produto digital de ponta a ponta, desde a descoberta e validação até à criação de design systems consistentes.',
                    en: 'End-to-end digital product design, from discovery and validation to the creation of consistent design systems.',
                },
            },
            {
                title: { pt: 'Branding & Identidade Visual', en: 'Branding & Visual Identity' },
                description: {
                    pt: 'Identidades visuais memoráveis que comunicam posicionamento, valores e personalidade de marca.',
                    en: 'Memorable visual identities that communicate positioning, values and brand personality.',
                },
            },
            {
                title: { pt: 'Web Design & Development', en: 'Web Design & Development' },
                description: {
                    pt: 'Websites com design editorial, implementação frontend de alta qualidade e otimização SEO.',
                    en: 'Websites with editorial design, high-quality frontend implementation and SEO optimization.',
                },
            },
            {
                title: { pt: 'Design Systems', en: 'Design Systems' },
                description: {
                    pt: 'Design systems consistentes que aceleram o desenvolvimento e garantem coerência visual.',
                    en: 'Consistent design systems that accelerate development and ensure visual coherence.',
                },
            },
            {
                title: { pt: 'Landing Pages & MVPs', en: 'Landing Pages & MVPs' },
                description: {
                    pt: 'Páginas de conversão e MVPs com foco em validação rápida e aprendizagem real.',
                    en: 'Conversion pages and MVPs focused on rapid validation and real learning.',
                },
            },
        ],
    },

    process: {
        label: { pt: 'Processo', en: 'Process' },
        title: { pt: 'Como trabalho', en: 'How I work' },
        subtitle: {
            pt: 'Um processo claro e colaborativo que garante resultados alinhados com os objetivos do projeto.',
            en: 'A clear and collaborative process that ensures outcomes aligned with the project goals.',
        },
        steps: [
            {
                title: { pt: 'Discovery & Estratégia', en: 'Discovery & Strategy' },
                description: {
                    pt: 'Compreender o contexto, os objetivos do negócio, os utilizadores e as oportunidades. Definir a estratégia que orienta todas as decisões de design.',
                    en: 'Understand the context, business goals, users and opportunities. Define the strategy that guides every design decision.',
                },
            },
            {
                title: { pt: 'Conceito & Design', en: 'Concept & Design' },
                description: {
                    pt: 'Explorar direções visuais, definir a linguagem do projeto e criar protótipos de alta fidelidade que comuniquem a visão final.',
                    en: 'Explore visual directions, define the project language and create high-fidelity prototypes that communicate the final vision.',
                },
            },
            {
                title: { pt: 'Design System & UI', en: 'Design System & UI' },
                description: {
                    pt: 'Construir o sistema de componentes, definir tokens de design e desenhar interfaces com atenção ao detalhe e consistência.',
                    en: 'Build the component system, define design tokens and craft interfaces with attention to detail and consistency.',
                },
            },
            {
                title: { pt: 'Desenvolvimento & Entrega', en: 'Development & Delivery' },
                description: {
                    pt: 'Implementação frontend com código limpo, eficiente e fiel ao design. Testes, otimização e entrega de um produto pronto para o mundo real.',
                    en: 'Frontend implementation with clean, efficient code that stays faithful to the design. Testing, optimization and delivery of a product ready for the real world.',
                },
            },
        ],
    },

    about: {
        label: { pt: 'Sobre', en: 'About' },
        name1: { pt: 'India', en: 'India' },
        name2: { pt: 'Rodeia', en: 'Rodeia' },
        bio: {
            pt: [
                'Trabalho entre estratégia, design e desenvolvimento, a criar experiências digitais completas desde a ideia inicial até à implementação final.',
                'Acredito que o design com verdadeiro impacto nasce de uma compreensão profunda do negócio, das pessoas e do contexto em que a marca vive.',
                'A minha base em design, aliada a competências sólidas de frontend, permite-me acompanhar todo o processo com coerência, garantindo que a visão criativa chega à implementação com a mesma qualidade com que foi pensada.',
            ],
            en: [
                'I work across strategy, design and development, creating complete digital experiences from the initial idea to the final implementation.',
                'I believe impactful design comes from a deep understanding of the business, the people behind it and the context in which the brand exists.',
                'My background in design, combined with strong frontend skills, allows me to guide the full process with consistency, ensuring the creative vision reaches implementation with the same level of quality it was originally envisioned with.',
            ],
        },
        skillsTitle: { pt: 'Competências & Ferramentas', en: 'Skills & Tools' },
        statsYears: { pt: 'Anos de experiência', en: 'Years of experience' },
        statsProjects: { pt: 'Projetos entregues', en: 'Projects delivered' },
        statsClients: { pt: 'Clientes que confiaram', en: 'Clients trusted' },
    },

    contact: {
        label: { pt: 'Contacto', en: 'Contact' },
        title1: { pt: 'Tem um projeto em mente?', en: 'Have a project in mind?' },
        titleAccent: { pt: 'Vamos conversar.', en: "Let's talk." },
        subtitle: {
            pt: 'Se tens uma ideia, marca ou produto que queres elevar digitalmente, vamos conversar.',
            en: 'If you have an idea, brand or product you want to elevate digitally, let’s talk.',
        },
        elsewhere: { pt: 'Redes', en: 'Elsewhere' },
    },

    footer: {
        copyright: { pt: '© 2026 India Rodeia', en: '© 2026 India Rodeia' },
    },
} as const;

export type Translations = typeof translations;
