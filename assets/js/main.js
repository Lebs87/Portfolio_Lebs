/**
 * Portfolio Luis Belisario - Main JavaScript
 * Handles Dynamic Multilingual System (ES / EN), Dynamic Experience Calculation,
 * Project Filtering, Smooth Navigation, and UI Interactivity.
 */

const START_YEAR = 2021;

const i18n = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      viewCV: "Ver CV",
      downloadCV: "Descargar PDF",
      cvFile: "./assets/cv/CV_Luis_Belisario_ES.pdf",
      cvFileName: "CV_Luis_Belisario_ES.pdf"
    },
    hero: {
      badge: "Disponible para proyectos y oportunidades en Madrid / Remoto",
      greeting: "Hola, soy",
      name: "Luis Belisario",
      role: "Full Stack Developer | BI & Data Analyst",
      summary: "Especializado en React, Node.js y soluciones de Business Intelligence orientadas a negocio. Convierto requerimientos complejos en aplicaciones web escalables, pipelines de datos y dashboards de alto impacto.",
      btnProjects: "Ver Proyectos",
      btnContact: "Contactar",
      btnCvOnline: "Ver CV Online / Imprimir",
      downloadCvEs: "Descargar CV (Español)",
      downloadCvEn: "Download CV (English)",
      location: "Madrid, España"
    },
    about: {
      tag: "Conóceme",
      title: "Sobre mí",
      p1: "Soy <strong>Full Stack Developer y Licenciado</strong> con sólida experiencia en la creación de aplicaciones web, diseño de APIs robustas y desarrollo de soluciones de Business Intelligence orientadas a la toma de decisiones estratégicas.",
      p2: "Cuento con un fuerte dominio de <strong>JavaScript, TypeScript, React y Node.js</strong>, complementado con capacidades analíticas avanzadas en <strong>PostgreSQL, Power BI, Grafana y arquitecturas ETL</strong>. He participado en proyectos de gran envergadura en sectores de logística, seguros, e-commerce y Big Data.",
      p3: "Me apasiona transformar datos en valor operativo y construir interfaces intuitivas y de alto rendimiento que resuelvan problemas reales de negocio.",
      statYears: "Años de Exp.",
      statRoles: "Frontend, Backend & BI",
      statLocation: "Madrid, España",
      videoTitle: "Presentación en Video",
      videoSubtitle: "Conoce un poco más de mi trayectoria y enfoque profesional:"
    },
    experience: {
      tag: "Trayectoria",
      title: "Experiencia Profesional",
      present: "Actual",
      roles: {
        neotalent: {
          period: "Mayo 2024 – Actual",
          role: "Full Stack Developer | BI Developer | Data Analyst",
          company: "Neotalent (SICE)",
          location: "Madrid, España",
          d1: "Desarrollo y mantenimiento de aplicaciones web frontend y backend para clientes corporativos internos y externos.",
          d2: "Diseño e implementación de dashboards de Business Intelligence y procesos ETL para monitoreo operativo de métricas en tiempo real e históricas.",
          d3: "Optimización y automatización de procesos utilizando React, Node.js, Python y SQL sobre PostgreSQL.",
          stack: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "PostgreSQL", "Docker", "Power BI", "Grafana"]
        },
        celta: {
          period: "Feb 2022 – Mayo 2024",
          role: "Full Stack Developer",
          company: "Celta Consulting",
          location: "Argentina / Remoto",
          d1: "Desarrollo de soluciones web y plataformas para gestión de flotas y administración de pólizas.",
          d2: "Participación en el desarrollo e integración de sistemas internos para RRHH y operaciones administrativas.",
          d3: "Trabajo colaborativo bajo marcos ágiles (Scrum/Trello) asegurando entregas continuas y código mantenible.",
          stack: ["JavaScript", "TypeScript", "React", "Angular", "Redux", "Node.js", "MySQL", "MongoDB"]
        },
        gurus: {
          period: "Jun 2023 – Oct 2023",
          role: "Full Stack Developer / Frontend Leader",
          company: "Celta Consulting (Gurus AWS - Conectando Materiales)",
          location: "Argentina / Remoto",
          d1: "Liderazgo técnico de Frontend para plataforma web de subastas de productos y servicios.",
          d2: "Estimación técnica, resolución de incidencias complejas y despliegue de mejoras funcionales continuas.",
          d3: "Implementación de buenas prácticas de arquitectura y control de versiones mediante Git y AWS CodeCommit.",
          stack: ["React", "Node.js", "Axios", "TypeScript", "Redux", "AWS CodeCommit", "Scrum"]
        },
        freelance: {
          period: "Sep 2021 – Feb 2022",
          role: "Web Developer Freelance",
          company: "Proyectos Independientes",
          location: "Remoto",
          d1: "Desarrollo de sitios web a medida para e-commerce y nuevos emprendimientos.",
          d2: "Personalización y administración de plataformas CMS, optimización visual y de rendimiento.",
          d3: "Implementación de interfaces totalmente responsivas con HTML5, SASS y JavaScript.",
          stack: ["JavaScript", "React", "Node.js", "SASS", "WordPress"]
        }
      }
    },
    projects: {
      tag: "Portafolio",
      title: "Proyectos Destacados",
      filterAll: "Todos",
      filterFullStack: "Full Stack",
      filterBI: "BI & Data",
      filterMobile: "Mobile",
      visitBtn: "Ver Proyecto",
      repoBtn: "Detalles en Experiencia",
      items: {
        neotalent: {
          title: "Monitoreo Operativo & Dashboards ETL",
          category: "bi",
          desc: "Plataforma de visualización de datos operacionales, métricas en tiempo real y pipelines ETL para infraestructura y logística.",
          role: "BI & Full Stack"
        },
        bibliaKiri: {
          title: "Biblia Kiri - App Móvil",
          category: "mobile",
          desc: "Aplicación móvil completa publicada en Google Play Store para lectura, búsqueda y estudio bíblico interactivo.",
          role: "React Native & Firebase"
        },
        conectandoMateriales: {
          title: "Conectando Materiales",
          category: "fullstack",
          desc: "Plataforma B2B de subastas y compras industriales en tiempo real desarrollada para Gurus AWS (proyecto corporativo cerrado).",
          role: "Frontend Leader (Gurus AWS)",
          status: "Plataforma Corporativa"
        },
        celtaHR: {
          title: "Sistema de Gestión & RRHH",
          category: "fullstack",
          desc: "Suite de soluciones web para administración de recursos humanos, pólizas y gestión logística de flotas.",
          role: "Full Stack Developer"
        },
        fabyHogar: {
          title: "Faby Hogar E-commerce",
          category: "fullstack",
          desc: "Tienda online desarrollada para un comercio físico real, con catálogo interactivo, carrito y base de datos Firestore.",
          role: "React & Firestore"
        },
        venecake: {
          title: "Venecake Sorpresas",
          category: "fullstack",
          desc: "E-commerce interactivo con carrito de compras dinámico, filtros por categoría y checkout personalizado.",
          role: "JavaScript & CSS"
        }
      }
    },
    skills: {
      tag: "Tecnologías",
      title: "Habilidades Técnicas",
      subtitle: "Un perfil integral que conecta el desarrollo de software moderno con la inteligencia de negocio y analítica de datos.",
      catCore: "Frontend & Lenguajes",
      catBackend: "Backend & Bases de Datos",
      catBI: "BI, Data & Analítica",
      catDevOps: "Cloud, DevOps & Herramientas",
      certificationsTitle: "Certificaciones Profesionales",
      languagesTitle: "Idiomas",
      langEs: "Español: Nativo",
      langEn: "Inglés: B2 Intermedio Profesional",
      desc: {
        react: "Biblioteca UI & SPA",
        typescript: "JavaScript Tipado",
        javascript: "Lenguaje Core Web",
        angular: "Framework Frontend",
        reactNative: "Apps Móviles Nativas",
        nextjs: "SSR & Full Stack React",
        html5: "Estructura Semántica",
        css3: "Estilos & Preprocesador",
        bootstrap: "Framework CSS Responsive",
        redux: "Gestión de Estado Global",
        nodejs: "Entorno Backend JS",
        express: "Framework REST APIs",
        postgresql: "Base de Datos Relacional",
        mysql: "Base de Datos Relacional",
        mongodb: "Base de Datos NoSQL",
        mssql: "Base de Datos Empresarial",
        graphql: "Lenguaje de Consulta APIs",
        nginx: "Servidor Web & Proxy",
        powerbi: "Dashboards & BI",
        grafana: "Métricas en Tiempo Real",
        etl: "Pipelines de Datos & Carga",
        python: "ETL & Scripting de Datos",
        powerquery: "Modelado & Transformación",
        powerautomate: "Automatización de Flujos",
        qlik: "Analítica & Dashboards",
        sqlopt: "Optimización de Consultas",
        docker: "Contenedores & Despliegue",
        aws: "Infraestructura Cloud",
        git: "Control de Versiones",
        firebase: "Backend as a Service",
        postman: "Pruebas & Documentación",
        jira: "Metodologías Ágiles",
        figma: "Diseño UI & Prototipado"
      }
    },
    cert: {
      btnView: "Ver Diploma",
      verified: "✓ Acreditado",
      modalDownload: "⬇ Descargar Imagen",
      modalOpen: "↗ Abrir en Nueva Pestaña",
      fullstack: {
        title: "Desarrollo Full Stack",
        issuer: "Coderhouse • 2023"
      },
      backend: {
        title: "Backend Development",
        issuer: "Coderhouse & PedidosYa • 2023"
      },
      react: {
        title: "React JS (Top 10%)",
        issuer: "Coderhouse • 2022"
      },
      javascript: {
        title: "JavaScript Advanced",
        issuer: "Coderhouse • 2023"
      },
      angular: {
        title: "Angular Developer",
        issuer: "Coderhouse • 2024"
      },
      powerbi: {
        title: "Power BI & Data Analytics",
        issuer: "Udemy & Enetic • 2024"
      },
      desarrolloweb: {
        title: "Desarrollo Web (Top 10%)",
        issuer: "Coderhouse • 2022"
      }
    },
    contact: {
      tag: "Hablemos",
      title: "Contacto Directo",
      p1: "Si deseas coordinar una entrevista (disponible de lunes a viernes de 08:00 a 19:00 en Madrid, España) o comentar una oportunidad, puedes escribirme directamente:",
      whatsappBtn: "Chatear por WhatsApp",
      emailBtn: "Enviar Correo",
      linkedinBtn: "Ver Perfil en LinkedIn",
      telegramBtn: "Mensaje en Telegram",
      infoTitle: "Datos Directos:",
      locationLabel: "Ubicación:",
      locationVal: "Madrid, España",
      emailLabel: "Email:",
      phoneLabel: "Teléfono / WhatsApp:"
    },
    footer: {
      rights: "Todos los derechos reservados.",
      githubPages: "Publicado en GitHub Pages."
    },
    orbit: {
      back: "Volver a Áreas",
      defaultTitle: "Habilidades Técnicas",
      defaultDesc: "Pasa el ratón para pausar y haz clic para explorar herramientas"
    }
  },
  en: {
    nav: {
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      viewCV: "View CV",
      downloadCV: "Download PDF",
      cvFile: "./assets/cv/CV_Luis_Belisario_EN.pdf",
      cvFileName: "CV_Luis_Belisario_EN.pdf"
    },
    hero: {
      badge: "Open to opportunities & projects in Madrid / Remote",
      greeting: "Hi, I'm",
      name: "Luis Belisario",
      role: "Full Stack Developer | BI & Data Analyst",
      summary: "Specialized in React, Node.js, and business-driven Business Intelligence solutions. I transform complex business challenges into scalable web apps, robust data pipelines, and high-impact dashboards.",
      btnProjects: "View Projects",
      btnContact: "Get in Touch",
      btnCvOnline: "View Online CV / Print",
      downloadCvEs: "Descargar CV (Spanish)",
      downloadCvEn: "Download CV (English)",
      location: "Madrid, Spain"
    },
    about: {
      tag: "Get to know me",
      title: "About Me",
      p1: "I am a <strong>Full Stack Developer and Graduate</strong> with extensive experience creating web applications, architecting robust APIs, and developing Business Intelligence solutions tailored for strategic decision-making.",
      p2: "I have deep expertise in <strong>JavaScript, TypeScript, React, and Node.js</strong>, combined with advanced analytical skills in <strong>PostgreSQL, Power BI, Grafana, and ETL pipelines</strong>. I have contributed to enterprise projects across logistics, insurance, e-commerce, and Big Data.",
      p3: "I am passionate about turning raw data into operational value and crafting high-performance, intuitive user interfaces that solve real business problems.",
      statYears: "Years of Exp.",
      statRoles: "Frontend, Backend & BI",
      statLocation: "Madrid, Spain",
      videoTitle: "Video Presentation",
      videoSubtitle: "Discover my background and professional approach:"
    },
    experience: {
      tag: "Career Path",
      title: "Work Experience",
      present: "Present",
      roles: {
        neotalent: {
          period: "May 2024 – Present",
          role: "Full Stack Developer | BI Developer | Data Analyst",
          company: "Neotalent (SICE)",
          location: "Madrid, Spain",
          d1: "Development and maintenance of frontend and backend web applications for internal and external enterprise clients.",
          d2: "Design and deployment of BI dashboards and ETL pipelines for real-time and historical operational monitoring and metrics visualization.",
          d3: "Optimization and automation of business processes utilizing React, Node.js, Python, and SQL on PostgreSQL.",
          stack: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "PostgreSQL", "Docker", "Power BI", "Grafana"]
        },
        celta: {
          period: "Feb 2022 – May 2024",
          role: "Full Stack Developer",
          company: "Celta Consulting",
          location: "Argentina / Remote",
          d1: "Developed web platforms and solutions for fleet and insurance policy management.",
          d2: "Built and integrated internal enterprise systems for Human Resources and administrative workflows.",
          d3: "Collaborated under Agile methodologies (Scrum/Trello) ensuring continuous delivery and clean, maintainable code.",
          stack: ["JavaScript", "TypeScript", "React", "Angular", "Redux", "Node.js", "MySQL", "MongoDB"]
        },
        gurus: {
          period: "Jun 2023 – Oct 2023",
          role: "Full Stack Developer / Frontend Leader",
          company: "Celta Consulting (Gurus AWS - Conectando Materiales)",
          location: "Argentina / Remote",
          d1: "Frontend technical leadership for an industrial auction and marketplace platform.",
          d2: "Conducted technical estimation, complex incident resolution, and incremental feature delivery.",
          d3: "Enforced architectural best practices and team version control using Git and AWS CodeCommit.",
          stack: ["React", "Node.js", "Axios", "TypeScript", "Redux", "AWS CodeCommit", "Scrum"]
        },
        freelance: {
          period: "Sep 2021 – Feb 2022",
          role: "Web Developer Freelance",
          company: "Independent Projects",
          location: "Remote",
          d1: "Built custom websites and responsive interfaces for e-commerce and startup ventures.",
          d2: "Customized and administered CMS platforms, with performance and visual optimization.",
          d3: "Developed responsive experiences using HTML5, SASS, and modern JavaScript.",
          stack: ["JavaScript", "React", "Node.js", "SASS", "WordPress"]
        }
      }
    },
    projects: {
      tag: "Showcase",
      title: "Featured Projects",
      filterAll: "All",
      filterFullStack: "Full Stack",
      filterBI: "BI & Data",
      filterMobile: "Mobile",
      visitBtn: "Visit Project",
      repoBtn: "Details in Experience",
      items: {
        neotalent: {
          title: "Operations Monitoring & ETL Dashboards",
          category: "bi",
          desc: "Operational data visualization platform with real-time metrics and ETL pipelines for infrastructure and logistics.",
          role: "BI & Full Stack"
        },
        bibliaKiri: {
          title: "Biblia Kiri - Mobile App",
          category: "mobile",
          desc: "Full-featured mobile application published on Google Play Store for interactive reading, search, and study.",
          role: "React Native & Firebase"
        },
        conectandoMateriales: {
          title: "Conectando Materiales",
          category: "fullstack",
          desc: "B2B industrial marketplace and auction web app built for Gurus AWS (internal corporate platform).",
          role: "Frontend Leader (Gurus AWS)",
          status: "Corporate Platform"
        },
        celtaHR: {
          title: "HR & Operations Management System",
          category: "fullstack",
          desc: "Web solution suite for Human Resources workflows, policies, and fleet management.",
          role: "Full Stack Developer"
        },
        fabyHogar: {
          title: "Faby Hogar E-commerce",
          category: "fullstack",
          desc: "Online store developed for a real physical retailer, featuring product catalog, shopping cart, and Firestore DB.",
          role: "React & Firestore"
        },
        venecake: {
          title: "Venecake Sorpresas",
          category: "fullstack",
          desc: "Interactive e-commerce platform with dynamic cart calculations, category filters, and customized checkout.",
          role: "JavaScript & CSS"
        }
      }
    },
    skills: {
      tag: "Technologies",
      title: "Technical Skills",
      subtitle: "A dual-strength profile bridging modern software engineering with business intelligence and data analytics.",
      catCore: "Frontend & Languages",
      catBackend: "Backend & Databases",
      catBI: "BI, Data & Analytics",
      catDevOps: "Cloud, DevOps & Tooling",
      certificationsTitle: "Professional Certifications",
      languagesTitle: "Languages",
      langEs: "Spanish: Native speaker",
      langEn: "English: B2 Professional Working Proficiency",
      desc: {
        react: "UI Library & SPA",
        typescript: "Typed JavaScript",
        javascript: "Core Web Language",
        angular: "Frontend Framework",
        reactNative: "Cross-Platform Mobile",
        nextjs: "SSR & Full Stack React",
        html5: "Semantic Structure",
        css3: "Styles & Preprocessor",
        bootstrap: "Responsive CSS Framework",
        redux: "Global State Management",
        nodejs: "Backend JS Runtime",
        express: "REST API Framework",
        postgresql: "Relational SQL DB",
        mysql: "Relational SQL DB",
        mongodb: "NoSQL Document DB",
        mssql: "Enterprise SQL Database",
        graphql: "API Query Language",
        nginx: "Web Server & Reverse Proxy",
        powerbi: "Dashboards & BI",
        grafana: "Real-time Metrics",
        etl: "Data Pipelines & Loading",
        python: "Data Scripting & ETL",
        powerquery: "Data Modeling & Transform",
        powerautomate: "Workflow Automation",
        qlik: "Analytics & Dashboards",
        sqlopt: "Query Optimization",
        docker: "Containers & Deployment",
        aws: "Cloud Infrastructure",
        git: "Version Control",
        firebase: "Backend as a Service",
        postman: "API Testing & Docs",
        jira: "Agile & Scrum Tooling",
        figma: "UI Design & Prototyping"
      }
    },
    cert: {
      btnView: "View Diploma",
      verified: "✓ Accredited",
      modalDownload: "⬇ Download Image",
      modalOpen: "↗ Open in New Tab",
      fullstack: {
        title: "Full Stack Web Developer",
        issuer: "Coderhouse • 2023"
      },
      backend: {
        title: "Backend Development",
        issuer: "Coderhouse & PedidosYa • 2023"
      },
      react: {
        title: "React JS (Top 10%)",
        issuer: "Coderhouse • 2022"
      },
      javascript: {
        title: "JavaScript Advanced",
        issuer: "Coderhouse • 2023"
      },
      angular: {
        title: "Angular Developer",
        issuer: "Coderhouse • 2024"
      },
      powerbi: {
        title: "Power BI & Data Analytics",
        issuer: "Udemy & Enetic • 2024"
      },
      desarrolloweb: {
        title: "Web Development (Top 10%)",
        issuer: "Coderhouse • 2022"
      }
    },
    contact: {
      tag: "Get in touch",
      title: "Direct Contact",
      p1: "If you'd like to schedule an interview (available Mon–Fri, 08:00 to 19:00 in Madrid, Spain) or discuss an opportunity, feel free to reach out directly:",
      whatsappBtn: "Chat on WhatsApp",
      emailBtn: "Send Email",
      linkedinBtn: "View LinkedIn Profile",
      telegramBtn: "Telegram Message",
      infoTitle: "Direct Info:",
      locationLabel: "Location:",
      locationVal: "Madrid, Spain",
      emailLabel: "Email:",
      phoneLabel: "Phone / WhatsApp:"
    },
    footer: {
      rights: "All rights reserved.",
      githubPages: "Hosted on GitHub Pages."
    },
    orbit: {
      back: "Back to Areas",
      defaultTitle: "Technical Skills",
      defaultDesc: "Hover to pause orbit, click to explore tools"
    }
  }
};

