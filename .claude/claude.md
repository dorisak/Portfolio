## Gestion des sessions et TODO

### En début de chaque session
1. Lire OBLIGATOIREMENT le fichier `TODO.md`
2. Résumer brièvement ce qui a été fait lors de la session précédente
3. Proposer les prochaines étapes en fonction de ce qui reste à faire

### En cours de session
- Mettre à jour `TODO.md` si la to-do évolue (nouvelles tâches, priorités changées)

### En fin de chaque session (ou quand l'utilisateur dit "fin de session" / "on s'arrête")
1. Mettre à jour `TODO.md` :
   - Marquer les tâches accomplies comme `[x] ... — TERMINÉ`
   - Ajouter les nouvelles tâches découvertes
   - Déplacer le contenu de "Session courante" vers "Historique" avec la date
2. Confirmer à l'utilisateur que le fichier a été mis à jour

## Gestion Git et versioning

### Pour chaque nouvelle fonctionnalité
1. Créer une branche distincte de `main` avec la nomenclature : `feature/nom-de-la-fonctionnalite`
2. Travailler sur cette branche pour tous les développements liés à cette fonctionnalité
3. Permet de :
   - Gérer proprement le versioning
   - Faire des reverts si nécessaire sans impacter la production
   - Faciliter les code reviews
   - Maintenir une branche `main` stable
