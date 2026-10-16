# Coaching vocal Tempo - Plan de production et d’intégration

> Exécution : utiliser superpowers:executing-plans pour avancer tâche par tâche. Ce document prépare la production ; aucune génération API n’a été lancée.

**Objectif :** produire une bibliothèque française préenregistrée, réutilisable hors ligne, avec une voix choisie à l’écoute.

**Architecture :** Gemini sert uniquement à produire les fichiers en amont. Le navigateur lit des clips locaux et assemble des segments de phrase. Aucune clé ni requête Gemini dans l’application.

**Technologies :** Gemini TTS, script Python de production, WAV maîtres, MP3 de diffusion, lecteur Web Audio, cache du service worker existant.

**Spécification :** ce document et `reports/audio/catalogue-brouillon.json`. Les textes sont des propositions, pas des textes approuvés.

## Contraintes

- Préserver les 48 exercices, leurs médias et leurs snapshots historiques.
- Préserver les changements de l’autre agent. Cette préparation ne modifie ni le lecteur ni les réglages.
- Application française, locale, sans compte ni hébergement public.
- Comparer et retenir des voix féminines et masculines, adultes jeunes, dynamiques et sympathiques. Le nombre final de voix à produire sera fixé après écoute.
- Français de France obligatoire : prononciation et intonation métropolitaines, sans accent canadien ou québécois. `fr-FR` seul ne constitue pas une validation.
- Aucune validation technique des consignes sans revue humaine réelle.
- Ne jamais afficher, copier dans Git ou intégrer au bundle la clé Gemini.

## Constat et accès Gemini

La variable `GEMINI_API_KEY` est renseignée dans le `.env` privé de `/Users/simon.saulay/Documents/ChatGPT/histoplaymo`. Présence vérifiée sans afficher sa valeur. Validité actuelle, projet Google Cloud, facturation et quotas non vérifiés. Une clé locale ne permet pas à elle seule de confirmer le nom du projet Google associé.

Histoplaymo contient une production TTS via l’API Interactions, avec Charon et `gemini-3.1-flash-tts-preview`. Ses scripts sont une référence, pas un contrat API pour tous les modèles. Les erreurs doivent être expurgées des secrets. Le script historique refuse les fichiers `.env` non privés (permissions supérieures à 600).

Tempo utilise actuellement `speechSynthesis`. Annonces : préparation, série/répétitions ou durée, récupération et prochaine phase, changement de côté, fin, dix secondes restantes, encouragement, test des réglages. La phase suivante doit provenir des phases planifiées, y compris nouvelle série du même exercice et répétition d’une série.

## Budget avant production

