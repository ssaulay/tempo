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


# Audit initial du catalogue et des dépendances

État capturé le 12 octobre 2026 dans [baseline.json](baseline.json). Le workspace contient de nombreux changements préexistants de médias, interface et audio ; ce chantier écrit ses propres documents et conserve les fichiers d’application.

## Couverture existante

| Élément | État observé |
| --- | --- |
| Exercices | 48, IDs EX01-EX48 |
| Catégories | 7 cardio, 34 force, 7 mobilité |
| Étapes textuelles historiques | 144, trois par exercice |
| Médias centraux déclarés | 288 fichiers pour 48 entrées, six par exercice |
| Vue de dessus recommandée | 12 exercices |
| Statut contenu | 48 brouillons |
| Revue technique du catalogue | 48 champs vides |
| Revue visuelle du catalogue | 48 champs vides |
| Contraintes explicites | Vides sur 47 exercices ; absence d’une contrainte ne démontre pas l’absence de limite |
| Variantes liées | Vides sur 29 exercices ; le catalogue de régressions reste à enrichir |

Ces nombres sont ceux du snapshot de départ, pas une assertion sur des fichiers qui peuvent évoluer dans un autre chat.

## Données à reprendre

- Les descriptions d’étapes répètent largement les titres. Les trois repères « prépare les appuis », « amplitude contrôlée », « retour sans à-coup » ne définissent pas chaque articulation.
- La respiration générique « expire pendant l’effort » doit devenir une phase nommée : remontée du squat, poussée du développé, extension des coudes, etc. Pour une tenue et le cardio, garder une respiration continue.
- Les zones corporelles, muscles, articulations et régions rachidiennes sont parfois mélangés. Une zone « jambes » est utile pour la sélection, mais insuffisante pour une carte anatomique. Une mobilité thoracique ne renforce pas nécessairement « thoracic_spine ».
- La liste des muscles principaux/secondaires/stabilisateurs ne porte aucune justification scientifique ou niveau de preuve. Son remplissage ne vaut pas validation. Les fiches distinguent rôle plausible et information explicitement documentée.
- L’installation générique mentionne un tapis même pour un exercice debout. Un tapis souple n’est pas forcément un appui adapté pour une charge, une corde ou une bande sous les pieds.
- Les variantes de bande plate et de tubes ne sont pas interchangeables par simple changement de nom. Les poignées, connecteurs, placement sous pied et contact derrière le dos doivent suivre la notice du modèle réel.
- Les GIF à deux positions et les fiches à deux étapes sont des résumés. Les exercices alternés et les tenues exigent une vérification du cycle et de la sortie qui ne se lit pas dans deux images statiques.
- Les images et cartes possèdent des checksums et des statuts techniques de génération. Ces données attestent l’identité de fichiers, jamais l’exactitude des positions.
- Le lecteur existant annonce les phases avec synthèse vocale navigateur et bip de secours. Le chantier préenregistré est distinct. Un nouveau texte de fiche devra rester cohérent avec transcript audio, côté annoncé et snapshot de séance.
- Les règles de prescription existent séparément et sont conservées dans le snapshot. Cette recherche technique ne valide pas leurs séries, charges, temps, fractions de capacité ou paramètres de progression.

## Limites de cet audit

Lecture des données et du code consommateur, comparaison documentaire dans les 48 fiches. Pas de contrôle de chaque fichier image, pas de mesure de mouvement, pas d’écoute de chaque phrase, pas de recette physique ni revue professionnelle. Les fiches fournissent les repères nécessaires pour effectuer ces revues sur une version figée.


# État des preuves et décisions restantes

Édition du 12 octobre 2026. Le référentiel comprend 77 mouvements : 48 historiques, 21 extensions pectoraux/abdominaux et 8 mouvements à la porte. Les illustrations sont intégrées au prototype, sans validation humaine. Sept variantes avec tubes existent dans l’app, dont cinq documentées dans kit-expansion.md. Chaque fiche cite au moins deux documents, mais ce seuil ne signifie pas que toutes les données sont recoupées sur la variante exacte.

Les registres contiennent 233 entrées de sources, dont 220 URL distinctes. Ces nombres incluent les confirmations de geste, les variantes voisines et les sources de contexte. Aucun exercice ne possède encore toutes les approbations humaines et médias.

Les libellés ci-dessous explicitent le niveau documentaire ; leurs valeurs originales restent dans le JSON. Lire les limites et arbitrages de la fiche avant de réutiliser une consigne.

| ID | Exercice | Documents cités | État documentaire |
| --- | --- | ---: | --- |
| [EX01](REFERENCE.md#ex01) | Marche active sur place | 3 | Geste de base recoupé |
| [EX02](REFERENCE.md#ex02) | Step jacks sans saut | 3 | Geste de base recoupé |
| [EX03](REFERENCE.md#ex03) | Jumping jacks | 2 | Geste de base recoupé |
| [EX04](REFERENCE.md#ex04) | Corde à sauter, saut simple | 3 | Geste recoupé ; divergence sur le matériel |
| [EX05](REFERENCE.md#ex05) | Montées de genoux sans saut | 3 | Geste de base recoupé |
| [EX06](REFERENCE.md#ex06) | Squat au poids du corps | 3 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX07](REFERENCE.md#ex07) | Fentes arrière alternées | 5 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX08](REFERENCE.md#ex08) | Fente statique | 3 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX09](REFERENCE.md#ex09) | Pont fessier | 2 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX10](REFERENCE.md#ex10) | Élévations des mollets | 4 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX11](REFERENCE.md#ex11) | Pompes inclinées | 2 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX12](REFERENCE.md#ex12) | Pompes sur les genoux | 2 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX13](REFERENCE.md#ex13) | Pompes classiques | 2 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX14](REFERENCE.md#ex14) | Pompes mains rapprochées | 8 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX15](REFERENCE.md#ex15) | Développé poitrine avec bande derrière le dos | 4 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX16](REFERENCE.md#ex16) | Développé haltères au sol | 3 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX17](REFERENCE.md#ex17) | Développé épaules avec haltères | 4 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX18](REFERENCE.md#ex18) | Élévations latérales légères | 3 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX19](REFERENCE.md#ex19) | Rowing bande sous les pieds | 8 | Montage ou variante encore partiellement recoupés |
| [EX20](REFERENCE.md#ex20) | Rowing haltère unilatéral sans banc | 3 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX21](REFERENCE.md#ex21) | Écartement de bande devant soi | 5 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX22](REFERENCE.md#ex22) | Rétraction scapulaire en W au sol | 2 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX23](REFERENCE.md#ex23) | Extension triceps avec bande sous un pied | 7 | Montage ou variante encore partiellement recoupés |
| [EX24](REFERENCE.md#ex24) | Extension triceps haltère au-dessus de la tête | 7 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX25](REFERENCE.md#ex25) | Curl haltères | 2 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX26](REFERENCE.md#ex26) | Curl avec bande sous les pieds | 7 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX27](REFERENCE.md#ex27) | Planche sur avant-bras | 3 | corroboration documentaire avec décisions à revoir |
| [EX28](REFERENCE.md#ex28) | Planche latérale genoux fléchis | 3 | corroboration documentaire avec décisions à revoir |
| [EX29](REFERENCE.md#ex29) | Dead bug | 2 | corroboration documentaire avec décisions à revoir |
| [EX30](REFERENCE.md#ex30) | Bird dog | 3 | corroboration documentaire avec décisions à revoir |
| [EX31](REFERENCE.md#ex31) | Crunch inversé | 5 | corroboré sur principe; décision amplitude/retour à arbitrer |
| [EX32](REFERENCE.md#ex32) | Crunch court | 2 | corroboration documentaire avec décisions à revoir |
| [EX33](REFERENCE.md#ex33) | Mountain climbers lents | 4 | trajet poitrine et adaptation lente corroborés; respiration à revoir |
| [EX34](REFERENCE.md#ex34) | Roue abdominale à genoux, amplitude courte | 4 | variante courte corroborée; respiration et média à revoir |
| [EX35](REFERENCE.md#ex35) | Hollow hold groupé | 4 | groupé bras vers talons recoupé; entrée/sortie et média à revoir |
| [EX36](REFERENCE.md#ex36) | Touchers de talons alternés | 3 | mécanique exacte corroborée; termes nuque/colonne à arbitrer |
| [EX37](REFERENCE.md#ex37) | Squat goblet léger | 3 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX38](REFERENCE.md#ex38) | Charnière de hanches avec bande sous les pieds | 7 | Montage ou variante encore partiellement recoupés |
| [EX39](REFERENCE.md#ex39) | Fente latérale alternée | 6 | Mouvement de base recoupé ; limites par donnée conservées |
| [EX40](REFERENCE.md#ex40) | Rotations thoraciques debout | 4 | Variante de base recoupée |
| [EX41](REFERENCE.md#ex41) | Cercles d’épaules | 3 | Mouvement de base recoupé par trois éditeurs |
| [EX42](REFERENCE.md#ex42) | Mobilisation de cheville en fente | 5 | Variante au mur recoupée ; sans mur adaptée |
| [EX43](REFERENCE.md#ex43) | Ouverture de poitrine debout | 2 | Variante de base recoupée |
| [EX44](REFERENCE.md#ex44) | Posture de repos à genoux | 4 | Entrée quatre pattes recoupée ; support et sortie à revoir |
| [EX45](REFERENCE.md#ex45) | Étirement fléchisseurs de hanche à genoux | 2 | Variante de base recoupée |
| [EX46](REFERENCE.md#ex46) | Étirement ischio-jambiers allongé | 4 | Variante de base recoupée |
| [EX47](REFERENCE.md#ex47) | Boxe dans le vide sans impact | 5 | Alternance debout recoupée ; poignet et rotation partiels |
| [EX48](REFERENCE.md#ex48) | Pas de patineur sans saut | 7 | Transfert sans saut recoupé ; géométrie Tempo partielle |
| [EX49](REFERENCE.md#ex49) | Pompes déclinées sur support fixe | 2 | Candidat : Mouvement de base recoupé ; limites par donnée conservées |
| [EX50](REFERENCE.md#ex50) | Pompes avec prise modérément large | 4 | Candidat : Montage ou variante encore partiellement recoupés |
| [EX51](REFERENCE.md#ex51) | Pompes archer avec deux mains au sol | 2 | Candidat : Mouvement de base recoupé ; limites par donnée conservées |
| [EX52](REFERENCE.md#ex52) | Pompes pliométriques sans claquement | 4 | Candidat : Vol sans claquement et amortissement recoupés ; détails du protocole à revoir |
| [EX53](REFERENCE.md#ex53) | Pompes résistées avec bande plate au haut du dos | 4 | Candidat : Montage ou variante encore partiellement recoupés |
| [EX54](REFERENCE.md#ex54) | Développé haltère unilatéral au sol | 4 | Candidat : Mouvement de base recoupé ; limites par donnée conservées |
| [EX55](REFERENCE.md#ex55) | Écartés haltères au sol | 4 | Candidat : Mouvement de base recoupé ; limites par donnée conservées |
| [EX56](REFERENCE.md#ex56) | Développé haltères serrés au sol | 4 | Candidat : Montage ou variante encore partiellement recoupés |
| [EX57](REFERENCE.md#ex57) | Planche latérale jambes tendues | 2 | Candidat : Descriptions croisées ; variante précisée, revue humaine en attente |
| [EX58](REFERENCE.md#ex58) | Planche sur avant-bras à levier long | 4 | Candidat : Descriptions croisées ; variante précisée, revue humaine en attente |
| [EX59](REFERENCE.md#ex59) | Planche sur avant-bras avec levée alternée d’une jambe | 3 | Candidat : Descriptions croisées ; variante précisée, revue humaine en attente |
| [EX60](REFERENCE.md#ex60) | Planche haute avec touchers d’épaules alternés | 3 | Candidat : Descriptions croisées ; variante précisée, revue humaine en attente |
| [EX61](REFERENCE.md#ex61) | Planche montée-descente sur avant-bras et mains | 3 | Candidat : Descriptions croisées ; variante précisée, revue humaine en attente |
| [EX62](REFERENCE.md#ex62) | Hollow hold jambes tendues et bras au-dessus de la tête | 3 | Candidat : Descriptions croisées ; variante précisée, revue humaine en attente |
| [EX63](REFERENCE.md#ex63) | Crunch bicyclette alterné | 3 | Candidat : Variante de base recoupée ; détails éditoriaux à relire |
| [EX64](REFERENCE.md#ex64) | Relevé de jambes allongé, deux jambes tendues | 3 | Candidat : Variante de base recoupée ; détails éditoriaux à relire |
| [EX65](REFERENCE.md#ex65) | Planche latérale avec relevés de bassin, jambes tendues | 3 | Candidat : Dynamique recoupée ; seconde description pieds empilés manquante |
| [EX66](REFERENCE.md#ex66) | V-up, montée simultanée du tronc et des jambes | 2 | Candidat : Variante de base recoupée ; détails éditoriaux à relire |
| [EX67](REFERENCE.md#ex67) | Rotation russe sans charge, talons posés | 3 | Candidat : Variante de base recoupée ; détails éditoriaux à relire |
| [EX68](REFERENCE.md#ex68) | Roue abdominale à genoux, course étendue maîtrisée | 3 | Candidat : Variante de base recoupée ; détails éditoriaux à relire |
| [EX69](REFERENCE.md#ex69) | Crunch avec charge tenue contre la poitrine | 3 | Candidat : Variante de base recoupée ; détails éditoriaux à relire |
| [EX70](REFERENCE.md#ex70) | Développé poitrine debout avec kit et ancrage de porte | 5 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |
| [EX71](REFERENCE.md#ex71) | Écartés poitrine debout avec kit et ancrage de porte | 5 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |
| [EX72](REFERENCE.md#ex72) | Rowing debout avec kit et ancrage de porte | 4 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |
| [EX73](REFERENCE.md#ex73) | Extension triceps vers le bas avec kit et ancrage haut | 4 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |
| [EX74](REFERENCE.md#ex74) | Écartés inversés debout avec kit et ancrage de porte | 3 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |
| [EX75](REFERENCE.md#ex75) | Développé pectoral vers le haut avec kit et ancrage bas | 4 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |
| [EX76](REFERENCE.md#ex76) | Développé pectoral vers le bas avec kit et ancrage haut | 3 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |
| [EX77](REFERENCE.md#ex77) | Écarté pectoral unilatéral avec kit et ancrage latéral | 4 | Candidat : Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine |

## Limites communes

- Les nombres de sources ne prouvent pas l’indépendance ; plusieurs documents ACE, NHS ou NSCA ne deviennent pas plusieurs confirmations indépendantes.
- Les critères visuels et scripts audio restent des propositions. Aucune inspection des 48 séries de médias n’a été effectuée dans cette recherche.
- Les rôles anatomiques inférés, prescriptions et adaptations ne reçoivent pas automatiquement le statut du mouvement de base.
- Pour chaque arbitrage, fixer la variante exacte, enregistrer la décision et la faire relire sur la version finale. Une formulation non résolue ne doit pas devenir un prompt d’image ou un clip vocal définitif.

## Arbitrages à traiter en priorité

- **Bandes et tubes** : montage réellement utilisé, appuis sous pied, position derrière le dos, longueur utile, poignée et notice fabricant. Les transferts à partir de câble, bande plate ou autre modèle doivent rester identifiés.
- **Développé épaules / triceps au-dessus de la tête** : ne pas immobiliser les omoplates dans une position basse pendant toute l’élévation ; sources et arbitrages détaillés dans les fiches.
- **EX20** : l’appui sur la cuisse est désormais recoupé par une description originale de physiothérapeutes ; contrôler encore trajet, symétrie et média réel.
- **EX19/23/38/53** : EX23 bilatéral renforcé, mais sous-semelle/enroulement distincts ; EX38 boucle/prises extérieures renforcées. Notice, longueur et compatibilité du modèle réel restent partielles.
- **EX50/52/55/56** : EX50 largeur modérée éditoriale ; EX52 amortissement recoupé, protocole à revoir ; EX55 arrêt avant contact sol retenu ; EX56 provenance des guides, contact matériel et sortie encore partiels.
- **EX31** : état de retour du crunch inversé, sans copier une descente des pieds différente de la variante choisie.
- **EX34** : courte course et contrôle au retour de roue ; respiration et images non approuvées.
- **EX35/62** : bras vers talons et transition vers longs leviers renforcés par GMB ; maintien distinct du balancement, ordre de sortie et respiration encore éditoriaux.
- **EX42/44** : sans mur EX42 reste adaptation ; entrée quatre pattes EX44 désormais recoupée, support frontal et sortie à relire.
- **EX47** : cycle simple alterné debout désormais décrit par NSW ; poignet, rotation, pivot et respiration restent à préciser. Ne pas importer les pivots de puissance de la boxe sportive.
- **EX48** : pied libre, croisement éventuel et inclinaison. Les sources de famille et routines ne suffisent pas pour tous les repères articulaires.

## Matériel réel

Simon possède le kit à tubes 8975309 et une bande textile courte fessiers, aucune bande plate longue. Notice exacte du kit non obtenue ; montages EX19/23/26 non établis pour ce modèle et bande longue EX38/53 absente. Voir [kit-mounting-review.md](kit-mounting-review.md).

## Décisions de la passe complémentaire

18 fiches possèdent une décision datée par domaine dans leurs lots sources. Les arbitrages sans nouvelle preuve restent explicitement éditoriaux. Voir [followup-review.md](followup-review.md) pour résultats, exclusions et critères de clôture.

- **EX19** : Conserver montage sous deux pieds déjà recoupé, sans l’assimiler au guide PT² ancré devant. Nouvelle recherche ne résout pas la compatibilité bande plate/tube du matériel réel.
- **EX23** : Retenir bilatéral derrière tête comme variante documentaire. Sous-semelle Zing et enroulement Oxygen restent deux montages distincts: ne pas inventer un nœud ou une fixation. Compatibilité kit réel toujours non résolue.
- **EX31** : Conserver retour genoux au-dessus des hanches, pieds suspendus, tête/épaules posées; ne pas importer talons au sol de PureGym DK. Amplitude courte reste choix Tempo.
- **EX34** : Conserver courte course contrôlable, aller et retour à examiner ensemble; aucune cible buste parallèle. Respiration proposée reste non approuvée.
- **EX35** : Bras dirigés vers talons/cuisses désormais décrits par GMB; conserver maintien immobile. Tibias horizontaux et sortie progressive restent propositions.
- **EX38** : Conserver charnière bilatérale, mains extérieures et bras longs. Distinguer boucle continue aerobis et bande ouverte; ne pas substituer prises intérieures du montage principal. Souffle au redressement renforcé documentairement.
- **EX42** : Conserver genou avant mobile et talon avant posé; sans mur reste adaptation d’équilibre, pas seconde variante exacte validée. Aucun toe-in AAOS imposé.
- **EX44** : Entrée quatre pattes recoupée; conserver recul confortable sans obligation fesses-talons. Front soutenu et sortie vers quatre pattes restent choix à revoir.
- **EX47** : Conserver alternance simple et retour garde. Rotation/pivot puissant exclus du brief de base; poignet confortable à fixer humainement, sans consigne chiffrée ajoutée.
- **EX48** : Conserver provisoirement pas latéral sans croisement et nom historique; variante diagonale pointe arrière séparée. Nom, texte et images à arbitrer ensemble avant remplacement.
- **EX50** : Conserver largeur relative modérée comme choix éditorial non chiffré; ne pas adopter 150% comme réglage universel, ni annoncer une supériorité pectorale. Candidate reste partielle.
- **EX52** : Retenir sans claquement, mains prêtes à reprendre appui et amortissement actif; conserver reprise stable avant répétition comme choix Tempo. Ne pas importer contact corps/sol BarBend ni réception rigide NSCA.
- **EX53** : Conserver bande plate longue sans poignées, haut du dos et maintien sous paumes comme montage documentaire conditionnel. La notice Thera-Band précise les contrôles mais ne permet pas de choisir ni approuver le produit réel.
- **EX55** : Fixer pour le brief documentaire un arrêt avant contact, coudes légèrement fléchis avec angle conservé. Le noyau sol est recoupé; revue humaine, sortie et charge réelle restent ouvertes.
- **EX56** : Conserver deux haltères en contact, prise neutre, descente limitée par bras supérieurs au sol sans rebond. Le noyau est renforcé, mais statut partiel conservé pour provenance des guides et compatibilité matérielle.
- **EX58** : Conserver levier long avec bassin contrôlé; ne pas compter étude apparentée et article NSCA comme équipes indépendantes. Ne pas attribuer tout effet au seul levier.
- **EX62** : GMB ajoute une rédaction originale hors des deux pages de tradition CrossFit déjà conservées. Entrer depuis groupé, allonger jambes puis bras; hauteur adaptée au contrôle. Ordre précis de sortie reste éditorial.
- **EX65** : Fixer base pieds empilés, bassin suspendu sans charge; pieds décalés deviennent adaptation explicite. Deuxième procédure exacte empilée toujours manquante.


# Extension : pectoraux et abdominaux au-delà du débutant

21 fiches candidates complètent les 48 exercices existants : 8 pectoraux et 13 abdominaux. Les identifiants EX49-69 sont provisoires et réservés dans ce dossier documentaire. Les niveaux proposés sont des classifications éditoriales fondées sur les prérequis et les contraintes décrits dans chaque fiche, pas des catégories universelles validées scientifiquement. Les textes, briefs d’images, animations et scripts audio demandent encore leur revue technique humaine ; aucun média de ces candidats n’est produit ou approuvé ici.

## Pectoraux : sélectionner une progression utile

| ID | Variante candidate | Rôle dans la progression | Point décisif |
| --- | --- | --- | --- |
| [EX49](REFERENCE.md#ex49) | Pompe déclinée, pieds sur support | Augmenter la difficulté de poussée | Support stable ; hauteur compatible avec le contrôle. |
| [EX50](REFERENCE.md#ex50) | Pompe prise modérément large | Ajouter une variante de poussée | Largeur définie dans la fiche ; aucune prise extrême imposée. |
| [EX51](REFERENCE.md#ex51) | Pompe archer | Poussée asymétrique exigeante | Deux mains au sol, progression du transfert latéral. |
| [EX52](REFERENCE.md#ex52) | Pompe pliométrique sans claquement | Puissance et réception | Quitter le sol et revenir en contrôle ; objectif distinct du volume musculaire. |
| [EX53](REFERENCE.md#ex53) | Pompe résistée par bande plate | Ajouter une résistance | Bande et maintien exacts ; aucune substitution automatique avec le kit de tubes. |
| [EX54](REFERENCE.md#ex54) | Développé haltère unilatéral au sol | Poussée avec charge et contrôle asymétrique | Installation, prise et sortie de charge ; bassin contrôlé. |
| [EX55](REFERENCE.md#ex55) | Écartés haltères au sol | Ajouter un mouvement d’adduction avec charge | Amplitude limitée par le sol, coudes souples et charge maîtrisée. |
| [EX56](REFERENCE.md#ex56) | Développé haltères serrés au sol | Variante de poussée avec haltères rapprochés | Contact et pression sans collision ; pas de promesse d’isoler des « pectoraux internes ». |

Ces variantes ajoutent des options de travail. Une pompe plus complexe n’est pas automatiquement meilleure pour prendre du muscle qu’une poussée plus simple dont la résistance peut progresser. Le dossier privilégie une variante réalisable avec une trajectoire reproductible, une difficulté ajustable et une sortie maîtrisée. Cette priorité est un choix éditorial de programmation, à relire avant intégration.

## Abdominaux : diversifier la fonction entraînée

| ID | Variante candidate | Fonction dominante proposée | Point décisif |
| --- | --- | --- | --- |
| [EX57](REFERENCE.md#ex57) | Planche latérale jambes tendues | Résister à l’inclinaison latérale | Épaule d’appui et alignement contrôlés. |
| [EX58](REFERENCE.md#ex58) | Planche avant-bras à levier long | Résister à l’extension du tronc | Avancer les coudes graduellement, continuer à respirer. |
| [EX59](REFERENCE.md#ex59) | Planche avant-bras, une jambe levée | Stabilité avec appui réduit | Éviter la rotation et le basculement du bassin. |
| [EX60](REFERENCE.md#ex60) | Planche haute, touchers d’épaules | Stabilité pendant transfert d’appui | Poser la main et contrôler chaque côté. |
| [EX61](REFERENCE.md#ex61) | Planche montée-descente | Stabilité pendant changement d’appuis | Alterner le bras conducteur, éviter l’affaissement. |
| [EX62](REFERENCE.md#ex62) | Hollow hold jambes tendues | Tenue du tronc avec levier accru | Raccourcir le levier dès que le contrôle se perd. |
| [EX63](REFERENCE.md#ex63) | Crunch bicyclette | Flexion et rotation alternées | Rotation maîtrisée, aucune traction sur la nuque. |
| [EX64](REFERENCE.md#ex64) | Relevé de jambes tendues allongé | Flexion de hanche et contrôle du tronc | Les fléchisseurs de hanche participent ; ne pas présenter comme isolation abdominale. |
| [EX65](REFERENCE.md#ex65) | Planche latérale, relevés du bassin | Travail latéral dynamique | Distinguer montée-descente de la tenue EX57. |
| [EX66](REFERENCE.md#ex66) | V-up | Flexion coordonnée avec longs leviers | Synchronisation et retour contrôlés, variante avancée. |
| [EX67](REFERENCE.md#ex67) | Rotation russe, pieds posés | Rotation du tronc contrôlée | Pieds au sol, sans charge au départ ; rotation définie dans la fiche. |
| [EX68](REFERENCE.md#ex68) | Roue à genoux, course étendue maîtrisée | Résister à l’extension sur course accrue | Progression d’EX34, sans distance universelle ni extension forcée. |
| [EX69](REFERENCE.md#ex69) | Crunch avec charge contre la poitrine | Flexion du tronc avec résistance ajustable | Maintien de la charge et retour maîtrisés ; pas de charge derrière la tête. |

Les fonctions ci-dessus résument le mouvement. Elles ne constituent ni des mesures de recrutement ni un classement d’efficacité pour l’hypertrophie. Les détails anatomiques et leur degré de preuve figurent dans chaque fiche. Une variante de gainage exigeante développe un défi de contrôle ; sa présence seule ne garantit pas davantage de volume musculaire.

## Passer du débutant à un travail plus exigeant

Avant de changer de variante, vérifier les prérequis observables de la fiche : appuis stables, mouvement reproductible, respiration possible, amplitude maîtrisée et sortie réalisable. Aucune durée de planche ou nombre de pompes arbitraire ne suffit à certifier le niveau individuel.

La progression peut porter sur la résistance, l’amplitude contrôlée, le levier ou le volume. Pour que le suivi reste lisible, Tempo peut ne changer qu’un paramètre à la fois : c’est une proposition produit, pas une règle médicale. Conserver le nombre de répétitions réellement maîtrisées, la charge ou la bande exacte, le côté, l’amplitude choisie et le motif d’arrêt. Les plages et repères de dosage des fiches sont des propositions à valider séparément des positions.

La synthèse ACSM 2026 confirme que poids du corps, bandes et entraînement à domicile peuvent soutenir force et développement musculaire ; elle distingue les objectifs de force, hypertrophie et puissance et recommande d’individualiser charge et volume. Cela soutient le choix d’offrir des progressions à domicile, sans valider chaque variante de ce dossier. [ACSM, recommandations 2026](https://acsm.org/resistance-training-guidelines-update-2026/), consulté le 12 octobre 2026.

Mayo Clinic recommande d’augmenter progressivement la charge en conservant la technique, et de réduire charge ou répétitions lorsque celle-ci se dégrade. Cette recommandation générale soutient le critère de progression contrôlée ; elle ne fixe pas les angles ou les appuis de chaque exercice. [Mayo Clinic, technique de musculation](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/weight-training/art-20045842?p=1&pg=1), publié le 21 janvier 2026, consulté le 12 octobre 2026.

## Conditions de passage dans l’app

- Résoudre les données marquées partielles et les divergences sur la variante exacte.
- Faire relire positions, amplitude, muscles, prérequis et dosage par un professionnel compétent, avec version et décision enregistrées.
- Produire puis examiner les images et le mouvement continu, y compris alternance, réception et sortie quand pertinentes.
- Valider les scripts audio, puis l’écoute et la synchronisation sur les médias approuvés.
- Attribuer les IDs définitifs et intégrer sans modifier les exercices et snapshots historiques.

L’extension élargit réellement le contenu documentaire au-delà des 48 fiches. Elle n’ajoute pas encore ces exercices au générateur de séances.

## Limites documentaires prioritaires de l’extension

Cinq fiches pectoraux restent partiellement recoupées : EX50 (largeur modérée retenue), EX52 (réception pliométrique), EX53 (bande plate et notice du modèle réel), EX55 (écartés au sol) et EX56 (développé serré au sol). Les liens supplémentaires de famille ou d’étude musculaire ne résolvent pas les positions exactes manquantes. Les autres fiches gardent aussi des choix éditoriaux et des points à relire.

Pour EX58, le guide NSCA combine levier long et rétroversion du bassin ; l’étude apparentée partage des auteurs, donc ne représente pas une troisième équipe indépendante. Pour EX62, les descriptions CrossFit et BarBend sont distinctes mais appartiennent à une tradition pédagogique commune. Pour EX65, les sources du geste dynamique diffèrent sur les pieds empilés ou décalés ; retenir explicitement l’appui avant de produire les médias.


# Référentiel cardio et coordination

Version documentaire du 12 octobre 2026. Aucune revue technique humaine ni validation des médias. Scripts audio et critères visuels proposés.

## Sources consultées

- **C01** [How to warm up before exercising](https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/) - NHS. Marche, lever de genoux, bras opposé, posture droite. Pas de cartographie musculaire ni validation médicale individuelle. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C02** [Low intensity aerobic exercises](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/aerobic-exercises) - British Heart Foundation. Marche, genoux alternés, side taps, star jumps et alternative sans saut. Les side taps ne prouvent pas tous les détails du step jack. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C03** [Jumping Jacks](https://www.nasm.org/resource-center/exercise-library/jumping-jacks) - NASM. Cycle ouverture/fermeture, coordination, réception fléchie, muscles qualitatifs et modification step-out. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C04** [Step Jacks](https://www.puregym.com/exercises/cardio/jumping-jack/step-jacks/) - PureGym. Variante exacte sans saut avec montée des deux bras, alternance, cartographie qualitative. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C05** [Jumping Rope: Not Just for Kids Anymore](https://acewebcontent.azureedge.net/assets/education-resources/lifestyle/fitfacts/pdfs/fitfacts/itemid_36.pdf) - American Council on Exercise. Page 1, technique corde, poignets et faible hauteur. Document ancien ©2001, désaccord avec Crossrope sur corde lestée. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C06** [How to Jump Rope: The Complete Beginner’s Guide](https://www.crossrope.com/blogs/blog/how-to-jump-rope/) - Crossrope. Basic jump : rotation poignets, petits sauts, réception avant-pied. Fabricant commercial, ne pas reprendre ses promesses. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C07** [Balance exercises](https://www.nhs.uk/live-well/exercise/balance-exercises/) - NHS. Sideways walking : pas latéral contrôlé, suivi de l’autre pied. Soutien de famille pour EX48, pas démonstration exacte. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C08** [Grassroots Task Force Training Manual v.01 (2014)](https://d36m266ykvepgv.cloudfront.net/uploads/media/lYivrDbNV6/o/usab-gtf-trainingmanual-v-01-1.pdf) - USA Boxing. Pages imprimées 34 et 39-40 : garde et directs ; p.66 shadow boxing. Cadre sportif, adaptation cardio Tempo distincte. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C09** [Shadow boxing drills week eight](https://www.englandboxing.org/news_articles/england-boxing-shadow-boxing-drills-week-eight/) - England Boxing. Directs dans le vide et espace non glissant. Programme de boxeurs, ne pas transférer les durées compétition. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C10** [Adaptive Exercises - Project CHEER](https://www.heart.org/en/-/media/Healthy-Living-Files/Healthy-for-Life/Kentucky-Inclusive-Health-Collaborative-PDFs/Adaptive-Exercises.pdf?sc_lang=en) - University of Kentucky / American Heart Association. Air Punches p.1 et Knee Raises p.2 : gestes segmentaires ; démonstration assise pour les punches, transfert debout partiel. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C11** [How to Do Skaters: Low-Impact & Higher-Impact Cardio Options](https://www.healthgirl.ca/blog/how-to-do-skaters-low-impact-cardio) - HealthGirl. Autrice du cours : pas latéraux sans saut et modulation de vitesse/amplitude. Texte lu, vidéo non visionnée ; détails articulaires absents. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C12** [Low Impact Cardio Workout - Quiet Cardio Workout at Home](https://www.fitnessblender.com/videos/low-impact-cardio-workout-quiet-cardio-workout-at-home) - Fitness Blender. Texte consulté ; séquence vidéo partiellement examinée à 10:51 et 10:56 après reprise. Mouvement sur une jambe avec jambe libre mobile, exercices par côté : différent du transfert alterné Tempo. Ne valide pas sa géométrie. Consultation : 2026-10-12. Accès : Texte via web ; deux observations de la vidéo originale dans navigateur, sans examen continu du cycle..
- **C13** [Anatomy and Physiology 2e, 11.6](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs) - OpenStax / Rice University. Actions des muscles hanche, genou, cheville. Sert aux inférences anatomiques, ne mesure pas leur recrutement dans Tempo. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C14** [Anatomy and Physiology, 11.1](https://openstax.org/books/anatomy-and-physiology/pages/11-1-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems) - OpenStax / Rice University. Agonistes/antagonistes et freinage des coups dans le vide. Ne quantifie pas les rôles par exercice. Consultation : 2026-10-12. Accès : texte intégral consulté via web.
- **C15** [Power Is the New Strength, section Skater Step or Skater Hop](https://www.practicehuman.com/prevent-falls-with-osteoporosis-and-osteopenia/) - Practice Human - Caitlin Casella PT DPT CSCS. Physiothérapeute autrice : pas latéraux alternés sans saut ; contexte puissance/ostéoporose, ni dosage ni promesses cliniques transférés. Pas de détails suffisants sur pied libre. Consultation : 2026-10-12. Accès : texte ouvert et lu.
- **C16** [Knee Rehab and Strengthening Program, Exercise 6 Skater Step or Skater Hop](https://greenphysique.com/injury-recovery-prevention/knee-rehab-strengthening-program) - Green Physique - Tim Shevlin. Coach de golf TPI déclaré, ne pas le présenter comme physiothérapeute. Pas diagonal, poids jambe receveuse, genou dans axe, pointe arrière possible. Variante différente du pied libre à côté proposé initialement. Indépendance de chaque principe et validation médicale non établies. Consultation : 2026-10-12. Accès : page ouverte navigateur ; section complète lue, accès web direct en échec.
- **C17** [Low Impact Cardio Workout - démonstration vidéo originale](https://www.youtube.com/watch?v=FXthVpqzacw) - Fitness Blender. Même éditeur que C12 : aucun recoupement indépendant supplémentaire. Source confirme plutôt différence entre single-leg ice skater par côté et transfert alterné. Export transcript indisponible. Consultation : 2026-10-12. Accès : observations de deux instants à 10:51 et 10:56, pas examen complet.
- **C18** [Healthy Ageing - Exercise Manual and Logbook, Circuit 2 Exercise 5 Shadow boxing](https://cdn.activeandhealthy.nsw.gov.au/assets/Healthy-ageing-resources/Old-resources-2024/Exercise-Manual.pdf) - NSW Ministry of Health - Centre for Population Health. Page imprimée32 (index33), version septembre2023. Décrit exactement debout, un pied devant, genoux souples, poings sous menton, extension/retour puis autre bras. Cadre vieillissement sain, aucun dosage ni bénéfice thérapeutique transféré. Consultation : 2026-10-12. Accès : Texte PDF ouvert et lu ; capture de la page en échec, illustration non inspectée.

<a id="ex01"></a>

## EX01 - Marche active sur place

**État : Geste de base recoupé**. Revue humaine : en attente.

**Position initiale.** Debout, pieds à une largeur confortable, genoux disponibles. Buste redressé ; bras libres, coudes fléchis sans serrer les poings. Ne pas se mettre au garde-à-vous. [C01,C02]

**Mouvement et sortie.** Lever puis reposer un pied, alterner ; accompagner de mouvements des bras. [C01,C02] Coordination bras opposé et genou levé retenue pour Tempo, à contrôler visuellement. Sortie : ralentir puis poser les deux pieds.

**Respiration.** Respiration continue, sans synchroniser obligatoirement chaque pas. [C02]

**Muscles.** Sollicitation générale des jambes. Fléchisseurs de hanche pour lever le genou ; quadriceps et muscles de cheville pour appuis, inférence anatomique [C13], sans classement EMG. « Jambes » est une zone, pas un muscle.

**Installation et matériel.** Sol dégagé et non glissant, espace pour les bras. Corde uniquement pour EX04.

**Adaptations.** Réduire vitesse et amplitude ; EX01 peut remplacer les mouvements avec saut.

**Arrêt.** Arrêter en cas de douleur, malaise ou perte répétée du contrôle. Un symptôme persistant nécessite un avis adapté.

**Audit du catalogue.** Titres actuels cohérents. Ajouter coordination, différence avec EX05 et rôle anatomique ; mapKind mobility ne doit pas faire croire à un étirement.

**Prescription.** baseline.json conserve les valeurs actuelles ; pas validées par les sources techniques. Commencer lentement ; augmenter une seule variable après exécution contrôlée. Choix éditorial, sans prescription individuelle.

**Erreurs et corrections**

- Buste qui part en arrière : réduire la hauteur du genou.
- Appuis bruyants ou précipités : ralentir. Ces corrections sont des choix pédagogiques à revoir.

**Médias à contrôler**

- A : appuis au sol, corps entier visible.
- B : un genou levé, bras opposé en avant, autre pied en contact.
- Boucle à deux positions : montrer les deux côtés par une vue auxiliaire ou une séquence complémentaire ; A debout/B un seul côté ne démontre pas l’alternance.

**Audio proposé**

- Marche à ton rythme.
- Pose le pied, puis alterne.

**Points non résolus**

- Hauteur et cadence laissées adaptables.
- Muscles et supports visuels non approuvés par une revue humaine.

**Limite de preuve.** Les éléments de contrôle des illustrations et les scripts audio sont des propositions éditoriales. Deux sources sur le geste ne valident pas automatiquement muscles, dosage ou médias.

**Traçabilité :** [C01](https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/), [C02](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/aerobic-exercises), [C13](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs).


<a id="ex02"></a>

## EX02 - Step jacks sans saut

**État : Geste de base recoupé**. Revue humaine : en attente.

**Position initiale.** Debout, pieds rapprochés sans obligation de contact ; bras bas. Tronc stable, espace latéral et supérieur libre. [C04]

**Mouvement et sortie.** Faire un pas latéral tout en levant les bras, ramener pied et bras, recommencer de l’autre côté sans phase aérienne. [C04,C03] Hauteur des bras limitée au confort ; BHF propose aussi une variante à hauteur d’épaules [C02].

**Respiration.** Respirer continuellement ; le tempo des pas ne commande pas une apnée. Choix pédagogique.

**Muscles.** Jambes et épaules ; contribution qualitative des quadriceps, abducteurs/adducteurs, mollets et stabilisateurs du tronc [C04]. Aucune intensité chiffrée ni promesse de renforcement.

**Installation et matériel.** Sol dégagé et non glissant, espace pour les bras. Corde uniquement pour EX04.

**Adaptations.** Réduire vitesse et amplitude ; EX01 peut remplacer les mouvements avec saut.

**Arrêt.** Arrêter en cas de douleur, malaise ou perte répétée du contrôle. Un symptôme persistant nécessite un avis adapté.

**Audit du catalogue.** Consigne « ouvrir les bras » trop peu définie pour produire un média exact : distinguer bras aux épaules et au-dessus de la tête.

**Prescription.** baseline.json conserve les valeurs actuelles ; pas validées par les sources techniques. Commencer lentement ; augmenter une seule variable après exécution contrôlée. Choix éditorial, sans prescription individuelle.

**Erreurs et corrections**

- Transformation en saut : ralentir et maintenir un appui.
- Cambrure pour monter les bras : limiter leur hauteur.
- Amplitude qui déséquilibre : raccourcir le pas.

**Médias à contrôler**

- A : appuis rapprochés, bras bas.
- B : pied latéral posé, bras ouverts, tronc sans extension marquée.
- Vue face ; noter quelle hauteur des bras est retenue.
- Vérifier alternance et maintien d’un appui dans la séquence, pas uniquement sur les images.

**Audio proposé**

- Un pas de côté, ouvre les bras.
- Reviens, puis change de côté.

**Points non résolus**

- Amplitude des bras à figer avec le référent technique.
- Variante ne reçoit aucune garantie de compatibilité avec une blessure.

**Limite de preuve.** Les éléments de contrôle des illustrations et les scripts audio sont des propositions éditoriales. Deux sources sur le geste ne valident pas automatiquement muscles, dosage ou médias.

**Traçabilité :** [C04](https://www.puregym.com/exercises/cardio/jumping-jack/step-jacks/), [C03](https://www.nasm.org/resource-center/exercise-library/jumping-jacks), [C02](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/aerobic-exercises).


<a id="ex03"></a>

## EX03 - Jumping jacks

**État : Geste de base recoupé**. Revue humaine : en attente.

**Position initiale.** Debout, pieds rapprochés et bras bas ; préparer un petit saut avec genoux souples, espace libre. [C03]

**Mouvement et sortie.** Ouvrir les pieds et monter les bras pendant un saut ; réception contrôlée avec flexion, puis fermeture coordonnée pieds/bras. [C03,C02] Ne pas rechercher une étoile en suspension maximale.

**Respiration.** Respiration régulière ; ralentir si elle devient incontrôlée. Synthèse pédagogique.

**Muscles.** NASM cite quadriceps et fessiers, avec ischio-jambiers, mollets, stabilisateurs épaules/tronc [C03]. Cette hiérarchie est qualitative et ne valide pas un classement fixe pour chaque individu.

**Installation et matériel.** Sol dégagé et non glissant, espace pour les bras. Corde uniquement pour EX04.

**Adaptations.** Réduire vitesse et amplitude ; EX01 peut remplacer les mouvements avec saut.

**Arrêt.** Arrêter en cas de douleur, malaise ou perte répétée du contrôle. Un symptôme persistant nécessite un avis adapté.

**Audit du catalogue.** Titres cohérents. Enrichir muscles, différencier cardio et mobility, ne pas traiter absence de revue comme validation.

**Prescription.** baseline.json conserve les valeurs actuelles ; pas validées par les sources techniques. Commencer lentement ; augmenter une seule variable après exécution contrôlée. Choix éditorial, sans prescription individuelle.

**Erreurs et corrections**

- Réception jambes raides : réduire saut et vitesse.
- Fatigue qui dégrade les appuis : passer à EX02. [C03]

**Médias à contrôler**

- A : position fermée, bras bas.
- B : position ouverte avec réception souple, bras hauts selon confort.
- Vue face complétée de profil pour la réception.
- Le GIF à deux poses ne peut pas prouver l’amortissement entre les poses ; contrôle du mouvement réel requis.

**Audio proposé**

- Ouvre, puis referme.
- Amortis chaque réception.

**Points non résolus**

- Amplitude et hauteur variables, aucun angle unique.
- Les sources décrivent le geste, pas la bonne exécution des images générées.

**Limite de preuve.** Les éléments de contrôle des illustrations et les scripts audio sont des propositions éditoriales. Deux sources sur le geste ne valident pas automatiquement muscles, dosage ou médias.

**Traçabilité :** [C03](https://www.nasm.org/resource-center/exercise-library/jumping-jacks), [C02](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/aerobic-exercises).


<a id="ex04"></a>

## EX04 - Corde à sauter, saut simple

**État : Geste recoupé ; divergence sur le matériel**. Revue humaine : en attente.

**Position initiale.** Pieds proches, genoux légèrement fléchis ; buste redressé et regard devant. Poignées à hauteur confortable, coudes près du corps, épaules relâchées. Corde derrière pour le premier passage. [C05,C06]

**Mouvement et sortie.** Faire tourner la corde avec les poignets et franchir son passage par un petit saut ; recevoir souplement sur les avant-pieds, poursuivre sans remonter les genoux. [C05,C06] Sortie éditoriale : arrêter la rotation, laisser retomber la corde puis retrouver les appuis.

**Respiration.** Respiration libre et continue. Les sources techniques consultées ne fixent pas une phase respiratoire unique.

**Muscles.** Mollets pour la flexion plantaire ; cuisses pour l’amorti, inférence [C13]. Les rôles dominants et le schéma précis restent à corroborer sur cette variante.

**Installation et matériel.** Corde intacte et adaptée à la taille selon sa notice ; vérifier longueur et poignées, sol adhérent, dégagement au-dessus de la tête et tout autour du trajet de la corde. Ne pas imposer de tapis mou. Les dégagements sont à contrôler avant la première rotation.

**Adaptations.** Réduire vitesse et amplitude ; EX01 peut remplacer les mouvements avec saut.

**Arrêt.** Arrêter en cas de douleur, malaise ou perte répétée du contrôle. Un symptôme persistant nécessite un avis adapté.

**Audit du catalogue.** Conseil actuel cohérent. Installation à compléter : vérifier corde et dégagement vertical ; aucun tapis mou obligatoire.

**Prescription.** baseline.json conserve les valeurs actuelles ; pas validées par les sources techniques. Commencer lentement ; augmenter une seule variable après exécution contrôlée. Choix éditorial, sans prescription individuelle.

**Erreurs et corrections**

- Grands cercles des bras : revenir à une rotation des poignets.
- Sauts hauts : ne franchir que la corde.
- Cordes qui accrochent : contrôler longueur et symétrie. [C05,C06]

**Médias à contrôler**

- A : appuis rapprochés, corde derrière, poignées identifiables.
- B : petit franchissement, arc de corde cohérent et coudes proches.
- Profil ou trois quarts ; corde entière visible.
- Deux images ne prouvent ni rotation continue ni réception : démonstration filmée souhaitable pour la recette technique.

**Audio proposé**

- Tourne avec les poignets.
- Saute juste assez pour passer la corde.

**Points non résolus**

- ACE ancien déconseille les cordes lourdes ; Crossrope les promeut. Retenir corde légère de départ, pas de charge universelle.
- Crossrope donne lui-même plusieurs hauteurs de saut ; ne pas figer de centimètres.
- Longueur : suivre notice et essais, pas une règle poitrine valable pour tout modèle.

**Limite de preuve.** Les éléments de contrôle des illustrations et les scripts audio sont des propositions éditoriales. Deux sources sur le geste ne valident pas automatiquement muscles, dosage ou médias.

**Traçabilité :** [C05](https://acewebcontent.azureedge.net/assets/education-resources/lifestyle/fitfacts/pdfs/fitfacts/itemid_36.pdf), [C06](https://www.crossrope.com/blogs/blog/how-to-jump-rope/), [C13](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs).


<a id="ex05"></a>

## EX05 - Montées de genoux sans saut

**État : Geste de base recoupé**. Revue humaine : en attente.

**Position initiale.** Debout, pieds confortablement écartés ; buste droit, jambe d’appui non raidie. Bras libres ou main opposée comme repère. [C01,C10]

**Mouvement et sortie.** Lever un genou plié puis le reposer avant l’autre. [C01,C10] Ne pas chercher la hauteur de hanche à tout prix. Différence éditoriale avec EX01 : élévation plus marquée et contrôlée plutôt que cadence rapide.

**Respiration.** Respiration continue ; absence de rythme imposé. Choix pédagogique.

**Muscles.** Fléchisseurs de hanche pour le genou montant ; muscles de cuisse et cheville pour l’appui, inférence [C13]. Distinguer sollicitation et objectif d’hypertrophie.

**Installation et matériel.** Sol dégagé et non glissant, espace pour les bras. Corde uniquement pour EX04.

**Adaptations.** Réduire vitesse et amplitude ; EX01 peut remplacer les mouvements avec saut.

**Arrêt.** Arrêter en cas de douleur, malaise ou perte répétée du contrôle. Un symptôme persistant nécessite un avis adapté.

**Audit du catalogue.** Repère actuel amplitude confortable à garder. Expliciter un genou levé sans saut et le but distinct d’EX01.

**Prescription.** baseline.json conserve les valeurs actuelles ; pas validées par les sources techniques. Commencer lentement ; augmenter une seule variable après exécution contrôlée. Choix éditorial, sans prescription individuelle.

**Erreurs et corrections**

- Inclinaison arrière : réduire la hauteur.
- Genou d’appui raidi : retrouver un appui souple.
- Perte d’équilibre : diminuer cadence ou prendre un support adapté.

**Médias à contrôler**

- A : debout, bassin et tête visibles.
- B : genou fléchi levé, tronc redressé, pied opposé posé.
- Profil puis vue frontale auxiliaire pour contrôler bassin et alternance.

**Audio proposé**

- Monte le genou sans te pencher en arrière.
- Repose le pied, puis alterne.

**Points non résolus**

- AHA propose pieds très proches ; Tempo garde une largeur confortable. Pas de mesure universelle.
- Les sources ne valident pas une hauteur obligatoire.

**Limite de preuve.** Les éléments de contrôle des illustrations et les scripts audio sont des propositions éditoriales. Deux sources sur le geste ne valident pas automatiquement muscles, dosage ou médias.

**Traçabilité :** [C01](https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/), [C10](https://www.heart.org/en/-/media/Healthy-Living-Files/Healthy-for-Life/Kentucky-Inclusive-Health-Collaborative-PDFs/Adaptive-Exercises.pdf?sc_lang=en), [C13](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs).


<a id="ex47"></a>

## EX47 - Boxe dans le vide sans impact

**État : Alternance debout recoupée ; poignet et rotation encore partiels**. Revue humaine : en attente.

**Position initiale.** Debout, un pied légèrement devant, genoux souples ; coudes pliés et poings près du menton [C18]. AHA confirme les bras mais montre une variante assise [C10]. Conserver une largeur latérale confortable est un repère éditorial, sans angle obligatoire de garde sportive.

**Mouvement et sortie.** Étendre un bras devant soi, le replier pour ramener le poing au menton, puis faire l’autre bras [C18,C10]. USA Boxing corrobore le retour dans la garde par le même trajet pour les directs sportifs [C08] ; ne pas importer ses transferts de poids et pivots de puissance. Vitesse modérée, sans contact, charge ni saut proposée pour Tempo. Sortie éditoriale : ralentir, retrouver deux appuis stables, relâcher les bras.

**Respiration.** Souffler brièvement pendant l’extension si confortable, respirer entre les coups. Choix pédagogique à arbitrer, non vérifié pour chaque variante dans les deux sources.

**Muscles.** Triceps pour extension du coude ; antagonistes participent au freinage du bras dans le vide [C14]. Contribution épaules/tronc plausible mais hiérarchie non établie ici.

**Installation et matériel.** Sol dégagé et non glissant, espace pour les bras. Corde uniquement pour EX04.

**Adaptations.** Réduire vitesse et amplitude ; EX01 peut remplacer les mouvements avec saut.

**Arrêt.** Arrêter en cas de douleur, malaise ou perte répétée du contrôle. Un symptôme persistant nécessite un avis adapté.

**Audit du catalogue.** « En garde » est trop vague : préciser un pied devant, poings au menton, retour puis alternance. « Sans impact » signifie ici sans saut ni contact, sans promettre absence de contrainte articulaire.

**Prescription.** baseline.json conserve les valeurs actuelles ; pas validées par les sources techniques. Commencer lentement ; augmenter une seule variable après exécution contrôlée. Choix éditorial, sans prescription individuelle.

**Erreurs et corrections**

- Claquer le coude en fin d’amplitude : raccourcir et ralentir.
- Laisser tomber la garde : ramener avant le coup suivant.
- Tordre le genou sur pied bloqué : diminuer rotation, demander revue du pivot.

**Médias à contrôler**

- A : garde complète avec les deux pieds visibles.
- B : un bras en extension contrôlée, autre près du visage.
- Trois quarts et vue de dessus utile pour appuis/rotation.
- Éviter que le GIF fasse croire à un coude jeté en butée ; aucun haltère représenté.

**Audio proposé**

- Tends le bras en contrôle.
- Ramène en garde, puis alterne.

**Points non résolus**

- Le cycle alterné debout et les bras sont désormais documentés exactement par NSW, avec recoupement gestuel AHA et USA Boxing. La largeur latérale, le poignet, la rotation et le pivot ne sont pas tous confirmés sur cette variante simple.
- Aucune consigne de pivot puissant, claquement de coude ou ajout de poids ne doit être dérivée de guides de boxe de compétition.
- Respiration par coup et hiérarchie musculaire restent propositions qualitatives, à revoir.

**Limite de preuve.** Les éléments de contrôle des illustrations et les scripts audio sont des propositions éditoriales. Deux sources sur le geste ne valident pas automatiquement muscles, dosage ou médias.

**Traçabilité :** [C08](https://d36m266ykvepgv.cloudfront.net/uploads/media/lYivrDbNV6/o/usab-gtf-trainingmanual-v-01-1.pdf), [C09](https://www.englandboxing.org/news_articles/england-boxing-shadow-boxing-drills-week-eight/), [C10](https://www.heart.org/en/-/media/Healthy-Living-Files/Healthy-for-Life/Kentucky-Inclusive-Health-Collaborative-PDFs/Adaptive-Exercises.pdf?sc_lang=en), [C14](https://openstax.org/books/anatomy-and-physiology/pages/11-1-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems), [C18](https://cdn.activeandhealthy.nsw.gov.au/assets/Healthy-ageing-resources/Old-resources-2024/Exercise-Manual.pdf).

### Recoupement complémentaire du 12 octobre 2026

Conserver alternance simple et retour garde. Rotation/pivot puissant exclus du brief de base; poignet confortable à fixer humainement, sans consigne chiffrée ajoutée.

- **Positions :** Aucune nouvelle preuve poignet dans cette passe.
- **Muscles :** Hiérarchie musculaire non mesurée.
- **Conseils :** Pas de pivot de compétition, pas coude jeté en butée.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [C08](https://d36m266ykvepgv.cloudfront.net/uploads/media/lYivrDbNV6/o/usab-gtf-trainingmanual-v-01-1.pdf), [C10](https://www.heart.org/en/-/media/Healthy-Living-Files/Healthy-for-Life/Kentucky-Inclusive-Health-Collaborative-PDFs/Adaptive-Exercises.pdf?sc_lang=en), [C18](https://cdn.activeandhealthy.nsw.gov.au/assets/Healthy-ageing-resources/Old-resources-2024/Exercise-Manual.pdf).

<a id="ex48"></a>

## EX48 - Pas de patineur sans saut

**État : Transfert sans saut recoupé ; géométrie Tempo encore partielle**. Revue humaine : en attente.

**Position initiale.** Proposition Tempo : pieds à largeur confortable, genoux souples, bassin contrôlé. Retenir provisoirement le pied libre qui rejoint ou touche légèrement à côté du pied chargé, sans croisement derrière. Cette géométrie reste un choix à approuver.

**Mouvement et sortie.** Le transfert latéral alterné sans saut est décrit indépendamment par HealthGirl et la physiothérapeute Caitlin Casella [C11,C15]. Poser un pied sur le côté, transférer le poids, puis changer de direction. Green Physique décrit une variante plus précise avec pas diagonal et pied libre derrière [C16] ; ce placement diffère de la proposition Tempo sans croisement. Sortie éditoriale : ralentir, retrouver deux appuis stables, relâcher les bras.

**Respiration.** Respirer en continu, sans cadence respiratoire imposée. Proposition éditoriale.

**Muscles.** Abducteurs/adducteurs pour le déplacement latéral ; cuisses et cheville pour l’appui, inférence [C13]. Pas de classement principal/secondaire prétendument mesuré.

**Installation et matériel.** Sol dégagé et non glissant, espace pour les bras. Corde uniquement pour EX04.

**Adaptations.** Réduire vitesse et amplitude ; EX01 peut remplacer les mouvements avec saut.

**Arrêt.** Arrêter en cas de douleur, malaise ou perte répétée du contrôle. Un symptôme persistant nécessite un avis adapté.

**Audit du catalogue.** Titres actuels compatibles avec version très simple ; nom patineur reste ambigu. Ne pas remplacer par curtsy lunge ni skater squat.

**Prescription.** baseline.json conserve les valeurs actuelles ; pas validées par les sources techniques. Commencer lentement ; augmenter une seule variable après exécution contrôlée. Choix éditorial, sans prescription individuelle.

**Erreurs et corrections**

- Transformer en bond : réduire vitesse et largeur.
- Croisement qui déséquilibre : revenir au pied libre qui touche à côté, selon la variante provisoire.
- Bassin qui chute : raccourcir le transfert.

**Médias à contrôler**

- A : appui chargé à gauche, pied libre droit en contact léger à côté, sans croisement.
- B : état symétrique à droite, pied libre gauche à côté, tête et bassin contrôlés.
- Vue face et profil auxiliaire.
- Ces deux poses sont deux côtés, pas debout neutre/pas droit. Vérifier que la boucle ne montre aucun vol.

**Audio proposé**

- Un pas de côté, transfère ton poids.
- Change de côté sans sauter.

**Points non résolus**

- Le transfert alterné sans saut est recoupé, mais les détails articulaires du pied libre à côté ne disposent pas de deux descriptions exactes indépendantes.
- La vidéo Fitness Blender partiellement examinée à 10:51/10:56 travaille une jambe à la fois, avec jambe libre mobile : ne pas compter comme variante exacte.
- Décider entre pas latéral simple et pas diagonal avec pointe libre arrière ; revoir nom, texte et médias ensemble.

**Variante documentée à distinguer.** Pas diagonal de patineur, pointe libre arrière

- Départ : Pieds confortablement écartés, genoux souples.
- Mouvement : Pas diagonal, transférer le poids sur la jambe receveuse ; genou suit les orteils, thorax reste au-dessus de cette jambe.
- Pied libre : Pointe du pied libre derrière en contact léger si nécessaire, sans saut.
- Retour : Pousser sur le pied chargé puis changer de côté.
- Limite : Synthèse d’un coach, aucune recommandation de rééducation transférée ; géométrie encore à corroborer et faire revoir.

**Limite de preuve.** Les éléments de contrôle des illustrations et les scripts audio sont des propositions éditoriales. Deux sources sur le geste ne valident pas automatiquement muscles, dosage ou médias.

**Traçabilité :** [C11](https://www.healthgirl.ca/blog/how-to-do-skaters-low-impact-cardio), [C07](https://www.nhs.uk/live-well/exercise/balance-exercises/), [C12](https://www.fitnessblender.com/videos/low-impact-cardio-workout-quiet-cardio-workout-at-home), [C13](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs), [C15](https://www.practicehuman.com/prevent-falls-with-osteoporosis-and-osteopenia/), [C16](https://greenphysique.com/injury-recovery-prevention/knee-rehab-strengthening-program), [C17](https://www.youtube.com/watch?v=FXthVpqzacw).

### Recoupement complémentaire du 12 octobre 2026

Conserver provisoirement pas latéral sans croisement et nom historique; variante diagonale pointe arrière séparée. Nom, texte et images à arbitrer ensemble avant remplacement.

- **Positions :** Pied libre exact encore non recoupé; aucun nouveau visionnage.
- **Muscles :** Rôles inférés inchangés.
- **Conseils :** Aucune substitution par fente croisée ni saut.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [C11](https://www.healthgirl.ca/blog/how-to-do-skaters-low-impact-cardio), [C15](https://www.practicehuman.com/prevent-falls-with-osteoporosis-and-osteopenia/), [C16](https://greenphysique.com/injury-recovery-prevention/knee-rehab-strengthening-program), [C17](https://www.youtube.com/watch?v=FXthVpqzacw).



# Référence force - Tempo

État : référence documentaire du 12 octobre 2026, à soumettre à une revue technique humaine. Aucune illustration, animation, carte musculaire ou piste audio existante n’est approuvée par ce dossier. Les 24 variantes sont toutes traitées, avec les lacunes conservées explicitement.

## Méthode et règles communes

- **Posture** : Les repères sont qualitatifs. Une courbure naturelle du rachis n’est pas un dos géométriquement droit. La tête suit le tronc, sans menton projeté. Les omoplates doivent accompagner le bras, notamment overhead. Une amplitude se définit par appuis et contrôle, sans angle imposé à toute personne.
- **Respiration** : La proposition pédagogique privilégie souffle libre, expiration phase de poussée/tirage/redressement résisté et inspiration retour. Une divergence source est tracée EX38.
- **Arrêt et contrôle** : Arrêter la répétition si perte d’appui, glissement matériel, douleur vive ou malaise ; ne pas pousser à travers la douleur. Cette référence générale ne prescrit pas de rééducation.
- **Muscles** : Groupes documentés et inférences anatomiques séparés. Une mesure EMG de petit échantillon ne justifie pas des pourcentages de carte ni une promesse clinique.
- **Médias et audio** : Les deux images sont critères de commande/recette, pas validation des médias existants. Audio proposé uniquement en texte, sans production ni validation acoustique.

Les preuves sont attachées aux champs qu’elles confirment. Deux pages du même éditeur ou une copie du même article ne comptent pas comme recoupement indépendant. Les sources cliniques sont utilisées pour les repères du mouvement, pas pour transférer leurs dosages ou indications. « Recoupé » ci-dessous signifie noyau documentaire cohérent ; les prises de matériel, trajectoires fines et médias restent à revoir.

## Exercices

<a id="ex06"></a>

### EX06 - Squat au poids du corps

**Variante** : Squat bilatéral sans charge. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds entiers posés, écart confortable.
- Genoux : Souples ; suivent orientation pieds.
- Bassin : Au-dessus appuis.
- Colonne et tronc : Courbures naturelles sans rigidité forcée.
- Tête et nuque : Regard devant et légèrement bas selon inclinaison.
- Omoplates : Repos, pas de pincement forcé.
- Bras, mains et prise : Bras libres ou devant pour équilibre.

**Mouvement** : Inspirer en reculant et abaissant le bassin ; fléchir hanches et genoux ensemble.
**Fin** : Arrêt avant perte d’appui ou dos qui se déforme.
**Retour** : Expirer en étendant hanches/genoux, bassin et thorax remontent ensemble.
**Respiration** : Inspiration descente ; expiration remontée.

**Muscles documentés** : Cuisses et fessiers corroborés ; quadriceps/ischio-jambiers nommés par Mayo.
**Inférences** : Abdominaux/érecteurs stabilisent ; rôle ischio-jambiers ne signifie pas moteur principal.

**Erreurs et corrections**

- Genoux rentrent : réduire profondeur et suivre les pieds.
- Talons levés : réduire amplitude et ajuster appuis.

**Régression** : Mini-squat avec main sur support fixe.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : debout, pieds visibles.
- B : bassin abaissé, genoux orientés comme pieds, talons posés.

**Audio brouillon** : « Pieds bien posés, écart confortable. » / « Inspire et descends à ton amplitude. » / « Expire, pousse le sol et relève-toi. »

**Recoupement par champ**

- [American Council on Exercise - Bodyweight Squat](https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/) (variante exacte) : Appuis, flexion et respiration.
- [Mayo Clinic - Video: Squat exercise](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/squat/vid-20084663) (variante exacte) : Rachis/genoux/amplitude.
- [NHS - Strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/) (corroboration ciblée, limites ci-dessous) : Mini-squat assisté.

**Écarts et questions ouvertes**

- ACE pointes légèrement ouvertes ; Mayo devant. Choisir orientation confortable avec genoux cohérents, pas angle universel.

**Audit catalogue** : Texte direction correcte ; remplacer « effort/retour » par descente/remontée explicites. Hiérarchie musculaire catalogue trop catégorique pour ischio-jambiers.

<a id="ex07"></a>

### EX07 - Fentes arrière alternées

**Variante** : Fente arrière sans charge, alternance après retour complet. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Écart latéral conservé ; pied avant entier, arrière sur avant-pied.
- Genoux : Avant suit pied, arrière vers sol.
- Bassin : Face devant, pas de torsion.
- Colonne et tronc : Tronc stable avec inclinaison contrôlée.
- Tête et nuque : Dans prolongement tronc.
- Omoplates : Relâchées.
- Bras, mains et prise : Mains aux hanches ou libres.

**Mouvement** : Faire un pas derrière sur une voie séparée ; fléchir les deux jambes sans heurter le sol.
**Fin** : Pied avant posé, genou arrière proche sol selon contrôle.
**Retour** : Pousser principalement avec la jambe avant pour revenir debout, pied arrière ramené, puis alterner. L’avant-pied arrière peut aider ; aucune répartition exclusive du poids n’est imposée.
**Respiration** : Souffle continu ; inspiration descente et expiration retour proposées comme rythme éditorial, pas protocole obligatoire démontré par tous les guides.

**Muscles documentés** : Quadriceps, ischio-jambiers et fessiers documentés pour famille fente.
**Inférences** : Stabilisation latérale hanche/tronc ; hiérarchie exacte EX07 non établie.

**Erreurs et corrections**

- Appuis sur une ligne : écarter les voies.
- Genou avant rentre : raccourcir amplitude.

**Régression** : Fente à appuis fixés et support stable.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : debout.
- B : pas arrière visible, talon arrière levé ; jamais pieds croisés.

**Audio brouillon** : « Recule un pied, garde de la largeur. » / « Inspire et fléchis les deux jambes. » / « Expire, reviens debout, puis alterne. »

**Recoupement par champ**

- [Harvard Health Publishing - Try this: Take a step back](https://www.health.harvard.edu/exercise-and-fitness/try-this-take-a-step-back) (variante avec charge) : Pas arrière et alternance.
- [Mayo Clinic - Video: Lunge exercise](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/lunge/vid-20084662) (famille du mouvement) : Alignement et groupes musculaires.
- [National Academy of Sports Medicine - Squat Alternatives](https://www.nasm.org/resource-center/blog/squat-alternatives) (corroboration ciblée, limites ci-dessous) : Pas arrière, poids devant et retour debout, possibilité alterner.
- [PureGym - How To Do Reverse Lunges](https://www.puregym.com/exercises/legs/quad-exercises/lunges/reverse-lunges/) (corroboration ciblée, limites ci-dessous) : Sans charge de base explicitement nommé, alternance possible ; liste texte lacunaire.
- [US Navy Fitness - Associated Curriculum Documents, S-562-0612](https://www.navyfitness.org/modules/media/?__cb=637902024873170000&do=download&id=800d79c2-1b38-46a3-a9c5-221593779777) (corroboration ciblée, limites ci-dessous) : Sans charge explicitement nommé, retour par hanche avant, alternance chaque répétition.

**Complément intégré** : descriptions indépendantes supplémentaires incorporées dans cette fiche ; propositions de prise, sortie et critères média restent à reviewer humainement.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Distribution de forces entre les appuis non quantifiée ; pas d’instruction « tout sur jambe avant ».
- Amplitude, genou devant orteils et respiration ne sont pas standards universels.
- Revue humaine du mouvement et des médias toujours absente.

**Audit catalogue** : Sans charge et alternance recoupées par NASM, PureGym et Navy. Préciser talon arrière relevé et retour debout complet. Aucune règle tout le poids devant, tibia vertical ou genou interdit devant orteils.

<a id="ex08"></a>

### EX08 - Fente statique

**Variante** : Split squat, appuis restent fixés pendant série. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Avant entier au sol ; arrière sur avant-pied ; écart latéral.
- Genoux : Deux genoux souples, avant dans axe pied.
- Bassin : Face devant.
- Colonne et tronc : Tronc stable, sans cambrure ajoutée.
- Tête et nuque : Alignée au tronc.
- Omoplates : Relâchées.
- Bras, mains et prise : Libres, mains hanches ou support si besoin.

**Mouvement** : Abaisser le bassin entre appuis en fléchissant les deux genoux.
**Fin** : Profondeur contrôlée sans toucher genou arrière au sol par obligation.
**Retour** : Étendre les jambes sans rapprocher les pieds ; changer côté après série.
**Respiration** : Inspirer descente, expirer remontée.

**Muscles documentés** : Famille fente : quadriceps, fessiers et ischio-jambiers.
**Inférences** : Tronc et muscles hanche stabilisent ; contribution exacte non quantifiée.

**Erreurs et corrections**

- Pieds sur une ligne : élargir les appuis.
- Rebond bas : marquer un changement de direction lent.

**Régression** : Amplitude plus petite, main sur support fixe.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : appuis décalés fixes.
- B : bassin plus bas, talon arrière levé ; positions pieds identiques A/B.

**Audio brouillon** : « Pieds décalés, talon arrière levé. » / « Inspire et abaisse le bassin. » / « Expire et remonte sans déplacer les pieds. »

**Recoupement par champ**

- [University Hospitals Plymouth NHS Trust - Back Rehabilitation Programme](https://www.plymouthhospitals.nhs.uk/display-pil/pil-back-rehabilitation-programme-3972) (variante exacte) : Appuis fixes, talon arrière et séries par côté.
- [North Bristol NHS Trust - Therapy eRehab - Knee Instability](https://www.nbt.nhs.uk/our-services/a-z-services/physiotherapy/specialist-physiotherapy-service/therapy-erehab-video-resources/therapy-erehab-knee-instability) (corroboration ciblée, limites ci-dessous) : Descente genou arrière sans pas pendant répétition.
- [Mayo Clinic - Video: Lunge exercise](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/lunge/vid-20084662) (famille du mouvement) : Muscles et genou/rachis.

**Écarts et questions ouvertes**

- Le libellé Bristol Video 5 est incohérent ; passage utilisé est Video 4. « Descendre verticalement » ne doit pas interdire légère inclinaison tronc.

**Audit catalogue** : Clarifier différence EX07 : pas de retour pieds joints à chaque répétition ; talon arrière reste levé.

<a id="ex09"></a>

### EX09 - Pont fessier

**Variante** : Pont fessier bilatéral au sol. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds posés, largeur bassin.
- Genoux : Fléchis, non serrés ni ouverts de force.
- Bassin : Au sol au départ.
- Colonne et tronc : Courbure confortable ; ne pas forcer dos plaqué.
- Tête et nuque : Posée, regard plafond.
- Omoplates : Épaules sur sol, pas d’appui sur nuque.
- Bras, mains et prise : Bras à côté, paumes posées.

**Mouvement** : Soulever bassin par extension des hanches, pression dans pieds et fessiers.
**Fin** : Tronc/cuisses tendent vers une ligne, arrêt avant dos qui se creuse.
**Retour** : Redescendre bassin doucement, garder appuis.
**Respiration** : Expirer montée ; inspirer descente.

**Muscles documentés** : Fessiers nommés par ACE.
**Inférences** : Ischio-jambiers peuvent aider extension hanche ; tronc stabilise ; absence catalogue secondaires ≠ absence de participation.

**Erreurs et corrections**

- Dos creusé : réduire hauteur.
- Pointes seules : conserver talons appuyés.

**Régression** : Petite levée bassin.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : bassin au sol.
- B : bassin levé, épaules/tête et pieds inchangés ; nuque non pliée.

**Audio brouillon** : « Dos au sol, pieds posés, genoux fléchis. » / « Expire et soulève le bassin sans cambrer. » / « Inspire et redescends doucement. »

**Recoupement par champ**

- [American Council on Exercise - Glute Bridge](https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/) (variante exacte) : Montée, respiration et arrêt avant hyperextension.
- [Whittington Health NHS Trust - Lower Limb Pain](https://www.whittington.nhs.uk/default.asp?c=47048) (variante exacte) : Appuis et ligne épaules/genoux.

**Écarts et questions ouvertes**

- Position pieds et hauteur adaptées ; aucune distance talon-bassin universelle.

**Audit catalogue** : Catalogue cohérent. Expliciter appui épaules plutôt que nuque ; renseigner participation ischio-jambiers comme inférence.

<a id="ex10"></a>

### EX10 - Élévations des mollets

**Variante** : Élévation mollets bilatérale au sol sans appui manuel, support fixe accessible comme régression.. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Parallèles, largeur confortable ; pas sur bord marche.
- Genoux : Allongés sans verrouillage forcé.
- Bassin : Au-dessus pieds.
- Colonne et tronc : Tronc vertical.
- Tête et nuque : Regard devant.
- Omoplates : Relâchées.
- Bras, mains et prise : Mains aux hanches ou bras libres ; pas d’appui manuel dans cette version.

**Mouvement** : Lever talons lentement en conservant pression sur avant-pieds.
**Fin** : Talons levés sans rouler sur bords externes.
**Retour** : Reposer talons doucement sans rebond.
**Respiration** : Respiration libre. Expirer montée/inspirer descente peut guider le rythme, confirmé ACE avec mur mais pas propriété obligatoire variante sans support.

**Muscles documentés** : Mollets, gastrocnémien décrit ACE.
**Inférences** : Soléaire participe flexion plantaire ; tronc équilibre, pas moteur principal.

**Erreurs et corrections**

- Chevilles basculent : diminuer hauteur.
- Rebond : ralentir retour.

**Régression** : Mur fixe et amplitude plus petite.
**Installation** : Sol stable et non glissant ; support fixe accessible si besoin d’équilibre, sans appui manuel pour la variante de base sans support.

**Deux images attendues**

- A : talons posés, mains aux hanches ou bras libres identiques.
- B : talons levés, mêmes appuis avant-pieds ; version avec support montrée séparément.

**Audio brouillon** : « Pieds parallèles, prends un appui si besoin. » / « Expire et monte sur les avant-pieds. » / « Inspire et repose les talons lentement. »

**Recoupement par champ**

- [American Council on Exercise - Standing Calf Raises - Wall](https://www.acefitness.org/resources/everyone/exercise-library/73/standing-calf-raises-wall/) (corroboration ciblée, limites ci-dessous) : Montée/descente, pieds sans rotation.
- [NHS - Strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/) (corroboration ciblée, limites ci-dessous) : Talons levés et reposés, support stable.
- [University of North Carolina, CGWEP / Otago - Tools to Implement the Otago Exercise Program, 2023](https://www.med.unc.edu/aging/cgwep/wp-content/uploads/sites/865/2023/08/Otago_2023-Implementation-Guide-for-PT-1.pdf) (corroboration ciblée, limites ci-dessous) : Debout, montée sur avant-pieds, talons reposés sans mains en appui.
- [Keet Health - Standing Bilateral Calf Raises](https://vimeo.com/210356387) (corroboration ciblée, limites ci-dessous) : Mains hanches donc sans support, pieds vers avant et retour lent.

**Complément intégré** : descriptions indépendantes supplémentaires incorporées dans cette fiche ; propositions de prise, sortie et critères média restent à reviewer humainement.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Hauteur, vitesse, largeur et dose individuelles non fixées par recoupement.
- Anatomie spécifique et classement musculaire doivent conserver qualification de synthèse/inférence.
- Revue humaine et contrôle visuel réel restent nécessaires.

**Audit catalogue** : Variante bilatérale sans support recoupée par UNC/Otago et Keet. La main au mur est une régression ; garder distinction dans médias. Core ne doit pas suggérer effort abdominal dominant.

<a id="ex11"></a>

### EX11 - Pompes inclinées

**Variante** : Pompe inclinée sur support fixe. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Avant-pieds au sol, assez de largeur.
- Genoux : Jambes allongées.
- Bassin : Aligné avec tronc.
- Colonne et tronc : Corps continu sans affaissement.
- Tête et nuque : Prolongement tronc.
- Omoplates : Bougent avec thorax, pas pincées de force.
- Bras, mains et prise : Mains sur support, prise ferme, largeur confortable.

**Mouvement** : Fléchir coudes obliques et rapprocher poitrine du support, corps solidaire.
**Fin** : Amplitude avant perte d’alignement, mains gardent appui.
**Retour** : Repousser support pour allonger bras.
**Respiration** : Inspirer descente ; expirer poussée.

**Muscles documentés** : Pectoraux/triceps documentés pour pompe ; inclinaison change charge.
**Inférences** : Deltoïde antérieur et stabilisateurs tronc participent ; aucun pourcentage.

**Erreurs et corrections**

- Support mobile : choisir installation fixe.
- Bassin tombe : relever support.

**Régression** : Pompe murale ou support plus haut.
**Installation** : Vérifier support fixe, non glissant, capable de supporter la poussée et appui sans basculer ; surface pour paumes et pieds sèches.

**Deux images attendues**

- A : appuis support/pieds visibles.
- B : poitrine près support, coude fléchi ; support inchangé.

**Audio brouillon** : « Mains sur un support fixe, corps aligné. » / « Inspire et approche la poitrine. » / « Expire et repousse le support. »

**Recoupement par champ**

- [American Council on Exercise - Be a Chest Day Champion](https://www.acefitness.org/resources/pros/expert-articles/8972/be-a-chest-day-champion-an-evidence-based-approach-to-training-the-chest/) (variante exacte) : Variante surélevée et régression hauteur.
- [Mayo Clinic News Network - Mayo Clinic Q and A: 5 stair exercises to do at home](https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-q-and-a-5-stair-exercises-to-do-at-home/) (corroboration ciblée, limites ci-dessous) : Posture, respiration et retour.

**Écarts et questions ouvertes**

- Support exact du média doit être contrôlé mécaniquement et humainement.

**Audit catalogue** : Catalogue pertinent. Ajouter installation support avant départ, phase respiratoire précise.

<a id="ex12"></a>

### EX12 - Pompes sur les genoux

**Variante** : Pompe sur genoux, hanches allongées. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Pieds derrière, sans participation motrice requise.
- Genoux : Au sol sur surface confortable, écart adapté.
- Bassin : Prolonge tronc/genoux, non assis sur talons.
- Colonne et tronc : Tête/tronc/bassin/genoux solidaires.
- Tête et nuque : Regard au sol, nuque longue.
- Omoplates : Accompagnent déplacement bras.
- Bras, mains et prise : Paumes stables, coudes obliques.

**Mouvement** : Fléchir coudes, poitrine et bassin descendent ensemble.
**Fin** : Amplitude contrôlée sans chercher menton sol en relevant tête.
**Retour** : Pousser dans mains et étendre coudes en conservant la ligne.
**Respiration** : Inspirer descente ; expirer poussée.

**Muscles documentés** : Pectoraux/triceps, abdomen pour stabilité : Mayo ; bras/épaules ACE.
**Inférences** : Deltoïde antérieur, dentelé et tronc stabilisent selon phase.

**Erreurs et corrections**

- Pli taille : avancer appuis pour aligner genoux/bassin.
- Coudes ouverts de force : choisir trajectoire oblique.

**Régression** : Pompe inclinée haute.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : ligne genoux-bassin-tête.
- B : poitrine basse et bassin suit, genoux restent au même point.

**Audio brouillon** : « Genoux au sol, aligne le corps. » / « Inspire, descends poitrine et bassin ensemble. » / « Expire et repousse le sol. »

**Recoupement par champ**

- [American Council on Exercise - Bent Knee Push-up](https://www.acefitness.org/resources/everyone/exercise-library/13/bent-knee-push-up/) (variante exacte) : Corps depuis genoux, descente et poussée.
- [Mayo Clinic - Video: Modified pushup](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/modified-pushup/vid-20084674) (variante exacte) : Dos stable, muscles, contrôle.

**Écarts et questions ouvertes**

- Largeur mains varie sources ; pas d’angle coude universel.

**Audit catalogue** : Pas de correction majeure ; remplacer respiration générique et ne pas imposer contact menton au sol.

<a id="ex13"></a>

### EX13 - Pompes classiques

**Variante** : Pompe classique sur mains et avant-pieds. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Avant-pieds au sol, largeur adaptée.
- Genoux : Jambes allongées.
- Bassin : Dans ligne tronc/talons.
- Colonne et tronc : Rachis stable sans bassin creusé.
- Tête et nuque : Regard sol devant mains.
- Omoplates : Glissent avec le mouvement, pas blocage de force.
- Bras, mains et prise : Paumes fermes, doigts écartés, coudes obliques.

**Mouvement** : Descendre corps ensemble par flexion coudes.
**Fin** : Amplitude que le tronc contrôle.
**Retour** : Pousser le sol, allonger coudes sans relever bassin seul.
**Respiration** : Inspirer descente ; expirer poussée.

**Muscles documentés** : Poitrine/triceps corroborés par familles pompe et UAF.
**Inférences** : Deltoïde antérieur et dentelé assistent ; tronc/pieds stabilisent.

**Erreurs et corrections**

- Bassin tombe : régression inclinée.
- Coudes forcés latéraux : reprendre trajectoire confortable.

**Régression** : Pompe inclinée ou genoux.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : planche, pieds visibles.
- B : flexion coude, corps même ligne ; ni tête seule ni bassin seul déplacés.

**Audio brouillon** : « Mains au sol, corps aligné. » / « Inspire et descends en contrôle. » / « Expire, repousse le sol, corps solidaire. »

**Recoupement par champ**

- [American Council on Exercise - Push-up](https://www.acefitness.org/resources/everyone/exercise-library/41/push-up/) (variante exacte) : Appuis et mouvement.
- [University of Alaska Fairbanks - Nanook Recreation - Upper Body Pressing Exercises](https://www.uaf.edu/recreation/competitions/fitness-challenge/exercises/upper-body-pressing.php) (variante exacte) : Corps solidaire, tête et expiration.

**Écarts et questions ouvertes**

- UAF conseille omoplates fixes ; ne pas en faire un verrouillage dans animation.

**Audit catalogue** : Descriptions actuelles cohérentes ; nuance scapulaire à faire vérifier.

<a id="ex14"></a>

### EX14 - Pompes mains rapprochées

**Variante** : Pompe au sol, mains légèrement plus rapprochées que la pompe classique, juste à l’intérieur de la largeur des épaules si confortable; pouces/index séparés, sans forme diamant imposée.. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Avant-pieds, écart aide équilibre.
- Genoux : Allongés.
- Bassin : Aligné au tronc.
- Colonne et tronc : Stable sans affaissement.
- Tête et nuque : Dans prolongement.
- Omoplates : Omoplates soutiennent le thorax et accompagnent poussée sous contrôle. Ne pas maintenir volontairement une pince maximale en arrière, ni ajouter un push-up plus maximal sans changer variante. Proposition de coaching à revoir.
- Bras, mains et prise : Sur cette variante, repère largeur relatif aux épaules et à la pompe classique; aucun rapprochement maximal exigé. Orientation légèrement ajustable selon poignet, sans tordre les mains pour obtenir un dessin.

**Mouvement** : Inspirer et plier les coudes pour abaisser poitrine et bassin ensemble. Les coudes suivent près du buste sans imposer qu’ils frottent les côtes. Les deux paumes et avant-pieds conservent leur place.
**Fin** : Arrêter descente à hauteur où corps et appuis restent contrôlés et sans douleur. Pas obligation de toucher sol, pas angle absolu coude/épaule.
**Retour** : Expirer et repousser le sol pour allonger les coudes, sans claquement en hyperextension ni changement de ligne du bassin.
**Respiration** : Inspirer descente ; expirer poussée.

**Muscles documentés** : Étude Cogley confirme pectoraux et triceps actifs en base étroite, plus que large dans protocole.
**Inférences** : Stabilisation similaire pompe ; triceps premier dans catalogue reste choix pédagogique, pas classement universel.

**Erreurs et corrections**

- Mains serrées en diamant inconfortable: élargir jusqu’à prise confortable, ou choisir pompe classique.
- Coudes excessivement écartés: réduire course et garder trajet proche du buste, sans pincement forcé.
- Bassin qui chute: arrêter puis utiliser support fixe plus haut.
- Poignets douloureux: quitter appui, ne pas conclure que douleur indique seulement mauvaise largeur.

**Régression** : Mains légèrement rapprochées sur support fixe haut.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : largeur mains clairement inférieure variante classique.
- B : coudes plus proches buste, corps ligne ; aucune torsion poignet inventée.

**Audio brouillon** : « Paumes au sol, mains un peu rapprochées. » / « Inspire et descends, coudes près du buste. » / « Expire et repousse en gardant le bassin aligné. »

**Recoupement par champ**

- [Cogley et al. - Journal of Strength and Conditioning Research - Comparison of muscle activation using various hand positions during the push-up exercise](https://pubmed.ncbi.nlm.nih.gov/16095413/) (corroboration ciblée, limites ci-dessous) : Mains étroites sans conclure isolement.
- [American Council on Exercise - Push-up](https://www.acefitness.org/resources/everyone/exercise-library/41/push-up/) (famille du mouvement) : Posture pompe de base.
- [University of Alaska Fairbanks - Nanook Recreation - Upper Body Pressing Exercises](https://www.uaf.edu/recreation/competitions/fitness-challenge/exercises/upper-body-pressing.php) (famille du mouvement) : Expiration poussée et corps solidaire.
- [Tiger Fitness - Close Grip Push Ups - Team Tiger Fitness](https://tigerfitness.com/blogs/exercise-database/close-grip-push-ups-1) (variante exacte) : Base mains juste plus étroite; appuis et corps solidaire.
- [Men’s Health / Hearst - Close-Grip Pushup - Brett Williams NASM, Ebenezer Samuel CSCS](https://www.menshealth.com/fitness/a71748001/close-grip-pushup-form/) (variante exacte) : Variante non diamant.
- [Fitbod - The At-Home Push Up Workout - Emily Trinh](https://fitbod.me/blog/at-home-push-up/) (variante exacte) : Variante rapprochée distincte diamant, coudes proches.
- [StrengthLog - How to Do Close-Grip Push-Up](https://www.strengthlog.com/close-grip-push-up/) (corroboration ciblée, limites ci-dessous) : Cycle respiratoire; largeur différente à signaler.
- [Australian Institute of Fitness / Network - Perfecting the push-up - Stephanie Glickman](https://fitness.edu.au/the-fitness-zone/perfecting-the-push-up/) (corroboration ciblée, limites ci-dessous) : Appuis mains distribués et soutien actif, contradiction avec omoplates figées.

**Complément intégré** : descriptions indépendantes supplémentaires incorporées dans cette fiche ; propositions de prise, sortie et critères média restent à reviewer humainement.

**Sortie de position** : Revenir en haut puis poser les genoux avant de libérer mains; si remontée non maîtrisée, poser genoux doucement pour sortir.

**Critère média complémentaire** : Vue dessus pour prouver mains séparées et largeur plus étroite; profil pour bassin/nuque. A haut, B descente contrôlée; pas de saut d’appui ni diamant généré par défaut.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Largeur et orientation des mains réellement tolérées par chaque personne; pas seuil universel démontré.
- Cogley protocole intégral toujours non lu dans ce complément; aucun résultat EMG individuel ou bénéfice de sécurité.
- Trajectoire scapulaire précise de variante rapprochée sous charge non mesurée par ces descriptions; conflit coaching conservé, arbitrage humain requis.
- Assets et enregistrements Tempo non inspectés dans ce complément.

**Audit catalogue** : Variante rapprochée sans diamant recoupée par Tiger Fitness, Men’s Health et Fitbod. Largeur relative, aucune distance ni obligation coudes collés. Conflit rétraction figée/protraction expliqué ; rôles musculaires non quantifiés.

<a id="ex15"></a>

### EX15 - Développé poitrine avec bande derrière le dos

**Variante** : Press debout bande plate autour haut du dos, sans ancrage porte. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds stables, décalage possible.
- Genoux : Souples.
- Bassin : Face devant.
- Colonne et tronc : Tronc stable, sans extension ajoutée.
- Tête et nuque : Regard devant.
- Omoplates : Accompagnent poussée, non verrouillées.
- Bras, mains et prise : Bande sous bras au thorax, hors cou ; mains tiennent extrémités, poignets alignés.

**Mouvement** : Pousser mains devant thorax par extension coudes.
**Fin** : Bras allongés sans tirer bande vers visage.
**Retour** : Replier coudes lentement en contrôlant rappel.
**Respiration** : Expirer poussée ; inspirer retour.

**Muscles documentés** : Pectoraux, triceps et deltoïdes nommés NCHPAD pour press.
**Inférences** : Tronc stabilise debout ; contributions exactes selon résistance.

**Erreurs et corrections**

- Bande cou : replacer sous bras et haut dos.
- Retour brusque : résistance plus faible.

**Régression** : Bande moins résistante ou geste sans bande.
**Installation** : Bande plate compatible fabricant ; inspecter entailles/usure ; pas d’objet coupant ni bijou accrochant ; prise ferme, longueur permettant fin mouvement sans dépasser notice ; risque retour tête à évaluer selon notice.

**Deux images attendues**

- A : parcours derrière dos et sous bras visible.
- B : mains devant thorax ; même parcours bande, jamais ancrage porte ajouté.

**Audio brouillon** : « Bande derrière le dos, hors du cou. » / « Expire et pousse devant toi. » / « Inspire et ramène les mains doucement. »

**Recoupement par champ**

- [University of California Berkeley - University Health Services - Resistance Band and Body Weight Exercises in Small Spaces](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf) (variante exacte) : Press debout derrière dos sous bras.
- [Peninsula Health - Physical Activity at Home - Standing](https://www.peninsulahealth.org.au/wp-content/uploads/Physical-Activity-at-Home-Standing.pdf) (variante exacte) : Même montage et retour lent.
- [National Center on Health, Physical Activity and Disability - Strengthening Exercises with Weights and Elastic Resistance Bands](https://www.nchpad.org/resources/strengthening-exercises-with-weights-and-elastic-resistance-bands/) (corroboration ciblée, limites ci-dessous) : Muscles et respiration.
- [The Hygenic Corporation / Thera-Band - Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) (matériel seulement) : Inspection, glissement, retour vers tête.

**Écarts et questions ouvertes**

- Notice spécifique de la bande utilisée à lire ; aucune transposition validée vers tubes/kit Decathlon.

**Audit catalogue** : Catalogue flat seul cohérent. La consigne « vérifier intégrité » ne suffit pas sans longueur, prise et parcours bande.

<a id="ex16"></a>

### EX16 - Développé haltères au sol

**Variante** : Développé bilatéral haltères, dos au sol. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds posés.
- Genoux : Fléchis.
- Bassin : Posé sur sol.
- Colonne et tronc : Courbure naturelle sans grand pont.
- Tête et nuque : Posée, regard plafond.
- Omoplates : En contact sol sans écrasement forcé.
- Bras, mains et prise : Haltère/main, prise fermée ; poignets au-dessus coudes, bras obliques.

**Mouvement** : Pousser haltères vers plafond.
**Fin** : Bras allongés au-dessus thorax, charges contrôlées.
**Retour** : Descendre jusqu’au contact léger arrière des bras avec sol, sans rebond.
**Respiration** : Expirer poussée ; inspirer descente.

**Muscles documentés** : Pectoraux/triceps par famille chest press.
**Inférences** : Deltoïde antérieur, stabilisateurs épaule/prise ; tronc ne doit pas être présenté comme gainage dominant.

**Erreurs et corrections**

- Rebond bras au sol : ralentir et marquer arrêt.
- Poignets pliés : réduire charge et réaligner.

**Régression** : Haltères plus légers ; pompe murale pour alternative.
**Installation** : Haltères intègres, verrouillages serrés si ajustables ; accès pose/repose sans charge au-dessus visage ; zone autour épaules dégagée.

**Deux images attendues**

- A : bras au sol, avant-bras visibles.
- B : poids au-dessus thorax, bassin au sol ; pas banc ni pont.

**Audio brouillon** : « Dos au sol, pieds posés, poignets alignés. » / « Expire et pousse les haltères au-dessus du thorax. » / « Inspire et repose doucement les bras au sol. »

**Recoupement par champ**

- [National Strength and Conditioning Association - Modification of Exercises to Allow Injured Individuals to Continue Training](https://www.nsca.com/certification/tsac-f/essentials-of-tactical-strength-training-and-conditioning-2nd-edition/excerpts/modification-of-exercises-to-allow-injured-individuals-to-continue-training/) (variante exacte) : Sol limite descente bras.
- [University of Arkansas System - Division of Agriculture - Stepping into Better Health FSFCS77](https://www.uaex.uada.edu/publications/PDF/FSFCS77.pdf) (corroboration ciblée, limites ci-dessous) : Floor press variation du chest press.
- [American Council on Exercise - Chest Press](https://www.acefitness.org/resources/everyone/exercise-library/19/chest-press/) (famille du mouvement) : Prise, respiration et contrôle.

**Écarts et questions ouvertes**

- Installation/repose haltères et prise exacte exigent revue pratique ; Arkansas variante concise.

**Audit catalogue** : Texte arrêt sol cohérent. Ajouter contact léger bras, mise en place et sortie avant audio.

<a id="ex17"></a>

### EX17 - Développé épaules avec haltères

**Variante** : Développé épaules debout deux haltères sans poussée jambes. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds stables, écart confortable.
- Genoux : Souples, pas de dip propulsif.
- Bassin : Sous thorax.
- Colonne et tronc : Rachis sans extension ajoutée.
- Tête et nuque : Neutre ; tête non projetée.
- Omoplates : Rotation vers haut autorisée pendant montée.
- Bras, mains et prise : Prise fermée, poignets alignés ; coudes légèrement devant épaules.

**Mouvement** : Pousser les deux haltères au-dessus avec coudes qui s’allongent, tronc stable.
**Fin** : Bras élevés à amplitude accessible sans dos qui se creuse.
**Retour** : Revenir haltères près épaules sans chute.
**Respiration** : Expirer montée ; inspirer descente.

**Muscles documentés** : Deltoïdes et triceps documentés ; étude originale confirme deltoïdes debout deux haltères.
**Inférences** : Coiffe/dentelé/trapèzes contribuent mouvement et stabilité, tronc stabilise ; pas pourcentages.

**Erreurs et corrections**

- Dos creusé : réduire charge/hauteur.
- Poids montés par rebond jambes : geste strict plus léger.

**Régression** : Sans poids ou moins de charge, amplitude réduite.
**Installation** : Deux haltères de charge contrôlée, fixations vérifiées ; hauteur plafond et zone de repose libres ; installation sans élan violent.

**Deux images attendues**

- A : haltères près épaules, avant-bras alignés.
- B : bras au-dessus, omoplates peuvent tourner ; pelvis ne bascule pas.

**Audio brouillon** : « Debout, haltères près des épaules, poignets droits. » / « Expire et pousse au-dessus sans cambrer. » / « Inspire et redescends doucement. »

**Recoupement par champ**

- [Eskenazi Health - Exercise of the Month: Dumbbell Shoulder Press](https://www.eskenazihealth.edu/news/exercise-of-the-month-dumbbell-shoulder-press) (variante exacte) : Deux poids, debout, montée/descente.
- [Saeterbakken et Fimland - Journal of Strength and Conditioning Research - Effects of body position and loading modality on muscle activity and strength in shoulder presses](https://pubmed.ncbi.nlm.nih.gov/23096062/) (corroboration ciblée, limites ci-dessous) : Variante debout deux haltères.
- [American Council on Exercise - Seated Overhead Press](https://www.acefitness.org/resources/everyone/exercise-library/45/seated-overhead-press/) (corroboration ciblée, limites ci-dessous) : Respiration et poignets.
- [National Strength and Conditioning Association - Modification of Exercises to Allow Injured Individuals to Continue Training](https://www.nsca.com/certification/tsac-f/essentials-of-tactical-strength-training-and-conditioning-2nd-edition/excerpts/modification-of-exercises-to-allow-injured-individuals-to-continue-training/) (corroboration ciblée, limites ci-dessous) : Rotation scapulaire overhead.

**Écarts et questions ouvertes**

- Conflit ACE omoplates fixes vs NSCA rotation ascendante : retenir liberté contrôlée, avis professionnel encore requis.

**Audit catalogue** : N’ajouter aucun « épaules toujours basses/omoplates serrées ». Vérifier carte shoulders trop générale si faisceaux individualisés.

<a id="ex18"></a>

### EX18 - Élévations latérales légères

**Variante** : Élévation latérale debout deux haltères légers. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds stables.
- Genoux : Souples.
- Bassin : Sous thorax.
- Colonne et tronc : Sans inclinaison pour lancer poids.
- Tête et nuque : Neutre.
- Omoplates : Accompagnent montée, éviter haussement excessif.
- Bras, mains et prise : Paumes vers cuisses départ, coudes légèrement fléchis, poignets droits.

**Mouvement** : Élever bras sur côtés, légèrement devant possible, sans modifier pli coude.
**Fin** : Hauteur contrôlée proche épaules ou moindre selon contrôle.
**Retour** : Redescendre par même trajet sans lancer poids.
**Respiration** : Expirer montée ; inspirer descente.

**Muscles documentés** : Deltoïde moyen/lateral corroboré ; trapèzes participent et ne sont pas « interdits ».
**Inférences** : Coiffe et muscles tronc stabilisent ; ordre exact non établi.

**Erreurs et corrections**

- Élan tronc : alléger.
- Haussement exagéré : réduire hauteur/résistance.

**Régression** : Sans charge ou plus faible amplitude.
**Installation** : Deux haltères légers, attaches serrées ; espace dégagé sur côtés et pas de charge difficile à contrôler.

**Deux images attendues**

- A : bras bas et coudes souples.
- B : bras levés de côté, pli coude identique, poignets sans torsion.

**Audio brouillon** : « Bras bas, coudes souples, poids légers. » / « Expire et lève les bras sur les côtés. » / « Inspire et redescends sans élan. »

**Recoupement par champ**

- [PureGym - équipe entraînement - Dumbbell Lateral Raise](https://www.puregym.com/exercises/arms-and-shoulders/lateral-raises/dumbbell-lateral-raise/) (variante exacte) : Petit pli coude et retour.
- [Cambridgeshire Community Services NHS Trust - Dynamic Health - Neck pain](https://dynamichealth.nhs.uk/help-and-advice/neck-pain/) (corroboration ciblée, limites ci-dessous) : Départ debout, poids petits, pas haussement.
- [American Council on Exercise - Dynamite Delts: ACE Research Identifies Top Shoulder Exercises](https://www.acefitness.org/continuing-education/prosource/september-2014/4972/dynamite-delts-ace-research-identifies-top-shoulder-exercises/) (corroboration ciblée, limites ci-dessous) : Muscles et variante levier plus court.

**Écarts et questions ouvertes**

- NHS coude droit vs PureGym souple : petite flexion stable choisie. PureGym petit doigt plus haut : ne pas forcer rotation interne.

**Audit catalogue** : La consigne légère et sans élan est pertinente ; hauteur, poignets et position scapulaire à expliciter.

<a id="ex19"></a>

### EX19 - Rowing bande sous les pieds

**Intégration locale :** variante tubes/poignées version 2 intégrée au prototype à la demande de Simon, revue humaine expressément sautée et aucune approbation déclarée. Version 1 et anciens médias conservés. Audio de préparation intégré via voix système, clips F1/M2 bloqués par quota 429.


**Brouillon de variante tubes avec poignées, 12 octobre 2026.** Deux chaussures gardent les appuis. Prises symétriques et paumes face à face; genoux souples, hanches reculées, nuque suit tronc. Tirer vers flancs/côtes basses en reculant coudes, tronc reste incliné; allonger bras en freinant rappel. Sweat décrit expiration tirage, inspiration retour, matériau band; soutien de famille pour version tube. Installation/sortie et compatibilité exacte du kit restent ouvertes. Aucun média ni audio produit. [Brief détaillé](tube-variants-draft.md).

Sources : [STR-MAYO-ROW-BAND](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/bent-over-row/vid-20084668), [STR-HAWKES-ROW](https://hawkesphysiotherapy.co.uk/exercise/exercise-band-bent-over-row/), [STR-PREHAB-ROW](https://theprehabguys.com/vimeo-video/bent-over-row-with-band/), [STR-SWEAT-ROW](https://sweat.com/exercises/resistance-band-bent-over-row).

**Matériel réel de Simon :** kit 8975309 et bande textile courte uniquement. Notice exacte non obtenue. Photos fournies : tubes sous deux chaussures et composants visibles ; exercice complet non identifiable, compatibilité par exercice encore à établir. [Décision et pièce manquante](kit-mounting-review.md).

**Variante** : Rowing buste incliné, bande sous deux pieds. **État** : recoupement documentaire partiel ; revue humaine absente.

**Placement de départ**

- Pieds : Deux semelles sur bande, écart confortable.
- Genoux : Souples.
- Bassin : Hanches reculées.
- Colonne et tronc : Dos neutre en inclinaison.
- Tête et nuque : Suit angle du tronc, regard sol.
- Omoplates : Se rapprochent au tirage sans haussement imposé.
- Bras, mains et prise : Prise ferme, paumes face à face si poignées ; coudes près tronc.

**Mouvement** : Depuis charnière stable, tirer les mains vers flancs en reculant coudes.
**Fin** : Arrêt avant tronc qui remonte ou épaule hausse.
**Retour** : Allonger bras doucement sans lâcher rappel bande.
**Respiration** : Expirer tirage ; inspirer retour.

**Muscles documentés** : Mayo souligne deltoïde postérieur ; famille rowing dos et fléchisseurs coude.
**Inférences** : Grand dorsal/rhomboïdes/trapèzes et tronc/ischios participent selon trajectoire ; classement back/lats principal non mesuré exact.

**Erreurs et corrections**

- Dos change angle : réduire tension.
- Bande glisse : arrêter puis refaire installation.

**Régression** : Geste charnière sans bande, bande plus légère.
**Installation** : Bande/tubes expressément compatibles sous semelles ; inspecter bande et connecteurs ; pression pieds maintenue, extrémités prises à longueur égale ; pas de réglage tension pendant série.

**Deux images attendues**

- A : bande sous deux pieds, bras allongés.
- B : coudes reculés ; tronc et pieds inchangés, longueur bande augmente.

**Audio brouillon** : « Bande sous les deux pieds, incline le buste. » / « Expire et tire vers les flancs. » / « Inspire et allonge les bras sans lâcher la bande. »

**Recoupement par champ**

- [Mayo Clinic - Video: Bent-over row with resistance tubing](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/bent-over-row/vid-20084668) (variante exacte avec tube) : Tubes sous deux pieds, paumes dedans.
- [University of California Berkeley - University Health Services - Resistance Band and Body Weight Exercises in Small Spaces](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf) (corroboration ciblée, limites ci-dessous) : Rowing sous pied, tronc stable.
- [The Hygenic Corporation / Thera-Band - Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) (matériel seulement) : Inspection, fixation et retour.
- [Hawkes Physiotherapy - Exercise band Bent over row](https://hawkesphysiotherapy.co.uk/exercise/exercise-band-bent-over-row/) (ancrage exact, forme bande non précisée) : Deux pieds sur centre bande, deux extrémités, charnière et retour lent.
- [Hinge Health - guide clinique original - How to do a bent over row](https://www.hingehealth.com/resources/articles/bent-over-row/) (variante bande exacte, description brève) : Variante sur bande et tenue bilatérale en charnière.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Le geste et le maintien sous deux pieds sont recoupés par Mayo, Hawkes et Hinge Health. La forme plate/tube de Hawkes et Hinge n’est pas explicite : compatibilité bande plate précise et notice produit restent à corroborer.
- Hawkes pieds joints/tronc parallèle versus Mayo écart épaules : garder écart stable et inclinaison contrôlée, sans angle universel.

**Audit catalogue** : Ajouter nuque dans axe et genoux souples ; back+lats double catégories se chevauchent ; audit stabilisateurs à préciser.

### Recoupement complémentaire du 12 octobre 2026

Conserver montage sous deux pieds déjà recoupé, sans l’assimiler au guide PT² ancré devant. Nouvelle recherche ne résout pas la compatibilité bande plate/tube du matériel réel.

- **Positions :** Noyau bilatéral déjà recoupé; nouveau guide exclu comme confirmation du montage.
- **Muscles :** Famille de tirage seulement, pas nouveau résultat EMG ou carte du montage réel.
- **Conseils :** Notice, prise et sortie à obtenir pour modèle choisi; aucune fabrication de système de fixation.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [STR-MAYO-ROW-BAND](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/bent-over-row/vid-20084668), [STR-HAWKES-ROW](https://hawkesphysiotherapy.co.uk/exercise/exercise-band-bent-over-row/), [STR-HINGE-ROW](https://www.hingehealth.com/resources/articles/bent-over-row/), [STR-THERABAND](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf), [STR-PT2-ROW-SCREENED](https://www.pt2austin.com/movement-library/bent-over-row-resistance-band).

<a id="ex20"></a>

### EX20 - Rowing haltère unilatéral sans banc

**Variante** : Rowing unilatéral sans banc, main sur cuisse avant. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Décalés, avant entier posé.
- Genoux : Avant fléchi, arrière souple.
- Bassin : Face sol, stable.
- Colonne et tronc : Hanches en charnière, courbures naturelles.
- Tête et nuque : Dans prolongement dos.
- Omoplates : Omoplate mobile au tirage, pas haussement.
- Bras, mains et prise : Main libre sur cuisse, autre prise fermée, bras vers sol.

**Mouvement** : Reculer coude et tirer haltère vers bas des côtes/hanche selon trajectoire retenue.
**Fin** : Arrêt avant buste qui pivote ou épaule hausse.
**Retour** : Redescendre bras doucement ; changer côté après série.
**Respiration** : Expirer tirage ; inspirer retour.

**Muscles documentés** : Grand dorsal/dos documentés famille rowing.
**Inférences** : Biceps/deltoïde postérieur assistent, tronc stabilise rotation ; classement exact non établi.

**Erreurs et corrections**

- Buste tourne : alléger, raccourcir tirage.
- Épaule hausse : suivre coude vers arrière plutôt que haut.

**Régression** : Poids plus léger ; appui banc fixe implique autre variante.
**Installation** : Un haltère intact, verrouillage vérifié ; main cuisse sans pousser directement sur articulation genou ; sol et zone de repose dégagés.

**Deux images attendues**

- A : main sur cuisse identifiable.
- B : charge bas côtes/hanche, bassin/épaules même orientation ; pas banc inventé.

**Audio brouillon** : « Appuis décalés, main libre sur la cuisse. » / « Expire et ramène le coude vers la hanche. » / « Inspire et redescends sans tourner le buste. »

**Recoupement par champ**

- [Verywell Fit - Elizabeth Quinn, guide technique original - How to Do a One-Arm Dumbbell Row](https://www.verywellfit.com/one-arm-dumbbell-row-3120040) (corroboration ciblée, limites ci-dessous) : Sans banc, appui cuisse.
- [American Council on Exercise - Single-arm Row](https://www.acefitness.org/resources/everyone/exercise-library/126/single-arm-row/) (corroboration ciblée, limites ci-dessous) : Contrôle rotation, respiration et coudes.
- [Physical Therapy First - Shoulder Bent Over Row with Dumbbell - description originale de la vidéo](https://www.youtube.com/watch?v=LKiQLVQpe5I) (option exacte avec main sur cuisse) : Haltère, appui main cuisse possible, tirage bas côtes/hanche et absence rotation.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Deux guides originaux indépendants décrivent appui cuisse : Physical Therapy First et Verywell. Le trajet bas côtes/hanche est corroboré par PTF, alors que Verywell cible davantage poitrine ; ne pas tirer coude haut derrière dos pour gagner amplitude.
- Description PTF lue, vidéo non inspectée. Appuis décalés proviennent de Verywell ; revoir installation et trajectoire réelle sur sujet humain.

**Audit catalogue** : Fiche doit annoncer changement côté après série ; conserver orientation épaules sans bloquer omoplate.

<a id="ex21"></a>

### EX21 - Écartement de bande devant soi

**Variante** : Pull-apart bande plate horizontal devant thorax. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Écart stable.
- Genoux : Souples.
- Bassin : Sous thorax.
- Colonne et tronc : Sans extension pour tirer.
- Tête et nuque : Regard devant, nuque neutre.
- Omoplates : Se rapprochent sans haussement volontaire.
- Bras, mains et prise : Bras devant poitrine, coudes allongés sans verrouillage forcé ; deux mains paumes vers le bas pour cette version.

**Mouvement** : Écarter mains horizontalement en ouvrant bras.
**Fin** : Arrêt contrôlé, bras de côté sans pousser épaules derrière amplitude accessible.
**Retour** : Revenir devant en freinant rappel.
**Respiration** : Expirer ouverture ; inspirer retour.

**Muscles documentés** : Deltoïde postérieur, trapèzes et coiffe mesurés étude NISMAT ; rhomboïdes aussi décrits qualitativement par BHF et Hinge Health.
**Inférences** : Le tronc contribue au maintien ; hiérarchie dépend prise/direction. La participation rhomboïdes est documentée en guides cliniques mais non mesurée dans l’étude citée.

**Erreurs et corrections**

- Haussement : alléger et réduire hauteur.
- Retour claqué : freiner et réduire résistance.

**Régression** : Prise plus large ou bande plus légère.
**Installation** : Bande plate inspectée, sans coupures ; longueur/prise selon notice ; pas contact cou/visage ni lâcher pour finir ; retour vers tête à évaluer.

**Deux images attendues**

- A : bande devant thorax, bras longs et paumes vers le bas visibles.
- B : bras ouverts horizontalement, hauteur conservée ; ni flexion coudes en rowing ni ouverture diagonale.

**Audio brouillon** : « Bande devant poitrine, bras longs, paumes vers le bas. » / « Expire et écarte les mains en contrôle. » / « Inspire et reviens sans laisser claquer la bande. »

**Recoupement par champ**

- [Fukunaga et al. - International Journal of Sports Physical Therapy / NISMAT - Band Pull-Apart Exercise: Effects of Movement Direction and Hand Position on Shoulder Muscle Activity](https://ijspt.org/wp-content/uploads/2022/03/9-Tyler.pdf) (variante exacte) : Horizontal avec prises multiples, muscles mesurés.
- [Will Ruth - RowingStronger - Resistance Band Rowing Strength Training](https://rowingstronger.com/wp-content/uploads/2019/01/Resistance-Band-Rowing-Strength-Training.pdf) (corroboration ciblée, limites ci-dessous) : Famille pull-apart et groupes cibles.
- [The Hygenic Corporation / Thera-Band - Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) (matériel seulement) : Prise et contrôle élastique.
- [Hinge Health - guide clinique original - How to Do Band Pull Aparts: A Hinge Health Guide](https://www.hingehealth.com/resources/articles/band-pull-aparts/) (variante exacte) : Pull-apart debout horizontal devant thorax, paumes bas.
- [British Heart Foundation - Hara Markos - Resistance band exercises you can do at home in 10 minutes](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/resistance-bands) (variante exacte) : Bras longs, paumes bas, ouverture horizontale et retour.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Version paumes bas fixée pour cohérence texte/média/audio, corroborée Hinge et BHF. L’étude Fukunaga montre que paumes haut change profil musculaire : cette autre prise mérite autre variante si proposée.
- Rhomboïdes décrits BHF/Hinge mais non mesurés dans étude NISMAT ; contribution qualitative, aucun pourcentage. Notice bande précise et revue des médias restent requises.

**Audit catalogue** : Fixer paumes bas dans texte et médias. Geste et groupes musculaires recoupés par trois éditeurs indépendants. Ne pas fusionner rotation externe coudes collés avec pull-apart horizontal.

<a id="ex22"></a>

### EX22 - Rétraction scapulaire en W au sol

**Variante** : W sur ventre, bras petits déplacements. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Dessus pieds au sol, jambes relâchées.
- Genoux : Allongés sans tension imposée.
- Bassin : Posé.
- Colonne et tronc : Pas d’extension lombaire pour hausser bras.
- Tête et nuque : Front sur serviette fine possible, nuque alignée.
- Omoplates : Rapprochement contrôlé.
- Bras, mains et prise : Coudes pliés formant W, mains orientation à fixer pour média.

**Mouvement** : Lever légèrement bras et rapprocher omoplates en gardant thorax bas.
**Fin** : Petite hauteur, tête et bassin restent posés.
**Retour** : Reposer bras doucement.
**Respiration** : Expirer levée ; inspirer repos, souffle libre pendant maintien éventuel.

**Muscles documentés** : Zone scapulaire/épaules corroborée par ACE et NHS.
**Inférences** : Rhomboïdes/trapèzes, rotateurs externes et deltoïde postérieur selon orientation W ; core pas moteur dynamique principal.

**Erreurs et corrections**

- Tête levée : front supporté.
- Dos cambre : lever moins haut.

**Régression** : Rapprocher omoplates sans décoller bras.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : W visible vu arrière trois quarts.
- B : bras légèrement levés, thorax/bassin/front restent bas ; pas cobra.

**Audio brouillon** : « Sur le ventre, bras en W, nuque longue. » / « Expire et lève légèrement les bras. » / « Inspire et repose doucement. »

**Recoupement par champ**

- [American Council on Exercise - Prone Scapular Stabilization Series - I, Y, T, W, O](https://www.acefitness.org/resources/everyone/exercise-library/249/prone-scapular-shoulder-stabilization-series-i-y-t-w-o-formation/) (corroboration ciblée, limites ci-dessous) : W au sol et nuque.
- [Wrightington Wigan and Leigh Teaching Hospitals NHS Foundation Trust - Neck and Upper Back Exercises Level 3](https://www.wwl.nhs.uk/media/.leaflets/657835a18e50d7.90662950.pdf) (variante exacte) : Départ W, serviette et levée petite.

**Écarts et questions ouvertes**

- Angle bras/palmes différent entre guides ; version départ W retenue, hauteur limité tronc NHS. ACE légère extension lombaire acceptable ne devient pas objectif.

**Audit catalogue** : Pas seulement « haut dos » : coiffe/épaules selon variante. Core stabilisateur déduit, non validé source pour ce geste.

<a id="ex23"></a>

### EX23 - Extension triceps avec bande sous un pied

**Matériel réel de Simon :** kit 8975309 et bande textile courte uniquement. Notice exacte non obtenue. Photos fournies : tubes sous deux chaussures et composants visibles ; exercice complet non identifiable, compatibilité par exercice encore à établir. [Décision et pièce manquante](kit-mounting-review.md).

**Variante** : Extension triceps bilatérale avec bande sous un pied : proposition conditionnelle. **État** : recoupement documentaire partiel ; revue humaine absente.

**Placement de départ**

- Pieds : Appuis décalés, bande sous pied arrière selon montage à confirmer.
- Genoux : Souples.
- Bassin : Sous thorax.
- Colonne et tronc : Sans cambrure pour tirer.
- Tête et nuque : Neutre, hors trajet bande.
- Omoplates : Rotation ascendante possible bras élevés.
- Bras, mains et prise : Mains derrière tête, bras supérieurs stables ; prise bilatérale non homologuée ici.

**Mouvement** : Étendre les coudes vers haut sans lâcher bande.
**Fin** : Bras élevés, tension contrôlée et ancrage pied conservé.
**Retour** : Replier coudes lentement derrière tête.
**Respiration** : Expirer extension ; inspirer flexion.

**Muscles documentés** : Triceps documenté pour famille extension overhead.
**Inférences** : Épaule/coiffe stabilise bras ; shoulders secondaire catalogue ne signifie pas élévation dynamique recherchée.

**Erreurs et corrections**

- Pied se soulève/bande glisse : interrompre et refaire montage.
- Dos cambre : diminuer résistance.

**Régression** : Geste sans bande ; autre extension documentée avec haltère léger nécessite son installation propre.
**Installation** : Modèle Decathlon 8975309 distinct d’une bande plate. Pour chaque matériel : notice montage sous pied, longueur utile, prise bilatérale, connecteurs et trajet de recul vers tête à contrôler. Aucune compatibilité du modèle sous semelle établie par ce dossier.

**Deux images attendues**

- A : parcours pied arrière-vers mains visible sans passer sur visage.
- B : coudes étendus, pied ancré ; n’accepter aucun tube inventé sans notice.

**Audio brouillon** : « Vérifie le montage de la bande avant de commencer. » / « Expire et tends les coudes sans cambrer. » / « Inspire et replie les coudes doucement. »

**Recoupement par champ**

- [University of California Berkeley - University Health Services - Resistance Band and Body Weight Exercises in Small Spaces](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf) (corroboration ciblée, limites ci-dessous) : Ancrage pied arrière et extension overhead unilatérale.
- [American Council on Exercise - Triceps Extension](https://www.acefitness.org/resources/everyone/exercise-library/74/triceps-extension/) (corroboration ciblée, limites ci-dessous) : Bras supérieurs et respiration.
- [The Hygenic Corporation / Thera-Band - Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) (matériel seulement) : Inspection, prise, retour possible vers tête.
- [Decathlon / Domyos - Kit de résistance de musculation compact avec 5 élastiques - réf. 8975309](https://www.decathlon.fr/p/kit-de-resistance-de-musculation-compact-avec-5-elastiques/375819/c1m8975309) (identification modèle seulement) : Kit utilisateur identifié ; fiche n’apporte pas installation sous un pied.
- [World Archery - copie hébergée Fédération islandaise de tir à l’arc - Coaches Manual Entry Level - Strengthening with an elastic](https://bogfimi.is/wp-content/uploads/2019/09/11-%C3%86fingar-Almennur-Styrkur-lvl1.pdf) (candidate exclue comme preuve exacte) : Candidate exclue : textes/photos ne distinguent pas extension coude et press overhead.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Deux descriptions bilatérales supplémentaires consultées: Zing sous un pied et Oxygen avec enroulement autour pied arrière. Le noyau coude/tête est renforcé; les deux montages ne sont pas identiques et aucune notice du kit réel ne les approuve.
- Kit Decathlon 8975309 identifié, longueur 124 cm annoncée, mais notice spécifique sous semelle et extension derrière tête introuvable dans texte public récupéré. Ne pas utiliser notice d’un autre kit pour l’homologuer.
- La posture proposée pied arrière en appuis décalés est conditionnelle. Les médias Tempo ne démontrent pas ici l’ancrage sous semelle ; revue mécanique et humaine obligatoire.

**Audit catalogue** : Priorité matérielle : flat+tube catalogue trop général sans notice. Ajouter pied arrière, prise et méthode mise en place uniquement après vérification fabricant.

### Recoupement complémentaire du 12 octobre 2026

Retenir bilatéral derrière tête comme variante documentaire. Sous-semelle Zing et enroulement Oxygen restent deux montages distincts: ne pas inventer un nœud ou une fixation. Compatibilité kit réel toujours non résolue.

- **Positions :** Deux mains et extension coude désormais décrites par deux éditeurs distincts; position exacte de la bande sous pied et longueur réelle non recoupées.
- **Muscles :** Triceps nommé Zing et famille ACE; pas mesure précise ni attribution de chefs musculaires.
- **Conseils :** Retour lent recoupé; installation et sortie sous tension exigent notice réelle et revue.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [STR-BERKELEY-BANDS](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf), [STR-OXYGEN-TRICEPS](https://www.oxygenmag.com/video/resistance-band-two-arm-overhead-triceps-extension/?scope=anon), [STR-ZING-TRICEPS](https://www.zing.coach/exercises/band-tricep-extensions), [STR-THERABAND](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf).

<a id="ex24"></a>

### EX24 - Extension triceps haltère au-dessus de la tête

**Variante** : Extension triceps debout, un seul haltère tenu à deux mains. Proposition illustrer haltère à tête fixe avec prise en coupe compatible avec sa forme; autre matériel exige vérification spécifique.. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds stables, décalage possible.
- Genoux : Souples.
- Bassin : Sous thorax.
- Colonne et tronc : Neutre sans extension pour gagner amplitude.
- Tête et nuque : Regard devant, poids ne touche pas tête.
- Omoplates : Permettre placement naturel des omoplates pendant installation en élévation, puis maintenir soutien sans forcer épaules au plus bas ni les pincer. Coudes ne doivent pas être serrés l’un contre l’autre à tout prix.
- Bras, mains et prise : Pour un haltère compatible: soutenir la tête supérieure avec les deux paumes orientées vers plafond, doigts autour de la partie fixe permettant une prise ferme; haltère orienté principalement vertical, masse inférieure derrière mains. Ne pas suspendre un assemblage par disque/collier amovible ni saisir un embout sans vérifier fabricant et verrouillage.

**Mouvement** : Bras supérieurs dirigés vers haut près tête à largeur confortable. Depuis coudes fléchis et poids derrière tête, expirer et étendre les coudes sans balancer bras supérieurs ou cambrer pour aider.
**Fin** : Allonger coudes sous contrôle, haltère au-dessus tête, sans claquement ni hyperextension. Épaules restent soutenues dans leur position overhead confortable.
**Retour** : Inspirer et fléchir les coudes lentement; poids descend derrière tête sans la toucher. Stopper avant que bras supérieurs partent en arrière, tronc se cambre ou prise se dégrade. Angle 90° ACE est un repère possible, pas cible obligatoire pour chacun.
**Respiration** : Expirer extension ; inspirer flexion.

**Muscles documentés** : Triceps documenté ACE ; muscles épaule maintiennent position.
**Inférences** : Coiffe et tronc stabilisent ; shoulders secondaire ne représente pas forcément moteur.

**Erreurs et corrections**

- Bassin avancé/dos creusé: alléger et réduire course, retrouver thorax au-dessus bassin.
- Coudes écartés forcés ou bras basculent: diminuer charge/course et garder orientation confortable.
- Prise glissante ou incompatible: arrêter, reposer puis changer matériel, pas improviser.
- Douleur coude/épaule/poignet: cesser série; amplitude réduite ne garantit pas tolérance.

**Régression** : Plus faible charge ; geste sans charge.
**Installation** : Prise en coupe uniquement avec haltère dont tête fixe et forme la permettent ; aucune suspension par disque/collier amovible. Vérifier assemblage et prise réelle avant mise en place/repose. Aucun modèle réel homologué ici.

**Deux images attendues**

- A : mains derrière tête et prise visible.
- B : haltère haut, bras supérieurs orientation similaire ; poids hors tête.

**Audio brouillon** : « Prise stable à deux mains, tronc gainé. » / « Expire et tends les coudes sans cambrer. » / « Inspire et redescends derrière la tête en contrôle. »

**Recoupement par champ**

- [American Council on Exercise - Triceps Extension](https://www.acefitness.org/resources/everyone/exercise-library/74/triceps-extension/) (variante exacte) : Haltère deux mains debout.
- [University of Illinois Extension - Overhead Triceps Extension](https://eat-move-save.extension.illinois.edu/move/exercise/overhead-triceps-extension) (corroboration ciblée, limites ci-dessous) : Mécanique bilatérale derrière tête.
- [National Center on Health, Physical Activity and Disability - Strengthening Exercises with Weights and Elastic Resistance Bands](https://www.nchpad.org/resources/strengthening-exercises-with-weights-and-elastic-resistance-bands/) (corroboration ciblée, limites ci-dessous) : Triceps, contrôle et respiration.
- [PureGym - How To Do Overhead Tricep Extensions](https://www.puregym.com/exercises/arms-and-shoulders/tricep-extension/overhead-tricep-extension/) (corroboration ciblée, limites ci-dessous) : Prise extrémité en coupe à deux mains; mouvement behind-head.
- [Fitbod - Standing Dumbbell Tricep Extension - reviewed Jim Parker CPT, BA Kinesiology](https://fitbod.me/exercises/standing-dumbbell-tricep-extension) (variante exacte) : Tête haltère deux mains, posture debout, contrôle montée/descente.
- [Myprotein - Build Muscle Guide 3 - Standing dumbbell tricep extension](https://s1.thcdn.com/design-assets/documents/myprotein/Myprotein-Build-Muscle-Guide-3.pdf) (variante exacte) : Texte debout un haltère deux mains, haut-bas-haut.
- [National Strength and Conditioning Association - Modification of Exercises to Allow Injured Individuals to Continue Training](https://www.nsca.com/certification/tsac-f/essentials-of-tactical-strength-training-and-conditioning-2nd-edition/excerpts/modification-of-exercises-to-allow-injured-individuals-to-continue-training/) (corroboration ciblée, limites ci-dessous) : Limiter cue de dépression/rétraction pendant installation bras élevés.

**Complément intégré** : descriptions indépendantes supplémentaires incorporées dans cette fiche ; propositions de prise, sortie et critères média restent à reviewer humainement.

**Sortie de position** : Ramener charge dans une position de repose contrôlée avec les deux mains. Si passage overhead vers repose n’est pas maîtrisé avec poids léger, ne pas commencer série; apprentissage humain requis pour ce matériel.

**Critère média complémentaire** : A coudes fléchis derrière tête; B coudes allongés, même prise/identité haltère. Vue trois quarts rend prise et distance à tête visibles, profil contrôle bassin et bras supérieurs. Un gros plan prise est nécessaire pour distinguer tête fixe et disque amovible.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Compatibilité de la prise en coupe avec le modèle réellement possédé, fixation et dimensions; aucun fabricant/modèle fourni.
- Séquence détaillée de mise en place/repose selon charge et morphologie à contrôler humainement; guides consultés ne fournissent pas procédure commune.
- Trajectoire scapulaire exacte pendant flexion/extension coude overhead non démontrée par NSCA: source indirecte, pas validation de chaque image.
- Assets et enregistrements Tempo non inspectés; humanTechnicalReview reste null.

**Audit catalogue** : Version debout un haltère deux mains recoupée ACE/PureGym/Fitbod/Myprotein. Définir prise concrète compatible, éviter cue absolu poignets rectilignes contradictoire avec paumes vers plafond. Omoplates ne doivent pas être bloquées pendant installation overhead.

<a id="ex25"></a>

### EX25 - Curl haltères

**Variante** : Curl bilatéral haltères en supination. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Écart stable.
- Genoux : Souples.
- Bassin : Sous thorax.
- Colonne et tronc : Sans balancement.
- Tête et nuque : Neutre.
- Omoplates : Repos, pas haussement.
- Bras, mains et prise : Bras bas, paumes devant puis vers haut, poignets dans avant-bras.

**Mouvement** : Fléchir coudes pour rapprocher poids des épaules sans déplacer bras supérieurs.
**Fin** : Avant perte de position coude ou poignet.
**Retour** : Allonger coudes doucement, sans claquer.
**Respiration** : Expirer flexion ; inspirer descente.

**Muscles documentés** : Biceps nommés Mayo.
**Inférences** : Brachial/brachioradial et prise assistent ; tronc stabilise. Forearms secondaire catalogue trop global pour hiérarchie précise.

**Erreurs et corrections**

- Buste balance : réduire poids.
- Poignet casse : réaligner et alléger.

**Régression** : Assis, poids plus léger ou bras alternés.
**Installation** : Deux haltères légers contrôlés, attaches vérifiées ; distance pieds/charges suffisante, zone de repose accessible.

**Deux images attendues**

- A : bras bas, paumes devant.
- B : coudes fléchis, mêmes bras supérieurs ; pas prise marteau involontaire.

**Audio brouillon** : « Paumes vers l’avant, poignets droits. » / « Expire et plie les coudes sans balancer. » / « Inspire et redescends lentement. »

**Recoupement par champ**

- [Mayo Clinic - Video: Biceps curl with dumbbell](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/biceps-curl/vid-20084675) (corroboration ciblée, limites ci-dessous) : Supination, coude stable, poignet droit.
- [NHS - Strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/) (corroboration ciblée, limites ci-dessous) : Deux petits poids debout, bras près corps.

**Écarts et questions ouvertes**

- Respiration phase proposée par principe effort, non imposée par transcription Mayo. Variation bilatérale vs alternée à garder cohérente.

**Audit catalogue** : « Poignets neutres » veut dire sans pli ; expliciter paumes supination pour éviter confusion curl marteau.

<a id="ex26"></a>

### EX26 - Curl avec bande sous les pieds

**Intégration locale :** variante tubes/poignées version 2 intégrée au prototype à la demande de Simon, revue humaine expressément sautée et aucune approbation déclarée. Version 1 et anciens médias conservés. Audio de préparation intégré via voix système, clips F1/M2 bloqués par quota 429.


**Brouillon de variante tubes avec poignées, 12 octobre 2026.** Deux chaussures gardent les appuis. Une poignée par main, paumes tournées vers avant/haut, poignets alignés, coudes près du buste. Fléchir coudes sans lancer buste ni avancer bras supérieurs; redescendre en freinant rappel. Vissco tube décrit expiration flexion, inspiration retour; bilatéral pieds confirmé aussi par autres descriptions. Installation/sortie et compatibilité exacte du kit restent ouvertes. Aucun média ni audio produit. [Brief détaillé](tube-variants-draft.md).

Sources : [STR-VISSCO-CURL](https://www.vissco.com/physiotherapy-exercise/bicep-curl-with-resistance-tube/), [STR-MAYO-CURL-BAND](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/biceps-curl/vid-20084666), [STR-BERKELEY-BANDS](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf), [STR-BHF-BANDS](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/resistance-bands), [STR-BROADLY-CURL](https://improvinglivesnw.org.uk/wp-content/foliolabs-files/docman-files/ics-publications-1/while-you-wait/Gentle%20Home%20Exercises%20Booklet-Final.pdf).

**Matériel réel de Simon :** kit 8975309 et bande textile courte uniquement. Notice exacte non obtenue. Photos fournies : tubes sous deux chaussures et composants visibles ; exercice complet non identifiable, compatibilité par exercice encore à établir. [Décision et pièce manquante](kit-mounting-review.md).

**Variante** : Curl bilatéral bande sous deux pieds. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Deux semelles ancrent bande.
- Genoux : Souples.
- Bassin : Sous thorax.
- Colonne et tronc : Sans balancement.
- Tête et nuque : Neutre.
- Omoplates : Relâchées.
- Bras, mains et prise : Extrémité/main, paumes devant/haut, poignets droits ; coudes au corps.

**Mouvement** : Fléchir coudes sans soulever pieds ni déplacer bras supérieurs.
**Fin** : Mains remontées à hauteur contrôlée, prises/ancrage conservés.
**Retour** : Redescendre en freinant rappel.
**Respiration** : Expirer flexion ; inspirer descente.

**Muscles documentés** : Biceps corroborés Mayo pour tubing ; tronc cité.
**Inférences** : Fléchisseurs coude et muscles prise assistent ; rôle quantitatif non établi.

**Erreurs et corrections**

- Bande glisse : interrompre, refaire ancrage.
- Buste balance : réduire tension.

**Régression** : Bande plus légère, geste sans bande.
**Installation** : Inspection bande et poignées/connecteurs ; ancrage sous deux semelles selon notice, longueur symétrique, prise ferme ; ne pas changer écart pieds sous tension.

**Deux images attendues**

- A : bande sous deux pieds et prises égales.
- B : mains hautes, pieds restent posés ; pas ancrage un seul pied dessiné.

**Audio brouillon** : « Bande sous les deux pieds, coudes près du buste. » / « Expire et plie les coudes. » / « Inspire et redescends en contrôlant la bande. »

**Recoupement par champ**

- [University of California Berkeley - University Health Services - Resistance Band and Body Weight Exercises in Small Spaces](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf) (variante exacte) : Deux pieds et curl bilatéral.
- [Mayo Clinic - Video: Biceps curl with resistance tubing](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/biceps-curl/vid-20084666) (corroboration ciblée, limites ci-dessous) : Poignet et coude.
- [The Hygenic Corporation / Thera-Band - Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) (matériel seulement) : Inspection et prise.
- [Vissco - fabricant et bibliothèque physiothérapie - Bicep Curl with Resistance Tube](https://www.vissco.com/physiotherapy-exercise/bicep-curl-with-resistance-tube/) (variante exacte avec tube) : Curl tubing avec centre sous pieds et extrémité/main, respiration précise.
- [British Heart Foundation - Hara Markos - Resistance band exercises you can do at home in 10 minutes](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/resistance-bands) (variante exacte avec bande longue) : Curl bande longue sous deux pieds possible, deux mains, paumes haut.
- [Decathlon / Domyos - Kit de résistance de musculation compact avec 5 élastiques - réf. 8975309](https://www.decathlon.fr/p/kit-de-resistance-de-musculation-compact-avec-5-elastiques/375819/c1m8975309) (identification modèle seulement) : Kit exact et longueur ; pas de notice montage semelles.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Curl bilatéral sous deux pieds recoupé Berkeley, BHF et Vissco ; tube explicitement décrit Vissco, bande longue BHF. La compatibilité du kit Decathlon 8975309 lui-même reste non démontrée : page produit ne décrit pas ancrage semelles.
- Notice réelle requise pour chaque modèle, poignée/connecteur et longueur. Résistances nominales Decathlon ne sont pas masses d’haltères ni forces constantes pendant mouvement.

**Audit catalogue** : Geste, deux pieds, supination et respiration recoupés. Flat/tube désignent deux matériels documentés, mais pas une interchangeabilité automatique entre modèles. Garder kit seul indisponible avant visuels adaptés et revue.

<a id="ex37"></a>

### EX37 - Squat goblet léger

**Variante** : Goblet squat léger, haltère vertical proche thorax. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Entiers posés, écart confortable.
- Genoux : Suivent direction pieds.
- Bassin : Au-dessus appuis.
- Colonne et tronc : Courbures naturelles.
- Tête et nuque : Regard légèrement devant.
- Omoplates : Stables pour porter sans pincement excessif.
- Bras, mains et prise : Haltère vertical contre thorax, prise deux mains adaptée, coudes proches.

**Mouvement** : Fléchir hanches et genoux en gardant charge près poitrine.
**Fin** : Profondeur sans talons levés ni rachis qui s’arrondit.
**Retour** : Pousser les pieds et étendre hanches/genoux ensemble.
**Respiration** : Inspirer descente ; expirer remontée.

**Muscles documentés** : Quadriceps/fessiers corroborés NASM ; tronc et haut dos maintien charge.
**Inférences** : Ischio-jambiers participent selon amplitude ; ne pas présenter comme moteur majeur établi.

**Erreurs et corrections**

- Charge s’éloigne : la rapprocher/alléger.
- Talons décollent : réduire amplitude.

**Régression** : Squat sans charge ou assis-debout.
**Installation** : Haltère et prise goblet adaptés, embout/disque sécurisé ; pas de prise sur pièce amovible ; espace pour flexion et repose.

**Deux images attendues**

- A : prise deux mains et charge thorax visibles.
- B : squat, poids toujours proche thorax, talons posés.

**Audio brouillon** : « Garde l’haltère près de la poitrine. » / « Inspire et descends à ton amplitude. » / « Expire et relève-toi, charge près du corps. »

**Recoupement par champ**

- [American Council on Exercise - Goblet Squat](https://www.acefitness.org/resources/everyone/exercise-library/362/goblet-squat/) (variante exacte) : Haltère vertical et maintien.
- [National Academy of Sports Medicine - The Goblet Squat: A Trainer’s Coaching and Programming Guide](https://www.nasm.org/resource-center/blog/training/how-to-perform-goblet-squats) (variante exacte) : Amplitude neutre, quadriceps/fessiers.
- [American Council on Exercise - Bodyweight Squat](https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/) (famille du mouvement) : Respiration et appuis.

**Écarts et questions ouvertes**

- ACE profondeur sous genoux vs NASM neutre : pas seuil imposé. NASM pointes droites et légèrement ouvertes sont deux options, pas contradiction à imposer utilisateur.

**Audit catalogue** : Catalogue cohérent ; « léger » décrit capacité de contrôle, pas poids universel.

<a id="ex38"></a>

### EX38 - Charnière de hanches avec bande sous les pieds

**Matériel réel de Simon :** kit 8975309 et bande textile courte uniquement. Notice exacte non obtenue. Photos fournies : tubes sous deux chaussures et composants visibles ; exercice complet non identifiable, compatibilité par exercice encore à établir. [Décision et pièce manquante](kit-mounting-review.md).

**Variante** : Charnière type soulevé roumain, bande plate sous deux pieds. **État** : recoupement documentaire partiel ; revue humaine absente.

**Placement de départ**

- Pieds : Deux pieds posés sur bande à plat.
- Genoux : Déverrouillés, pli faible et stable.
- Bassin : Hanches reculent.
- Colonne et tronc : Courbures conservées en inclinaison.
- Tête et nuque : Suit tronc, regard sol devant.
- Omoplates : Stables sans tirer épaules en arrière en fin.
- Bras, mains et prise : Extrémité/main, bras allongés près jambes, prise ferme.

**Mouvement** : Reculer hanches en inclinant tronc, bande reste prise sous semelles.
**Fin** : Arrêt avant arrondi dos ou appuis qui changent ; pas besoin mains au sol.
**Retour** : Étendre hanches pour revenir debout sans pousser bassin loin devant.
**Respiration** : Proposition Tempo résisté : inspirer inclinaison ; expirer redressement. ACE éducatif bâton décrit autre rythme ; ne pas le prétendre corroboré.

**Muscles documentés** : Fessiers/ischio-jambiers pour famille charnière ; source Physio nomme chaîne postérieure.
**Inférences** : Érecteurs du rachis et abdomen stabilisent surtout ; back secondaire ne signifie pas extension lombaire répétée.

**Erreurs et corrections**

- Dos arrondi : réduire amplitude.
- Devient squat : garder petit pli genou et hanches reculées.

**Régression** : Charnière sans bande, repère bâton si enseigné humainement.
**Installation** : Bande plate inspectée et installation sous semelles compatible notice ; extrémités tenues à longueur égale ; tension fin mouvement contrôlée ; aucun appui pointe seule.

**Deux images attendues**

- A : debout bande sous deux pieds.
- B : hanches reculées, bras longs, genoux légèrement fléchis ; aucun enroulement autour cou.

**Audio brouillon** : « Bande sous les deux pieds, genoux souples. » / « Inspire et recule les hanches, dos stable. » / « Expire et redresse-toi par les hanches. »

**Recoupement par champ**

- [Decathlon Conseil Sport - entretien François Abraham - Le soulevé de terre : un exercice de puissance et de prévention](https://conseilsport.decathlon.fr/le-souleve-de-terre-un-exercice-de-puissance-et-de-prevention) (corroboration ciblée, limites ci-dessous) : Bande plate sous deux pieds ; RDL décrit séparément.
- [American Council on Exercise - Hip Hinge](https://www.acefitness.org/resources/everyone/exercise-library/33/hip-hinge/) (corroboration ciblée, limites ci-dessous) : Charnière, faible pli genoux.
- [Physio Connectionz - Exercise Band Romanian Deadlift](https://www.physioconnectionz.com.sg/knee-exercises/exercise-band-romanian-deadlift/) (corroboration ciblée, limites ci-dessous) : RDL bande nommé, vidéo non inspectée.
- [The Hygenic Corporation / Thera-Band - Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) (matériel seulement) : Inspection/ancrage élastique.
- [Physitrack PLC - bibliothèque exercices clinique - Band resisted deadlift](https://au.physitrack.com/home-exercise-video/band-resisted-deadlift) (ancrage exact, forme bande non précisée) : Bande sous deux pieds, charnière genoux souples et bras longs.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- aerobis précise une boucle powerband et une variante de prise extérieure; Caliverse décrit deux pieds et mains dehors. Montage exact mieux documenté, mais bande plate ouverte/boucle et modèle réel restent distincts; notice Tempo toujours absente.
- Caliverse et aerobis décrivent désormais souffle au redressement, soutien documentaire supplémentaire de Tempo. ACE éducatif reste divergent; pas consensus universel ni audio approuvé.
- Kit Decathlon à tubes n’est pas un substitut bande plate. Installation/longueur propres au produit et revue humaine restent ouvertes.

**Audit catalogue** : Relabel back secondaire en stabilisation rachis envisagé ; ne pas transposer ce média flat vers tubes kit.

### Recoupement complémentaire du 12 octobre 2026

Conserver charnière bilatérale, mains extérieures et bras longs. Distinguer boucle continue aerobis et bande ouverte; ne pas substituer prises intérieures du montage principal. Souffle au redressement renforcé documentairement.

- **Positions :** Montage alternatif pieds/deux mains et genoux souples recoupé; longueur/type réellement utilisé ouverts.
- **Muscles :** Ischio-jambiers/fessiers décrits; érecteurs en stabilisation, pas carte quantitative.
- **Conseils :** Ne pas reprendre charges/allongement commerciaux; illustrations AI aerobis exclues comme preuve du mouvement humain.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [STR-PHYSITRACK-HINGE](https://au.physitrack.com/home-exercise-video/band-resisted-deadlift), [STR-DECATHLON-HINGE](https://conseilsport.decathlon.fr/le-souleve-de-terre-un-exercice-de-puissance-et-de-prevention), [STR-AEROBIS-RDL](https://aerobis.com/blogs/fitness/resistance-band-romanian-deadlift), [STR-CALIVERSE-RDL](https://www.caliverse.app/exercises/band-romanian-deadlift-805).

<a id="ex39"></a>

### EX39 - Fente latérale alternée

**Variante** : Fente latérale sans charge, retour centre puis alternance. **État** : noyau documentaire recoupé ; revue humaine absente.

**Placement de départ**

- Pieds : Départ écart confortable ; pas côté, pieds restent orientés compatibles genou.
- Genoux : Jambe côté pas fléchit, opposée reste plus allongée.
- Bassin : Hanche du côté pas recule.
- Colonne et tronc : Inclinaison depuis hanche, sans arrondi.
- Tête et nuque : Suit tronc.
- Omoplates : Relâchées.
- Bras, mains et prise : Libres devant pour équilibre.

**Mouvement** : Pas latéral puis reporter poids sur jambe du pas et fléchir hanche/genou.
**Fin** : Pied fléchi entièrement posé, autre pied garde contact.
**Retour** : Pousser avec la jambe fléchie pour ramener le pied et revenir debout au centre, puis faire le pas de l’autre côté.
**Respiration** : Souffle sans apnée ; inspiration pas/descente et expiration retour proposées comme rythme éditorial. Les nouveaux guides ne prescrivent pas tous une phase unique.

**Muscles documentés** : Quadriceps/fessiers pour famille fente, muscles intérieur cuisse cités guides latéraux.
**Inférences** : Adducteurs participent transfert/retour ; leur classement primary dépend variante, pas isolation.

**Erreurs et corrections**

- Genou rentre : réduire largeur/profondeur.
- Poids pointe seule : replacer pied entier.

**Régression** : Pas moins large et flexion moins profonde.
**Installation** : Surface dégagée, appuis non glissants ; matériel cité dans la variante contrôlé avant la série.

**Deux images attendues**

- A : debout centre.
- B : pas latéral, hanche reculée, une jambe fléchie ; pas squat sumo deux genoux.

**Audio brouillon** : « Fais un pas de côté, garde le pied posé. » / « Inspire et recule la hanche en fléchissant. » / « Expire, reviens au centre, puis alterne. »

**Recoupement par champ**

- [American Council on Exercise - Lateral Lunge](https://www.acefitness.org/resources/everyone/exercise-library/364/lateral-lunge/) (variante avec charge) : Pas latéral, hanche et retour.
- [Harvard Health Publishing - Are lunges safe for older adults?](https://www.health.harvard.edu/bones-and-joints/are-lunges-safe-for-older-adults) (variante appuis fixes) : Transfert latéral à appuis fixes, pas EX39 avec pas.
- [US Navy Fitness - Associated Curriculum Documents, S-562-0612](https://www.navyfitness.org/modules/media/?__cb=637902024873170000&do=download&id=800d79c2-1b38-46a3-a9c5-221593779777) (corroboration ciblée, limites ci-dessous) : Pieds posés, jambe opposée droite, retour et côté opposé chaque rep.
- [Orthopedic Associates of Hartford (oahct.com), document hébergé par Ware MD - Closed Chain Lower Extremity Strengthening](https://www.waremd.com/pdf/closed-chain-lower-extremity-strengthening.pdf) (corroboration ciblée, limites ci-dessous) : Pas, flexion genou côté, retour position initiale puis autre côté ; bras contrepoids possibles.
- [National Academy of Sports Medicine - Squat Alternatives](https://www.nasm.org/resource-center/blog/squat-alternatives) (corroboration ciblée, limites ci-dessous) : Hanche recule, jambe opposée allongée, retour et alternance optionnelle.
- [PureGym - How To Do Lateral Lunges](https://www.puregym.com/exercises/legs/quad-exercises/lunges/lateral-lunges/) (corroboration ciblée, limites ci-dessous) : Pas et retour sans charge base ; ne décrit pas alternance chaque rep.

**Complément intégré** : descriptions indépendantes supplémentaires incorporées dans cette fiche ; propositions de prise, sortie et critères média restent à reviewer humainement.

**Limite du recoupement** : le geste, le type de matériel et la notice du modèle sont évalués séparément. Les médias et l’audio n’ont pas reçu d’approbation humaine.

**Écarts et questions ouvertes**

- Rôles adducteurs primary/secondary non établis par mesures, conserver qualitatif.
- Ne pas imposer 90 degrés ni tibia vertical à tous.
- Revue technique humaine, médias et dose restent en attente.

**Audit catalogue** : Séquence sans charge pas/retour centre/alternance recoupée Navy/OAH/NASM. Distinguer appuis fixes et Cossack. Adducteurs primary reste classification à corroborer ; aucune mesure ne démontre dominance universelle.

## Registre des sources effectivement lues

### STR-ACE-SQUAT

[Bodyweight Squat](https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Squat sans charge. Repère : Steps 1-6.
Confirme : Flexion hanches/genoux, appuis conservés, expiration à la montée.
Limites : Largeur et pointes différentes de Mayo ; indications de profondeur non universelles.

### STR-MAYO-SQUAT

[Video: Squat exercise](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/squat/vid-20084663) - Mayo Clinic. Consulté le 2026-10-12.
Périmètre : Squat sans charge. Repère : Transcription Nicole Campbell.
Confirme : Dos neutre, genoux centrés sur les pieds, amplitude modifiable.
Limites : Mentionne 90 degrés comme repère ; Tempo ne doit pas en faire une obligation.

### STR-NHS-STRENGTH

[Strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/) - NHS. Consulté le 2026-10-12.
Périmètre : Mini-squat, mollets avec support, curl léger. Repère : Mini-squats, Calf raises, Biceps curls.
Confirme : Montée/descente des talons contrôlées ; appui stable ; curl sans déplacement des bras.
Limites : Mini-squat assisté et curl non détaillé sur la prise.

### STR-HARVARD-REVERSE

[Try this: Take a step back](https://www.health.harvard.edu/exercise-and-fitness/try-this-take-a-step-back) - Harvard Health Publishing. Consulté le 2026-10-12.
Périmètre : Fente arrière alternée avec haltères légers. Repère : Starting position, Movement.
Confirme : Pas arrière sur avant-pied, flexion, retour puis autre côté, tronc neutre.
Limites : Charge présente contrairement à EX07 ; cue de poussée pied arrière à confronter aux autres sources.

### STR-MAYO-LUNGE

[Video: Lunge exercise](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/lunge/vid-20084662) - Mayo Clinic. Consulté le 2026-10-12.
Périmètre : Fente avant, départ debout et retour. Repère : Transcription.
Confirme : Quadriceps, ischio-jambiers et fessiers ; genou suit pied, rachis neutre.
Limites : Le terme stationary désigne ici pas avant et retour ; ce n’est pas EX08 à appuis fixés. Prescription genou ne dépassant pas orteils non retenue comme règle générale.

### STR-PLYMOUTH-SPLIT

[Back Rehabilitation Programme](https://www.plymouthhospitals.nhs.uk/display-pil/pil-back-rehabilitation-programme-3972) - University Hospitals Plymouth NHS Trust. Consulté le 2026-10-12.
Périmètre : Split squat à appuis fixés. Repère : Split Squat.
Confirme : Talon arrière relevé ; descente et remontée lentes ; série entière même jambe.
Limites : Programme de rééducation ; dosage non transposé.

### STR-BRISTOL-LUNGE

[Therapy eRehab - Knee Instability](https://www.nbt.nhs.uk/our-services/a-z-services/physiotherapy/specialist-physiotherapy-service/therapy-erehab-video-resources/therapy-erehab-knee-instability) - North Bristol NHS Trust. Consulté le 2026-10-12.
Périmètre : Lunge décrit à appuis décalés sans pas pendant répétition. Repère : Video 4 - Lunge.
Confirme : Abaissement genou arrière, pieds orientés devant.
Limites : La description sous Video 5 Split squat correspond à un lever de chaise ; retenir uniquement Video 4 Lunge pour la posture, pas son étiquette.

### STR-ACE-BRIDGE

[Glute Bridge](https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Pont bilatéral au sol. Repère : Steps 1-3.
Confirme : Pieds posés, contraction fessière, montée sans hyperextension lombaire, expiration montée.
Limites : Position basse suggère aplatir le bas du dos ; adaptation éditoriale : ne pas forcer l’aplatissement.

### STR-WHITTINGTON-BRIDGE

[Lower Limb Pain](https://www.whittington.nhs.uk/default.asp?c=47048) - Whittington Health NHS Trust. Consulté le 2026-10-12.
Périmètre : Pont bilatéral au sol. Repère : Bridging.
Confirme : Pieds au sol, genoux fléchis, bassin levé vers ligne épaules/genoux.
Limites : Programme clinique non transposé comme prescription.

### STR-ACE-CALF

[Standing Calf Raises - Wall](https://www.acefitness.org/resources/everyone/exercise-library/73/standing-calf-raises-wall/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Mollets bilatéraux debout avec mur. Repère : Steps 1-3.
Confirme : Genoux allongés, pieds sans rotation, expiration montée, retour lent.
Limites : Support mural absent de variante principale ; fin de page explosive non retenue.

### STR-ACE-INCLINE

[Be a Chest Day Champion](https://www.acefitness.org/resources/pros/expert-articles/8972/be-a-chest-day-champion-an-evidence-based-approach-to-training-the-chest/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Pompes mains sur surface surélevée. Repère : Expert-Recommended Exercises.
Confirme : Variante inclinée et hausse support comme régression.
Limites : Press bande décrit avec ancrage externe, pas bande autour du dos.

### STR-MAYO-STAIR

[Mayo Clinic Q and A: 5 stair exercises to do at home](https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-q-and-a-5-stair-exercises-to-do-at-home/) - Mayo Clinic News Network. Consulté le 2026-10-12.
Périmètre : Pompe inclinée sur marche. Repère : 1. Stair pushup.
Confirme : Corps en planche, inspirer descente, expirer poussée, support plus haut si difficulté.
Limites : Marche précise ; support mobilier nécessite contrôle propre.

### STR-ACE-KNEES

[Bent Knee Push-up](https://www.acefitness.org/resources/everyone/exercise-library/13/bent-knee-push-up/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Pompes genoux. Repère : Steps 1-4.
Confirme : Tronc continu des genoux à tête, coudes proches ou légèrement ouverts, corps solidaire.
Limites : Propose poignées haltères ; non ajouté automatiquement à Tempo.

### STR-MAYO-KNEES

[Video: Modified pushup](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/modified-pushup/vid-20084674) - Mayo Clinic. Consulté le 2026-10-12.
Périmètre : Pompes genoux. Repère : Transcription.
Confirme : Poitrine/triceps ; abdomen contracté, dos sans affaissement, retour contrôlé.
Limites : Contact menton-sol non obligatoire retenu ; la nuque reste dans le prolongement.

### STR-ACE-PUSHUP

[Push-up](https://www.acefitness.org/resources/everyone/exercise-library/41/push-up/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Pompe classique. Repère : Steps 1-4.
Confirme : Départ appuis mains/orteils, maintien tronc, descente/poussée.
Limites : Coudes plus ou moins ouverts selon source ; pas d’angle universel.

### STR-UAF-PRESS

[Upper Body Pressing Exercises](https://www.uaf.edu/recreation/competitions/fitness-challenge/exercises/upper-body-pressing.php) - University of Alaska Fairbanks - Nanook Recreation. Consulté le 2026-10-12.
Périmètre : Pompes classiques, genoux et banc. Repère : Pushups - Helpful Tips.
Confirme : Épaules/hanches même vitesse ; tête neutre ; expiration poussée.
Limites : Omoplates pincées en permanence : consigne non imposée.

### STR-COGLEY-NARROW

[Comparison of muscle activation using various hand positions during the push-up exercise](https://pubmed.ncbi.nlm.nih.gov/16095413/) - Cogley et al. - Journal of Strength and Conditioning Research. Consulté le 2026-10-12.
Périmètre : Étude originale, mains étroites/largeur épaules/larges. Repère : Abstract ; DOI 10.1519/15094.1.
Confirme : Activation pectoraux et triceps supérieure en base étroite vs large dans ce protocole.
Limites : Résumé lu, pas texte intégral ; 40 sujets, une répétition par condition ; ni isolation triceps ni assurance poignets.

### STR-BERKELEY-BANDS

[Resistance Band and Body Weight Exercises in Small Spaces](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf) - University of California Berkeley - University Health Services. Consulté le 2026-10-12.
Périmètre : Press derrière dos, curl deux pieds, triceps unilatéral pied arrière. Repère : p.1 Chest Press, p.2 Biceps Curl, p.3 Overhead Triceps Extension.
Confirme : Press à thorax sous bras ; curl deux pieds ; extension overhead avec bras opposé aidant.
Limites : Triceps unilatéral, ne confirme pas deux mains EX23 ; matériel et compatibilité kit non identifiés.

### STR-PENINSULA

[Physical Activity at Home - Standing](https://www.peninsulahealth.org.au/wp-content/uploads/Physical-Activity-at-Home-Standing.pdf) - Peninsula Health. Consulté le 2026-10-12.
Périmètre : Press bande derrière dos. Repère : p.4 Chest press with theraband.
Confirme : Bande derrière dos passant sous bras ; pousser puis retour lent.
Limites : Coudes à hauteur épaules, à adapter ; aucune homologation kit Decathlon.

### STR-NCHPAD

[Strengthening Exercises with Weights and Elastic Resistance Bands](https://www.nchpad.org/resources/strengthening-exercises-with-weights-and-elastic-resistance-bands/) - National Center on Health, Physical Activity and Disability. Consulté le 2026-10-12.
Périmètre : Press bande derrière dos assis et overhead assis. Repère : Chest Press with Thera-Band ; Single Arm Triceps Extension ; Overhead Shoulder Press.
Confirme : Bande sous omoplates, expiration poussée ; triceps overhead bras immobile.
Limites : Variantes assises ; extension unilatérale ; texte ne justifie pas carte musculaire quantitative.

### STR-NSCA-FLOOR

[Modification of Exercises to Allow Injured Individuals to Continue Training](https://www.nsca.com/certification/tsac-f/essentials-of-tactical-strength-training-and-conditioning-2nd-edition/excerpts/modification-of-exercises-to-allow-injured-individuals-to-continue-training/) - National Strength and Conditioning Association. Consulté le 2026-10-12.
Périmètre : Floor press et mécanique scapulaire overhead. Repère : Figures 16.13-16.15.
Confirme : Le sol limite descente bras ; ne pas bloquer rotation scapulaire pendant montée overhead.
Limites : Contexte populations blessées, aucune indication thérapeutique généralisée pour Tempo.

### STR-ARKANSAS

[Stepping into Better Health FSFCS77](https://www.uaex.uada.edu/publications/PDF/FSFCS77.pdf) - University of Arkansas System - Division of Agriculture. Consulté le 2026-10-12.
Périmètre : Chest press, variation Floor Press. Repère : p.5 Chest Press - Variations.
Confirme : Position allongée genoux fléchis, contrôle ; floor press limite profondeur coude.
Limites : Floor press présenté brièvement en variation ; détail prise/installation à vérifier humainement.

### STR-ACE-CHEST

[Chest Press](https://www.acefitness.org/resources/everyone/exercise-library/19/chest-press/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Développé haltères sur banc. Repère : Steps 1-4.
Confirme : Poignets dans avant-bras, contrôle, expiration poussée.
Limites : Banc, pas sol : soutien de famille seulement.

### STR-ACE-OVERHEAD

[Seated Overhead Press](https://www.acefitness.org/resources/everyone/exercise-library/45/seated-overhead-press/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Développé haltères assis. Repère : Steps 1-3.
Confirme : Poignets alignés, poussée expirée, retour inspiré, éviter extension lombaire.
Limites : Assis ; omoplates abaissées/rétractées fixes contredit NSCA pour rotation ascendante.

### STR-ESKENAZI

[Exercise of the Month: Dumbbell Shoulder Press](https://www.eskenazihealth.edu/news/exercise-of-the-month-dumbbell-shoulder-press) - Eskenazi Health. Consulté le 2026-10-12.
Périmètre : Développé deux haltères debout ou assis. Repère : February 2018 - steps et tips.
Confirme : Paumes devant, extension bras au-dessus puis retour lent ; tronc engagé.
Limites : Instruction touchdown ne fixe pas angle obligé ; pas de dosage repris.

### STR-SAETERBAKKEN

[Effects of body position and loading modality on muscle activity and strength in shoulder presses](https://pubmed.ncbi.nlm.nih.gov/23096062/) - Saeterbakken et Fimland - Journal of Strength and Conditioning Research. Consulté le 2026-10-12.
Périmètre : Étude originale développé debout deux haltères vs autres variantes. Repère : Abstract ; DOI 10.1519/JSC.0b013e318276b873.
Confirme : Deltoïdes mesurés ; position et matériel modifient activation et charge maximale.
Limites : Résumé lu ; 15 hommes, 80% 1RM : ne démontre pas sécurité population ni répartition carte musculaire universelle.

### STR-ACE-DELTOID

[Dynamite Delts: ACE Research Identifies Top Shoulder Exercises](https://www.acefitness.org/continuing-education/prosource/september-2014/4972/dynamite-delts-ace-research-identifies-top-shoulder-exercises/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Élévation bras fléchis et développé haltères. Repère : Bent-Arm Lateral Raise et résultats.
Confirme : Deltoïde moyen sollicité élévation latérale ; deltoïde antérieur développé.
Limites : Étude financée ACE ; 16 hommes entraînés ; variante bent-arm, pas tous détails EX18.

### STR-DYNAMIC-NECK

[Neck pain](https://dynamichealth.nhs.uk/help-and-advice/neck-pain/) - Cambridgeshire Community Services NHS Trust - Dynamic Health. Consulté le 2026-10-12.
Périmètre : Élévation latérale debout avec petits poids. Repère : Lateral raise.
Confirme : Bras de côté, poitrine ouverte, éviter haussement épaules ; paumes devant ou bas.
Limites : Consigne coude droit contre petite flexion autres guides ; choix non universel.

### STR-PUREGYM-LATERAL

[Dumbbell Lateral Raise](https://www.puregym.com/exercises/arms-and-shoulders/lateral-raises/dumbbell-lateral-raise/) - PureGym - équipe entraînement. Consulté le 2026-10-12.
Périmètre : Élévation latérale debout deux haltères. Repère : How To Do Dumbbell Lateral Raise.
Confirme : Petit pli coude conservé, montée de côté, retour lent.
Limites : Petit doigt plus haut/pouce bas proposé : non retenu comme consigne automatique.

### STR-MAYO-ROW-BAND

[Video: Bent-over row with resistance tubing](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/bent-over-row/vid-20084668) - Mayo Clinic. Consulté le 2026-10-12.
Périmètre : Rowing bilatéral tubing sous deux pieds. Repère : Transcription.
Confirme : Mains paumes face à face, tronc neutre, coudes proches ; retour lent.
Limites : Tubes avec poignées, ne confirme pas toute prise bande plate ; arrière deltoïde privilégié dans discours.

### STR-THERABAND

[Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) - The Hygenic Corporation / Thera-Band. Consulté le 2026-10-12.
Périmètre : Fabricant, inspection/manipulation élastiques et variantes. Repère : p.4-11 et p.22-27 (pagination imprimée).
Confirme : Inspection défauts, ancrage sûr, retour maîtrisé, protéger yeux si retour vers tête.
Limites : Copie fabricant hébergée chez Tumbl Trak ; ancien modèle Thera-Band, pas notice Decathlon ; chest press ancré externe ≠ derrière dos.

### STR-ACE-ROW

[Single-arm Row](https://www.acefitness.org/resources/everyone/exercise-library/126/single-arm-row/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Rowing unilatéral avec banc. Repère : Steps 1-3.
Confirme : Coudes près corps, arrêt avant rotation tronc, retour contrôlé, expiration tirage.
Limites : Banc avec main/genou ; soutien indirect pour montage EX20.

### STR-VERYWell-ROW

[How to Do a One-Arm Dumbbell Row](https://www.verywellfit.com/one-arm-dumbbell-row-3120040) - Verywell Fit - Elizabeth Quinn, guide technique original. Consulté le 2026-10-12.
Périmètre : Rowing debout main libre sur cuisse. Repère : How to do a One-Arm Dumbbell Row.
Confirme : Appuis décalés, main cuisse avant ; rachis stable ; progression sans charge lourde.
Limites : Guide pratique éditorial, niveau inférieur organisme technique ; tire vers poitrine vs hanche catalogue, point à arbitrer.

### STR-ROWINGSTRONGER

[Resistance Band Rowing Strength Training](https://rowingstronger.com/wp-content/uploads/2019/01/Resistance-Band-Rowing-Strength-Training.pdf) - Will Ruth - RowingStronger. Consulté le 2026-10-12.
Périmètre : Coach, familles pull-apart/rowing/hinge. Repère : Categories Pulling, Hinge.
Confirme : Pull-apart cité pour traps moyen/inférieur, rhomboïdes et arrière deltoïde ; hinge chaîne postérieure.
Limites : Liste de familles, pas validation montage ou instructions exactes.

### STR-FUKUNAGA

[Band Pull-Apart Exercise: Effects of Movement Direction and Hand Position on Shoulder Muscle Activity](https://ijspt.org/wp-content/uploads/2022/03/9-Tyler.pdf) - Fukunaga et al. - International Journal of Sports Physical Therapy / NISMAT. Consulté le 2026-10-12.
Périmètre : Étude originale pull-apart horizontal/diagonal, prises multiples. Repère : Methods p.2-3 ; Figures 2-4 ; DOI 10.26603/001c.33026.
Confirme : Prise et direction modifient activité coiffe, trapèzes et deltoïde postérieur.
Limites : 10 hommes ; EMG instantané ≠ efficacité clinique, hiérarchie musculaire universelle ou sécurité individuelle.

### STR-ACE-W

[Prone Scapular Stabilization Series - I, Y, T, W, O](https://www.acefitness.org/resources/everyone/exercise-library/249/prone-scapular-shoulder-stabilization-series-i-y-t-w-o-formation/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : W au sol. Repère : Step 5 W Formation.
Confirme : Nuque dans prolongement, élévation bras issue épaules ; expiration douce.
Limites : W mouvement vers forme vs départ W catalogue ; accepte légère extension lombaire, non requise Tempo.

### STR-WWL-W

[Neck and Upper Back Exercises Level 3](https://www.wwl.nhs.uk/media/.leaflets/657835a18e50d7.90662950.pdf) - Wrightington Wigan and Leigh Teaching Hospitals NHS Foundation Trust. Consulté le 2026-10-12.
Périmètre : W couché sur ventre. Repère : p.3 Prone W.
Confirme : Serviette sous front possible, contraction entre omoplates, bras levés sans dépasser tronc.
Limites : Bras angle fixe donné ; forme W diffère légèrement ACE, à choisir pour média.

### STR-ACE-TRICEPS

[Triceps Extension](https://www.acefitness.org/resources/everyone/exercise-library/74/triceps-extension/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Extension overhead debout haltère à deux mains. Repère : Steps 1-3.
Confirme : Prise deux mains, bras supérieurs stables, expiration extension et retour inspiré.
Limites : Cue omoplates fixes à arbitrer avec NSCA ; amplitude ne doit pas imposer angle.

### STR-ILLINOIS-TRICEPS

[Overhead Triceps Extension](https://eat-move-save.extension.illinois.edu/move/exercise/overhead-triceps-extension) - University of Illinois Extension. Consulté le 2026-10-12.
Périmètre : Extension overhead deux mains avec bouteille. Repère : Steps 1-3.
Confirme : Deux mains au-dessus tête, flexion derrière tête puis remontée.
Limites : Bouteille, pas montage prise haltère ; confirmation mécanique de famille.

### STR-MAYO-CURL

[Video: Biceps curl with dumbbell](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/biceps-curl/vid-20084675) - Mayo Clinic. Consulté le 2026-10-12.
Périmètre : Curl haltère supination. Repère : Transcription.
Confirme : Coude proche buste, paume vers haut, poignet droit, pas de balancement.
Limites : Unilatéral ou alterné, bilatéral catalogue correspond au même geste deux bras.

### STR-MAYO-CURL-BAND

[Video: Biceps curl with resistance tubing](https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/biceps-curl/vid-20084666) - Mayo Clinic. Consulté le 2026-10-12.
Périmètre : Curl tubing sous pied. Repère : Transcription.
Confirme : Paume vers haut, coude proche tronc, poignet droit, montée/retour contrôlés.
Limites : Un pied et une main présentés ; Berkeley confirme spécifiquement deux pieds.

### STR-ACE-GOBLET

[Goblet Squat](https://www.acefitness.org/resources/everyone/exercise-library/362/goblet-squat/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Goblet haltère vertical. Repère : Description.
Confirme : Charge près poitrine, coudes proches côtes, montée appuis sol.
Limites : Hanches sous genoux demandées ; amplitude adaptée Tempo.

### STR-NASM-GOBLET

[The Goblet Squat: A Trainer’s Coaching and Programming Guide](https://www.nasm.org/resource-center/blog/training/how-to-perform-goblet-squats) - National Academy of Sports Medicine. Consulté le 2026-10-12.
Périmètre : Goblet haltère ou kettlebell. Repère : How to Coach ; Muscles Trained.
Confirme : Charge thorax, flexion hanches/genoux, limite selon rachis neutre ; quadriceps/fessiers.
Limites : Page contient à la fois pointes légèrement ouvertes et conseil standing on skis ; ne pas imposer pieds parfaitement droits.

### STR-ACE-HINGE

[Hip Hinge](https://www.acefitness.org/resources/everyone/exercise-library/33/hip-hinge/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Charnière éducative avec bâton. Repère : Steps 1-3.
Confirme : Hanches reculent, faible flexion genoux, trois repères tête/thorax/sacrum.
Limites : Pas bande ; expiration descente/inspiration montée inverse proposition EX38 résisté.

### STR-DECATHLON-HINGE

[Le soulevé de terre : un exercice de puissance et de prévention](https://conseilsport.decathlon.fr/le-souleve-de-terre-un-exercice-de-puissance-et-de-prevention) - Decathlon Conseil Sport - entretien François Abraham. Consulté le 2026-10-12.
Périmètre : Soulevé de terre élastique et roumain séparés. Repère : 8. Soulevé de terre roumain ; avec élastique.
Confirme : Bande plate sous deux pieds, une extrémité/main ; variante roumaine genoux déverrouillés.
Limites : N’associe pas explicitement les deux variantes en même démonstration ; aucune validation kit à tubes.

### STR-PHYSIO-HINGE

[Exercise Band Romanian Deadlift](https://www.physioconnectionz.com.sg/knee-exercises/exercise-band-romanian-deadlift/) - Physio Connectionz. Consulté le 2026-10-12.
Périmètre : Charnière type RDL avec bande. Repère : Page ressource Knee Exercises.
Confirme : Chaîne postérieure et tronc ; nom variante exacte.
Limites : Texte trop bref pour confirmer emplacement sous pieds ; vidéo non revue, ne vaut pas second montage exact.

### STR-ACE-SIDE

[Lateral Lunge](https://www.acefitness.org/resources/everyone/exercise-library/364/lateral-lunge/) - American Council on Exercise. Consulté le 2026-10-12.
Périmètre : Fente latérale avec haltères. Repère : Description.
Confirme : Pas côté, hanche recule, poussée pied pour retour centre.
Limites : Charge différente ; adducteurs participent retour côté opposé.

### STR-HARVARD-SIDE

[Are lunges safe for older adults?](https://www.health.harvard.edu/bones-and-joints/are-lunges-safe-for-older-adults) - Harvard Health Publishing. Consulté le 2026-10-12.
Périmètre : Fente latérale sans charge à appuis fixes ; fente arrière sans charge. Repère : Side lunge.
Confirme : Hanche reculée et transfert latéral à appuis fixes ; fente arrière avec pas et retour.
Limites : Article clinique population âgée ; assurance générale de sécurité non transposée.

### STR-HAWKES-ROW

[Exercise band Bent over row](https://hawkesphysiotherapy.co.uk/exercise/exercise-band-bent-over-row/) - Hawkes Physiotherapy. Consulté le 2026-10-12.
Périmètre : Rowing bilatéral bande sous deux pieds. Repère : Step by Step 3-9.
Confirme : Centre bande sous deux pieds, extrémité dans chaque main, charnière maintenue et retour lent.
Limites : Pieds joints et tronc parallèle proposés, non obligatoires Tempo ; forme plate/tube non explicitée en texte ; dosage non transposé.

### STR-HINGE-ROW

[How to do a bent over row](https://www.hingehealth.com/resources/articles/bent-over-row/) - Hinge Health - guide clinique original. Consulté le 2026-10-12.
Périmètre : Rowing debout bilatéral, modification bande. Repère : Exercises ; modifications.
Confirme : Debout deux appuis, charnière, tirage vers tronc ; variante debout sur bande, deux extrémités tenues.
Limites : Variante bande brève, ne précise pas flat/tube ou modèle ; description muscles inclut triceps sans hiérarchie mesurée.

### STR-HINGE-PULLAPART

[How to Do Band Pull Aparts: A Hinge Health Guide](https://www.hingehealth.com/resources/articles/band-pull-aparts/) - Hinge Health - guide clinique original. Consulté le 2026-10-12.
Périmètre : Pull-apart horizontal debout, paumes bas. Repère : Band Pull Aparts - To do band pull aparts.
Confirme : Bande devant poitrine, deux mains paumes bas, bras allongés de côté, hauteur poitrine conservée.
Limites : Forme bande et notice modèle non précisées ; élévation tronc en T est autre variante et non EX21.

### STR-BHF-BANDS

[Resistance band exercises you can do at home in 10 minutes](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/resistance-bands) - British Heart Foundation - Hara Markos. Consulté le 2026-10-12.
Périmètre : Pull-apart horizontal et curl bande bilatéral sous un/deux pieds. Repère : 1. Pull apart ; 6. Bicep curl ; Finding best resistance band.
Confirme : Pull-apart bras longs paumes bas ; curl sous deux pieds possible, chaque extrémité main, paumes haut et coudes près tronc.
Limites : Contexte activité/cardiac rehab : dosages non transposés ; aucune compatibilité Decathlon 8975309 démontrée.

### STR-VISSCO-CURL

[Bicep Curl with Resistance Tube](https://www.vissco.com/physiotherapy-exercise/bicep-curl-with-resistance-tube/) - Vissco - fabricant et bibliothèque physiothérapie. Consulté le 2026-10-12.
Périmètre : Curl tubing bilatéral centre sous les pieds. Repère : Position ; Form & Movement.
Confirme : Centre sous pieds, extrémité/main, coude près tronc, expirer flexion/inspirer extension.
Limites : Produit non identifié comme kit Decathlon ; fixation sous pieds et longueur selon notice réelle restent à vérifier.

### STR-PHYSITRACK-HINGE

[Band resisted deadlift](https://au.physitrack.com/home-exercise-video/band-resisted-deadlift) - Physitrack PLC - bibliothèque exercices clinique. Consulté le 2026-10-12.
Périmètre : Charnière bande sous deux pieds, tenue deux mains. Repère : Texte complet instructions.
Confirme : Deux pieds sur bande, hanches reculent, genoux souples sans flexion supplémentaire, bras non moteurs, redressement hanches.
Limites : Bande non catégorisée plate/tube ; head up doit s’interpréter par nuque dans axe sans extension forcée ; respiration non décrite.

### STR-DECATHLON-KIT

[Kit de résistance de musculation compact avec 5 élastiques - réf. 8975309](https://www.decathlon.fr/p/kit-de-resistance-de-musculation-compact-avec-5-elastiques/375819/c1m8975309) - Decathlon / Domyos. Consulté le 2026-10-12.
Périmètre : Identification exacte du kit utilisateur, pas notice de montage. Repère : Détails de conception ; Comment utiliser (sans instructions récupérées).
Confirme : Référence 8975309, 5 élastiques avec poignées et attaches ; longueur annoncée 124 cm, résistances nominales 3-7 kg.
Limites : Texte récupéré ne décrit aucun montage sous semelle ni extension bilatérale overhead. Mention curls/extensions marketing ne valide pas EX23/26. Modèle différent des sources Thera-Band/Vissco.

### STR-PTF-ROW

[Shoulder Bent Over Row with Dumbbell - description originale de la vidéo](https://www.youtube.com/watch?v=LKiQLVQpe5I) - Physical Therapy First. Consulté le 2026-10-12.
Périmètre : Rowing unilatéral haltère, appui main sur cuisse proposé. Repère : Setup ; Movement ; Coaching cues ; chaîne Physical Therapy First, vidéo 18 février 2024.
Confirme : Charnière, main libre sur cuisse possible, coude près flanc, charge vers bas côtes/hanche, retour lent sans rotation.
Limites : Description originale lue dans HTML public via shortDescription, pas vidéo inspectée ; appuis décalés pas imposés par cette description.

### STR-WORLDARCHERY-SCREENED

[Coaches Manual Entry Level - Strengthening with an elastic](https://bogfimi.is/wp-content/uploads/2019/09/11-%C3%86fingar-Almennur-Styrkur-lvl1.pdf) - World Archery - copie hébergée Fédération islandaise de tir à l’arc. Consulté le 2026-10-12.
Périmètre : Candidate pour EX23, exclue comme corroboration exacte. Repère : p.337, page PDF 21/24 ; texte et photos.
Confirme : Décrit extension unilatérale puis annonce variante bilatérale avec un pied sur bande.
Limites : Page 337 rendue et inspectée : photos bilatérales bras tendus, bande devant corps, départ décrit bras supérieurs shoulder level. Impossible de distinguer extension coude derrière tête du développé épaules ; ne pas compter comme preuve exacte.

### SUP-P-TIGER-CLOSE

[Close Grip Push Ups - Team Tiger Fitness](https://tigerfitness.com/blogs/exercise-database/close-grip-push-ups-1) - Tiger Fitness. Consulté le 2026-10-12.
Périmètre : Description originale de pompe mains légèrement en dedans des épaules, sans diamant. Repère : Close Grip Push-up Instructions et Tips.
Confirme : Corps aligné, appui avant-pieds, mains légèrement orientées vers intérieur, retour contrôlé.
Limites : Dit épaules tirées en arrière et plus de flare que pompe standard; consignes contradictoires avec autres auteurs, pas normes universelles. Guide commercial, pas essai clinique.

### SUP-P-MH-CLOSE

[Close-Grip Pushup - Brett Williams NASM, Ebenezer Samuel CSCS](https://www.menshealth.com/fitness/a71748001/close-grip-pushup-form/) - Men’s Health / Hearst. Consulté le 2026-10-12.
Périmètre : Coaching original de variante exacte. Repère : How to Do; Diamonds; Elbows.
Confirme : Mains juste en dedans des épaules; diamant non requis.
Limites : Auteur prescriptif sur coudes serrés et épaules; pas preuve de sécurité individuelle.

### SUP-P-FITBOD-CLOSE

[The At-Home Push Up Workout - Emily Trinh](https://fitbod.me/blog/at-home-push-up/) - Fitbod. Consulté le 2026-10-12.
Périmètre : Pompe rapprochée décrite séparément du diamant. Repère : Push Up Technique; CLOSE GRIP PUSH UP; DIAMOND PUSH UP.
Confirme : Mains plus proches, coudes près buste; posture de planche et retour bras tendus.
Limites : Pas mesure de largeur; auteure écrivaine/powerlifting, pas qualification clinique affichée. Ne pas reprendre promesses de ciblage exclusif ni dosage.

### SUP-P-STRENGTHLOG-CLOSE

[How to Do Close-Grip Push-Up](https://www.strengthlog.com/close-grip-push-up/) - StrengthLog. Consulté le 2026-10-12.
Périmètre : Pompe close-grip largeur épaules. Repère : How to Do et Commentary.
Confirme : Inspiration descente, expiration remontée, corps droit.
Limites : Largeur épaules et commentaire plus proche que standard: définition relative, pas corroboration de mesure stricte en dedans. Sol touché non obligatoire pour Tempo.

### SUP-P-AIF-SCAPULA

[Perfecting the push-up - Stephanie Glickman](https://fitness.edu.au/the-fitness-zone/perfecting-the-push-up/) - Australian Institute of Fitness / Network. Consulté le 2026-10-12.
Périmètre : Coaching original de pompe générale, contrôle omoplates et appuis mains. Repère : Wrists and hands; Scapulae; Putting it together.
Confirme : Protraction scapulaire lors poussée; paumes et doigts chargés sans concentration sur un bord.
Limites : Source de famille, pas variante rapprochée. Auteur défend sensation de protraction même à descente; cela ne mesure pas trajectoire précise EX14.

### SUP-P-PURE-OVERHEAD

[How To Do Overhead Tricep Extensions](https://www.puregym.com/exercises/arms-and-shoulders/tricep-extension/overhead-tricep-extension/) - PureGym. Consulté le 2026-10-12.
Périmètre : Sous-section haltère unique soutenu aux deux mains debout. Repère : How To Do A Dumbbell Overhead Tricep Extension, étapes écrites 1-5; Tips.
Confirme : Extrémité en coupe, paumes vers haut, flexion derrière tête et extension, tronc stabilisé.
Limites : Page inclut deux haltères et câble, exclus ici. Transcription du lecteur vidéo parle de squat barre, erreur éditoriale: ne pas utiliser vidéo liée comme preuve. « As far as possible » ne fixe pas amplitude adaptée.

### SUP-P-FITBOD-OVERHEAD

[Standing Dumbbell Tricep Extension - reviewed Jim Parker CPT, BA Kinesiology](https://fitbod.me/exercises/standing-dumbbell-tricep-extension) - Fitbod. Consulté le 2026-10-12.
Périmètre : Extension debout haltère unique à deux mains. Repère : Instructions for Proper Form 1-8.
Confirme : Tête haltère saisie, pieds largeur bassin/genoux souples, regard devant, extension contrôlée puis descente lente.
Limites : Paumes face à face puis vers haut et « wrists straight » doivent être interprétés selon forme du matériel; aucune prise universelle ni charge issue calculateur applicable à Tempo.

### SUP-P-MYPROTEIN-OVERHEAD

[Build Muscle Guide 3 - Standing dumbbell tricep extension](https://s1.thcdn.com/design-assets/documents/myprotein/Myprotein-Build-Muscle-Guide-3.pdf) - Myprotein. Consulté le 2026-10-12.
Périmètre : Extension debout un haltère tenu à deux mains, p.49 PDF. Repère : Page PDF 49, index zéro 48.
Confirme : Départ au-dessus tête, flexion derrière tête avec bras supérieurs immobiles, retour extension.
Limites : Prise et respiration non détaillées; guide marque, pas étude biomécanique. Dosage non repris.

### SUP-L-NASM

[Squat Alternatives](https://www.nasm.org/resource-center/blog/squat-alternatives) - National Academy of Sports Medicine. Consulté le 2026-10-12.
Périmètre : Section 3, reverse/lateral lunges, texte intégral ouvert.. Repère : Section 3, reverse/lateral lunges, texte intégral ouvert..
Confirme : Fente arrière et latérale : pas, retour debout, alternance possible. Charge non introduite dans ces instructions.
Limites : Aucun matériel indiqué dans ces deux descriptions ; ne pas présenter cela comme mention explicite « sans charge ». Appui milieu du pied ; pas de ratio de poids.

### SUP-L-PG-REVERSE

[How To Do Reverse Lunges](https://www.puregym.com/exercises/legs/quad-exercises/lunges/reverse-lunges/) - PureGym. Consulté le 2026-10-12.
Périmètre : Texte bodyweight et instructions, ouvert.. Repère : Texte bodyweight et instructions, ouvert..
Confirme : Base au poids du corps, recul et flexion deux genoux, retour et alternance.
Limites : Liste instructions incomplète : étape recul absente entre départ et pause ; définition introductive la confirme. Ne pas transposer variante déficit.

### SUP-L-PG-LATERAL

[How To Do Lateral Lunges](https://www.puregym.com/exercises/legs/quad-exercises/lunges/lateral-lunges/) - PureGym. Consulté le 2026-10-12.
Périmètre : Texte détaillé ouvert ; pas de visionnage vidéo.. Repère : Texte détaillé ouvert ; pas de visionnage vidéo..
Confirme : Pas côté sans charge de base, jambe opposée allongée, pression jambe du pas pour retour.
Limites : Décrit répétitions par côté, pas explicitement alternées. Embed décrit forward lunge : ne pas l’utiliser comme validation vidéo. Angle proche droit proposé, non obligation Tempo.

### SUP-L-NAVY

[Associated Curriculum Documents, S-562-0612](https://www.navyfitness.org/modules/media/?__cb=637902024873170000&do=download&id=800d79c2-1b38-46a3-a9c5-221593779777) - US Navy Fitness. Consulté le 2026-10-12.
Périmètre : PDF complet ouvert, pages PDF 16, 28 et 29 (index 15,27,28).. Repère : PDF complet ouvert, pages PDF 16, 28 et 29 (index 15,27,28)..
Confirme : Bodyweight lunges forward/reverse explicitement alternées ; arrière genou non au sol et retour par hanche avant ; latérale retour debout et alternance, pieds posés.
Limites : Public militaire entraîné, durée programme non transférée. Une seule provenance même si plusieurs pages. Ne quantifie pas contribution pied arrière.

### SUP-L-UNC

[Tools to Implement the Otago Exercise Program, 2023](https://www.med.unc.edu/aging/cgwep/wp-content/uploads/sites/865/2023/08/Otago_2023-Implementation-Guide-for-PT-1.pdf) - University of North Carolina, CGWEP / Otago. Consulté le 2026-10-12.
Périmètre : PDF ouvert, Calf Raises - No Support, page imprimée 56, index 56.. Repère : PDF ouvert, Calf Raises - No Support, page imprimée 56, index 56..
Confirme : Debout sans appui manuel, près table, pieds écartés, élévation des talons puis retour au sol.
Limites : Programme prévention chutes supervisé ; sans appui constitue niveau de progression, pas recommandation universelle. Largeur épaules indiquée, à adapter.

### SUP-L-KEET

[Standing Bilateral Calf Raises](https://vimeo.com/210356387) - Keet Health. Consulté le 2026-10-12.
Périmètre : Publication originale Keet, description ouverte, vidéo non visionnée.. Repère : Publication originale Keet, description ouverte, vidéo non visionnée..
Confirme : Bilatéral, mains hanches, orteils devant, talons levés et retour lent au sol.
Limites : Vimeo est hébergeur, Keet auteur ; description ne fixe ni dose ni genoux ni hauteur. Aucun visionnage à compter.

### SUP-L-OAH

[Closed Chain Lower Extremity Strengthening](https://www.waremd.com/pdf/closed-chain-lower-extremity-strengthening.pdf) - Orthopedic Associates of Hartford (oahct.com), document hébergé par Ware MD. Consulté le 2026-10-12.
Périmètre : PDF ouvert, page 3. Attribution oahct.com imprimée, pas Ware comme auteur indépendant.. Repère : PDF ouvert, page 3. Attribution oahct.com imprimée, pas Ware comme auteur indépendant..
Confirme : Lateral Lunge - Alternate : pas côté, genou suit pied, bras devant possibles, retour et autre côté. Recul fente aussi décrit sans charge.
Limites : Prescription clinique non transférée. Phrase interdisant genou devant orteils appartient AIR SQUAT, pas fente latérale ; ne pas la copier en règle générale. Auteur individuel absent.

## Sources complémentaires consultées le 12 octobre 2026

- **[STR-OXYGEN-TRICEPS - Resistance Band Two-Arm Overhead Triceps Extension](https://www.oxygenmag.com/video/resistance-band-two-arm-overhead-triceps-extension/?scope=anon)**. Éditeur : Oxygen / Outside. Auteur : Non identifié sur la page consultée. Section : Paragraphe sous titre. Texte consulté le 2026-10-12. Portée : Guide original exact bilatéral avec pied arrière et retour lent. Limites : Enroulement autour pied, pas simple appui sous semelle; type/longueur non fixés. Auteur absent et vidéo non vue. Indépendance : Rédaction distincte apparente; provenance non auditée, ne vaut pas essai indépendant.

- **[STR-ZING-TRICEPS - How to Do Band Tricep Extensions](https://www.zing.coach/exercises/band-tricep-extensions)**. Éditeur : Zing Coach. Auteur : Non identifié sur la page consultée. Section : Correct Form; Equipment; Pro Tips. Texte consulté le 2026-10-12. Portée : Bibliothèque originale, un pied sur bande et deux mains derrière tête. Limites : Power Band indiqué, pas kit tubes. Auteur non identifié; angle 90 degrés non universel, pas notice fabricant. Indépendance : Rédaction distincte apparente; provenance non auditée, ne vaut pas essai indépendant.

- **[STR-AEROBIS-RDL - Resistance Band Romanian Deadlift](https://aerobis.com/blogs/fitness/resistance-band-romanian-deadlift)**. Éditeur : aerobis fitness. Auteur : Non identifié sur la page consultée. Section : Primary setup; Variation stand on the band; breathing. Texte consulté le 2026-10-12. Portée : Guide fabricant de powerband, boucle et montage alternatif pieds/prises extérieures. Limites : Montage principal prises intérieures différent. Illustrations explicitement AI, aucune preuve d’exécution humaine. Charges et allongement non transférés; pas notice du kit Tempo. Indépendance : Rédaction distincte apparente; provenance non auditée, ne vaut pas essai indépendant.

- **[STR-CALIVERSE-RDL - Band Romanian Deadlift](https://www.caliverse.app/exercises/band-romanian-deadlift-805)**. Éditeur : Caliverse. Auteur : Non identifié sur la page consultée. Section : How to Do; Description. Texte consulté le 2026-10-12. Portée : Guide original deux pieds, prises dehors, charnière, souffle redressement. Limites : Auteur absent; texte suggère ensuite plus de flexion genoux, différent du maintien d’angle. Matériau non explicite et vidéo non vue. Indépendance : Rédaction distincte apparente; provenance non auditée, ne vaut pas essai indépendant.

- **[STR-PT2-ROW-SCREENED - Standing Bent Over Row with Resistance Band](https://www.pt2austin.com/movement-library/bent-over-row-resistance-band)**. Éditeur : PT² Austin. Auteur : Sky Winn. Section : Step-by-step 1-3. Texte consulté le 2026-10-12. Portée : Famille rowing avec ancrage externe au niveau sol. Limites : Exclu comme preuve exacte sous pieds malgré titre bent over row. Ne valide ni type ni maintien bande Tempo. Indépendance : Rédaction distincte apparente; provenance non auditée, ne vaut pas essai indépendant.


## Sources supplémentaires pour les variantes tubes

- [STR-PREHAB-ROW - Bent Over Row - Band](https://theprehabguys.com/vimeo-video/bent-over-row-with-band/). Éditeur : [P]rehab. Auteur : Équipe [P]rehab, auteur individuel non indiqué. Section : Exercise notes HOW/FEEL/COMPENSATION. Consultée le 12 octobre 2026. Rowing bilatéral sur bande, charnière tenue, trajet mains vers flancs. Limites : Type non explicite, tag superband; aucune notice kit. Ajustement tension pendant début non copié en consigne de série. Vidéo non vue.

- [STR-SWEAT-ROW - Resistance Band Bent-Over Row](https://sweat.com/exercises/resistance-band-bent-over-row). Éditeur : Sweat. Auteur : Rédaction Sweat. Section : Steps 1-3. Consultée le 12 octobre 2026. Recovery band sous deux pieds, prise neutre, tirage bilatéral. Limites : Recovery band sans identification tube; tronc parallèle prescrit non transféré universellement. Pas notice ni validation média.

- [STR-BROADLY-CURL - Gentle home exercises while you wait](https://improvinglivesnw.org.uk/wp-content/foliolabs-files/docman-files/ics-publications-1/while-you-wait/Gentle%20Home%20Exercises%20Booklet-Final.pdf). Éditeur : Improving Lives Together, Norfolk and Waveney / Broadly Active. Auteur : Broadly Active (attribution dans livret). Section : Page 13 imprimée / PDF index 13, Biceps Curl; attribution page 12. Consultée le 12 octobre 2026. Curl bilatéral sous deux pieds, version debout ou assise. Limites : Section bandes attribuée Broadly Active, pas NHS Choices contrairement première section. Type non fixé; contexte attente intervention, dosage exclu. Figures non inspectées.



# Référentiel tronc - EX27 à EX36

Date de consultation : 2026-10-12. Synthèse documentaire et critères de revue, sans validation technique humaine. Catalogue et médias conservés. Les médias existants n’ont pas été inspectés dans ce lot: les keyframes ci-dessous sont des exigences proposées, pas un verdict visuel.

Chaque fiche distingue mécanique corroborée, variantes divergentes et choix éditoriaux. Les fiches cliniques servent aux appuis/principes; leurs dosages, publics et programmes postopératoires ne sont pas transposés. Les cartes musculaires restent qualitatives.

<a id="ex27"></a>

## EX27 - Planche sur avant-bras

**Variante :** Avant-bras et pointes des pieds; maintien, transition par genoux. **État :** corroboration documentaire avec décisions à revoir; revue humaine non réalisée.

**Départ.** À genoux sur tapis, avant-bras parallèles au sol, paumes posées; coudes à la verticale des épaules. Orteils repliés, regard entre les mains. Allonger successivement les jambes pour établir les appuis avant-bras et avant-pieds. [C-ACE-PLANK](https://www.acefitness.org/resources/everyone/exercise-library/32/front-plank/) [C-NHS-PLANK](https://www.worcsacute.nhs.uk/leaflets/core-stability-2-physiotherapy/) [C-NASM-ABS](https://www.nasm.org/resource-center/blog/training/best-abs-exercises)

**Action et fin.** Tendre les genoux et maintenir tête, épaules, bassin et chevilles dans une ligne sans affaisser le ventre. Garder épaules éloignées des oreilles. Il n’y a pas de répétition du bassin pendant le maintien.
**Retour.** Conserver les appuis et l’alignement pendant le temps contrôlable; interrompre avant de subir une cambrure.
**Sortie.** Poser les genoux doucement, puis ramener le poids vers eux et détendre les avant-bras.

**Respiration.** Installation: Souffler doucement en préparant le gainage. Action ou maintien: Inspirer et expirer librement pendant tout le maintien. Retour: Continuer à respirer quand les genoux se posent. Base documentaire: Respiration continue explicitement ACE; souffle de préparation proposé.

**Muscles.** Rôles documentés: Abdominaux et dos stabilisent tronc: ACE; fonction anti-extension: NASM. Inférences biomécaniques: Fessiers/quadriceps contribuent à garder bassin et genoux; stabilisateurs de l’épaule supportent les appuis. Fléchisseurs de hanche ne méritent pas seuls le rôle secondaire dominant. Limites de quantification: Aucune proportion d’activation.

**Erreurs et corrections.**

- Bassin qui tombe: reposer genoux puis raccourcir maintien.
- Fesses trop hautes: retrouver ligne, sans forcer une baisse si le tronc ne tient plus.
- Épaules aux oreilles: repousser doucement le sol avec avant-bras.

**Régressions.** Planche avant-bras sur genoux, ligne épaules-bassin-genoux. Séquences plus courtes, repos complet entre elles.

**Inconfort/arrêt.** Douleur lombaire: arrêter, ne pas continuer en corrigeant sous douleur (ACE). Douleur épaule/coude ou difficulté respiratoire: quitter appuis; si persistante ou inhabituelle, avis professionnel.

**Médias à contrôler.**

- Position 1: Genoux posés, coudes sous épaules, orteils repliés visibles.
- Position 2: Genoux tendus, appui avant-pieds, bassin dans ligne; profil doit montrer absence de chute lombaire.
- Vues: Profil prioritaire pour bassin; dessus pour symétrie coudes/avant-bras et largeur pieds.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Coudes sous les épaules. Allonge une jambe, puis l’autre. » / Action ou maintien: « Garde le bassin dans la ligne et continue à respirer. » / Sortie: « Pose doucement les genoux. »

**Audit catalogue.**

- Structure actuelle cohérente mais appui orteils et épaules absents.
- core est trop global; hip_flexors seuls en secondaire à réexaminer.
- Step 1 vers 2 est installation, pas animation d’exercice répétitif.

**Décisions et limites.** Transition par genoux retenue pour cohérence catalogue, corroborée NHS; la descente ventre au sol ACE n’est pas imposée. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [ACE - Front Plank](https://www.acefitness.org/resources/everyone/exercise-library/32/front-plank/). Portée: Planche avant-bras, jambes tendues. Confirme: Coudes sous épaules, jambes actives, tronc stable, respiration continue; arrêt si douleur lombaire. Limites/désaccords: Entrée et sortie décrites depuis ventre au sol; Tempo propose une transition par les genoux. Consulté le 2026-10-12.
- [Worcestershire Acute Hospitals NHS Trust - Core Stability 2](https://www.worcsacute.nhs.uk/leaflets/core-stability-2-physiotherapy/). Portée: Planche avant-bras, progression genoux vers orteils. Confirme: Appuis avant-bras/genoux puis avant-bras/orteils; retour sur genoux quand contrôle perdu. Limites/désaccords: Document de physiothérapie; dosage clinique non repris. Consulté le 2026-10-12.
- [NASM - Best Abs Exercises: Science-Based Core Training](https://www.nasm.org/resource-center/blog/training/best-abs-exercises). Portée: Anti-extension et rollout. Confirme: Plus de levier demande plus au tronc; réserver rollout à maîtrise corporelle suffisante. Limites/désaccords: Source mécanisme/programme; pas validation des appuis ni respiration exacte. Consulté le 2026-10-12.

<a id="ex28"></a>

## EX28 - Planche latérale genoux fléchis

**Variante :** Planche latérale sur avant-bras inférieur et côté du genou inférieur, deux genoux fléchis. **État :** corroboration documentaire avec décisions à revoir; revue humaine non réalisée.

**Départ.** Sur le côté, genoux fléchis environ à angle droit, pieds derrière et jambes superposées. Cuisses dans le prolongement du tronc, pas ramenées devant ventre. Coude inférieur sous épaule, avant-bras devant soi; main supérieure sur hanche. Tête suit axe tronc. [C-NHS-SIDE](https://www.rjah.nhs.uk/media/ivkj0wuh/hip-arthroscopy-screen-friendly.pdf) [C-FITBOD-SIDE](https://fitbod.me/exercises/side-plank-with-knees-bent) [C-NHS-SIDE2](https://msk-bexley.nhs.uk/conditions/knee-pain/patellofemoral-pain-syndrome-pfps)

**Action et fin.** Pousser dans avant-bras et côté du genou inférieur, lever bassin pour aligner épaule, hanche et genou. Garder épaules et bassin superposés, sans rouler vers ventre ou plafond.
**Retour.** Tenir immobile, sans lever le genou supérieur ni tendre les jambes.
**Sortie.** Reposer bassin lentement; pour changer de côté, passer par position assise ou allongée confortable.

**Respiration.** Installation: Souffler à la levée du bassin (proposition). Action ou maintien: Respirer régulièrement pendant la tenue. Retour: Inspirer librement pendant descente. Base documentaire: Phases proposées de coaching, non décrites par les deux sources exactes.

**Muscles.** Rôles documentés: Obliques et tronc: Fitbod; sensation taille/hanche: Bexley. Inférences biomécaniques: Stabilisateurs hanche et épaule inférieures maintiennent appuis et alignement. Ne pas transformer sensation en pourcentage de travail. Limites de quantification: Aucune hiérarchie fine certifiée.

**Erreurs et corrections.**

- Coude éloigné: replacer sous épaule avant lever.
- Bassin vers arrière: réaligner cuisses/tronc au sol avant nouvelle tenue.
- Rotation: garder main supérieure sur hanche pour repère.

**Régressions.** Tenue plus courte ou petit décollement du bassin avec retour complet. Tapis sous genou, sans empiler une surface instable.

**Inconfort/arrêt.** Compression douloureuse sur genou inférieur ou douleur épaule: poser bassin et arrêter cette variante. Contexte postopératoire de la source NHS n’autorise pas une prescription de rééducation personnelle.

**Médias à contrôler.**

- Position 1: Bassin posé, deux genoux fléchis, coude sous épaule.
- Position 2: Bassin levé, épaule-hanche-genou alignés, jambe supérieure encore fléchie.
- Vues: Trois quarts avant pour appui coude/genou; profil latéral du corps pour hanche; dessus pour exclure rotation.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Sur le côté, coude sous l’épaule, genoux pliés. » / Action ou maintien: « Soulève le bassin. Garde les hanches superposées et respire. » / Sortie: « Repose doucement le bassin avant de changer de côté. »

**Audit catalogue.**

- Dire avant-bras et genou inférieur, pas seulement coude et genoux.
- lateral_stabilizers est une famille fonctionnelle vague.
- Ne pas importer ACE side plank modified 99: jambe supérieure tendue, variante différente.

**Décisions et limites.** Deux genoux fléchis explicitement figés pour supprimer ambiguïté entre planche à un genou et deux genoux. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [Robert Jones and Agnes Hunt Orthopaedic Hospital NHS Foundation Trust - Hip arthroscopy - side plank, p.11 imprimée / p.12 PDF](https://www.rjah.nhs.uk/media/ivkj0wuh/hip-arthroscopy-screen-friendly.pdf). Portée: Planche latérale partielle, genoux fléchis. Confirme: Coude sous épaule, genoux fléchis, lever bassin sans rotation. Limites/désaccords: Contexte postopératoire, pas prescription générale; ne reprendre aucun calendrier de rééducation. Consulté le 2026-10-12.
- [Fitbod - Side Plank With Knees Bent - reviewed Jim Parker CPT](https://fitbod.me/exercises/side-plank-with-knees-bent). Portée: Variante exacte, deux genoux fléchis. Confirme: Cuisses dans axe tronc, appui avant-bras inférieur; alignement épaules-bassin-genoux. Limites/désaccords: Catégorie abs globale, pas mesure anatomique; respiration absente. Consulté le 2026-10-12.
- [Oxleas NHS Foundation Trust / MSK Bexley - Patellofemoral Pain Syndrome - Modified Side Plank](https://msk-bexley.nhs.uk/conditions/knee-pain/patellofemoral-pain-syndrome-pfps). Portée: Deux genoux fléchis à angle droit. Confirme: Avant-bras, cuisses/tronc alignés, travail taille et hanche. Limites/désaccords: Rééducation genou; deuxième auteur NHS mais pas deuxième famille institutionnelle indépendante. Consulté le 2026-10-12.

<a id="ex29"></a>

## EX29 - Dead bug

**Variante :** Dead bug alterné bras et jambe opposés, départ tabletop. **État :** corroboration documentaire avec décisions à revoir; revue humaine non réalisée.

**Départ.** Dos sur tapis, bassin et tête posés; bras tendus vers plafond à hauteur épaules, paumes face à face. Cuisses verticales, genoux fléchis environ à angle droit, tibias parallèles sol, pieds sans appui. Ajuster bassin pour contact lombaire confortable. [C-NASM-DEAD](https://www.nasm.org/resource-center/exercise-library/dead-bug) [C-PURE-DEAD](https://www.puregym.com/exercises/abs/deadbugs/)

**Action et fin.** Éloigner lentement un bras derrière tête et la jambe opposée devant, sans déplacer les deux membres restants. Arrêter avant que lombaires se décollent ou côtes s’ouvrent. Aucun membre ne doit obligatoirement toucher sol.
**Retour.** Ramener bras vertical et genou au-dessus hanche puis alterner. Une extension-retour d’un côté constitue une répétition Tempo.
**Sortie.** Revenir en tableau, poser un pied puis l’autre avant détendre bras et tronc.

**Respiration.** Installation: Inspirer au centre. Action ou maintien: Souffler pendant éloignement opposé. Retour: Inspirer au retour contrôlé. Base documentaire: Synchronisation proposée pour la variante, respiration libre prioritaire; ne pas forcer longue expiration.

**Muscles.** Rôles documentés: Tronc anti-extension et anti-rotation: NASM/PureGym. Inférences biomécaniques: Fléchisseurs hanche contrôlent jambe suspendue; épaule produit déplacement bras. Abdominaux stabilisent plutôt que réaliser un crunch. Limites de quantification: Aucun isolement du transverse démontré par ces guides.

**Erreurs et corrections.**

- Dos qui se creuse: réduire déplacement jambe ou garder genou plié.
- Bras et jambe du même côté: vérifier paire opposée avant repartir.
- Tête relevée: reposer tête, ce n’est pas hollow hold.

**Régressions.** Bouger une jambe pliée seulement, bras immobiles. Toucher doucement sol avec talon d’un genou encore plié, amplitude réduite.

**Inconfort/arrêt.** Arrêter en cas de douleur lombaire/hanche ou gêne à lever bras; revenir pieds posés. Contact dos-sol reste un repère, pas pression douloureuse à obtenir.

**Médias à contrôler.**

- Position 1: Tableau complet, tête posée, membres distincts et tibias horizontaux.
- Position 2: Bras droit/jambe gauche éloignés, autres membres au centre, bassin immobile.
- Vues: Trois quarts latéral pour distinguer membres opposés; dessus pour latéralité; profil pour lombaires.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Dos posé. Bras vers le plafond, genoux au-dessus des hanches. » / Action ou maintien: « Souffle. Éloigne un bras et la jambe opposée, sans creuser le dos. » / Retour: « Reviens au centre, puis change de côté. »

**Audit catalogue.**

- Texte actuel cohérent mais départ et limites d’amplitude trop vagues.
- Expirer pendant effort devient concret: effort est éloignement, pas levée au retour.
- Une répétition totale par côté doit être explicite en audio; PureGym vidéo compte paire gauche/droite comme une répétition, décision Tempo différente.

**Décisions et limites.** Contact lombaire confortable retenu; ne pas prescrire simultanément une lordose neutre stricte et écrasement maximal. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [NASM - Dead Bug](https://www.nasm.org/resource-center/exercise-library/dead-bug). Portée: Dead bug départ bras verticaux, hanches/genoux à 90°. Confirme: Stabilité anti-extension et coordination opposée. Limites/désaccords: Neutral spine et press lower back sont employés ensemble; utiliser contact confortable, sans promesse de neutralité géométrique parfaite. Consulté le 2026-10-12.
- [PureGym - How To Do Deadbugs](https://www.puregym.com/exercises/abs/deadbugs/). Portée: Dead bug bras et jambe opposés. Confirme: Bras verticaux, genoux au-dessus hanches; éloignement opposé contrôlé sans cambrure. Limites/désaccords: Ne définit pas amplitude universelle; texte vidéo compte les deux côtés comme une répétition, contrairement comptage total par côté proposé Tempo. Consulté le 2026-10-12.

<a id="ex30"></a>

## EX30 - Bird dog

**Variante :** Quadrupédie puis bras et jambe opposés, retour avant alternance. **État :** corroboration documentaire avec décisions à revoir; revue humaine non réalisée.

**Départ.** Mains à plat largeur épaules, doigts devant; poignets sous épaules, genoux sous hanches largeur bassin sur tapis. Pieds derrière, orteils repliés si confortable. Coudes tendus sans verrouillage forcé; regard sol, tête dans axe dos. [C-ACE-BIRD](https://www.acefitness.org/resources/everyone/exercise-library/14/bird-dog/) [C-NASM-BIRD](https://www.nasm.org/resource-center/exercise-library/bird-dog) [C-MAYO-CORE](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/core-strength/art-20546851)

**Action et fin.** Tendre une jambe en arrière et bras opposé devant. Chercher longueur, pas hauteur. Garder bassin et épaules parallèles sol; membres proches horizontale uniquement si dos ne se creuse pas.
**Retour.** Reposer main et genou sous leurs articulations, stabiliser les quatre appuis, puis autre paire.
**Sortie.** Revenir à quatre pattes et déplacer poids vers genoux pour libérer mains.

**Respiration.** Installation: Inspirer dans les quatre appuis. Action ou maintien: Souffler doucement en allongeant; si pause, respirer librement. Retour: Inspirer en replaçant main/genou. Base documentaire: Phases éditoriales; Mayo confirme respiration libre et séquence opposée.

**Muscles.** Rôles documentés: NASM: abdominaux, transverse et érecteurs stabilisent; obliques, fessiers et épaule participent. ACE: tronc/dos/hanche. Inférences biomécaniques: Fessier produit extension hanche, épaule l’élévation bras; rôle moteur distinct de stabilisation tronc. Limites de quantification: Aucune proportion.

**Erreurs et corrections.**

- Jambe trop haute: abaisser jusqu’à dos contrôlé.
- Bassin ouvert: pointer les deux hanches vers tapis.
- Déplacement trop rapide: séparer retour et alternance.

**Régressions.** Allonger une jambe en gardant orteils au sol. Lever uniquement bras ou jambe comme progression Mayo.

**Inconfort/arrêt.** Douleur poignet/genou: quitter appuis. Douleur lombaire ou épaule pendant extension: revenir sans maintenir position douloureuse; adapter après repos, demander avis si récurrent.

**Médias à contrôler.**

- Position 1: Quatre appuis, mains sous épaules et genoux sous hanches.
- Position 2: Bras et jambe opposés étendus, bassin horizontal, tête dans axe.
- Vues: Profil pour hauteur et cambrure; dessus indispensable pour détecter rotation/paires opposées.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « À quatre pattes, mains sous les épaules, genoux sous les hanches. » / Action ou maintien: « Allonge un bras et la jambe opposée. Le bassin reste face au sol. » / Retour: « Repose les appuis, puis change de côté. »

**Audit catalogue.**

- Genoux sous hanches et retour stabilisé manquent.
- Muscles uniquement core ne rendent pas dos/fessiers/épaules.
- Classe débutant à condition de régression; ACE classe version opposée intermédiaire.

**Décisions et limites.** Pas de désaccord majeur sur mécanique; cues précis, régressions et spécification visuelle restent à revoir. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [ACE - Bird-dog](https://www.acefitness.org/resources/everyone/exercise-library/14/bird-dog/). Portée: Quadrupédie, bras et jambe opposés. Confirme: Mains sous épaules, genoux sous hanches, membres près horizontale seulement avec contrôle; pas rotation. Limites/désaccords: Classe intermédiaire, alors que catalogue débutant; niveau dépend de maîtrise. Consulté le 2026-10-12.
- [NASM - Bird Dog](https://www.nasm.org/resource-center/exercise-library/bird-dog). Portée: Variante exacte alternée. Confirme: Stabilité tronc, retour contrôlé, abdominaux et érecteurs stabilisateurs, fessiers/épaule associés. Limites/désaccords: Rôles qualitatifs; explication de pression et apnée non reprise telle quelle. Consulté le 2026-10-12.
- [Mayo Clinic - Exercises to improve your core strength](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/core-strength/art-20546851). Portée: Quadruped, planche modifiée et crunch pieds au mur. Confirme: Respiration libre; bird dog opposé comme progression; consulter si problème de dos/ostéoporose/autre préoccupation médicale. Limites/désaccords: Crunch pieds au mur diffère du crunch pieds au sol; ce lien ne valide pas toutes les variantes. Consulté le 2026-10-12.

<a id="ex31"></a>

## EX31 - Crunch inversé

**Variante :** Crunch inversé court, départ genoux au-dessus hanches, tête posée. **État :** corroboré sur principe; décision amplitude/retour à arbitrer; revue humaine non réalisée.

**Départ.** Dos et tête posés sur tapis, bras le long du corps un peu écartés, paumes au sol. Lever les pieds pour cuisses verticales et genoux pliés environ à angle droit; tibias horizontaux. Épaules restent relâchées sur tapis. [C-ACE-REVERSE](https://www.acefitness.org/resources/everyone/exercise-library/76/reverse-crunch/) [C-PURE-REVERSE](https://www.puregym.com/exercises/abs/reverse-crunches/) [C-PURE-REVERSE-DK](https://www.puregym.dk/inspiration/reverse-crunch) [C-CATALYST-REVERSE](https://www.catalystathletics.com/exercise/320/Reverse-Crunch/) [C-MAYO-CORE](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/core-strength/art-20546851)

**Action et fin.** Souffler et enrouler doucement bassin vers côtes, jusqu’à un petit décollement des fesses. Garder angle genoux stable; il ne s’agit ni d’un lancer jambes ni d’une chandelle sur nuque.
**Retour.** Reposer bassin lentement puis retrouver genoux au-dessus hanches; ne pas abaisser jambes loin du corps pendant répétitions de cette variante.
**Sortie.** Après retour bassin posé, descendre un pied puis l’autre, reposer jambes confortablement.

**Respiration.** Installation: Respirer au tableau. Action ou maintien: Expirer pendant enroulement du bassin. Retour: Inspirer pendant descente bassin. Base documentaire: Phases ACE explicites.

**Muscles.** Rôles documentés: ACE/PureGym: abdominaux mobilisent bassin, obliques et fléchisseurs hanche participent. Inférences biomécaniques: Grand droit contribue à rapprocher bassin/cage, bras servent équilibre. Ne pas présenter « bas des abdos » comme muscle séparé. Limites de quantification: Pas classement d’efficacité ni pourcentages.

**Erreurs et corrections.**

- Balancer jambes: raccourcir enroulement, pause départ.
- Rouler jusqu’à nuque: garder épaules/tête posées, réduire hauteur.
- Cambrer au retour: revenir uniquement au tableau.

**Régressions.** Basculer légèrement bassin avec pieds posés sans décoller fesses. Réduire décollement et nombre de répétitions.

**Inconfort/arrêt.** Douleur dos/nuque, pression inhabituelle abdominale ou impossibilité de retour contrôlé: terminer et poser pieds. Problème de dos connu ou ostéoporose: demander adaptation professionnelle, conformément contexte Mayo.

**Médias à contrôler.**

- Position 1: Genoux au-dessus hanches, angle fléchi stable, tête et paumes posées.
- Position 2: Bassin légèrement enroulé et décollé, épaules toujours au sol, pas jambes verticales en chandelle.
- Vues: Profil prioritaire; trois quarts léger peut montrer appuis bras, dessus non indispensable au petit enroulement.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Dos et tête posés. Garde les genoux au-dessus des hanches. » / Action ou maintien: « Souffle et enroule doucement le bassin, sans lancer les jambes. » / Retour: « Repose le bassin lentement, puis retrouve le centre. »

**Audit catalogue.**

- Départ jambes fléchies ne dit pas si pieds en l’air.
- Secondary vide omet participation fléchisseurs hanche documentée.
- Retour de bassin cohérent, préciser jambes restent en tableau.

**Décisions et limites.** ACE ramène genoux au-dessus hanches, PureGym DK ramène talons au sol; Catalyst pieds proches sol sans toucher. Pour EX31 court retenir tableau ACE. Variante de prise Catalyst exclue. PureGym UK dit relever épaules dans transcription vidéo mais pas tutoriel écrit: retenir tête/épaules posées ACE, point à examiner humainement. Petit décollement Tempo reste choix conservateur, pas consensus chiffré. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [ACE - Reverse Ab Crunch](https://www.acefitness.org/resources/everyone/exercise-library/76/reverse-crunch/). Portée: Enroulement bassin, genoux à 90°. Confirme: Bassin vers cage thoracique, bras supports, expiration montée/inspiration retour, genoux reviennent au-dessus hanches. Limites/désaccords: ACE propose un enroulement plus grand; Tempo retient un petit décollement, à revoir humainement. Consulté le 2026-10-12.
- [PureGym - How To Do Reverse Crunches](https://www.puregym.com/exercises/abs/reverse-crunches/). Portée: Crunch inversé au sol. Confirme: Flexion vertébrale par déplacement bassin, abdominaux/obliques avec fléchisseurs de hanche, contrôle sans élan. Limites/désaccords: Variante de retour des pieds plus bas que ACE; texte vidéo dit de relever épaules alors que tutoriel écrit décrit fesses/lombaires. Cette contradiction impose arbitrage, pas reprise automatique. Consulté le 2026-10-12.
- [PureGym - Reverse crunch](https://www.puregym.dk/inspiration/reverse-crunch). Portée: Description danoise avec talons au sol entre répétitions. Confirme: Bassin décollé par enroulement sans balancer jambes. Limites/désaccords: Désaccord retour talons au sol versus ACE genoux au-dessus hanches; même éditeur que version UK, pas source indépendante supplémentaire. Consulté le 2026-10-12.
- [Catalyst Athletics - Reverse Crunch](https://www.catalystathletics.com/exercise/320/Reverse-Crunch/). Portée: Crunch inversé avec prise derrière tête. Confirme: Contracter abdominaux pour enrouler bassin, pas lancer jambes, ne pas hyperétendre lombaires. Limites/désaccords: Appui main différent; contenu obtenu par index web, ouverture directe échouée. Sert à arbitrer principe, pas à copier appuis. Consulté le 2026-10-12.
- [Mayo Clinic - Exercises to improve your core strength](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/core-strength/art-20546851). Portée: Quadruped, planche modifiée et crunch pieds au mur. Confirme: Respiration libre; bird dog opposé comme progression; consulter si problème de dos/ostéoporose/autre préoccupation médicale. Limites/désaccords: Crunch pieds au mur diffère du crunch pieds au sol; ce lien ne valide pas toutes les variantes. Consulté le 2026-10-12.

### Recoupement complémentaire du 12 octobre 2026

Conserver retour genoux au-dessus des hanches, pieds suspendus, tête/épaules posées; ne pas importer talons au sol de PureGym DK. Amplitude courte reste choix Tempo.

- **Positions :** Retour ACE relu; petit décollement sans amplitude universelle.
- **Muscles :** Pas nouvelle preuve musculaire.
- **Conseils :** Cue retour doit nommer bassin, pas descente pieds au sol.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [C-ACE-REVERSE](https://www.acefitness.org/resources/everyone/exercise-library/76/reverse-crunch/), [C-PURE-REVERSE](https://www.puregym.com/exercises/abs/reverse-crunches/), [C-CATALYST-REVERSE](https://www.catalystathletics.com/exercise/320/Reverse-Crunch/).

<a id="ex32"></a>

## EX32 - Crunch court

**Variante :** Crunch court, pieds posés, bras devant sans prise tête. **État :** corroboration documentaire avec décisions à revoir; revue humaine non réalisée.

**Départ.** Dos sur tapis, genoux fléchis et pieds à plat largeur bassin. Bassin posé, bas du dos en contact confortable. Bras devant, mains glissent sur cuisses; épaules relâchées, menton légèrement rentré sans écraser gorge. [C-ACE-CRUNCH](https://www.acefitness.org/resources/everyone/exercise-library/52/crunch/) [C-PURE-CRUNCH](https://www.puregym.com/exercises/abs/crunches/)

**Action et fin.** En soufflant, rapprocher cage thoracique du bassin et décoller épaules/haut du dos d’une petite hauteur. Pieds et bassin restent posés; tête accompagne buste sans traction mains.
**Retour.** Inspirer et reposer lentement haut du dos puis tête; ne pas partir en position assise.
**Sortie.** Reposer tête et bras, détendre tronc avec pieds encore au sol.

**Respiration.** Installation: Inspirer avant répétition. Action ou maintien: Expirer pendant petit enroulement du buste. Retour: Inspirer pendant descente. Base documentaire: ACE et PureGym DK décrivent ces phases.

**Muscles.** Rôles documentés: ACE/PureGym: abdominaux pour flexion tronc; grand droit cible principale. Inférences biomécaniques: Obliques contribuent sans rotation intentionnelle; muscles nuque accompagnent tête mais ne constituent pas cible. Limites de quantification: core stabilizer reste trop vague pour une carte anatomique fine.

**Erreurs et corrections.**

- Tirer tête: mains devant, baisser hauteur.
- Monter assis: arrêter dès décollement épaules suffisant.
- Pieds décollent/bassin bascule fortement: réduire vitesse et hauteur.

**Régressions.** Plus petit décollement; faire moins de répétitions. Abandonner crunch en cas de gêne cervicale persistante et choisir exercice tête posée à faire adapter.

**Inconfort/arrêt.** Nuque ou dos douloureux: reposer et arrêter. Une brûlure musculaire progressive n’oblige pas à poursuivre; douleur vive, irradiée ou inhabituelle mérite avis.

**Médias à contrôler.**

- Position 1: Pieds plats, genoux pliés, tête posée et mains sur cuisses.
- Position 2: Épaules décollées modérément, pieds/bassin encore posés, pas traction tête.
- Vues: Profil prioritaire pour amplitude et nuque; trois quarts pour vérifier pieds.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Pieds au sol, mains sur les cuisses. » / Action ou maintien: « Souffle et décolle légèrement les épaules. Garde la nuque confortable. » / Retour: « Repose lentement le haut du dos. »

**Audit catalogue.**

- Position mains sans traction non fixée; retenir mains sur cuisses évite image ambiguë.
- Petite amplitude déjà cohérente.
- Ne pas utiliser crunch pieds au mur Mayo comme validation exacte.

**Décisions et limites.** Bras devant retenus pour réduire ambiguïté traction; source ACE derrière tête consultée mais placement PureGym choisi. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [ACE - Crunch](https://www.acefitness.org/resources/everyone/exercise-library/52/crunch/). Portée: Crunch au sol pieds posés. Confirme: Petite flexion tronc, pieds/bassin/lombaires restent au sol, souffle montée/inspiration descente. Limites/désaccords: Mains derrière tête; catalogue ne tranche pas placement, proposition Tempo bras devant. Consulté le 2026-10-12.
- [PureGym - How To Do Ab Crunches](https://www.puregym.com/exercises/abs/crunches/). Portée: Crunch court pieds au sol. Confirme: Mains sur cuisses ou bras croisés; épaules/haut dos soulevés, bas dos posé, retour lent. Limites/désaccords: Pas règle de hauteur métrique; instruction vidéo contient texte annexe plank à ne pas mélanger. Consulté le 2026-10-12.

<a id="ex33"></a>

## EX33 - Mountain climbers lents

**Variante :** Mountain climber lent, genou sous poitrine, retour complet puis alternance sans saut. **État :** trajet poitrine et adaptation lente corroborés; respiration à revoir; revue humaine non réalisée.

**Départ.** À quatre pattes, mains à plat sous épaules largeur épaules, doigts devant; allonger jambes pour appui paumes et avant-pieds. Coudes tendus sans hyperextension forcée, regard sol. Bassin dans ligne tronc/jambes; pieds largeur confortable. [C-NSCA-TSAC](https://www.nsca.com/globalassets/education/tsac-report/tsac-report-55.pdf) [C-NHS-CLIMB](https://www.kentmedwaymentalhealth.nhs.uk/media/2611/km1237-physiotherapy-cardio-exercise-booklet.pdf) [C-NHS-CLIMB-REG](https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Medicine/Cardiology/Cardiac%20Rehabilitation%20Circuit%20Training%20Programme.pdf) [C-PURE-CLIMB](https://www.puregym.com/exercises/full-body/mountain-climbers/)

**Action et fin.** Lever un pied et ramener ce genou sous poitrine, dans son couloir, sans chercher toucher coude. L’autre avant-pied et les deux mains restent appuis. Garder épaules proches verticale mains et bassin sans rotation.
**Retour.** Replacer le pied arrière, retrouver planche stable, puis ramener autre genou; pas permutation sautée.
**Sortie.** Poser un genou puis l’autre et ramener poids vers genoux avant libérer mains.

**Respiration.** Installation: Respirer en planche. Action ou maintien: Expirer pendant rapprochement genou. Retour: Inspirer pendant retour pied. Base documentaire: Synchronisation proposée pour tempo lent, non universelle; souffle libre si rythme ne convient pas.

**Muscles.** Rôles documentés: NSCA: grand droit/obliques pour stabilité; guide NHS confirme contrôle ventre. Inférences biomécaniques: Fléchisseurs hanche amènent cuisse; triceps et stabilisateurs épaules tiennent appui, jambe arrière participe au soutien. Limites de quantification: Le travail cardio dépend cadence; version lente ne justifie pas promesse cardiovasculaire chiffrée.

**Erreurs et corrections.**

- Deux pieds sautent: revenir à pas séparés.
- Bassin chute: raccourcir trajet genou ou revenir genoux.
- Genou croise: rester sous même côté poitrine.

**Régressions.** Mains sur plan de travail fixe, pied revient avant alterner; principe documenté UHCW. Trajet genou plus court au sol.

**Inconfort/arrêt.** Douleur poignet/épaule: quitter appui; plan élevé peut réduire charge mais ne garantit pas absence de douleur. Gêne hanche/dos: cesser et réduire amplitude seulement après retour confortable.

**Médias à contrôler.**

- Position 1: Planche bras tendus, pieds posés, tête dans axe.
- Position 2: Un genou sous poitrine, pied correspondant décollé; autre jambe arrière tendue, mains inchangées.
- Vues: Profil pour appuis/bassin; dessus pour genou dans couloir et absence croisement.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Mains sous les épaules. Trouve ta planche. » / Action ou maintien: « Souffle et ramène un genou sous la poitrine. » / Retour: « Repose le pied derrière toi avant de changer de côté. »

**Audit catalogue.**

- Approcher un genou manque destination et appui pied opposé.
- Sources explosives Royal Berkshire ne prouvent pas le tempo lent.
- Stabilisateurs actuellement vides malgré appui haut du corps.

**Décisions et limites.** NSCA décrit genou vers coude ipsilatéral; PureGym décrit genou poitrine et autorise départ lent. Tempo retient poitrine, sans importer recommandation de vitesse maximale. Pas d’atteinte obligatoire poitrine/coude. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [NSCA - TSAC Report 55 - Abdominal and lumbo-pelvic stability exercises, p.17](https://www.nsca.com/globalassets/education/tsac-report/tsac-report-55.pdf). Portée: Mountain climbers et roue à genoux. Confirme: Climber mains sous épaules, genou vers coude ipsilatéral; roue genoux sous hanches, bras tendus, gainage et rétroversion. Limites/désaccords: Climber trajet vers coude différent de genou sous poitrine; rollout complet différent de court; respiration non précisée. Consulté le 2026-10-12.
- [Kent and Medway NHS and Social Care Partnership Trust - Physiotherapy cardio exercise booklet](https://www.kentmedwaymentalhealth.nhs.uk/media/2611/km1237-physiotherapy-cardio-exercise-booklet.pdf). Portée: Mountain climbers, vitesse adaptable. Confirme: Regard sol, ventre contrôlé, jambes alternées; augmenter vitesse pour augmenter défi. Limites/désaccords: Texte court, aucune garantie de tolérance des poignets; variante lente à compléter. Consulté le 2026-10-12.
- [University Hospitals Coventry and Warwickshire NHS Trust - Cardiac Rehabilitation Circuit Training Programme, p.6](https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Medicine/Cardiology/Cardiac%20Rehabilitation%20Circuit%20Training%20Programme.pdf). Portée: Mountain climber mains sur chaise/plan de travail. Confirme: Planche sur support haut, genou vers poitrine, retour puis autre côté. Limites/désaccords: Contexte cardiaque; dosage et support chaise non transposés automatiquement à domicile. Consulté le 2026-10-12.
- [PureGym - How to do Mountain Climbers](https://www.puregym.com/exercises/full-body/mountain-climbers/). Portée: Genou vers poitrine, retour avant alternance; départ lent possible. Confirme: Mains sous épaules, genou sans contact sol; aller lent pour débuter puis accélération facultative. Limites/désaccords: Article qualifie globalement exercice explosif, mais conseil take it slowly valide adaptation lente; pas cycle respiratoire précis. Consulté le 2026-10-12.

<a id="ex34"></a>

## EX34 - Roue abdominale à genoux, amplitude courte

**Variante :** Roue à genoux courte, bras tendus, aucun objectif de parallèle au sol. **État :** variante courte corroborée; respiration et média à revoir; revue humaine non réalisée.

**Départ.** Vérifier roue, poignées et sol dégagé non glissant. À genoux sur tapis stable, genoux largeur bassin sous hanches; mains fermées sur poignées, roue sous épaules ou légèrement devant. Bras tendus, poignets dans prolongement avant-bras, regard sol. Préparer tronc et bassin sans cambrure. [C-NSCA-WHEEL](https://www.nsca.com/globalassets/education/nsca-coach/nsca-coach-7.1.pdf) [C-NSCA-TSAC](https://www.nsca.com/globalassets/education/tsac-report/tsac-report-55.pdf) [C-PURE-WHEEL](https://www.puregym.com/exercises/abs/ab-wheel-rollouts/) [C-NASM-ABS](https://www.nasm.org/resource-center/blog/training/best-abs-exercises)

**Action et fin.** Rouler très progressivement en avant: épaules se fléchissent, hanches s’ouvrent, genoux restent fixes. S’arrêter alors que retour encore contrôlable, avant affaissement lombaire. Courte amplitude n’est pas une distance universelle et ne vise pas buste parallèle sol.
**Retour.** Ramener roue et bassin ensemble vers départ, sans tirer brusquement des bras ni s’asseoir soudain sur talons.
**Sortie.** Revenir roue proche, transférer poids vers genoux, poser roue avant relâcher poignées.

**Respiration.** Installation: Souffler doucement et préparer tronc. Action ou maintien: Respiration continue pendant aller; une inspiration calme à aller et expiration au retour peuvent servir de cadence. Retour: Souffler en ramenant roue, sans apnée. Base documentaire: Proposition à faire revoir; sources sélectionnées ne fixent pas phases, « effort » existe à aller et retour.

**Muscles.** Rôles documentés: NSCA: tronc stabilise, fléchisseurs hanche participent retour; PureGym: grand droit/obliques/érecteurs/fessiers. Inférences biomécaniques: Épaules/grand dorsal et bras contrôlent roue; leurs rôles changent avec angle. Limites de quantification: Aucun muscle isolé ni classement de force établi.

**Erreurs et corrections.**

- Aller trop loin: réduire course avant répétition suivante.
- Cambrure à aller ou retour: cesser, proposer EX29.
- S’asseoir très vite: course plus courte et retour continu.

**Régressions.** Course encore plus courte, seulement si contrôle réel. Dead bug ou planche genoux, pas progression automatique vers roue.

**Inconfort/arrêt.** Arrêter pour douleur dos, épaules, poignets ou genoux, roue incontrôlable, respiration bloquée. Maîtrise déclarée dans réglages ne prouve pas maîtrise réelle; première exécution avec regard technique recommandée.

**Médias à contrôler.**

- Position 1: Roue proche, appuis genoux stables, poignets/bras/épaules lisibles.
- Position 2: Roue légèrement avancée, hanche ouverte, bassin contrôlé; angle permet retour sans dos creusé.
- Vues: Profil indispensable: roue, bassin, lombaires, genoux entiers; dessus secondaire pour trajectoire droite et appuis symétriques.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « À genoux, roue proche. Prépare ton tronc. » / Action ou maintien: « Avance juste un peu, sans creuser le dos. » / Retour: « Souffle et ramène la roue doucement. » / Sortie: « Repose la roue avant de relâcher les mains. »

**Audit catalogue.**

- Tip actuel restriction produit n’explique pas mécanique.
- Expiration pendant effort/inspiration retour est ambiguë pour anti-extension roue.
- Erreur dos seulement au retour omet risque de contrôle à aller.
- Gates wheel_mastery et technique_viewed nécessaires mais pas validation humaine.

**Décisions et limites.** PureGym confirme réduire course; NSCA décrit rollout complet. Retenir courte course, pas seuil en cm. Ne pas importer leurs amplitudes complètes dans keyframe 2. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [NSCA - NSCA Coach 7.1 - Ab Wheel, p.13](https://www.nsca.com/globalassets/education/nsca-coach/nsca-coach-7.1.pdf). Portée: Roue à genoux. Confirme: Départ à genoux, extension hanche et flexion épaule à aller; tronc et fléchisseurs hanche retour. Limites/désaccords: Ne fixe ni courte distance ni respiration; deux documents NSCA restent une seule famille éditoriale. Consulté le 2026-10-12.
- [NSCA - TSAC Report 55 - Abdominal and lumbo-pelvic stability exercises, p.17](https://www.nsca.com/globalassets/education/tsac-report/tsac-report-55.pdf). Portée: Mountain climbers et roue à genoux. Confirme: Climber mains sous épaules, genou vers coude ipsilatéral; roue genoux sous hanches, bras tendus, gainage et rétroversion. Limites/désaccords: Climber trajet vers coude différent de genou sous poitrine; rollout complet différent de court; respiration non précisée. Consulté le 2026-10-12.
- [PureGym - How To Do Ab Wheel Rollouts](https://www.puregym.com/exercises/abs/ab-wheel-rollouts/). Portée: Roue à genoux et réduction amplitude. Confirme: Genoux sous hanches, bras tendus, avancer/retour gainé; réduire amplitude si dos se cambre. Limites/désaccords: Arrêt au stretch ou parallèle ne convient pas à variante courte: retenir contrôle avant limite, jamais chercher étirement douloureux. Consulté le 2026-10-12.
- [NASM - Best Abs Exercises: Science-Based Core Training](https://www.nasm.org/resource-center/blog/training/best-abs-exercises). Portée: Anti-extension et rollout. Confirme: Plus de levier demande plus au tronc; réserver rollout à maîtrise corporelle suffisante. Limites/désaccords: Source mécanisme/programme; pas validation des appuis ni respiration exacte. Consulté le 2026-10-12.

### Recoupement complémentaire du 12 octobre 2026

Conserver courte course contrôlable, aller et retour à examiner ensemble; aucune cible buste parallèle. Respiration proposée reste non approuvée.

- **Positions :** Réduction amplitude PureGym relue; aucun seuil centimétrique.
- **Muscles :** Pas nouvelle preuve musculaire.
- **Conseils :** Éviter cue effort ambigu; boucle ne prouve pas contrôle du retour.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [C-NSCA-WHEEL](https://www.nsca.com/globalassets/education/nsca-coach/nsca-coach-7.1.pdf), [C-PURE-WHEEL](https://www.puregym.com/exercises/abs/ab-wheel-rollouts/).

<a id="ex35"></a>

## EX35 - Hollow hold groupé

**Variante :** Hollow hold groupé statique, genoux pliés en l’air, bras vers cuisses. **État :** groupé bras vers talons recoupé; entrée/sortie et média à revoir; revue humaine non réalisée.

**Départ.** Allongé dos au sol, genoux pliés au-dessus hanches, pieds en l’air, tibias environ horizontaux. Bras le long du corps, mains dirigées vers cuisses. Basculer doucement bassin pour garder lombaires en contact confortable; tête d’abord posée. [C-ACE-HOLLOW](https://www.acefitness.org/resources/pros/expert-articles/8989/crunch-time-an-evidence-based-approach-to-training-the-abs/) [C-CROSSFIT-HOLLOW](https://assets.crossfit.com/pdfs/seminars/SMERefs/Gymnastics/GymnasticsCourse_SeminarGuide.pdf) [C-MAYO-CORE](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/core-strength/art-20546851)

**Action et fin.** Souffler pour relever légèrement tête/omoplates en rapprochant côtes du bassin; bras tendus vers cuisses sans saisir genoux. Maintenir jambes groupées et lombaires posées. Position reste fixe, pas balancement hollow rock ni crunch répétitif.
**Retour.** Pendant tenue, garder même flexion genoux; si contact dos ou respiration perdus, terminer plutôt qu’allonger jambes.
**Sortie.** Reposer épaules puis tête, poser un pied puis l’autre, relâcher tronc.

**Respiration.** Installation: Souffler doucement au placement bassin et relevé épaules. Action ou maintien: Respirer continuellement pendant tenue; petits cycles confortables, sans immobiliser souffle. Retour: Respirer librement en reposant. Base documentaire: Phases installation proposées; sources hollow ne fournissent pas cycle précis; respiration libre cohérente recommandation Mayo.

**Muscles.** Rôles documentés: ACE: grand droit et stabilisateurs antérieurs; CrossFit: tension abdominaux et bascule bassin. Inférences biomécaniques: Fléchisseurs hanche soutiennent cuisses fléchies; épaules/bras interviennent moins bras devant que bras au-dessus tête. Limites de quantification: Ne pas annoncer isolation transverse ou ciblage « abdos inférieurs ». 

**Erreurs et corrections.**

- Lombaires se décollent: rapprocher genoux ou terminer tenue.
- Menton plaqué poitrine: réduire relevé, garder nuque confortable.
- Tendre jambes: conserver groupé de cette fiche.

**Régressions.** Tenue très courte puis repos tête au sol. Pieds posés et petit crunch devient autre variante, à nommer; dead bug tête posée si cervicales gênées.

**Inconfort/arrêt.** Gêne cervicale/dos ou apnée: reposer. Lombaires au sol n’autorisent pas une pression douloureuse; avis si symptômes récurrents. Adaptation grossesse/postpartum ou pathologie relève d’un professionnel.

**Médias à contrôler.**

- Position 1: Genoux groupés en l’air et tête posée; préciser que départ pieds posés du catalogue est installation possible.
- Position 2: Omoplates légèrement décollées, genoux toujours groupés, lombaires posées, mains vers cuisses.
- Vues: Profil pour contact lombaire/omoplates; dessus pour symétrie, ne prouve pas contact bas dos.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Genoux pliés au-dessus des hanches. Bras vers les cuisses. » / Action ou maintien: « Décolle légèrement les épaules. Garde le bas du dos posé et respire. » / Sortie: « Repose la tête, puis les pieds. »

**Audit catalogue.**

- Dos au sol, genoux fléchis ne dit pas si pieds posés ou suspendus.
- Étape 2 manque appui lombaire et position bras.
- Animation 1/2 doit être étiquetée placement, pas rythme répétitif du maintien.

**Décisions et limites.** GMB corrobore désormais groupé avec bras vers talons et progression vers leviers longs; ACE/CrossFit recoupent famille groupée. Position tibias horizontaux et ordre de sortie restent choix Tempo; ne pas imposer menton contre poitrine. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [ACE - Crunch Time: An Evidence-based Approach to Training the Abs](https://www.acefitness.org/resources/pros/expert-articles/8989/crunch-time-an-evidence-based-approach-to-training-the-abs/). Portée: Hollow hold avec régression genoux tabletop. Confirme: Lombaires en contact sol, tension chaîne antérieure, genoux fléchis possible. Limites/désaccords: Position des bras groupée pas précisément imposée; hold et rock distincts. Consulté le 2026-10-12.
- [CrossFit - Gymnastics Training Guide, p.15](https://assets.crossfit.com/pdfs/seminars/SMERefs/Gymnastics/GymnasticsCourse_SeminarGuide.pdf). Portée: Hollow au sol et option tucked. Confirme: Bassin basculé, lombaires sol, omoplates relevées; départ groupé explicitement possible. Limites/désaccords: Bras au-dessus tête/jambes tendues appartiennent progression, pas groupé Tempo; respiration non détaillée. Consulté le 2026-10-12.
- [Mayo Clinic - Exercises to improve your core strength](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/core-strength/art-20546851). Portée: Quadruped, planche modifiée et crunch pieds au mur. Confirme: Respiration libre; bird dog opposé comme progression; consulter si problème de dos/ostéoporose/autre préoccupation médicale. Limites/désaccords: Crunch pieds au mur diffère du crunch pieds au sol; ce lien ne valide pas toutes les variantes. Consulté le 2026-10-12.

### Recoupement complémentaire du 12 octobre 2026

Bras dirigés vers talons/cuisses désormais décrits par GMB; conserver maintien immobile. Tibias horizontaux et sortie progressive restent propositions.

- **Positions :** Configuration bras renforcée; ni inclinaison universelle tibias ni sortie exacte corroborées.
- **Muscles :** Paroi abdominale/obliques et fléchisseurs hanche mentionnés qualitativement; ne pas convertir discours tout le tronc en carte validée.
- **Conseils :** Raccourcir levier si contact lombaire perdu; respirer selon contexte général, pas cycle inventé.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [C-ACE-HOLLOW](https://www.acefitness.org/resources/pros/expert-articles/8989/crunch-time-an-evidence-based-approach-to-training-the-abs/), [C-CROSSFIT-HOLLOW](https://assets.crossfit.com/pdfs/seminars/SMERefs/Gymnastics/GymnasticsCourse_SeminarGuide.pdf), [C-GMB-HOLLOW](https://gmb.io/hollow-body/).

<a id="ex36"></a>

## EX36 - Touchers de talons alternés

**Variante :** Touchers de talons ipsilatéraux, pieds au sol, petit buste fléchi et alternance latérale. **État :** mécanique exacte corroborée; termes nuque/colonne à arbitrer; revue humaine non réalisée.

**Départ.** Dos sur tapis, genoux pliés, pieds plats largeur bassin; talons assez proches pour rejoindre confortablement leur direction. Bras tendus le long du corps, doigts vers talons. Décoller doucement épaules et tête, garder bassin et lombaires posés; nuque suit buste. [C-NSCA-HEEL](https://www.kinkaid.org/uploaded/Athletics/2015-16/Strength_Training.pdf) [C-SFS-HEEL](https://www.setforset.com/blogs/news/heel-touches) [C-BARBEND-HEEL](https://barbend.com/heel-touches/)

**Action et fin.** Incliner légèrement tronc vers droite et rapprocher main droite du talon droit, sans déplacer pieds ni tourner bassin. Contact talon facultatif: la petite flexion latérale est le mouvement, pas allongement du bras seul.
**Retour.** Revenir au centre en gardant épaules légèrement relevées, puis côté gauche. Un toucher-retour d’un côté vaut une répétition totale Tempo.
**Sortie.** Revenir au centre, reposer épaules et tête, détendre bras.

**Respiration.** Installation: Inspirer au centre. Action ou maintien: Expirer pendant chaque approche du talon. Retour: Inspirer en revenant au centre. Base documentaire: SFS et BarBend explicitement, manuel NSCA ne précise pas cycle.

**Muscles.** Rôles documentés: NSCA: abdominaux et obliques; SFS: obliques flexion latérale et grand droit maintien épaules. Inférences biomécaniques: Stabilisateurs abdominaux contrôlent bassin; pas rotation intentionnelle. Sentir hanche ne prouve pas rôle dominant fléchisseur. Limites de quantification: Sans pourcentages ou classement EMG.

**Erreurs et corrections.**

- Bassin roule: réduire inclinaison, garder pieds fixes.
- Tête force pour toucher: rapprocher talons ou viser leur direction.
- Seuls bras bougent: petit mouvement cage vers hanche du même côté.

**Régressions.** Talons rapprochés et trajet court. Faire un côté, repos complet tête au sol, puis autre; ne pas maintenir sous gêne cervicale.

**Inconfort/arrêt.** Douleur cervicale, lombaire, irradiée ou engourdissement: arrêter, reposer. Pas obligation d’atteindre talon; si gêne revient malgré réduction, choisir une autre variante avec professionnel.

**Médias à contrôler.**

- Position 1: Pieds plats, genoux pliés, épaules légèrement relevées au centre, bassin posé.
- Position 2: Main droite vers talon droit par petit mouvement latéral tronc; pieds inchangés. Deuxième côté à ajouter comme panneau/indication.
- Vues: Dessus prioritaire pour même côté et trajectoire latérale; trois quarts avant pour contact pieds; profil pour nuque et épaules.
- Animation: Pour un maintien, distinguer installation et maintien: une boucle entrée-sortie ne représente pas le travail isométrique. Pour un mouvement alterné, annoncer et montrer les deux côtés; deux images seules ne prouvent pas le trajet.

**Audio original proposé.** Installation: « Pieds au sol. Décolle légèrement les épaules. » / Action ou maintien: « Souffle et approche la main du talon du même côté. » / Retour: « Reviens au centre, puis change de côté. »

**Audit catalogue.**

- Étape 1 oublie bras, pieds plats et épaules relevées avant inclinaison.
- Catalogue obliques seul principal acceptable mais grand droit rôle maintien absent.
- Un média à deux positions ne montre pas alternance gauche/droite ni repos.

**Décisions et limites.** Manuel distingue toucher bilatéral et option oblique alternée: seule option alternée retenue. SFS chin neutral, BarBend gently tucked/neutral spine: retenir nuque confortable dans petit buste fléchi; ne pas parler colonne entièrement neutre. Synthèse originale. Les appuis et principes attribués sont documentaires; choix de bras, repères visuels, adaptations et cues Tempo restent propositions de coaching. Aucune quantification musculaire ni validation médicale individuelle.

**Registre des sources pour cette fiche.**

- [NSCA (document hébergé par The Kinkaid School) - NSCA Flight Manual - Module 4 - Ab Choice: Heel Touches, p.88](https://www.kinkaid.org/uploaded/Athletics/2015-16/Strength_Training.pdf). Portée: Touchers de talons et variante oblique alternée. Confirme: Pieds plats, genoux fléchis, épaules décollées, épaule/main du même côté vers talon; pas traction tête ni décollement lombaires. Limites/désaccords: Manuel ancien, provenance NSCA imprimée mais copie institutionnelle hébergée ailleurs; début décrit aussi toucher bilatéral, seule variante oblique concerne EX36. Consulté le 2026-10-12.
- [SET FOR SET - Heel Touches - Garett Reid, CSCS](https://www.setforset.com/blogs/news/heel-touches). Portée: Touchers alternés exacts. Confirme: Petite flexion latérale, grand droit maintient épaules, obliques mouvement, expiration toucher/inspiration centre. Limites/désaccords: Guide commercial rédigé par entraîneur; ses affirmations de protection générale et de muscle selon sensation ne sont pas retenues comme preuves. Consulté le 2026-10-12.
- [BarBend - Heel Touches - Jesse Zucker, NCSF CPT](https://barbend.com/heel-touches/). Portée: Démonstration originale entraîneur, touchers alternés. Confirme: Talons ipsilatéraux, lombaires sol, souffle toucher et inspiration centre. Limites/désaccords: Formulation spine neutral contredit flexion tronc nécessaire; retenir nuque confortable, pas colonne entièrement neutre; pas étude EMG spécifique. Consulté le 2026-10-12.


## Sources complémentaires consultées le 12 octobre 2026

- **[C-GMB-HOLLOW - Hollow Body Holds For A Strong And Functional Core](https://gmb.io/hollow-body/)**. Éditeur : GMB Fitness. Auteur : Ryan Hurst. Section : Here’s How To Do It, points 1-4 et progression suivante. Texte consulté le 2026-10-12. Portée : Tutoriel original groupé bras vers talons puis jambes/bras allongés. Limites : Pas de sortie séquencée ni respiration détaillée; menton tuck non adopté comme compression. Vidéos/images non examinées. Indépendance : Tradition gymnastique commune à CrossFit, rédaction distincte; même URL dans deux lots, une source unique.



# Référence mobilité - EX40 à EX46

Consultation : 12 octobre 2026. Synthèse originale en français, à relire par un professionnel compétent. Cette documentation ne valide ni les illustrations existantes ni les mouvements de personnes réelles. Aucun média actuel n’a été inspecté ici.

Les détails posturaux non explicitement documentés sont des propositions éditoriales. Les doses des protocoles médicaux ne sont pas transférées au programme Tempo. Une articulation ou une région ne constitue pas un muscle ; mobilité et étirement ne sont pas une preuve de renforcement.

## Registre des sources

- **M40a** - [Standing Trunk Rotation](https://www.acefitness.org/resources/everyone/exercise-library/106/standing-trunk-rotation/) - ACE. Debout avec medicine-ball, buste et tête coordonnés, retour contrôlé. Transfert sans charge, pas validation de rotation thoracique isolée.
- **M40b** - [Thoracic spine exercises](https://www.cuh.nhs.uk/patient-information/thoracic-spine-exercises/) - Cambridge University Hospitals NHS. Rotation assise, bras croisés, retour au milieu. Transfert debout à confirmer ; aucune amplitude chiffrée.
- **M41a** - [How to warm up before exercising](https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/) - NHS England. Cercles avant/arrière, bras pendants, en marchant. Appuis fixes Tempo constituent une adaptation.
- **M41b** - [The importance of stretching during your workday](https://sportsmedicine.mayoclinic.org/news/the-importance-of-stretching-during-your-workday/) - Mayo Clinic. Kinésithérapeute : rouler les épaules vers arrière et bas. Ne documente ni dose Tempo ni recrutement musculaire exact.
- **M42a** - [Knee to wall stretch](https://www.opalreturntowork.nhs.uk/exercises/knee-to-wall-stretch/) - OPAL / NHS. Fente face au mur, genou avant qui avance, pied entier posé. Source statique ; répétitions dynamiques et retrait du mur adaptés.
- **M42b** - [Foot and Ankle Conditioning Program](https://www.orthoinfo.org/recovery/foot-and-ankle-conditioning-program/) - American Academy of Orthopaedic Surgeons. Étirement genou arrière fléchi : soléaire, talons posés. Variante différente, ne confirme pas le genou avant de Tempo.
- **M43a** - [Standing Chest Stretch](https://www.acefitness.org/resources/everyone/exercise-library/209/standing-chest-stretch/) - ACE. Version debout sans matériel : rotation externe épaules et rapprochement omoplates sans hyperlordose. Bras derrière joints = progression distincte.
- **M43b** - [Upper body stretches for the workplace](https://www.mayoclinic.org/healthy-lifestyle/adult-health/multimedia/shoulder-stretches/vid-20084699) - Mayo Clinic. Rapprocher les omoplates pour étirer la poitrine ; mains derrière tête optionnelles. Respiration libre, sans rebond, douleur = excès.
- **M44a** - [Child’s Pose in Yoga: Benefits and Variations](https://health.clevelandclinic.org/childs-pose) - Cleveland Clinic. Bassin vers talons, front soutenu, bras avant ou côtés, coussins possibles. Position finale directe ; entrée quadrupède adaptée.
- **M44b** - [Mindful Movements: To Help You Heal and Recover](https://sharedfiles.mayoclinic.org/bedside/ope/GNT-20421908.html) - Mayo Clinic. Posture enfant, genoux écartés, appui face/tronc adaptable, bras au choix. Ne prouve pas un effet thérapeutique chez tous.
- **M45a** - [Four Hip Flexor Stretches to Relieve Tightness, from a PT](https://www.hss.edu/health-library/move-better/hip-flexor-stretch) - Hospital for Special Surgery. Demi-agenouillé, bassin légèrement rentré avec fessiers, faible transfert avant sans cambrure. Bras haut est progression distincte.
- **M45b** - [A guide to basic stretches](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/stretching/art-20546848) - Mayo Clinic. Genou sur serviette, pied opposé avant, tronc stable et déplacement avant. Même page : ischio avec talon au mur, variante différente de mains sous cuisse.
- **M46a** - [Anterior knee pain](https://www.newcastle-hospitals.nhs.uk/services/newcastle-occupational-health-service/information-for-staff/physiotherapy/self-help-leaflets/anterior-knee-pain/) - Newcastle Hospitals NHS. Dos au sol, mains derrière cuisse, genou initialement fléchi puis extension tolérée. Contexte rééducation, dose clinique non transférée.
- **M46b** - [Physiotherapy exercises ICAN](https://leedscommunityhealthcare.nhs.uk/our-services-a-z/physiotherapy-ican/physiotherapy-exercises-ican-physio/) - Leeds Community Healthcare NHS. Dos au sol, cuisse relevée, extension genou ; autre jambe droite. Ne confirme pas jambe appui fléchie. Public pédiatrique, dose non transférée.
- **M40c** - [Low intensity aerobic exercises - Spinal rotations](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/aerobic-exercises) - British Heart Foundation. Debout ou assis, bras croisés, haut du corps tourne, hanches devant. Confirme directement variante de base, pas isolation thoracique absolue.
- **M41c** - [Stretches for Exercise and Flexibility](https://www.heart.org/en/healthy-living/exercise-and-physical-activity/staying-motivated/stretches-for-exercise-and-flexibility) - American Heart Association. Épaules montent puis descendent et roulent arrière ; bilatéral ou alterné. Source indépendante supplémentaire du cercle, sans dose Tempo.
- **M42c** - [Ankle Dorsiflexion Knee to Wall](https://www.peak-physio.com.au/exercise/ankle-dorsiflexion-knee-to-wall/) - Peak Physio. Cabinet de kinésithérapie auteur de son exercice : fente au mur, pied plat, genou avance. Confirme directement mécanique ; retrait mur reste adaptation.
- **M42d** - [Knee to wall - ankle dorsiflexion](https://na.physitrack.com/home-exercise-video/knee-to-wall---ankle-dorsiflexion) - Physitrack. Éditeur clinique : pied avant, genou vers mur, balancement avant/arrière. Le texte évoque seuil de talon levé ; Tempo reste en deçà et garde talon posé.
- **M42e** - [Ankle Sprain Injury](https://www.plymouthhospitals.nhs.uk/display-pil/pil-ankle-sprain-injury-3960/) - University Hospitals Plymouth NHS. Genou vers mur, bassin sans rotation. Corroboration clinique, contexte entorse et maintien statique, doses individuelles non transférées.
- **M46c** - [Hip Conditioning Program - Supine Hamstring Stretch](https://orthoinfo.aaos.org/globalassets/pdfs/hip-conditioning-program-2026.pdf) - American Academy of Orthopaedic Surgeons. Dos au sol, deux genoux initialement fléchis, mains derrière cuisse, genou cible étendu ; appui opposé fléchi confirmé. Ne pas tirer articulation genou.
- **M40d** - [Alternating trunk rotation in standing adaptive BKA](https://ca.physitrack.com/home-exercise-video/alternating-trunk-rotation-in-standing-%2528adaptive---bka%2529) - Physitrack. Debout sans matériel, bras croisés poitrine, bassin devant, rotation alternée avec retour. Même consigne de base, contexte adaptation amputation sous genou à ne pas transférer comme prescription.

<a id="ex40"></a>

## EX40 - Rotations thoraciques debout

**Variante :** Debout, bras croisés sur poitrine, sans charge, bassin orienté devant.
**État documentaire :** `corroborated_base_variant`. Revue technique humaine : en attente.

### Preuves et limites

- M40c : voir registre, variante et transfert explicités.
- M40d : voir registre, variante et transfert explicités.
- M40a : voir registre, variante et transfert explicités.
- M40b : voir registre, variante et transfert explicités.
- BHF et Physitrack décrivent indépendamment la même consigne debout sans charge, bras croisés, bassin devant. Physitrack étiquette une adaptation BKA : confirmation descriptive seulement, pas prescription pour ce public.
- ACE avec charge et CUH assis restent corroborations de variantes distinctes. Aucune source ne démontre isolation parfaite thoracique ni amplitude universelle.

**Arbitrage :** Choix bras croisés sans charge selon BHF ; ne pas transférer bras tendus lestés ACE.

### Position initiale

- Pieds : Deux pieds entiers au sol, écartement confortable, poids réparti.
- Genoux : Souples, sans verrouillage.
- Bassin : Face devant ; ne pas rechercher immobilité absolue en forçant.
- Colonne : Buste redressé sans extension lombaire volontaire.
- Tête : Suit le haut du buste, sans rotation cervicale supplémentaire.
- Omoplates : Détendues ; ne pas les serrer en permanence.
- Bras : Avant-bras croisés, mains posées sur épaules opposées, aucune traction.
- Appuis : Sol stable ; chaise pour variante assise distincte.

### Exécution et sortie

- Action : Tourner lentement le haut du buste vers un côté, pieds posés.
- Fin de mouvement : Arrêter avant que bassin entraîne tout le corps, avant inclinaison ou inconfort.
- Maintien : Brève pause confortable, aucun étirement forcé.
- Sortie : Revenir au centre, puis autre côté. Un côté constitue une rotation ; documenter le comptage total.

Respiration libre et régulière. Expirer à la mise en tension peut guider le rythme, sans obligation ni apnée ; consigne éditoriale à revoir humainement.

### Structures et rôles

- Structures mobilisées : Région thoracique, sans prétendre isoler chaque vertèbre.
- Muscles étirés : Aucun rôle spécifique établi pour cette variante.
- Muscles renforcés : Aucun rôle spécifique établi pour cette variante.
- Rôles inférés, à confirmer : Obliques et muscles du dos participent au contrôle ; pas preuve de renforcement avec cette charge.

### Erreurs, corrections et adaptations

- Pieds pivotants/bassin qui suit entièrement : réduire rotation.
- Tête tournée seule : orienter sternum et tête ensemble.
- Cambrure ou élan : ralentir et repartir du milieu.
- Amplitude plus petite ; version assise stable avec pieds posés.
- Ne pas ajouter medicine-ball ou bras tendus à la démonstration de base.

Arrêter si douleur, pincement articulaire, vertige ou fourmillement. Une tension douce ne doit pas devenir douloureuse. Après blessure, opération ou avec restrictions individuelles, faire adapter la variante par un professionnel. Aucune garantie universelle de sécurité.

Durée/répétitions à décider dans le programme après revue ; les doses de rééducation ou les amplitudes des sources ne sont pas un standard universel.

### Référence visuelle à deux positions

- Caméra : Trois quarts avant, corps entier ; vue du dessus complémentaire pour différencier bassin et épaules.
- Position 1 : Pieds et bassin face devant, sternum milieu, bras croisés.
- Position 2 : Sternum tourné, bassin encore globalement devant, pieds inchangés, tête suit sternum.
- Contrôles : Pas de changement de taille ou perspective entre images.; Montrer retour centre et symétrie dans animation.

### Audio court proposé

- Croise les bras sur la poitrine.
- Tourne doucement le buste, pieds stables.
- Reviens au centre, puis change de côté.

### Audit du catalogue actuel

- Choisir bras croisés au lieu de « mains ou bras devant ».
- thoracic_spine est une région, pas un muscle.
- Installation tapis au sol inutile pour cette variante.

<a id="ex41"></a>

## EX41 - Cercles d’épaules

**Variante :** Debout immobile, bras pendants, cercles vers arrière.
**État documentaire :** `corroborated_base_movement_three_publishers`. Revue technique humaine : en attente.

### Preuves et limites

- M41a : voir registre, variante et transfert explicités.
- M41b : voir registre, variante et transfert explicités.
- M41c : voir registre, variante et transfert explicités.
- NHS ajoute la marche, AHA et Mayo corroborent le cercle arrière. Appuis fixes et détail genoux sont compléments éditoriaux.
- Ordre avant/bas arrière peut varier : trajectoire circulaire continue, pas simple haussement.

**Arbitrage :** Cercle arrière de base ; cercle avant distinct. Les deux positions actuelles ne prouvent pas un cercle.

### Position initiale

- Pieds : Pieds posés, largeur confortable.
- Genoux : Souples.
- Bassin : Stable, sans balancement.
- Colonne : Redressée, sans bomber excessivement poitrine.
- Tête : Regard devant, cou allongé sans menton projeté.
- Omoplates : Libres de monter, reculer et descendre.
- Bras : Pendantes, coudes relâchés, mains souples.
- Appuis : Sol ; chaise stable pour variante assise.

### Exécution et sortie

- Action : Faire monter légèrement les épaules, les amener vers arrière puis vers bas, en petit cercle continu.
- Fin de mouvement : Retrouver position relâchée.
- Maintien : Pas de maintien nécessaire au sommet.
- Sortie : Finir épaules relâchées ; sens avant éventuel montré séparément.

Respiration libre et régulière. Expirer à la mise en tension peut guider le rythme, sans obligation ni apnée ; consigne éditoriale à revoir humainement.

### Structures et rôles

- Structures mobilisées : Ceinture scapulaire.
- Muscles étirés : Aucun rôle spécifique établi pour cette variante.
- Muscles renforcés : Aucun rôle spécifique établi pour cette variante.
- Rôles inférés, à confirmer : Trapèzes, élévateur scapula, rhomboïdes et dentelé participent selon phase ; pas carte de renforcement ni étirement sélectif prouvé.

### Erreurs, corrections et adaptations

- Cou crispé : diminuer élévation et relâcher mâchoire.
- Grand cercle de bras : laisser bras pendants.
- Dos qui cambre : réduire mouvement épaules.
- Assis si équilibre limité ; cercles plus petits.
- Aucun poids.

Arrêter si douleur, pincement articulaire, vertige ou fourmillement. Une tension douce ne doit pas devenir douloureuse. Après blessure, opération ou avec restrictions individuelles, faire adapter la variante par un professionnel. Aucune garantie universelle de sécurité.

Durée/répétitions à décider dans le programme après revue ; les doses de rééducation ou les amplitudes des sources ne sont pas un standard universel.

### Référence visuelle à deux positions

- Caméra : Trois quarts avant et petite vue arrière complémentaire.
- Position 1 : Épaules relâchées, bras le long du corps.
- Position 2 : Épaules légèrement hautes et en arrière, cou sans compression exagérée.
- Contrôles : Deux poses seules produisent un va-et-vient, pas un cercle.; Trajectoire montée-arrière-descente doit être interpolée et revue ; conserver bras stables.

### Audio court proposé

- Laisse les bras relâchés.
- Monte doucement les épaules, puis roule vers arrière et bas.
- Respire et garde de petits cercles.

### Audit du catalogue actuel

- Deux positions ne suffisent pas à identifier un vrai cercle sans trajectoire.
- shoulder_girdle est une région.
- Définir sens arrière de base et sens avant optionnel.

<a id="ex42"></a>

## EX42 - Mobilisation de cheville en fente

**Variante :** Petite fente debout, genou avant avançant, talon avant posé, sans mur obligatoire.
**État documentaire :** `corroborated_wall_variant_free_standing_adaptation`. Revue technique humaine : en attente.

### Preuves et limites

- M42a : voir registre, variante et transfert explicités.
- M42b : voir registre, variante et transfert explicités.
- M42c : voir registre, variante et transfert explicités.
- M42d : voir registre, variante et transfert explicités.
- M42e : voir registre, variante et transfert explicités.
- OPAL, Peak Physio, Physitrack et Plymouth convergent sur genou avant et pied posé. Retrait du mur constitue adaptation à vérifier pour équilibre.
- AAOS concerne genou arrière et confirme seulement anatomie soléaire indirecte. Ne pas reprendre ses orteils légèrement rentrés pour imposer une orientation du pied avant.
- Physitrack utilise seuil de décollement du talon pour réglage ; démonstration Tempo doit rester avant ce seuil.

**Arbitrage :** Choix genou avant sur pied posé ; AAOS cible arrière. Orientation neutre adaptée, sans imposer toe-in AAOS. Version mur documentée, retrait mur adapté.

### Position initiale

- Pieds : Pied avant entièrement posé, pied arrière décalé pour équilibre, non en corde raide.
- Genoux : Avant légèrement fléchi, suit orientation du pied ; arrière souple.
- Bassin : Face devant, avance sans torsion.
- Colonne : Buste stable, sans cambrure ajoutée.
- Tête : Regard devant ou légèrement bas, sans plier nuque.
- Omoplates : Détendues.
- Bras : Mains sur mur facultatif pour équilibre, sans tirer le genou.
- Appuis : Sol non glissant ; mur si nécessaire.

### Exécution et sortie

- Action : Avancer doucement le genou avant en transférant un peu de poids sur ce pied.
- Fin de mouvement : Talon et avant-pied restent posés ; arrêter avant pincement ou perte appui. Le genou peut dépasser les orteils si confortable.
- Maintien : Pause courte pour version mobilité ; maintien statique est autre dosage.
- Sortie : Reculer doucement, terminer série puis changer jambe avant.

Respiration libre et régulière. Expirer à la mise en tension peut guider le rythme, sans obligation ni apnée ; consigne éditoriale à revoir humainement.

### Structures et rôles

- Structures mobilisées : Dorsiflexion de cheville avant.
- Muscles étirés : Mollet de la jambe avant : sensation attendue selon amplitude.
- Muscles renforcés : Aucun rôle spécifique établi pour cette variante.
- Rôles inférés, à confirmer : Soléaire probablement privilégié genou fléchi, transfert AAOS depuis jambe arrière ; dominance exacte non mesurée.; Muscles du pied et hanche contrôlent équilibre, sans promesse de renforcement.

### Erreurs, corrections et adaptations

- Talon décollé : raccourcir déplacement.
- Genou qui dévie nettement vers dedans : réduire amplitude et suivre pied.
- Pied qui pivote : replacer appui puis recommencer.
- Mur facultatif ; petite amplitude, stance plus large si équilibre.
- Ne pas ajouter cale, bande ou charge.

Arrêter si douleur, pincement articulaire, vertige ou fourmillement. Une tension douce ne doit pas devenir douloureuse. Après blessure, opération ou avec restrictions individuelles, faire adapter la variante par un professionnel. Aucune garantie universelle de sécurité.

Durée/répétitions à décider dans le programme après revue ; les doses de rééducation ou les amplitudes des sources ne sont pas un standard universel.

### Référence visuelle à deux positions

- Caméra : Profil centré sur cheville/genou avant ; trois quarts face complémentaire pour axe.
- Position 1 : Petite fente avec pied avant entier posé.
- Position 2 : Genou avant plus avancé et cheville fléchie, talon inchangé.
- Contrôles : Même côté, même longueur de jambe, sol fixe.; Ne pas montrer un étirement du mollet arrière genou tendu.

### Audio court proposé

- Pose tout le pied avant au sol.
- Avance doucement le genou dans la direction du pied.
- Garde le talon posé, puis reviens.

### Audit du catalogue actuel

- ankle est articulation ; calves n’implique pas renforcement.
- Préciser jambe avant ciblée et mur optionnel.
- Dosage répétitions Tempo diffère maintien source.

### Recoupement complémentaire du 12 octobre 2026

Conserver genou avant mobile et talon avant posé; sans mur reste adaptation d’équilibre, pas seconde variante exacte validée. Aucun toe-in AAOS imposé.

- **Positions :** Pas nouvelle confirmation sans mur dans cette passe.
- **Muscles :** Dominance soléaire inférée, pas mesurée.
- **Conseils :** Mur optionnel explicite, amplitude sans perte appui.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [M42a](https://www.opalreturntowork.nhs.uk/exercises/knee-to-wall-stretch/), [M42b](https://www.orthoinfo.org/recovery/foot-and-ankle-conditioning-program/), [M42c](https://www.peak-physio.com.au/exercise/ankle-dorsiflexion-knee-to-wall/), [M42d](https://na.physitrack.com/home-exercise-video/knee-to-wall---ankle-dorsiflexion), [M42e](https://www.plymouthhospitals.nhs.uk/display-pil/pil-ankle-sprain-injury-3960/).

<a id="ex43"></a>

## EX43 - Ouverture de poitrine debout

**Variante :** Debout, bras au côté, rotation externe douce, omoplates légèrement rapprochées.
**État documentaire :** `corroborated_base_variant`. Revue technique humaine : en attente.

### Preuves et limites

- M43a : voir registre, variante et transfert explicités.
- M43b : voir registre, variante et transfert explicités.
- Pas preuve d’une amplitude optimale universelle.
- Critères tête/genoux sont compléments éditoriaux à vérifier.

**Arbitrage :** Ouverture douce bras bas ; mains jointes derrière ou mains derrière tête sont variantes distinctes.

### Position initiale

- Pieds : Pieds posés à écartement confortable.
- Genoux : Souples.
- Bassin : Au-dessus des appuis, sans pousser hanches devant.
- Colonne : Côtes et bassin restent contrôlés ; pas de cambrure forcée.
- Tête : Dans prolongement buste, regard horizontal.
- Omoplates : Se rapprochent légèrement, sans serrage maximal.
- Bras : Au côté, épaules tournent doucement vers extérieur ; mains libres, coudes souples.
- Appuis : Sol ; chaise stable possible pour adaptation assise.

### Exécution et sortie

- Action : Ouvrir légèrement épaules et poitrine par rotation externe des bras et rapprochement doux des omoplates.
- Fin de mouvement : Tension douce devant poitrine, pas dans articulation épaule.
- Maintien : Garder une position respirable, sans rebond.
- Sortie : Relâcher lentement et retrouver bras au côté.

Respiration libre et régulière. Expirer à la mise en tension peut guider le rythme, sans obligation ni apnée ; consigne éditoriale à revoir humainement.

### Structures et rôles

- Structures mobilisées : Épaules et ceinture scapulaire.
- Muscles étirés : Pectoraux, cible poitrine confirmée.
- Muscles renforcés : Aucun rôle spécifique établi pour cette variante.
- Rôles inférés, à confirmer : Rétracteurs scapulaires contrôlent posture ; pas exercice de renforcement.; Deltoïde antérieur davantage concerné dans progression bras derrière, ne pas transférer à base.

### Erreurs, corrections et adaptations

- Côtes qui jaillissent : réduire ouverture.
- Épaules tirées brutalement : relâcher et réduire.
- Menton en avant : replacer tête.
- Ouverture moindre, assis sur chaise stable.
- Pas mains jointes derrière, pas partenaire ni serviette dans version de base.

Arrêter si douleur, pincement articulaire, vertige ou fourmillement. Une tension douce ne doit pas devenir douloureuse. Après blessure, opération ou avec restrictions individuelles, faire adapter la variante par un professionnel. Aucune garantie universelle de sécurité.

Durée/répétitions à décider dans le programme après revue ; les doses de rééducation ou les amplitudes des sources ne sont pas un standard universel.

### Référence visuelle à deux positions

- Caméra : Trois quarts avant + profil complémentaire pour côtes/bassin.
- Position 1 : Bras côté, poitrine neutre.
- Position 2 : Rotation externe visible mains/bras, épaules légèrement reculées, bassin inchangé.
- Contrôles : Ne pas inventer bras horizontaux ou mains jointes derrière.; Ouverture modérée avec respiration possible.

### Audio court proposé

- Debout, bras relâchés.
- Ouvre doucement les épaules sans cambrer.
- Respire, puis relâche.

### Audit du catalogue actuel

- « Ouvrir bras » trop ambigu : définir rotation externe sans élévation imposée.
- Séparer pectoraux étirés et épaules mobilisées.

<a id="ex44"></a>

## EX44 - Posture de repos à genoux

**Variante :** Depuis quatre pattes, bassin vers talons, bras devant, front soutenu si besoin.
**État documentaire :** `corroborated_quadruped_entry_support_exit_pending`. Revue technique humaine : en attente.

### Preuves et limites

- M44a : voir registre, variante et transfert explicités.
- M44b : voir registre, variante et transfert explicités.
- Entrée quatre pattes désormais décrite par Whittington et Plymouth; documents NHS de contextes cliniques différents, sans transfert des dosages. Front/support et sortie restent propositions.
- Ne pas reprendre promesses digestion, sommeil ou baisse tension comme effet établi de Tempo.

**Arbitrage :** Genoux adaptés au confort, bras devant de base ; bras côtés et supports restent variantes, pas obligation contact talons.

### Position initiale

- Pieds : Dessus des pieds au tapis, position tolérée sans forcer chevilles.
- Genoux : Au tapis, écartement confortable adapté espace tronc.
- Bassin : Au-dessus genoux au départ ; descend vers talons selon confort.
- Colonne : Laisse tronc se plier sans chercher un dos rectiligne forcé.
- Tête : Front vers support, nuque détendue ; pas visage écrasé.
- Omoplates : Détendues ; ne pas forcer épaules en arrière bras devant.
- Bras : Mains au tapis, bras devant, coudes peuvent rester souples.
- Appuis : Tapis ; coussin stable sous front/tronc ou genoux si nécessaire.

### Exécution et sortie

- Action : Reculer bassin en laissant tronc descendre et mains glisser ou rester confortables devant.
- Fin de mouvement : Bassin peut rester éloigné des talons ; front soutenu et respiration libre.
- Maintien : Repos sans traction volontaire des bras.
- Sortie : Ramener mains pour appui et revenir lentement à quatre pattes avant de se relever.

Respiration libre et régulière. Expirer à la mise en tension peut guider le rythme, sans obligation ni apnée ; consigne éditoriale à revoir humainement.

### Structures et rôles

- Structures mobilisées : Hanches, genoux, dos et épaules selon placement.
- Muscles étirés : Dos/épaules : tension possible, variable, sans garantie pour tous.
- Muscles renforcés : Aucun rôle spécifique établi pour cette variante.
- Rôles inférés, à confirmer : Extenseurs du rachis et grand dorsal peuvent être mis en longueur ; rôle spécifique non mesuré dans sources.

### Erreurs, corrections et adaptations

- Forcer talons : accepter espace sous bassin.
- Front suspendu et nuque crispée : support.
- Respiration gênée : écarter genoux ou relever tronc.
- Coussin sous front/tronc ; couverture genoux ; bras au côté variante de repos distincte.
- Si agenouillement intolérable : variante assise ou appui mains sur surface stable, à montrer séparément.

Arrêter si douleur, pincement articulaire, vertige ou fourmillement. Une tension douce ne doit pas devenir douloureuse. Après blessure, opération ou avec restrictions individuelles, faire adapter la variante par un professionnel. Aucune garantie universelle de sécurité.

Durée/répétitions à décider dans le programme après revue ; les doses de rééducation ou les amplitudes des sources ne sont pas un standard universel.

### Référence visuelle à deux positions

- Caméra : Profil entier + trois quarts avant pour largeur genoux.
- Position 1 : Quatre pattes, appuis clairement visibles.
- Position 2 : Bassin reculé, tronc abaissé, front posé sur support éventuel, bras devant.
- Contrôles : Pas obligation fesses-talons.; Ne pas montrer poitrine forcée au sol ni épaules disloquées.

### Audio court proposé

- À quatre pattes, trouve des appuis confortables.
- Recule le bassin vers les talons sans forcer.
- Pose le front si besoin, respire tranquillement.

### Audit du catalogue actuel

- Expliciter front, bras et pieds ; posture actuelle trop ouverte aux interprétations.
- back et shoulders sont zones, pas muscles étirés précis.
- Prévoir support au lieu de prétendre sans équipement pour tous.

### Recoupement complémentaire du 12 octobre 2026

Entrée quatre pattes recoupée; conserver recul confortable sans obligation fesses-talons. Front soutenu et sortie vers quatre pattes restent choix à revoir.

- **Positions :** Entrée et recul recoupés; supports exacts et sortie pas entièrement documentés.
- **Muscles :** Mobilité du dos, aucune nouvelle preuve musculaire spécifique.
- **Conseils :** Exclure dosage clinique et déplacements latéraux; tolérance genoux/chevilles à revoir.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [M44a](https://health.clevelandclinic.org/childs-pose), [M44b](https://sharedfiles.mayoclinic.org/bedside/ope/GNT-20421908.html), [M44c](https://www.whittington.nhs.uk/mini-apps/leaflet/?id=492), [M44d](https://www.plymouthhospitals.nhs.uk/display-pil/pil-physiotherapy-for-breast-surgery-7032).

<a id="ex45"></a>

## EX45 - Étirement fléchisseurs de hanche à genoux

**Variante :** Demi-agenouillé, légère rétroversion, petit transfert avant sans bras haut.
**État documentaire :** `corroborated_base_variant`. Revue technique humaine : en attente.

### Preuves et limites

- M45a : voir registre, variante et transfert explicités.
- M45b : voir registre, variante et transfert explicités.
- HSS illustre genou avant proche angle droit, à adapter plutôt que rendre obligatoire.
- Dose clinique sources ne vaut pas prescription Tempo.

**Arbitrage :** Légère rétroversion HSS complète tronc droit Mayo ; bras haut exclu de base.

### Position initiale

- Pieds : Pied avant entier posé, arrière derrière le genou dans une position confortable.
- Genoux : Genou arrière sur surface rembourrée, genou avant fléchi ; appuis assez écartés pour équilibre.
- Bassin : Face devant, légère orientation coccyx vers bas sans contraction maximale.
- Colonne : Buste redressé, ne pas augmenter creux lombaire.
- Tête : Regard devant, nuque prolongement buste.
- Omoplates : Relâchées.
- Bras : Mains sur bassin ou cuisse avant sans appuyer fortement.
- Appuis : Tapis/serviette pliée genou ; chaise ou mur stable facultatif.

### Exécution et sortie

- Action : Serrer doucement fessier côté genou au sol puis avancer légèrement bassin en bloc.
- Fin de mouvement : Tension douce devant hanche/cuisse arrière, sans pincement hanche avant.
- Maintien : Rester respirable et stable, faible déplacement suffisant.
- Sortie : Reculer bassin, reprendre appuis mains si nécessaire puis changer côté sans pivot sur genou.

Respiration libre et régulière. Expirer à la mise en tension peut guider le rythme, sans obligation ni apnée ; consigne éditoriale à revoir humainement.

### Structures et rôles

- Structures mobilisées : Extension hanche côté genou au sol.
- Muscles étirés : Fléchisseurs hanche côté arrière : cible confirmée.
- Muscles renforcés : Aucun rôle spécifique établi pour cette variante.
- Rôles inférés, à confirmer : Iliopsoas mis en longueur ; droit fémoral dépend flexion genou et bassin, pas isolation démontrée.; Fessier et abdominaux contrôlent bassin ; pas renforcement promis.

### Erreurs, corrections et adaptations

- Cambrer pour avancer : réduire déplacement et contrôler bassin.
- Pieds sur même ligne : écarter légèrement.
- Pression douloureuse genou : rembourrer ou choisir variante différente.
- Moins avancer ; genou rembourré ; support main stable.
- Pas pied arrière sur chaise, ni bras haut, ni traction de cheville dans base.

Arrêter si douleur, pincement articulaire, vertige ou fourmillement. Une tension douce ne doit pas devenir douloureuse. Après blessure, opération ou avec restrictions individuelles, faire adapter la variante par un professionnel. Aucune garantie universelle de sécurité.

Durée/répétitions à décider dans le programme après revue ; les doses de rééducation ou les amplitudes des sources ne sont pas un standard universel.

### Référence visuelle à deux positions

- Caméra : Profil + trois quarts avant pour bassin/appuis.
- Position 1 : Demi-agenouillé, bassin vertical, appuis espacés.
- Position 2 : Bassin très légèrement avancé, côtes non projetées, même courbure lombaire.
- Contrôles : Côté étiré = genou au sol, montrer repère.; Aucune cible obligatoire angle genou ou distance fixe.

### Audio court proposé

- Pose un genou sur une surface confortable.
- Rentre légèrement le bassin et serre doucement ce fessier.
- Avance un peu, sans cambrer, puis respire.

### Audit du catalogue actuel

- Ajouter contrôle bassin préalable : catalogue ne le précise pas.
- Identifier hanche arrière et sortie/changement appuis.

<a id="ex46"></a>

## EX46 - Étirement ischio-jambiers allongé

**Variante :** Dos au sol, pied opposé posé genou fléchi, mains soutiennent cuisse relevée, genou s’étend selon confort.
**État documentaire :** `corroborated_base_variant`. Revue technique humaine : en attente.

### Preuves et limites

- M46c : voir registre, variante et transfert explicités.
- M46a : voir registre, variante et transfert explicités.
- M46b : voir registre, variante et transfert explicités.
- M45b : voir registre, variante et transfert explicités.
- AAOS confirme la jambe opposée fléchie et la prise sous cuisse ; Newcastle confirme extension progressive genou. Leeds propose autre jambe droite, Mayo un mur : variantes séparées.
- AAOS ajoute traction douce cuisse vers tête : Tempo peut conserver cuisse plus stable pour version douce, choix éditorial à relire. Les durées sources diffèrent, aucune valeur universelle déduite.

**Arbitrage :** Jambe opposée fléchie selon AAOS ; ne pas mélanger jambes opposées droites Leeds ou talon au mur Mayo. Extension sans verrouillage ; aucune durée universelle.

### Position initiale

- Pieds : Pied jambe appui posé ; pied levé relâché sans tirer orteils vers soi.
- Genoux : Jambe appui fléchie ; genou cible d’abord fléchi.
- Bassin : Au tapis, ne roule pas volontairement vers poitrine.
- Colonne : Dos confortable, ne pas forcer plaquage ni cambrure.
- Tête : Posée au tapis, petit support possible sans forte flexion cou.
- Omoplates : Au tapis, épaules relâchées.
- Bras : Mains derrière cuisse, en amont genou, sans pression dans creux poplité.
- Appuis : Tapis ; support tête si nécessaire ; aucun élastique base.

### Exécution et sortie

- Action : Soulever cuisse soutenue puis tendre doucement ce genou en conservant la cuisse dans une position tolérée.
- Fin de mouvement : Tension douce arrière cuisse ; genou peut rester fléchi.
- Maintien : Conserver prise cuisse, respiration libre, pied non forcé.
- Sortie : Replier genou, abaisser jambe lentement, puis changer côté.

Respiration libre et régulière. Expirer à la mise en tension peut guider le rythme, sans obligation ni apnée ; consigne éditoriale à revoir humainement.

### Structures et rôles

- Structures mobilisées : Hanche fléchie et extension genou.
- Muscles étirés : Ischio-jambiers jambe relevée.
- Muscles renforcés : Aucun rôle spécifique établi pour cette variante.
- Rôles inférés, à confirmer : Quadriceps produit extension active du genou, sans objectif renforcement.; Trois composantes ischio : biceps fémoral, semi-tendineux, semi-membraneux ; contributions relatives non établies ici.

### Erreurs, corrections et adaptations

- Tirer pied : revenir prise cuisse.
- Chercher genou droit coûte que coûte : conserver flexion.
- Tête levée/épaules crispées : soutien tête et cuisse moins haute.
- Moins relever cuisse, moins tendre genou, petit support tête.
- Si prise difficile : serviette autour de la cuisse selon AAOS, sans traction autour du pied. Talon au mur Mayo = variante distincte.

Arrêter si douleur, pincement articulaire, vertige ou fourmillement. Une tension douce ne doit pas devenir douloureuse. Après blessure, opération ou avec restrictions individuelles, faire adapter la variante par un professionnel. Aucune garantie universelle de sécurité.

Durée/répétitions à décider dans le programme après revue ; les doses de rééducation ou les amplitudes des sources ne sont pas un standard universel.

### Référence visuelle à deux positions

- Caméra : Profil entier + trois quarts avant pour prise des deux mains.
- Position 1 : Dos posé, pied appui posé, cuisse cible relevée et genou fléchi, mains sous cuisse.
- Position 2 : Même cuisse et bassin, genou plus ouvert, pied relâché, légère flexion possible.
- Contrôles : Ne pas montrer une élévation jambe tendue de renforcement.; Mains et doigts ne traversent pas cuisse ; pas traction pied.

### Audio court proposé

- Allonge-toi, un pied posé au sol.
- Soutiens l’autre cuisse avec les mains.
- Tends doucement le genou, sans chercher à le verrouiller.

### Audit du catalogue actuel

- Étape 1 doit déjà définir quelle cuisse sera soutenue.
- Préciser jambe opposée fléchie et pied posé.
- Fourmillement n’est pas une preuve d’étirement musculaire réussi.

## Sources complémentaires consultées le 12 octobre 2026

- **[M44c - Axial spondyloarthritis](https://www.whittington.nhs.uk/mini-apps/leaflet/?id=492)**. Éditeur : Whittington Health NHS. Auteur : Non identifié sur la page consultée. Section : Exercises, Child pose. Texte consulté le 2026-10-12. Portée : Entrée depuis quatre pattes et recul bassin. Limites : Contexte spondyloarthrite; contact talons décrit mais non imposé, reaches latéraux exclus. Indépendance : Deux trusts et documents distincts, réseau NHS commun; pas deux essais indépendants.

- **[M44d - Physiotherapy for Breast Surgery](https://www.plymouthhospitals.nhs.uk/display-pil/pil-physiotherapy-for-breast-surgery-7032)**. Éditeur : University Hospitals Plymouth NHS Trust. Auteur : Non identifié sur la page consultée. Section : Child pose. Texte consulté le 2026-10-12. Portée : Entrée depuis quatre pattes et recul bassin. Limites : Contexte chirurgie mammaire; doses/indications exclues, front et sortie pas décrits. Indépendance : Deux trusts et documents distincts, réseau NHS commun; pas deux essais indépendants.



# Extension pectoraux : huit fiches candidates

Édition du 12 octobre 2026. EX49-EX56 sont des identifiants provisoires, sans ajout au catalogue des 48 exercices. Textes documentaires et propositions de fiche, aucun média produit ni validation technique humaine.

Les deux documents minimum ne prouvent pas deux confirmations complètes indépendantes. Chaque assertion garde sa portée : variante exacte, adaptation brève, famille sur banc ou étude musculaire. Les angles, doses et niveaux des guides ne deviennent pas des règles universelles.

La prise large n’est pas vendue comme supérieure aux autres prises; les archer et le développé unilatéral ajoutent du contrôle asymétrique; les pliométriques ciblent la puissance. Aucune variante n’isole une région de poitrine.

Support fixe sans roulettes ni bascule; sol dégagé. Haltères verrouillés avant mouvement. Bande inspectée, usage/allongement conformes notice du modèle. Kit tubes Decathlon ref8975309 non interchangeable silencieusement.

Arrêter pour perte de trajectoire, appui, réception ou contrôle de charge; une douleur nouvelle impose interruption et adaptation professionnelle. Aucun seuil de douleur ou assurance universelle proposé.

Force et hypertrophie dépendent programmation/progression/récupération. EX52 cible vitesse/puissance. EX51 et EX54 ajoutent contrôle asymétrique; leur technicité ne prouve pas davantage de croissance pectorale.

Tous médias absents, audio brouillons, cartographie/dosage et revue technique humaine en attente. Les sources documentaires ne constituent pas approbation du mouvement exécuté.

<a id="ex49"></a>

## EX49 - Pompes déclinées sur support fixe

Geste de base recoupé; candidate non approuvée. Niveau proposé : intermédiaire. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Augmenter la demande de poussée par surélévation des pieds; force et volume pectoral possibles selon programmation, sans isoler une région.

**Matériel.** poids du corps, support bas stable.

**Prérequis.** Pompes au sol répétables avec tronc solidaire. Pouvoir monter et redescendre chaque pied sans basculer le support.

### Placement

- **Pieds et appuis :** Deux pieds sur un support fixe assez large; partir d’une faible élévation et vérifier que les appuis restent en place.
- **Genoux :** Jambes allongées sans forcer les genoux en arrière.
- **Bassin et colonne :** Tronc et bassin avancent ensemble; abdominaux et fessiers actifs pour limiter affaissement lombaire.
- **Tête et regard :** Nuque dans la continuité du tronc, regard vers la zone du sol entre et devant les mains.
- **Omoplates :** Contrôler leur mouvement contre la cage thoracique; ne pas les pincer et immobiliser pendant toute la poussée.
- **Bras, mains et prise :** Mains au sol un peu plus larges que les épaules; espace devant tête et poitrine dégagé.

**Mouvement.** Fléchir les coudes et descendre poitrine et bassin ensemble entre les mains. Choisir une profondeur permettant de repartir sans tête projetée ni dos creusé; repousser le sol.

**Fin de répétition.** Bras allongés sous contrôle, pieds encore stables, aucune bascule des hanches.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Après le retour haut, poser les genoux ou redescendre les pieds un par un selon hauteur et contrôle; tester la sortie avant une série.

**Respiration.** Proposition: inspirer pendant descente, souffler pendant poussée, continuer à respirer sans blocage prolongé.

### Muscles et portée des preuves

Grand pectoral, triceps et deltoïde antérieur dans NASM.

Stabilisation du tronc et contrôle scapulaire liés aux appuis. Aucune isolation upper chest ni pourcentage accepté.

### Erreurs et corrections

- Hanches tombent: baisser hauteur ou reprendre pompe au sol.
- Nuque avance seule: réduire amplitude et déplacer le corps comme un ensemble.
- Support glisse: changer de support avant reprise.

**Régressions.** Pompe au sol, ou mains sur support fixe.

**Progression.** Augmenter progressivement élévation ou contrôle de descente, un facteur à la fois.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Haut: paumes et deux pieds visibles, support entier et ligne du corps.
- Position 2 : Bas: poitrine descendue, bassin solidaire et support immobile.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Deux pieds bien posés. / Descends ensemble. / Souffle et pousse.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [NASM - Decline Push-Up](https://www.nasm.org/resource-center/exercise-library/decline-push-up) (EP01, variante exacte) : Pieds élevés, mains au sol, descente/poussée et prérequis.
- [American Council on Exercise - Total-body circuit featuring the plyometric box](https://www.acefitness.org/resources/pros/expert-articles/6431/total-body-circuit-featuring-the-plyometric-box/) (EP02, variante exacte) : Deux pieds sur boîte, corps comme une unité; régression mains élevées.

### Limites et arbitrages

- Hauteur individuelle, amplitude et support réel à examiner; respiration proposée non explicitée dans ces deux extraits.
- La consigne NASM épaules back/down n’est pas transformée en fixation scapulaire permanente.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

<a id="ex50"></a>

## EX50 - Pompes avec prise modérément large

Recoupement documentaire partiel; candidate non approuvée. Niveau proposé : intermédiaire. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Varier la géométrie de poussée. La largeur ne garantit ni plus de pectoraux ni meilleure hypertrophie que les pompes standard.

**Matériel.** poids du corps.

**Prérequis.** Pompes standard maîtrisées. Largeur permettant contrôle des poignets et épaules sans inconfort.

### Placement

- **Pieds et appuis :** Appuis sur avant-pieds, largeur confortable donnant une base stable.
- **Genoux :** Jambes allongées sans forcer les genoux en arrière.
- **Bassin et colonne :** Tronc et bassin avancent ensemble; abdominaux et fessiers actifs pour limiter affaissement lombaire.
- **Tête et regard :** Nuque dans la continuité du tronc, regard vers la zone du sol entre et devant les mains.
- **Omoplates :** Contrôler leur mouvement contre la cage thoracique; ne pas les pincer et immobiliser pendant toute la poussée.
- **Bras, mains et prise :** Écarter les mains un peu au-delà de sa prise standard, sans atteindre une ouverture extrême; doigts avant ou légèrement dehors, paumes restant à plat.

**Mouvement.** Abaisser le corps entre les mains sans tourner les épaules ni laisser les coudes chercher une ouverture maximale. Repartir avec le même appui des deux côtés.

**Fin de répétition.** Bras allongés et cage thoracique contrôlée, retour à la hauteur initiale.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Poser les genoux, décharger les mains puis se redresser.

**Respiration.** Inspirer à la descente, souffler à la remontée, conformément au guide PureGym.

### Muscles et portée des preuves

PureGym cite grand pectoral, deltoïde antérieur et triceps.

Cogley observe plus d’EMG pectoral/triceps en prise étroite qu’en large sur une répétition; aucune croissance musculaire mesurée.

Tronc et ceinture scapulaire stabilisent les appuis.

### Erreurs et corrections

- Mains trop éloignées ou gêne: rapprocher et réduire amplitude.
- Coudes partent au maximum latéralement: essayer une direction plus diagonale adaptée à soi.
- Bassin s’affaisse: revenir au levier plus facile.

**Régressions.** Prise standard; mains sur surface fixe élevée.

**Progression.** Conserver largeur définie puis augmenter répétitions maîtrisées ou ralentir descente.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Haut: largeur relative aux épaules clairement visible de face.
- Position 2 : Bas: trajectoire des coudes et symétrie visibles sans angle imposé.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Écarte un peu les mains. / Descends sous contrôle. / Souffle et remonte.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [PureGym - Wide Grip Push Ups](https://www.puregym.com/exercises/chest/press-up/wide-grip-push-ups/) (EP03, famille exacte, largeur affinée éditorialement) : Pompe mains au-delà des épaules et respiration, pas largeur modérée définie.
- [US Navy Fitness - Push-up Exercises](https://www.navyfitness.org/modules/media/?do=download&id=5151bee7-b8c2-4cdd-be76-d1ad6ff416bc) (EP04, variante citée brièvement) : Existence de wide push-up dans variantes officielles, aucune procédure fine.
- [Cogley et al., Mayo Clinic College of Medicine / Journal of Strength and Conditioning Research - Comparison of muscle activation using various hand positions during the push-up exercise](https://pubmed.ncbi.nlm.nih.gov/16095413/) (EP05, résumé de recherche originale) : Comparaison EMG narrow/standard/wide: contredit une supériorité pectorale large automatique.

### Limites et arbitrages

- Une étude originale supplémentaire recoupe la limite musculaire, pas la largeur modérée. Deux procédures détaillées indépendantes correspondant exactement à ce réglage restent absentes.
- Le conseil PureGym coudes directement latéraux et les promesses de supériorité musculaire ne sont pas repris.
- Définition relative de largeur et contrôle scapulaire à vérifier humainement.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

### Recoupement complémentaire du 12 octobre 2026

Conserver largeur relative modérée comme choix éditorial non chiffré; ne pas adopter 150% comme réglage universel, ni annoncer une supériorité pectorale. Candidate reste partielle.

- **Positions :** Famille large recoupée; largeur modérée, orientation et contrôle scapulaire non intégralement recoupés.
- **Muscles :** Deux équipes EMG distinctes; absence de preuve longitudinale et aucun pourcentage de carte accepté.
- **Conseils :** Ouverture non extrême et amplitude contrôlée proposées; détails à relire.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [EP03](https://www.puregym.com/exercises/chest/press-up/wide-grip-push-ups/), [EP04](https://www.navyfitness.org/modules/media/?do=download&id=5151bee7-b8c2-4cdd-be76-d1ad6ff416bc), [EP05](https://pubmed.ncbi.nlm.nih.gov/16095413/), [EP22](https://pmc.ncbi.nlm.nih.gov/articles/PMC4792988/).

<a id="ex51"></a>

## EX51 - Pompes archer avec deux mains au sol

Geste de base recoupé; candidate non approuvée. Niveau proposé : avancé. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Poussée asymétrique avec assistance opposée et contrôle du transfert latéral. Difficulté technique ne prouve pas une hypertrophie supérieure.

**Matériel.** poids du corps.

**Prérequis.** Pompes contrôlées avec profondeur répétable. Savoir déplacer poitrine et bassin ensemble vers chaque main, sans rotation.

### Placement

- **Pieds et appuis :** Pieds un peu écartés pour stabiliser le transfert, avant-pieds en appui.
- **Genoux :** Jambes allongées sans forcer les genoux en arrière.
- **Bassin et colonne :** Tronc et bassin avancent ensemble; abdominaux et fessiers actifs pour limiter affaissement lombaire.
- **Tête et regard :** Nuque dans la continuité du tronc, regard vers la zone du sol entre et devant les mains.
- **Omoplates :** Contrôler leur mouvement contre la cage thoracique; ne pas les pincer et immobiliser pendant toute la poussée.
- **Bras, mains et prise :** Deux mains à même hauteur, écartées assez pour allonger le bras opposé; ajuster largeur progressivement, paumes sans glissement.

**Mouvement.** Déplacer le corps vers une main en fléchissant son coude. Le bras opposé s’allonge latéralement mais reste actif, main au sol. Pousser par le bras fléchi avec assistance opposée pour retrouver le centre; alterner ensuite.

**Fin de répétition.** En bas, poitrine proche de la main du bras fléchi à profondeur maîtrisée; en haut, position centrale rétablie avant changer de côté.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Revenir au centre puis poser les genoux; ne pas quitter l’appui d’une main en restant décentré.

**Respiration.** Proposition: inspirer pendant transfert-descente, souffler pendant retour central. Une respiration confortable prime sur un comptage imposé.

### Muscles et portée des preuves

Sources citent pectoraux, triceps et épaules.

Le bras fléchi fournit davantage de poussée mécanique; l’autre reste assistant. Tronc résiste à la rotation; contribution musculaire de chaque côté non mesurée ici.

### Erreurs et corrections

- Tête va seule vers main: déplacer poitrine/bassin ensemble.
- Hanche se tourne: réduire transfert ou passer en inclinaison.
- Bras assistant se décolle: rétablir les deux appuis.
- Coude opposé forcé: garder une extension confortable.

**Régressions.** Déplacement latéral réduit; archer mains sur support fixe élevé.

**Progression.** Réduire assistance progressivement sans perdre profondeur; transition vers une autre variante exige une nouvelle fiche.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Centre haut: deux mains et pieds, largeur lisible.
- Position 2 : Bas décentré: coude chargé fléchi, autre bras allongé et main maintenue. Montrer les deux côtés sur mouvement continu.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Garde les deux mains. / Va vers une main. / Souffle, reviens au centre.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [PureGym - Archer Push Ups](https://www.puregym.com/exercises/chest/press-up/archer-push-ups/) (EP06, variante exacte) : Mains immobiles, coude du côté approché fléchi, retour par cette main.
- [CALISTHENICS Workouts & Equipment - Archer Push-Up](https://calisthenics.com/exercise/archer-push-up/) (EP07, variante exacte) : Assistance du bras opposé, déplacement du corps et distinction avec pompe à un bras.

### Limites et arbitrages

- FAQ PureGym met l’accent pectoral côté bras tendu, contrairement à la mécanique décrite; pas de dominance EMG affirmée.
- Niveau avancé Tempo proposé malgré classement intermédiaire du second guide.
- Répartition réelle de charge, respiration et amplitude individuelles non établies.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

<a id="ex52"></a>

## EX52 - Pompes pliométriques sans claquement

Vol sans claquement et amortissement recoupés; protocole et réception réelle à revoir; candidate non approuvée. Niveau proposé : avancé. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Produire une poussée rapide avec mains brièvement en vol et réception contrôlée. Objectif de puissance distinct du volume d’hypertrophie.

**Matériel.** poids du corps, sol ferme non glissant.

**Prérequis.** Pompes au sol maîtrisées, capacité à accélérer sans perdre ligne corporelle. Réception bilatérale contrôlée à faible hauteur; arrêt avant fatigue technique.

### Placement

- **Pieds et appuis :** Appuis sur avant-pieds, largeur confortable donnant une base stable.
- **Genoux :** Jambes allongées sans forcer les genoux en arrière.
- **Bassin et colonne :** Tronc et bassin avancent ensemble; abdominaux et fessiers actifs pour limiter affaissement lombaire.
- **Tête et regard :** Nuque dans la continuité du tronc, regard vers la zone du sol entre et devant les mains.
- **Omoplates :** Contrôler leur mouvement contre la cage thoracique; ne pas les pincer et immobiliser pendant toute la poussée.
- **Bras, mains et prise :** Paumes entières en appui, doigts répartis; poignets et coudes orientés selon confort et contrôle plutôt qu’un angle obligatoire.

**Mouvement.** Descendre sous contrôle puis pousser assez vite pour décoller brièvement les deux mains. Ne pas claquer: replacer les paumes sur leurs zones d’appui et absorber le contact sans raidir les coudes. Reprendre une position stable avant répétition suivante.

**Fin de répétition.** Le vol est bref; au retour au sol, corps solidaire, deux paumes posées sans glissement et épaules contrôlées.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Après une réception stable, poser les genoux. Ne pas viser une répétition supplémentaire si bruit, instabilité ou ligne corporelle se dégradent.

**Respiration.** Proposition: inspirer en préparation-descente et expiration brève pendant propulsion; reprendre le souffle en stabilisation. Ne pas donner de phrase longue pendant vol/réception.

### Muscles et portée des preuves

NASM cite pectoraux, triceps, deltoïde antérieur et stabilisateurs du tronc.

Demande de vitesse et absorption; aucun gain garanti de force, muscle ou performance sportive individuel.

### Erreurs et corrections

- Réception raide/bruyante: arrêter, diminuer hauteur recherchée.
- Une main part ou arrive avant l’autre: revenir à poussée rapide sans vol.
- Hanches cassent: réduire difficulté et rétablir pompe contrôlée.

**Régressions.** Pompe avec montée rapide sans quitter le sol; répétitions isolées avec repos complet de contrôle.

**Progression.** Enchaîner seulement après réception répétable; ne pas ajouter clap, boîte ou gilet sans autre validation.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Bas: préparation de propulsion alignée.
- Position 2 : Vol: séparation nette mains-sol sans clap. Une vidéo continue doit obligatoirement montrer aussi la réception, que ces deux images ne montrent pas.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Prépare ton appui. / Pousse vite, souffle. / Reçois doucement.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [NASM - Plyometric Push-Up](https://www.nasm.org/resource-center/exercise-library/plyometric-push-up) (EP08, variante exacte) : Contre-mouvement, mains décollées, réception souple et arrêt avant fatigue.
- [National Strength and Conditioning Association, Chat Williams - Personal Training Quarterly 1.3, Complex Training](https://www.nsca.com/globalassets/education/ptq/ptq-1.3.pdf) (EP09, vol exact, départ et réception différents) : Mains en vol sans clap requis; départ poitrine posée et réception arms extended, variante différente.

### Limites et arbitrages

- NASM et Lee Boyce recoupent maintenant vol sans clap et amortissement. Réception chiffrée, surface, contre-mouvement précis et cadence Tempo restent à examiner.
- NSCA ancien décrit bras étendus à la réception; fiche privilégie absorption NASM mais garde divergence pour revue.
- NASM contient une coquille de template barbell deadlift: ne pas traiter page comme infaillible.
- Durée du vol, cadence, surface et volume exigent revue humaine.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

### Recoupement complémentaire du 12 octobre 2026

Retenir sans claquement, mains prêtes à reprendre appui et amortissement actif; conserver reprise stable avant répétition comme choix Tempo. Ne pas importer contact corps/sol BarBend ni réception rigide NSCA.

- **Positions :** Absorption et absence de clap recoupées par descriptions distinctes; protocole complet non identique entre guides.
- **Muscles :** BarBend décrit poussée et freinage pectoraux, extension triceps, assistance deltoïde antérieur; qualitatif.
- **Conseils :** Arrêter quand contrôle/vitesse se dégrade; pas dose copiée. Angle exact de réception et sol à revoir.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [EP08](https://www.nasm.org/resource-center/exercise-library/plyometric-push-up), [EP09](https://www.nsca.com/globalassets/education/ptq/ptq-1.3.pdf), [EP23](https://barbend.com/plyometric-push-ups/), [EP24](https://www.muscleandstrength.com/articles/plyometrics).

<a id="ex53"></a>

## EX53 - Pompes résistées avec bande plate au haut du dos

**Matériel réel de Simon :** aucune bande plate longue. Ni kit tubes ni boucle textile courte ne remplacent cette variante. [Vérification matériel](kit-mounting-review.md).

Recoupement documentaire partiel; candidate non approuvée. Niveau proposé : intermédiaire. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Ajouter une résistance à la poussée au poids du corps. La tension dépend du matériau, longueur utile et étirement, sans équivalence automatique avec haltères ou tubes.

**Matériel.** poids du corps, bande plate longue compatible avec usage.

**Prérequis.** Pompe standard contrôlée. Pouvoir installer et retirer bande sans la lâcher sous tension. Vérifier usage autorisé et allongement maximal dans notice du modèle.

### Placement

- **Pieds et appuis :** Appuis sur avant-pieds, largeur confortable donnant une base stable.
- **Genoux :** Jambes allongées sans forcer les genoux en arrière.
- **Bassin et colonne :** Tronc et bassin avancent ensemble; abdominaux et fessiers actifs pour limiter affaissement lombaire.
- **Tête et regard :** Nuque dans la continuité du tronc, regard vers la zone du sol entre et devant les mains.
- **Omoplates :** Bande suit haut du dos sans imposer de pincer les omoplates; maintien sous paumes doit rester visible.
- **Bras, mains et prise :** Bande plate derrière haut du dos, loin du cou, extrémités maintenues dans les mains et sous paumes au sol. Vérifier symétrie et absence de glissement en essai léger.

**Mouvement.** Effectuer la descente de pompe avec bande tenue, puis repousser le sol en conservant trajet sur haut du dos et tension maîtrisée. Ne pas laisser l’élastique rouler vers le cou.

**Fin de répétition.** En haut, bras allongés sous contrôle et bande maintenue; pas besoin d’étirement maximal.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Poser genoux pour réduire charge, revenir avec tension réduite puis retirer bande contrôlée. Ne pas relâcher une extrémité en position haute tendue.

**Respiration.** Proposition: inspirer à la descente, souffler pendant poussée, sans retenir le souffle pour vaincre une bande trop forte.

### Muscles et portée des preuves

Documents confirment ajout de résistance à la pompe; pas cartographie musculaire propre à bande plate.

Grand pectoral, triceps et deltoïde antérieur par mécanique de poussée; tronc/contrôle scapulaire stabilisent. Aucun pourcentage supplémentaire attribué à bande.

### Erreurs et corrections

- Bande glisse/roule: arrêter et revoir montage avec notice.
- Résistance entraîne compensation: prendre bande plus faible ou enlever bande.
- Mains pas symétriques: réinstaller avant reprise.

**Régressions.** Pompe sans bande; bande plus faible avec montage autorisé.

**Progression.** Augmenter résistance uniquement si notice, tension et sortie restent compatibles.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Haut: bande entière, trajet dos et maintien sous chaque paume visibles.
- Position 2 : Bas: même chemin sans déplacement vers nuque. Ajouter vue oblique arrière, paumes restant visibles, et séquence installation/retrait.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Bande tenue sous les paumes. / Descends avec contrôle. / Souffle et pousse.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [University of California Berkeley, University Health Services - Resistance band and body weight exercises in small spaces](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf) (EP10, maintien exact, forme de bande non précisée) : Bande sur épaules sécurisée sous paumes, pompe alignée.
- [Alistair Ramsay Fitness - Band Resisted Push Ups](https://alistairramsay.com/band-push-up-exercise) (EP11, maintien exact, forme de bande non précisée) : Bande dos et sous bras, maintenue au sol par paumes.
- [Welsh Athletics - Home based Strength & Conditioning workouts, Session 1, 2020](https://www.welshathletics.org/image/Documents/COVID-19/Throws%20week%201%20SC%20and%20Description%20updated%20.pdf) (EP12, option bande plate exacte, séance différente) : Bande en strip sans poignées explicitement possible au haut du dos, extrémités tenues.

### Limites et arbitrages

- Deux descriptions recoupent ancrage et troisième explicite strip; aucun document seul ne valide le montage du modèle réel.
- Notice fabricant bande plate et longueur utile à obtenir; aucun transfert au kit Decathlon tubes ref8975309.
- Sac lesté de séance Welsh exclu de cette candidate.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

### Recoupement complémentaire du 12 octobre 2026

Conserver bande plate longue sans poignées, haut du dos et maintien sous paumes comme montage documentaire conditionnel. La notice Thera-Band précise les contrôles mais ne permet pas de choisir ni approuver le produit réel.

- **Positions :** Triangulation montage sous paumes/type strip déjà présente; aucune description/notice unique ne confirme tout pour le produit réel.
- **Muscles :** Famille pompe seulement; aucune cartographie du montage réel recoupée.
- **Conseils :** Inspection, longueur utile et risque de retour à contrôler selon notice réelle; kit tubes exclu du transfert automatique.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [EP10](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf), [EP11](https://alistairramsay.com/band-push-up-exercise), [EP12](https://www.welshathletics.org/image/Documents/COVID-19/Throws%20week%201%20SC%20and%20Description%20updated%20.pdf), [EP28](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf).

<a id="ex54"></a>

## EX54 - Développé haltère unilatéral au sol

Geste de base recoupé; candidate non approuvée. Niveau proposé : intermédiaire. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Poussée à un bras avec stabilité contre la rotation. Pectoraux participent avec triceps/épaule; amplitude du sol ne remplace pas toutes les amplitudes de banc.

**Matériel.** un haltère, sol ou tapis fin.

**Prérequis.** Développé bilatéral au sol connu. Installer haltère aidé des deux mains et le déposer sans bascule ni lâcher.

### Placement

- **Pieds et appuis :** Pieds à plat, suffisamment écartés pour empêcher bascule.
- **Genoux :** Fléchis à distance confortable, sans angle obligatoire.
- **Bassin et colonne :** Bassin et haut du dos au sol, courbure lombaire confortable sans accentuer l’arche ni forcer dos entièrement plat.
- **Tête et regard :** Tête posée, regard vers plafond, nuque relâchée.
- **Omoplates :** Haut du dos en appui; épaules ne basculent pas brusquement vers avant.
- **Bras, mains et prise :** Un haltère en prise pronation ou orientation confortable choisie; main libre au sol. Poignet au-dessus avant-bras, coude orienté en diagonale du tronc plutôt que plaqué ou écarté au maximum.

**Mouvement.** Depuis bras haut, descendre lentement jusqu’à contact léger de l’arrière du bras avec le sol, ou plus tôt si contrôle perdu. Presser vers plafond sans tourner bassin ni cage thoracique.

**Fin de répétition.** Haltère au-dessus de la zone épaule-poitrine, bras allongé sans claquer le coude; appuis du bassin et du dos maintenus.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Ramener charge près du corps avec assistance de main libre, tourner sur côté sous contrôle puis déposer. Tester avec charge légère; ne pas laisser tomber l’haltère loin du corps.

**Respiration.** Inspirer en abaissant; souffler pendant poussée selon Muscle & Fitness. Respirer régulièrement pendant installation/sortie.

### Muscles et portée des preuves

[P]rehab et M&F citent pectoraux, triceps, épaules et contrôle de stabilité.

Anti-rotation du tronc; aucune division temporelle poitrine seulement au départ puis triceps seulement retenue.

### Erreurs et corrections

- Tronc roule: diminuer charge et stabiliser pieds/main libre.
- Bras rebondit au sol: ralentir descente.
- Poignet plie: réaligner avec charge plus faible.
- Sortie incontrôlée: réduire charge et revoir installation.

**Régressions.** Haltère plus léger; développé bilatéral au sol comme autre exercice.

**Progression.** Ajouter charge contrôlée ou pause basse sans rebond; pieds restent posés dans cette variante.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Haut: un seul haltère, main libre/pieds au sol, bassin stable.
- Position 2 : Bas: arrière bras au sol et avant-bras contrôlé. Vidéo entrée/sortie et vue face anti-rotation requises.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Pieds posés, bassin stable. / Abaisse doucement. / Souffle et presse.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [[P]rehab - Single Arm Floor Press](https://theprehabguys.com/vimeo-video/single-arm-floor-press/) (EP13, variante exacte) : Appui sol, un bras, poids au-dessus épaule et compensation de rotation.
- [Muscle & Fitness - One-Arm Floor Press](https://www.muscleandfitness.com/exercise/workouts/chest-exercises/one-arm-floor-press/) (EP14, variante exacte) : Prise pronation, main libre posée, genoux fléchis, expiration poussée.
- [Muscle & Fitness, Shane McLean - Unilateral Dumbbell Floor Press: How To, Benefits](https://www.muscleandfitness.com/workouts/full-body-exercises/unilateral-dumbbell-floor-press-how-to-benefits/) (EP15, variante exacte, même éditeur) : Entrée/sortie sur côté, arrêt rebond et rotation.
- [SUBSTR8 Climbing Performance, Leif Gasch - The Floor Press](https://www.substr8climbing.com/blog/2022/5/20/the-floor-press) (EP16, variante exacte avec option genoux fléchis) : Coach décrit appui bras au sol et variante genoux fléchis plus stable.

### Limites et arbitrages

- Dos aplati [P]rehab versus courbure confortable éditoriale: pas règle universelle.
- SUBSTR8 préfère jambes tendues, M&F genoux fléchis; candidat retient genoux fléchis.
- Orientation précise prise, mise en place réelle et carte musculaire restent à examiner humainement.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

<a id="ex55"></a>

## EX55 - Écartés haltères au sol

Noyau du mouvement au sol recoupé; détails et revue humaine en attente; candidate non approuvée. Niveau proposé : intermédiaire. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Travailler rapprochement des bras par adduction horizontale, sans extension active importante des coudes. Le sol borne la descente mais ne garantit aucune absence de risque.

**Matériel.** deux haltères légers, sol ou tapis fin.

**Prérequis.** Savoir contrôler deux haltères au-dessus poitrine. Maintenir légère flexion constante des coudes avec charge modeste.

### Placement

- **Pieds et appuis :** Pieds à plat, suffisamment écartés pour empêcher bascule.
- **Genoux :** Fléchis à distance confortable, sans angle obligatoire.
- **Bassin et colonne :** Bassin et haut du dos au sol, courbure lombaire confortable sans accentuer l’arche ni forcer dos entièrement plat.
- **Tête et regard :** Tête posée, regard vers plafond, nuque relâchée.
- **Omoplates :** Haut du dos en appui; épaules ne basculent pas brusquement vers avant.
- **Bras, mains et prise :** Deux haltères au-dessus poitrine, paumes face à face. Coudes légèrement fléchis et angle conservé; poids tenus sans casser les poignets.

**Mouvement.** Ouvrir les bras en arcs symétriques en gardant la légère flexion des coudes. Arrêter juste au-dessus du sol, ou plus tôt si perte de contrôle ou gêne, sans choc ni rebond. Ramener les bras dans les mêmes arcs au-dessus de la poitrine.

**Fin de répétition.** Haltères au-dessus poitrine séparés, coudes encore légèrement fléchis; pas choc des charges.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Au retour haut, fléchir davantage coudes pour rapprocher haltères du corps puis déposer sous contrôle; installation/sortie à tester légère et revue humaine nécessaire.

**Respiration.** Inspirer en ouvrant, souffler en refermant; recoupé PureGym sol et ACE banc sur le geste d’arc.

### Muscles et portée des preuves

PureGym nomme pectoraux, deltoïdes et triceps. ACE décrit adduction avec coude fléchi conservé.

Grand pectoral moteur du rapprochement; triceps stabilisateur potentiel du coude plutôt que moteur d’extension dans cette exécution. Pas isolement pectoral mineur, intérieur/extérieur.

### Erreurs et corrections

- Coude se plie beaucoup: charge trop élevée pour garder arc, alléger.
- Charges descendent brutalement: diminuer amplitude/charge.
- Coude tape sol: arrêt anticipé contrôlé, sans chercher davantage d’étirement.

**Régressions.** Amplitude d’ouverture réduite; charge plus légère; développé au sol comme autre geste.

**Progression.** Élargir amplitude contrôlée dans limite du sol ou progresser charge par petites étapes, sans étirement forcé.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Haut: paumes face à face et coudes légèrement fléchis.
- Position 2 : Ouvert bas: arcs et proximité du sol visibles sans écraser coude. Vidéo doit montrer angle du coude constant.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Garde un léger pli aux coudes. / Ouvre doucement. / Souffle et rapproche.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [PureGym - Dumbbell Floor Fly](https://www.puregym.com/exercises/chest/chest-fly/dumbbell-floor-fly/) (EP17, variante exacte) : Genoux fléchis au sol, paumes face à face, arc, coude souple, respiration.
- [American Council on Exercise - Lying Chest Fly](https://www.acefitness.org/resources/everyone/exercise-library/21/lying-chest-fly/) (EP18, famille sur banc seulement) : Coude légèrement fléchi conservé, poignet droit et respiration du fly, pas appui sol.
- [Muscle & Strength, démonstration originale Jason Poston - Physique Pro Jason Poston’s Chest Workout At The Mecca](https://www.muscleandstrength.com/videos/jason-poston-chest-workout) (EP19, variante exacte citée brièvement) : Floor fly original de séance; repère éviter coude touchant en premier.

### Limites et arbitrages

- Seconde procédure exacte au sol obtenue: Fit2Go. Installation/sortie avec haltères réels, respiration indépendante et rôles anatomiques secondaires restent à renforcer.
- PureGym et Fit2Go convergent sur proximité du sol sans contact imposé. Le repère Poston ne justifie pas de poser une autre partie du bras ni de forcer une profondeur.
- Allégations amélioration douleur, rééducation et réduction blessure non adoptées.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

### Recoupement complémentaire du 12 octobre 2026

Fixer pour le brief documentaire un arrêt avant contact, coudes légèrement fléchis avec angle conservé. Le noyau sol est recoupé; revue humaine, sortie et charge réelle restent ouvertes.

- **Positions :** Deux procédures sol distinctes pour arc, coude et arrêt; prise neutre surtout PureGym et famille ACE.
- **Muscles :** Pectoraux décrits; rôles secondaires et cartographie non confirmés par mesure exacte au sol.
- **Conseils :** Respiration de PureGym/ACE sur banc: soutien de famille, pas deuxième preuve exacte sol.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [EP17](https://www.puregym.com/exercises/chest/chest-fly/dumbbell-floor-fly/), [EP18](https://www.acefitness.org/resources/everyone/exercise-library/21/lying-chest-fly/), [EP19](https://www.muscleandstrength.com/videos/jason-poston-chest-workout), [EP25](https://www.fit2gopt.com/db-floor-fly/).

<a id="ex56"></a>

## EX56 - Développé haltères serrés au sol

Recoupement documentaire partiel; candidate non approuvée. Niveau proposé : intermédiaire. Proposition éditoriale liée aux prérequis, charge et amplitude; pas classement clinique ou certification.

**Objectif.** Associer poussée et pression des haltères l’un contre l’autre. Accessoire pectoraux/triceps; ne promet pas isolation du centre de poitrine ou supériorité d’hypertrophie.

**Matériel.** deux haltères compatibles avec contact stable, sol ou tapis fin.

**Prérequis.** Développé au sol maîtrisé. Charges assez légères et forme permettant contact stable sans glissement ni doigts pincés.

### Placement

- **Pieds et appuis :** Pieds à plat, suffisamment écartés pour empêcher bascule.
- **Genoux :** Fléchis à distance confortable, sans angle obligatoire.
- **Bassin et colonne :** Bassin et haut du dos au sol, courbure lombaire confortable sans accentuer l’arche ni forcer dos entièrement plat.
- **Tête et regard :** Tête posée, regard vers plafond, nuque relâchée.
- **Omoplates :** Haut du dos en appui; épaules ne basculent pas brusquement vers avant.
- **Bras, mains et prise :** Prise neutre paumes face à face. Deux haltères en contact au-dessus poitrine, coudes proches du tronc sans compression forcée. Adapter contact à forme réelle, ne pas inventer appui stable pour poids ronds.

**Mouvement.** Maintenir pression vers l’intérieur modérée et égale entre les deux haltères pendant descente et poussée. Fléchir les coudes pour descendre ensemble; arrêter quand arrière bras approche ou touche légèrement sol, puis presser en gardant contact.

**Fin de répétition.** Charges encore en contact au-dessus poitrine, poignets alignés et bras allongés sans coup sec.

**Retour.** Revenir avec la même trajectoire maîtrisée; le début de chaque répétition doit être identifiable.

**Sortie.** Descendre vers position basse contrôlée, rapprocher charges du corps puis séparer et déposer sans tension forcée; procédure à revoir sur forme réelle des haltères.

**Respiration.** Inspirer à la descente, souffler pendant poussée selon FitCraft; pression entre poids ne doit pas faire bloquer la respiration.

### Muscles et portée des preuves

FitCraft et Xcelerate citent grand pectoral, triceps et deltoïde antérieur.

Pression vers l’intérieur sollicite adduction isométrique; magnitude et avantage par rapport à développé standard non mesurés pour variante sol dans corpus.

Régions inner/outer isolées et plus de tension donc automatiquement plus de croissance non établis.

### Erreurs et corrections

- Charges se séparent: réduire charge/pression excessive.
- Une charge tourne: égaliser pression et vérifier surfaces de contact.
- Coudes tapent sol ou dos arque: ralentir et alléger.

**Régressions.** Charges plus faibles; développé au sol habituel si contact des haltères incompatible.

**Progression.** Augmenter charge seulement avec contact et sortie répétables; banc n’appartient pas à cette fiche.

**Charge, répétitions et repos.** Choisir charge ou levier permettant la trajectoire, la respiration et une sortie maîtrisées. Ajuster répétitions à la fatigue technique, repos au retour de contrôle et fréquence à la récupération. Tenir compte du volume de poussée déjà présent; augmenter un facteur à la fois. Aucune dose universelle validée pour ce candidat.

### Médias et audio à préparer

- Position 1 : Haut: deux haltères au contact, paumes face à face.
- Position 2 : Bas: contact conservé, coudes près tronc et sol visibles. Ajouter gros plan prise/contact puis vue oblique complète.

Observer la totalité: installation, descente, changement de direction, remontée et sortie. Deux images ne prouvent ni contrôle, ni vitesse, ni stabilité. Vue de profil pour tronc/nuque; vue oblique et de face pour coudes, appuis et symétrie. Pas de recadrage masquant mains, support, sol ou charge.

**Brouillon audio.** Garde les haltères ensemble. / Descends doucement. / Souffle et presse.

Consigne de placement avant mouvement; consigne respiratoire sur la phase correspondante, jamais une longue phrase pendant réception explosive.

### Assertions et sources

- [FitCraft, Domenic Angelino MS MPH CSCS CPT - Diamond Press Exercise: Muscles Worked & Form](https://getfitcraft.com/exercises/diamond-press) (EP20, variante exacte) : Squeeze press au sol détaillé: genoux fléchis, prise neutre, contact constant, sol limite descente et respiration.
- [XcelerateGyms - Squeeze Press Guide: Benefits & Proper Form](https://xcelerategyms.com/squeeze-press/) (EP21, adaptation au sol brève et geste sur banc) : Description squeeze et adaptation sol explicitement mentionnée; guide principal sur banc.

### Limites et arbitrages

- Trainwell et FED Fitness ajoutent des procédures exactes au sol, sans auteur individuel identifié. Noyau contact/prise/limite sol renforcé; qualité de provenance, installation/sortie et matériel réel restent ouverts.
- Niveau avancé FitCraft versus intermédiaire proposé: charge/contact contrôlé et prérequis priment.
- Notice ou essai réel des haltères ronds et sortie reste requis; aucune preuve comparative directe de gains dans corpus.

Les réglages fins, prérequis, niveaux, sorties et critères médias sont des propositions à revoir par un professionnel. Les sources confirment seulement les assertions précisées; muscles qualitatifs sans carte quantitative.

## Registre des sources

### EP01 - NASM

[Decline Push-Up](https://www.nasm.org/resource-center/exercise-library/decline-push-up). Texte lu, consultation 2026-10-12.

Guide de la variante pieds surélevés. Consignes de hauteur, angle et volume non universelles; fixation des omoplates non reprise.

### EP02 - American Council on Exercise

[Total-body circuit featuring the plyometric box](https://www.acefitness.org/resources/pros/expert-articles/6431/total-body-circuit-featuring-the-plyometric-box/). Texte lu, consultation 2026-10-12.

Paragraphe exact decline/incline push-up. Guide bref; aucune mesure de recrutement régional.

### EP03 - PureGym

[Wide Grip Push Ups](https://www.puregym.com/exercises/chest/press-up/wide-grip-push-ups/). Texte lu, consultation 2026-10-12.

Guide exact mains plus larges que les épaules. Affirmations de supériorité pectorale et de distance parcourue non retenues; largeur modérée proposée éditorialement.

### EP04 - US Navy Fitness

[Push-up Exercises](https://www.navyfitness.org/modules/media/?do=download&id=5151bee7-b8c2-4cdd-be76-d1ad6ff416bc). Texte lu, consultation 2026-10-12.

PDF, page imprimée 18: largeur de mains variable, wide push-up. Texte très bref et figure non inspectée ici; aucune largeur modérée précise confirmée.

### EP05 - Cogley et al., Mayo Clinic College of Medicine / Journal of Strength and Conditioning Research

[Comparison of muscle activation using various hand positions during the push-up exercise](https://pubmed.ncbi.nlm.nih.gov/16095413/). Texte lu, consultation 2026-10-12.

Abstract original lu lors du corpus initial, 40 sujets et une répétition par prise. Résumé original seulement, pas étude complète; accès courant PubMed renvoie contrôle cookies. Ne déduit ni hypertrophie ni largeur individuelle.

### EP06 - PureGym

[Archer Push Ups](https://www.puregym.com/exercises/chest/press-up/archer-push-ups/). Texte lu, consultation 2026-10-12.

Guide exact, déplacement latéral mains immobiles. La FAQ attribue davantage de travail au côté du bras tendu, en tension avec ses propres étapes de poussée du bras fléchi.

### EP07 - CALISTHENICS Workouts & Equipment

[Archer Push-Up](https://calisthenics.com/exercise/archer-push-up/). Texte lu, consultation 2026-10-12.

Guide original spécialisé: deux mains au sol, bras fléchi chargé, assistance opposée. Éditeur commercial; auteur et validation clinique non identifiés dans le texte lu; pas étude comparative de croissance musculaire.

### EP08 - NASM

[Plyometric Push-Up](https://www.nasm.org/resource-center/exercise-library/plyometric-push-up). Texte lu, consultation 2026-10-12.

Guide exact mains décollées sans claquement requis. Paragraphe final mentionne par erreur barbell deadlift. Réception coudes flexibles opposée à la formulation ancienne NSCA.

### EP09 - National Strength and Conditioning Association, Chat Williams

[Personal Training Quarterly 1.3, Complex Training](https://www.nsca.com/globalassets/education/ptq/ptq-1.3.pdf). Texte lu, consultation 2026-10-12.

PDF page imprimée 23: plyometric push-up mains décollées, réception sous épaules. Départ poitrine au sol, réception arms extended. Corrobore vol sans clap, pas descente avec contre-mouvement ni réception flexible.

### EP10 - University of California Berkeley, University Health Services

[Resistance band and body weight exercises in small spaces](https://uhs.berkeley.edu/sites/default/files/wellness-resistancebandexercises.pdf). Texte lu, consultation 2026-10-12.

PDF page 2: band push-ups bande sur épaules maintenue sous paumes. Texte ne spécifie pas bande plate; fiche mélange bandes à poignées et extrémités. Photo non inspectée dans cette extension.

### EP11 - Alistair Ramsay Fitness

[Band Resisted Push Ups](https://alistairramsay.com/band-push-up-exercise). Texte lu, consultation 2026-10-12.

Guide original lu via HTML public téléchargé: bande dos/sous bras bloquée sous paumes. Texte bref, type de bande non explicite; ne prouve pas compatibilité du kit tubes.

### EP12 - Welsh Athletics

[Home based Strength & Conditioning workouts, Session 1, 2020](https://www.welshathletics.org/image/Documents/COVID-19/Throws%20week%201%20SC%20and%20Description%20updated%20.pdf). Texte lu, consultation 2026-10-12.

Page 1: strip of resistance band without handles, haut du dos, extrémités dans mains. Séance mentionne aussi sac lesté et tube; le strip est explicitement une possibilité, ancrage sous paume moins précis. Pas notice fabricant.

### EP13 - [P]rehab

[Single Arm Floor Press](https://theprehabguys.com/vimeo-video/single-arm-floor-press/). Texte lu, consultation 2026-10-12.

Guide exact clinique éducatif, genoux fléchis, un bras au sol, contrôle de rotation. Aplatir bas du dos et angle de genou proposés par source, non imposés universellement; vidéo non visionnée.

### EP14 - Muscle & Fitness

[One-Arm Floor Press](https://www.muscleandfitness.com/exercise/workouts/chest-exercises/one-arm-floor-press/). Texte lu, consultation 2026-10-12.

Guide exact haltère unilatéral, main libre au sol, respiration. Prise pronation; angle chiffré décrit position du coude, ne vaut pas angle universel entre bras et tronc.

### EP15 - Muscle & Fitness, Shane McLean

[Unilateral Dumbbell Floor Press: How To, Benefits](https://www.muscleandfitness.com/workouts/full-body-exercises/unilateral-dumbbell-floor-press-how-to-benefits/). Texte lu, consultation 2026-10-12.

Guide de coach original exact, entrée/sortie sur côté, appui bras au sol, erreurs. Même éditeur EP14; formulations sécurité et segmentation pectoraux puis triceps non retenues.

### EP16 - SUBSTR8 Climbing Performance, Leif Gasch

[The Floor Press](https://www.substr8climbing.com/blog/2022/5/20/the-floor-press). Texte lu, consultation 2026-10-12.

Guide de coach lu via HTML public: floor press unilatéral, genoux fléchis possibles. Préférence jambes tendues distincte de candidat; pectoral mineur cité mais non retenu comme moteur huméral; explication safety switches non vérifiée.

### EP17 - PureGym

[Dumbbell Floor Fly](https://www.puregym.com/exercises/chest/chest-fly/dumbbell-floor-fly/). Texte lu, consultation 2026-10-12.

Guide exact sol, paumes face à face, coude légèrement fléchi, arc et respiration. Promesses réduction blessures/douleur et moins de fibres non retenues. Triceps cités sans mesure de rôle moteur.

### EP18 - American Council on Exercise

[Lying Chest Fly](https://www.acefitness.org/resources/everyone/exercise-library/21/lying-chest-fly/). Texte lu, consultation 2026-10-12.

Guide écarté sur banc: arc, coude légèrement fléchi, poignet droit, respiration. Famille sur banc seulement, ne valide ni limite basse ni installation au sol.

### EP19 - Muscle & Strength, démonstration originale Jason Poston

[Physique Pro Jason Poston’s Chest Workout At The Mecca](https://www.muscleandstrength.com/videos/jason-poston-chest-workout). Texte lu, consultation 2026-10-12.

Article original de séance nomme floor fly et repère évitant coude touchant en premier. Guide très bref; vidéo non visionnée; angle du coude/appui final ambigu. Pas seconde procédure complète.

### EP20 - FitCraft, Domenic Angelino MS MPH CSCS CPT

[Diamond Press Exercise: Muscles Worked & Form](https://getfitcraft.com/exercises/diamond-press). Texte lu, consultation 2026-10-12.

Guide signé exact squeeze press au sol, genoux fléchis, contact haltères. Site d’app commerciale; interprétations d’études de banc indirectes, non preuve EMG squeeze sol; contraintes dos plat non universelles.

### EP21 - XcelerateGyms

[Squeeze Press Guide: Benefits & Proper Form](https://xcelerategyms.com/squeeze-press/). Texte lu, consultation 2026-10-12.

Guide squeeze sur banc avec adaptation explicite Floor Squeeze Press. Auteur non identifié; adaptation au sol brève. Affirmations inner/outer chest, puissance et gains garanties non retenues; fiabilité à renforcer.

### Recoupement complémentaire du 12 octobre 2026

Conserver deux haltères en contact, prise neutre, descente limitée par bras supérieurs au sol sans rebond. Le noyau est renforcé, mais statut partiel conservé pour provenance des guides et compatibilité matérielle.

- **Positions :** FitCraft et FED convergent sur appuis/contact/limite; Trainwell confirme famille exacte mais départ ambigu non copié.
- **Muscles :** Pectoraux/triceps/deltoïde antérieur qualitatifs; aucune preuve de ciblage intérieur ou supériorité de croissance.
- **Conseils :** Contact compatible avec haltères réels et sortie à tester; ne pas rendre obligatoire le 90 degrés Trainwell.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [EP20](https://getfitcraft.com/exercises/diamond-press), [EP21](https://xcelerategyms.com/squeeze-press/), [EP26](https://www.trainwell.net/exercises/dumbbell-floor-squeeze-press), [EP27](https://www.fedfitness.com/blogs/workout/10-effective-dumbbell-chest-exercises-to-build-a-strong-defined-chest).


## Sources complémentaires consultées le 12 octobre 2026

- **[EP22 - Effect of the push-up exercise at different palmar width on muscle activities](https://pmc.ncbi.nlm.nih.gov/articles/PMC4792988/)**. Éditeur : Society of Physical Therapy Science / Kim, Kim et Ha. Auteur : You-Sin Kim, Do-Yeon Kim, Min-Seong Ha. Section : Subjects and Methods; Results; table 2. Texte consulté le 2026-10-12. Portée : Étude originale EMG, 12 hommes, largeurs 50/100/150%. Limites : Aucune croissance mesurée; 150% ne définit pas la largeur modérée Tempo. Données de groupe, pas carte individuelle. Indépendance : Équipe différente de Cogley EP05; cite Cogley mais collecte ses propres données.

- **[EP23 - How Plyometric Push-Ups Can Improve Pressing Strength](https://barbend.com/plyometric-push-ups/)**. Éditeur : BarBend. Auteur : Mike Dewar, CSCS selon biographie. Section : How to Do; Muscles Worked; About Mike Dewar. Texte consulté le 2026-10-12. Portée : Procédure originale sans claquement, réception amortie et rôle de freinage pectoral. Limites : Contact poitrine/hanches/cuisses au sol distinct du contre-mouvement Tempo; angle 45 degrés et dosage non transférés; vidéo non vue. Indépendance : Coach distinct de NASM et Chat Williams; pas étude expérimentale.

- **[EP24 - Plyometrics: The Missing Piece in Your Programming Puzzle](https://www.muscleandstrength.com/articles/plyometrics)**. Éditeur : Muscle & Strength. Auteur : Lee Boyce. Section : 2. Plyo Push Ups; ground rules. Texte consulté le 2026-10-12. Portée : Instruction originale sans clap, amortissement et tronc solidaire. Limites : Enchaînement direct décrit; Tempo conserve stabilisation avant nouvelle répétition. Pas angle de réception ni preuve musculaire mesurée; vidéo non vue. Indépendance : Auteur distinct de Mike Dewar, NASM et NSCA; autre article de Boyce ne compterait pas une équipe de plus.

- **[EP25 - Dumbbell Floor Fly: Tone it Up!](https://www.fit2gopt.com/db-floor-fly/)**. Éditeur : Fit2Go Personal Training. Auteur : Dani Singer. Section : Instructions, Starting Position, Steps 1-2. Texte consulté le 2026-10-12. Portée : Procédure originale signée exactement au sol. Limites : Respiration, prise neutre et sortie non décrites; publicité posture/apparence exclue, vidéo non vue. Indépendance : Coach distinct de PureGym et Jason Poston; reprise de cette fiche dans sa séance non comptée séparément.

- **[EP26 - Dumbbell Floor Squeeze Press](https://www.trainwell.net/exercises/dumbbell-floor-squeeze-press)**. Éditeur : Trainwell. Auteur : Non identifié sur la page consultée. Section : Step-by-step instructions 1-5. Texte consulté le 2026-10-12. Portée : Procédure de bibliothèque originale au sol, prise neutre et pression intérieure. Limites : Départ au-dessus poitrine avec coudes à 90 degrés ambigu; liste matériel générique et champ muscles placeholder. Aucun auteur identifié; pas validation anatomique ou entrée/sortie. Indépendance : Rédaction distincte apparente; provenance non auditée, ne vaut pas essai indépendant.

- **[EP27 - 10 Best Dumbbell Chest Exercises for a Strong, Defined Chest](https://www.fedfitness.com/blogs/workout/10-effective-dumbbell-chest-exercises-to-build-a-strong-defined-chest)**. Éditeur : FED Fitness. Auteur : Non identifié sur la page consultée. Section : 4. Dumbbell Floor Squeeze Press, Steps 1-3. Texte consulté le 2026-10-12. Portée : Guide éditeur équipement, deux haltères en contact au sol. Limites : Auteur individuel non identifié; preuves des promesses sécurité/activation absentes. Vidéo non vue, pas notice des haltères Tempo. Indépendance : Rédaction distincte apparente; provenance non auditée, ne vaut pas essai indépendant.

- **[EP28 - Resistance Band & Tubing Instruction Manual (2012)](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf)**. Éditeur : The Hygenic Corporation / Thera-Band. Auteur : The Hygenic Corporation. Section : Pagination imprimée 4-10, sécurité et manipulation. Texte consulté le 2026-10-12. Portée : Notice fabricant sur prise, inspection et protection si retour vers tête. Limites : Même document que STR-THERABAND, pas confirmation indépendante supplémentaire, pas notice bande Tempo ou kit Decathlon. Indépendance : Même fabricant que STR-THERABAND; copies 2006/2012 non comptées comme auteurs indépendants.



# Extension proposée: gainage abdominal et stabilité

Six candidats distincts du catalogue historique de 48. IDs provisoires EX57-EX62; sol et poids du corps seulement.

Développer contrôle, stabilité et endurance abdominale avec leviers ou appuis plus exigeants. Un entraînement progressif peut renforcer les muscles; ces descriptions et mesures EMG ne garantissent ni hypertrophie ni abdominaux visibles.

Travailler les abdominaux ne permet pas de promettre une perte de graisse localisée. Le petit essai ABS-S-17 rapporte un gain d’endurance sans réduction significative de graisse abdominale dans son protocole; l’apparence varie entre personnes. Ces six fiches ne sont pas un programme de perte de graisse. [Étude originale](https://pubmed.ncbi.nlm.nih.gov/21804427/).

Synthèse originale française; les citations corroborent le geste décrit, pas chaque choix éditorial de hauteur, respiration ou progression. Deux éditeurs distincts ne constituent pas deux essais scientifiques. Les sources cliniques sont utilisées pour les descriptions, sans importer leurs dosages. Les critères observables et niveaux proposés attendent une revue technique humaine.

Pas de durée, série ou fréquence universelle. Choisir une charge compatible avec respiration et posture; augmenter un facteur à la fois et noter durée ou répétitions de qualité. Prévoir récupération selon tolérance et contexte, avec programmation individuelle si nécessaire.

Aucun média ni audio produit. Revue humaine: en attente; aucune approbation technique.

<a id="ex57"></a>

## EX57 - Planche latérale jambes tendues

Statut documentaire : descriptions croisées, variante précisée, revue humaine en attente. Identifiant provisoire. Revue humaine: en attente.

**Corroboration et périmètre**

- [ACE - Side Plank with Straight Leg](https://www.acefitness.org/resources/everyone/exercise-library/101/side-plank-with-straight-leg/) (exact): Contacts, montée et descente de la variante jambes tendues.
- [PureGym - Side Planks](https://www.puregym.com/exercises/abs/side-planks/) (exact): Avant-bras, pieds joints et maintien aligné.

**Différence avec le catalogue**

EX28 garde les genoux fléchis et appuyés. Ici, genoux décollés et levier jusqu’aux pieds.

**Niveau proposé**

intermédiaire

**Prérequis observables**

- Tenir la version genoux fléchis de chaque côté avec bassin et épaules superposés et respiration régulière.
- Tolérer l’appui du coude et de l’épaule sans douleur; savoir redescendre le bassin avec contrôle.

**Position initiale**

Allongé sur le côté droit, jambes allongées, genoux en extension confortable. Empiler le pied gauche sur le droit; bord externe du pied droit au sol. Poser le coude droit sous l’épaule, avant-bras au sol vers l’avant, main détendue. Placer la main gauche sur la hanche. Superposer hanches et épaules; tête dans le prolongement du thorax, regard vers l’avant, sans incliner le cou.

**Action**

Presser l’avant-bras et le bord du pied dans le sol. Soulever le bassin et les genoux ensemble en conservant les jambes tendues. Ajuster la hauteur pour relier épaule, hanche et cheville sans courber le tronc vers le sol.

**Position de maintien ou de fin**

Appui sur l’avant-bras droit et le côté du pied droit; genoux et bassin sans contact. Thorax tourné sur le côté, épaules et hanches empilées. Maintenir cette géométrie sans tourner vers le plafond.

**Retour**

Abaisser le bassin de façon contrôlée vers le tapis en gardant l’appui du bras; les jambes restent rassemblées. Ce retour termine le maintien, il ne faut pas rebondir.

**Sortie**

Poser complètement la hanche, détendre le bras, puis changer de côté au sol. Recomposer les mêmes appuis à gauche.

**Respiration**

Expirer lors de la montée peut faciliter l’installation. Pendant le maintien, alterner inspirations et expirations sans bloquer le souffle; continuer à respirer pendant la descente. La synchronisation montée/expiration est un repère, pas une obligation physiologique.

**Rôles musculaires**

**Documenté:** Les guides décrivent un travail des obliques et de soutien des épaules/hanches (ABS-S-01/02).
**Interprétation biomécanique:** Résistance à la flexion latérale du tronc; stabilisation du bassin par les muscles de hanche et de l’épaule d’appui. Pas de part chiffrée par muscle.

**Erreurs et corrections**

- Bassin qui descend: écourter et revenir à la version sur genoux.
- Thorax qui roule: replacer la main sur la hanche et superposer les épaules.
- Épaule écrasée vers l’oreille: repousser le tapis avec l’avant-bras sans hausser le cou.
- Recherche d’une grande hauteur: revenir à une ligne confortable, sans plier le tronc.

**Régressions**

- Planche latérale genoux fléchis EX28.
- Pieds décalés au sol pour élargir l’appui, variante intermédiaire à identifier comme telle.

**Progressions**

- Augmenter progressivement le temps de posture propre.
- La levée de jambe supérieure change la variante et demande un autre brief.

**Facteurs de charge**

Levier jambes tendues, disposition des pieds, durée et fatigue antérieure changent la difficulté. Évaluer les deux côtés séparément; aucune durée maximale obligatoire.

**Gêne et arrêt**

Interrompre en cas de douleur articulaire ou lombaire, douleur vive ou irradiée, vertige, ou impossibilité de respirer régulièrement. La fatigue musculaire ne justifie pas de poursuivre en perdant les appuis. Une gêne persistante ou récurrente demande une adaptation individuelle, pas un diagnostic fourni par la fiche.

**Repères audio originaux, brouillon**

- Coude sous l’épaule. Jambes allongées.
- Soulève le bassin et garde les hanches superposées.
- Respire régulièrement. Redescends avec contrôle.

**Limites restantes**

- Respiration détaillée et corrections sont une synthèse de coaching à relire, pas toutes formulées identiquement par les deux guides.

Jugement éditorial de progression à faire relire; pas une classification clinique démontrée.

**Brief média et contrôle technique**

- Position 1: coude placé, jambes tendues et pieds empilés, bassin posé.
- Position 2: bassin et genoux décollés, ligne épaule-hanche-cheville, main libre sur hanche.

Montrer une montée, un maintien distinct, une descente et le changement de côté. Ne pas produire une oscillation rapide entre les images.

Vue de face du thorax et vue depuis les pieds pour contrôler l’empilement; profil latéral montrant le coude et les pieds sans recadrage variable.

Relecture humaine du geste et du rendu requise. Deux images ne démontrent ni la respiration, ni la stabilité entre les poses, ni la tolérance individuelle.

<a id="ex58"></a>

## EX58 - Planche sur avant-bras à levier long

Statut documentaire : descriptions croisées, variante précisée, revue humaine en attente. Identifiant provisoire. Revue humaine: en attente.

**Corroboration et périmètre**

- [NSCA / Strength and Conditioning Journal, copie auteur - Long-Lever Posterior-Tilt Plank](https://www.lookgreatnaked.com/articles/long_lever_posterior_tilt_plank.pdf) (partial): Levier long exact mais combiné avec rétroversion marquée et base plus étroite.
- [Generation Iron - Long Lever Planks Exercise Guide](https://generationiron.com/long-lever-planks-exercise-guide/) (exact): Coudes devant les épaules et appui avant-bras/orteils.
- [Sports Biomechanics, copie auteur - An electromyographic comparison of a modified version of the plank with a long lever and posterior tilt versus the traditional plank exercise](https://bretcontreras.com/wp-content/uploads/An-electromyographic-comparison-of-a-modified-version-of-the-plank-with-a-long-lever-and-posterior-tilt-versus-the-traditional-plank-exercise.pdf) (exact_research): Comparaison expérimentale de conditions de levier, sans prescription de cette fiche.
- [NASM - The Plank: Coaching Progressions and Variations for Every Client](https://www.nasm.org/resource-center/blog/training/the-plank-coaching-progressions-and-variations-for-every-client) (family): Respiration et critères généraux de posture.

**Différence avec le catalogue**

EX27 place les coudes sous les épaules. Ici ils sont avancés, sans mouvement de scie ni protocole RKC.

**Niveau proposé**

avancé

**Prérequis observables**

- Planche EX27 stable avec respiration continue et sortie aux genoux contrôlée.
- Capacité à avancer légèrement les coudes sans creuser le dos ni provoquer de gêne à l’épaule.

**Position initiale**

À genoux, poser les avant-bras parallèles, paumes au sol, coudes écartés approximativement comme les épaules. Avancer les coudes par rapport à leur placement sous les épaules; retenir seulement un déplacement permettant le contrôle. Étendre une jambe puis l’autre, genoux confortablement tendus, orteils retournés en appui et pieds environ largeur du bassin. Tête alignée, regard vers le tapis; épaules donc derrière la verticale des coudes.

**Action**

Prendre appui sur les avant-bras et les orteils. Régler la tension abdominale et fessière pour garder le bassin dans l’axe du thorax et éviter l’augmentation de la cambrure. Rester immobile: les coudes ne glissent pas pendant le maintien.

**Position de maintien ou de fin**

Corps suspendu, genoux sans contact, tête-tronc-bassin-jambes en continuité. Coudes toujours en avant des épaules; pas de contraction maximale obligatoire, ni d’apnée.

**Retour**

Poser les genoux avant de relâcher le tronc; ramener les coudes vers une position ordinaire si une nouvelle installation est prévue.

**Sortie**

Reposer bassin puis thorax ou revenir à quatre pattes; ne pas laisser le ventre tomber depuis la suspension.

**Respiration**

Respirer calmement dès l’installation et tout au long du maintien. Si la tension empêche une inspiration normale, raccourcir le levier ou terminer. La respiration continue repose sur le coaching général NASM, pas sur une étude de la variante exacte.

**Rôles musculaires**

**Documenté:** L’étude ABS-S-05 mesure une modification de l’activité abdominale avec le levier; les guides décrivent le maintien par les abdominaux.
**Interprétation biomécanique:** Travail contre l’extension du tronc, avec stabilisation des épaules et du bassin. L’EMG aigu ne prouve pas une meilleure croissance musculaire.

**Erreurs et corrections**

- Cambrure qui augmente: rapprocher les coudes ou poser les genoux.
- Bassin très haut pour tenir: réduire le levier et recomposer une ligne contrôlée.
- Coudes qui glissent: vérifier le tapis; interrompre plutôt que poursuivre en glissant.
- Apnée et tension maximale: relâcher assez pour respirer ou terminer.

**Régressions**

- Planche ordinaire EX27.
- Même placement légèrement avancé avec les genoux posés, en conservant l’axe tête-tronc-genoux.

**Progressions**

- Avancer très progressivement les coudes lors d’une nouvelle installation.
- Allonger le maintien seulement si le placement ne change pas.

**Facteurs de charge**

Distance horizontale épaule-coude, longueur corporelle, largeur des appuis et durée modifient la charge. Ni coudes au niveau du nez, ni angle de 100°, ni écart fixe ne conviennent à toutes les morphologies.

**Gêne et arrêt**

Interrompre en cas de douleur articulaire ou lombaire, douleur vive ou irradiée, vertige, ou impossibilité de respirer régulièrement. La fatigue musculaire ne justifie pas de poursuivre en perdant les appuis. Une gêne persistante ou récurrente demande une adaptation individuelle, pas un diagnostic fourni par la fiche.

**Repères audio originaux, brouillon**

- Avance un peu les coudes.
- Garde le bassin dans l’axe et continue à respirer.
- Si le dos se creuse, pose les genoux.

**Limites restantes**

- Deux rédactions indépendantes décrivent le déplacement des coudes, mais le protocole NSCA ajoute des caractéristiques non imposées ici. Choix de bassin contrôlé et largeur confortable à relire.
- Ne pas présenter comme RKC, LLPTP intégral ou exercice de sécurité supérieure démontrée.

Jugement éditorial de progression à faire relire; pas une classification clinique démontrée.

**Brief média et contrôle technique**

- Position 1: genoux au sol, avant-bras déjà avancés, repère vertical épaules/coudes visible.
- Position 2: jambes tendues, orteils en appui, même emplacement des coudes, bassin maîtrisé.

Le maintien ne doit pas devenir un aller-retour de scie. Faire apparaître la mise en tension et la sortie sur les genoux.

Profil strict pour voir le levier et la courbure lombaire; vue de dessus auxiliaire pour les appuis, sans faire passer cette vue pour preuve de posture lombaire.

Relecture humaine du geste et du rendu requise. Deux images ne démontrent ni la respiration, ni la stabilité entre les poses, ni la tolérance individuelle.

### Recoupement complémentaire du 12 octobre 2026

Conserver levier long avec bassin contrôlé; ne pas compter étude apparentée et article NSCA comme équipes indépendantes. Ne pas attribuer tout effet au seul levier.

- **Positions :** Protocole levier/rétroversion combiné; pas nouveau recoupement.
- **Muscles :** Pas isolation ni supériorité hypertrophie.
- **Conseils :** Régression levier court avant perte contrôle.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [ABS-S-03](https://www.lookgreatnaked.com/articles/long_lever_posterior_tilt_plank.pdf), [ABS-S-04](https://generationiron.com/long-lever-planks-exercise-guide/), [ABS-S-05](https://bretcontreras.com/wp-content/uploads/An-electromyographic-comparison-of-a-modified-version-of-the-plank-with-a-long-lever-and-posterior-tilt-versus-the-traditional-plank-exercise.pdf), [ABS-S-16](https://www.nasm.org/resource-center/blog/training/the-plank-coaching-progressions-and-variations-for-every-client).

<a id="ex59"></a>

## EX59 - Planche sur avant-bras avec levée alternée d’une jambe

Statut documentaire : descriptions croisées, variante précisée, revue humaine en attente. Identifiant provisoire. Revue humaine: en attente.

**Corroboration et périmètre**

- [FitKit - Abs Exercise Library](https://fitkit.com/wp-content/uploads/2016/08/FitKitAbs.pdf) (exact): Planche coudes/orteils et levée d’une jambe.
- [Nemours Children’s Health - Autonomic Dysfunction Exercise Program](https://www.nemours.org/content/dam/nemours/nemours-org/en/documents/autonomic-dysfunction-exercise-program.pdf) (exact): Planche coudes et levée alternée sans rotation.
- [Caliverse - Plank with alternating leg raise](https://www.caliverse.app/exercises/plank-with-alternating-leg-raise-580) (exact): Description détaillée, faible hauteur et respiration.

**Différence avec le catalogue**

EX27 conserve les deux pieds au sol; EX30 est un bird dog sur genoux. Ici, appui avant-bras et un seul pied.

**Niveau proposé**

intermédiaire à avancé

**Prérequis observables**

- Planche avant-bras à deux pieds stable en respirant.
- Pouvoir alléger un pied sans rotation visible du bassin avant de chercher à le lever.

**Position initiale**

Installer la planche sur les avant-bras: coudes sous épaules, avant-bras parallèles, mains posées ou détendues. Étendre les jambes avec les orteils au sol, pieds environ largeur du bassin. Garder nuque alignée, épaules actives, bassin dans le prolongement du tronc; genoux décollés.

**Action**

Décoller doucement le pied droit en gardant la jambe allongée. Monter juste assez pour libérer les orteils; ne pas chercher une grande hauteur. Garder le bassin face au sol et les deux avant-bras en appui.

**Position de maintien ou de fin**

Trois appuis: deux avant-bras et pied gauche. Jambe droite tendue légèrement décollée, sans inclinaison nouvelle du bassin ni creusement du dos.

**Retour**

Reposer les orteils droits au même emplacement avec contrôle. Retrouver les quatre appuis avant de lever la jambe gauche. Alterner sans accélérer.

**Sortie**

Reposer le pied en suspension puis les deux genoux. Revenir à quatre pattes avant de détendre le tronc.

**Respiration**

Inspirer et expirer continuellement pendant les appuis et la suspension. Une expiration au décollage est un repère possible; ne pas bloquer la respiration pour maintenir le pied.

**Rôles musculaires**

**Documenté:** FitKit et Nemours demandent engagement abdominal et absence de cambrure/rotation; Caliverse mentionne abdominaux, fessiers et ischio-jambiers.
**Interprétation biomécanique:** Abdominaux stabilisateurs contre extension et rotation; fessiers et autres extenseurs de hanche soulèvent la jambe. Rôle quantitatif non mesuré dans ces guides.

**Erreurs et corrections**

- Jambe trop haute, dos creusé: réduire la hauteur au simple décollage.
- Bassin qui tourne: poser le pied, élargir légèrement les pieds ou revenir à EX27.
- Bassin qui monte en tente: arrêter la série et réinstaller la planche.
- Pied reposé brutalement: ralentir et rétablir complètement l’appui avant alternance.

**Régressions**

- Planche avant-bras à deux pieds EX27.
- Transfert léger du poids sans lever le pied.
- Bird dog EX30 pour travailler un contrôle différent sur genoux, sans prétendre que c’est le même geste.

**Progressions**

- Suspendre un peu plus longtemps une jambe à posture égale.
- Rapprocher modestement les pieds après maîtrise; ne pas cumuler immédiatement avec levier long.

**Facteurs de charge**

Hauteur de jambe, distance entre pieds, durée de suspension, tempo et fatigue modifient l’effort. Le maintien de 3-5 secondes de FitKit n’est pas une règle nécessaire.

**Gêne et arrêt**

Interrompre en cas de douleur articulaire ou lombaire, douleur vive ou irradiée, vertige, ou impossibilité de respirer régulièrement. La fatigue musculaire ne justifie pas de poursuivre en perdant les appuis. Une gêne persistante ou récurrente demande une adaptation individuelle, pas un diagnostic fourni par la fiche.

**Repères audio originaux, brouillon**

- Garde les deux avant-bras au sol.
- Décolle légèrement un pied, sans tourner le bassin.
- Repose-le doucement, puis change de jambe. Respire.

**Limites restantes**

- Caliverse impose davantage de rétroversion/protraction et classe la variante facile; ces choix ne sont pas des exigences universelles.
- Les muscles cités n’établissent pas une croissance abdominale supérieure à EX27.

Jugement éditorial de progression à faire relire; pas une classification clinique démontrée.

**Brief média et contrôle technique**

- Position 1: planche avant-bras, deux pieds en appui.
- Position 2: un pied faiblement décollé, bassin et thorax orientés comme en position 1.

Montrer le retour du pied droit avant le décollage gauche; deux poses seules ne montrent pas l’alternance ni une rotation intermédiaire.

Profil pour hauteur de jambe/cambrure, vue arrière pour niveau du bassin et vue oblique pour contrôler les contacts.

Relecture humaine du geste et du rendu requise. Deux images ne démontrent ni la respiration, ni la stabilité entre les poses, ni la tolérance individuelle.

<a id="ex60"></a>

## EX60 - Planche haute avec touchers d’épaules alternés

Statut documentaire : descriptions croisées, variante précisée, revue humaine en attente. Identifiant provisoire. Revue humaine: en attente.

**Corroboration et périmètre**

- [StrengthLog - Plank with Shoulder Taps](https://www.strengthlog.com/plank-with-shoulder-taps/) (exact): Planche mains, touche opposée et alternance.
- [Fitbod - Plank Shoulder Taps](https://fitbod.me/exercises/plank-shoulder-taps) (exact): Appui de pompe, retour et muscles de soutien.
- [Nemours Children’s Health - Autonomic Dysfunction Exercise Program](https://www.nemours.org/content/dam/nemours/nemours-org/en/documents/autonomic-dysfunction-exercise-program.pdf) (exact): Description clinique du même geste sans rotation.

**Différence avec le catalogue**

EX33 déplace les genoux; cette variante déplace les mains avec jambes allongées et pieds fixes.

**Niveau proposé**

intermédiaire

**Prérequis observables**

- Tolérer la planche sur mains sans douleur au poignet ni à l’épaule.
- Pouvoir alléger une main en maintenant le bassin presque immobile; contrôler son retour au sol.

**Position initiale**

Depuis quatre pattes, poser les paumes sous les épaules, doigts écartés orientés vers l’avant ou légèrement ouverts selon confort. Étendre les jambes et prendre appui sur les orteils, pieds assez écartés pour contrôler le bassin. Coudes tendus sans forcer leur verrouillage; tête dans l’axe, regard au tapis, thorax et bassin face au sol.

**Action**

Transférer juste assez de poids sur la main gauche pour décoller la droite. Porter la main droite à l’épaule gauche, sans lancer le bras ni chercher à tourner le thorax.

**Position de maintien ou de fin**

Une main effleure l’épaule opposée; main d’appui et deux pieds restent au sol. Conserver le bassin orienté vers le tapis et la hauteur du tronc aussi stable que possible.

**Retour**

Replacer complètement la paume droite sous son épaule, puis seulement décoller la gauche pour toucher l’épaule droite. Alterner avec un contact léger.

**Sortie**

Reposer les deux mains avant les genoux; revenir à quatre pattes et retirer progressivement la charge des poignets.

**Respiration**

Respirer continuellement. Expirer au toucher et inspirer au retour est une option de rythme, pas une phase obligatoire issue des deux guides. Si l’alternance oblige à bloquer le souffle, ralentir ou régresser.

**Rôles musculaires**

**Documenté:** StrengthLog et Fitbod décrivent un travail de stabilité abdominale; Fitbod cite poitrine et épaules en soutien. Nemours demande l’absence de rotation.
**Interprétation biomécanique:** Anti-rotation du tronc avec stabilisation scapulaire et de hanche; triceps maintiennent le coude d’appui. Pas de pourcentage de recrutement.

**Erreurs et corrections**

- Bassin qui oscille fortement: élargir les pieds et ralentir; si insuffisant, passer sur genoux.
- Main remise loin devant: revenir sous l’épaule avant le toucher suivant.
- Coude d’appui qui s’effondre: terminer et réduire la charge.
- Toucher rapide en lançant le corps: lever la main lentement et effleurer l’épaule.

**Régressions**

- Touchers avec genoux au sol, corps aligné tête-tronc-genoux.
- Planche haute à deux mains, ou simple allègement d’une main sans toucher.

**Progressions**

- Rapprocher progressivement les pieds.
- Prolonger brièvement la suspension de la main à stabilité égale.

**Facteurs de charge**

Largeur des pieds, longueur de suspension, vitesse et nombre de touches changent la difficulté. Compter une touche par main et préciser ce comptage dans un futur programme; pas de score Fitbod adopté comme dosage.

**Gêne et arrêt**

Interrompre en cas de douleur articulaire ou lombaire, douleur vive ou irradiée, vertige, ou impossibilité de respirer régulièrement. La fatigue musculaire ne justifie pas de poursuivre en perdant les appuis. Une gêne persistante ou récurrente demande une adaptation individuelle, pas un diagnostic fourni par la fiche.

**Repères audio originaux, brouillon**

- Écarte assez les pieds pour rester stable.
- Touche doucement l’épaule opposée.
- Repose la main avant de changer. Garde une respiration régulière.

**Limites restantes**

- L’écartement des pieds adapté et les rythmes respiratoires sont des choix de coaching; aucun seuil universel de rotation admissible n’est établi ici.

Jugement éditorial de progression à faire relire; pas une classification clinique démontrée.

**Brief média et contrôle technique**

- Position 1: deux paumes sous épaules, jambes allongées, pieds fixes.
- Position 2: une main à l’épaule opposée, trois appuis et bassin orienté au sol.

Afficher la main qui revient avant l’alternance opposée. Une vue continue doit révéler un éventuel roulis du bassin.

Vue arrière ou dessus pour rotation, profil pour hauteur du bassin, oblique pour montrer quelle épaule est touchée et les trois appuis.

Relecture humaine du geste et du rendu requise. Deux images ne démontrent ni la respiration, ni la stabilité entre les poses, ni la tolérance individuelle.

<a id="ex61"></a>

## EX61 - Planche montée-descente sur avant-bras et mains

Statut documentaire : descriptions croisées, variante précisée, revue humaine en attente. Identifiant provisoire. Revue humaine: en attente.

**Corroboration et périmètre**

- [ACE - Plank-ups](https://www.acefitness.org/resources/everyone/exercise-library/320/plank-ups/) (exact): Transition un coude/une main à la fois; commence en haut.
- [PureGym Denmark - Få en stærk core med up-down plank](https://www.puregym.dk/inspiration/faa-en-staerk-core-med-down-plank) (exact): Même cycle commence en bas; contrôle des hanches.
- [University of Florida / GatorCare - Plank Variations, Week 1](https://ufh-gatorcare-a2.sites.medinfo.ufl.edu/wordpress/files/2019/06/week-1-plank-variations.pdf) (exact_brief): Corrobore haut-vers-coudes-vers-haut.

**Différence avec le catalogue**

EX27 est statique; EX13/14 sont des pompes. Cette transition ne comprend pas de pompe supplémentaire.

**Niveau proposé**

intermédiaire à avancé

**Prérequis observables**

- Tenir planche avant-bras et planche haute en respirant et sans gêne aux poignets/épaules.
- Réussir la transition sur genoux avec un appui posé avant de déplacer l’autre.

**Position initiale**

Installer une planche sur avant-bras: coudes sous épaules, avant-bras au sol, paumes prêtes à être posées. Étendre jambes et appuyer les orteils; pieds assez écartés pour limiter le roulis. Garder tête et bassin dans le prolongement du tronc, regard vers le tapis.

**Action**

Poser la paume droite sous l’épaule droite et pousser pour tendre ce coude, l’avant-bras gauche restant en appui. Poser ensuite la paume gauche sous l’épaule gauche et tendre le bras gauche. Réduire le déplacement latéral du bassin plutôt que chercher la vitesse.

**Position de maintien ou de fin**

Planche haute: deux paumes au sol, bras tendus sans hyperextension forcée, deux pieds fixes. Pas de flexion des deux coudes pour ajouter une pompe.

**Retour**

Poser l’avant-bras droit au sol, puis le gauche, un à la fois. Retrouver la planche basse. Au cycle suivant, commencer de l’autre bras pour répartir les transitions.

**Sortie**

Finir avec deux mains ou deux avant-bras solidement posés; placer les genoux au sol avant de relâcher le tronc.

**Respiration**

Respirer régulièrement sur l’ensemble du cycle. On peut expirer pendant la poussée pour remonter puis inspirer à la descente, sans imposer une longue apnée lorsque les appuis changent.

**Rôles musculaires**

**Documenté:** ACE/PureGym décrivent un exercice de tronc avec tension des cuisses et fessiers; les guides insistent sur stabilité des hanches et appuis.
**Interprétation biomécanique:** Abdominaux contre extension et rotation; triceps participent à la poussée, épaules et muscles de la ceinture scapulaire assurent le soutien. Ne pas présenter comme isolation abdominale.

**Erreurs et corrections**

- Bassin qui roule à chaque appui: élargir les pieds, ralentir ou revenir sur genoux.
- Deux appuis déplacés simultanément: poser chaque paume/avant-bras avant de déplacer l’autre.
- Paume trop en avant: replacer sous l’épaule au sommet.
- Ajout spontané d’une pompe ou coude qui frappe: séparer le geste et descendre avec contrôle.

**Régressions**

- Même transition sur genoux, tronc et cuisses dans le même axe.
- Maintiens séparés haut et bas, avec repos entre les installations.

**Progressions**

- Réduire progressivement la largeur des pieds.
- Augmenter les cycles contrôlés avant de chercher une vitesse supérieure; pas d’accessoire instable dans cette fiche.

**Facteurs de charge**

Le nombre de cycles, le temps sous tension, le tempo et les appuis modifient la charge. La fatigue des bras peut arrêter l’exercice avant les abdominaux; ce n’est pas une preuve d’insuffisance abdominale.

**Gêne et arrêt**

Interrompre en cas de douleur articulaire ou lombaire, douleur vive ou irradiée, vertige, ou impossibilité de respirer régulièrement. La fatigue musculaire ne justifie pas de poursuivre en perdant les appuis. Une gêne persistante ou récurrente demande une adaptation individuelle, pas un diagnostic fourni par la fiche.

**Repères audio originaux, brouillon**

- Pose une main, puis l’autre, et monte en planche haute.
- Reviens sur un avant-bras, puis l’autre.
- Garde le bassin stable et respire. Change le bras qui commence.

**Limites restantes**

- Les positions initiales ACE et PureGym sont inversées mais décrivent le même cycle. Choix de départ bas éditorial.
- PureGym UK Plank to Press Ups ajoute une pompe: cette version différente n’est pas une corroboration exacte comptée ici.

Jugement éditorial de progression à faire relire; pas une classification clinique démontrée.

**Brief média et contrôle technique**

- Position 1: deux avant-bras au sol et jambes tendues.
- Position 2: deux paumes sous épaules et bras tendus, pieds inchangés.

Deux images ne suffisent pas à expliquer quatre transferts d’appuis. Prévoir une séquence continue montrant paume droite, paume gauche, avant-bras droit, avant-bras gauche, puis alternance du bras directeur.

Vue oblique avec les deux mains/coudes visibles; profil pour le bassin et vue arrière auxiliaire pour le roulis. Aucun membre ne doit être occulté durant son contact.

Relecture humaine du geste et du rendu requise. Deux images ne démontrent ni la respiration, ni la stabilité entre les poses, ni la tolérance individuelle.

<a id="ex62"></a>

## EX62 - Hollow hold jambes tendues et bras au-dessus de la tête

Statut documentaire : descriptions croisées, variante précisée, revue humaine en attente. Identifiant provisoire. Revue humaine: en attente.

**Corroboration et périmètre**

- [CrossFit - Gymnastics Training Guide](https://assets.crossfit.com/pdfs/seminars/SMERefs/Gymnastics/GymnasticsCourse_SeminarGuide.pdf) (exact): Position complète et progression depuis le regroupement.
- [BarBend - Hollow Body Position: A Practical Guide](https://barbend.com/hollow-body-position-fitness/) (exact): Contact lombaire, bras au-dessus de la tête et jambes tendues.

**Différence avec le catalogue**

EX35 conserve une position groupée. Ici, jambes tendues et bras prolongés près des oreilles, maintien sans balancement.

**Niveau proposé**

avancé

**Prérequis observables**

- Hollow groupé EX35 avec contact lombaire maintenu et respiration régulière.
- Pouvoir allonger les jambes à une hauteur adaptée puis lever les bras sans décoller le bas du dos.
- Tolérer les bras au-dessus de la tête et le maintien de la tête sans douleur cervicale.

**Position initiale**

Sur le dos, commencer genoux fléchis, pieds au sol et bras vers les cuisses. Expirer tranquillement pour réduire l’espace sous le bas du dos par une rétroversion contrôlée. Décoller légèrement tête et omoplates en gardant la nuque dans le prolongement du haut du dos. Allonger ensuite les jambes dans l’air, genoux en extension confortable; les garder assez haut pour conserver le contact lombaire. Allonger les bras au-dessus de la tête près des oreilles, sans accroître la cambrure.

**Action**

Maintenir la forme obtenue. Les bras et jambes restent en suspension, le tronc ne se balance pas. Le bassin est légèrement enroulé; ne pas chercher à élever les hanches loin du sol.

**Position de maintien ou de fin**

Bas du dos et région postérieure du bassin en appui; tête, omoplates, bras et talons décollés. Genoux et coudes tendus sans forcer; pieds rassemblés. La hauteur des jambes reste déterminée par le contrôle lombaire, pas par une distance imposée au tapis.

**Retour**

Ramener d’abord les bras vers les cuisses si nécessaire et fléchir les genoux vers le tronc. Poser ensuite les pieds, puis les omoplates et la tête avec contrôle.

**Sortie**

Revenir sur le dos en relâchant progressivement le ventre. Rouler sur le côté pour se relever si cela est plus confortable; ne pas jeter les jambes au sol.

**Respiration**

Après l’installation sur une expiration, continuer des inspirations et expirations régulières. Le maintien ne consiste pas à vider les poumons puis retenir le souffle. Si chaque inspiration soulève le bas du dos, raccourcir les leviers ou terminer.

**Rôles musculaires**

**Documenté:** Le manuel CrossFit et la coach BarBend décrivent le contact lombaire et le contrôle abdominal de la position.
**Interprétation biomécanique:** Abdominaux maintiennent la forme du tronc contre l’extension; fléchisseurs de hanche soutiennent les jambes en suspension, épaules maintiennent les bras. Pas d’isolation du « bas des abdos » ni de proportion de travail démontrée.

**Erreurs et corrections**

- Espace qui apparaît sous les lombaires: remonter les jambes, ramener les bras ou fléchir les genoux.
- Tête projetée vers l’avant: réduire la hauteur du haut du corps, arrêter si gêne cervicale.
- Cambrure quand les bras montent: raccourcir leur levier au lieu de forcer l’amplitude de l’épaule.
- Balancement: revenir à un maintien immobile; ce n’est pas un hollow rock.

**Régressions**

- Hollow groupé EX35.
- Jambes tendues plus hautes et bras vers les cuisses: variante de transition explicitement distincte de la version complète.
- Allonger une seule jambe pour tester le maintien du contact, sans l’appeler version complète.

**Progressions**

- Abaisser très progressivement les jambes sans perdre l’appui lombaire.
- Augmenter la durée de posture maîtrisée; ne pas cumuler immédiatement avec balancement.

**Facteurs de charge**

Longueur des jambes, hauteur des talons, position des bras, amplitude des épaules, respiration et durée changent la difficulté. Les distances fixes au sol et objectifs chronométrés des sources ne sont pas des conditions universelles.

**Gêne et arrêt**

Interrompre en cas de douleur articulaire ou lombaire, douleur vive ou irradiée, vertige, ou impossibilité de respirer régulièrement. La fatigue musculaire ne justifie pas de poursuivre en perdant les appuis. Une gêne persistante ou récurrente demande une adaptation individuelle, pas un diagnostic fourni par la fiche.

**Repères audio originaux, brouillon**

- Garde le bas du dos au tapis.
- Allonge les jambes seulement aussi bas que tu peux les contrôler.
- Bras près des oreilles. Respire, puis regroupe pour revenir.

**Limites restantes**

- BarBend juge les jambes trop hautes comme une erreur de la forme complète; ici elles sont une adaptation de charge, explicitement nommée transition si les bras sont raccourcis.
- La hauteur adaptée et les étapes de sortie sont une synthèse de coaching; aucune démonstration humaine ou média produit n’est validé.

Jugement éditorial de progression à faire relire; pas une classification clinique démontrée.

**Brief média et contrôle technique**

- Position 1: installation groupée, contact lombaire et omoplates légèrement décollées.
- Position 2: jambes tendues en suspension et bras près des oreilles, même contact lombaire.

Pour cette version statique, montrer le dépliage progressif, un maintien identifiable et le regroupement de sortie. Ne pas animer une répétition permanente groupé/tendu présentée comme le hollow hold complet.

Profil bas montrant l’espace lombaire, les talons et les omoplates; vue oblique auxiliaire pour les genoux/coudes. Le tapis ne doit pas masquer le contrôle du contact.

Relecture humaine du geste et du rendu requise. Deux images ne démontrent ni la respiration, ni la stabilité entre les poses, ni la tolérance individuelle.

## Registre des sources consultées

### ABS-S-01 - ACE

[Side Plank with Straight Leg](https://www.acefitness.org/resources/everyone/exercise-library/101/side-plank-with-straight-leg/) - consulté le 2026-10-12.

Description technique originale de la planche latérale sur avant-bras, jambes tendues.

Confirme: Pieds empilés, coude sous épaule, élévation du bassin et retour au sol.

Limites: La durée et la levée de jambe proposées ne sont pas un prérequis universel.
### ABS-S-02 - PureGym

[Side Planks](https://www.puregym.com/exercises/abs/side-planks/) - consulté le 2026-10-12.

Guide de pratique de la variante latérale, pieds réunis et avant-bras.

Confirme: Alignement et maintien, obliques et soutien des épaules/hanches.

Limites: Le maintien maximal proposé est écarté; absence de mesure anatomique propre à cette variante.
### ABS-S-03 - NSCA / Strength and Conditioning Journal, copie auteur

[Long-Lever Posterior-Tilt Plank](https://www.lookgreatnaked.com/articles/long_lever_posterior_tilt_plank.pdf) - consulté le 2026-10-12.

Article technique original de 2013, variante combinant levier long, appui étroit et rétroversion.

Confirme: Avancement des coudes et appui avant-bras/orteils; progression depuis la planche classique.

Limites: Ne décrit pas seulement le levier long: forte contraction fessière et base étroite supplémentaires. Hypothèses d’activation à cette date; pas une étude de résultats.
### ABS-S-04 - Generation Iron

[Long Lever Planks Exercise Guide](https://generationiron.com/long-lever-planks-exercise-guide/) - consulté le 2026-10-12.

Description technique rédigée par un coach, coudes avancés sous le visage.

Confirme: Avant-bras au sol, coudes en avant des épaules, corps aligné.

Limites: Discours promotionnel, durées progressives et affirmation de suppression du risque écartés. Ses références ne constituent pas des observations indépendantes.
### ABS-S-05 - Sports Biomechanics, copie auteur

[An electromyographic comparison of a modified version of the plank with a long lever and posterior tilt versus the traditional plank exercise](https://bretcontreras.com/wp-content/uploads/An-electromyographic-comparison-of-a-modified-version-of-the-plank-with-a-long-lever-and-posterior-tilt-versus-the-traditional-plank-exercise.pdf) - consulté le 2026-10-12.

Étude originale de 2014 comparant des conditions de levier et de bassin.

Confirme: La modification du levier change la sollicitation abdominale mesurée.

Limites: EMG aigu, pas preuve d’hypertrophie ni de sécurité; auteurs communs à ABS-S-03: pas une troisième équipe indépendante.
### ABS-S-06 - FitKit

[Abs Exercise Library](https://fitkit.com/wp-content/uploads/2016/08/FitKitAbs.pdf) - consulté le 2026-10-12.

Fiche originale Plank with Leg Lift, page PDF 2.

Confirme: Appui coudes/orteils, levée d’une jambe, contrôle du bas du dos.

Limites: Description brève, auteur individuel non indiqué; maintien chiffré non importé.
### ABS-S-07 - Nemours Children’s Health

[Autonomic Dysfunction Exercise Program](https://www.nemours.org/content/dam/nemours/nemours-org/en/documents/autonomic-dysfunction-exercise-program.pdf) - consulté le 2026-10-12.

Fiches cliniques Plank with Hip Extension et Full Plank with Shoulder Taps, page PDF 22.

Confirme: Avant-bras et levée alternée du pied; planche mains avec touche épaule opposée; absence de rotation du tronc.

Limites: Programme pour dysautonomie/POTS adapté d’un protocole clinique. Seule la description des gestes est utilisée, aucun calendrier ni dosage clinique extrapolé.
### ABS-S-08 - Caliverse

[Plank with alternating leg raise](https://www.caliverse.app/exercises/plank-with-alternating-leg-raise-580) - consulté le 2026-10-12.

Description originale de l’application, appui avant-bras.

Confirme: Faible élévation alternée de jambe et bassin stable.

Limites: Propose pieds joints, rétroversion et forte protraction; ces détails ne sont pas imposés. Classe débutant en désaccord avec la progression proposée ici. Auteur du texte non identifié; comptes de démonstrateurs cités.
### ABS-S-09 - StrengthLog

[Plank with Shoulder Taps](https://www.strengthlog.com/plank-with-shoulder-taps/) - consulté le 2026-10-12.

Guide original de l’application de musculation.

Confirme: Mains sous épaules, touche épaule opposée, retour de la main puis alternance.

Limites: Pas de mesure propre de recrutement ni de garantie de résultat.
### ABS-S-10 - Fitbod

[Plank Shoulder Taps](https://fitbod.me/exercises/plank-shoulder-taps) - consulté le 2026-10-12.

Guide original de l’application, relecteur identifié.

Confirme: Position de pompe, appui sur une main, touche opposée, alternance; abdominaux, épaules et poitrine.

Limites: Scores et dosage calculés issus des usages de l’application ne sont pas une prescription ni une validation clinique.
### ABS-S-11 - ACE

[Plank-ups](https://www.acefitness.org/resources/everyone/exercise-library/320/plank-ups/) - consulté le 2026-10-12.

Description originale de la transition mains/avant-bras.

Confirme: Position de pompe, descente un coude après l’autre, remontée une main après l’autre.

Limites: Pas de pompe supplémentaire; respiration non détaillée.
### ABS-S-12 - PureGym Denmark

[Få en stærk core med up-down plank](https://www.puregym.dk/inspiration/faa-en-staerk-core-med-down-plank) - consulté le 2026-10-12.

Guide original de montée-descente.

Confirme: Avant-bras vers paumes puis retour, sans laisser les hanches osciller.

Limites: Accessoires et variantes instables hors périmètre; durées et conseils de fréquence non importés.
### ABS-S-13 - University of Florida / GatorCare

[Plank Variations, Week 1](https://ufh-gatorcare-a2.sites.medinfo.ufl.edu/wordpress/files/2019/06/week-1-plank-variations.pdf) - consulté le 2026-10-12.

Fiche d’activité institutionnelle, séquence Climbers, page PDF 2.

Confirme: Planche haute, descente aux coudes, retour en planche haute.

Limites: Résumé très court; son nom Climbers désigne ici la transition, pas des genoux vers poitrine.
### ABS-S-14 - CrossFit

[Gymnastics Training Guide](https://assets.crossfit.com/pdfs/seminars/SMERefs/Gymnastics/GymnasticsCourse_SeminarGuide.pdf) - consulté le 2026-10-12.

Manuel technique original, position hollow et construction progressive.

Confirme: Bas du dos au sol, épaules décollées, jambes et bras tendus, bras près des oreilles; progression depuis le regroupement.

Limites: Contexte gymnastique. Angles, hauteur et durée doivent être adaptés; ne pas forcer les articulations en hyperextension.
### ABS-S-15 - BarBend

[Hollow Body Position: A Practical Guide](https://barbend.com/hollow-body-position-fitness/) - consulté le 2026-10-12.

Description originale d’une coach de la position complète.

Confirme: Contact lombaire, jambes allongées en suspension, bras au-dessus de la tête et épaules décollées.

Limites: Hauteur fixe des pieds et séries proposées écartées. Autrice formée dans la tradition CrossFit: éditeur et rédaction distincts, tradition technique commune.
### ABS-S-16 - NASM

[The Plank: Coaching Progressions and Variations for Every Client](https://www.nasm.org/resource-center/blog/training/the-plank-coaching-progressions-and-variations-for-every-client) - consulté le 2026-10-12.

Guide de coaching original mis à jour juillet 2026.

Confirme: Respiration continue et arrêt à la perte de posture; progression par réduction des appuis et contrôle de rotation.

Limites: Corroboration générale, pas description complète de toutes les variantes; seuils chronométrés non importés.
### ABS-S-17 - Journal of Strength and Conditioning Research / PubMed

[The effect of abdominal exercise on abdominal fat](https://pubmed.ncbi.nlm.nih.gov/21804427/) - consulté le 2026-10-12.

Résumé de recherche originale randomisée, 24 adultes, six semaines.

Confirme: Dans ce protocole, endurance abdominale améliorée sans réduction significative des mesures de graisse abdominale.

Limites: Une étude et un protocole spécifiques; pas comparaison des six variantes ni promesse sur l’apparence.

### Recoupement complémentaire du 12 octobre 2026

GMB ajoute une rédaction originale hors des deux pages de tradition CrossFit déjà conservées. Entrer depuis groupé, allonger jambes puis bras; hauteur adaptée au contrôle. Ordre précis de sortie reste éditorial.

- **Positions :** Transition groupé/leviers longs renforcée; angle jambes et ordre sortie non universels.
- **Muscles :** Rôles qualitatifs; pas supériorité sur crunch chargé ni isolation abdominale.
- **Conseils :** Maintien distingué du hollow rock; adaptation leviers courts nommée séparément.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [ABS-S-14](https://assets.crossfit.com/pdfs/seminars/SMERefs/Gymnastics/GymnasticsCourse_SeminarGuide.pdf), [ABS-S-15](https://barbend.com/hollow-body-position-fitness/), [ABS-S-18](https://gmb.io/hollow-body/).


## Sources complémentaires consultées le 12 octobre 2026

- **[ABS-S-18 - Hollow Body Holds For A Strong And Functional Core](https://gmb.io/hollow-body/)**. Éditeur : GMB Fitness. Auteur : Ryan Hurst. Section : Here’s How To Do It, points 1-4 et progression suivante. Texte consulté le 2026-10-12. Portée : Tutoriel original groupé bras vers talons puis jambes/bras allongés. Limites : Pas de sortie séquencée ni respiration détaillée; menton tuck non adopté comme compression. Vidéos/images non examinées. Indépendance : Tradition gymnastique commune à CrossFit, rédaction distincte; même URL dans deux lots, une source unique.



# Extension abdominaux dynamiques : sept candidats

EX63-EX69 sont des identifiants provisoires de dossier, pas des identifiants intégrés à Tempo. Consultation : 12 octobre 2026. Aucun média prêt, aucune revue technique humaine. Classification niveau et prérequis sont des propositions éditoriales, pas des tests cliniques.

## Registre documentaire

- **ABD-ACE-BIKE** - [ACE-commissioned study: Bicycle Maneuver (2001)](https://www.acefitness.org/getfit/studies/bestworstabexercises.pdf) - American Council on Exercise. Page 3 du PDF. Confirme : Bicyclette alternée, tronc/coude opposé au genou, rythme lent et respiration régulière. Limites : Angle et contact coude-genou sont consignes de ce protocole, pas cibles universelles ; classement EMG historique ne prouve pas supériorité générale.
- **ABD-PREHAB-BIKE** - [Oblique Bicycle Crunch](https://theprehabguys.com/vimeo-video/oblique-bicycle-crunch/) - The Prehab Guys. Instructions originales de bibliothèque kinésithérapie. Confirme : Pieds décollés, tête soutenue, flexion/rotation tronc avec pédalage et contrôle jambe allongée. Limites : Pas d’angle unique ni dose générale ; aucun diagnostic déduit du ressenti.
- **ABD-PG-BIKE** - [How To Do Bicycle Crunches](https://www.puregym.com/exercises/abs/bicycle-crunches/) - PureGym. Texte de démonstration original. Confirme : Retour alterné ; amplitude moindre si coude ne rejoint pas genou, rectus et obliques nommés. Limites : Texte liste « corresponding elbow » ambigu, mais texte vidéo décrit bien opposé. Départ jambes tendues dans liste, genoux fléchis dans transcript : variante de départ retenue explicitement.
- **ABD-SL-LEG** - [How to Do Lying Leg Raise](https://www.strengthlog.com/lying-leg-raise/) - StrengthLog. Texte original de l’app. Confirme : Bilatéral jambes allongées au sol, bras au côté, levée et descente contrôlée ; abs et fléchisseurs hanche. Limites : Arrêt inférieur et dos peu détaillés ; classement qualitatif, pas mesure de recrutement.
- **ABD-STUDY-LEG** - [Electromyographic activity of selected trunk, core, and thigh muscles in commonly used exercises for ACL rehabilitation (2018)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5909019/) - Journal of Physical Therapy Science / auteurs de l’étude, dépôt PMC. Methods, Double Leg Raise. Confirme : Deux jambes simultanées, genoux allongés, mains côtés ou sous fesses, élévation/descente ; rectus et droit fémoral mesurés. Limites : Douze jeunes femmes saines ; angle et cadence expérimentaux ne deviennent pas prescription. Pas mesure iliopsoas/obliques ni résultat clinique longitudinal.
- **ABD-GRAV-LEG** - [How to Do Leg Raises on the Floor](https://gravitus.com/guides/exercises/lying-leg-raises/) - Gravitus / Bryan Alger. Guide original signé, consulté. Confirme : Fléchisseurs bougent les jambes, abdos contrôlent bassin ; descente limitée avant creux lombaire accru. Limites : Produit commercial, citations d’études non toutes consultées ici ; ne reprendre ni moyennes, chiffres, ni critère 3x20 comme preuve readiness.
- **ABD-SP-SIDE** - [Side Plank Hip Lifts](https://spotebi.com/exercise-guide/side-plank-hip-lifts/) - Spotebi. Instructions originales sans matériel. Confirme : Coude sous épaule, pieds empilés, descente bassin sans contact sol et remontée. Limites : Promesses taille affinée exclues ; durée suggérée non prescription Tempo.
- **ABD-SL-SIDE** - [How to Do Dynamic Side Plank](https://www.strengthlog.com/dynamic-side-plank/) - StrengthLog. Guide original de l’app. Confirme : Bassin descend/remonte, pas rotation tronc ni effondrement épaule ; pieds décalés. Limites : Placement pieds diffère Spotebi ; même mouvement dynamique jambes allongées mais appui plus large.
- **ABD-BODI-SIDE** - [Side Plank Hip Lifts](https://www.bodi.com/blog/side-plank-hip-lifts) - BODi / Jamie Maguire, expert Cody Braun CSCS. Guide original, variante chargée. Confirme : Mouvement dynamique, obliques, fessiers et stabilisateurs scapulaires. Limites : Haltère sur hanche et contact léger au sol : pas exact candidat sans charge/descente suspendue ; confirme famille et signale divergence.
- **ABD-CF-VUP** - [2023 Individual Quarterfinal Test 4 - class plan](https://www.crossfit.com/wp-content/uploads/2023/01/17095034/2023_CFGames_IQF_ClassPlan_Test4.pdf) - CrossFit Affiliate Programming. Page 3 PDF, V-up review. Confirme : Tronc et jambes quittent sol ensemble, mains vers pieds ; départ mains/pieds au sol. Limites : Standard compétition impose contact et hauteur, pas consigne universelle maison ; volumes exclus.
- **ABD-CAT-VUP** - [V-Up](https://www.catalystathletics.com/exercise/313/V-Up/) - Catalyst Athletics. Guide original de coach. Confirme : Mouvement simultané jambes/tronc, équilibre sommet, abdos ET fléchisseurs hanche ; variante genoux pliés. Limites : Talons suspendus entre répétitions, diffère reset CrossFit ; dose sportive non transférée.
- **ABD-RUNNA-TWIST** - [Russian Twist Exercise Tutorial](https://support.runna.com/en/articles/6364721-russian-twist-exercise-tutorial) - Runna / Michelle. Guide original coaching. Confirme : Talons posés, option explicite bodyweight, rotation haut corps contrôlée ; pieds levés progression. Limites : Angles approximatifs du guide non normes ; rédaction centrée poids, option sans charge explicitement offerte.
- **ABD-SL-TWIST** - [How to Do Core Twists](https://www.strengthlog.com/core-twist/) - StrengthLog. Guide original de l’app. Confirme : Pieds au sol possibles, sans charge explicitement possible, retour centre puis côté opposé. Limites : GIF pondéré non inspecté ; pieds levés variante différente.
- **ABD-NASM-TWIST** - [Russian Twist](https://www.nasm.org/resource-center/exercise-library/russian-twist) - National Academy of Sports Medicine. Guide technique original. Confirme : Pieds au sol possibles, rotation épaules/tronc, maîtrise de l’élan. Limites : Base tient charge, pas seconde preuve exacte sans charge ; muscles nommés qualitativement.
- **ABD-PG-WHEEL** - [How To Do Ab Wheel Rollouts](https://www.puregym.com/exercises/abs/ab-wheel-rollouts/) - PureGym. Guide technique original. Confirme : À genoux, rollout lent, réduction course dès perte position lombaire, retour contrôlé ; anti-extension. Limites : Mention parallèle sol ou sensation étirement ne doit pas imposer amplitude : arrêt contrôle prévaut.
- **ABD-MF-WHEEL** - [How To Ab Wheel Rollout: Benefits, Variations](https://www.muscleandfitness.com/workouts/full-body-exercises/the-ab-wheel-rollout-how-to-benefits-variations/) - Muscle & Fitness / Shane McLean. Guide original signé. Confirme : À genoux, course liée mobilité épaule/contrôle dos, retour avec dorsaux ; abdos stabilisent. Limites : Texte contient affirmations promotionnelles et mot « locked » coude : ne pas en faire règle de verrouillage forcé ni résultat garanti.
- **ABD-SL-WHEEL** - [How to Do Kneeling Ab Wheel Roll-Out](https://www.strengthlog.com/kneeling-ab-wheel-roll-out/) - StrengthLog. Guide original de l’app. Confirme : À genoux sur support, dos contrôlé, rollout et retour. Limites : « As far as you can » interprété avec maintien dos, pas course maximale imposée ; aucune dose ni examen readiness.
- **ABD-GYM-WCR** - [Crunch (Weighted)](https://gym.com/exercises/crunch-weighted) - Gym.com. Guide original ouvert. Confirme : Disque tenu contre poitrine, pieds au sol genoux fléchis, omoplates décollent et retour lent. Limites : Angle genoux proposé non cible universelle ; absence de mesure activation ou résultats individuels.
- **ABD-TP-WCR** - [Exercises for Help Article - Weighted Crunch / DB Crunch](https://help.trainingpeaks.com/hc/en-us/article_attachments/32563775872653) - TrainingPeaks. PDF officiel ouvert : Weighted Crunch page PDF 51, DB Crunch page PDF 13. Confirme : Poids contre poitrine, flexion courte tête/épaules puis retour contrôlé ; DB Crunch précise pieds au sol. Limites : Bibliothèque de coaching, description courte, aucune dose ni test readiness. Vidéos non visionnées.
- **ABD-MF-WCR** - [Weighted Crunch](https://www.muscleandfitness.com/exercise/workouts/abs-and-core-exercises/weighted-crunch/) - Muscle & Fitness. Guide original ouvert. Confirme : Haltère poitrine, élévation épaules/haut dos et retour. Limites : Pieds coincés sous banc : variante distincte du candidat pieds libres au sol, pas seconde preuve exacte de tous les appuis.

<a id="ex63"></a>

## EX63 - Crunch bicyclette alterné

Niveau proposé : **intermédiaire**. Statut : candidat documentaire, hors application.

### Matériel et prérequis observables

- Sol stable
- Tapis de confort facultatif
- Faire un crunch court sans tirer sur la tête.
- Alterner flexion/extension jambes en gardant bassin contrôlé.
- Maintenir respiration pendant coordination croisée.

Critères pédagogiques proposés, non test clinique validé, aucune durée/reps universelle de qualification.

### Appariement des sources

- ABD-ACE-BIKE - exact : Coordination alternée et respiration régulière.
- ABD-PREHAB-BIKE - exact : Tête soutenue et extension jambe opposée contrôlée.
- ABD-PG-BIKE - exact_with_start_variation : Contact non obligatoire et contrôle bas dos.

### Position initiale

- Pieds : Pieds décollés une fois installé ; extension jambe libre ajustée, pas hauteur imposée.
- Genoux : Fléchis au départ, un genou vient vers tronc tandis autre s’allonge.
- Bassin : Reste soutenu, ne balance pas violemment droite/gauche.
- Colonne : Bas du dos sans cambrure qui augmente ; haut tronc s’enroule puis tourne.
- Tête : Accompagne sternum, pas menton tiré poitrine.
- Omoplates : Se décollent avec crunch, pas épaules aux oreilles.
- Bras : Doigts derrière oreilles ou tête soutenue légèrement ; coudes ouverts sans traction.
- Contacts : Sacrum et bas du dos soutenus, pieds non au sol pendant reps.

### Exécution

- Action : Soulever le haut du tronc et tourner épaule gauche vers genou droit tout en allongeant jambe gauche.
- Fin de mouvement : Rotation confortable ; coude ne doit pas toucher genou à tout prix.
- Retour : Revenir vers milieu, inverser jambes et rotation lentement.
- Sortie : Revenir milieu, replier les deux genoux, poser pieds puis tête/épaules sans chute.
- Différence de variante : Flexion + rotation croisée, pas simple pédalage jambes ni coude bougé seul.

Respiration : Respiration continue confirmée ACE. Expirer sur chaque enroulement/rotation et inspirer transition peut guider le rythme ; ne pas imposer si cadence crée apnée.

### Muscles et limites

- Documenté : Grand droit et obliques selon PureGym/ACE ; recrutement qualitatif.
- Inféré anatomiquement : Fléchisseurs hanche déplacent genoux, quadriceps maintient extension ; pas isolation abdos.
- Non établi : Pas de priorité universelle upper/lower abs ou classement de rendement.

### Erreurs et adaptations

- Traction tête : alléger mains et raccourcir crunch.
- Bas du dos se creuse : garder jambe allongée plus haute ou genou plus fléchi.
- Coude seul bouge : tourner haut buste, ralentir.

Régressions : Crunch croisé pieds posés, amplitude courte, ou dead bug pour contrôle jambes, variante distincte.

Progression : Allonger progressivement jambe libre si contrôle identique, ralentir transitions ; pas vitesse comme premier levier.

Pas de dose universelle : choisir répétitions/course/tempo selon contrôle et récupération. Finir série avant dégradation répétée ; difficulté accrue une variable à la fois. Base sans charge ajoutée, sauf roue comme matériel.

Arrêter si douleur, malaise, pincement ou fourmillement. Après blessure, chirurgie ou restrictions individuelles, faire adapter le mouvement. Aucun exercice n’est garanti compatible avec toutes les situations.

### Deux positions et recette visuelle

- Caméra : Trois quarts face et profil complémentaire pour bas dos.
- Position 1 : Épaule gauche vers genou droit, jambe gauche allongée dans amplitude contrôlée.
- Position 2 : État symétrique : épaule droite/genou gauche, jambe droite allongée.
- Retour milieu dans interpolation, bassin ne saute pas.
- Distance coude-genou peut rester visible, aucune main tire nuque.

Même personne, proportions et caméra ; trajectoire continue des contacts et articulations, pas téléportation. Vérifier aller/retour réel : deux poses ne prouvent pas le contrôle ni la respiration.

### Audio proposé, non produit

- Soutiens légèrement la tête.
- Tourne une épaule vers le genou opposé.
- Reviens au milieu, puis alterne.

### Divergences arbitrées

- ACE demande toucher coude-genou ; PureGym autorise amplitude moindre : aucun contact forcé.
- Départ genoux fléchis retenu, bien que liste PureGym débute jambes allongées.

### Points restant ouverts

- Niveau intermediate proposé malgré beginner chez PureGym.
- Détails contacts/nuque et scripts restent synthèse à faire relire.

<a id="ex64"></a>

## EX64 - Relevé de jambes allongé, deux jambes tendues

Niveau proposé : **intermédiaire**. Statut : candidat documentaire, hors application.

### Matériel et prérequis observables

- Sol stable
- Tapis facultatif
- Abaisser puis relever deux jambes avec genoux fléchis sans cambrure accrue.
- Arrêter descente volontairement avant perte contrôle, tête posée.

Critères pédagogiques proposés, non test clinique validé, aucune durée/reps universelle de qualification.

### Appariement des sources

- ABD-SL-LEG - exact : Bilatéral au sol jambes allongées, contrôle retour.
- ABD-STUDY-LEG - exact_protocol_not_prescription : Double leg raise genoux tendus décrit expérimentalement.
- ABD-GRAV-LEG - exact_original_guide : Limite inférieure au contrôle, muscles hanche versus contrôle abdominal.

### Position initiale

- Pieds : Deux jambes ensemble, pieds relâchés ou position confortable.
- Genoux : Allongés sans verrouillage forcé ; flexion si nécessaire devient régression.
- Bassin : Sacrum posé, pas d’enroulement volontaire bassin en haut.
- Colonne : Bas dos soutenu dans position confortable, pas écrasement forcé ; haut dos posé.
- Tête : Posée, nuque détendue.
- Omoplates : Au sol, bras ne poussent pas brutalement pour donner élan.
- Bras : Au côté, paumes posées pour soutien léger.
- Contacts : Dos, tête et bassin au tapis ; jambes décollées pendant cycle.

### Exécution

- Action : Lever ensemble les jambes depuis une hauteur basse maîtrisée.
- Fin de mouvement : Arrêter avant bassin qui s’enroule ou traction inconfortable ; verticale possible sans obligation.
- Retour : Descendre lentement et arrêter plus haut dès que dos se creuse ; repartir sans rebond.
- Sortie : Replier genoux puis poser pieds au sol.
- Différence de variante : Hanches bougent, bassin reste soutenu ; pas reverse crunch EX31 avec bassin décollé.

Respiration : Expirer montée et inspirer descente peut guider le rythme (Gravitus) ; garder respiration libre si besoin. Pas protocole respiratoire validé dans étude.

### Muscles et limites

- Documenté : StrengthLog : abdos et fléchisseurs hanche associés. Étude mesure grand droit et droit fémoral dans protocole bilatéral.
- Inféré anatomiquement : Iliopsoas produit flexion hanche, abdos résistent à bascule pelvis/extension ; quadriceps maintient genou allongé.
- Non établi : Pas exercice isolant abdos inférieurs. Étude de douze femmes ne fixe hiérarchie ni gains chez tout utilisateur.

### Erreurs et adaptations

- Jambes lâchées : réduire descente et ralentir.
- Bassin s’enroule au sommet : limiter hauteur pour rester variante.
- Creux lombaire augmente : flexion genoux ou une jambe, pas obligation pieds près sol.

Régressions : Genoux fléchis, amplitude réduite ; version une jambe avec autre pied posé.

Progression : Abaisser un peu plus uniquement si contrôle conservé, puis tempo plus lent ; aucune charge entre pieds proposée.

Pas de dose universelle : choisir répétitions/course/tempo selon contrôle et récupération. Finir série avant dégradation répétée ; difficulté accrue une variable à la fois. Base sans charge ajoutée, sauf roue comme matériel.

Arrêter si douleur, malaise, pincement ou fourmillement. Après blessure, chirurgie ou restrictions individuelles, faire adapter le mouvement. Aucun exercice n’est garanti compatible avec toutes les situations.

### Deux positions et recette visuelle

- Caméra : Profil corps entier ; trois quarts pour symétrie.
- Position 1 : Jambes basses mais assez hautes pour dos maîtrisé, genoux allongés.
- Position 2 : Jambes relevées, sacrum toujours posé, tête posée.
- Pas ajout curl pelvis au sommet.
- Mains et bassin restent contacts identiques, genoux ne changent pas sournoisement.

Même personne, proportions et caméra ; trajectoire continue des contacts et articulations, pas téléportation. Vérifier aller/retour réel : deux poses ne prouvent pas le contrôle ni la respiration.

### Audio proposé, non produit

- Allonge-toi et garde le bassin posé.
- Lève les deux jambes doucement.
- Descends seulement tant que ton dos reste contrôlé.

### Divergences arbitrées

- Study emploie angle expérimental ; StrengthLog verticale : aucun angle universal adopté.
- M&F nommé lying straight leg raise décrit en fait UNE jambe, exclu. PDFs Windsor inaccessibles, exclus.

### Points restant ouverts

- Rôle précis de chaque muscle non mesuré exhaustivement.
- Amplitude personnelle et capacité à distinguer contrôle bassin restent revue humaine.

<a id="ex65"></a>

## EX65 - Planche latérale avec relevés de bassin, jambes tendues

Niveau proposé : **intermédiaire**. Statut : candidat documentaire, hors application.

### Matériel et prérequis observables

- Sol stable
- Tapis de confort facultatif
- Tenir planche latérale jambes allongées avec épaule stable et respiration.
- Faire petite descente/remontée sans tourner poitrine ni glisser pieds.

Critères pédagogiques proposés, non test clinique validé, aucune durée/reps universelle de qualification.

### Appariement des sources

- ABD-SP-SIDE - exact_stacked_unloaded : Pieds empilés, sans charge, descente suspendue.
- ABD-SL-SIDE - same_dynamic_variant_staggered_feet : Jambes allongées, pied haut devant ; contrôle rotation/épaule.
- ABD-BODI-SIDE - loaded_family : Même levée bassin, charge et contact sol distincts.

### Position initiale

- Pieds : Empilés pour base ; décalés peut élargir appui et constitue variante explicite.
- Genoux : Jambes allongées sans verrouillage forcé.
- Bassin : Superposé, hanches sans rotation vers sol/plafond.
- Colonne : Alignement latéral tête-tronc-jambes au sommet.
- Tête : Dans prolongement, regard devant.
- Omoplates : Épaule d’appui active, éloignée oreille sans crispation.
- Bras : Avant-bras au sol, coude sous épaule ; main libre hanche ou poitrine.
- Contacts : Avant-bras et bord pied inférieur stables ; bassin suspendu pendant reps.

### Exécution

- Action : Depuis alignement latéral, laisser bassin descendre légèrement puis remonter en contrôle.
- Fin de mouvement : Sommet retrouve ligne tête-pieds, pas hanche projetée au-delà.
- Retour : Redescendre dans faible amplitude sans toucher sol pour base ; pas chute.
- Sortie : Finir bassin posé doucement, plier genoux et quitter appui avant de changer côté.
- Différence de variante : Bassin monte/descend, jambes restent ensemble ; pas static EX57 ni abduction jambe supérieure.

Respiration : Respiration lente et continue selon Spotebi/BODi ; expirer remontée est proposition éditoriale, pas impératif.

### Muscles et limites

- Documenté : Obliques et abdos selon Spotebi/StrengthLog. BODi variante chargée cite fessiers et stabilisateurs scapulaires.
- Inféré anatomiquement : Muscles latéraux tronc et hanche inférieure contrôlent descente ; dentelé/coiffe participent appui, classement individuel non mesuré.
- Non établi : Pas promesse taille affinée ni isolation obliques.

### Erreurs et adaptations

- Épaule s’effondre : reposer bassin et reprendre appui moins difficile.
- Poitrine tourne : réduire course et superposer épaules.
- Bassin part derrière : revenir ligne latérale en haut.

Régressions : Planche latérale statique ; genoux fléchis au sol version dynamique courte. Pieds décalés pour base plus large, montrer distinctement.

Progression : Course un peu plus grande sans contact sol, tempo ralenti ; pas haltère dans base.

Pas de dose universelle : choisir répétitions/course/tempo selon contrôle et récupération. Finir série avant dégradation répétée ; difficulté accrue une variable à la fois. Base sans charge ajoutée, sauf roue comme matériel.

Arrêter si douleur, malaise, pincement ou fourmillement. Après blessure, chirurgie ou restrictions individuelles, faire adapter le mouvement. Aucun exercice n’est garanti compatible avec toutes les situations.

### Deux positions et recette visuelle

- Caméra : Vue face du côté soutenu et trois quarts pour superposition.
- Position 1 : Bassin légèrement bas suspendu, mêmes appuis avant-bras/pied.
- Position 2 : Bassin remonté en ligne tête-chevilles, épaule stable.
- Pieds empilés constants pour base.
- Aucun mouvement jambe haute seule, aucun pliage caché genoux.

Même personne, proportions et caméra ; trajectoire continue des contacts et articulations, pas téléportation. Vérifier aller/retour réel : deux poses ne prouvent pas le contrôle ni la respiration.

### Audio proposé, non produit

- Place le coude sous l’épaule.
- Remonte le bassin en gardant le corps de côté.
- Redescends doucement, puis répète.

### Divergences arbitrées

- Spotebi ne touche pas sol ; BODi tap léger avec haltère. Base suspendue sans charge retenue.
- StrengthLog pieds décalés, Spotebi empilés : démonstration base empilée, régression décalée.

### Points restant ouverts

- Deuxième guide exact pieds empilés sans charge à renforcer ; deux guides indépendants exacts sur mouvement jambes allongées mais placement pieds diffère.
- Muscles précis appui épaule et amplitude restent inférences.

### Recoupement complémentaire du 12 octobre 2026

Fixer base pieds empilés, bassin suspendu sans charge; pieds décalés deviennent adaptation explicite. Deuxième procédure exacte empilée toujours manquante.

- **Positions :** Choix éditorial appuis fixé; pas confirmation supplémentaire.
- **Muscles :** Appui épaule reste inférence.
- **Conseils :** Contact sol BODi et charge non copiés.
- **Médias :** Brief dérivé des consignes seulement; aucune nouvelle inspection ou validation de média. Trajectoire complète, entrée et sortie à revoir humainement.
- **Audio :** Brouillon dépendant de la variante; aucune approbation de script, production, écoute ou intégration dans cette passe.

Sources de décision : [ABD-SP-SIDE](https://spotebi.com/exercise-guide/side-plank-hip-lifts/), [ABD-SL-SIDE](https://www.strengthlog.com/dynamic-side-plank/), [ABD-BODI-SIDE](https://www.bodi.com/blog/side-plank-hip-lifts).

<a id="ex66"></a>

## EX66 - V-up, montée simultanée du tronc et des jambes

Niveau proposé : **avancé**. Statut : candidat documentaire, hors application.

### Matériel et prérequis observables

- Sol stable
- Tapis de confort facultatif
- Faire relevé jambes et enroulement tronc séparés sans élan ni douleur.
- Réussir tuck-up contrôlé, équilibre haut et descente lente.
- Pouvoir lever bras overhead et jambes sans chercher contact au prix du cou.

Critères pédagogiques proposés, non test clinique validé, aucune durée/reps universelle de qualification.

### Appariement des sources

- ABD-CF-VUP - exact_competition_standard : Simultanéité et départ sol, contact obligatoire compétition seulement.
- ABD-CAT-VUP - exact_suspended_between_reps : V et équilibre, retour talons suspendus, hip flexors documentés.

### Position initiale

- Pieds : Jambes rapprochées, talons posés pour installation puis décollés.
- Genoux : Allongés sans verrouillage forcé, flexion volontaire = tuck-up régression.
- Bassin : Appui bassin au sommet, pas balancement sur sacrum à vitesse.
- Colonne : S’enroule activement dans montée ; ne reste pas rigide comme plank.
- Tête : Suit buste sans coup de menton.
- Omoplates : Se décollent avec tronc ; éviter haussement forcé épaules.
- Bras : Allongés derrière tête au départ selon mobilité, reviennent vers jambes.
- Contacts : Départ dos et talons au tapis ; sommet équilibre bassin, pas mains en appui.

### Exécution

- Action : Soulever tronc et jambes au même moment en rapprochant mains et pieds.
- Fin de mouvement : V équilibré ; atteindre pieds si possible sans forcer, toucher obligatoire seulement standard compétition.
- Retour : Redescendre ensemble, sans claquer dos/talons. Base pédagogique permet reset doux au sol entre reps.
- Sortie : Reposer tronc, plier genoux et poser pieds, relâcher.
- Différence de variante : Deux extrémités montent ensemble ; pas sit-up suivi tardivement de leg raise.

Respiration : Expirer montée, inspirer retour est consigne pédagogique adaptée ; sources exactes ne fixent pas un cycle unique. Continuer à respirer pendant brève pause.

### Muscles et limites

- Documenté : Catalyst : abdos et fléchisseurs hanche, force/endurance.
- Inféré anatomiquement : Grand droit contribue flexion tronc ; iliopsoas/droit fémoral flexion hanche ; obliques contrôle bilatéral.
- Non établi : Aucune isolation upper/lower abs, pas « abdos tirent jambes » exclusif.

### Erreurs et adaptations

- Élan bras ou tête : revenir tuck-up et ralentir.
- Buste puis jambes décalés : pratiquer simultanéité à amplitude réduite.
- Retour en chute : moins de hauteur, reset contrôlé.

Régressions : Tuck-up genoux fléchis ; crunch et leg raise adaptés séparément.

Progression : Pause sommet si équilibré puis descente plus lente ; talons suspendus seulement après contrôle.

Pas de dose universelle : choisir répétitions/course/tempo selon contrôle et récupération. Finir série avant dégradation répétée ; difficulté accrue une variable à la fois. Base sans charge ajoutée, sauf roue comme matériel.

Arrêter si douleur, malaise, pincement ou fourmillement. Après blessure, chirurgie ou restrictions individuelles, faire adapter le mouvement. Aucun exercice n’est garanti compatible avec toutes les situations.

### Deux positions et recette visuelle

- Caméra : Profil complet mains-pieds avec vue trois quarts pour symétrie.
- Position 1 : Allongé bras overhead et jambes longues, contacts au sol base reset.
- Position 2 : V, tronc et deux jambes levés simultanément, mains vers pieds.
- Bas du dos ne reste pas collé au sol au sommet, ne pas simuler posture impossible.
- Pas de genoux pliés dans V-up base, pas talons qui traversent mains.

Même personne, proportions et caméra ; trajectoire continue des contacts et articulations, pas téléportation. Vérifier aller/retour réel : deux poses ne prouvent pas le contrôle ni la respiration.

### Audio proposé, non produit

- Allonge les jambes et les bras.
- Monte le tronc et les jambes ensemble.
- Redescends ensemble, sans te laisser tomber.

### Divergences arbitrées

- CrossFit reset mains/pieds au sol ; Catalyst pas contact talons entre reps. Base reset choisie pour contrôle, suspension progression.
- Mains vers pieds plutôt que contact forcé, choix maison au-delà standard compétition.

### Points restant ouverts

- Niveau advanced éditorial ; readiness observables non test certifiant.
- Deux guides ne prouvent pas bénéfice clinique individuel.

<a id="ex67"></a>

## EX67 - Rotation russe sans charge, talons posés

Niveau proposé : **intermédiaire**. Statut : candidat documentaire, hors application.

### Matériel et prérequis observables

- Sol stable
- Tapis facultatif
- Tenir léger recul buste en respirant, talons posés.
- Tourner haut tronc lentement sans entraîner genoux/bassin ni douleur.

Critères pédagogiques proposés, non test clinique validé, aucune durée/reps universelle de qualification.

### Appariement des sources

- ABD-RUNNA-TWIST - exact_bodyweight_heels_down_option : Talons au sol, sans charge explicitement possible, rotation contrôlée.
- ABD-SL-TWIST - exact_grounded_no_load_option : Pieds sol et absence charge toutes deux autorisées.
- ABD-NASM-TWIST - weighted_variant_feet_down : Technique rotation, muscles qualificatifs, pas base sans charge.

### Position initiale

- Pieds : Talons au sol pour variante documentée ; avant-pieds peuvent rester posés ou relevés confortablement.
- Genoux : Fléchis, orientation stable sans serrage forcé.
- Bassin : Bassin assis posé, pas soulèvement alterné fesses.
- Colonne : Buste redressé puis légèrement reculé, sans effondrement lombaire.
- Tête : Suit épaules, pas rotation nuque seule.
- Omoplates : Relâchées, épaules ne montent pas.
- Bras : Mains ensemble devant poitrine, coudes souples ; sans haltère.
- Contacts : Bassin et talons gardent contact ; aucune fixation pieds par partenaire.

### Exécution

- Action : Tourner doucement sternum/épaules vers un côté, mains accompagnent.
- Fin de mouvement : Arrêter avant bassin/genoux qui suivent ou inconfort ; pas obligation mains touchent sol.
- Retour : Revenir centre puis autre côté avec même inclinaison buste.
- Sortie : Revenir centre, redresser buste, poser mains si besoin pour sortir.
- Différence de variante : Tronc tourne ; pas simple balancement bras, pas pieds suspendus base.

Respiration : Respiration régulière ; expirer rotation et inspirer centre peut servir de rythme éditorial, sans bloquer ni forcer longue expiration.

### Muscles et limites

- Documenté : Runna : obliques, transverse et fléchisseurs hanche ; StrengthLog : abs et obliques qualitatifs. NASM cite grand droit/transverse variante pondérée.
- Inféré anatomiquement : Abdos et fléchisseurs maintiennent recul, obliques participent rotation ; pieds posés ne rendent pas hip flexors inactifs.
- Non établi : Pas pourcentage activation ou perte graisse locale.

### Erreurs et adaptations

- Bras seuls bougent : ralentir et orienter sternum avec eux.
- Genoux oscillent : moins de rotation/recul.
- Dos s’effondre : se redresser, petite amplitude.

Régressions : Buste plus vertical et rotation moindre ; mobilité assise reste variante distincte.

Progression : Recul léger supplémentaire si contrôle ; faible résistance éventuelle à traiter séparément, aucune charge lourde ni pieds levés obligatoires.

Pas de dose universelle : choisir répétitions/course/tempo selon contrôle et récupération. Finir série avant dégradation répétée ; difficulté accrue une variable à la fois. Base sans charge ajoutée, sauf roue comme matériel.

Arrêter si douleur, malaise, pincement ou fourmillement. Après blessure, chirurgie ou restrictions individuelles, faire adapter le mouvement. Aucun exercice n’est garanti compatible avec toutes les situations.

### Deux positions et recette visuelle

- Caméra : Trois quarts face avec bassin/talons visibles, profil auxiliaire pour recul.
- Position 1 : Haut tronc tourné gauche, talons et genoux stables.
- Position 2 : Haut tronc tourné droite, mêmes appuis et inclinaison.
- Interpolation passe centre sans mains qui fouettent.
- Pas dessin pieds décollés ni charge imposée.

Même personne, proportions et caméra ; trajectoire continue des contacts et articulations, pas téléportation. Vérifier aller/retour réel : deux poses ne prouvent pas le contrôle ni la respiration.

### Audio proposé, non produit

- Garde les talons au sol.
- Tourne doucement le buste, les mains suivent.
- Reviens au centre, puis change de côté.

### Divergences arbitrées

- Runna talons posés et genou approximatif ; NASM pieds sol ou levés : choisir talons posés, aucun angle universel.
- Guides pondérés utilisent mains vers sol : contact sol non objectif obligatoire sans charge.

### Points restant ouverts

- Inclinaison personnelle, tolérance rotation et rôle exact muscles restent à relire.
- Niveau intermediate proposé même si versions plus simples parfois beginner.

<a id="ex68"></a>

## EX68 - Roue abdominale à genoux, course étendue maîtrisée

Niveau proposé : **avancé**. Statut : candidat documentaire, hors application.

### Matériel et prérequis observables

- Roue abdominale adaptée, poignées/axe intacts
- Sol plane avec adhérence adaptée roue
- Protection confortable genoux
- EX34 course courte : avancer/revenir sans bassin qui chute ni creux lombaire augmenté.
- Support mains/poignets et flexion épaules overhead tolérés.
- Pouvoir arrêter roue volontairement puis revenir sans à-coup.

Critères pédagogiques proposés, non test clinique validé, aucune durée/reps universelle de qualification.

### Appariement des sources

- ABD-PG-WHEEL - exact_kneeling_variable_range : Course limitée contrôle et retour.
- ABD-MF-WHEEL - exact_kneeling_control_limited : Mobilité épaules/position dos limitent course, dorsaux retour.
- ABD-SL-WHEEL - exact_kneeling : Genoux protégés, aller et retour contrôlés.

### Position initiale

- Pieds : Position confortable derrière genoux ; pas de règle imposant pieds levés.
- Genoux : Posés sur protection stable, écartement adapté.
- Bassin : Au départ au-dessus ou légèrement devant genoux, contrôlé avec côtes.
- Colonne : Tronc stabilisé, sans cambrure qui augmente pendant extension course.
- Tête : Suit tronc, regard sol devant roue, nuque sans projection.
- Omoplates : Accompagnent mouvement bras ; pas blocage forcé en rétraction.
- Bras : Deux mains serrent poignées, poignets alignés, coudes allongés sans verrouillage forcé.
- Contacts : Genoux fixes et roue au sol ; mains restent sur poignées.

### Exécution

- Action : Faire rouler lentement vers devant, épaules/bras avancent et corps se déploie depuis genoux.
- Fin de mouvement : Course plus longue que EX34 personnelle seulement tant que lombaires et épaules restent contrôlées ET retour possible ; parallèle sol non obligatoire.
- Retour : Ramener roue en coordination bras/tronc, sans lancer bassin vers talons pour esquiver effort.
- Sortie : Une fois roue revenue et poids stable, poser fesses ou mains au sol sans lâcher en extension.
- Différence de variante : Progression de course à genoux, pas variante debout ni nouvelle obligation full ROM.

Respiration : Respiration continue, inspirer doucement sortie et expirer retour peut guider rythme. Si impossible sans apnée, réduire course ; phases proposées éditorialement, pas démontrées comme règle universelle.

### Muscles et limites

- Documenté : PureGym : anti-extension, abdos/obliques et contrôle tronc. M&F : dorsaux participent retour, fessiers et abdos maintiennent position.
- Inféré anatomiquement : Dentelé/coiffe contrôlent épaule, triceps stabilisent coude ; classement précis selon course non établi.
- Non établi : Pas « abdos seuls ramènent roue », ni allongement maximal nécessaire, ni résultat clinique garanti.

### Erreurs et adaptations

- Bassin chute/creux augmente : raccourcir course immédiatement.
- Roue dévie : arrêter, retrouver axe et symétrie prise.
- Bassin recule brusquement avant roue : revenir course courte coordonnée.
- Coudes plient pour sauver retour : réduire amplitude, pas forcer butée.

Régressions : EX34 courte course ; repère fixe de distance ou butée mur seulement si roue/mur permettent arrêt contrôlé, proposition à vérifier. Dead bug ou planche adaptés si appui roue non toléré.

Progression : Augmenter distance par petits incréments après retour identique, puis tempo ; pas version debout incluse.

Pas de dose universelle : choisir répétitions/course/tempo selon contrôle et récupération. Finir série avant dégradation répétée ; difficulté accrue une variable à la fois. Base sans charge ajoutée, sauf roue comme matériel.

Arrêter si douleur, malaise, pincement ou fourmillement. Après blessure, chirurgie ou restrictions individuelles, faire adapter le mouvement. Aucun exercice n’est garanti compatible avec toutes les situations.

### Deux positions et recette visuelle

- Caméra : Profil entier roue-genoux-tronc ; trois quarts avant pour symétrie.
- Position 1 : À genoux, roue proche sous/avant épaules, tronc préparé.
- Position 2 : Roue davantage devant, bras longs, corps déployé sans ventre qui pend ; angle personnalisé.
- Rayon roue, contact sol, genoux et mains constants.
- Transition retour montre roue et bassin coordonnés, pas fesses téléportées talons.
- Deux poses ne peuvent attester capacité retour : démonstration humaine requise.

Même personne, proportions et caméra ; trajectoire continue des contacts et articulations, pas téléportation. Vérifier aller/retour réel : deux poses ne prouvent pas le contrôle ni la respiration.

### Audio proposé, non produit

- À genoux, tiens les poignées et prépare le tronc.
- Avance seulement jusqu’où tu peux garder le dos contrôlé.
- Ramène la roue doucement, sans à-coup.

### Divergences arbitrées

- PureGym propose parallèle ; sa clause contrôle prévaut, M&F limite par mobilité. Pas de full ROM universel.
- M&F dit coudes locked ; allongés sans verrouillage forcé retenu éditorialement.
- Pas action abdominale isolée ; épaules/dorsaux participent.

### Points restant ouverts

- Différence EX34/EX68 repose sur distance personnelle maîtrisée, pas seuil cm standard.
- Readiness, matériel exact et médias restent revue technique humaine.

<a id="ex69"></a>

## EX69 - Crunch avec charge tenue contre la poitrine

Niveau proposé : **intermédiaire**. Statut : candidat documentaire, hors application.

### Matériel et prérequis observables

- Disque ou haltère compact, prise sûre avec deux mains
- Sol stable et tapis de confort facultatif
- Faire crunch sans charge, montée et retour sans élan ni traction de la tête.
- Tenir une charge légère contre poitrine tout en respirant librement.
- Préparer et retirer charge sans la faire passer au-dessus du visage.

Critères pédagogiques proposés, non test clinique validé, aucune durée/reps universelle de qualification.

### Appariement des sources

- ABD-GYM-WCR - exact_floor_chest_load : Pieds au sol, disque poitrine, crunch et retour.
- ABD-TP-WCR - exact_floor_chest_load : DB Crunch et Weighted Crunch corroborent prise poitrine et flexion courte.
- ABD-MF-WCR - same_load_placement_anchored_feet_variant : Haltère poitrine exact, pieds sous banc distincts.

### Position initiale

- Pieds : Pieds entiers posés, écartement confortable ; pas fixation sous banc dans base.
- Genoux : Fléchis dans position tolérée, aucun angle imposé.
- Bassin : Reste au tapis pendant répétition, pas décollage pour donner élan.
- Colonne : Haut tronc s’enroule, bas dos reste soutenu sans creux accru ni aplatissement forcé.
- Tête : Suit tronc ; garder espace confortable sous menton, pas coup de tête.
- Omoplates : Se décollent avec haut du tronc ; retour au tapis contrôlé.
- Bras : Deux mains sécurisent disque/haltère contre poitrine, coudes fléchis ; charge reste proche, pas derrière tête ni bras tendus.
- Contacts : Pieds et bassin posés ; charge soutenue par mains contre poitrine sans comprimer respiration.

### Exécution

- Action : Enrouler doucement haut tronc vers bassin en maintenant charge contre poitrine.
- Fin de mouvement : Omoplates décollées dans amplitude tolérée ; ne pas monter jusqu’assis.
- Retour : Redescendre lentement jusqu’au contact confortable, sans lâcher la charge ni faire rebondir dos.
- Sortie : Poser haut du dos, conserver prise deux mains, se tourner sur côté et déposer charge près du corps en contrôle. Sortie proposée à vérifier avec matériel réel.
- Différence de variante : Flexion courte tronc avec résistance externe ; pas sit-up, pas charge derrière tête, pas poussée de bras.

Respiration : Expirer montée et inspirer retour est un rythme pédagogique ; respiration continue prime et charge ne doit pas nécessiter apnée. Les trois guides exacts ne fixent pas phase obligatoire.

### Muscles et limites

- Documenté : Les guides ciblent les abdominaux qualitativement et décrivent résistance au crunch.
- Inféré anatomiquement : Grand droit produit flexion tronc, obliques participent au contrôle ; bras maintiennent charge sans être moteurs du crunch.
- Non établi : Pas chiffre activation ni hypertrophie garantie. Charge rend progression de résistance possible, ne prouve pas supériorité universelle sur autres exercices.

### Erreurs et adaptations

- Poids éloigné poitrine : réduire charge et conserver prise.
- Élan tête/bras : alléger, retourner crunch sans charge.
- Mouvement devient sit-up : garder flexion courte et pelvis soutenu.
- Respiration comprimée ou prise incertaine : déposer charge et modifier matériel.

Régressions : Crunch sans charge, flexion moins ample ; aucune charge derrière tête pour faciliter.

Progression : Augmenter modestement résistance seulement si trajectoire, prise et respiration restent identiques ; pas kilométrage reps ou kg universel. Tempo contrôlé ou brève pause peuvent progresser indépendamment de charge, sans cumuler variables.

Pas de dose universelle : choisir répétitions/course/tempo selon contrôle et récupération. Finir série avant dégradation répétée ; difficulté accrue une variable à la fois. Résistance externe ajustable, avec prise et respiration conservées ; aucune charge standard prescrite par niveau.

Arrêter si douleur, malaise, pincement ou fourmillement. Après blessure, chirurgie ou restrictions individuelles, faire adapter le mouvement. Aucun exercice n’est garanti compatible avec toutes les situations.

### Deux positions et recette visuelle

- Caméra : Profil et trois quarts avant montrant poitrine, charge et pieds.
- Position 1 : Dos posé genoux fléchis, deux mains maintiennent charge contre poitrine, pieds au sol.
- Position 2 : Omoplates décollées, charge toujours même place contre poitrine, bassin/pieds constants.
- Pas disque derrière tête ou bras suspendus vers plafond.
- Charge ne traverse pas corps, ne glisse pas vers visage.
- Retour doux, prise matérielle et sortie à examiner réellement.

Même personne, proportions et caméra ; trajectoire continue des contacts et articulations, pas téléportation. Vérifier aller/retour réel : deux poses ne prouvent pas le contrôle ni la respiration.

### Audio proposé, non produit

- Tiens la charge contre la poitrine avec les deux mains.
- Enroule doucement le haut du buste.
- Repose les épaules lentement, sans lâcher la charge.

### Divergences arbitrées

- Gym.com angle genoux donné, aucune mesure universelle retenue.
- M&F pieds fixés banc exclus de base ; matériel reste maison sans banc requis.
- Muscle & Strength bras tendus au-dessus poitrine est variante de levier, pas preuve charge contre poitrine.

### Points restant ouverts

- Prise exacte selon forme haltère/disque et sortie du sol doivent être relues humainement.
- Programme de résistance progressif à individualiser, aucun kg par niveau validé.


# Exercices adaptés au kit de résistance

Cinq variantes d’accessoire et cinq nouveaux mouvements à ancrage. Consignes, prescription, illustrations et audio restent provisoires, sans revue humaine. Les 48 historiques, leurs versions et les 21 extensions restent conservés.

Les nouvelles fiches sont distinctes quand posture ou ancrage changent. Curl haltères EX25 couvert par EX26 tubes existant ; rowing unilatéral EX20 rapproché du rowing bilatéral, sans prétendre conserver l’unilatéral ; développé serré et pompe résistée restent des gestes distincts du développé debout.

## Méthode et limites

Documents ouverts et portée enregistrée. Nombre de liens différent du nombre de confirmations indépendantes. KT02/03 même éditeur. Certaines confirmations restent de famille et les modalités exactes restent partielles.

### Variante EX17 v2 - Développé épaules avec tubes et poignées

under_feet ; niveau éditorial intermediate.

Installation : Poignées à hauteur des épaules, coudes fléchis, pieds stables sur le milieu des tubes.

Mouvement : Pousse les poignées au-dessus des épaules sans creuser le dos.

Retour et sortie : Ramène les poignées aux épaules en freinant le retour. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT01, KT02, KT03, KT04, KT12.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

### Variante EX18 v2 - Élévations latérales avec tubes et poignées

under_feet ; niveau éditorial beginner.

Installation : Debout sur le milieu des tubes, une poignée de chaque côté des cuisses, coudes légèrement fléchis.

Mouvement : Lève les bras sur les côtés dans une amplitude confortable, jusqu’à hauteur des épaules au maximum.

Retour et sortie : Abaisse les poignées lentement sans hausser les épaules. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT01, KT02, KT06, KT04, KT12.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

### Variante EX23 v2 - Extension triceps au-dessus de la tête avec tubes

under_feet ; niveau éditorial intermediate.

Installation : Pieds décalés, milieu des tubes maintenu sous le pied arrière. Tiens une poignée dans chaque main derrière la tête, bras dirigés vers le haut.

Mouvement : Allonge les coudes pour monter les poignées au-dessus de la tête, sans déplacer le tronc.

Retour et sortie : Replie les coudes doucement, sans relâcher les poignées. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT07, KT08, KT12, KT01.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

### Variante EX37 v2 - Squat avec tubes et poignées aux épaules

under_feet ; niveau éditorial beginner.

Installation : Deux pieds sur le milieu des tubes. Monte une poignée près de chaque épaule, tubes à l’extérieur des jambes.

Mouvement : Fléchis les genoux et abaisse le bassin dans une amplitude maîtrisée, talons au sol.

Retour et sortie : Redresse les jambes et les hanches, poignées toujours près des épaules. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT02, KT04, KT11, KT01.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

### Variante EX38 v2 - Charnière de hanches avec tubes et poignées

under_feet ; niveau éditorial intermediate.

Installation : Deux pieds sur le milieu des tubes, poignées de chaque côté des cuisses, bras allongés, genoux souples.

Mouvement : Recule les hanches et incline le buste sans arrondir le dos. Les poignées descendent près des jambes.

Retour et sortie : Redresse les hanches sans tirer avec les bras ni te pencher en arrière. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT09, KT10, KT01.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

<a id="ex70"></a>

## EX70 - Développé poitrine debout avec kit et ancrage de porte

door_mid ; niveau éditorial beginner.

Installation : Ancrage derrière toi à hauteur de poitrine. Pieds décalés, poignées près de la poitrine et coudes fléchis.

Mouvement : Pousse les deux poignées devant la poitrine, sans verrouiller les coudes ni cambrer le dos.

Retour et sortie : Reviens doucement, sans laisser les coudes partir loin derrière le buste. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT01, KT02, KT03, KT05, KT12.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

<a id="ex71"></a>

## EX71 - Écartés poitrine debout avec kit et ancrage de porte

door_mid ; niveau éditorial beginner.

Installation : Dos à l’ancrage à hauteur d’épaules, pieds décalés, bras ouverts et coudes légèrement fléchis.

Mouvement : Rapproche les poignées devant la poitrine dans un arc, en conservant le même pli aux coudes.

Retour et sortie : Ouvre lentement les bras, sans chercher une amplitude douloureuse. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT01, KT02, KT03, KT04, KT12.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

<a id="ex72"></a>

## EX72 - Rowing debout avec kit et ancrage de porte

door_mid ; niveau éditorial intermediate.

Installation : Face à l’ancrage à hauteur du bas de la poitrine, genoux souples, poignées devant toi et bras allongés.

Mouvement : Ramène les poignées vers les côtes basses, coudes près du buste, sans basculer en arrière.

Retour et sortie : Allonge les bras lentement en gardant le tronc à la même place. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT02, KT03, KT04, KT11.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

<a id="ex73"></a>

## EX73 - Extension triceps vers le bas avec kit et ancrage haut

door_high ; niveau éditorial intermediate.

Installation : Face à la porte, ancrage en haut. Coudes près des côtes, poignées devant le bas de la poitrine.

Mouvement : Allonge les coudes pour descendre les poignées près des cuisses, bras restant au même endroit.

Retour et sortie : Replie les coudes sous contrôle, sans avancer les épaules. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT02, KT03, KT08, KT12.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

<a id="ex74"></a>

## EX74 - Écartés inversés debout avec kit et ancrage de porte

door_mid ; niveau éditorial beginner.

Installation : Face à l’ancrage à hauteur d’épaules, genoux souples, bras devant toi et coudes légèrement fléchis.

Mouvement : Ouvre les bras sur les côtés, sans hausser les épaules ni plier davantage les coudes.

Retour et sortie : Ramène les bras devant toi lentement, sans laisser les tubes te tirer. Avant de lâcher les poignées, réduis la tension en revenant près de l’ancrage ou en abaissant les bras.

Sources consultées : KT04, KT01, KT12.
Montage réel, entrée/sortie, dose, images et audio restent à revoir.

## Sources consultées

- KT01 [Thera-Band / The Hygenic Corporation - Instruction Manual 2012](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) : bandes et tubes, accessoires, levées/poussées, adduction, tirages, dead lift. Texte original consulté. Pas notice Decathlon ; certaines variantes diffèrent. Capture PDF non utilisée comme revue humaine.
- KT02 [ProsourceFit - Resistance Tubes Instruction Manual & Exercise Guide](https://images-na.ssl-images-amazon.com/images/I/B1p8Nh6A1ZS.pdf) : squat p.6, row p.9, press p.10, fly p.11, élévations p.12, épaules p.13, pushdown p.15. Texte original consulté. Deux poignées et tubes décrits ; ancrage press souvent plus haut que variante Tempo. Notice d’une autre marque.
- KT03 [ProsourceFit - Holly Pinkham, Upper Body Resistance Band Workout](https://www.prosourcefit.com/blogs/news/resistance-band-travel-workout) : poussées, écartés, overhead press, triceps, ancrage. Même groupe éditorial que KT02, ne pas compter comme nouvelle équipe indépendante.
- KT04 [Bodylastics - Guide 136 pages](https://storage.googleapis.com/msgsndr/XvPdGEgSd8SLZjFiaiaQ/media/678d836801b601124c15cda0.pdf) : squat poignées p.109, shoulder press p.119, reverse fly p.121 ; comparer sections barres et unilatérales. Texte original consulté. Captures demandées en échec. Sections avec barre et straps exclues comme procédures exactes du kit.
- KT05 [Peak Physio - Chest Press [Theraband]](https://www.peak-physio.com.au/exercise/chest-press-theraband/) : Instructions : ancrage poitrine, pieds décalés, poussée et retour. Type bande/poignées pas complètement précisé, procédure de famille. Vidéo non visionnée.
- KT06 [Peak Physio - Shoulder Lateral Raise](https://www.peak-physio.com.au/exercises/strength-shoulder-lateral-raise-with-theraband/) : Long arm variation et dumbbell. Bande, bras droit/paume bas et protocole clinique distincts des tubes/poignées à léger pli de Tempo. Doses non importées.
- KT07 [Burnlab - Overhead Triceps Extension](https://burnlab.co/blogs/blog/resistance-band-tricep-workout) : Section 1 : tube sous un pied, poignées et coudes près oreilles. Verrouillage forcé et promesses de tête musculaire non retenus. Vidéo non visionnée.
- KT08 [Mirafit - 5 Resistance Band Triceps Exercises](https://mirafit.co.uk/blog/5-resistance-band-triceps-exercises/) : Sections reverse grip pushdown et overhead triceps. Prise inversée/unilatérale et long loop distinctes, soutien de famille ; aucune notice Decathlon.
- KT09 [Caliverse - Band Romanian Deadlift](https://www.caliverse.app/exercises/band-romanian-deadlift-805) : Description : sous pieds, mains extérieures, bras longs, charnière, souffle et retour. Type bande plate versus tubes pas établi ; adaptation accessoire éditoriale. Vidéo non visionnée.
- KT10 [aerobis - Resistance Band Romanian Deadlift](https://aerobis.com/blogs/fitness/resistance-band-romanian-deadlift) : Variation stand on band, prises extérieures. Boucle powerband différente ; images explicitement AI, pas démonstration humaine ni preuve tube exact.
- KT11 [MON Fitness - Resistance Band Exercise Library](https://monfitness.com/blogs/news/resistance-band-exercise-library) : Banded squat, single-arm row, variantes de poussée et triceps. Guide commercial sans auteur identifié. Good morning autour du cou exclu, sans transfert de dose ni promesse.
- KT12 [GJELEMENTS - Guide exercices avec tubes](https://www.gjelements.com/wp-content/uploads/2020/12/Guide_d_exercice_GJELEMENTS.pdf) : Titres tubes p.16-22. Texte/titres consultés, captures PDF échouées. Pas traité comme procédure complète ni validation des dessins.

## Accès échoués

Atemi PDF direct et miroir : lecteur web inaccessible ; téléchargement direct également échoué, donc pas utilisé comme confirmation consultée.
FitSimplify PDF : accès échoué, non utilisé comme confirmation.
Captures GJELEMENTS et Bodylastics indisponibles ; aucune revue des images de ces PDF déclarée.


# Trois compléments pectoraux avec kit

Compléments de direction et latéralité, pas promesse d’isoler une région ni preuve de supériorité hypertrophique. Les prescriptions restent des hypothèses Tempo. Les notices des autres marques ne certifient pas le kit réel. Captures PDF non accessibles non déclarées examinées.

<a id="ex75"></a>

## EX75 - Développé pectoral vers le haut avec kit et ancrage bas

Niveau éditorial : intermediate. Comptage : total par série.

Installation : Dos à la porte, ancrage bas, pieds décalés et une poignée près de chaque côté de la poitrine.

Mouvement : Pousse les poignées devant toi et vers le haut, jusqu’à une hauteur confortable devant le visage, sans cambrer le dos.

Retour et sortie : Ramène les poignées près de la poitrine en freinant le retour. Reviens près de l’ancrage pour réduire la tension avant de lâcher la poignée.

Sources : KP01, KP02, KP03, KP04. Revue humaine, entrée/sortie, longueur/allongement réels, programmation et trajectoire continue restent ouverts.

<a id="ex76"></a>

## EX76 - Développé pectoral vers le bas avec kit et ancrage haut

Niveau éditorial : intermediate. Comptage : total par série.

Installation : Dos à la porte, ancrage haut, pieds décalés, poignées près de la poitrine et coudes fléchis.

Mouvement : Pousse les poignées devant toi et vers le bas, jusqu’à hauteur du bas de la poitrine ou du haut du ventre.

Retour et sortie : Replie les coudes sous contrôle pour revenir près de la poitrine. Reviens près de l’ancrage pour réduire la tension avant de lâcher la poignée.

Sources : KP02, KP03, KP04. Revue humaine, entrée/sortie, longueur/allongement réels, programmation et trajectoire continue restent ouverts.

<a id="ex77"></a>

## EX77 - Écarté pectoral unilatéral avec kit et ancrage latéral

Niveau éditorial : intermediate. Comptage : par côté, deux côtés prévus.

Installation : Place ton côté actif vers l’ancrage à hauteur de poitrine. Fixe les deux extrémités des tubes à une même poignée compatible et tiens-la avec la main active. Main libre sur la hanche.

Mouvement : Rapproche la poignée devant le sternum dans un arc horizontal, en gardant le même léger pli au coude et le buste face à l’avant.

Retour et sortie : Reviens doucement vers l’ancrage. Réduis la tension avant de changer de côté, puis refais la même installation. Reviens près de l’ancrage pour réduire la tension avant de lâcher la poignée.

Sources : KP01, KP02, KP03, KP05. Revue humaine, entrée/sortie, longueur/allongement réels, programmation et trajectoire continue restent ouverts.

## Documents consultés

- KP01 [Bodylastics - Guide exercices avec tubes](https://storage.googleapis.com/msgsndr/XvPdGEgSd8SLZjFiaiaQ/media/678d836801b601124c15cda0.pdf) : Chest Press p.71 et Standing One Arm Chest Fly p.77. Ancrage bas à hauteur des genoux dans la poussée ; montage unilatéral deux extrémités sur une poignée. Pas notice Decathlon.
- KP02 [Tribe Fitness - Workout Guide 2018](https://v.fastcdn.co/u/82010628/33435656-0-TRIBE-WORKOUT-GUIDE-.pdf) : Standing single sided chest fly p.6, Standing chest press p.7. Ancrages bas/milieu/haut et montage deux extrémités sur une poignée lus. Bras droit versus léger pli Tempo ; doses et squeeze maximal non importés. Capture PDF échouée.
- KP03 [Jim Stoppani - Build Your Chest With Resistance Bands](https://www.jimstoppani.com/training/build-your-chest-with-resistance-bands) : Standing incline/decline press et one-arm flye. Procédures et souffle de famille. Développé descendant ancrage au-dessus tête et fin devant bas poitrine. Niveaux, doses et promesses régionales non adoptés.
- KP04 [XBAR Fitness - Resistance Band Chest Workout Guide](https://xbar.com/blogs/news/the-ultimate-resistance-band-chest-workout-guide) : Anchor Height = Exercise Angle. Ancrages bas/haut pour incliné/décliné, soutien de famille ; ne valide pas réglages fins ni gains musculaires régionaux.
- KP05 [Thera-Band / Hygenic - Instruction Manual 2012](https://www.tumbltrak.com/content/pdf/Assembly_Instructions/TheraBand_User_Guide.pdf) : Horizontal Adduction p.22. Unilatéral et absence de rotation, mais prise directe/bras droit différent des poignées et léger pli de Tempo.


# Passe complémentaire : variantes et arbitrages

12 octobre 2026. Recherche documentaire, sans intégration, production de médias, audio ni validation humaine. Les décisions détaillées et leurs limites sont dans `followupReview` des lots JSON et les sections complémentaires Markdown. La passe touche 18 fiches ; certaines reçoivent un nouveau recoupement, d’autres un arbitrage éditorial explicite sans nouvelle preuve.

## Résultats prioritaires

| Fiche | Résultat documentaire | Lacune qui empêche de clore la fiche |
| --- | --- | --- |
| EX50 | Étude originale Kim/Kim/Ha ajoutée, équipe distincte de Cogley. Ne pas convertir prise large en avantage d’hypertrophie. | Largeur modérée exacte, géométrie et revue individuelle encore ouvertes. |
| EX52 | Lee Boyce décrit vol sans clap et absorption ; Mike Dewar ajoute freinage et réception douce, avec contact corps/sol différent. | Départ, cadence, réception réelle et surface à examiner ; ancien NSCA divergent conservé. |
| EX53 | Notice Thera-Band relue et rattachée pour manipulation seulement. | Modèle bande plate, longueur utile et notice de ce montage précis toujours absents. |
| EX55 | Fit2Go, procédure signée de Dani Singer, renforce la description exacte au sol de PureGym. Arrêt avant contact retenu. | Installation/sortie, charge réelle, respiration indépendante exacte et muscles secondaires à renforcer. |
| EX56 | Trainwell et FED Fitness ajoutent des descriptions originales au sol. | Auteurs absents, ambiguïté de départ Trainwell, contact des haltères réels et sortie. Statut partiel maintenu. |
| EX19 | Montage existant sous deux pieds conservé. Guide PT² consulté puis écarté comme preuve du montage. | Modèle bande plate/tube réel et sa notice. |
| EX23 | Zing décrit deux mains sous un pied ; Oxygen décrit deux mains avec pied arrière entouré par la bande. | Ces fixations diffèrent. Aucune homologation du kit tubes Decathlon, ni sortie sous tension validée. |
| EX38 | Caliverse et guide fabricant aerobis renforcent montage bilatéral et souffle au redressement. | Boucle versus bande ouverte, prises intérieures versus extérieures, longueur et modèle réel. |

## Arbitrages de couverture

EX31 conserve le retour genoux au-dessus hanches et pieds suspendus décrit par ACE, relu dans cette passe ; la petite amplitude reste Tempo. EX34 conserve une course courte contrôlable, compatible avec la réduction de course PureGym relue, sans objectif buste parallèle ni respiration déclarée approuvée.

GMB, tutoriel original de Ryan Hurst, renforce EX35 bras vers talons et EX62 progression depuis groupé, jambes puis bras allongés. C’est une seule source citée dans deux lots ; tradition gymnique commune à CrossFit, pas nouvel essai indépendant. Sortie précise, hauteur des leviers et respiration restent des choix à revoir.

EX44 gagne deux descriptions NHS depuis quatre pattes : Whittington et Plymouth. Contextes cliniques et réseau institutionnel commun conservés, dosages exclus. Front, supports et sortie restent ouverts. EX42 sans mur reste une adaptation d’équilibre, sans nouvelle preuve exacte dans cette passe.

EX58 garde le protocole combinant levier/rétroversion et la dépendance d’auteurs. EX65 fixe la base documentaire pieds empilés, bassin suspendu et sans charge ; pieds décalés explicitement distincts. Une seconde procédure exacte avec pieds empilés manque toujours. EX47 garde boxe simple alternée sans importer les pivots de puissance. EX48 garde provisoirement pas latéral sans croisement, sans modifier nom ou médias historiques ; géométrie du pied libre encore partielle. Ces quatre arbitrages n’ajoutent pas de nouvelles confirmations externes.

## Exclusions et limites d’accès

- PT² Austin : ancrage externe devant le corps, pas sous semelles. Le titre ne suffit pas ; fiche classée famille/exclusion exacte.
- aerobis : images explicitement marquées AI sur la page. Elles ne prouvent pas l’exécution humaine. Seul texte exploité ; montage principal mains intérieures distinct de l’alternative retenue.
- Trainwell : coudes à 90 degrés et haltères au-dessus poitrine au départ ambigu ; champs matériel génériques et muscles non renseignés. Ne pas les recopier.
- MUSC : l’URL de fiche de bandes redirige vers l’accueil, non retenue comme consultation exacte.
- Swim England Prime level 4 et HNS training plan : erreur d’ouverture des PDF, non comptés comme sources consultées de cette passe.
- PMC3867095 : contrôle navigateur, non compté comme nouvelle lecture complète malgré résultat de recherche.
- Decathlon Thaïlande 8975309 : page vide dans extraction, aucune notice de montage obtenue. Recherche du modèle n’a pas résolu la lacune.
- Copies Thera-Band 2006/2012 : même fabricant, ne pas compter les miroirs comme confirmations indépendantes. Notice de famille différente du matériel réellement utilisé.
- Les vidéos, images et animations des nouvelles pages n’ont pas été examinées. Aucune licence de réutilisation acquise, aucun média copié.

## Conditions de clôture par domaine

Le noyau documentaire d’un geste ne clôt pas tous les champs. Avant production, chaque variante doit disposer de repères cohérents pour entrée, déplacement, retour et sortie, avec auteurs/éditeurs et limites explicites. Les cartes musculaires ne doivent utiliser que rôles qualitatifs documentés ou inférences signalées ; aucun pourcentage ni promesse de croissance déduit d’EMG.

Pour les bandes, fixer d’abord modèle, matière, longueur utile, fixations et notice applicable, puis examiner une installation réelle. Les contrôles du fabricant, notamment retour possible vers visage et protections prescrites, restent propres au produit ; aucune longueur/allongement d’une autre notice transféré au kit Tempo.

Les briefs médias et cues sont dérivés des consignes, pas des preuves indépendantes. Les points non résolus ne doivent pas devenir des ordres définitifs. Revue humaine sur version identifiée des textes, mouvement continu et matériel réel, puis contrôle des rendus et écoute des fichiers audio restent requis. F1/M2 et les phrases de l’autre chantier sont conservées.

## Vérification

`assemble.py` reconstruit les 69 fiches, la couverture et le dossier complet à partir des lots. Le rapport de cette passe est [followup-verification.json](followup-verification.json). [verification.json](verification.json) conserve le contrôle historique précédent et ses anciens totaux.


# Matériel réel : vérification des montages du kit à tubes

12 octobre 2026. Suite à l’identification du matériel de Simon : kit DOMYOS 8975309 et une bande textile courte CORENGTH fessiers résistance modérée bleue. Aucune bande plate longue possédée. Document de décision, aucune autorisation fabricant ni validation technique humaine déduite de la recherche.

## Sources effectivement consultées

- [Decathlon France, kit 8975309](https://www.decathlon.fr/p/kit-de-resistance-de-musculation-compact-avec-5-elastiques/375819/c1m8975309), sections contenu, dimensions, entraînement complet et utilisation. Texte ouvert : cinq tubes/résistances annoncées 3/4/5/6/7 kg, deux poignées, deux attaches pieds, ancrage de porte, longueur annoncée 124 cm. Mentions curls/extensions et exercices porte générales ; section « Comment utiliser » sans procédure extraite. Aucune notice de maintien sous semelles, trajet derrière tête, position/fermeture de porte ou limite d’allongement trouvée dans ce texte.
- [Decathlon Royaume-Uni, même kit 8975309](https://www.decathlon.co.uk/p/compact-weight-training-kit-with-5-resistance-bands/375819/c1m8975309), mêmes sections ouvertes. Pas de procédure exacte supplémentaire. Même fabricant et modèle : ne compte pas comme confirmation indépendante. Le terme pull-ups de la traduction n’établit pas un exercice précis.
- [Decathlon, bande textile fessiers bleue](https://www.decathlon.fr/p/elastique-textile-pour-fessier-de-fitness-resistance-moderee-bleu/350074/c155m8930527), description consultée : courte, 31 cm à plat, 6,5 cm de largeur, résistance nominale 14 kg à 100% d’allongement. Intitulé donné par Simon correspondant au modèle 8930527 ; référence physique non lue, autre couleur 8970513 existante. Les valeurs annoncées ne sont pas des charges constantes ni une limite maximale d’étirement autorisée.

Recherche support.decathlon.fr par modèle et intitulé, recherches notice/PDF/user guide : aucune notice spécifique exploitable du 8975309 obtenue dans cette passe. Un PDF Decathlon « KIT PARTS », fichier portant 350292, renvoie une erreur d’ouverture ; identité différente/non établie, exclu. Les notices Revity ou d’autres kits vendus par Decathlon ne sont pas celles de DOMYOS 8975309. Absence de résultat n’est pas preuve que la notice n’existe pas.

## Décision par exercice

| Fiche | Variante documentaire | Décision pour le matériel de Simon |
| --- | --- | --- |
| EX19 | Rowing buste incliné, deux pieds sur bande/tube, prises bilatérales | Des guides tiers décrivent le geste avec tubes ; autorisation et montage du kit 8975309 sous semelles non établis. Ne pas déclarer prêt avec ce kit. |
| EX23 | Extension triceps bilatérale derrière tête, un pied sur bande | Sous-semelle versus enroulement distincts dans les guides tiers. Notice du kit, longueur utile et sortie sous tension manquent. Ne pas guider un essai de ce montage pour lever l’incertitude. |
| EX26 | Curl bilatéral sous deux pieds | Curls nommés par fabricant, mais cela ne décrit pas fixation sous deux pieds ni raccordement. Compatibilité produit non établie par cette mention seule. |
| EX38 | Charnière bilatérale, bande plate longue sous deux pieds | Matériel long absent. Version tubes éventuelle serait une adaptation distincte à documenter, pas substitution automatique. Boucle textile courte non équivalente au montage. |
| EX53 | Pompe résistée bande plate longue haut du dos/sous paumes | Matériel requis absent. Ni tubes ni bande textile courte substitués à la variante retenue. |

Aucun exercice de porte n’est ajouté : fixation, sens de traction, état/type de porte et limites du fabricant doivent être connus avant de définir une variante. La valeur « charge maximale 25 kg » sur la fiche commerciale ne permet pas à elle seule de calculer une limite de porte ni d’autoriser une combinaison de tubes.

## Prochaine pièce utile

Obtenir la notice fournie dans le kit, les pictogrammes de l’emballage et/ou la destination d’un éventuel QR code. Chercher les instructions de raccordement, d’appui sous semelles, d’ancrage porte, les exclusions et limites d’allongement. Une photo du kit confirme des composants, pas une autorisation d’usage. Si la notice reste absente, préparer une demande précise au fabricant à envoyer par Simon ; aucun message envoyé dans ce chantier.

Les autres variantes poids du corps et haltères peuvent poursuivre leur revue documentaire en parallèle. La boucle textile peut faire l’objet d’un lot bas du corps distinct ; les noms génériques de squat/hip thrust/good morning sur la fiche ne valident pas tous les montages Tempo.

## Portée de la modification

Les lots sources consignent le matériel réellement possédé et la compatibilité produit encore ouverte. Aucun changement de profil dans l’app, catalogue, médias, audio, séances historiques ou règles d’accès. Le contrôle historique followup-verification.json reste figé ; le présent document est postérieur à ses empreintes de version.


## Complément : trois images fournies par Simon

Images conservées dans [equipment-evidence/manifest.json](equipment-evidence/manifest.json), avec empreintes et provenance utilisateur. Elles ressemblent à des photos produit ; leur URL originale n’est pas établie ici.

- [Image 1](equipment-evidence/kit-user-source-01.png) : étiquettes 3/4/5/6/7 kg lisibles. Partie gauche : deux tubes semblent réunis aux poignées et passent par la boucle d’une sangle à butée. Cela montre une configuration de composants, pas l’installation sur une porte.
- [Image 2](equipment-evidence/kit-user-source-02.png) : deux poignées, sangles et mousquetons visibles. Pas de contrôle du verrouillage ou des limites de charge.
- [Image 3](equipment-evidence/kit-user-source-03.png) : deux chaussures en appui, tubes visibles passant sous les chaussures. Appui sous deux pieds désormais illustré par une image fournie ; haut du corps, poignées et exercice hors champ. Cela ne permet pas d’identifier rowing, curl, charnière ou extension triceps, ni leur trajectoire/retour/sortie.

Décision actualisée : composant à butée et possibilité visuellement représentée d’appui sous deux chaussures mieux documentés. Conserver la limite de notice du modèle, attribution des photos, raccordements, allongement et installation de porte. Les photos ne suffisent pas à déclarer EX19/23/26 compatibles et techniquement approuvés. Elles réduisent la lacune d’observation du montage sous pieds pour EX19/26, sans la clore. Aucun exercice complet n’a été revu humainement.


# Observation ponctuelle des images existantes

Le 12 octobre 2026, lecture visuelle par l’assistant des étapes 1 et 2 d’EX23, EX34 et EX48. Six images seulement. Empreintes dans [media-spot-check.json](media-spot-check.json). Aucune revue technique humaine, aucune modification de média, aucun verdict global. Les GIF, étapes 3, cartes musculaires et vues auxiliaires ne sont pas contrôlés ici.

| Exercice | Observation visible | Conséquence pour la revue |
| --- | --- | --- |
| EX23 - Extension triceps bande | Les deux mains portent une bande plate derrière la tête ; les pieds sont rapprochés, la bande descend vers le sol près d’un talon. Le point de blocage sous le pied n’est pas clairement lisible. | La planche ne démontre pas le montage « sous un pied » ni sa stabilité. Ajouter une vue d’installation lisible après validation de la notice et du montage exact. Ne pas extrapoler ces images aux tubes avec poignées. |
| EX34 - Roue à genoux | Étape 1 : genoux posés, roue proche, bras vers le sol. Étape 2 : roue avancée, buste incliné, genoux encore posés. | Les deux états montrent une entrée et une avancée, mais ne prouvent ni contrôle lombaire pendant le trajet ni retour maîtrisé. L’étiquette « amplitude courte » ne se certifie pas à partir d’une mesure en pixels. Relecture de profil et démonstration continue nécessaires. |
| EX48 - Pas de patineur | Étape 1 debout neutre. Étape 2 : pieds très écartés, un genou fléchi et l’autre jambe allongée, bras devant. | La posture basse évoque une fente latérale et ne montre pas le pied libre revenant près du pied chargé proposé dans le référentiel. Définir la variante, distinguer d’EX39 et revoir médias/textes ensemble. Aucune alternance gauche/droite n’est démontrée par ces deux états. |

Ces observations ne constituent pas un diagnostic biomécanique sur une image. Les vêtements, la perspective et une image fixe limitent ce qu’on peut conclure sur une articulation, une tension ou une charge. Elles identifient des éléments à rendre visibles et des écarts de variante à arbitrer avant production.


# Méthode de recherche et décisions d’exclusion

Consultations du 12 octobre 2026. Les registres par lot conservent les sources utilisées, leurs éditeurs et la portée de chaque référence. Ne pas compter le total des URL comme nombre de confirmations d’un repère.

## Stratégie

1. Lire les données existantes et figer un état initial, puis définir la variante exacte : prise, appuis, matériel, amplitude, côté.
2. Chercher d’abord descriptions propres aux institutions sportives, fédérations, hôpitaux, établissements universitaires et fabricants pour leur matériel.
3. Ouvrir la page ou la section PDF pertinente. Lire les instructions, pas seulement le titre du résultat de recherche.
4. Comparer les descriptions indépendantes ; conserver séparément variante exacte, famille de mouvement, anatomie générale et prescription.
5. Élargir la recherche quand une position, une phase respiratoire ou une variante diffère. Conserver la divergence plutôt que choisir silencieusement.
6. Réécrire en français des synthèses courtes ; ne pas copier les illustrations ni présumer leur licence utilisable par Tempo.
7. Garder les données proposées et l’approbation humaine distinctes. L’absence de donnée dans une source ne prouve pas la proposition.

## Exemples d’exclusion ou de limites

- L’ancien lien NASM `workout-exercise-guidance/how-to-jumping-jacks` redirige vers une page vide. La fiche actuelle `resource-center/exercise-library/jumping-jacks` a été lue et utilisée.
- Le PDF AHA `Presentation_Exercise-Within-Reach.pdf` n’est pas la fiche « Air Punches » recherchée. La référence retenue est `Adaptive-Exercises.pdf`, pages 1 et 2 effectivement lues.
- Les manuels England Boxing PDF ont renvoyé une erreur d’accès pendant cette recherche. Les résultats de recherche seuls n’ont pas servi à valider leur description d’une position ; l’article ouvert et le manuel USA Boxing ouvert sont utilisés.
- Les pages StatPearls sur iliopsoas et compartiment postérieur de jambe ont renvoyé un CAPTCHA ou une erreur en ouverture. Elles n’ont pas été ajoutées comme deuxième confirmation anatomique complète dans le lot cardio.
- Une routine Fitness Blender mentionne les skaters lents mais son texte ne décrit pas toutes les positions. Après reprise, deux instants de sa vidéo originale ont été examinés (10:51 et 10:56) : travail sur une jambe avec jambe libre mobile, différent du transfert alterné Tempo. Cela ne constitue pas un examen continu du cycle ni une validation des images Tempo.
- Les pages de bibliothèques génériques dont la provenance des données ou l’indépendance éditoriale n’est pas démontrée ne sont pas utilisées pour « combler » artificiellement un manque de preuve.
- Pour EX40, un résultat Physitrack annonçait des bras croisés, alors que la page ouverte décrivait des bras tendus. Cette URL ambiguë a été exclue ; une autre page exacte, avec son contexte adaptatif explicité, a été retenue.

Les limites de transposition sont documentées par fiche. La revue humaine reste nécessaire pour autoriser une formulation et la version précise des médias.

## Renforcement après reprise

- Simon a demandé de poursuivre après réinitialisation de son quota. Le périmètre et les fichiers de travail ont été conservés.
- Recherche ciblée des lacunes : fentes et mollets sans support, prises de pompes et haltère, montages de bande, variante simple de boxe et différences de patineur. Les compléments ont leurs propres registres avant intégration.
- Le manuel Healthy Ageing du NSW Ministry of Health décrit directement la boxe alternée debout. Sa technique est utilisée sans copier ses illustrations ni transférer son programme pour personnes âgées.
- Green Physique a été accessible par le navigateur malgré un échec de l’outil web. Son auteur se présente comme coach de golf TPI, pas comme physiothérapeute ; la portée et les limites de cette description sont conservées.
- Les vidéos et illustrations dont l’examen échoue restent signalées comme non inspectées.

## Extension demandée par Simon : au-delà du débutant

Le périmètre ne se limite plus aux 48 exercices existants : 21 fiches candidates pectoraux/abdominaux, EX49-69, sont instruites dans trois lots séparés. Les niveaux sont proposés selon des prérequis observables. Les IDs restent provisoires et aucun contenu applicatif ou média n’est ajouté par cet élargissement documentaire.

Deux références générales ont été ouvertes le 12 octobre 2026 pour le cadrage de progression : [ACSM, mise à jour résistance 2026](https://acsm.org/resistance-training-guidelines-update-2026/) et [Mayo Clinic, technique de musculation](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/weight-training/art-20045842?p=1&pg=1). Elles soutiennent entraînement à domicile, individualisation et progression conservant la technique. Elles ne sont pas comptées comme preuves exactes de positions des nouvelles variantes, ni dans les registres de sources par fiche. Les objectifs force, développement musculaire, puissance et stabilité sont distingués dans la synthèse.

Les sources de chaque lot doivent signaler les divergences de prise, de réception, d’amplitude ou de support. Une variante au sol ne reçoit pas automatiquement la validation d’un exercice sur banc ; un relevé de jambes n’isole pas automatiquement les abdominaux ; un nombre de sources ou une mesure EMG ne prouve pas une supériorité d’hypertrophie. Les niveaux, doses et scripts audio restent des propositions distinctes du recoupement des positions.

## 12 octobre 2026 - reprise variantes prioritaires

16 entrées supplémentaires dans les lots, avec auteur/éditeur, section consultée, portée et limites. GMB cité dans deux lots et Thera-Band déjà présent ne comptent pas comme sources indépendantes supplémentaires. PT² est enregistré comme exclusion exacte EX19. Les recherches échouées et médias non examinés sont consignés dans [followup-review.md](followup-review.md), sans intégrer leurs snippets comme preuves. Décisions par domaine sur 18 fiches ; aucune validation humaine ou production/intégration.
