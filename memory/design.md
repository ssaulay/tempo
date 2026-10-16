# Refonte visuelle pour le sport - 12 octobre 2026

## Correction de Simon
L'UI/UX initiale n'est pas assez adaptée au sport : textes et boutons trop petits, palette jugée triste. Simon demande un benchmark de plusieurs applications comparables, une synthèse et une refonte de tous les écrans. Ne pas se limiter à agrandir un bouton ou changer une couleur.

## Direction retenue
Benchmark documenté dans reports/design/benchmark.md : Nike Training Club (guidage visuel et choix de séances), Freeletics (aperçu et adaptation avant démarrage), Fitbod (repos associé à la série enregistrée), Seconds/Runloop (timer dominant et commandes adaptées à l'effort). Sources publiques officielles ; aucune fausse affirmation d'essai dans les applications natives.

Préparation en clair, blanc/gris froid et encre bleu nuit. Orange vif pour les actions, avec texte sombre pour garder du contraste. Player en bleu nuit, orange pour l'effort, cyan pour le repos ; libellé de phase conservé pour ne pas dépendre de la couleur seule. Police système sans requête réseau.

Corps 17 px, aides 14 à 16 px, commandes principales au moins 56 px, commandes du player 68 à 72 px, timer 104 à 128 px. Les champs d'import/export, les résultats, les cartes et les dialogues suivent ce système. Ne pas réintroduire des tailles de 8 à 11 px pour les informations utiles.

Accueil simplifié conservé. Chaque équipement garde ses détails sous sa case. Les cibles restent distinctes des répétitions déclarées et non renseignées. Une refonte graphique ne doit ni remplacer des illustrations ni invalider les snapshots historiques.

Changement de vue : remettre le scroll en haut pour que le player ne s'ouvre pas à la position de défilement de l'éditeur. La prochaine phase réelle reste la source partagée du texte et de la voix. Les fonds de repos et pause ne changent pas la logique des timers.

Les palettes de concurrents sont des références, pas des éléments à recopier avec leurs marques ou images. Les visuels Tempo restent en attente de revue technique humaine. Confort réel à distance, doigts humides, iPhone physique et VoiceOver restent à vérifier humainement.


## Vérifications et gotchas
55 tests et build passent. Recette complète, accueil, kit et cohérence texte/voix revérifiés. 45 captures (15 vues à 3 largeurs) et mesures dans reports/design/qa.json. Les commandes du player sont effectivement atteignables par le pointeur ; le timer de repos reste au-dessus du bloc de commandes. Palette principale mesurée entre 5,9:1 et 17,43:1.

Ne pas inclure le menu secondaire développé dans le bloc fixé des commandes principales : il peut masquer le timer. Garder les messages techniques hors du cœur du player, sans cacher les erreurs de sauvegarde.

Des dialogues peuvent être empilés (catalogue puis fiche). Leur ordre DOM ne correspond pas forcément à leur ordre dans la couche modale native. En recette, cibler le dialogue par son nom accessible, pas avec last().

L'icône PWA reprend bleu nuit/blanc/orange ; les couleurs de thème suivent la préparation claire puis les états du player (effort, repos, pause). Vérifier leur rendu physique sur iPhone avant de prétendre que les barres système y sont validées.

Simon trouve le bloc zones mobilisées peu lisible et les catégories « Non applicable » incompréhensibles. Masquer les rôles vides et, pour la mobilité, ne montrer que les zones mobilisées. Expliquer les rôles musculaires, afficher les noms en étiquettes lisibles, séparer carte et légende. Les classes legend.primary/secondary héritaient des styles de boutons : fond neutralisé explicitement. Ne pas inventer de précisions anatomiques non présentes dans le catalogue ; revue humaine en attente.

Simon a regardé les 48 exercices et juge les animations et mouvements clairs : acceptation de lisibilité utilisateur, pas une validation technique/anatomique. Fiches : animation par défaut ; deux positions textuelles toujours visibles ; respiration dédupliquée ; repères, erreurs, matériel puis schéma. Supprimer « Repérage simplifié face et dos », rendre Face/Dos visibles. Silhouette SVG retravaillée sans changer les associations musculaires. Simon hésite sur les pastilles directement sur le schéma : conserver les noms à côté pour éviter la surcharge.

Toutes les fiches doivent garder un gabarit commun. Simon demande de supprimer les phrases génériques explicatives des zones et rôles musculaires (couleurs, régions concernées, muscles moteurs/soutien/stabilisation). Garder titres, noms des zones et schéma, sans ces introductions. Le composant ExerciseDetail est partagé par les 48 fiches et tous les points d’entrée.

Cartes catalogue : nom en haut, animation dessous, puis numéro « Exercice 01 », niveau et zones en pastilles sur la ligne de métadonnées, action « Détail » à droite avec flèche. La flèche ouvre la fiche ; réserver le + à l’ajout au programme. Les pastilles peuvent revenir à la ligne sur petit écran pour garder les libellés lisibles.

La ligne unique de métadonnées des cartes reste trop confuse selon Simon. Proposition appliquée : nom et animation, ligne propre aux zones, pied séparé par un filet avec numéro discret + niveau à gauche et bouton Détail bordé à droite. Les zones et l’action ne doivent pas se concurrencer dans la même rangée.

Simplification de lecture des fiches : une ligne de commandes Pause/Animer, positions 1/2, vitesse Normal/Lent ; supprimer les flèches redondantes et les deux boutons de mode. Deux positions dans un seul bloc, titres sans répétition de numéro, respiration dans un encart unique, sections repères/erreurs/matériel séparées par un filet, puis carte musculaire avec rôles compacts. Animation reste activée par défaut, réduction des animations respectée. Le bouton final ferme la fiche sans prétendre valider la technique.

Après contrôle des captures mobile, deuxième passe : métadonnées compactes sur une seule ligne, mention de revue conservée sous le schéma plutôt que répétée en haut ; numéro de position en petit surtitre au-dessus de la consigne, sans numéro répété dans une pastille et le titre.

Simon demande davantage d’attention à l’harmonie, aux alignements et espacements. Fiches : styles dédiés à exercise-sheet, sélecteur d’angle intégré gris avec onglet blanc, bande de commandes sur une grille symétrique, numéros 01/02 en repères orange alignés aux titres, rythme de 24-28 px entre blocs, textes secondaires bleu-gris, encart respiration cyan discret. Desktop : deux positions côte à côte, séparation verticale et commandes centrées. Contrôler 360/390/1440 px ; cibles tactiles des positions au moins 44 px.

Affinage étendu à tous les écrans à la demande de Simon : rythme commun 20-28 px, cartes 16-20 px, champs et boutons 12 px, titres et métadonnées alignés, sélecteurs intégrés gris/blanc, sections editor/programmes/historique/bilan et réglages homogènes. Player : garder les tailles généreuses de timers et commandes pendant l’effort. Captures et contrôles 360/390/1440 px via design-smoke ; parcours fonctionnels via mobile-recipe. Les résultats prévus, déclarés et non renseignés restent distincts.

Correction d’alignement signalée par Simon : dans le catalogue, le texte de statut brut était aligné sur le bord extérieur alors que le filtre et le titre des cartes étaient en retrait. Utiliser un même inset mesuré pour le filtre, l’encart de statut et les titres des cartes. Statut raccourci, consigne d’ajout uniquement en mode ajout. Vérifier les coordonnées de contenu dans Chromium à 360/390/1440 px, pas seulement l’absence de débordement.

## 14 octobre 2026 - correction du liseré bleu à l’arrivée

Simon signale, capture à l’appui, un contour bleu autour de « Haltères » au premier écran. Cause reproduite : showModal() focalise le premier contrôle quand la fenêtre d’onboarding n’a pas de bouton Fermer. Le focus-visible global bleu apparaissait donc sans interaction.

Correction au composant Modal partagé : titre h2 focalisable programmatiquement (tabIndex=-1), focus explicite sur ce titre après showModal avec preventScroll, sans contour sur le titre. Le premier Tab atteint ensuite le premier contrôle. Conserver la restauration du focus à la fermeture. Le focus-visible des vrais contrôles reste visible, orange foncé cohérent (#b83208), pas de suppression globale des outlines. Ne pas confondre ce cas avec le focus-within des champs de recherche déjà corrigé.

Test navigateur : reproduit INPUT avant correction, H2 après ; case toujours décochée, Tab/Space fonctionnels, contour clavier 3 px orange, retour au déclencheur des réglages. Largeurs 390/1440, profils isolés. Script scripts/modal-focus-regression.cjs ; 135 tests et build passent. Correction utilisateur à garder pour tous les nouveaux dialogues, en particulier les dialogues sans bouton de fermeture.
