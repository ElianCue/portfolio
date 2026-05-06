export type Language = 'es' | 'en';

export const content = {
    es: {
        hero: {
            title: "Desarrollador Full Stack. Software Engineer.",
            subtitle: "Soy Elian Cueva, un desarrollador Full Stack especializado en React, Next.js y Node.js. Construyo aplicaciones escalables, desde interfaces dinámicas hasta arquitecturas backend resilientes. Experiencia real en entornos de producción.",
            ctaPrimary: "Ver Experiencia",
            ctaSecondary: "Descargar CV",
        },
        about: {
            title: "Más allá del código.",
            description: "Soy un desarrollador apasionado por crear soluciones web eficientes y escalables. Más allá de escribir código Front-end o Back-end, busco entender las necesidades reales del negocio para construir herramientas que faciliten el trabajo diario. Como estudiante de Informática en la UNLP y desarrollador con experiencia probada en producción, disfruto diseñando interfaces intuitivas y arquitecturas robustas que aporten valor directo a los usuarios.",
        },
        caseStudies: {
            title: "Casos de Estudio",
            subtitle: "Experiencia real resolviendo problemas de negocio en producción.",
            detailsTrigger: "Ver Decisiones e Impacto",
            solutionLabel: "Solución Técnica",
            decisionsLabel: "Decisiones Clave:",
            impactLabel: "Impacto de Negocio:",
            items: [
                {
                    id: "logistics-engine",
                    title: "Integración de Shipping (4 transportistas)",
                    problem: "El e-commerce necesitaba automatizar envíos sin depender de portales externos. Cada transportista (OnTime, GTS, GLS, FedEx) tenía su propia API con formatos distintos.",
                    solution: "Desarrollé un cliente REST unificado en Node.js/TypeScript que maneja los 4 transportistas. OnTime usa SOAP/XML legacy, los demás usan REST. Implementé generación de labels PDF/ZPL, tracking, validaciones por país y cancelaciones.",
                    stack: ["Node.js", "TypeScript", "MedusaJS", "SOAP", "REST API", "PDF", "ZPL"],
                    decisions: "Evité librerías SOAP pesadas construyendo clientes XML a medida. Implementé timeout de 30s con diagnóstico de errores. Manejé respuestas en múltiples formatos (array, objeto) porque la API no era consistente.",
                    impact: "Centralización del flujo logístico. Los operarios procesan cientos de envíos diarios sin salir del ERP.",
                },
{
                    id: "ai-support",
                    title: "Chatbot WhatsApp + AI",
                    problem: "Los clientes consultaban por WhatsApp sobre scooters, repuestos y estado de pedidos. No había forma de automatizar respuestas ni de gestionar la conversación desde el ERP.",
                    solution: "Desarrollé chatbot con OpenAI Assistants API + Twilio Webhooks. Implementé thread management por usuario, persistencia de conversaciones y keywords para clasificar productos (scooters, patines, repuestos).",
                    stack: ["Node.js", "OpenAI API", "Twilio", "TypeScript", "PostgreSQL"],
                    decisions: "Usé OpenAI Assistants con threads para mantener contexto por conversación. Implementé keywords para detectar tipo de consulta. Persistí threads en DB para recuperar contexto entre sesiones.",
                    impact: "Automatización de consultas frecuentes. Los agentes tienen historial completo en el ERP.",
                },
                {
                    id: "analytics-engine",
                    title: "Analytics Engine con Caché",
                    problem: "El panel de métricas calculaba LTV, AOV, Growth cruzando miles de registros con zonas horarias. Las queries N+1 causaban timeouts de +15 segundos.",
                    solution: "Construí un servicio analítico isolado. Implementé caché con TTL de 15 minutos y hashing predictivo que genera keys únicas por fecha/rango/filtros. Migré los cálculos de la DB a Node.js.",
                    stack: ["Node.js", "PostgreSQL", "Redis", "TypeScript"],
                    decisions: "El hashing normaliza los filtros (ordena keys, elimina duplicados) para evitar queries duplicadas. El TTL de 15 min balancea freshness con performance.",
                    impact: "Latencia reducida de >15s a <50ms. Export a CSV y HTML.",
                },
                {
                    id: "workshop-appointments",
                    title: "Sistema de Citas y Mecánica Operativa",
                    problem: "La coordinación de reparaciones (garantías y servicios técnicos) estaba totalmente desconectada de las compras del e-commerce, originando cruces manuales de turnos y molestos 'no-shows' de los clientes.",
                    solution: "Creación de un módulo completo (Appointments & Warranties). Construí las entidades personalizadas (ORM), endpoints enrutados dinámicamente según la sucursal del taller, y notificaciones de Twilio usando Jobs programados.",
                    stack: ["Node.js", "Medusa Framework", "React", "Twilio API", "PostgreSQL"],
                    decisions: "Diseñar un flujo asíncrono para las alertas: Desacoplar el envío del SMS automatizado calculando una demora dinámica (`setTimeout` o cola de tareas) para evitar saturar al cliente minutos después de la compra, respetando la franja horaria hábil.",
                    impact: "Centralización definitiva del taller post-venta dentro del ERP y drástica resolución de las ausencias no justificadas mediante un túnel de confirmación iterativo por WhatsApp.",
                }
            ]
        },
        skills: {
            title: "Habilidades Técnicas",
            categories: [
                { name: "Frontend & UI", items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Redux Toolkit", "Zustand"] },
                { name: "Backend & Arquitectura", items: ["Node.js", "Express", "NestJS", "Medusa", "Microservicios", "REST", "SOAP/XML", "SSE", "EventBus"] },
                { name: "Infraestructura & Cloud", items: ["Railway", "Vercel", "AWS S3", "Docker", "CI/CD", "Reverse Proxy (Traefik)"] },
                { name: "Bases de Datos", items: ["PostgreSQL", "MySQL", "Redis (Pub/Sub)", "MeiliSearch", "Optimización SQL"] },
                { name: "IA & Automatización", items: ["OpenAI API", "Claude Code", "Cursor", "Copilot", "Prompt Engineering", "RAG"] }
            ]
        },
        education: {
            title: "Educación",
            items: [
                {
                    degree: "Licenciatura en Informática",
                    institution: "Universidad Nacional de La Plata (UNLP)",
                    status: "En curso"
                },
                {
                    degree: "Full Stack Engineer & React.JS Developer",
                    institution: "EducaciónIT",
                    status: "Completado"
                }
            ]
        },
        testimonials: {
            title: "Recomendaciones de LinkedIn",
            items: [
                {
                    text: "Elian es un desarrollador excepcional. Su capacidad para entender problemas complejos de negocio y traducirlos en soluciones técnicas eficientes fue clave en nuestro equipo.",
                    author: "Colega o Manager",
                    position: "Senior Engineer en Empresa X",
                    link: "https://www.linkedin.com/in/elian-cueva-coronel/"
                },
                {
                    text: "Trabajar con Elian ha sido una gran experiencia. Siempre está dispuesto a aprender y aplicar nuevas herramientas de IA para potenciar su código y el del equipo.",
                    author: "Otro Colega",
                    position: "Product Manager en Empresa Y",
                    link: "https://www.linkedin.com/in/elian-cueva-coronel/"
                }
            ]
        },
        philosophy: {
            title: "Construyendo de forma más inteligente con IA.",
            description: "Escribo código apoyándome en la Inteligencia Artificial. Utilizo herramientas como Cursor, Claude Code y Copilot como mis asistentes diarios. Esto me permite reducir el tiempo en el boilerplate, acelerar mi aprendizaje y explorar soluciones rápidamente. Mi enfoque principal sigue siendo comprender la lógica de negocio y la arquitectura, usando la IA para potenciar la entrega de valor real."
        },
        contact: {
            title: "Construyamos grandes aplicaciones.",
            description: "Actualmente busco mi próxima oportunidad como desarrollador Full Stack en modalidad remota. Si tu equipo busca a alguien proactivo, que aprende rápido y prioriza las buenas prácticas, hablemos.",
            email: "eliancuevac@gmail.com",
            links: { github: "https://github.com/eliancue", linkedin: "https://www.linkedin.com/in/elian-cueva-coronel/", cv: "/cv_es.pdf" }
        },
        nav: { cv: "CV", contact: "Contacto", cases: "Casos de Estudio" }
    },
    en: {
        hero: {
            title: "Full Stack Developer. Software Engineer.",
            subtitle: "I am Elian Cueva, a Full Stack Developer specializing in React, Next.js, and Node.js. I build scalable applications, ranging from dynamic interfaces to resilient backend architectures. Real-world production experience.",
            ctaPrimary: "View Experience",
            ctaSecondary: "Download Resume",
        },
        about: {
            title: "Beyond the code.",
            description: "I am a developer passionate about creating efficient and scalable web solutions. Beyond writing Front-end or Back-end code, I seek to understand real business needs to build tools that facilitate daily operations. As a Computer Science student at UNLP and a developer with proven production experience, I enjoy designing intuitive interfaces and robust architectures that bring direct value to users.",
        },
        caseStudies: {
            title: "Case Studies",
            subtitle: "Real experience solving business problems in production.",
            detailsTrigger: "View Decisions & Impact",
            solutionLabel: "Technical Solution",
            decisionsLabel: "Key Decisions:",
            impactLabel: "Business Impact:",
            items: [
                {
                    id: "logistics-engine",
                    title: "Shipping Integration (4 carriers)",
                    problem: "The e-commerce needed to automate shipments without external portals. Each carrier (OnTime, GTS, GLS, FedEx) had different APIs and formats.",
                    solution: "Built a unified REST client in Node.js/TypeScript handling all 4 carriers. OnTime uses legacy SOAP/XML, others use REST. Implemented PDF/ZPL label generation, tracking and country validation.",
                    stack: ["Node.js", "TypeScript", "MedusaJS", "SOAP", "REST API", "PDF", "ZPL"],
                    decisions: "Avoided heavy SOAP libraries by building custom XML clients. Implemented 30s timeout with error diagnostics. Handled responses in multiple formats (array, object) due to inconsistent API.",
                    impact: "Centralized logistics flow. Operators process hundreds of daily shipments without leaving the ERP.",
                },
                {
                    id: "ai-support",
                    title: "WhatsApp AI Chatbot",
                    problem: "Customers contacted via WhatsApp about scooters, spare parts and order status. There was no way to automate responses or manage conversations from the ERP.",
                    solution: "Built chatbot with OpenAI Assistants API + Twilio Webhooks. Implemented thread management per user, conversation persistence and keywords to classify products (scooters, skates, parts).",
                    stack: ["Node.js", "OpenAI API", "Twilio", "TypeScript", "PostgreSQL"],
                    decisions: "Used OpenAI Assistants with threads to maintain conversation context. Implemented keywords to detect inquiry type. Persisted threads in DB to recover context between sessions.",
                    impact: "Automation of frequent inquiries. Agents have complete history in the ERP.",
                },
                {
                    id: "analytics-engine",
                    title: "Analytics Engine with Cache",
                    problem: "The metrics panel calculated LTV, AOV, Growth crossing thousands of records with timezones. N+1 queries caused +15 second timeouts.",
                    solution: "Built an isolated analytics service. Implemented cache with 15-min TTL and predictive hashing generating unique keys by date/range/filters. Migrated calculations from DB to Node.js.",
                    stack: ["Node.js", "PostgreSQL", "Redis", "TypeScript"],
                    decisions: "Hashing normalizes filters (sorts keys, removes duplicates) to avoid duplicate queries. 15-min TTL balances freshness with performance.",
                    impact: "Latency reduced from >15s to <50ms. CSV and HTML export.",
                },
                {
                    id: "workshop-appointments",
                    title: "Warranties, Appointments and Tasklist",
                    problem: "Warranty management, workshop appointments and internal tasks were scattered. No way to track warranty status or coordinate service slots.",
                    solution: "Built 3 modules: Warranties (states, attachments, assignments, reopening), Appointments (post-sale workshop scheduling) and Tasklist (tasks with states, time tracking, categories, break tasks).",
                    stack: ["Node.js", "TypeScript", "MedusaJS", "PostgreSQL", "React"],
                    decisions: "Tasklist implements states: pending, in_progress, issue, completed. Each task can have logged time. Warranties have state workflow with role-based permissions.",
                    impact: "Centralized post-sale and operational task management in the ERP.",
                }
            ]
        },
        skills: {
            title: "Technical Skills",
            categories: [
                { name: "Frontend & UI", items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Redux Toolkit", "Zustand"] },
                { name: "Backend & Architecture", items: ["Node.js", "Express", "NestJS", "Medusa", "Microservices", "REST", "SOAP/XML", "SSE", "EventBus"] },
                { name: "Infrastructure & Cloud", items: ["Railway", "Vercel", "AWS S3", "Docker", "CI/CD", "Reverse Proxy (Traefik)"] },
                { name: "Databases", items: ["PostgreSQL", "MySQL", "Redis (Pub/Sub)", "MeiliSearch", "SQL Optimization"] },
                { name: "AI & Automation", items: ["OpenAI API", "Claude Code", "Cursor", "Copilot", "Prompt Engineering", "RAG"] }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    degree: "Bachelor in Computer Science",
                    institution: "Universidad Nacional de La Plata (UNLP)",
                    status: "In progress"
                },
                {
                    degree: "Full Stack Engineer & React.JS Developer",
                    institution: "EducaciónIT",
                    status: "Completed"
                }
            ]
        },
        testimonials: {
            title: "LinkedIn Recommendations",
            items: [
                {
                    text: "Elian is an exceptional developer. His ability to understand complex business problems and translate them into efficient technical solutions was key in our team.",
                    author: "Colleague or Manager",
                    position: "Senior Engineer at Company X",
                    link: "https://www.linkedin.com/in/elian-cueva-coronel/"
                },
                {
                    text: "Working with Elian has been a great experience. He is always willing to learn and apply new AI tools to empower his code and the team's.",
                    author: "Another Colleague",
                    position: "Product Manager at Company Y",
                    link: "https://www.linkedin.com/in/elian-cueva-coronel/"
                }
            ]
        },
        philosophy: {
            title: "Building smarter with AI.",
            description: "I write code relying on Artificial Intelligence. I use tools like Cursor, Claude Code, and Copilot as my daily pair programming assistants. This allows me to reduce boilerplate time, accelerate my learning, and explore solutions faster. My main focus remains deeply understanding the business logic and app architecture, using AI to boost value delivery."
        },
        contact: {
            title: "Let's build great applications.",
            description: "I am currently looking for my next opportunity as a remote Full Stack developer. If your team is looking for someone proactive who learns fast and prioritizes good practices, let's talk.",
            email: "eliancuevac@gmail.com",
            links: { github: "https://github.com/eliancue", linkedin: "https://www.linkedin.com/in/elian-cueva-coronel/", cv: "/cv_en.pdf" }
        },
        nav: { cv: "Resume", contact: "Contact", cases: "Case Studies" }
    }
};