// State
let currentLang = localStorage.getItem("lebs_portfolio_lang") || "es";

/**
 * Calculates years of experience dynamically starting from 2021
 * and updates footer copyright year
 */
function updateDynamicYears() {
  const currentYear = new Date().getFullYear();
  
  // Years of experience (+5, +6...)
  const years = Math.max(1, currentYear - START_YEAR);
  const yearsElement = document.getElementById("yearsOfExperience");
  if (yearsElement) {
    yearsElement.textContent = `+${years}`;
  }

  // Footer copyright year (© 2026, 2027...)
  const footerYearElem = document.getElementById("currentYear");
  if (footerYearElem) {
    footerYearElem.textContent = currentYear;
  }
}

/**
 * Apply translations to DOM elements with data-i18n attributes
 */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lebs_portfolio_lang", lang);
  document.documentElement.lang = lang;

  const data = i18n[lang];
  if (!data) return;

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keyPath = el.getAttribute("data-i18n").split(".");
    let val = data;
    for (const key of keyPath) {
      if (val && val[key] !== undefined) {
        val = val[key];
      } else {
        val = null;
        break;
      }
    }
    if (val !== null) {
      if (typeof val === "string") {
        el.innerHTML = val;
      }
    }
  });

  // Update CV download links to point to current language file
  document.querySelectorAll(".cv-download-link").forEach((link) => {
    link.setAttribute("href", data.nav.cvFile);
    link.setAttribute("download", data.nav.cvFileName);
  });

  // Update language toggle buttons active state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update orbit system language if initialized
  if (typeof window.updateOrbitLanguage === "function") {
    window.updateOrbitLanguage(lang);
  }
}

