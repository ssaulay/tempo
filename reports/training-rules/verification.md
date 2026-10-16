# Recette règles et difficulté - 13 octobre 2026

- Suite complète : 121 tests réussis, 16 fichiers. Build complet réussi (audit médias, TypeScript, Vite, précache).
- Tests de régression observés rouges avant correction pour dose indépendante du profil, repos 90/120 s, absence de remplissage forcé, tubes sans hausse après retour global, priorité contrôlée sur pliométrique, accès aux exercices sans niveau personnel et réussite effective avant progression.
- Génération testée à 10, 20, 30, 45 et 60 minutes, matériel kit/haltères : doses dans les bornes et pas de hausse du nombre de séries pour remplir le budget. Cardio à 10 min annonce une durée accessible supérieure, avec 5 min progressives avant et après ; ne prétend pas contenir un entraînement complet dans 10 min.
- Chrome piloté par l'agent principal, contexte isolé `tempo-rules-v2`, viewport mobile 390x844 : réglages sans niveau ; ajout actif de Pompes classiques (difficulté Modérée) sur profil neuf ; remplacement Plus simple propose Pompes sur les genoux, Plus complexe propose variantes plus exigeantes disponibles ; aucune largeur débordante.
- Génération localisée à 60 minutes : programme plus court, sans remplissage artificiel et sans commande promettant de l'allonger automatiquement.
- Aucun message console d'erreur constaté dans ce contexte.
- Recette agent QA séparé impossible car son instance DevTools avait un conflit de profil ; contrôles effectués par l'agent principal via sa connexion existante. Capture sur disque refusée par les racines configurées du connecteur : aucune capture enregistrée, résultats DOM conservés ici.
- Vérification iPhone physique et écoute audio non effectuées. Catalogue, médias et historiques préexistants préservés ; aucun hébergement publié.
