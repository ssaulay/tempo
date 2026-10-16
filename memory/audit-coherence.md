# Audit de cohérence du 14 octobre 2026

Simon demande un état des lieux complet et des prochaines étapes, avec audit UI/UX transversal. Rapport : `reports/audit-coherence/README.md`, 16 constats C00-C15 et quatre lots proposés. Audit seulement, aucune correction fonctionnelle ou nouvelle publication effectuée.

Vérification actuelle : 130 tests/17 fichiers passent, build réussi, 507 médias principaux + 36 complémentaires présents. Parcours Chromium isolés 320/390/1440 x 844 px : 51 relevés, pas de débordement horizontal ni exception JS. Répétitions/repos vérifiés aux trois largeurs. Pas de nouvelle recette Safari/iPhone physique ni hors ligne de production.

Priorités constatées :
- Player : dock fixe recouvre le champ « Réalisées » sans défilement à 320/390 px. Boutons visibles ne signifie pas parcours entier accessible. À 320/390, dock y=644 px ; champ y=676/672 px. Captures viewport indispensables : une capture fullPage peut présenter le dock en bas de la grande image et masquer le problème.
- Réglages : état du profil local à ProfileModal perdu en ouvrant audio/données ; état audio séparé non conservé en sauvegardant ensuite le profil. Un brouillon partagé doit remplacer ces états concurrents.
- Croix de reprise : suppression immédiate via deleteActive sans finalisation historique, contrairement à arrêter/conserver dans le player.
- Programme enregistré affiché simultanément comme brouillon non enregistré.
- Retrait/remplacement de blocs ne recalcule pas les zones ; même programme vide garde ses badges.
- Champs numériques contrôlés refusent état vide, donc édition peu naturelle.
- Aucun résultat de recherche sans état vide dédié, compte global trompeur dans le catalogue.
- Bande textile courte personnelle non représentée explicitement (seulement bande plate/tube).
- Navigation sans aria-current, focus non transféré aux titres des vues ; ressenti sans aria-pressed.
- Réduction des animations respectée mais bouton encore « Pause » et aria-label « Étapes ».
- Promesse adaptation calibrage/ressenti à préciser ; séance interrompue finalisée ne se reprend pas au point d’arrêt malgré le titre du bilan.
- Réglages exposent outils de recette et vocabulaire interne ; types matériel et états hors ligne à clarifier.
- Recettes historiques design-smoke/mobile-recipe utilisent anciens libellés et niveau global supprimé ; ne pas les présenter comme preuves actuelles.

Recommandation : consolidation du player/états/sauvegardes, puis cohérence composants/textes/accessibilité, séance réelle sur iPhone, audio et livraison. Conserver direction visuelle orange/blanc/bleu nuit, ne pas ajouter un nouveau niveau global ni gonfler les doses pour remplir la durée. Acceptation documentaire de Simon maintenue ; aucune revue technique humaine inventée ou nouvel obstacle créé.

Les scripts d’audit utilisent le Playwright embarqué et Chrome headless temporaire, sans données de Simon. Chrome DevTools était indisponible à cause d’un verrou de profil ; aucun navigateur utilisateur arrêté. Serveur Vite local utilisé, donc pas de preuve de service worker production.

## 14 octobre 2026 - lots 1 et 2 implémentés à la demande de Simon

Statut : corrections locales terminées, aucune publication/production audio lancée. Rapport de livraison `reports/coherence-fixes/README.md`. L’audit ci-dessus décrit l’état avant correction ; ses défauts C00-C14 sont traités dans le périmètre décrit, C15 ciblé par extraction des réglages et recettes actuelles, sans refonte intégrale de la feuille CSS.

