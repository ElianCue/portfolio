export type Language = 'es' | 'en';

export const content = {
    es: {
        hero: {
            title: "Desarrollador Full Stack. Software Engineer.",
            subtitle: "Soy Elian Cueva, un desarrollador Full Stack especializado en React, Next.js y Node.js. Construyo aplicaciones escalables, desde interfaces dinámicas hasta arquitecturas backend resilientes. Aporto más de 2 años de experiencia real entregando valor en entornos de producción.",
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
                    title: "Full Stack Logistics & Sales Operations (OnTime/GLS)",
                    problem: "El e-commerce requería automatizar de forma confiable envíos pesados y además centralizar estas operaciones logísticas en una interfaz administrativa ágil para procesar cientos de órdenes diarias sin depender de portales externos.",
                    solution: "Desarrollo Full Stack de un módulo logístico para MedusaJS. En el backend, construí un enrutador dinámico híbrido (SOAP para envíos estándar, API REST GTS para palets). En el frontend (React), desarrollé un Dashboard administrativo completo con filtros de búsqueda complejos, generación masiva de envíos, impresión de etiquetas nativas en PDF/ZPL por lotes y exportaciones a Excel.",
                    stack: ["React", "React Query", "Medusa UI", "Node.js", "TypeScript", "SOAP/XML", "REST API"],
                    decisions: "En el Front: Manejo de estado sintético para actualizar la UI instantáneamente al crear envíos en lote cruzando datos asíncronos. En el Back: Evitar librerías SOAP pesadas inyectando clientes XML a medida y validación prioritaria para evitar Timeouts.",
                    impact: "Centralización total del flujo logístico. Los operarios pasaron de procesar envíos uno a uno en portales lentos, a despachar pedidos e imprimir etiquetas masivamente en segundos sin salir del ERP, reduciendo errores humanos en un 100%.",
                },
                {
                    id: "ai-support",
                    title: "AI Support Inbox & Event-Driven Architecture",
                    problem: "Los agentes de ventas necesitaban ver y tomar el control del historial de WhatsApp en tiempo real dentro del ERP, pero hacer polling (peticiones continuas) a Twilio derribaba el rendimiento del Backoffice, además de carecer de una UI de gestión efectiva.",
                    solution: "Diseño asíncrono manejado por eventos (`EventBus`). Desarrollé un endpoint Server-Sent Events (SSE) reactivo. En el Frontend (React), construí un Inbox con control de modos (IA Autónoma vs Agente Humano), alertas urgentes, categorización automática en departamentos y visualización de analíticas.",
                    stack: ["Node.js", "React", "React Query", "Server-Sent Events (SSE)", "Twilio Webhooks", "EventBus"],
                    decisions: "Usé SSE (unidireccional: Servidor -> Cliente) para el streaming del historial evitando el overhead de WebSockets completos y delegué persistencia local en caché (localStorage/Query) en el Front para cruzar los departamentos asignados instantáneamente.",
                    impact: "Experiencia B2C híbrida ultra-rápida. Cero cargas adicionales en la base principal. Los agentes pueden identificar alertas críticas subidas por la IA y tomar el control manual cerrando ventas en la mitad de tiempo.",
                },
                {
                    id: "analytics-engine",
                    title: "Analytics Engine & In-Memory Caching",
                    problem: "Al escalar las ventas, el panel administrativo de métricas experimentaba Timeouts al calcular On-The-Fly métricas clave (Lifetime Value, Average Order Value, Intermensual Growth) cruzando miles de datos con zonas horarias conflictivas.",
                    solution: "Construcción de un servicio analítico asilado. Migración de cálculos N+1 en la BBDD a un motor de reportes basado en un pipeline matemático en Node, optimizado agresivamente con estrategias de caching en memoria.",
                    stack: ["Node.js", "PostgreSQL", "In-Memory Caching", "Data Parsing", "Cron Jobs"],
                    decisions: "Creación de un generador de hashes predictivos únicos (`generateKey`) basados en el rango de fechas seleccionado (ej. inicio, fin, zona horaria española), reduciendo peticiones duplicadas de lectura SQL.",
                    impact: "Disminución del tiempo de los reportes analíticos de >15 segundos (causando cuellos de botella) a latencias in-memory (<50ms).",
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
                    link: "https://linkedin.com/in/elian-cuevacoronel"
                },
                {
                    text: "Trabajar con Elian ha sido una gran experiencia. Siempre está dispuesto a aprender y aplicar nuevas herramientas de IA para potenciar su código y el del equipo.",
                    author: "Otro Colega",
                    position: "Product Manager en Empresa Y",
                    link: "https://linkedin.com/in/elian-cuevacoronel"
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
            links: { github: "https://github.com/eliancue", linkedin: "https://linkedin.com/in/elian-cuevacoronel", cv: "/cv_es.pdf" }
        },
        nav: { cv: "CV", contact: "Contacto", cases: "Casos de Estudio" }
    },
    en: {
        hero: {
            title: "Full Stack Developer. Software Engineer.",
            subtitle: "I am Elian Cueva, a Full Stack Developer specializing in React, Next.js, and Node.js. I build scalable applications, ranging from dynamic interfaces to resilient backend architectures. I bring over 2 years of real-world production experience delivering value.",
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
                    title: "Full Stack Logistics & Sales Operations (OnTime/GLS)",
                    problem: "The e-commerce needed to reliably automate heavy shipments and centralize these logistics operations within an agile administrative interface to process hundreds of daily orders without relying on external third-party portals.",
                    solution: "Full Stack development of a logistics module for MedusaJS. On the backend, engineered a hybrid dynamic router (SOAP & GTS REST API). On the frontend (React), developed a full Admin Dashboard featuring infinite-scroll paginations, bulk massive shipment creation, native multi-batch PDF/ZPL label printing, and Excel exports.",
                    stack: ["React", "React Query", "Medusa UI", "Node.js", "TypeScript", "SOAP/XML", "REST API"],
                    decisions: "Frontend: Leveraged synthetic states for instantaneous optimistic UI updates upon bulk creation bridging disjointed DB states. Backend: Avoided bloated SOAP libraries by manually building XML payloads and strictly validating pre-dispatch parameters.",
                    impact: "Total centralization of the logistics flow. Operators shifted from processing shipments 1-by-1 on external slow portals to dispatching and printing labels massively in seconds inside the ERP, reducing human errors by 100%.",
                },
                {
                    id: "ai-support",
                    title: "AI Support Inbox & Event-Driven Architecture",
                    problem: "Sales agents needed to take over WhatsApp threads in real-time inside the ERP, but continuously polling the Twilio API was drastically crashing the Backoffice performance with no proper Inbox Management UI.",
                    solution: "Designed an asynchronous event-driven system (`EventBus`). Built a reactive Server-Sent Events (SSE) endpoint. On the Frontend (React), shipped a full Inbox with Autonomous AI vs Human Agent mode toggling, urgent escalations alerts, automatic department routing, and behavior analytics.",
                    stack: ["Node.js", "React", "React Query", "Server-Sent Events (SSE)", "Twilio Webhooks", "EventBus"],
                    decisions: "Chose SSE (unidirectional: Server -> Client) over massive WebSockets to stream history mitigating server resource overhead, relying heavily on client-side caching to instantaneously link internal ERP structural data and custom routing states.",
                    impact: "Lightning-fast hybrid B2C experience. Zero additional loads on the core database while providing a live transactional inbox view that allows human agents to visually spot AI escalations and close deals in half the time.",
                },
                {
                    id: "analytics-engine",
                    title: "Analytics Engine & In-Memory Caching",
                    problem: "As sales scaled, the administrative metrics dashboard experienced critical Timeouts when calculating on-the-fly KPIs (LTV, AOV, Month-over-Month Growth) traversing thousands of records with conflicting Spanish timezones.",
                    solution: "Engineered an isolated analytical service. Migrated N+1 SQL computations to a NodeJS math-pipeline reporting engine, aggressively optimized using in-memory caching strategies.",
                    stack: ["Node.js", "PostgreSQL", "In-Memory Caching", "Data Parsing", "Cron Jobs"],
                    decisions: "Created a unique predictive hashing generator (`generateKey`) dynamically based on the exact selected date ranges, effectively reducing duplicate SQL read queries under concurrent load.",
                    impact: "Decreased reporting response times from >15 seconds (major bottleneck status) to sub-50ms in-memory latencies, enabling effortless bulk CSV exports.",
                },
                {
                    id: "workshop-appointments",
                    title: "Workshop & Field Appointments System",
                    problem: "The coordination of repairs (warranties and technical field services) was entirely detached from e-commerce checkouts, leading to manual timeslot scheduling errors and frustrating 'no-shows'.",
                    solution: "Created the complete module (Appointments & Warranties). Forged custom OS entities (ORM), dynamically routed endpoints based on Workshop branch IDs, and integrated Twilio notifications utilizing scheduled jobs.",
                    stack: ["Node.js", "Medusa Framework", "React", "Twilio API", "PostgreSQL"],
                    decisions: "Designed an asynchronous flow for operational alerts: Decoupled the automated SMS dispatch by calculating a dynamic delay (`setTimeout` task queues) to avoid overwhelming the customer minutes after checkout, respecting working-hour constraints.",
                    impact: "Definitive centralization of the post-sale workshop within the ERP, drastically resolving unjustified absences through a two-step iterative confirmation tunnel via WhatsApp.",
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
                    link: "https://linkedin.com/in/elian-cuevacoronel"
                },
                {
                    text: "Working with Elian has been a great experience. He is always willing to learn and apply new AI tools to empower his code and the team's.",
                    author: "Another Colleague",
                    position: "Product Manager at Company Y",
                    link: "https://linkedin.com/in/elian-cuevacoronel"
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
            links: { github: "https://github.com/eliancue", linkedin: "https://linkedin.com/in/elian-cuevacoronel", cv: "/cv_en.pdf" }
        },
        nav: { cv: "Resume", contact: "Contact", cases: "Case Studies" }
    }
};
