# Tempo

Application française de sport à domicile, React + TypeScript + Vite. Sans compte, avec données conservées localement dans le navigateur. Hébergement statique Cloudflare autorisé par Simon le 13 octobre 2026. Les médias sont préproduits ; la composition ne génère aucun exercice ni image.

## Lancer et construire

Node 22.12+ ou 24, npm. Les versions réellement résolues sont verrouillées dans `package-lock.json`.

```sh
npm ci
npm run dev
```

Pour tester la PWA et le cache hors ligne, utiliser la version construite, et non le serveur de développement :

```sh
npm test
npm run build
npm run preview
```

Ouvrir l’URL locale imprimée par Vite. Un iPhone nécessite une origine HTTPS ou un tunnel local sécurisé pour les fonctions PWA, service worker et Wake Lock. Version mobile HTTPS : https://tempo.ssaulay.workers.dev/.

## Déploiement mobile

Adresse : https://tempo.ssaulay.workers.dev/. Sur iPhone, ouvrir dans Safari, puis Partager → Sur l’écran d’accueil. Les données restent propres à chaque navigateur et appareil ; utiliser l’export/import pour transférer un historique local.

Pour mettre à jour la version hébergée avec le compte Cloudflare connecté :

```sh
npm test
npm run build
npx --yes wrangler@4.150.0 deploy
```

Seul `dist/` est publié, sans sources, rapports ni clés. Le build prototype reste utilisé conformément à l’acceptation documentaire de Simon ; aucune revue technique humaine n’est déclarée.

## État de livraison

Le code permet de composer, ajuster, sauvegarder, pratiquer, suspendre/reprendre et conserver un bilan. Programmes, brouillon, profil, résultats et séance active sont stockés dans IndexedDB. Les exercices restent `draft` et les images produites `generated` tant que les revues réelles ne sont pas enregistrées. Le mode normal sélectionne uniquement du contenu publié. Le bouton **Découvrir Tempo** de l’accueil initial ouvre le prototype annoncé comme provisoire. Le mode prototype peut aussi être activé ou désactivé dans les réglages.

La production des 48 lots complets est demandée et conservée : le rapport machine `reports/asset-audit.json` donne le nombre exact de fichiers présents, manquants, leurs poids et les erreurs. Les sources sont sous `assets/sources/`, les images servies sous `public/assets/exercises/v1/`. Le minimum contractuel comprend 291 fichiers, plus les vues de dessus complémentaires. Aucune génération n’est effectuée pendant une séance utilisateur.

La production ne constitue pas une validation biomécanique. Il faut une personne compétente en préparation physique pour revoir les 48 fiches, leurs séquences, les rôles musculaires et les paramètres éditoriaux. Les cartes SVG sont des schémas dessinés, également en attente de revue. Des articulations, amplitudes ou installations générées peuvent nécessiter une correction. Aucun statut technique ni nom de relecteur n’est inventé.

`npm run build:release` refuse une livraison finale tant que la totalité des exercices n’a pas un contenu publié, des assets présents et des revues réelles. Le build prototype vérifie les fichiers déjà produits et refuse les fichiers corrompus ou les publications incomplètes.

## Architecture

- `catalog/exercises.json` : 48 fiches, IDs EX01–EX48, versions, comptage et installation.
- `catalog/prescription-rules.json` : bornes, cadence, fractions des capacités et budgets versionnés, statut draft.
- `assets/production-jobs.json` : 144 briefs de poses, plus les briefs de vues de dessus.
- `assets/generation-log.json` : prompts réellement utilisés pour les nouvelles planches et sources du générateur.
- `assets/top-generation-log.json` : génération des angles complémentaires.
- `assets/manifest.json` : chemins, dimensions, poids, SHA-256, texte alternatif, rôles et revues.
- `src/composer` : filtrage, choix déterministe avec graine, estimation et rééquilibrage explicite.
- `src/session-engine` : états et événements indépendants de React ; horloge monotone.
- `src/storage` : transactions IndexedDB, import/export, validation, finalisation idempotente.
- `src/audio` : synthèse française et signaux, annulations des annonces à chaque transition.
- `src/ui` : configurateur, éditeur partagé, player, historique, catalogue et réglages.
- `public/sw.js` : cache de coque et médias, aucune activation forcée au milieu d’une séance.