/**
 * Project filter functionality
 */
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category.includes(filter)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 30);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

/**
 * Mobile Navbar Toggle
 */
function setupNavbar() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      toggleBtn.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        toggleBtn.classList.remove("active");
      });
    });
  }

  // Navbar shadow on scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/**
 * Initialize on DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", () => {
  // Setup dynamic years
  updateDynamicYears();

  // Setup language
  applyLanguage(currentLang);

  // Language buttons click
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang !== currentLang) {
        applyLanguage(selectedLang);
      }
    });
  });

  // Setup components
  setupThemeToggle();
  setupProjectFilters();
  setupNavbar();
  setupCertModal();
  setupOrbitSystem();
});

/**
 * Setup Theme Toggle (Light / Dark)
 */
function setupThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("lebs_portfolio_theme") || "light";

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (toggleBtn) toggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (toggleBtn) toggleBtn.innerHTML = '<i class="ri-moon-line"></i>';
    }
    localStorage.setItem("lebs_portfolio_theme", theme);
  }

  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }
}

/**
 * Certificate Data Map (Spanish & English diplomas)
 */
const certificateMap = {
  fullstack: {
    titleEs: "Carrera de Desarrollo Full Stack",
    titleEn: "Full Stack Web Development Career",
    issuerEs: "Coderhouse • Mayo 2023 (51 semanas)",
    issuerEn: "Coderhouse • May 2023 (51 weeks)",
    fileEs: "./assets/certificates/certificado-fullstack.jpg",
    fileEn: "./assets/certificates/certificado-fullstack.jpg"
  },
  backend: {
    titleEs: "Backend Development",
    titleEn: "Backend Development",
    issuerEs: "Coderhouse & PedidosYa • Mayo 2023",
    issuerEn: "Coderhouse & PedidosYa • May 2023",
    fileEs: "./assets/certificates/certificado-backend.png",
    fileEn: "./assets/certificates/certificate-backend.png"
  },
  react: {
    titleEs: "React JS (Top 10% Mejor Promedio)",
    titleEn: "React JS Specialist (Top 10% Class Honors)",
    issuerEs: "Coderhouse • Noviembre 2022",
    issuerEn: "Coderhouse • November 2022",
    fileEs: "./assets/certificates/certificado-react.jpg",
    fileEn: "./assets/certificates/certificado-react.jpg"
  },
  angular: {
    titleEs: "Angular Developer",
    titleEn: "Angular Developer",
    issuerEs: "Coderhouse • Febrero 2024",
    issuerEn: "Coderhouse • February 2024",
    fileEs: "./assets/certificates/certificado-angular.png",
    fileEn: "./assets/certificates/certificado-angular.png"
  },
  javascript: {
    titleEs: "JavaScript Advanced",
    titleEn: "JavaScript Advanced",
    issuerEs: "Coderhouse • 2023",
    issuerEn: "Coderhouse • 2023",
    fileEs: "./assets/certificates/certificado-js-coderhouse.png",
    fileEn: "./assets/certificates/certificate-js-coderhouse.png"
  },
  powerbi: {
    titleEs: "Power BI TOTAL - Analista de Datos Avanzado",
    titleEn: "Power BI TOTAL - Advanced Data Analyst",
    issuerEs: "Udemy & Enetic Proyectos (MS Power BI)",
    issuerEn: "Udemy & Enetic Proyectos (MS Power BI)",
    fileEs: "./assets/certificates/certificado-powerbi-udemy.jpg",
    fileEn: "./assets/certificates/certificado-powerbi-udemy.jpg",
    extraFile: "./assets/certificates/certificado-powerbi-enetic.pdf",
    extraLabelEs: "📄 Ver Certificado Enetic (PDF)",
    extraLabelEn: "📄 View Enetic Certificate (PDF)"
  },
  desarrolloweb: {
    titleEs: "Desarrollo Web (Top 10% Mejor Promedio)",
    titleEn: "Web Development (Top 10% Class Honors)",
    issuerEs: "Coderhouse • Julio 2022",
    issuerEn: "Coderhouse • July 2022",
    fileEs: "./assets/certificates/certificado-desarrolloweb.jpg",
    fileEn: "./assets/certificates/certificado-desarrolloweb.jpg"
  }
};

