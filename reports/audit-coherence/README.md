# Tempo - état des lieux et audit de cohérence UI/UX

Suivi : les lots 1 et 2 ont été implémentés localement après cet audit. Voir `../coherence-fixes/README.md` pour les corrections et vérifications. Les constats ci-dessous décrivent la version auditée avant correction.

Audit du 14 octobre 2026. Périmètre : version locale courante, branche `fix/recette-mobile`. Aucun changement fonctionnel ni nouveau déploiement réalisé.

## Conclusion

Tempo possède un socle fonctionnel et visuel déjà abouti pour un usage personnel : composer, modifier, pratiquer, reprendre et consulter ses résultats. La palette, les cartes, les fiches et les commandes d’effort forment une direction commune. Le principal chantier est maintenant la fiabilité des comportements et la compréhension des états : enregistré, brouillon, en cours, interrompu, disponible hors ligne.

Je recommande une passe de consolidation des parcours avant d’ajouter des exercices, statistiques ou options. Une nouvelle refonte graphique globale n’est pas justifiée par les observations actuelles.

## Méthode et limites

- Lecture de l’interface, du moteur de séance, du stockage, de la composition, de la progression, des médias, de l’audio, du service worker et des mémoires du projet.
- Exécution actuelle : **130 tests réussis sur 17 fichiers**, build TypeScript/Vite réussi, **507/507 fichiers principaux et 36 complémentaires, aucun absent**, 22,29 Mo de médias d’exercice selon l’audit. Ce volume ne représente pas le poids total incluant les voix.
- Parcours Chromium avec profils isolés à **320, 390 et 1440 px**, hauteur 844 px. Premier lancement, passage du calibrage, accueil, réglages, catalogue, fiche, génération, édition, sauvegarde, recherche des programmes, préparation, effort, pause, arrêt conservé, historique et suppression de séance active.
- 51 relevés d’écrans dans `browser.json`, sans débordement horizontal ni exception JavaScript. Répétitions et repos capturés aux trois largeurs. Le générateur étant variable, les exercices diffèrent entre parcours. Les captures de page entière sont complétées par des captures du viewport pour les états du player : la position d’une barre fixe dans une capture longue ne prouve pas sa position réelle.
- Reproductions complémentaires dans `edge-cases.json` : réglages audio, réduction des animations, suppression de tous les blocs, sémantique de navigation.
- Audit heuristique et technique, pas étude utilisateur ni certification d’accessibilité. Aucun score chiffré de qualité inventé. Les pistes d’amélioration sont distinctes des défauts reproduits.
- Pas de nouvelle validation de la version publique, de Safari/iPhone physique, VoiceOver, du son réellement entendu, du hors ligne de production, de l’installation PWA, du mode paysage, du clavier virtuel ou de toutes les combinaisons de matériel. Les preuves historiques de ces chantiers restent distinctes.
- Les poses et dosages ne sont pas validés médicalement ou techniquement par cet audit. L’acceptation documentaire de Simon reste acquise pour son usage ; la revue humaine non réalisée ne devient pas un nouveau blocage.

## État des lieux

| Domaine | État actuel | Ce qui reste à clôturer |
|---|---|---|
| Parcours principal | Fonctionnel dans les parcours locaux vérifiés | Cohérence des états et protection contre perte de données |
| Identité visuelle | Orange, blanc, bleu nuit ; préparation claire et player sombre cohérents | Petits écarts de composants et densité, sans nouvelle direction artistique |
| Catalogue | 84 fiches, 77 mouvements et 7 variantes tubes ; 48 historiques conservés | Filtres matériel, états sans résultat, adéquation à la bande textile courte |
| Calibrage | Facultatif, guidé ou manuel, sans niveau global ; pompes, levers de chaise et planche | Promesse d’adaptation à préciser et usage réel à tester |
| Composition | Doses prioritaires, repos différenciés, durée estimée | Présentation des écarts de durée et métadonnées après édition |
| Séance | Pause, reprise volontaire, passages et arrêt conservé disponibles | Lisibilité réelle à distance et au clavier mobile, test iPhone |
| Résultats | Prévu, déclaré et inconnu distincts ; snapshots conservés | Compréhension de la progression et statut des séances interrompues |
| Audio | F1/M2 intégrées partiellement avec repli système | M2 211/311 ; global 293/622 ; production arrêtée au quota quotidien, écoute et compression |
| Données et PWA | Stockage local, export/import et infrastructure hors ligne existants | Parcours compréhensible de disponibilité hors ligne, mise à jour, appareil réel |
| Livraison | Beaucoup de modifications locales et fichiers non suivis | Créer un point de sauvegarde Git relisible avant la prochaine grosse passe |