## Produire et revoir le contenu

Python 3, Pillow et NumPy sont requis uniquement pour dériver les images : `python3 -m pip install Pillow numpy`. Les planches de génération comprennent trois scènes superposées. L’extraction, le redimensionnement, les miniatures et les GIF sont déterministes et ne font aucun morphing. La référence du personnage est conservée pour toute génération supplémentaire.

```sh
npm run catalog:generate
npm run assets:derive
npm run audit:assets
```

La conversion ne doit pas être considérée comme une approbation des poses. Consigner une revue avec nom du relecteur, date, version et commentaire dans les fiches et le manifeste ; corriger les sources rejetées avant publication. La vue de dessus complète le profil, elle ne remplace pas les trois poses de l’angle principal. Les maintiens montrent installation, maintien et sortie.

## Recette de référence

Dans Réglages → Données et hors ligne, **Activer le profil de test Simon** applique volontairement le niveau intermédiaire et 15 pompes déclarées, sans ajouter corde, roue ni support. Choisir pectoraux + abdominaux, 20 minutes, intensité modérée. Le matériel peut être ajusté pour aujourd’hui ; les haltères légers et bandes sont déclarés séparément.

Générer, remplacer par une alternative de la même famille, vérifier l’estimation, sauvegarder « Pecs + abdos », démarrer. Consulter la fiche met en pause ; fermer ne reprend pas automatiquement. Déclarer une série différente de la cible, prolonger un repos, recharger puis reprendre explicitement. Terminer ou arrêter avec confirmation et retrouver le bilan. Modifier le programme ne modifie pas son snapshot historique.

Une cible de répétitions n’est jamais terminée automatiquement. Une validation sans saisie reste non renseignée. Les séries passées et les tentatives interrompues sont exclues des séries effectuées. Refaire ajoute une tentative ; les premières tentatives restent conservées. Les statistiques excluent la mobilité du renforcement et n’utilisent aucune donnée de démonstration.

## Hors ligne et iPhone

Charger la version construite une première fois avec le réseau. Les six médias des exercices de la séance et leurs angles complémentaires sont chargés avant Start ; l’interface confirme la préparation. Le téléchargement global facultatif conserve tous les médias disponibles. Le service worker garde la coque et le catalogue (intégré au JavaScript). Le premier téléchargement n’est pas possible sans réseau.

La séance se suspend lorsque la page quitte le premier plan. Elle n’extrapole aucun effort pendant une fermeture ou un verrouillage. Les checkpoints sont faits toutes les cinq secondes en activité et après les changements d’état. La conservation après fermeture brutale dépend de la dernière écriture réussie ; un événement `pagehide` n’offre pas une garantie d’écriture synchrone. Les erreurs de stockage restent visibles avec export de secours, sans confirmation mensongère.

La voix hors ligne dépend des voix installées dans le navigateur. En cas d’absence, le timer et les visuels restent disponibles et les signaux remplacent les annonces. L’écran peut rester allumé via Wake Lock quand la plateforme l’autorise ; aucune promesse de guidage en arrière-plan ou sous écran verrouillé.

La recette mobile réalisée est dans `scripts/mobile-recipe.cjs`, avec le rapport `reports/mobile-recipe.json` et le bilan `reports/recette-mobile.md`. Le scénario précédent est conservé dans `scripts/browser-smoke.py` (Playwright Python requis). Ils couvrent Chromium et WebKit si disponibles, à 360/390/1440 px. **WebKit simulé n’est pas un test Safari sur iPhone physique.** Audio réel, verrouillage, installation PWA, VoiceOver, confort et technique pendant une vraie séance restent à vérifier sur l’appareil cible.

## Export et import

Réglages → Données et hors ligne. JSON ≤ 10 Mo, schéma 1 ; aucune image embarquée. L’import prévisualise les nombres, signale les IDs d’exercice inconnus, fusionne par ID sans doublon ou demande une confirmation pour remplacer. Une séance active doit d’abord être conservée comme interrompue avant un transfert ; l’import ne crée pas une reprise automatique. La suppression d’un programme ne touche pas l’historique.

Les données ne sont pas synchronisées. Sauvegarder régulièrement un export, notamment avant l’effacement du navigateur. Aucun appel API IA, clé fournisseur, paiement ni télémétrie distante.
