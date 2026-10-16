# Tempo

## Règles
- Application de sport à domicile en français, locale et sans compte.
- Conserver les 48 exercices, les médias et les snapshots historiques.
- Simon accepte la revue par sources multiples pour les exercices et visuels dans son usage de Tempo. Distinguer cette acceptation documentaire d’une revue technique humaine, non réalisée ; ne jamais en fabriquer une.
- Ne publier aucun hébergement public sans instruction de Simon.
- Conserver les modifications existantes. Messages concis en français, sans tiret cadratin.
- Enregistrer les décisions et découvertes durables dans `memory/` avant la réponse finale. Actualiser cet état et retirer les éléments résolus.

## CURRENT STATE
- Focus initial des dialogues corrigé et publié le 14/10 : arrivée sur le titre, sans contour sur Haltères ; focus clavier orange conservé. Recette publique 390/1440 px et 135 tests/build passent (voir `memory/design.md`).
- Lots 1 et 2 de l’audit UI/UX publiés le 14/10 sur l’URL publique existante : player sans recouvrement de saisie, brouillon commun des réglages, abandon conservé, états programme/brouillon et zones cohérents, recherches/filtres et accessibilité harmonisés, bande textile courte déclarable, statuts hors ligne vérifiés. 135 tests/build et recettes Chromium locales 320/390/1440 px passent ; ressources publiques vérifiées identiques au build, recette iPhone physique en attente (voir `memory/audit-coherence.md` et `reports/coherence-fixes/README.md`).
- Calibrage facultatif déployé à l’onboarding et aux réglages : bilan guidé pompes/chaise/planche, saisie manuelle ou passage ; capacités par mouvement, sans niveau global. 130 tests/build et recette Chromium 320/390/1440 px passent ; URL publique et persistance vérifiées à 390 px ; iPhone physique en attente (voir `memory/calibration.md`).
- Accès mobile HTTPS autorisé par Simon le 13/10/2026 : https://tempo.ssaulay.workers.dev/. Données locales par navigateur/appareil, sans synchronisation. Déploiement et ressources vérifiés ; recette iPhone physique en attente (voir `memory/deploiement.md`).
- Accueil « À vous de jouer » simplifié après accord : quatre objectifs, zones repliées, durées prédéfinies et personnalisée, matériel compact, reprise/favoris prioritaires et bouton fixe sur mobile. Vérifié à 320/390 px, génération fonctionnelle, 122 tests et build passent ; iPhone physique en attente (voir `memory/accueil.md`).
- Règles des séances v2 intégrées après accord : doses avant durée, repos différenciés, progression sur séries réellement réalisées et tubes sans hausse automatique. Niveau personnel supprimé des réglages/filtrage ; difficulté des exercices informative et remplacements plus simples/complexes. 122 tests/build et recette Chromium mobile passent ; iPhone physique en attente (voir `memory/regles-seances.md`).
- Catalogue local : 84 fiches illustrées, soit 77 IDs et 7 variantes tubes. Les 48 historiques, 21 extensions et médias préexistants sont conservés. Treize fiches kit ajoutées (5 variantes sous pieds, 8 mouvements à la porte), originaux accessibles et liens explicites vers variantes/mouvements proches. EX53 reste uniquement consultable ; revue humaine et clips F1/M2 complémentaires en attente (voir `memory/exercices.md`).
- Chantier vocal : F1 et M2 plus grave retenues ; M2 à 211/311 clips générés et exportés ; quota quotidien Gemini atteint le 14/10, M2 reste prioritaire à la reprise ; état dans `reports/audio/production/` ; intégration partielle avec repli système, écoute et compression en attente (voir `memory/audio.md`).
- Branche de recette : `fix/recette-mobile`.
- Animations de profil et de dessus : deux poses successives, sans trajectoire continue ; EX57/58/62 affichent le maintien fixe. Les fiches présentent les étapes 1 et 2.
- Les cartes Explorer affichent les étapes animées, avec image fixe si réduction des animations activée.
- Fiches : animation par défaut, deux positions visibles, respiration regroupée, repères/erreurs/matériel puis schéma.
- Direction visuelle commune à tous les écrans : palette orange/blanc/bleu nuit, alignements et rythme harmonisés, grandes commandes pendant l’effort.
- Le premier écran reste limité au matériel essentiel, puis propose le bilan facultatif ; aucun niveau personnel global. Préférences complètes dans les réglages.
- Retours mobile accueil : champs du matériel sur une colonne, marges des cartes réduites ; haltères décochées sur profil neuf vérifié. Impression de présélection signalée sur iPhone non reproduite en Chromium.
- Recherches : focus commun sur le champ complet avec loupe, vérifié en mobile Chromium.
- Séance : passage de série/exercice autorisé en pause, en conservant la pause ; prochaine série accessible pendant préparation/repos. Tests et build passent, recette iPhone en attente.
- Simon possède le kit Decathlon à tubes et une bande textile courte CORENGTH pour fessiers, résistance modérée bleue, aucune bande plate longue. Quinze fiches avec kit disponibles, sous pieds ou à la porte, illustrations historiques conservées. Tempo propose une combinaison par exercice, ajustable dans la séance ; revue humaine sautée à sa demande, aucune validation déclarée. Audio v2 par voix système, clips F1/M2 bloqués 429.
- Les découpages et le recalage des étapes ont été repris sur toutes les planches ; les variations de perspective des sources restent à examiner.
- Simon juge les 48 animations claires ; cette appréciation de lisibilité ne vaut pas revue technique.
- Simon considère la revue par sources multiples suffisante pour accepter exercices et visuels ; revue humaine non réalisée et non bloquante pour son usage. Dosage et recette iPhone complète restent à clôturer.
- La recette locale et ses limites sont documentées dans `reports/recette-mobile.md`.

## Références
- `docs/exercise-reference/REPRISE.md` pour reprendre le chantier du référentiel, ses lacunes et les prochaines étapes.
- `docs/exercise-reference/REFERENCE.md` pour le dossier complet et `coverage.md` dans ce dossier pour les lacunes.
- `README.md`, `DEMARRER.md` pour démarrer et préparer la recette.
- `memory/recette-mobile.md` pour les limites et les pièges de vérification.
- `memory/equipement.md` pour le kit Decathlon et les limites des démonstrations.
- `memory/accueil.md` pour les règles du premier lancement.
- `memory/calibration.md` pour le bilan facultatif et les limites de conversion en doses.
- `memory/enchainement.md` pour la cohérence des prochaines étapes et annonces.
- `memory/design.md` et `reports/design/benchmark.md` pour la refonte visuelle.
- `memory/framing.md` et `reports/framing/` pour le découpage et la stabilité des médias.