/**
 * Setup Certificate Lightbox Modal
 */
function setupCertModal() {
  const modal = document.getElementById("certModal");
  const modalTitle = document.getElementById("certModalTitle");
  const modalSubtitle = document.getElementById("certModalSubtitle");
  const modalImg = document.getElementById("certModalImg");
  const modalDownload = document.getElementById("certModalDownload");
  const modalOpen = document.getElementById("certModalOpen");
  const closeBtn = document.getElementById("certModalClose");
  const backdrop = document.getElementById("certModalBackdrop");

  if (!modal || !modalImg) return;

  function openModal(certKey) {
    const cert = certificateMap[certKey];
    if (!cert) return;

    const isEn = currentLang === "en";
    const file = isEn ? cert.fileEn : cert.fileEs;
    const title = isEn ? cert.titleEn : cert.titleEs;
    const issuer = isEn ? cert.issuerEn : cert.issuerEs;

    modalTitle.textContent = title;
    modalSubtitle.textContent = issuer;
    modalImg.src = file;
    modalImg.alt = `${title} - ${issuer}`;

    modalDownload.href = file;
    modalDownload.download = file.split("/").pop();
    modalOpen.href = file;

    // Optional second file button (e.g. Enetic PDF)
    const extraBtn = document.getElementById("certModalExtra");
    if (extraBtn) {
      if (cert.extraFile) {
        extraBtn.style.display = "inline-flex";
        extraBtn.href = cert.extraFile;
        extraBtn.textContent = isEn ? cert.extraLabelEn : cert.extraLabelEs;
      } else {
        extraBtn.style.display = "none";
      }
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Trigger clicks on cards or buttons
  document.querySelectorAll(".cert-card.has-cert").forEach((card) => {
    card.addEventListener("click", (e) => {
      const key = card.getAttribute("data-cert-key");
      if (key) openModal(key);
    });
  });

  // Direct button clicks
  document.querySelectorAll(".btn-cert-view").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = btn.getAttribute("data-cert-key");
      if (key) openModal(key);
    });
  });

  // Close handlers
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * ==========================================================================
 * Interactive Planetary Skills Orbit System
 * ==========================================================================
 */
