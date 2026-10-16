# Recette Tempo - 12 octobre 2026

Branche `fix/recette-mobile`, créée depuis `main` propre. Remote confirmé : https://github.com/ssaulay/tempo.git. Aucun hébergement public, aucun push, aucune modification existante à écraser.

## Démarrage

`npm ci` exécuté : 52 paquets installés, audit npm sans vulnérabilité signalée. Node 22.14.0.
`npm test` : 49 tests passent. `npm run build` : réussi.
Serveur de preview construit accessible sur le Wi-Fi : http://192.168.1.92:4173/ (adresse valable pour le réseau actuel). Sur ordinateur : http://localhost:4173/.

## Corrections

- Le démarrage ne bloque plus sur l'absence de Cache Storage en HTTP LAN. Les médias sont chargés avec réseau ; le message précise que le hors ligne et la PWA nécessitent HTTPS sur téléphone. Le téléchargement global refuse clairement une origine incompatible.
- Pause/reprise et changement de voix ne réinitialisent plus la saisie facultative de répétitions dans la même série.
- Le service worker retrouve les fichiers statiques de même origine malgré `Vary: Origin` ajouté par Vite preview. Le défaut causait une page vide lors d'un rechargement hors ligne, même avec un cache rempli.
- Le message réseau du player dispose d'un contraste lisible.
- La grille du configurateur peut rétrécir à 360 px, avec retour à la ligne des raccourcis. Le débordement élargissait le viewport et empêchait la navigation basse d'être touchée correctement.

## Preuves

Rapport exécutable : `mobile-recipe.json`. Scénario : `scripts/mobile-recipe.cjs`.
Profils de navigateur isolés, données de Simon non utilisées. Chromium aux largeurs 360, 390 et 1440 px ; parcours HTTP sur adresse Wi-Fi à 390 px. Hors ligne simulé par coupure réseau du navigateur sur localhost, une origine sécurisée autorisant le service worker.

Le script vérifie génération, modification de paramètres et sauvegarde, temps actif et pause stable, reprise, saisie conservée, repos +15 s, rechargement avec reprise volontaire, images préparées accessibles hors ligne, série déclarée à 6, série validée non renseignée, arrêt conservé, historique sans doublon après rechargement et snapshot immuable après modification du programme. Une séance réduite à un exercice chronométré se termine automatiquement hors ligne et conserve sa durée réelle.

Les 48 exercices et 327 médias sont conservés. Audit : 291 fichiers principaux + 36 complémentaires, zéro absent, zéro erreur, environ 20,12 Mo. Cela vérifie l'intégrité des fichiers uniquement. **Illustrations et mouvements en attente de revue technique humaine.**

## À vérifier sur un vrai iPhone

- Safari physique, ergonomie pendant une séance et gestes tactiles réels.
- PWA installée et redémarrage hors ligne via une origine HTTPS accessible au téléphone.
- Voix françaises installées, audio réel et voix hors ligne.
- Wake Lock, passage en arrière-plan, verrouillage et retour au premier plan.
- VoiceOver et accessibilité sur appareil.
- Fermeture brutale : reprise au dernier checkpoint réussi, sans promesse d'écriture synchrone à la fermeture.

WebKit n'est pas installé dans cet environnement : ce moteur n'a pas été testé. Chromium mobile simulé n'est pas une validation iPhone. La revue biomécanique des fiches, poses, amplitudes et installations reste humaine.

## Relancer la recette automatisée

Le scénario JavaScript nécessite Playwright et ses navigateurs, sans les imposer aux dépendances de l'application. Utiliser `node scripts/mobile-recipe.cjs` dans un environnement où Playwright est disponible ; `TEMPO_PLAYWRIGHT` peut désigner son module installé. `TEMPO_CHROMIUM` peut désigner un binaire Chromium existant, `TEMPO_BASE_URL` et `TEMPO_LAN_URL` adaptent les adresses. Le serveur doit déjà être lancé sur un build stable pendant toute la recette.

## Ajout du kit de résistance Decathlon

Le 12 octobre, ajout d'une option distincte pour le kit compact avec 5 élastiques Decathlon (réf. 8975309), avec présentation des résistances et accessoires. Le profil et les exports conservent cette déclaration ; les anciens exports restent compatibles. Une bande plate déjà déclarée n'est pas écrasée.

53 tests unitaires passent après cet ajout, build réussi. La recette de cette option passe dans Chromium à 360 et 390 px : `reports/equipment-kit.json`, scénario `scripts/equipment-kit-smoke.cjs`. Les tubes sont reconnus comme matériel compatible avec les contrats concernés mais leurs exercices restent indisponibles en prototype faute de démonstrations adaptées. Les ancrages de porte et attaches de cheville ne débloquent aucun exercice supplémentaire.

## Simplification du premier lancement

Accueil limité au matériel essentiel, sans choix du niveau, support, tapis ni préférences. Niveau Débutant conservé en interne et réglages complets accessibles ensuite. Chaque équipement et ses détails sont regroupés dans une même carte. Les précisions de l'élastique et du kit sont réduites au premier lancement ; le bouton « Découvrir Tempo » et la mention du prototype restent visibles lorsque le dialogue défile.

53 tests unitaires passent et build réussi. Recette du nouvel accueil aux largeurs 360, 390 et 1440 px : `reports/onboarding.json`, scénario `scripts/onboarding-smoke.cjs`. Sélection du matériel, sauvegarde et rechargement testés. Les quatre parcours complets et les deux recettes du kit ont été relancés avec succès après la simplification.

## Annonce de la prochaine série

Correction du scénario trois séries de Dead bug puis Crunch court : le repos annonçait auparavant le prochain bloc du programme trop tôt. Le texte « Ensuite » et la voix suivent maintenant la prochaine phase réelle, en précisant la série et le côté. Aucune modification des séances, résultats ou snapshots.

55 tests passent, build réussi. Scénario réel Chromium à 390 px : après les séries 1 et 2, texte et annonce indiquent respectivement Dead bug série 2 sur 3 et série 3 sur 3. Crunch court est préparé après la troisième série. Rapport : `reports/next-step.json`. La vérification capture le texte vocal ; elle ne certifie pas le son sur un iPhone physique.


## Refonte pour l'usage sportif
Benchmark de quatre applications et refonte complète documentés dans `design/benchmark.md`. Palette orange/blanc/bleu nuit, textes agrandis, actions larges, timer prioritaire, repos cyan et commandes secondaires séparées. 55 tests passent, build réussi, parcours complets revérifiés. Contrôles visuels à 360, 390 et 1440 px dans `design/qa.json`, avec 45 captures et mesures de tailles/contrastes. Aucune validation des illustrations ni certification sur iPhone physique.
