# Reprendre le catalogue et la validation des exercices Tempo

État enregistré le 12 octobre 2026. Cette note permet de poursuivre dans une nouvelle conversation sans refaire la recherche déjà conservée.

## Demande de Simon

Constituer un catalogue de référence solide pour les exercices à mettre dans l’app : textes, positions exactes par phase, muscles sollicités, conseils, erreurs, matériel, adaptations, images, animations, sons et consignes vocales. Repartir des exercices déjà présents, puis élargir le catalogue, particulièrement pour muscler les pectoraux et les abdominaux aux niveaux intermédiaire et avancé.

Exigence explicite : suffisamment de sources différentes pour contrôler l’exactitude de chaque donnée. Deux liens génériques ne suffisent pas. Lire les descriptions originales de la variante exacte ; rechercher une référence supplémentaire en cas de divergence ; conserver les incertitudes au lieu d’affirmer une validation globale.

## Travail réalisé

- Audit initial et snapshot des 48 exercices applicatifs, règles et manifeste des médias, avec empreintes : [baseline.json](baseline.json), [audit-initial.md](audit-initial.md).
- Contrat complet des champs d’une fiche et méthode de preuve : [README.md](README.md).
- Recherche des 48 exercices existants : lots cardio, force, tronc et mobilité, chacun en Markdown et JSON. Renforts ciblés conservés dans supplement-press et supplement-lower.
- Ajout documentaire de 21 candidats, 8 pectoraux et 13 abdominaux : trois lots d’extension, avec positions, mouvement, respiration, muscles et portée des preuves, prérequis observables, erreurs/corrections, régressions/progressions, briefs médias et scripts audio brouillons.
- Synthèse des objectifs et de la progression : [extension-overview.md](extension-overview.md). Distinguer force/développement musculaire, puissance et stabilité. Plus complexe ne signifie pas plus efficace pour l’hypertrophie.
- Observation ponctuelle de six images existantes : EX23, EX34 et EX48, étapes 1 et 2. [media-spot-check.md](media-spot-check.md) conserve les constats et empreintes. Les autres séries ne sont pas inspectées image par image.
- Assemblage unique : [REFERENCE.md](REFERENCE.md) et [reference.json](reference.json), 69 fiches, 216 entrées documentaires, 208 URL distinctes. Les totaux incluent références exactes, famille et contexte ; ils ne comptent pas des confirmations indépendantes.
- Contrôles structurels réussis : IDs, sections, ancres, liens locaux, références présentes et champs essentiels des 21 candidats. Catalogue applicatif inchangé par ce chantier par rapport au snapshot. [verification.json](verification.json) conserve ce contrôle, sans approbation technique.

## Passe complémentaire conservée

18 fiches approfondies ou arbitrées, 16 entrées de registre ajoutées dont des références de famille et une exclusion exacte ; les totaux ne mesurent pas l’indépendance. Consulter [followup-review.md](followup-review.md) pour résultats, accès échoués et conditions de clôture, et [followup-verification.json](followup-verification.json) pour les contrôles de cette passe. Les décisions sont enregistrées dans les lots sources, champ followupReview, par positions/muscles/conseils/médias/audio.

Priorité de reprise : modèle et notice bandes EX19/23/38/53 ; largeur modérée EX50 ; réception/protocole EX52 ; sorties haltères EX55/56 ; seconde procédure pieds empilés EX65. Les médias AI aerobis, vidéos non vues et pages inaccessibles ne deviennent pas preuves de geste.

## Ce qui n’est pas réalisé

Les 21 candidats ne sont pas intégrés dans l’app, leurs IDs EX49-69 sont provisoires. Aucun de leurs médias ou clips audio n’a été produit. Aucun exercice ne possède toutes les validations humaines, médias, cartographie, audio et prescription. La vérification documentaire ne remplace pas la revue d’un professionnel qualifié sur la version précise des contenus et des mouvements.

Les 48 exercices historiques, médias et snapshots doivent être conservés. Les phrases de base et voix F1/M2 du chantier vocal séparé ne doivent pas être écrasées. Consulter AGENTS.md et memory/audio.md pour son état actuel, susceptible d’évoluer indépendamment.

## Les 21 nouvelles fiches