## Défauts et incohérences

P1 : à traiter en premier, car perte de choix ou de données. P2 : friction ou information trompeuse dans les parcours courants. P3 : finition ou dette qui favorise les régressions. Ce classement est une proposition de travail, pas une mesure de fréquence.

### C00 - P1 - La barre fixe du player masque la saisie des répétitions

**Reproduit à 320 et 390 px, hauteur 844 px, sans défilement.** La barre de prochaine phase et commandes commence à y=644 px. Le champ « Réalisées (facultatif) » commence à y=676 px à 320 et y=672 px à 390 : il est recouvert par la barre fixe. À 320 px, une partie de la consigne est aussi masquée. Les boutons sont bien dans le viewport, mais le contenu nécessaire au suivi ne l’est pas. Le navigateur peut défiler pour atteindre le champ, ce qui ne rend pas le premier affichage cohérent pendant l’effort.

**Correction :** réserver l’espace du dock dans la mise en page visible, adapter la hauteur du visuel et la densité selon la hauteur disponible, garder cible + résultat + commandes accessibles ensemble. Prévoir le clavier virtuel sans sacrifier pause et validation.

**Acceptation :** sans défilement à 320/390 x 844 px, cible, consigne utile, champ de résultat et boutons ne se recouvrent pas ; même contrôle sur une hauteur plus basse et clavier iPhone ouvert.

**Preuves :** `320-reps-viewport.png`, `390-reps-viewport.png` et rectangles `playerLayout` dans `browser.json`. Les captures de page entière donnaient une impression trompeuse de visibilité.

### C01 - P1 - Les réglages se perdent entre sous-écrans

**Reproduit aux trois largeurs.** Cocher « Mouvements sans impact », ouvrir « Voix et sons », revenir : la case est décochée. Les données de `ProfileModal` sont locales au composant, démonté lors de la navigation. Cas symétrique confirmé : désactiver le coach vocal, revenir au profil puis enregistrer les réglages du profil ne conserve pas ce choix audio.

**Impact :** l’utilisateur peut penser avoir sauvegardé un ensemble de préférences alors qu’une partie est perdue.

**Correction :** un seul brouillon de profil partagé entre matériel, préférences, audio et bilan, avec une règle de sauvegarde claire. Garder les modifications lors des déplacements internes ; expliciter l’abandon à la fermeture si nécessaire.

**Acceptation :** modifier matériel, sans impact et audio, parcourir les sections puis enregistrer ; retrouver les trois choix après rechargement. L’annulation doit suivre une règle unique.

**Source :** `src/ui/App.tsx`, `ProfileModal` et `SettingsModal` ; `browser.json`, `edge-cases.json`.

### C02 - P1 - La croix de la séance active supprime immédiatement

**Reproduit aux trois largeurs.** Depuis l’accueil avec une séance conservée, toucher la croix fait disparaître la séance sans confirmation ni possibilité d’annuler. `discardActive()` appelle `storage.deleteActive()` sans finalisation dans l’historique. La croix évoque aussi une fermeture d’encart, alors qu’elle supprime la reprise.

**Correction :** utiliser une action explicite « Abandonner la séance », avec conservation comme interrompue par défaut, ou une suppression clairement confirmée. L’aligner sur « Arrêter et conserver » dans le player.

**Acceptation :** les tentatives déjà effectuées restent retrouvables après abandon depuis l’accueil, ou une suppression définitive est clairement comprise et confirmée.

**Source :** `src/ui/App.tsx`, carte active et `discardActive` ; `browser.json`.

### C03 - P2 - Un programme sauvegardé reste un brouillon « non sauvegardé »

**Reproduit aux trois largeurs.** Sauvegarder, ouvrir « Mes programmes » : la carte du programme coexiste avec « Continuer mon brouillon » et la mention « non sauvegardé comme programme ». L’effet d’autosauvegarde du brouillon conserve également le programme sauvegardé.

**Correction :** distinguer brouillon nouveau, modifications non enregistrées et copie identique au programme sauvegardé. Ne montrer une reprise de brouillon que si elle apporte quelque chose.

