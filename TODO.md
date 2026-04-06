# TODO — Portfolio PM IA

## Session courante
### Implémentation Google Analytics 4
- [ ] Créer la branche feature/google-analytics-tracking
- [ ] Créer le service de tracking src/lib/analytics.ts avec les fonctions trackPageView, trackProjectView, trackMediaSwitch, trackSocialClick
- [ ] Créer le composant src/components/GoogleAnalytics.tsx pour initialiser GA4
- [ ] Modifier src/main.tsx pour intégrer le composant GoogleAnalytics
- [ ] Modifier src/App.tsx pour tracker les clics sur LinkedIn et Twitter (lignes 212-227)
- [ ] Modifier src/components/ProjectDetail.tsx pour tracker vue projet au montage et switches vidéo/image
- [ ] Modifier .github/workflows/deploy.yml pour injecter VITE_GA_MEASUREMENT_ID depuis GitHub Secrets
- [ ] Créer fichier .env.local avec VITE_GA_MEASUREMENT_ID pour tests en local
- [ ] Tester le tracking en local (vérifier console navigateur pour événements GA4)
- [ ] Guider l'utilisateur pour créer compte GA4 et obtenir l'ID de mesure
- [ ] Guider l'utilisateur pour ajouter VITE_GA_MEASUREMENT_ID dans GitHub Secrets
- [ ] Build de vérification (npm run build)
- [ ] Merge feature/google-analytics-tracking vers main et push en production
- [ ] Vérifier le tracking sur le site en production via le dashboard GA4

## Historique
### Session du 03/04/2026 (Session 3)
- [x] Mise à jour contenu MedVocal (Google Gemini 2.0 Flash, SOAP international, précision 98%+) — TERMINÉ
- [x] Remplacement des 4 décisions produit MedVocal avec focus MVP portfolio — TERMINÉ
- [x] Retrait bloc implementation de Décision 3 (Architecture Fullstack) — TERMINÉ
- [x] Ajout Claude Code et Gemini dans stack technique MedVocal — TERMINÉ
- [x] Fix détection logos Claude Code et Gemini dans ProjectDetail.tsx — TERMINÉ
- [x] Ajout images MedVocal (Medvocal-dashboard.png, Medvocal-captation.png) — TERMINÉ
- [x] Build de vérification (npm run build) — TERMINÉ
- [x] Merge et push en production (main branch) — TERMINÉ

### Session du 01/04/2026 (Session 2)
- [x] Mise à jour .claude/claude.md avec règle de gestion Git — TERMINÉ
- [x] Création branche feature/add-medvocal-project — TERMINÉ
- [x] Ajout projet MedVocal dans src/types.ts — TERMINÉ
- [x] Modification card bleue avec switch Pilulu/MedVocal + badge WIP — TERMINÉ
- [x] Adaptation ProjectDetail.tsx pour images statiques avec sous-titres — TERMINÉ

### Session du 01/04/2026 (Session 1)
- [x] Page d'accueil avec Bento Grid design — TERMINÉ
- [x] Projet Pilulu complet avec détails — TERMINÉ
- [x] Intégration vidéos démo (patient & aidant) — TERMINÉ
- [x] Déploiement sur dorisailab.com — TERMINÉ
- [x] Configuration SEO et favicon — TERMINÉ
- [x] Création du fichier TODO.md — TERMINÉ
