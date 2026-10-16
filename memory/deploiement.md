# Déploiement mobile

- Le 13 octobre 2026, Simon demande explicitement un déploiement accessible depuis son mobile comme CineParis, sur son compte Cloudflare. Cette demande autorise l’hébergement public de Tempo.
- URL : https://tempo.ssaulay.workers.dev/. Worker `tempo`, hébergement statique du seul dossier `dist`, configuration SPA dans `wrangler.jsonc`. Aucun backend ni synchronisation ajoutés.
- Wrangler 4.150.0, connexion OAuth déjà disponible sur la machine. Version initiale : `6d4ab72b-b443-4fea-bab2-b43a015f80c5`.
- Vérifications fraîches : 122 tests passent, build prototype et intégrité des médias passent. Accueil visible dans le navigateur sur l’URL publique. Neuf ressources HTTPS comparées octet par octet au build, toutes 200 ; rapport `reports/deployment/checks.json`.
- Le build prototype est volontaire : Simon accepte la revue par sources multiples pour son usage, sans revue humaine inventée ni modification des statuts de contenu.
- iPhone physique, audio réel et installation PWA restent à vérifier sur appareil. Safari → Partager → Sur l’écran d’accueil pour l’installation.
- IndexedDB est isolé par origine et appareil : les données localhost ne migrent pas seules ; export/import nécessaire.
- Redéployer : `npm test`, `npm run build`, `npx --yes wrangler@4.150.0 deploy`. Ne pas publier le dépôt ou les rapports ; conserver le périmètre `dist/`.

## Redéploiement du calibrage, 13 octobre 2026
- Simon demande explicitement « deploie ». Version Cloudflare `4b5fd888-f33a-42f9-b022-53bc4e9a68ed`, URL existante conservée. Seul `dist/` publié ; 5 ressources nouvelles/modifiées.
- Vérification fraîche : 130 tests et build passent. Neuf ressources HTTPS sont identiques octet par octet au build et répondent 200, dont bundle du calibrage, service worker et images pompes/planche.
- Chromium mobile isolé à 390 px sur l'URL publique : onboarding, saisie manuelle, sauvegarde, rechargement et accès au recalibrage depuis les réglages vérifiés, sans erreur JS. Rapport `reports/deployment/calibration-checks.json`, capture `reports/deployment/calibration-mobile.png`.
- iPhone physique toujours non testé. Les utilisateurs existants trouvent le module dans les réglages ; ne pas effacer leurs données ni leur imposer de nouveau l'onboarding. La version chargée peut nécessiter fermeture/réouverture de la PWA pour laisser le service worker actualiser la coque.

## 14 octobre 2026 - publication des lots de cohérence UI/UX

- Simon autorise explicitement « vas y deploie au public ». `npm test` : 135 tests/19 fichiers passent ; `npm run build` réussi, médias intègres.
- Déploiement avec Wrangler 4.150.0 du seul dossier `dist/` sur le Worker `tempo`, URL inchangée https://tempo.ssaulay.workers.dev/. Version Cloudflare : `70c97f91-9996-410f-a6c8-88f66589b88c` ; coque `fd3a97096d1a`.
- 106 ressources nouvelles/modifiées publiées, comprenant les corrections UI/UX et les 100 clips M2 déjà générés/exportés dans le build courant. Aucun appel de génération audio ni changement de quota pendant le déploiement.
- Onze ressources HTTPS vérifiées 200 et identiques octet par octet au build : page, service worker, précache, manifeste PWA, quatre bundles JS/CSS, manifeste audio, clip M2 et image. Rapport `reports/deployment/coherence-checks.json`.
- Les données IndexedDB restent dans chaque navigateur ; aucune migration ou suppression des données de Simon. Pour une PWA déjà ouverte, fermer toutes les fenêtres Tempo puis rouvrir afin de laisser activer le nouveau service worker. Ne pas demander d’effacer les données.
- Recette Chromium publique réussie : réglages persistants, édition/sauvegarde/brouillon/suppression, recherche, sémantique accessible et player à 320/390/1440 px. Profils isolés, données de Simon intactes. Rapport `reports/deployment/coherence-browser.json`.
- Première passe publique avec attente de 5 secondes trop courte pour préparer les médias au premier démarrage (spinner encore actif). Recette rejouée avec 30 secondes, tous les parcours passent ; aucune modification fonctionnelle nécessaire. `TEMPO_TIMEOUT` permet d’adapter la recette au réseau sans déclarer le chargement terminé trop tôt.

## 14 octobre 2026 - focus initial de l’accueil
- Correction demandée par Simon sur capture : titre du dialogue focalisé à l’ouverture au lieu de la case Haltères ; focus clavier conservé, orange foncé.
- Déployé sous version `5ed3cf0d-e273-479b-8bcb-e0c310833376`, coque `92175d4053dc`. 135 tests/build passent ; quatre ressources publiques identiques au build et recette focus au chargement, Tab/Space et restauration après réglages réussie à 390/1440 px.
- Propagation Cloudflare constatée : l’URL a continué à servir l’ancien HTML/service worker et la nouvelle URL de bundle renvoyait temporairement le fallback SPA, malgré le nouveau déploiement actif à 100 %. Nouvelle vérification quelques minutes plus tard : nouvelles ressources correctes et recette publique réussie. Ne pas conclure à partir du seul succès Wrangler, ni masquer le souci par un effacement des données.
- Preuves : `reports/deployment/modal-focus-checks.json` et `reports/coherence-fixes/modal-focus.json` (URL publique), captures focus-arrival et focus-keyboard.
