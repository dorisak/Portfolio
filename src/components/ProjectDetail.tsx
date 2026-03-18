import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, CheckCircle2, Smartphone, Users, ShieldCheck, Zap } from "lucide-react";
import { Project } from "../types";
import { useState } from "react";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [view, setView] = useState<'patient' | 'aidant'>('patient');

  const currentMockup = project.mockups?.find(m => m.type === view)?.url;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-bg selection:bg-brand-blue selection:text-white"
    >
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-dark/5 px-6 py-4 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-bold text-brand-dark hover:text-brand-blue transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-widest">Retour Portfolio</span>
        </button>
        <div className="flex gap-4 items-center">
          <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Projet Actuel</span>
          <div className="px-4 py-1.5 rounded-full bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest">
            {project.title}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20">
        {/* Title Section */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            {project.category}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter"
          >
            {project.title}
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-2 bg-brand-dark mb-12 origin-left"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl text-brand-dark/80 max-w-4xl leading-tight font-medium"
          >
            {project.fullDescription}
          </motion.p>
        </header>

        {/* Impact Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {project.results?.map((res, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-brand-dark/10 p-8 rounded-[2rem] flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              >
                <span className="text-5xl md:text-6xl font-serif mb-2 tracking-tighter italic">{res.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">{res.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Problem & Solution - Editorial Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
          <div>
            <h3 className="font-serif text-4xl mb-8 italic">Le Défi</h3>
            <div className="space-y-6">
              {project.problem?.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="text-brand-orange font-serif text-xl opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <p className="text-lg text-brand-dark/70 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-4xl mb-8 italic">La Réponse</h3>
            <div className="space-y-6">
              {project.solution?.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="text-brand-blue font-serif text-xl opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <p className="text-lg text-brand-dark/70 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Mockup Section - Premium Device */}
        <section className="mb-32 bg-brand-dark text-white rounded-[3rem] p-12 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="flex bg-white/10 backdrop-blur-md p-1.5 rounded-2xl mb-12">
                <button 
                  onClick={() => setView('patient')}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${view === 'patient' ? 'bg-white text-brand-dark shadow-lg' : 'text-white/60 hover:text-white'}`}
                >
                  Patient
                </button>
                <button 
                  onClick={() => setView('aidant')}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${view === 'aidant' ? 'bg-white text-brand-dark shadow-lg' : 'text-white/60 hover:text-white'}`}
                >
                  Aidant
                </button>
              </div>

              {/* iPhone 15/16 Pro Style Mockup */}
              <div className="relative w-[300px] h-[620px] bg-[#1a1a1a] rounded-[3.5rem] p-3 shadow-[0_0_80px_rgba(0,0,0,0.5)] border-[1px] border-white/20">
                {/* Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative border border-white/5">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={view}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      src={currentMockup} 
                      alt={`Pilulu ${view} view`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>

                {/* Side Buttons */}
                <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-white/20 rounded-r-sm"></div>
                <div className="absolute -left-[2px] top-36 w-[3px] h-14 bg-white/20 rounded-r-sm"></div>
                <div className="absolute -left-[2px] top-52 w-[3px] h-14 bg-white/20 rounded-r-sm"></div>
                <div className="absolute -right-[2px] top-40 w-[3px] h-20 bg-white/20 rounded-l-sm"></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                Une interface pensée pour <br />
                <span className="text-brand-blue italic">la vulnérabilité.</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Smartphone, title: "Senior-First", desc: "Typographie 22pt+, contrastes AAA et zones de clic étendues pour une accessibilité totale." },
                  { icon: Zap, title: "OCR Privé", desc: "Scan d'ordonnances instantané via Vision Framework, fonctionnant à 100% hors-ligne." },
                  { icon: Users, title: "Lien Aidant", desc: "Synchronisation temps réel via Supabase pour rassurer les familles sans intrusion." },
                  { icon: ShieldCheck, title: "Santé Sécurisée", desc: "Chiffrement AES-256 et isolation des données conforme aux standards RGPD/HDS." }
                ].map((feature, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                    <feature.icon className="text-brand-blue mb-4" size={24} />
                    <h4 className="font-bold text-sm mb-2 uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Decisions */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="font-serif text-5xl md:text-7xl italic">Décisions <br />Produit</h2>
            <p className="text-brand-dark/40 font-bold uppercase tracking-widest text-xs max-w-[200px]">
              Arbitrages stratégiques et insights utilisateurs.
            </p>
          </div>
          
          <div className="space-y-8">
            {project.decisions?.map((dec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-brand-dark/5 p-10 rounded-[2.5rem] hover:border-brand-blue/30 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <span className="text-brand-blue font-mono text-xs mb-4 block">CASE_STUDY_0{i+1}</span>
                    <h4 className="font-serif text-3xl mb-4 group-hover:text-brand-blue transition-colors">{dec.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">
                      <Users size={12} />
                      <span>{dec.persona}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30 mb-2">L'Insight</p>
                      <p className="text-sm leading-relaxed">{dec.insight}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30 mb-2">Le Compromis</p>
                      <p className="text-sm leading-relaxed italic">{dec.tradeOff}</p>
                    </div>
                    <div className="md:col-span-2 bg-brand-bg p-6 rounded-2xl border border-brand-dark/5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2">La Décision</p>
                      <p className="text-base font-medium">{dec.decision}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack & Footer */}
        <section className="mb-32 border-t border-brand-dark/10 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-3xl mb-8 italic">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack?.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-end items-end text-right">
              <p className="font-serif text-2xl mb-4 italic">Prêt pour le futur de la santé ?</p>
              <button 
                onClick={onBack}
                className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-colors shadow-lg shadow-brand-blue/20"
              >
                Me contacter
              </button>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-brand-bg border-t border-brand-dark/5 py-12 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">
          &copy; 2026 Doris Atchikiti — Portfolio PM Santé
        </p>
      </footer>
    </motion.div>
  );
}
