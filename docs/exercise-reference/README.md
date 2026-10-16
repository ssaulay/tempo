# Tempo - référentiel des exercices

Édition du 12 octobre 2026. Document de référence pour préparer les contenus et leur revue. Cette édition couvre le catalogue actuel EX01 à EX48 et 21 fiches candidates supplémentaires EX49 à EX69, centrées sur les pectoraux et les abdominaux aux niveaux intermédiaire et avancé. Les IDs supplémentaires sont provisoires. Le matériel couvert reste adapté au sport à domicile : poids du corps, haltères, bandes, corde, roue et support stable. « Exhaustif » ne signifie pas tous les exercices possibles ni toutes les adaptations médicales. Les 21 nouvelles fiches et les autres extensions proposées n’appartiennent pas encore au catalogue actuel.

## Lecture

- [Note de reprise](REPRISE.md) : état conservé, priorités et message pour une nouvelle conversation.

- [Référentiel complet](REFERENCE.md) : contrat de contenu puis les 69 fiches, sources et limites dans un fichier unique.
- [Extension pectoraux et abdominaux](extension-overview.md) : sélection, objectifs, niveaux et progression des 21 nouvelles fiches.
- [Pectoraux intermédiaires et avancés](extension-pectorals.md) : EX49-56.
- [Abdominaux et stabilité](extension-abs-stability.md) : EX57-62.
- [Abdominaux dynamiques](extension-abs-dynamic.md) : EX63-69.
- [Cardio et coordination](cardio.md) : EX01-05 et EX47-48.
- [Force](strength.md) : EX06-26 et EX37-39.
- [Tronc](core.md) : EX27-36.
- [Mobilité et étirements](mobility.md) : EX40-46.
- [État des preuves](coverage.md) : état réel par exercice et arbitrages encore nécessaires.
- [Données structurées](reference.json) : regroupement des sept lots, sans import dans l’app.
- [Observation ponctuelle de six images](media-spot-check.md) : montage de bande, roue et pas de patineur, sans approbation technique.
- [État initial](baseline.json) : catalogue, règles de prescription et manifeste des médias capturés au début de ce chantier, avec empreintes SHA-256.

## Ce que signifie vérifier

Le besoin de Simon est de vérifier les données contre suffisamment de sources, pas d’accumuler des liens. Le recoupement porte sur une consigne ou une position précise. Deux pages qui répètent une même source ne forment pas deux confirmations indépendantes. Deux pages d’un même organisme constituent un seul éditeur. Un hébergeur de PDF n’en devient pas l’auteur. Des hôpitaux différents du NHS peuvent apporter des descriptions distinctes, mais leur appartenance au même réseau doit rester visible.

Pour une consigne fondamentale, chercher au moins deux descriptions indépendantes de la variante exacte. Si elles divergent, rechercher une troisième référence pertinente et consigner l’arbitrage. Si les descriptions disponibles concernent une variante voisine, expliquer précisément ce qui est transférable et ce qui reste à vérifier. Une page généraliste sur l’activité physique ne valide pas un coude, un ancrage de bande ou une position lombaire.

Les fiches distinguent :

| Statut d’une donnée | Ce qu’on peut affirmer |
| --- | --- |
| Recoupée sur variante exacte | Le repère documenté converge dans plusieurs sources indépendantes. |
| Soutien de famille / transfert | Un principe concorde mais le matériel, les appuis ou la variante diffèrent. |
| Inférence anatomique | Rôle plausible déduit des actions articulaires ; pas une mesure de recrutement sur cet exercice. |
| Choix éditorial | Formulation, amplitude simplifiée, ordre ou instruction audio proposés pour Tempo. |
| Divergence | Les sources ne donnent pas le même repère ; décision explicite nécessaire. |
| Non résolue | La recherche ne suffit pas à confirmer cette donnée. |
| Revue humaine signée | Un professionnel compétent a examiné la version précise du contenu et des médias. Aucune fiche de cette édition n’a ce statut. |

Aucun statut global « bulletproof » : un exercice peut avoir un geste recoupé et une cartographie, un dosage ou une illustration encore non vérifiés. Les statuts documentaires des lots sont descriptifs, pas des autorisations de publication.

## Contrat complet d’une fiche d’exercice

Les éléments ci-dessous forment un schéma cible. Les champs actuels sont conservés dans baseline.json. Les propositions ne changent pas automatiquement catalog/exercises.json.