**Acceptation :** immédiatement après sauvegarde, aucune mention « non sauvegardé » pour ce même état ; une modification ultérieure redevient identifiable.

### C04 - P2 - Les zones de l’éditeur ne suivent pas ses exercices

**Reproduit.** Retirer tous les exercices laisse encore les badges Jambes/Pectoraux/Dos/Abdominaux. Les ajouts étendent `program.zones`, mais retraits et remplacements ne recalculent pas ce champ.

**Correction :** séparer l’objectif demandé des zones réellement présentes. Si les badges décrivent le contenu, les dériver des blocs ; s’ils décrivent la demande, les nommer « Objectif initial ».

**Acceptation :** suppression ou remplacement du dernier exercice d’une zone met à jour le résumé ; programme vide sans badges de contenu.

### C05 - P2 - Les champs numériques empêchent une saisie naturelle

**Reproduit aux trois largeurs.** Vider « Séries » ramène immédiatement la valeur précédente, car seul un entier déjà valide est conservé. Cela gêne le remplacement d’un nombre au clavier. Même modèle présent pour plusieurs champs de l’éditeur et la masse des haltères.

**Correction :** conserver temporairement le texte saisi, valider à la sortie du champ ou à la confirmation, et montrer une erreur précise. Afficher la plage effectivement utilisable, notamment lorsque le calibrage réduit le plafond.

**Acceptation :** vider, saisir une nouvelle valeur, corriger une valeur hors plage et utiliser le clavier mobile sans retour silencieux à l’ancien nombre.

### C06 - P2 - Les recherches sans résultat affichent du vide

**Reproduit aux trois largeurs.** Une recherche impossible dans Explorer laisse uniquement le compteur global « 84 fiches ». Dans les programmes, le cas liste filtrée vide n’a pas non plus d’explication. L’état vide initial existe, mais pas celui de la recherche.

**Correction :** afficher le nombre filtré, « Aucun résultat » et une action pour effacer recherche/filtres. Normaliser accents et espaces pour une recherche tolérante.

**Acceptation :** une recherche sans correspondance ne ressemble jamais à un écran cassé ; un retour à la liste complète prend une action.

### C07 - P2 - Le matériel personnel ne correspond pas complètement aux choix

**Constat de code et de mémoire.** Simon possède une bande textile courte pour fessiers, mais l’interface propose seulement « Bande plate » ou « Tube ». Aucune distinction explicite entre une boucle textile courte et une bande plate longue. Le kit est bien couvert, mais la bande courte peut être comprise comme « bande plate » et produire des attentes incorrectes.

**Correction :** nommer les types et usages réellement pris en charge ; indiquer si la bande textile courte est seulement déclarée ou utilisée pour des propositions. Ajouter des exercices compatibles seulement dans un chantier ultérieur autorisé.

**Acceptation :** Simon peut décrire son matériel sans le faire passer pour une bande longue. Aucun mouvement nécessitant une bande longue n’est proposé sur cette seule déclaration.

### C08 - P2 - La promesse d’adaptation est plus large que le comportement

**Constat de code.** Le bilan explique « trois repères pour adapter les exercices », alors que les levers de chaise servent uniquement au suivi. Le résumé le précise, mais tard. Le ressenti de séance annonce « aide à ajuster la prochaine », alors que la progression produit une suggestion dans des conditions limitées, sur des programmes comparables, sans changement automatique. Les tubes restent exclus de la hausse automatique, conformément à la décision existante.

**Correction :** expliquer à l’endroit du choix ce qui influence une proposition, ce qui est conservé pour suivi et ce qui reste manuel. Conserver le principe sans niveau global.

**Acceptation :** une personne sait ce qui changera à la prochaine séance sans devoir déduire les règles du résumé ou du code.

### C09 - P2 - « Interrompue » et « à reprendre » se contredisent

**Constat d’écran et de code.** Le bilan d’une séance arrêtée affiche « À reprendre une prochaine fois », mais celle-ci est finalisée. Le bouton « Refaire » ouvre un nouvel entraînement depuis le début. Une séance active conservée, elle, est réellement reprenable.

**Correction :** réserver « Reprendre » à l’état actif sauvegardé. Pour une séance finalisée, dire « Séance interrompue », avec « Refaire cette séance » ou « Créer une nouvelle séance » selon l’intention.

**Acceptation :** chaque libellé prédit correctement une reprise au point d’arrêt ou un nouveau départ.

### C10 - P2 - État accessible et état visuel incomplets