Règles durables :
- Les réglages (profil, matériel, capacités, voix) partagent un brouillon unique. Enregistrer un bilan depuis les réglages met à jour ce brouillon ; « Enregistrer mes réglages » persiste l’ensemble. Fermer avec changements demande confirmation. L’onboarding persiste directement à la fin du bilan ou au passage.
- Le matériel du jour a aussi un brouillon : confirmer valide les champs, fermer annule. Le choix confirmé reste actif lors de la réouverture d’un programme/brouillon dans la même utilisation ; ouvrir l’éditeur ne doit plus le remplacer silencieusement par le profil. Après rechargement, le profil reste la base.
- Abandonner une séance depuis l’accueil utilise la finalisation interrompue et conserve les tentatives, avec confirmation. « Reprendre » est réservé au checkpoint actif ; une séance finalisée propose « Refaire cette séance ».
- L’état brouillon se compare au contenu enregistré (pas aux dates, version ou favori). Une sauvegarde identique ne laisse pas une carte non enregistrée. Une vraie édition la rétablit ; suppression du programme retire son brouillon associé. Les zones affichées viennent des blocs réels, y compris après remplacement/retrait.
- Les nombres acceptent temporairement du texte vide ; validation explicite au blur/confirmation plutôt que retour silencieux. Le même contrôle s’applique au matériel du jour, au profil et à l’éditeur.
- Player : espace dimensionné au viewport et à VisualViewport, centre défilable si trop court ; saisie dans le bloc des commandes, plus de dock recouvrant le champ. Garder les grandes commandes (>=68 px). Réduire une fenêtre ne constitue pas une validation du clavier Safari.
- Bande textile courte = booléen facultatif distinct, déclaration uniquement. Ne donne aucun accès aux exercices avec bande longue/tube. L’élastique existant s’intitule « Bande longue ou tube », option « Bande plate longue » explicite. Ancien schéma conservé et anciens exports compatibles.
- Recherche tolérante accents/casse/espaces, vrai compteur filtré, états sans résultat, filtre de disponibilité incluant préférences et capacités, pas seulement matériel.
- État hors ligne obtenu par inspection de la version applicative courante et des fichiers présents, séparant application/visuels/voix. 540 fichiers de fiches téléchargeables, distincts des 543 ressources de l’audit global (trois partagées). 293 clips disponibles mis en cache ne signifient pas toutes les annonces couvertes. Diagnostic dans une section distincte ; profil de test confirmé puis placé dans le brouillon, pas appliqué par surprise.
- Ton à l’écran : copie de présentation au vouvoiement (126 chaînes explicites), sans transformation des contrats, des sources, des snapshots sérialisés ni des anciens clips. Pas de conjugaison heuristique à l’exécution. Les noms usuels des mouvements et formulations des enregistrements historiques restent conservés.
- Chronomètre : arrondir le total de secondes avant de découper minutes/secondes ; sinon 119,8 affichait 1:60.

Preuves finales : 135 tests/19 fichiers et build passent. Régressions principales, cas limites à 320/390/1440 px et hauteurs 844/668/500, calibrage complet avec interruption/douleur passent. Application de production locale et 540 visuels/293 clips vérifiés après rechargement hors ligne ; séance générée/démarrée et illustration chargée. Revue de code distincte a relevé le garde manquant du matériel du jour, corrigé puis testé. Safari/iPhone physique, VoiceOver, son entendu et confort réel restent à vérifier.

Recettes historiques `design-smoke.cjs`/`mobile-recipe.cjs` signalées comme antérieures ; utiliser les scripts coherence pour l’interface actuelle. Recette calibrage adaptée à la sauvegarde commune des réglages et accepte TEMPO_REPORT_DIR pour conserver les anciennes captures.

### Publication du même jour
Simon a ensuite demandé explicitement le déploiement public. Lots 1/2 publiés sur l’URL existante, version `70c97f91-9996-410f-a6c8-88f66589b88c`. 135 tests/build, onze ressources publiques identiques au build et recette Chromium publique (réglages, édition, recherches, accessibilité et player 320/390/1440) réussis. Détails dans `memory/deploiement.md` et `reports/deployment/coherence-browser.json`. iPhone physique toujours en attente.
