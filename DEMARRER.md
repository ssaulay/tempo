# Tester Tempo sur votre ordinateur et votre téléphone

1. Décompressez l’archive. Le dossier `tempo` contient le projet et tous ses visuels.
2. Installez Node.js 24 LTS si nécessaire : https://nodejs.org/fr/download
3. Ouvrez un terminal dans ce dossier (Windows : clic droit → Ouvrir dans le Terminal ; Mac : Terminal puis `cd` vers le dossier).
4. Exécutez :

```sh
npm ci
npm run build
npm run preview -- --host 0.0.0.0
```

Le dépôt GitHub contient le code et tous les visuels. `npm run build` prépare la version testable dans `dist`. Cette commande sert aussi à reconstruire l’application après une modification.

Sur l’ordinateur, ouvrez l’adresse **Local** affichée. Sur le téléphone, connecté au même Wi-Fi, ouvrez l’adresse **Network**, par exemple `http://192.168.1.42:4173`. Gardez le terminal ouvert. Autorisez le serveur sur le réseau privé si le pare-feu de votre ordinateur le demande. Si plusieurs adresses Network s’affichent, utilisez celle du Wi-Fi de l’ordinateur.

Dans Tempo, choisissez votre matériel si nécessaire puis « Découvrir Tempo ». Le prototype reste signalé comme provisoire. Pour le scénario de recette, ouvrez Réglages et choisissez Intermédiaire, puis Pectoraux + Abdominaux et 20 minutes. Le matériel n’est jamais ajouté automatiquement.

Le HTTP sur le Wi-Fi convient à un premier test de l’interface et du player. Pour tester le service worker, l’installation PWA et le hors ligne sur iPhone, une adresse HTTPS accessible au téléphone est nécessaire.

Les 48 lots visuels et les vues de dessus sont produits. Leur revue technique humaine reste en attente. La recette Chromium à 360, 390 et 1440 px et le parcours Wi-Fi passent (voir `reports/recette-mobile.md`). Les essais sur un iPhone physique et WebKit restent à réaliser. Aucun hébergement public n’a été publié. Consultez `README.md` pour les détails.

Dans l’archive légère, les visuels optimisés sont inclus intégralement. Le serveur recopie automatiquement ces médias vers `dist` avant de démarrer. Les planches PNG de production, utiles uniquement pour retravailler les illustrations, sont fournies dans des archives séparées.
