# Benchmark et refonte Tempo - 12 octobre 2026

## Besoin exprimé par Simon
L'interface est trop petite pour le sport : textes, boutons et informations peu lisibles pendant l'effort. La palette est jugée triste. Revoir l'ensemble des écrans, pas seulement la couleur du bouton principal. Conserver le catalogue, les médias, les résultats et l'accueil simplifié.

## Méthode et limites
Analyse des pages officielles, guides d'utilisation et visuels publiés par les éditeurs. Ce benchmark ne prétend pas être une séance complète dans les applications natives, ni une mesure de leur confort sur appareil physique. Certains visuels Fitbod sont protégés par un contrôle anti-bot ; les comportements de son timer reposent sur sa documentation officielle. Les tailles proposées ci-dessous sont des décisions pour Tempo, pas des mesures des concurrents.

| Produit | Observation documentée | Ce qu'on retient pour Tempo | Ce qu'on évite |
| --- | --- | --- | --- |
| [Nike Training Club](https://www.nike.com/fr/ntc-app) | Guidage vidéo, séances par objectif, durée et matériel ; activité pour retrouver les résultats. | Le mouvement et l'objectif d'abord. Cartes de séance claires, images existantes conservées et non recadrées pendant l'effort. | Ajouter un fil de contenus ou de longs textes marketing entre l'utilisateur et sa séance. |
| [Freeletics](https://www.freeletics.com/en/blog/posts/getting-started-with-freeletics/) | Aperçu avec durée, matériel, focus, échauffement et retour au calme ; actions Start et Adapt session. Visuel officiel consulté : aperçu de séance et exercice avec cible et mouvement dominants. | Préparer, ajuster et démarrer sont trois actions distinctes. Séries et prochaine phase explicites dans le player. | Reprendre l'onboarding long, la compétition sociale ou un score inventé. |
| [Fitbod](https://help.fitbod.me/hc/en-us/articles/360006340194-Rest-Timer) | Le repos démarre après la saisie d'une série ; son réglage en cours de séance concerne le repos courant. | Repos immédiatement compréhensible, bouton +15 s visible, saisie facultative séparée de la cible. | Assimiler une cible à un résultat déclaré ou promettre les notifications natives en arrière-plan. |
| [Seconds / Runloop](https://www.intervaltimer.com/app) | Timers de travail/repos, alertes de transition et commandes explicitement prévues pour être touchées pendant une séance sur mobile. | Timer géant, nom de phase visible, commandes larges, différenciation effort/repos par couleur et texte. | Transformer les répétitions en compte à rebours automatique. |

Autres sources consultées : [créateur Freeletics](https://www.freeletics.com/en/blog/posts/workout-creator/), [présentation Fitbod](https://app.fitbod.me/), [pause Fitbod](https://help.fitbod.me/hc/en-us/articles/23376692769559-Pause-a-Workout). Les pages publiques décrivent des fonctionnalités ; elles ne valident pas les mouvements de Tempo.

## Synthèse et direction retenue

- Préparation en fond clair : blanc, gris froid léger, encre bleu nuit. Orange vif pour l'action principale et les sélections, avec texte sombre pour le contraste.
- Séance en fond sombre : chiffres dominants et commandes accessibles. Orange pour l'effort, cyan pour le repos, texte de phase toujours présent. La couleur n'est jamais le seul indicateur.
- Typographie système sans téléchargement : corps 17 px, aides 14 à 16 px, actions 17 à 20 px, titres 28 à 48 px, timer 96 à 128 px selon écran. Aucun texte opérationnel de 8 à 11 px.
- Cibles tactiles : 56 px pour les actions usuelles, 64 à 72 px pour les actions du player ; icônes au moins 48 px. Plus d'espacement pour éviter les touches accidentelles.
- Accueil : configurateur prioritaire, bloc découverte compact, suppression des accroches décoratives trop longues. Le choix du matériel reste progressif et groupé.
- Éditeur : exercices, prescriptions et commandes structurés ; sauvegarde et démarrage distincts, actions visibles en bas.
- Player : phase, exercice, grande cible ou timer, illustration entière, prochaine phase, grosses commandes. Pause et reprise volontaires conservées.
- Historique et bilan : résultats réellement saisis lisibles, cartes aérées, statistiques fondées sur les données existantes.
- Catalogue, fiches, réglages et dialogs suivent le même système de surfaces, tailles, focus et contrastes.

## Vérification prévue
Tests existants, build, recette complète Chromium à 360/390/1440 px, captures de chaque vue et états player, contrôle des dimensions tactiles et du débordement. Contrastes mesurés sur la palette. Régression de la cohérence « Ensuite », des snapshots, du hors ligne et de l'accueil. iPhone physique, VoiceOver et confort réel pendant l'effort restent à vérifier humainement.

## Réalisation et recette

Refonte appliquée au configurateur, à l'accueil, au matériel, aux réglages, au catalogue, aux fiches, à l'éditeur, aux programmes, au player, aux confirmations, au bilan et à l'historique. Le player sépare les commandes principales des commandes secondaires pour que le menu développé ne masque pas le timer. Les détails réseau sont consultables dans les commandes secondaires pendant l'effort. Les dialogues disposent d'un nom accessible lié à leur titre.

- 55 tests passent ; build réussi ; intégrité des 48 exercices et 327 médias conservée.
- Quatre parcours complets Chromium passent, y compris la reprise et la fin chronométrée hors ligne sur localhost.
- 15 vues/états capturés à 360, 390 et 1440 px : 45 captures dans ce dossier.
- Timer mesuré à 104 px sur mobile et 128 px sur ordinateur ; consigne 17/18 px. Commandes player 68/72 px et vérification qu'elles reçoivent effectivement le clic.
- Palette : contraste 17,43:1 pour le corps, 6,25:1 pour les textes secondaires, 5,90:1 pour le bouton orange, 7,64:1 pour le timer d'effort et 9,42:1 pour celui de repos. Mesures des paires principales, pas certification de toute l'application.
- Régression d'annonce Dead bug puis Crunch court vérifiée. Accueil simplifié et kit de résistance revérifiés.

Mesures et captures : `qa.json`. Parcours : `../mobile-recipe.json`. Sources de critères : [contraste W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [taille des cibles W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html). Le choix de cibles beaucoup plus larges est spécifique à l'usage sportif demandé par Simon.

Restent humains : essai sur iPhone, lisibilité à distance pendant une vraie séance, doigts humides, VoiceOver, audio, verrouillage et installation PWA HTTPS. Les illustrations et mouvements attendent toujours une revue technique humaine. Aucun hébergement public n'a été publié.

L'icône PWA et les couleurs de lancement sont harmonisées. La couleur de thème suit également le repos, l'effort et la pause. Le rendu des barres système sur iPhone demeure une vérification sur appareil.

## Harmonisation de tous les écrans

Le rythme visuel des fiches est étendu au configurateur, à l’éditeur, aux programmes, à l’historique, au bilan et aux réglages : marges régulières, niveaux typographiques cohérents, cartes et champs homogènes, métadonnées plus discrètes. Le player conserve ses timers et commandes de grande taille. Contrôle navigateur des 15 états à 360, 390 et 1440 pixels : aucun débordement horizontal, commandes d’entraînement accessibles. Tests applicatifs : 55 réussis ; build réussi. Les captures sont dans ce dossier.