| ID | Variante |
| --- | --- |
| EX49 | Pompes déclinées sur support fixe |
| EX50 | Pompes avec prise modérément large |
| EX51 | Pompes archer avec deux mains au sol |
| EX52 | Pompes pliométriques sans claquement |
| EX53 | Pompes résistées avec bande plate au haut du dos |
| EX54 | Développé haltère unilatéral au sol |
| EX55 | Écartés haltères au sol |
| EX56 | Développé haltères serrés au sol |
| EX57 | Planche latérale jambes tendues |
| EX58 | Planche sur avant-bras à levier long |
| EX59 | Planche sur avant-bras avec levée alternée d’une jambe |
| EX60 | Planche haute avec touchers d’épaules alternés |
| EX61 | Planche montée-descente sur avant-bras et mains |
| EX62 | Hollow hold jambes tendues et bras au-dessus de la tête |
| EX63 | Crunch bicyclette alterné |
| EX64 | Relevé de jambes allongé, deux jambes tendues |
| EX65 | Planche latérale avec relevés de bassin, jambes tendues |
| EX66 | V-up, montée simultanée du tronc et des jambes |
| EX67 | Rotation russe sans charge, talons posés |
| EX68 | Roue abdominale à genoux, course étendue maîtrisée |
| EX69 | Crunch avec charge tenue contre la poitrine |

## Matériel réel identifié après la passe complémentaire

Simon possède le kit à tubes 8975309 et une seule bande textile courte pour fessiers, modérée bleue ; aucune bande plate longue. Fiches fabricant FR/UK relues, aucune notice exacte de montage obtenue. [kit-mounting-review.md](kit-mounting-review.md) conserve décisions EX19/23/26/38/53 et pièce à obtenir (notice/emballage/QR). Ne pas transformer la compatibilité générique tubes en approbation du modèle réel. Le rapport followup-verification.json conserve les empreintes historiques précédant cet ajout.

## Variantes tubes préparées

[Briefs EX19 et EX26](tube-variants-draft.md) : rowing et curl sous deux pieds avec poignées, recoupement renforcé par [P]rehab/Sweat/Broadly Active, positions/mouvement et critères médias/audio brouillons dans strength.json. Notice du kit et sortie restent ouvertes. Nouveaux totaux : 216 entrées, 208 URL distinctes. Les rapports antérieurs restent historiques.

## Intégration locale des variantes tubes

À la demande explicite de Simon : combinaisons de tubes confirmées par utilisateur, étape de revue humaine sautée, EX19/EX26 tubes et poignées intégrés en versions 2 dans le prototype. Base 48 exercices, sources/médias v1 et snapshots conservés ; aucune des 21 candidates EX49-69 intégrée. Médias générés, audio de préparation par voix système ; huit clips F1/M2 dédiés bloqués par quota Gemini 429. Voir rapports dans reports/tube-integration/ et recette reports/tube-variants-ui.json.

## Lacunes à traiter d’abord

| Fiches | Point à résoudre |
| --- | --- |
| EX50 | Largeur modérée retenue : sources de prise large et études EMG ne valident pas toute la géométrie ni une supériorité de croissance. |
| EX52 | Vol sans clap et amortissement renforcés par Lee Boyce/Mike Dewar ; protocole, cadence et réception réelle encore à revoir. |
| EX53 | Montage exact, maintien et notice de la bande plate réelle. Le kit de tubes Decathlon n’est pas équivalent. |
| EX55 / EX56 | EX55 seconde procédure signée exacte sol obtenue (Fit2Go), arrêt avant contact retenu. EX56 renforcé par deux guides commerciaux ; provenance, haltères réels et sorties encore ouvertes. |
| EX19 / EX23 / EX38 | EX23 bilatéral et EX38 prises extérieures renforcés ; sous-semelle/enroulement et boucle/bande ouverte distincts. Modèle réel et notice restent à fixer ; guide PT² ancré externe exclu pour EX19. |
| EX58 | Le protocole NSCA combine levier et rétroversion. Une étude apparentée partage des auteurs : ne pas compter une troisième équipe indépendante. |
| EX62 | GMB ajoute progression depuis groupé et leviers, même source qu’EX35. Tradition gymnique commune ; sortie, hauteur et respiration à relire. |
| EX65 | Sources du mouvement dynamique avec pieds empilés versus décalés : retenir explicitement l’appui. |
| EX31 / EX34 / EX35 / EX42 / EX44 / EX47 / EX48 | Décisions par domaine enregistrées. Bras EX35 et entrée quatre pattes EX44 renforcés ; sortie/support, sans mur EX42, poignet EX47 et pied libre EX48 restent partiels. |