**Reproduit et confirmé dans le code.** Navigation active indiquée par CSS sans `aria-current`. Les changements de vue ramènent le scroll en haut mais laissent fréquemment le focus sur le bouton de navigation ou le body. Les choix de ressenti n’exposent pas leur sélection via `aria-pressed`, contrairement aux objectifs et à l’intensité. Le calibrage gère déjà son focus interne : bon modèle à étendre.

**Correction :** fournir un état actif accessible, déplacer le focus sur un titre de vue lors des transitions pertinentes et uniformiser la sémantique des sélecteurs.

**Acceptation :** parcours clavier complet avec position et sélection identifiables. Vérification VoiceOver sur iPhone à prévoir, sans prétendre qu’une inspection DOM la remplace.

### C11 - P2 - Hors ligne : messages techniques et disponibilité peu vérifiable

**Constat de code, pas nouvelle panne hors ligne reproduite.** « Coque », « lots », « JSON », « Fusionner par identifiant » et « scénario de recette Simon » sont visibles dans les réglages. L’action de recette peut effacer le bilan de capacités. Le statut « voix Tempo disponibles » ne donne pas la couverture partielle des voix ni la garantie pour la séance choisie. Le téléchargement des images et le précache applicatif/audio sont des mécanismes distincts.

**Correction :** afficher un état compréhensible « Application / visuels / voix prêts », avec succès vérifiable, progression et erreur. Déplacer les actions de diagnostic dans un espace distinct. Expliquer « sauvegarde dans un fichier » avant le format JSON. Garder le repli système explicite.

**Acceptation :** après téléchargement et rechargement en mode avion, une séance préparée fonctionne avec un statut fidèle ; aucun bouton de recette ne modifie involontairement le profil courant.

### C12 - P3 - Réduction des animations respectée, commande contradictoire

**Reproduit.** En réduction des animations, les poses ne défilent pas et un message le précise. Le bouton indique pourtant « Pause » ; son nom accessible est « Étapes », pas l’action visible. Les contrôles de vitesse restent présents même sans défilement.

**Correction :** refléter l’état réellement animé dans les libellés, et harmoniser nom accessible/action. Masquer ou désactiver les commandes inopérantes avec explication concise.

### C13 - P3 - Ton et vocabulaire hétérogènes

**Constat de code et d’écran.** Le vouvoiement domine, mais des consignes utilisent « Garde », « Descends », « tes contraintes », « assets » et « vérifie ». Certains noms de mouvements sont anglais tandis que le guidage est français. « Sauvegarder », « Enregistrer », « programme » et « séance » ont besoin d’une règle commune selon l’objet et le moment.

**Correction :** petit lexique produit : séance = exécution, programme = modèle conservé, brouillon = édition non enregistrée ; vouvoiement homogène ; termes internes retirés des parcours. Préserver les textes/clips historiques et versionner les annonces modifiées.

### C14 - P3 - Durée demandée présentée comme anomalie

**Observation et appréciation UX.** Pour 20 minutes demandées, des propositions d’environ 14 à 15 minutes apparaissent avec un encart « Écart de -24 % » ou similaire. Le moteur respecte bien la priorité des doses. L’avertissement en pourcentage donne toutefois l’impression que la proposition est ratée.

**Correction proposée :** présenter d’abord « Séance estimée à 15 min pour votre choix de 20 min », avec une explication courte. Garder une alerte distincte en cas de dépassement important. Ne pas gonfler les doses pour remplir le temps.

### C15 - P3 - Entretien de l’UI et des recettes fragilisé

**Constat de code.** `App.tsx` regroupe presque tous les parcours dans des lignes JSX très longues. La feuille de style dépasse 3 100 lignes et cumule plusieurs redéfinitions des mêmes composants. Certaines recettes historiques ciblent encore « Votre niveau », « Découvrir Tempo » et « Générer ma séance », supprimés du parcours actuel.

**Correction :** après les fixes fonctionnels, extraire les parcours et composants partagés, consolider les styles par composant et actualiser les recettes courantes. Ne pas effacer les preuves historiques, mais indiquer leur version.

**Acceptation :** une commande de recette à jour couvre le parcours courant, y compris les cas limites de cet audit ; ne plus citer une ancienne capture comme validation de la version actuelle.

## Lecture par parcours

