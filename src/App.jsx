import React, { useState, useEffect } from 'react';
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Code2,
  Cpu,
  GraduationCap,
  Briefcase,
  Send,
  User,
  MessageSquare,
  Menu,
  X
} from 'lucide-react';

const PortfolioStructured = () => {
  const [lang, setLang] = useState('it');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-8');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'duration-700');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lang]);

  const translations = {
    it: {
      role: "Software Engineer & Full Stack Developer",
      about: "Profilo",
      experience: "Esperienza Professionale",
      education: "Formazione Accademica",
      projects: "Progetti & Ricerca",
      contact: "Contattami",
      downloadCV: "Scarica CV",
      location: "Cesano Maderno (MB) / Dalmine (BG)",
      present: "Oggi",
      student: "Laureando Magistrale",
      bio: "Ingegnere Informatico focalizzato su architetture di sistema e tecnologie emergenti. Unisco la passione per la progettazione di soluzioni scalabili e l'open-source con un interesse verso le dinamiche economiche.",
      tech_title: "Competenze Tecniche",
      jobs: {
        csd: {
          title: "Software Engineer",
          desc: "Progettazione e sviluppo end-to-end di soluzioni software custom per l'ottimizzazione dei processi aziendali. Analisi dei requisiti, progettazione architetturale scalabile e implementazione Full-Stack (Web & Mobile). Gestione del ciclo di vita del software, dal database testing al deployment."
        },
        fabbrica: {
          title: "Programmatore & Facilitatore Digitale",
          desc: "Sviluppo e manutenzione di applicazioni web interne basate su framework Symfony (PHP) e integrazione database. Supporto alla trasformazione digitale aziendale e training del personale su nuovi strumenti tecnologici."
        },
        mediaworld: {
          title: "Sales Assistant",
          desc: "Gestione della clientela e consulenza tecnica su prodotti IT. Sviluppo di soft skills in comunicazione efficace, teamwork e gestione dello stress in ambienti dinamici."
        }
      },
      form: {
        name: "Nome e Cognome",
        email: "Indirizzo Email",
        message: "Messaggio",
        btn: "Invia Messaggio",
        sending: "Invio in corso...",
        success: "Messaggio inviato!",
        error: "Errore nell'invio."
      }
    },
    en: {
      role: "Software Engineer & Full Stack Developer",
      about: "Profile",
      experience: "Professional Experience",
      education: "Education",
      projects: "Projects & Research",
      contact: "Contact Me",
      downloadCV: "Download CV",
      location: "Cesano Maderno (MB) / Dalmine (BG), Italy",
      present: "Present",
      student: "M.Sc. Student",
      bio: "Computer Engineer focused on system architectures and emerging technologies. I combine a passion for designing scalable solutions and open-source with an interest in economic dynamics.",
      tech_title: "Technical Skills",
      jobs: {
        csd: {
          title: "Software Engineer",
          desc: "End-to-end design and development of custom software solutions for business process optimization. Requirements analysis, scalable architectural design, and Full-Stack implementation. Management of the software lifecycle, from database modeling to deployment."
        },
        fabbrica: {
          title: "Programmer & Digital Facilitator",
          desc: "Development and maintenance of internal web applications using the Symfony framework (PHP) and SQL databases. Spearheaded digital transformation initiatives and staff training on new technological tools."
        },
        mediaworld: {
          title: "Sales Assistant",
          desc: "Customer management and technical consultancy on IT products. Developed soft skills in effective communication, teamwork, and stress management in dynamic environments."
        }
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Message",
        btn: "Send Message",
        sending: "Sending...",
        success: "Message sent!",
        error: "Error sending."
      }
    },
    es: {
      role: "Ingeniero de Software y Desarrollador Full Stack",
      about: "Perfil",
      experience: "Experiencia Profesional",
      education: "Formación Académica",
      projects: "Proyectos e Investigación",
      contact: "Contáctame",
      downloadCV: "Descargar CV",
      location: "Cesano Maderno (MB) / Dalmine (BG), Italia",
      present: "Presente",
      student: "Estudiante de Máster",
      bio: "Ingeniero Informático enfocado en arquitecturas de sistemas y tecnologías emergentes. Combino la pasión por el diseño de soluciones escalables y el código abierto con un interés en las dinámicas económicas.",
      tech_title: "Habilidades Técnicas",
      jobs: {
        csd: {
          title: "Ingeniero de Software",
          desc: "Diseño y desarrollo integral de soluciones de software personalizadas para la optimización de procesos empresariales. Análisis de requisitos, diseño arquitectónico escalable e implementación Full-Stack. Gestión del ciclo de vida del software, desde el modelado de bases de datos hasta el despliegue."
        },
        fabbrica: {
          title: "Programador y Facilitador Digital",
          desc: "Desarrollo y mantenimiento de aplicaciones web internas utilizando el framework Symfony (PHP) e integración de bases de datos. Liderazgo en iniciativas de transformación digital y capacitación del personal en nuevas herramientas tecnológicas."
        },
        mediaworld: {
          title: "Asistente de Ventas",
          desc: "Gestión de clientes y consultoría técnica sobre productos informáticos. Desarrollo de habilidades blandas en comunicación efectiva, trabajo en equipo y gestión del estrés en entornos dinámicos."
        }
      },
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        message: "Mensaje",
        btn: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado!",
        error: "Error al enviar."
      }
    }
  };

  const t = translations[lang];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Simulazione chiamata API Cloudflare
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form Data:", data);
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error("Error:", error);
      setFormStatus('error');
    }
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-800 animate-on-scroll">
      <div className="p-2 bg-blue-900/10 rounded-lg text-blue-400 border border-blue-900/20">
        <Icon size={20} />
      </div>
      <h2 className="text-xl font-bold text-slate-100 tracking-tight">{title}</h2>
    </div>
  );

  const TimelineItem = ({ date, title, company, description, tech, isLast }) => (
    <div className="relative pl-8 md:pl-0 animate-on-scroll">
      <div className="md:grid md:grid-cols-[130px_1fr] md:gap-8 group">
        <div className="hidden md:block text-right pt-1 pr-4">
          <span className="text-xs font-mono text-slate-500 font-medium uppercase tracking-wider">{date}</span>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:left-[146px]">
          <div className={`absolute left-[-4px] top-2.5 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${date.includes(t.present) ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'bg-[#0b0b0d] border-slate-600 group-hover:border-blue-400 group-hover:scale-125'}`}></div>
        </div>
        <div className={`pb-12 ${!isLast ? '' : ''}`}>
          <div className="md:hidden text-xs font-mono text-slate-500 mb-2 uppercase tracking-wide">{date}</div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
          <div className="text-blue-200/80 text-sm font-medium mb-3">{company}</div>
          <div className="text-slate-400 text-sm leading-relaxed mb-4 max-w-2xl">
            {description}
          </div>
          {tech && (
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-800/50 text-slate-400 border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ title, type, desc, tags }) => (
    <div className="bg-[#121214] border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:bg-[#16161a] hover:border-blue-500/30 hover:-translate-y-1 group animate-on-scroll">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{title}</h3>
          <span className="text-xs font-mono text-slate-500">{type}</span>
        </div>
        <ExternalLink size={16} className="text-slate-600 group-hover:text-slate-300 transition-colors" />
      </div>
      <p className="text-sm text-slate-400 mb-5 leading-relaxed">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] px-2 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800 group-hover:border-slate-700 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#0b0b0d] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white scroll-smooth overflow-x-hidden">

      {/* Navbar Fixed */}
      <div className="border-b border-slate-800 bg-[#0b0b0d]/80 backdrop-blur-md sticky top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight text-slate-100 hover:text-blue-400 transition-colors">
            Matias Negro
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#experience" className="hover:text-white transition-colors">{t.experience}</a>
            <a href="#education" className="hover:text-white transition-colors">{t.education}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.projects}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>

            <div className="h-4 w-px bg-slate-700 mx-2"></div>

            <div className="flex gap-1">
              {['it', 'en', 'es'].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded text-xs font-bold uppercase transition-all ${lang === l ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex gap-1 mr-2">
              {['it', 'en', 'es'].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold uppercase ${lang === l ? 'text-blue-400' : 'text-slate-500'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white transition-colors p-1"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0b0b0d] absolute w-full left-0 top-16 shadow-2xl shadow-black/50">
            <div className="px-4 py-4 space-y-4 flex flex-col">
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium hover:text-blue-400 py-2 border-b border-slate-800/50">{t.experience}</a>
              <a href="#education" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium hover:text-blue-400 py-2 border-b border-slate-800/50">{t.education}</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium hover:text-blue-400 py-2 border-b border-slate-800/50">{t.projects}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium hover:text-blue-400 py-2">{t.contact}</a>
            </div>
          </div>
        )}
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Sidebar (Sticky Profile Info) */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-8 animate-on-scroll">

            {/* Profile Card */}
            <div className="bg-[#121214] border border-slate-800 rounded-2xl p-6 shadow-xl shadow-black/20">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-900/20 mb-5">
                  MN
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">Matias Negro</h1>
                <p className="text-blue-400 font-medium text-sm mb-4">{t.role}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {t.bio}
                </p>
                <div className="space-y-3 text-sm text-slate-500 border-t border-slate-800 pt-5">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-slate-400" /> {t.location}
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-slate-400" /> 🇮🇹 / 🇪🇸
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap size={16} className="text-slate-400" /> {t.student}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a href="#contact" className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 text-slate-900 rounded-lg text-sm font-bold hover:bg-white hover:shadow-lg transition-all duration-300">
                  <Mail size={16} /> Contact
                </a>
                <a href="/CV_EN.pdf"
                  download="CV_Matias_Negro.pdf"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1a1a1e] text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-800 border border-slate-700 transition-all duration-300"
                >
                  <Download size={16} /> CV
                </a>
              </div>

              <div className="flex gap-6 justify-center mt-6 pt-6 border-t border-slate-800">
                <a href="https://github.com/MatiasNegro" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
                <a href="https://linkedin.com/in/matias-negro" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 hover:scale-110 transition-all"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-[#121214] border border-slate-800 rounded-2xl p-6">
              <h3 className="font-bold text-slate-100 mb-5 flex items-center gap-2">
                <Cpu size={18} className="text-blue-500" /> {t.tech_title}
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Languages</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'Python', 'C / C++', 'PHP', 'SQL', 'Go', 'Dart', 'JS'].map(s => (
                      <span key={s} className="px-2.5 py-1 rounded bg-[#1a1a1e] text-slate-300 text-xs border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Frameworks & Tools</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Symfony', 'React', 'Flutter', 'Docker', 'Kafka', 'Pandas', 'Git'].map(s => (
                      <span key={s} className="px-2.5 py-1 rounded bg-[#1a1a1e] text-slate-300 text-xs border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors cursor-default">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </aside>

        {/* Right Main Content */}
        <div className="lg:col-span-8 space-y-16">

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-24">
            <SectionHeader icon={Briefcase} title={t.experience} />

            <div className="mt-8">
              <TimelineItem
                date={`Aug 2025 - ${t.present}`}
                title={t.jobs.csd.title}
                company="CSD Srl - Computer Service Due"
                description={t.jobs.csd.desc}
                tech={['Full Stack', 'Architecture', 'ICT', 'CRM','DB Optimization']}
              />

              <TimelineItem
                date="Feb 2025 - Jul 2025"
                title={t.jobs.fabbrica.title}
                company="Fabbrica Innovazione"
                description={t.jobs.fabbrica.desc}
                tech={['Symfony', 'PHP', 'SQL']}
              />

              <TimelineItem
                date="Oct 2018 - Apr 2019"
                title={t.jobs.mediaworld.title}
                company="MediaWorld"
                description={t.jobs.mediaworld.desc}
                isLast={true}
              />
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <SectionHeader icon={GraduationCap} title={t.education} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-on-scroll">
              <div className="bg-[#121214] p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-xs text-blue-400 font-mono mb-2 uppercase tracking-wider">2024 - {t.present}</div>
                <div className="font-bold text-slate-100 text-lg mb-1">M.Sc. Computer Engineering</div>
                <div className="text-sm text-slate-500 mb-3">Università degli Studi di Bergamo</div>
                <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
                  Curriculum SIR (Sistemi Informativi in Rete)
                </div>
              </div>

              <div className="bg-[#121214] p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-xs text-blue-400 font-mono mb-2 uppercase tracking-wider">Spring 2025</div>
                <div className="font-bold text-slate-100 text-lg mb-1">CERN Spring School</div>
                <div className="text-sm text-slate-500 mb-3">CERN (Pori, Finlandia)</div>
                <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
                  High Energy Physics Computing
                </div>
              </div>

              <div className="bg-[#121214] p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">2019 - 2024</div>
                <div className="font-bold text-slate-100 text-lg mb-1">B.Sc. Ingegneria Informatica</div>
                <div className="text-sm text-slate-500 mb-3">Università degli Studi di Bergamo</div>
                <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
                  Voto: 94/110
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <SectionHeader icon={Code2} title={t.projects} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ProjectCard
                title="Nanos Unikernels"
                type="Research Thesis"
                desc="Analisi delle performance e comportamento dei Nanos Unikernels in ambienti multithreaded."
                tags={['C/C++', 'Golang', 'Research', 'Systems']}
              />
              <ProjectCard
                title="Steam Discount Adviser"
                type="Desktop App"
                desc="App cross-platform per monitoraggio prezzi Steam con notifiche background e wishlist locale."
                tags={['Flutter', 'Dart', 'API']}
              />
              <ProjectCard
                title="DataCare"
                type="SaaS Web App"
                desc="Applicazione SPA per la gestione completa di studi medici: pazienti, appuntamenti e cartelle."
                tags={['PHP', 'JS', 'Tomcat', 'SQL']}
              />
            </div>
          </section>

          {/* Contact Section (Cloudflare Ready) */}
          <section id="contact" className="scroll-mt-24 animate-on-scroll">
            <SectionHeader icon={Send} title={t.contact} />

            <div className="bg-[#121214] border border-slate-800 rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="md:col-span-1 space-y-6 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-4">Connect</h3>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                      Interessato a collaborazioni su sistemi scalabili o sviluppo open-source? Contattami.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <a href="mailto:matiasnegro@outlook.it" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                      <Mail size={18} />
                      <span className="text-sm">Email Me</span>
                    </a>
                    <a href="https://linkedin.com/in/matias-negro" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                      <Linkedin size={18} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-2">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.form.name}</label>
                        <div className="relative">
                          <User size={16} className="absolute left-3 top-3 text-slate-600" />
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full bg-[#0b0b0d] border border-slate-800 text-slate-200 text-sm rounded-lg pl-10 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                            placeholder="Matias Negro"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.form.email}</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3 top-3 text-slate-600" />
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full bg-[#0b0b0d] border border-slate-800 text-slate-200 text-sm rounded-lg pl-10 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                            placeholder="matias@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.form.message}</label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-3 top-3 text-slate-600" />
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows="4"
                          className="w-full bg-[#0b0b0d] border border-slate-800 text-slate-200 text-sm rounded-lg pl-10 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                          placeholder="Scrivi qui il tuo messaggio..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                        className={`w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${formStatus === 'success'
                          ? 'bg-green-600 text-white cursor-default'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'
                          } disabled:opacity-70 disabled:cursor-not-allowed`}
                      >
                        {formStatus === 'submitting' ? (
                          <span>{t.form.sending}</span>
                        ) : formStatus === 'success' ? (
                          <span>{t.form.success}</span>
                        ) : (
                          <>
                            <Send size={16} /> {t.form.btn}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-slate-900 bg-[#08080a] py-8 mt-24">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
          <p>© 2025 Matias Negro. Engineering Portfolio.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span>Built with React & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioStructured;