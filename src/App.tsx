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
  MapPin,
  Users,
  Shield,
  Twitter
} from "lucide-react";
import { PROJECTS, Project } from "./types";
import { useState } from "react";
import ProjectDetail from "./components/ProjectDetail";
import { trackSocialClick } from "./lib/analytics";

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
            <p className="text-brand-dark/70 font-bold uppercase tracking-widest text-[10px]">Lead Product Manager @ AI </p>
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
          className="md:col-span-2 lg:col-span-2 bg-brand-blue rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center gap-6"
        >
          {/* Pilulu CTA */}
          <div className="flex flex-col items-center">
            <div
              onClick={() => setSelectedProject(PROJECTS[0])}
              className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors cursor-pointer group"
            >
              <span className="text-white font-bold text-lg">Voir Pilulu</span>
              <ArrowUpRight className="text-white w-6 h-6" />
            </div>
            <p className="text-white/70 text-xs mt-3 font-bold uppercase tracking-widest">
              {PROJECTS[0].category}
            </p>
          </div>

          {/* MedVocal CTA */}
          <div className="flex flex-col items-center">
            <div
              onClick={() => setSelectedProject(PROJECTS[1])}
              className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors cursor-pointer group"
            >
              <span className="text-white font-bold text-lg">Voir MedVocal</span>
              <ArrowUpRight className="text-white w-6 h-6" />
            </div>
            <p className="text-white/70 text-xs mt-3 font-bold uppercase tracking-widest">
              {PROJECTS[1].category}
            </p>
          </div>
        </motion.div>

        {/* Team / Collaboration Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 lg:col-span-2 bg-brand-dark rounded-[2.5rem] p-6 flex flex-col gap-4"
        >
          <div className="flex justify-between items-center px-2">
            <h3 className="text-white font-display text-xl">Focus Actuels</h3>
            <div className="bg-brand-lime w-2 h-2 rounded-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: "Product Discovery", icon: Search, desc: "Validation & tests utilisateurs" },
              { label: "Data Privacy & Éthique", icon: Shield, desc: "Gouvernance des données" },
              { label: "Accessibilité & Inclusion", icon: Users, desc: "Design universel & seniors" }
            ].map((focus, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-brand-lime/10 p-2 rounded-xl">
                  <focus.icon className="text-brand-lime w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">{focus.label}</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-wider">{focus.desc}</span>
                </div>
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

        {/* Stats Card (Intentionally Empty) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-2 lg:col-span-1 bg-brand-dark rounded-[2.5rem] p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 dots-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
              <span className="bg-brand-yellow w-3 h-3 rounded-full" />
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
            <h4 className="font-display text-3xl">Let's build the next generation of AI products.</h4>
            <p className="text-brand-dark/60">Available for innovative Product roles.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/dorisatchikiti/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('LinkedIn')}
              className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-white hover:bg-brand-blue transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/HealthySlop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('Twitter')}
              className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
            >
              <Twitter size={24} />
            </a>
            {/* 
            <a href="#" className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-white hover:bg-brand-orange transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-dark transition-colors">
              <FileText size={24} />
            </a>
            */}
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