| Domaine | Données requises | Critère d’acceptation |
| --- | --- | --- |
| Identité | ID stable, version, nom français, synonymes, variante exacte, catégorie, objectif | Pas de confusion entre curl supiné/marteau, marche/genoux hauts, skater step/skater squat. |
| Sélection | Niveau indicatif, capacités préalables, impact, appuis, position, matériel | Un niveau n’atteste pas une aptitude individuelle. Expliquer le prérequis observable. |
| Installation | Sol, espace, support, placement des charges, prise/ancrage de bande, entrée et sortie | Décrire l’installation de la variante représentée, pas seulement « prépare les appuis ». |
| Position initiale | Pieds, genoux, hanches/bassin, colonne/côtes, tête/regard, épaules/omoplates, coudes, poignets/mains, points de contact | Chaque repère pertinent est observable et lié à sa phase. Mentionner si un segment est libre ou non pertinent. |
| Mouvement | Départ, trajectoire, état terminal, retour, maintien éventuel, alternance, sortie | Séparer ce qui bouge et ce qui doit rester contrôlé. Pas d’angle obligatoire sans justification. |
| Amplitude | Limite fonctionnelle, repère d’arrêt, compensation qui demande de raccourcir | Adapter aux proportions et à la capacité de contrôle ; ne pas inventer un idéal géométrique unique. |
| Respiration | Inspirer/expirer à une phase nommée, ou respirer librement pour un maintien/cardio | « Pendant l’effort » ne suffit pas si on ignore quelle phase est visée. Aucun maintien respiratoire forcé dans les scripts débutants. |
| Muscles | Nom anatomique et libellé français, action, rôle qualitatif, côté ; muscles étirés séparés | Une zone « dos » n’est pas un muscle, une articulation n’est pas un muscle. Aucun pourcentage sans étude adaptée. |
| Conseils | Deux ou trois repères prioritaires, sensation attendue, erreur observable et correction | Une correction doit être actionnable. Éviter les listes anxiogènes ou l’idée que douleur signifie réussite. |
| Adaptations | Régression, progression, alternative sans impact, matériel nécessaire à chacune | Une variante est un contenu distinct si prise/appuis/charge changent significativement. |
| Limites | Motifs d’arrêt, difficulté d’équilibre, limites de l’auto-évaluation, contexte demandant un avis adapté | Aucune promesse de compatibilité avec toute blessure ; aucune prescription thérapeutique improvisée. |
| Prescription | Répétitions/durée, total/par côté, convention d’une répétition, séries, repos, cadence, charge | Les règles du générateur demandent une validation séparée ; une source technique ne les approuve pas. |
| Accessibilité | Texte complet autonome, texte court d’effort, alternatives textuelles, image fixe, indication du côté | La compréhension ne doit dépendre ni du son ni de l’animation. |
| Sources | URL, auteur/éditeur, titre, date de consultation, section/page, variante décrite, donnée confirmée, limites | Liens consultés et pertinents ; snippet seul insuffisant pour valider une position. |
| Révisions | Version du texte/média/audio, auteur, changement, date et décision du relecteur | Nouvelle prise, nouvelle amplitude ou nouvel ancrage invalide la revue correspondante. |

## Images, animations et cartographie

L’état initial possède six fichiers centraux par exercice : miniature, trois étapes historiques, démonstration GIF, carte musculaire. Certains exercices ont aussi des vues de dessus. L’interface actuelle privilégie deux positions ; conserver les troisièmes étapes et snapshots historiques.

Les deux positions visibles constituent un résumé pédagogique, pas une preuve de trajectoire correcte. Pour une tenue, montrer installation et tenue ; pour un mouvement bilatéral, départ et fin ; pour une alternance, vérifier aussi l’autre côté. La transition doit respecter l’appui réel, la trajectoire, le freinage et la respiration. Un simple fondu peut suggérer un mouvement qui n’est jamais exécuté.

Chaque média doit porter : exercice et version, variante, phase et côté, angle de vue, points de contact attendus, matériel exact, fichier et empreinte, provenance/licence, texte alternatif, date, relecteur et résultat de revue. L’acceptation porte sur le média lui-même : doigts/poignets cohérents, segments continus, articulations visibles, support stable, trajectoire de bande/corde crédible, échelle et cadrage constants. Une image lisible reste susceptible de contenir une posture incorrecte.

La carte musculaire distingue « agit », « stabilise » et « étiré ». Ne pas colorer une articulation comme un muscle. Ne pas utiliser une intensité de couleur comme pourcentage scientifique. Pour le cardio, « zones sollicitées » convient mieux qu’une prétendue hiérarchie de renforcement ; pour la mobilité, préciser qu’il s’agit du mouvement d’une région ou d’un étirement.

