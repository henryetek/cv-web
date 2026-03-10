import React from 'react';
import { 
  Database, 
  Settings, 
  BarChart, 
  Server, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Code,
  Briefcase,
  GraduationCap,
  ChevronRight,
  ShieldCheck,
  Globe
} from 'lucide-react';

const App = () => {
  const primaryBg = "bg-orange-600";

  const skills = [
    { name: "SAP Business One v10", icon: <Settings className="w-5 h-5" />, desc: "Komplexní správa, instalace addonů a hloubková konfigurace systému." },
    { name: "B1UP (Boyum IT)", icon: <Code className="w-5 h-5" />, desc: "Pokročilá customizace procesů a tvorba automatizačních scénářů." },
    { name: "SQL & Reporting", icon: <Database className="w-5 h-5" />, desc: "Hloubková analýza dat, komplexní dotazy, uložené procedury a Crystal Reports." },
    { name: "Power BI", icon: <BarChart className="w-5 h-5" />, desc: "Vizualizace dat a propojování SAP B1 i externích zdrojů (Excel, TXT)." },
    { name: "IT Infrastruktura", icon: <Server className="w-5 h-5" />, desc: "Správa Windows Serverů, podnikových DB a cloudových řešení." },
    { name: "Business Analysis", icon: <ShieldCheck className="w-5 h-5" />, desc: "Analýza interních požadavků a návrh technických řešení pro byznys." }
  ];

  const experience = [
    {
      company: "mmcité street furniture",
      role: "SAP B1 specialista",
      period: "leden 2022 – současnost",
      location: "Uherské Hradiště / Hybrid",
      points: [
        "Správa a rozvoj systému SAP Business One v10 pro mezinárodní holding",
        "Customizace a automatizace procesů přes addon B1UP",
        "Tvorba SQL reportů a hloubková analýza dat pro výrobu a obchod",
        "Datová analýza a vizualizace dat v Power BI"
      ]
    },
    {
      company: "Versino CZ",
      role: "Aplikační konzultant",
      period: "únor 2021 – prosinec 2021",
      location: "Brno",
      points: [
        "Technická správa SAP B1 pro portfolio externích klientů",
        "Napojování datových zdrojů ze SAP B1 přímo do Power BI",
        "Řešení specifických procesních požadavků v rámci ERP"
      ]
    },
    {
      company: "mmcité + a.s.",
      role: "IT Manager",
      period: "leden 2015 – listopad 2020",
      location: "Bílovice",
      description: "Administrace a management podnikové IT infrastruktury a IS, správa serverů, údržba podnikové DB a cloudových řešení.",
      points: [
        "Navrhování korporátních IT řešení",
        "Podpora a vyhodnocování IT procesů v rámci korporace",
        "Administrace SAP Business One a podpora klíčových uživatelů"
      ]
    },
    {
      company: "Kovocite a.s.",
      role: "IT/IS manager/administrator",
      period: "duben 2008 – prosinec 2014",
      location: "Bílovice u Uherského Hradiště",
      description: "Administrace a management podnikové IT infrastruktury a IS, správa serverů, údržba podnikové DB, správa domén a webu firmy.",
      points: [
        "Jednání s dodavateli IT infrastruktury, softwaru a telekomunikačních služeb",
        "Administrace SAP Business One a dohled nad systémem",
        "Podpora uživatelů a správa IT zázemí"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900 leading-normal">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">
            <span className="text-orange-600">Roman </span>Matušek
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-orange-600 transition-colors">Profil</a>
            <a href="#experience" className="hover:text-orange-600 transition-colors">Historie</a>
            <a href="#skills" className="hover:text-orange-600 transition-colors">Dovednosti</a>
            <a href="#education" className="hover:text-orange-600 transition-colors">Vzdělání</a>
          </div>
          <a href="mailto:romanmatusek2@gmail.com" className="text-sm font-bold text-orange-600 border border-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-all">
            Kontaktovat
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-16 pb-20 border-b border-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="md:flex items-center gap-12 text-center md:text-left">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Ing. Roman Matušek
              </h1>
              <h2 className="text-2xl font-semibold text-orange-600 mb-8 flex flex-col md:flex-row items-center gap-3">
                <Briefcase className="w-6 h-6 hidden md:block" /> SAP B1 Specialist | ERP Process & Data Analyst
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 mx-auto md:mx-0 max-w-2xl">
                ERP specialista s více než 15letou praxí v IT managementu a správě systému SAP Business One. 
                Specializuji se na transformaci byznys požadavků do technických řešení 
                s využitím SQL, Power BI a automatizace přes B1UP.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2"><MapPin size={18} className="text-orange-600" /> Uherské Hradiště / Remote</div>
                <div className="flex items-center gap-2"><Mail size={18} className="text-orange-600" /> romanmatusek2@gmail.com</div>
                <div className="flex items-center gap-2"><Phone size={18} className="text-orange-600" /> +420 724 780 950</div>
              </div>
            </div>
            {/* Profile Image with fallback to your LinkedIn photo */}
            <div className="hidden md:block shrink-0">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-8 border-gray-50 shadow-orange-100/50">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4E03AQG9N_hE0S0Q7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517521360155?e=1747267200&v=beta&t=UvO-m4F96A5W5yA17mN2Y6-B9n_5_rN-lD-Q0v0f2Y4" 
                  alt="Ing. Roman Matušek"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-4">Pracovní historie</h3>
            <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
          </div>
          
          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="md:grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3 text-orange-500 font-bold text-lg mb-2 md:mb-0 pt-1">
                    {exp.period}
                  </div>
                  <div className="md:col-span-9 border-l border-gray-700 pl-8 relative pb-2">
                    <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[6.5px] top-3"></div>
                    <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                    <div className="text-gray-400 font-medium mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                      {exp.company} <span className="text-gray-600">•</span> {exp.location}
                    </div>
                    {exp.description && <p className="text-gray-400 text-sm mb-4 leading-relaxed italic">{exp.description}</p>}
                    <ul className="space-y-4 mt-4">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-gray-300 leading-relaxed group">
                          <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Technické kompetence</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-orange-200 transition-all">
                <div className="text-orange-600 mb-5">{skill.icon}</div>
                <h4 className="font-bold text-lg mb-3">{skill.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-16 flex items-center gap-3">
            <GraduationCap className="text-orange-600 w-8 h-8" /> Vzdělání a kurzy
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-orange-600 pl-8 py-2">
              <div className="font-bold text-xl text-gray-900">Vysoká škola báňská - Technická univerzita Ostrava</div>
              <div className="text-gray-600 text-lg">Inženýr (Ing.), automatizace a informační technologie</div>
              <div className="text-sm text-gray-400 mt-2 font-medium">1999 – 2006</div>
            </div>
            <div className="space-y-8">
              <div className="bg-orange-50 border-l-4 border-orange-400 pl-6 p-5 rounded-r-xl">
                <div className="font-bold text-gray-900">ENGETO CERTIFIED DATA ANALYST</div>
                <div className="text-gray-600 text-sm mt-1 uppercase tracking-tight font-medium">Specializace na SQL, Power BI a analýzu dat (2023)</div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-300 pl-6 p-5 rounded-r-xl">
                <div className="font-bold text-gray-900 uppercase">GDPR Intro</div>
                <div className="text-gray-600 text-sm mt-1">Certifikace PCE ATO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            <a href="mailto:romanmatusek2@gmail.com" className="flex items-center gap-4 group transition-all">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Mail size={22} /></div>
              <span className="font-bold text-gray-700 group-hover:text-orange-600">Email</span>
            </a>
            <a href="tel:+420724780950" className="flex items-center gap-4 group transition-all">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Phone size={22} /></div>
              <span className="font-bold text-gray-700 group-hover:text-orange-600">Telefon</span>
            </a>
            <a href="https://www.linkedin.com/in/roman-matusek-67b65260" target="_blank" rel="noreferrer" className="flex items-center gap-4 group transition-all">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all"><Linkedin size={22} /></div>
              <span className="font-bold text-gray-700 group-hover:text-orange-600">LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-widest">© {new Date().getFullYear()} Ing. Roman Matušek</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
