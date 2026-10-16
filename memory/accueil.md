# Premier écran - correction de Simon, 12 octobre 2026

## Retour mobile du 13 octobre 2026

Simon signale une impression de haltères précochées et le texte du nombre d'haltères tronqué. Profil neuf isolé : haltères décochées, aucune présélection reproduite. Ne pas réinitialiser ses choix enregistrés. Le problème de lisibilité est reproduit à 390 px : grille à deux colonnes et marges imbriquées sur les cartes. Correction : détails du matériel sur une seule colonne sur mobile et suppression des marges internes redondantes. Vérification Chromium mobile à 320 et 390 px sans débordement, capture à 390 px avec « 2 haltères » entièrement visible ; build réussi. Vérification sur iPhone physique encore nécessaire.

Simon trouve l'écran « Bienvenue chez Tempo » trop complexe. Pour le premier lancement :
- Ne pas demander le niveau ni afficher les préférences.
- Conserver le matériel essentiel, sans support stable ni tapis/surface confortable.
- Afficher les détails directement sous l'équipement coché, jamais après toute la liste.
- Garder une présentation simple et propre. Les réglages complets restent disponibles ensuite.

Le niveau Débutant reste le défaut interne prudent. Aucun niveau ni matériel n'est inféré à partir d'un autre choix. Le bouton « Découvrir Tempo » démarre le prototype, signalé par une mention courte de démonstrations provisoires et revue technique en attente. L'activation n'exige plus de case technique dans le premier écran.

Les détails d'haltères restent nécessaires au matériel choisi (nombre et masse). L'élastique demande seulement son type au premier lancement ; les autres précisions restent dans les réglages. Le kit affiche un résumé court et sa limite de disponibilité. Les cartes de matériel regroupent la case et ses champs dans tous les formulaires, pas seulement l'accueil.

Ne pas effacer les données existantes pour montrer le nouvel accueil : utiliser un profil navigateur isolé ou la navigation privée pour le tester. Les historiques et snapshots restent conservés.

Le bouton de démarrage et la mention du prototype restent visibles en bas du dialogue quand les détails ouverts imposent du défilement. Les essais utilisent des profils isolés, jamais une suppression des données de Simon.

Résultat : accueil testé dans Chromium à 360, 390 et 1440 px, y compris visibilité du bouton après ouverture des détails. Les 53 tests unitaires et le build passent. Le parcours complet (génération, édition, sauvegarde, entraînement, bilan, historique et hors ligne) reste opérationnel dans les quatre scénarios de recette. iPhone physique non testé.

## Suppression de la séance en cours (13 octobre 2026)
- Simon demande une croix en haut à droite du bloc « Reprendre ma séance » sur l’accueil.
- Suppression directe du checkpoint local, sans bilan ni ajout à l’historique. Programmes et brouillon conservés. Zone tactile de 44 px ; reprise et suppression sont deux boutons distincts.
- Vérification : 122 tests et build passent ; Chrome mobile 390 px confirme la disparition du bloc et son absence après rechargement. iPhone physique non testé pour cette modification.

## Audit de « À vous de jouer » mobile, 13 octobre 2026
- Simon demande une analyse critique et des propositions, sans demande d’implémentation. Aucune modification produit effectuée.
- Observation dans le navigateur intégré à 390 x 844, profil neuf sans matériel : page de 2813 px, bouton Générer à y=1498 px, désactivé sans cible choisie. Ce constat concerne cette configuration, pas un iPhone physique.
- Recommandation proposée, non approuvée : alléger l’en-tête et les textes répétés ; présenter des objectifs exclusifs simples avec zones personnalisées repliées ; garder des durées prédéfinies et une durée personnalisée secondaire ; expliquer l’effet du rythme ; matériel en ligne compacte ; action Voir ma séance persistante au-dessus de la navigation ; retirer la grande carte éditoriale de pompes du parcours principal et prioriser reprise/favoris.
- Préserver l’accès aux informations sur les démonstrations provisoires et la revue technique non réalisée, sans fabriquer de validation. Aucun objectif ni matériel ne doit être inféré silencieusement du profil.

## Simplification intégrée après accord, 13 octobre 2026
- Accord de Simon « vas y integre ca ». Objectifs exclusifs Corps entier/Haut/Bas/Cardio ; zones personnalisées repliées, sans cible automatique. Durées 10/20/30 et choix secondaire 10 à 60 par pas de 5, sans curseur. Intensité conservée avec explication de son effet sur le dosage.
- Titres redondants, numérotation, date, grande carte de pompes et bloc promotionnel programmes retirés. Reprise et deux favoris au-dessus de la préparation ; Explorer reste accessible sous le formulaire. Matériel compact, bouton Modifier visible même à 320 px.
- Mention des démonstrations provisoires repliable, revue humaine explicitement non réalisée. Bouton Voir ma séance fixe au-dessus de la navigation mobile, avec indication lorsque la cible manque. Navigation de hauteur déterministe pour éviter le chevauchement, y compris safe area.
- Profil sans matériel à 390 px : page environ 1076 px au lieu de 2813. Vérification à 320 px sans débordement et jonction exacte CTA/navigation. Génération bas du corps à 25 min, zones personnalisées et sélection des objectifs vérifiées en navigateur intégré. 122 tests et build passent. iPhone physique non testé. Capture : reports/design/accueil-mobile-simplifie.jpg.
- Les règles de composition et les données préexistantes restent conservées. Aucun déploiement ni commit.
