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
  CheckCircle2,
  MessageSquare,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const App = () => {
  const primaryBg = "bg-orange-600";

  const skills = [
    { name: "SAP Business One v10", icon: <Settings className="w-5 h-5" />, desc: "Komplexní správa, instalace addonů a hloubková konfigurace systému." },
    { name: "B1UP (Boyum IT)", icon: <Code className="w-5 h-5" />, desc: "Pokročilá customizace procesů a tvorba automatizačních scénářů." },
    { name: "SQL & Reporting", icon: <Database className="w-5 h-5" />, desc: "Hloubková analýza dat, uložené procedury a Crystal Reports." },
    { name: "Power BI", icon: <BarChart className="w-5 h-5" />, desc: "Vizualizace dat a propojování SAP B1 s externími zdroji (Excel, TXT)." },
    { name: "IT Infrastruktura", icon: <Server className="w-5 h-5" />, desc: "Správa Windows Serverů, podnikových DB a cloudových řešení." },
    { name: "Business Analysis", icon: <MessageSquare className="w-5 h-5" />, desc: "Návrh technických řešení na základě interních byznys požadavků." }
  ];

  const experience = [
    {
      company: "mmcité street furniture",
      role: "SAP B1 specialista",
      period: "2022 – Současnost",
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
      points: [
        "Administrace SAP B1, dohled nad systémem a podpora uživatelů",
        "Kompletní správa podnikové IT infrastruktury a Windows Serverů",
        "Zajištění integrity a bezpečnosti podnikových dat"
      ]
    },
    {
      company: "Kovocite a.s.",
      role: "IT/IS manager/administrator",
      period: "2008 – 2014",
      points: [
        "Administrace SAP B1 a jednání s dodavateli technologií",
        "Správa domén, serverů a kompletního IT zázemí společnosti"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">
            <span className="text-orange-600">Roman </span>Matušek
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-orange-600 transition-colors">Profil</a>
            <a href="#skills" className="hover:text-orange-600 transition-colors">Dovednosti</a>
            <a href="#experience" className="hover:text-orange-600 transition-colors">Zkušenosti</a>
            <a href="#education" className="hover:text-orange-600 transition-colors">Vzdělání</a>
          </div>
          <a href="#contact" className="text-sm font-bold text-orange-600 border border-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-all">
            Kontakt
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-20 pb-20 border-b border-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Ing. Roman Matušek
            </h1>
            <h2 className="text-2xl font-semibold text-orange-600 mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6" /> SAP B1 Specialist | ERP Process & Data Analyst
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              ERP specialista s více než 15letou praxí v IT managementu a správě systému SAP Business One. 
              Zaměřuji se na transformaci interních byznys požadavků do funkčních technických řešení 
              s využitím SQL, Power BI a automatizace přes B1UP.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-orange-600" /> Uherské Hradiště / Remote
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-orange-600" /> romanmatusek2@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-orange-600" /> +420 724 780 950
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Grid */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Settings className="text-orange-600" /> Technické kompetence
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-orange-600 mb-4">{skill.icon}</div>
                <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="text-orange-500" /> Pracovní historie
            </h3>
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
                    <div className="text-gray-400 font-medium mb-6 uppercase tracking-widest text-xs">{exp.company}</div>
                    <ul className="space-y-4">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 shrink-0"></div>
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

      {/* Education Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-900">
            <GraduationCap className="text-orange-600" /> Vzdělání a certifikace
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-orange-600 pl-8 py-2">
              <div className="font-bold text-xl text-gray-900">VŠB – TU Ostrava</div>
              <div className="text-gray-600 text-lg">Ing., Automatizace a informační technologie</div>
              <div className="text-sm text-gray-400 mt-2 font-medium">1999 – 2006</div>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-600 pl-8 p-6 rounded-r-xl">
              <div className="font-bold text-xl text-orange-900">ENGETO Certified Data Analyst</div>
              <div className="text-orange-700 font-medium mt-1">Specializace na SQL, Power BI a analýzu dat</div>
              <div className="inline-block mt-4 px-3 py-1 bg-orange-200 text-orange-900 text-xs font-bold rounded-full">
                ZÍSKÁNO 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <footer id="contact" className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
            <p className="text-gray-500">Máte-li zájem o detailnější informace nebo osobní schůzku, neváhejte mě kontaktovat.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <a href="mailto:romanmatusek2@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 font-bold uppercase">Email</div>
                <div className="font-bold text-gray-700">romanmatusek2@gmail.com</div>
              </div>
            </a>
            
            <a href="tel:+420724780950" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 font-bold uppercase">Telefon</div>
                <div className="font-bold text-gray-700">+420 724 780 950</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/roman-matusek-67b65260" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Linkedin size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 font-bold uppercase">LinkedIn</div>
                <div className="font-bold text-gray-700">Roman Matušek</div>
              </div>
            </a>
          </div>
          
          <div className="mt-20 text-center text-gray-400 text-xs">
            © {new Date().getFullYear()} Ing. Roman Matušek • Digitální životopis
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