const orbitSkillsData = {
  categories: [
    {
      id: "frontend",
      nameEs: "Frontend Development",
      nameEn: "Frontend Development",
      icon: "ri-code-s-slash-line",
      color: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.45)",
      hintEs: "5 herramientas • Haz clic para explorar",
      hintEn: "5 tools • Click to explore",
      tools: [
        { name: "React.js", descEs: "Interfaces dinámicas, Hooks y Single Page Applications", descEn: "Dynamic UIs, custom hooks & modern SPAs", icon: "ri-reactjs-line", color: "#61dafb", glow: "rgba(97, 218, 251, 0.45)" },
        { name: "TypeScript", descEs: "Tipado estático seguro, interfaces y escalabilidad", descEn: "Static typing, interfaces & scalable architecture", icon: "ri-javascript-line", color: "#3178c6", glow: "rgba(49, 120, 198, 0.45)" },
        { name: "Angular", descEs: "Framework modular para apps empresariales", descEn: "Modular framework for enterprise-grade apps", icon: "ri-angularjs-line", color: "#dd0031", glow: "rgba(221, 0, 49, 0.45)" },
        { name: "Next.js", descEs: "Renderizado SSR, SSG y optimización SEO moderna", descEn: "SSR, SSG rendering & modern SEO optimization", icon: "ri-global-line", color: "#38bdf8", glow: "rgba(56, 189, 248, 0.45)" },
        { name: "Redux", descEs: "Gestión predecible y centralizada del estado global", descEn: "Predictable, centralized application state", icon: "ri-flow-chart", color: "#a855f7", glow: "rgba(168, 85, 247, 0.45)" }
      ]
    },
    {
      id: "backend",
      nameEs: "Backend & Bases de Datos",
      nameEn: "Backend & Databases",
      icon: "ri-server-line",
      color: "#10b981",
      glow: "rgba(16, 185, 129, 0.45)",
      hintEs: "5 herramientas • Haz clic para explorar",
      hintEn: "5 tools • Click to explore",
      tools: [
        { name: "Node.js", descEs: "Arquitectura asíncrona no bloqueante y APIs REST", descEn: "Asynchronous runtime & high-performance REST APIs", icon: "ri-nodejs-line", color: "#68a063", glow: "rgba(104, 160, 99, 0.45)" },
        { name: "PostgreSQL", descEs: "Bases de datos relacionales, consultas complejas y SQL", descEn: "Advanced relational DBs, complex SQL & optimization", icon: "ri-database-2-line", color: "#336791", glow: "rgba(51, 103, 145, 0.45)" },
        { name: "Python", descEs: "Automatización, pipelines ETL y procesamiento de datos", descEn: "Automation, ETL pipelines & data processing", icon: "ri-terminal-box-line", color: "#3b82f6", glow: "rgba(59, 130, 246, 0.45)" },
        { name: "Express.js", descEs: "Framework ágil para microservicios y endpoints REST", descEn: "Fast, unopinionated framework for microservices", icon: "ri-cpu-line", color: "#94a3b8", glow: "rgba(148, 163, 184, 0.45)" },
        { name: "MongoDB", descEs: "Almacenamiento NoSQL documental flexible y escalable", descEn: "Scalable document-oriented NoSQL storage", icon: "ri-leaf-line", color: "#22c55e", glow: "rgba(34, 197, 94, 0.45)" }
      ]
    },
    {
      id: "bi",
      nameEs: "Business Intelligence",
      nameEn: "Business Intelligence",
      icon: "ri-bar-chart-box-line",
      color: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      hintEs: "4 herramientas • Haz clic para explorar",
      hintEn: "4 tools • Click to explore",
      tools: [
        { name: "Power BI", descEs: "Dashboards ejecutivos interactivos, DAX y KPIs", descEn: "Interactive executive dashboards, DAX & KPI metrics", icon: "ri-pie-chart-2-line", color: "#f59e0b", glow: "rgba(245, 158, 11, 0.45)" },
        { name: "Grafana", descEs: "Monitoreo en tiempo real y paneles de observabilidad", descEn: "Real-time infrastructure monitoring & dashboards", icon: "ri-dashboard-3-line", color: "#f97316", glow: "rgba(249, 115, 22, 0.45)" },
        { name: "Power Query", descEs: "Extracción, transformación y limpieza de datos (ETL)", descEn: "Data extraction, transformation & ETL modeling", icon: "ri-filter-3-line", color: "#10b981", glow: "rgba(16, 185, 129, 0.45)" },
        { name: "SQL Server", descEs: "Modelado relacional, vistas y procedimientos almacenados", descEn: "Relational database modeling & stored procedures", icon: "ri-table-line", color: "#ef4444", glow: "rgba(239, 68, 68, 0.45)" }
      ]
    },
    {
      id: "cloud",
      nameEs: "Cloud & DevOps",
      nameEn: "Cloud & DevOps",
      icon: "ri-cloud-line",
      color: "#8b5cf6",
      glow: "rgba(139, 92, 246, 0.45)",
      hintEs: "5 herramientas • Haz clic para explorar",
      hintEn: "5 tools • Click to explore",
      tools: [
        { name: "Docker", descEs: "Contenedores, aislamiento y despliegues homogéneos", descEn: "Containerization, isolated environments & deployment", icon: "ri-instance-line", color: "#38bdf8", glow: "rgba(56, 189, 248, 0.45)" },
        { name: "AWS", descEs: "Servicios cloud, S3, CodeCommit y hosting elástico", descEn: "Cloud services, S3, CodeCommit & elastic hosting", icon: "ri-amazon-line", color: "#f59e0b", glow: "rgba(245, 158, 11, 0.45)" },
        { name: "Git & GitHub", descEs: "Control de versiones, flujos de ramas y CI/CD", descEn: "Version control, branching workflows & CI/CD", icon: "ri-git-branch-line", color: "#f97316", glow: "rgba(249, 115, 22, 0.45)" },
        { name: "Postman", descEs: "Pruebas de endpoints, automatización y APIs", descEn: "Endpoint testing, collections & API integration tests", icon: "ri-send-plane-line", color: "#fb923c", glow: "rgba(251, 146, 60, 0.45)" },
        { name: "Firebase", descEs: "Autenticación, Firestore en tiempo real y hosting", descEn: "Authentication, real-time Firestore DB & hosting", icon: "ri-fire-line", color: "#eab308", glow: "rgba(234, 179, 8, 0.45)" }
      ]
    }
  ]
};