EX69 est recoupé sur charge contre poitrine et pieds au sol par Gym.com et TrainingPeaks. M&F décrit des pieds ancrés sous banc, donc une variante distincte. Ne pas remplacer par un guide où les bras sont tendus au-dessus de la poitrine. L’installation et la sortie restent à relire avec le matériel réel.

## Ordre conseillé pour poursuivre

1. Lire AGENTS.md, cette note, memory/exercices.md, extension-overview.md et coverage.md. Ouvrir les fiches concernées plutôt que relire d’emblée tout REFERENCE.md.
2. Reprendre les lacunes ci-dessus, en priorité les cinq pectoraux partiels et les montages de bandes. Enregistrer pour chaque source auteur/éditeur, URL, section, variante, assertion confirmée, date et limites d’accès. Ne pas recommencer les descriptions déjà recoupées sans motif.
3. Pour les choix résolus, fixer une variante canonique et consigner la décision, son degré de preuve et les adaptations distinctes. Les niveaux restent éditoriaux, liés à des capacités observables ; pas de nombre universel de répétitions pour qualifier quelqu’un.
4. Compléter la cohérence des objectifs de renforcement et de la progression de résistance. Faire valider dosage et sélection du générateur séparément de la technique. Les mesures EMG ne prouvent ni gains longitudinaux ni classement d’hypertrophie.
5. Préparer la revue technique humaine : version des textes, qualification du relecteur, date, décision et corrections. Une fiche ne devient pas approuvée seulement parce qu’elle possède davantage de sources.
6. Après validation des consignes, produire et examiner les médias, trajectoires continues, alternance, réception et sortie. Les deux positions visibles ne suffisent pas à prouver le mouvement. Conserver les anciennes étapes et versions.
7. Valider scripts puis audio ; attribuer IDs définitifs et intégrer les candidats selon les décisions enregistrées, sans casser les séances historiques. Ne publier aucun hébergement public sans instruction de Simon.

## Fichiers à modifier et vérification

Les lots thématiques Markdown/JSON sont les sources de travail. reference.json, coverage.md et REFERENCE.md sont assemblés par assemble.py : ne pas modifier seulement les fichiers consolidés, sinon la prochaine génération perdrait la correction. Les lots ont des champs détaillés différents ; le wrapper consolidé normalise identité, niveau proposé, sources et portes de revue, puis conserve la fiche d’origine dans details.

Depuis la racine du projet :

```sh
python3 docs/exercise-reference/assemble.py
```

Le script vérifie 48 exercices historiques et 21 candidats attendus, liens, sections et empreinte du catalogue. Si un nouveau lot ou des IDs sont ajoutés, actualiser explicitement ses invariants et les comptes de la documentation. verification.json est le rapport historique avant cette passe ; followup-verification.json conserve le nouveau contrôle du 12 octobre, pas automatiquement régénéré par assemble.py. Si le catalogue a changé dans un autre chantier, examiner le diff et actualiser l’audit avant d’affirmer une nouvelle parité ; ne pas écraser baseline.json silencieusement.

Le workspace contient des modifications d’autres conversations sur interface, médias et audio. Ne pas les réinitialiser, ne pas les inclure dans un commit du référentiel par erreur. Ce chantier n’a ni commit dédié, ni PR, ni déploiement.

## Message à copier dans la nouvelle conversation

> Reprends le chantier du catalogue et de la validation des exercices Tempo. Lis AGENTS.md, docs/exercise-reference/REPRISE.md et memory/exercices.md. Le référentiel contient 69 fiches : 48 historiques et 21 candidats pectoraux/abdominaux intermédiaires et avancés, sans intégration dans l’app. Poursuis le recoupement des variantes exactes, en priorité EX50/52/53/55/56 et les montages EX19/23/38, puis les arbitrages de coverage.md. Il faut suffisamment de sources indépendantes et consultées pour les positions, muscles, conseils, médias et audio, pas seulement deux liens. Conserve les incertitudes, les modifications des autres chantiers et les médias historiques. Ne déclare aucune validation humaine sans revue réelle. Actualise les lots sources, réassemble et enregistre les décisions dans la mémoire.


