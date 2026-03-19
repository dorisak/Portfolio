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
      'Claude','Gemini','SwiftUI', 'Vision Framework', 'Supabase', 'Core Data'
    ],
    mockups: [
      { type: 'patient', url: '/assets/pilulu-patient.mp4' },
      { type: 'aidant', url: '/assets/pilulu-aidant.mp4' }
    ]
  }
];