let currentOrbitState = {
  level: "categories", // "categories" or category id ("frontend", "backend", "bi", "cloud")
  hoveredItem: null
};

function setupOrbitSystem() {
  const orbitSystem = document.getElementById("orbitSystem");
  const orbitTrackInner = document.getElementById("orbitTrackInner");
  const orbitTrackOuter = document.getElementById("orbitTrackOuter");
  const orbitBackBtn = document.getElementById("orbitBackBtn");
  const orbitCategoryPill = document.getElementById("orbitCategoryPill");
  const orbitTooltip = document.getElementById("orbitTooltip");
  const orbitTooltipDot = document.getElementById("orbitTooltipDot");
  const orbitTooltipTitle = document.getElementById("orbitTooltipTitle");
  const orbitTooltipDesc = document.getElementById("orbitTooltipDesc");
  const avatarWrapper = document.getElementById("avatarWrapper");
  const avatarImgFrame = document.getElementById("avatarImgFrame");

  if (!orbitSystem || !orbitTrackInner || !orbitTrackOuter) return;

  function renderPlanetButton(item, isCategoryLevel, isInner, angle) {
    const carrier = document.createElement("div");
    carrier.className = `orbit-planet-carrier ${isInner ? "carrier-inner" : "carrier-outer"}`;

    const cycleDuration = isInner ? 20 : 34;
    const delaySeconds = -((angle / 360) * cycleDuration).toFixed(3);
    carrier.style.animationDelay = `${delaySeconds}s`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `orbit-planet-btn ${isInner ? "btn-inner" : "btn-outer"} ${isCategoryLevel ? "is-category" : "is-tool"}`;
    btn.style.animationDelay = `${delaySeconds}s`;

    const itemName = isCategoryLevel ? (currentLang === "en" ? item.nameEn : item.nameEs) : item.name;
    btn.setAttribute("aria-label", itemName);
    btn.setAttribute("title", itemName);
    btn.style.setProperty("--planet-color", item.color);
    btn.style.setProperty("--planet-glow", item.glow || "rgba(56, 189, 248, 0.4)");

    const icon = document.createElement("i");
    icon.className = item.icon;
    btn.appendChild(icon);

    // Hover events: pause both orbital tracks and display tooltip card
    btn.addEventListener("mouseenter", () => {
      orbitSystem.classList.add("is-hovered");
      orbitTooltipDot.style.background = item.color;
      orbitTooltipDot.style.boxShadow = `0 0 10px ${item.color}`;

      const titleText = isCategoryLevel ? (currentLang === "en" ? item.nameEn : item.nameEs) : item.name;
      const descText = isCategoryLevel ? (currentLang === "en" ? item.hintEn : item.hintEs) : (currentLang === "en" ? item.descEn : item.descEs);

      orbitTooltipTitle.textContent = titleText;
      orbitTooltipDesc.textContent = descText;
      orbitTooltip.classList.add("visible");
      currentOrbitState.hoveredItem = item;
    });

    btn.addEventListener("mouseleave", () => {
      orbitSystem.classList.remove("is-hovered");
      orbitTooltip.classList.remove("visible");
      currentOrbitState.hoveredItem = null;
    });

    // Click event for category drilldown
    if (isCategoryLevel) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        drilldownToCategory(item.id);
      });
    }

    carrier.appendChild(btn);
    return carrier;
  }

  function renderPlanets(items, isCategoryLevel) {
    orbitTrackInner.innerHTML = "";
    orbitTrackOuter.innerHTML = "";

    let innerItems = [];
    let outerItems = [];

    if (isCategoryLevel) {
      // 2 on faster inner orbit (Frontend & Backend), 2 on outer orbit (BI & Cloud)
      innerItems = [items[0], items[1]];
      outerItems = [items[2], items[3]];
    } else {
      // Tools: core 2 on inner track, remaining 2 or 3 on outer track
      innerItems = items.slice(0, 2);
      outerItems = items.slice(2);
    }

    // Render inner track items
    const innerStep = 360 / innerItems.length;
    innerItems.forEach((item, i) => {
      const angle = i * innerStep;
      const slot = renderPlanetButton(item, isCategoryLevel, true, angle);
      orbitTrackInner.appendChild(slot);
    });

    // Render outer track items
    const outerStep = 360 / outerItems.length;
    const startOffset = isCategoryLevel ? 90 : 45;
    outerItems.forEach((item, i) => {
      const angle = startOffset + i * outerStep;
      const slot = renderPlanetButton(item, isCategoryLevel, false, angle);
      orbitTrackOuter.appendChild(slot);
    });
  }

  function drilldownToCategory(catId) {
    const category = orbitSkillsData.categories.find(c => c.id === catId);
    if (!category) return;

    currentOrbitState.level = catId;
    orbitTooltip.classList.remove("visible");
    orbitSystem.classList.remove("is-hovered");

    orbitTrackInner.classList.add("transitioning");
    orbitTrackOuter.classList.add("transitioning");
    setTimeout(() => {
      renderPlanets(category.tools, false);
      orbitTrackInner.classList.remove("transitioning");
      orbitTrackOuter.classList.remove("transitioning");

      if (orbitBackBtn) {
        orbitBackBtn.style.setProperty("--category-border", category.color);
        orbitBackBtn.style.setProperty("--category-glow", category.glow || "rgba(56, 189, 248, 0.4)");
        orbitBackBtn.classList.add("visible");
      }
      if (avatarWrapper) avatarWrapper.classList.add("drilldown-active");

      if (orbitCategoryPill) {
        const catName = currentLang === "en" ? category.nameEn : category.nameEs;
        orbitCategoryPill.textContent = catName;
      }
    }, 220);
  }

  function returnToCategories() {
    if (currentOrbitState.level === "categories") return;

    currentOrbitState.level = "categories";
    orbitTooltip.classList.remove("visible");
    orbitSystem.classList.remove("is-hovered");

    orbitTrackInner.classList.add("transitioning");
    orbitTrackOuter.classList.add("transitioning");
    setTimeout(() => {
      renderPlanets(orbitSkillsData.categories, true);
      orbitTrackInner.classList.remove("transitioning");
      orbitTrackOuter.classList.remove("transitioning");

      if (orbitBackBtn) orbitBackBtn.classList.remove("visible");
      if (avatarWrapper) avatarWrapper.classList.remove("drilldown-active");
    }, 220);
  }

  // Back button click handler
  if (orbitBackBtn) {
    orbitBackBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      returnToCategories();
    });
  }

  // Center avatar click returns if in drilldown
  if (avatarImgFrame) {
    avatarImgFrame.addEventListener("click", () => {
      if (currentOrbitState.level !== "categories") {
        returnToCategories();
      }
    });
  }

  // Escape key returns to categories
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentOrbitState.level !== "categories") {
      returnToCategories();
    }
  });

  // Initial render of main category planets across both concentric tracks
  renderPlanets(orbitSkillsData.categories, true);

  // Global updater on language switch
  window.updateOrbitLanguage = function(lang) {
    if (currentOrbitState.level === "categories") {
      renderPlanets(orbitSkillsData.categories, true);
    } else {
      const category = orbitSkillsData.categories.find(c => c.id === currentOrbitState.level);
      if (category) {
        renderPlanets(category.tools, false);
        if (orbitCategoryPill) {
          orbitCategoryPill.textContent = lang === "en" ? category.nameEn : category.nameEs;
        }
      }
    }
    const backText = document.getElementById("orbitBackText");
    if (backText) {
      backText.textContent = lang === "en" ? "Back to Areas" : "Volver a Áreas";
    }
  };
}