## État applicatif actualisé : extension textuelle intégrée

À la demande de Simon après constat des seules 48 fiches visibles, EX49-69 sont maintenant intégrées au catalogue local par annexe, total runtime 69. Vingt extensions sont utilisables dans les séances du prototype selon niveau et matériel ; EX53 reste uniquement consultable faute de bande plate longue compatible. Les indications antérieures « aucune candidate intégrée » décrivent l’état historique avant cette passe.

Les nouvelles fiches ont trois phases textuelles, limites/prérequis, muscles et préparation par voix système. Aucun média des extensions ni clip F1/M2 ajouté, aucune validation humaine. Dosage éditorial provisoire distinct des preuves. Catalogue/règles historiques et 420 fichiers historiques contrôlés inchangés. Recette Chrome 390/1440 et 76 tests réussis, build réussi. Sources annotées localPrototypeIntegration puis réassemblées. Voir memory/exercices.md et reports/extensions-integration.json.


## Reprise suivante : illustrations et extension du kit terminées

Les 21 extensions sont illustrées. À la demande de Simon, dix autres fiches kit ont été ajoutées avec leurs propres images : EX17/18/23/37/38 v2 et EX70-74 (cinq mouvements à la porte). Catalogue : 74 IDs, 81 fiches illustrées avec les sept variantes. Référentiel réassemblé sur 74 sections, 228 entrées/217 URLs ; variantes dans l’annexe kit-expansion.json/.md. Explorer conserve les originaux et distingue variante d’accessoire et mouvement proche. EX53 demeure uniquement consultable, sans bande longue réelle.

Sources ouvertes avec limites exactes/famille et échecs d’accès enregistrés. Notice du kit/porte, allongement réel, sortie, dosage, mouvement continu et revue humaine restent ouverts. Pas de clips F1/M2 complémentaires, voix système. 82 tests/build/Chrome 390 et 1440 réussis, 561 fichiers préexistants inchangés. Prompts et rapports dans reports/kit-expansion.


## 13 octobre 2026 - Trois pectoraux supplémentaires avec kit

- Demande de Simon appliquée : EX75 développé vers le haut avec ancrage bas, EX76 développé vers le bas avec ancrage haut, EX77 écarté unilatéral avec ancrage latéral. Nouveaux IDs car géométrie distincte des EX70/71 ; liens de mouvements proches conservés. Catalogue 84 fiches / 77 IDs, 15 fiches kit dont 5 pectoraux.
- Illustrations image_gen intégrées avec deux poses, prompts dans reports/kit-pectorals/prompts.json. EX77 repris pour conserver le même bras entre les poses puis réduire la flexion du coude. Inspection par assistant seulement ; aucune validation humaine. Sources originales dans assets/sources/kit-expansion, dérivés dans public/assets/exercises/v1/EX75-77.
- Sources consultées et limites dans kit-pectorals.json : Bodylastics, Tribe, Jim Stoppani, XBAR, TheraBand. Les sources de famille ne prouvent pas le montage exact du kit Decathlon. Les comptages ne mesurent pas l’indépendance des confirmations. Référentiel réassemblé 77 fiches ; doses et recommandations initiales de tubes restent éditoriales.
- EX77 compté par côté avec changement de côté ; tous trois compatibles avec accroche de porte, sans maintien sous pieds requis. Combinaison initiale proposée par l’app, 31 choix ajustables en séance. Audio nom/préparation par voix système, sans nouveaux clips F1/M2.
- 84 tests et build réussis, recette Chrome isolé 390/1440 : trois fiches illustrées, session EX77 lancée, 31 combinaisons, aucune erreur JS/404. Médias et catalogue préexistants contrôlés par empreintes et conservés. Rapports reports/kit-pectorals/verification.json et ui-verification.json. iPhone physique et revue technique humaine restent ouverts.
