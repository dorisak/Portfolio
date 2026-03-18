/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Stethoscope, 
  Brain, 
  Activity, 
  ArrowUpRight, 
  Linkedin, 
  Mail, 
  FileText,
  Plus,
  Search,
  Heart,
  Gift,
  User,
  MessageSquare,
  MapPin
} from "lucide-react";
import { PROJECTS, Project } from "./types";
import { useState } from "react";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* Profile / Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 lg:col-span-2 bg-brand-yellow rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="z-10">
            <div className="bg-brand-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="text-brand-yellow w-10 h-10" />
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[0.9] mb-2 italic">
              Doris <br />Atchikiti
            </h1>
            <p className="text-brand-dark/70 font-bold uppercase tracking-widest text-[10px]">Product Manager @ AI Healthcare</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Stethoscope size={200} />
          </div>
        </motion.div>

        {/* Action / CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setSelectedProject(PROJECTS[0])}
          className="md:col-span-2 lg:col-span-2 bg-brand-blue rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center group cursor-pointer"
        >
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 group-hover:bg-white/30 transition-colors">
            <span className="text-white font-bold text-lg">Lire le Case Study</span>
            <ArrowUpRight className="text-white w-6 h-6" />
          </div>
          <p className="text-white/70 text-xs mt-4 font-bold uppercase tracking-widest">Pilulu iOS · 2024</p>
        </motion.div>

        {/* Team / Collaboration Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 lg:col-span-2 bg-brand-dark rounded-[2.5rem] p-6 flex flex-col gap-4"
        >
          <div className="flex justify-between items-center px-2">
            <h3 className="text-white font-display text-xl">Expertise Santé</h3>
            <div className="bg-brand-lime w-2 h-2 rounded-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: "Compliance RGPD/HDS", status: "Expert" },
              { label: "Design Inclusif (Seniors)", status: "Spécialiste" },
              { label: "Stratégie IA Healthcare", status: "PM Lead" }
            ].map((skill, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                <span className="text-white/80 text-sm font-medium">{skill.label}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">{skill.status}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Icons Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-1 bg-brand-orange rounded-[2.5rem] p-8 grid grid-cols-2 gap-4 place-items-center"
        >
          <Search className="text-brand-dark w-8 h-8" />
          <Heart className="text-brand-dark w-8 h-8" />
          <Gift className="text-brand-dark w-8 h-8" />
          <User className="text-brand-dark w-8 h-8" />
          <MessageSquare className="text-brand-dark w-8 h-8" />
          <MapPin className="text-brand-dark w-8 h-8" />
        </motion.div>

        {/* Main Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => setSelectedProject(PROJECTS[0])}
          className="md:col-span-2 lg:col-span-2 bg-brand-pink rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center cursor-pointer group"
        >
          <span className="text-brand-dark/50 text-[10px] font-bold uppercase tracking-widest mb-4">Featured Project</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-dark leading-none mb-6 group-hover:scale-105 transition-transform italic">
            PILULU <br />HEALTH APP
          </h2>
          <p className="text-brand-dark/70 text-sm max-w-xs font-medium">
            Gestion intelligente des médicaments pour seniors et aidants.
          </p>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-2 lg:col-span-1 bg-brand-dark rounded-[2.5rem] p-8 flex flex-col justify-between"
        >
          <div>
            <span className="text-white/50 text-5xl font-serif leading-none italic">82%</span>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Activity className="text-white w-4 h-4" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Observance</span>
            </div>
          </div>
          <p className="text-white/40 text-[10px] leading-tight font-medium">
            Taux d'observance moyen constaté lors du pilote Pilulu iOS.
          </p>
        </motion.div>

        {/* Skills List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-2 lg:col-span-2 bg-brand-lime rounded-[2.5rem] p-8 flex flex-col gap-3"
        >
          {[
            { label: "Product Strategy", count: 12, icon: Brain },
            { label: "LLM Integration", count: 8, icon: Stethoscope },
            { label: "Data Governance", count: 15, icon: FileText },
            { label: "Agile Delivery", count: 21, icon: Activity }
          ].map((skill, i) => (
            <div key={i} className="bg-brand-dark rounded-2xl p-4 flex items-center justify-between group hover:scale-[1.02] transition-transform cursor-default">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <skill.icon className="text-white w-5 h-5" />
                </div>
                <span className="text-white font-bold">{skill.label}</span>
              </div>
              <span className="bg-brand-yellow text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
                {skill.count}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Contact / Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="md:col-span-4 lg:col-span-6 bg-white border-2 border-brand-dark rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col gap-2">
            <h4 className="font-display text-3xl">Let's build the future of health.</h4>
            <p className="text-brand-dark/60">Available for innovative PM roles and collaborations.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-white hover:bg-brand-blue transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-white hover:bg-brand-orange transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-dark transition-colors">
              <FileText size={24} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-brand-dark/30 text-xs font-mono">
        &copy; 2026 Doris Atchikiti — AI Product Portfolio
      </footer>
    </main>
  );
}