Les critères de chaque fiche sont des briefs de contrôle. Cette édition ne certifie pas les planches existantes. Six images d’EX23, EX34 et EX48 ont fait l’objet d’une observation ponctuelle documentée ; les 48 séries n’ont pas été inspectées image par image.

## Sons et consignes vocales

Les sons de fonctionnement et les phrases techniques ont des responsabilités distinctes :

| Élément | Contenu attendu | Dépendance |
| --- | --- | --- |
| Préparation | Nom de l’exercice, matériel/appuis décisifs, temps de préparation | Nom/version exacts et installation. |
| Départ | Série, durée/répétitions, convention par côté | Règles et phase réellement exécutées. |
| Repère technique court | Une action compréhensible pendant l’effort | Texte technique approuvé, pas une phrase générique sur tous les mouvements. |
| Respiration | Phase explicite ou invitation à respirer régulièrement | Cohérence avec le mouvement et le maintien. |
| Changement de côté | Côté suivant et sortie/installation si nécessaire | État réel de séance. |
| Repos et suite | Durée et exercice/série réellement suivants | Recalcul après pause, saut ou prolongation. |
| Bips/décompte | Début, fin, dernier compte si activé | Facultatifs, désactivables, retour visuel équivalent. |
| Encouragement | Facultatif, bref, sans demander de dépasser douleur ou perte de contrôle | Préférence utilisateur et priorité des annonces. |

Chaque clip doit conserver transcript exact, langue fr-FR, voix, version, durée, format, volume contrôlé, identifiant d’événement et checksum. Vérifier compréhension à l’écoute, absence de coupure, pauses/priorités et fonctionnement local. Les voix F1 et M2 plus grave sont retenues dans le chantier vocal ; les scripts de ce dossier ne constituent pas un nouveau lot de production autorisé techniquement. Leur validation dépend des consignes et variantes finales. Ne pas écraser les phrases de base déjà figées par l’autre chat.

## Revue et intégration

1. Lire la fiche et ses preuves ; résoudre la variante, les divergences, la respiration et les inférences musculaires.
2. Faire relire le texte par un professionnel qualifié pour le mouvement concerné. Enregistrer identité/qualification, date, version, décision et commentaires.
3. Comparer les médias à ces consignes, sur les deux côtés et tous les angles utiles. Une revue textuelle ne valide pas le GIF ni le schéma.
4. Réviser les phrases audio, puis les écouter sur leur texte approuvé. Relire le comptage et le dosage séparément.
5. Intégrer une version nouvelle après ces décisions, avec conservation des versions utilisées par les séances historiques.

Pas d’import automatique, pas de génération de nouveaux médias et pas d’hébergement public dans ce chantier documentaire.

## Couverture fonctionnelle et extensions à instruire

Les 48 exercices couvrent cardio avec/sans saut, squat/fentes, charnière, poussée horizontale/verticale, tirage horizontal, bras, stabilisation/flexion du tronc et quelques mobilisations/étirements. Le nombre 48 ne signifie pas toutes les capacités ou tous les matériels couverts.

| Besoin à compléter | Candidats ou variante distincte | Condition préalable |
| --- | --- | --- |
| Régression de poussée | Pompe au mur explicitement cataloguée | Deux descriptions exactes, support et distance contrôlés. |
| Régression squat | Assis-debout depuis chaise stable | Hauteur, stabilité et usage des mains clairement définis. |
| Équilibre latéral de hanche | Abduction debout avec support, coquillage latéral | Définir appuis et différence étirement/renforcement. |
| Flexion de genou | Curl ischio-jambiers debout sans charge | Appui stable, bassin et amplitude. |
| Tirage vertical | Variante avec ancrage haut | Matériel/ancrage supplémentaire vérifiable ; aucune substitution implicite au kit actuel. |
| Anti-rotation du tronc | Pallof press | Ancrage latéral non disponible par défaut ; notice et installation spécifiques. |
| Mobilité ciblée | Étirement mollet, quadriceps, rotation thoracique à quatre pattes | Variantes exactes et entrée/sortie sourcées. |
| Kit de tubes | Variantes poitrine, rowing, curl, charnière et triceps adaptées au modèle réel | Notice fabricant, connecteurs/ancrages, résistance nominale, démonstrations propres ; aucune conversion automatique des planches de bande plate. |

Ces candidats restent un backlog de recherche, sans nouveaux IDs publiés ni affirmation de validation.

## Recoupement complémentaire

[followup-review.md](followup-review.md) résume la passe sur 18 fiches, les nouvelles sources consultées, les exclusions et les lacunes par domaine. [followup-verification.json](followup-verification.json) porte les nouveaux totaux et le contrôle de conservation ; verification.json conserve le contrôle historique précédent.
