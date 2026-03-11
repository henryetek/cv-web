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
  ShieldCheck
} from 'lucide-react';

const App = () => {
  const experience = [
    {
      company: "mmcité street furniture",
      role: "SAP B1 specialista",
      period: "2022 – Současnost",
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
      period: "2021 – 2021",
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
      period: "2015 – 2020",
      location: "Bílovice",
      points: [
        "Administrace SAP B1, Windows Serverů a infrastruktury",
        "Navrhování IT řešení a podpora klíčových uživatelů",
        "Zajištění integrity a bezpečnosti podnikových dat"
      ]
    },
    {
      company: "Kovocite a.s.",
      role: "IT/IS manager/administrator",
      period: "2008 – 2014",
      location: "Bílovice",
      points: [
        "Administrace SAP B1 a dohled nad systémem",
        "Kompletní správa serverů a IT zázemí společnosti"
      ]
    }
  ];

  const skills = [
    { name: "SAP Business One v10", icon: <Settings className="w-5 h-5" />, desc: "Komplexní správa, instalace addonů a hloubková konfigurace systému." },
    { name: "B1UP (Boyum IT)", icon: <Code className="w-5 h-5" />, desc: "Pokročilá customizace procesů a tvorba automatizačních scénářů." },
    { name: "SQL & Reporting", icon: <Database className="w-5 h-5" />, desc: "Hloubková analýza dat, komplexní dotazy a Crystal Reports." },
    { name: "Power BI", icon: <BarChart className="w-5 h-5" />, desc: "Vizualizace dat a propojování SAP B1 i externích zdrojů." },
    { name: "IT Infrastruktura", icon: <Server className="w-5 h-5" />, desc: "Správa Windows Serverů, podnikových DB a cloudových řešení." },
    { name: "Business Analysis", icon: <ShieldCheck className="w-5 h-5" />, desc: "Analýza požadavků a návrh technických řešení pro byznys." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900 leading-normal">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6">
        <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-gray-900">
            <span className="text-orange-600">Roman </span>Matušek
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-orange-600 transition-colors">Profil</a>
            <a href="#skills" className="hover:text-orange-600 transition-colors">Dovednosti</a>
            <a href="#experience" className="hover:text-orange-600 transition-colors">Zkušenosti</a>
          </div>
          <a href="mailto:romanmatusek2@gmail.com" className="text-sm font-bold text-orange-600 border border-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-all">
            Kontakt
          </a>
        </div>
      </nav>

      <header id="about" className="pt-20 pb-20 border-b border-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Ing. Roman Matušek
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 flex items-center gap-3">
              <Briefcase className="w-7 h-7 shrink-0" /> SAP B1 Specialist | ERP Process & Data Analyst
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-10 w-full text-justify">
            ERP specialista s více než 15letou praxí v IT managementu a správě systému SAP Business One. 
            Zaměřuji se na transformaci interních byznys požadavků do funkčních technických řešení 
            s využitím SQL, Excel, PBI, B1UP. Tato kombinace zkušeností společně s využíváním moderních AI nástrojů mi umožňuje 
            efektivně propojovat svět byznysu s moderními technologiemi a datovou analytikou.
          </p>

          <div className="flex flex-wrap justify-between items-center gap-y-4 text-sm font-medium text-gray-500 border-t border-gray-100 pt-8 w-full">
            <div className="flex items-center gap-2"><MapPin size={18} className="text-orange-600" /> Uherské Hradiště / Remote</div>
            <div className="flex items-center gap-2"><Mail size={18} className="text-orange-600" /> romanmatusek2@gmail.com</div>
            <div className="flex items-center gap-2"><Phone size={18} className="text-orange-600" /> +420 724 780 950</div>
            <div className="flex items-center gap-2"><Linkedin size={18} className="text-orange-600" /> linkedin.com/in/roman-matusek</div>
          </div>
        </div>
      </header>

      <section id="skills" className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-900">
            <Settings className="text-orange-600" /> Technické kompetence
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-orange-200 transition-all text-left">
                <div className="text-orange-600 mb-4">{skill.icon}</div>
                <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-16 flex items-center gap-3">
            <Briefcase className="text-orange-500" /> Pracovní historie
          </h3>
          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <div key={idx} className="md:grid md:grid-cols-12 gap-8 items-start border-l border-gray-700 pl-8 relative text-left">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[6.5px] top-2"></div>
                <div className="md:col-span-3 text-orange-500 font-bold text-lg mb-2 md:mb-0">
                  {exp.period}
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                  <div className="text-gray-400 font-medium mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
                    {exp.company} <span className="text-gray-600 font-normal">•</span> {exp.location}
                  </div>
                  <ul className="space-y-4 text-gray-300">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-20 border-t border-gray-200 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Ing. Roman Matušek
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