Tarifs consultés le 12 octobre 2026, en USD hors taxes : [Google](https://ai.google.dev/gemini-api/docs/pricing).

| Modèle, tarif standard | Texte / million de tokens | Audio / million de tokens | Audio / minute |
|---|---:|---:|---:|
| Gemini 3.8 Flash TTS, jusqu’au 31/12/2026 | 0,50 $ | 9 $ | 0,0135 $ |
| Gemini 3.1 Flash TTS Preview | 1 $ | 20 $ | 0,0300 $ |

Calcul Google : 25 tokens audio par seconde. Formule : durée × 25 × tarif audio / 1 000 000 + tokens texte × tarif texte / 1 000 000. Utiliser les métadonnées d’usage réelles pour le bilan. Le tarif 3.8 standard annoncé pour janvier 2027 double.

Hypothèses de planification, avant mesure. Les durées ci-dessous correspondent à un lot pour une seule voix ; multiplier la production par le nombre de voix retenues. La création des identités Voice Design et leurs aperçus n’est pas incluse dans ces seuls calculs TTS et doit être vérifiée séparément :
- Comparatif : une phrase par identité, puis cinq phrases par finaliste. L’estimation antérieure de 2 minutes représentait 0,027 $ de synthèse audio en 3.8 ; elle ne couvrait pas la création Voice Design.
- Base de 220 clips et éventuels textes techniques : enveloppe de 20 à 45 minutes produites, 0,27 à 0,61 $ d’audio en 3.8 ; 0,60 à 1,35 $ en 3.1.
- Avec trois prises de l’ensemble et 100 000 tokens de texte cumulés : environ 1,88 $ en 3.8 ou 4,15 $ en 3.1 dans l’hypothèse haute de 45 minutes par prise.
- Proposition de plafond logiciel : 5 $ pour sélection et production V1. C’est une proposition, pas une autorisation de dépense ni une limite bancaire garantie. Comptabiliser les appels échoués ou incertains avec prudence.
- Le niveau gratuit dépend de l’accès et des quotas du projet. Ne pas supposer la gratuité.
- Coût Gemini à chaque séance après production : aucun. Stockage et distribution éventuels sont séparés.

## 1. Concevoir et choisir les voix

Brief exact : `reports/audio/brief-voix.json`, deux candidates féminines et deux candidats masculins. La comparaison de Charon/Kore/Iapetus/Sulafat est remplacée par Voice Design.

### Bonnes pratiques retrouvées dans Histoplaymo

- Les essais Charon avec changement de style restaient trop artificiels pour Simon. Une identité créée via Gemini 3.8 Voice Design a ensuite été validée à l’écoute.
- Séparer **identité vocale** (genre perçu, âge adulte, timbre, hauteur naturelle, accent, texture) et **direction de jeu** (énergie, proximité, pauses, débit de la phrase).
- Une description précise et concrète est plus exploitable que « voix réaliste ». Ne pas reprendre la personnalité d’archéologue de cinquante ans : Tempo vise des adultes jeunes.
- Comparer d’abord la même phrase ; conserver les prises et modifier une dimension à la fois. La première identité recréée dans le projet payant était trop aiguë et a demandé une nouvelle conception.
- Conserver et réutiliser l’ID de l’identité retenue. Recréer le même prompt ne garantit pas le même timbre.
- Les IDs de voix sont liés au projet Google : un changement de clé vers un autre projet a produit un 404 dans Histoplaymo.
- Les dernières notes Histoplaymo indiquent la clé `PLaymo2`, projet PLaymo `gen-lang-client-0949365384`, Tier 1 Prepay au 25 septembre 2026. C’est un constat historique, pas une vérification actuelle de facturation.

### Étapes

- [ ] Confirmer accès actuel et projet de la clé avant création. Utiliser Gemini 3.8 Flash TTS pour Voice Design ; 3.1 ne couvre pas cette méthode.
- [ ] Concevoir F1 solaire, F2 complice, M1 solaire, M2 complice avec `language_code: fr-FR` et le brief métropolitain. Âge perçu cible : adulte de 25 à 35 ans. Aucun clonage nécessaire.
- [ ] Produire une phrase identique par identité : « Allez, on y va ! Prépare-toi pour les squats. Garde ton rythme et respire. Encore dix secondes, puis tu récupères. »
- [ ] Créer une page locale d’écoute des quatre prises ; examiner d’abord accent et naturel, puis jeunesse adulte, énergie et sympathie. Rejeter tout accent canadien ou québécois à l’écoute, même si les métadonnées disent `fr-FR`.
- [ ] Tester les finalistes sur les cinq phrases diagnostiques du brief : séries, nombres, récupération, vocabulaire sportif, noms anglais et encouragements. Tester aussi les raccords entre clips.
- [ ] Retenir à l’écoute les identités féminines et masculines souhaitées, puis figer leurs IDs, le modèle et le style. Produire un lot distinct par voix retenue. Le nombre final de voix n’est pas décidé ici.

Direction de jeu : français de France, énergie chaleureuse, sourire naturel, débit vivant mais compréhensible pendant l’effort, pauses courtes ; lire uniquement le texte. Une consigne d’accent et `fr-FR` guident le modèle sans garantir le résultat.

Livrables futurs : `scripts/generate-coach-audio.py`, `reports/audio/voice-preview.html`, échantillons, métadonnées d’identité et rapport de coût. Aucune identité ni prise Tempo créée à ce stade.

## 2. Figer les assets et les règles de composition

Catalogue proposé : `reports/audio/catalogue-brouillon.json`.

| Famille | Nombre |
|---|---:|
| Noms des 48 exercices | 48 |
| Nom + « Prépare-toi » pour les 48 exercices | 48 |
| « Série n sur N », de 1 à 5 séries | 15 |
| Répétitions de 2 à 20 | 19 |
| Durées de 10 à 180 secondes, pas de 5 | 35 |
| Récupération de 0 à 120 secondes, pas de 5 | 25 |
| Décompte de 1 à 10 | 10 |
| Messages communs | 20 |
| **Base V1 avant déduplication** | **220** |
| Installation, repère et respiration des 48 exercices, optionnels | 144 |

Les valeurs proviennent des règles actuelles. Les 20 messages communs couvrent accueil/test, départ, fin, pause/reprise, changement de côté, côtés 1/2, par côté, prochaine phase, bilan, récupération générique, ajout de repos, dix secondes et trois encouragements. Pause/reprise et décompte sont des capacités proposées, pas forcément des annonces à jouer systématiquement.

- [ ] Relire les textes, harmoniser le tutoiement, écrire les nombres en lettres pour la synthèse tout en conservant les valeurs numériques dans les identifiants. Définir les prononciations des noms anglais à l’écoute.
- [ ] Dédupliquer les textes identiques par référence commune, sans perdre les associations par exercice. Ne produire que les familles retenues.
- [ ] Faire revoir les 144 consignes techniques avant inclusion. Conserver leur statut non approuvé jusqu’à une vraie revue humaine. Les étapes visuelles 1 et 2 ne doivent pas être remplacées par une narration automatique des trois étapes historiques.
- [ ] Tester les compositions : préparation complète ; nom + série + quantité + par côté ; repos + prochaine phase + nom + série/côté. Exemple : « Trente secondes de récupération. Ensuite. Dead bug. Série deux sur trois. »
- [ ] Prévoir un repos générique pour les durées prolongées (+15 s peut se répéter sans limite), valeurs hors catalogue et anciennes prescriptions. Ne pas annoncer une quantité fausse ; conserver le chiffre exact à l’écran.
- [ ] Les tentatives arbitraires et noms libres de programmes/résistances restent visuels en V1. Ne pas envoyer les programmes personnels à Gemini.

Livrable : catalogue approuvé avec `id`, `text`, famille, déclencheur, priorité, variante et statut de revue. Le brouillon actuel n’est pas encore ce manifeste final.

## 3. Produire les fichiers

- [ ] Script autonome avec modes `--dry-run`, `--preview`, `--generate`, `--resume`, filtres d’identifiants et plafond de coût. Le dry-run liste clips, durée estimée et coût sans appel API.
- [ ] Lire la clé via variable d’environnement ou chemin explicite vers le `.env` privé existant ; ne pas dupliquer le secret. Ne jamais utiliser une variable `VITE_` pour cette clé.
- [ ] Commencer par un pilote de 12 clips couvrant noms, nombres et raccords avec la voix choisie. Faire l’écoute avant le lot complet.
- [ ] Requête par clip, faible concurrence, reprise progressive après 429/5xx, nombre d’essais limité. Conserver les prises. Journal sans secret, incluant modèle, voix, hash texte/style, usage, coût et erreur expurgée.
- [ ] Écrire les WAV maîtres dans `artifacts/audio/masters/v1/`, vérifier le format effectivement renvoyé et conserver les originaux.
- [ ] Éliminer uniquement les silences excessifs ; normaliser le niveau sans dégrader les consonnes ; viser initialement -18 LUFS mono et crête inférieure à -1 dBTP, puis vérifier à l’écoute. Exporter MP3 mono 64 à 96 kbit/s dans `public/assets/audio/v1/`.
- [ ] Générer `public/assets/audio/v1/manifest.json` : texte exact, modèle, voix, durée, checksum, version et statut d’écoute. Un changement de texte, voix ou style invalide uniquement les clips concernés.

Ordres de grandeur : 20 à 45 minutes en MP3 mono 64 kbit/s représentent 9,6 à 21,6 Mo ; WAV mono 24 kHz/16 bits, 57,6 à 129,6 Mo. Ne pas mettre les maîtres dans le paquet de l’application.

## 4. Vérifier et livrer le lot

- [ ] Contrôle automatique de couverture catalogue/manifeste, fichiers lisibles/non vides, durée, checksum, silence et saturation.
- [ ] Écoute intégrale des fichiers retenus : texte exact, nombres, noms anglais, aucune phrase ajoutée, aucune consigne de style prononcée, cohérence du timbre.
- [ ] Réécouter les chaînes de clips en contexte pour éviter un rendu haché. Si un raccord ne fonctionne pas, produire la phrase fréquente entière plutôt que forcer le montage.
- [ ] Régénérer uniquement les prises rejetées et refaire les vérifications concernées.
- [ ] Livrer le manifeste, fichiers de diffusion, maîtres, rapport d’écoute, coût réel et liste d’éventuels clips non approuvés.

## 5. Intégrer après coordination avec la refonte

Fichiers concernés : `src/audio/index.ts`, `src/ui/App.tsx`, tests audio dédiés, `scripts/write-precache.mjs`, `public/sw.js`. Refaire une lecture du code courant avant toute édition : il est modifié dans un autre chat.

- [ ] Ajouter un compositeur d’identifiants à partir des phases structurées. Ne pas analyser `nextPhaseLabel`, qui est un libellé visuel. Préserver les snapshots et la logique de prochaine série.
- [ ] Créer un lecteur à file annulable ; déverrouiller l’audio au geste utilisateur ; respecter volume, désactivation et encouragements. Annuler la file sur pause, navigation, saut, reprise et changement de phase. Les transitions prioritaires interrompent les encouragements ; limiter les annonces à la fenêtre utile.
- [ ] Décider après le pilote si le décompte vocal apporte quelque chose. Ne pas lancer dix secondes de discours sur une fin de série imminente.
- [ ] Précharger les clips nécessaires avant la séance ; cache audio séparé et versionné. Le précache actuel de la coque ne garantit pas la disponibilité des audios. Afficher la disponibilité hors ligne et gérer quota/échec de téléchargement.
- [ ] Migrer le réglage de voix navigateur vers le coach enregistré sans casser les profils existants. Repli visuel/sonore si clip absent ; synthèse système seulement si le produit décide de la conserver explicitement.
- [ ] Tests significatifs : prochaine série du même exercice, côté suivant, dernière phase/bilan, ancienne valeur hors catalogue, repos prolongé, interruption des files, mute et fichier manquant.
- [ ] Recette Safari sur iPhone physique : premier geste, mode avion après cache, pause/reprise, passage en arrière-plan et retour, volume et Bluetooth. Vérifier qu’aucun appel Gemini et aucune clé ne figurent dans le bundle/réseau de la séance.

## Points de revue prioritaires

1. Voix et prononciation : écoute humaine nécessaire.
2. Repos prolongés et snapshots historiques : pas de chiffres inexacts.
3. Annulation : aucune annonce ancienne après un saut ou une pause.
4. Hors ligne : vérifier les fichiers réellement disponibles, pas seulement la coque.
5. Consignes techniques : ne pas confondre génération réussie et revue sportive.

## Ordre de lancement

Estimation et accès → comparatif de voix → choix à l’écoute → textes figés → pilote de composition → production complète → contrôle et écoute → intégration coordonnée → recette physique.

Prochaine étape concrète : création de quatre identités et comparatif sur une phrase identique, puis diagnostic des finalistes. Ce plan ne choisit pas la voix à la place de Simon et ne lance pas la génération du lot avant ce choix.

Sources : [synthèse Gemini, voix et formats](https://ai.google.dev/gemini-api/docs/speech-generation), [tarifs Gemini](https://ai.google.dev/gemini-api/docs/pricing), catalogue et règles Tempo, documentation et scripts locaux Histoplaymo.

## Sélection confirmée le 12 octobre 2026

Simon a retenu F1 et M2-deep-v2 (variante plus grave). Les identifiants persistants et styles sont dans `reports/audio/voices/selection.json`. Cette sélection remplace les étapes de choix encore décrites comme ouvertes ci-dessus. Deux lots de diffusion à prévoir, un par voix ; aucune production complète ni intégration commencée.

## Règle de découpage précisée

Préparations fixes : garder les 48 phrases nom + préparation complètes, comme déjà prévu au catalogue. Favoriser aussi les messages communs complets. Réserver la composition aux combinaisons nombreuses et variables ; utiliser des segments de phrase autonomes plutôt qu’un assemblage mot à mot. Le pilote doit déterminer si les séries/quantités composées sonnent assez naturellement. Le prix TTS dépend surtout de la durée produite, pas du seul nombre de fichiers ; la simplicité des textes fixes et leur prosodie priment sur une économie faible.

## Pilote réalisé le 12 octobre 2026

24 extraits disponibles dans `reports/audio/pilot/index.html`, comparaisons phrases complètes/segments. Coût et extrapolation fondés sur les usages réels : `reports/audio/pilot/cost-report.md`. Étape suivante : écoute du pilote avant production complète.