| Parcours | Ce qui fonctionne bien | Prochaine amélioration |
|---|---|---|
| Premier lancement | Matériel simple puis bilan facultatif, possibilité de passer | Décrire les capacités réellement utilisées et les types d’élastiques |
| Accueil | Quatre objectifs, zones repliées, durée et intensité compréhensibles, CTA mobile | Vérifier en situation la hauteur occupée par CTA + navigation ; conserver reprise/favoris prioritaires |
| Explorer | Gabarit commun, animation et fiche détaillée | Recherche sans résultat, filtres « avec mon matériel » et disponibilité, réduction des animations |
| Éditeur | Doses, difficulté informative, remplacement et paramètres disponibles | État sauvegardé, zones réelles, saisie numérique, présentation de la durée |
| Player | Contraste et grands chiffres, commandes 68-78 px dans les états mesurés, phase textuelle | Recette réelle de lisibilité, clavier de répétitions, audio, pause et reprise iPhone |
| Bilan | Prévu/déclaré/inconnu distincts, ressenti facultatif | Clarifier reprise/nouveau départ et effets réels du ressenti |
| Progression | Historique et volume par muscle, meilleurs résultats déclarés | Une synthèse utile et lisible avant d’ajouter d’autres graphiques |
| Réglages | Matériel, capacités, voix et données accessibles | Brouillon commun, statuts hors ligne fiables et retrait des outils de recette du parcours normal |

Aucun débordement horizontal observé. Les commandes principales mesurées restent dans le viewport de 844 px, y compris répétitions/repos à 320 px, mais leur dock recouvre le champ de résultat mobile (C00). Leur visibilité lorsque le clavier virtuel est ouvert ou sur un écran plus bas reste à vérifier. Les fiches ont un scroll interne dans une modale et les sous-fiches peuvent s’empiler : éprouver les retours et la fermeture au doigt et avec VoiceOver.

## Prochaines étapes proposées

### Lot 1 - Fiabilité des choix et des sauvegardes

Traiter C00 à C05, puis C09 : player sans chevauchement, brouillon de réglages unique, abandon de séance conservé, vrai statut brouillon/programme, zones synchronisées et saisie numérique naturelle. Ajouter des tests ciblés sur ces comportements, sans multiplier les tests purement visuels. C’est le meilleur premier lot : effet concret sur la confiance, sans changement de direction graphique.

### Lot 2 - Cohérence UI/UX transversale

Traiter recherches vides et filtres, types de matériel, vocabulaire, promesse d’adaptation, focus et sélections accessibles, commandes de réduction des animations. Conserver couleurs et grands contrôles, uniformiser les comportements des composants communs. Séparer diagnostic et réglages usuels.

### Lot 3 - Une vraie séance sur iPhone

Avec le matériel réel : préparer une séance, mettre en mode avion après préparation, réaliser une série en répétitions puis une chronométrée, saisir les répétitions au clavier, prolonger le repos, consulter une fiche, passer un exercice en pause, verrouiller puis reprendre, arrêter et retrouver le bilan. Vérifier son, mode silencieux, distance de lecture, doigts humides, installation PWA, VoiceOver et absence de masquage par le clavier. Mesurer ce qui est réellement disponible hors ligne. Consigner résultats et captures sans déclarer de revue technique des mouvements.

### Lot 4 - Finalisation audio et livraison maîtrisée

À la reprise autorisée de production audio, garder M2 prioritaire, terminer les 100 clips M2 manquants puis les autres, écouter avant intégration finale et évaluer la compression. Ne pas relancer ici une production payante ni contourner le quota. Regrouper ensuite un point Git relisible, vérifier la recette courante, et déployer seulement les changements demandés dans le cadre autorisé.

### À différer

Davantage d’exercices, compte/synchronisation, nouveaux niveaux globaux, graphiques supplémentaires ou nouvelle refonte générale. Le catalogue couvre déjà beaucoup de situations ; les incohérences de parcours ont aujourd’hui davantage d’impact sur l’expérience.

## Preuves

- `browser.json` et `browser.cjs` : parcours et métriques par largeur.
- `edge-cases.json` et `edge-cases.cjs` : reproductions complémentaires.
- Captures `320-*`, `390-*`, `1440-*` ; suffixe `-viewport` pour la surface visible du player.
- `reduced-motion.png` : état de la fiche sans animation.
- Les scripts utilisent un profil Chromium temporaire et ne touchent pas aux données de Simon. Vite local de développement : les captures ne valident pas le service worker de production.
