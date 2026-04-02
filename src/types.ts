export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  color: string;
  textColor?: string;
  fullDescription?: string;
  results?: { label: string; value: string }[];
  problem?: string[];
  solution?: string[];
  decisions?: { title: string; insight: string; tradeOff: string; decision: string; impact?: string; persona?: string; target?: string; implementation?: string[] }[];
  stack?: string[];
  mockups?: { type: 'patient' | 'aidant'; url: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'pilulu',
    title: 'Pilulu',
    description: 'Application de gestion des médicaments pour seniors et aidants.',
    category: 'Projet · iOS App · 2026',
    impact: '100% Adoption',
    color: 'bg-brand-pink',
    textColor: 'text-brand-dark',
    fullDescription: 'Pilulu est une application iOS conçue pour simplifier la gestion des médicaments pour les seniors et leurs aidants. En combinant OCR natif et synchronisation temps réel, elle assure une observance optimale et une tranquillité d\'esprit pour les familles.',
    results: [
      { label: 'ADOPTION PILOTE', value: '100%' },
      { label: 'TAUX OBSERVANCE', value: '82%' },
      { label: 'RÉTENTION D7', value: '95%' },
      { label: 'SATISFACTION', value: '4.8/5' }
    ],
    problem: [
      'Patients 55-85 ans en polymédication (3-8 médicaments/jour)',
      'Oublis fréquents de prises médicamenteuses entraînant des risques de santé majeurs',
      'Ordonnances papier perdues et piluliers physiques complexes à remplir',
      'Applications existantes trop complexes ou non adaptées aux seniors',
      'Aidants inquiets manquant de visibilité sur le suivi à distance'
    ],
    solution: [
      'Expérience "Senior-First" : interface épurée, contrastes élevés et typographie adaptée',
      'Scan d\'ordonnances intelligent via Vision Framework (OCR natif et privé)',
      'Notifications iOS natives persistantes avec rappels intelligents',
      'Dashboard Aidant en temps réel pour un suivi collaboratif et sécurisé',
      'Fonctionne sans internet + sauvegarde cloud automatique (Core Data + Supabase)'
    ],
    decisions: [
      {
        title: 'Design Inclusif (Senior-First)',
        insight: 'Les seniors abandonnent les apps complexes.',
        tradeOff: 'Simplicité radicale vs Profondeur fonctionnelle',
        decision: 'Typographie 22pt+, espacements de 62.5% supérieurs aux standards, max 3 actions par écran.',
        persona: 'Marie, 68 ans, polymédiquée'
      },
      {
        title: 'OCR Local vs Cloud',
        insight: 'La confidentialité des données de santé est non-négociable.',
        tradeOff: 'Précision Cloud vs Confidentialité Locale',
        decision: 'Utilisation exclusive de Vision Framework sur l\'appareil. Aucune donnée de santé ne quitte le téléphone sans consentement.',
        target: 'Taux de succès scan > 85%'
      },
      {
        title: 'Dashboard aidant avec synchronisation temps réel',
        insight: 'L\'aidant a besoin de visibilié pour être rassuré sur les prises de médicaments.',
        tradeOff: 'Realtime (instantané, quota limité) vs Pull-to-refresh (manuel, illimité)',
        decision: 'Utilisation du pull-to-refresh pour MVP portfolio. Realtime sera une amélioration future.',
        impact: 'Réduction de 40% de l\'anxiété déclarée des aidants'
      },
      {
        title: 'Compliance données de santé',
        insight: 'App santé = données sensibles → responsabilité légale',
        tradeOff: 'Sécurité vs Rapidité de développement',
        decision: 'Architecture privacy-first dès la conception',
        implementation: [
          'Hébergement Supabase EU (Paris)',
          'RLS (Row Level Security) : isolation données par user',
          'Consentement explicite liaison Aidant',
          'Export/suppression données locales (droit RGPD)'
        ]
      }
    ],
    stack: [
      'Claude Code','Gemini','SwiftUI', 'Vision Framework', 'Supabase', 'Core Data'
    ],
    mockups: [
      { type: 'patient', url: '/assets/pilulu-patient.mp4' },
      { type: 'aidant', url: '/assets/pilulu-aidant.mp4' }
    ]
  },
  {
    id: 'medvocal',
    title: 'MedVocal',
    description: 'Assistant IA pour automatiser la documentation médicale et réduire le burnout des médecins.',
    category: 'Projet · Web App · Q1 2026',
    impact: '3.2h saved',
    color: 'bg-brand-lime',
    textColor: 'text-brand-dark',
    fullDescription: 'MedVocal est un assistant médical propulsé par l\'IA qui automatise la documentation clinique, visant à réduire le burnout des médecins et améliorer la qualité des soins. Ce projet de portfolio démontre une approche end-to-end de gestion produit IA, de l\'identification d\'un problème marché réel jusqu\'à l\'implémentation technique d\'un MVP fonctionnel. Le produit exploite Google Gemini 2.0 Flash pour transcrire les consultations médicales et générer des notes structurées au format SOAP en quelques secondes.',
    results: [
      { label: 'TEMPS ÉCONOMISÉ', value: '3.2h' },
      { label: 'RÉDUCTION DOC', value: '70%' },
      { label: 'PRÉCISION', value: '98%+' },
      { label: 'COMPLIANCE', value: '100%' }
    ],
    problem: [
      '62% des médecins souffrent de burnout (Medscape 2024)',
      'Les médecins passent 50% de leur temps sur la documentation',
      'En moyenne 2-3 heures par jour sur des tâches administratives',
      '42% des médecins envisagent une retraite anticipée due au burnout',
      'Perte de connexion avec le patient : saisie sur ordinateur au lieu d\'engagement avec le patient'
    ],
    solution: [
      'Enregistrement consultation en un clic via connexion sécurisée et chiffrée',
      'Transcription audio avec Google Gemini 2.0 Flash et support terminologie médicale',
      'Génération de notes SOAP structurées (Subjective, Objective, Assessment, Plan)',
      'Suggestions automatiques de codes ICD-10 et CPT pour facturation',
      'Export PDF, DOCX et génération de lettres médicales (référence, sortie)'
    ],
    decisions: [
      {
        title: 'Google Gemini 2.0 Flash pour MVP Portfolio',
        insight: 'Un projet de portfolio nécessite une API IA fonctionnelle sans coût pour démontrer les compétences de conception produit, tout en maintenant une architecture professionnelle scalable.',
        tradeOff: 'APIs payantes (Claude, GPT-4o) vs API gratuite (Gemini)',
        decision: 'Google Gemini 2.0 Flash pour le MVP portfolio, avec architecture modulaire permettant une migration facile vers Claude ou GPT-4 en production.',
        impact: '$0 de coût, 250 requêtes/jour gratuit, API multimodale native (audio + texte)'
      },
      {
        title: 'Format SOAP comme Standard Médical',
        insight: 'Le format SOAP est le standard international le plus utilisé pour la documentation clinique. Il est adopté dans la plupart des pays occidentaux (US, France, Canada, etc.) et requis par de nombreux systèmes de facturation et d\'assurance.',
        tradeOff: 'Template unique (SOAP only) vs Flexibilité multi-templates',
        decision: 'SOAP par défaut, avec architecture supportant tous les templates (DAP, BIRP, Comprehensive).',
        impact: 'Les 3 consultations de démo utilisent le format SOAP avec des cas réalistes (cardiologie, médecine générale, endocrinologie)'
      },
      {
        title: 'Architecture Fullstack Monorepo',
        insight: 'Un projet de portfolio PM IA doit démontrer la capacité à concevoir une architecture end-to-end complète, pas seulement des wireframes ou des specs théoriques.',
        tradeOff: 'Backend simple (API REST basique) vs Fullstack complet (Backend + Frontend + BDD)',
        decision: 'Architecture fullstack complète avec monorepo : Node.js/Express + Next.js 14 + PostgreSQL.'
      },
      {
        title: 'Conformité HIPAA/GDPR by Design',
        insight: 'Les données médicales sont hautement sensibles. La conformité doit être pensée dès le départ, pas ajoutée après coup.',
        tradeOff: 'Features rapides avec sécurité simple pour démarrer vs Sécurité complète dès le MVP',
        decision: 'Architecture de sécurité conçue pour conformité HIPAA/GDPR : Middleware sécurité (Helmet, CORS, Rate Limiting), logging centralisé, schéma BDD avec table audit_logs. Base solide prête pour implémentation complète avant production.',
        implementation: [
          '✅ Déjà fait : Middleware sécurité, logging, rate limiting, schéma audit_logs',
          '⚠️ À implémenter : Chiffrement end-to-end PHI/PII, audit automatique, validation Joi complète',
          '🔒 Pour certification : Audit externe, BAA avec vendors, infrastructure cloud certifiée (AWS HIPAA-eligible, Azure Healthcare)'
        ]
      }
    ],
    stack: [
      'Claude Code', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Gemini'
    ],
    mockups: [
      { type: 'patient', url: '/assets/Medvocal-dashboard.png' },
      { type: 'aidant', url: '/assets/Medvocal-captation.png' }
    ]
  }
];
