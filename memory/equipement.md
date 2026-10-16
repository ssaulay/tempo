# Matériel - kit de résistance Decathlon

## Correction de Simon, 12 octobre 2026
Simon signale l'absence de son kit de résistance compact avec 5 élastiques Decathlon, réf. 8975309. Il doit figurer comme une option explicite dans le matériel, et non être assimilé silencieusement à une bande plate.

Source vérifiée : https://www.decathlon.fr/p/kit-de-resistance-de-musculation-compact-avec-5-elastiques/375819/c1m8975309
La fiche donne cinq résistances nominales de 3, 4, 5, 6 et 7 kg, deux poignées, deux attaches de cheville et un ancrage de porte. Ces valeurs fabricant ne sont pas des masses d'haltères ni des charges constantes mesurées.

Le kit est une déclaration distincte, persistée dans le profil et dans l'export. Sélectionner/désélectionner le kit conserve une bande plate déjà déclarée et ses réglages. Le nouveau champ est facultatif pour accepter les anciens profils et exports sans modifier leurs snapshots historiques.

Les exercices EX23 et EX26 acceptent les tubes dans leur contrat matériel, avec confirmation du maintien sous les pieds. Leurs médias actuels montrent une bande plate : ils restent indisponibles en prototype avec le kit seul. Les autres exercices à bande plate ne deviennent pas compatibles grâce au kit. Les accessoires de porte/cheville sont décrits mais aucun exercice qui les emploie n'est actuellement proposé.

Ne pas débloquer des exercices avec tubes en réutilisant des illustrations de bande plate. Préparer les visuels adaptés et conserver les statuts de revue humaine en attente jusqu'à une revue réelle.

Vérification : 53 tests unitaires passent, build réussi, scénario réel Chromium aux largeurs 360 et 390 px réussi (sélection/désélection sans perte de bande plate, conservation après rechargement, limite éditoriale visible, aucun débordement ou erreur JS). iPhone physique toujours non testé. Rapport : reports/equipment-kit.json.

## Identification du matériel pour la revue documentaire

Correction de Simon : il possède le kit Decathlon à tubes réf. 8975309 et des bandes plates courtes uniquement, aucune bande plate longue. La réponse précédente « kit + bande plate longue » est corrigée et ne doit plus servir de référence. Marque, référence, forme (ruban ouvert ou boucle fermée) et dimensions des bandes courtes restent à identifier. Ne pas les assimiler aux bandes longues des montages EX19/23/38/53 ; cette correction ne valide aucun montage et ne modifie pas le profil applicatif.


## Bande courte identifiée par son intitulé

Simon précise posséder une seule bande : « Élastique textile pour fessier de fitness résistance modérée, bleu », en plus du kit à tubes. L’intitulé exact correspond à la fiche CORENGTH Decathlon 8930527 (bleu glacier), famille 350074 ; référence physique non lue. Une autre couleur bleu foncé porte 8970513 : ne pas déduire la référence de la seule mention Medium.

Fiche originale ouverte le 12 octobre 2026 : https://www.decathlon.fr/p/elastique-textile-pour-fessier-de-fitness-resistance-moderee-bleu/350074/c155m8930527
Description fabricant : élastique court textile bas du corps, longueur à plat 31 cm, largeur 6,5 cm, résistance annoncée 14 kg à 100% d’allongement. Cela ne constitue pas une charge constante ni une limite maximale autorisée d’étirement. Les montages cités (squat bande au-dessus genoux, pont, marche latérale) sont des pistes documentaires, pas des variantes Tempo approuvées. La liste marketing good morning/soulevé de terre ne décrit pas le montage EX38.

Décision : cette bande courte ne remplace pas la bande longue des variantes EX19/23/38/53. Poursuivre les montages à tubes séparément et les variantes bas du corps avec boucle textile ; aucune modification applicative ni validation humaine déduite de cette identification.


## Vérification des montages du kit réel

Fiches Decathlon FR et UK 8975309 ouvertes : contenu et longueur confirmés, pas notice exacte obtenue après recherche support/PDF. Mentions curls/extensions ne valident pas maintien sous semelles ou extension bilatérale derrière tête. EX19/23/26 restent non établis pour ce modèle ; EX38/53 requièrent bande longue absente. Aucune substitution par textile court ni autorisation de porte déduite de charge commerciale. Rapport docs/exercise-reference/kit-mounting-review.md, décisions dans lots strength et extension-pectorals. Prochaine pièce : notice/pictogrammes/QR du kit détenu, sans essai sous tension pour prouver compatibilité. Aucun message au fabricant envoyé.


## Description des accessoires par Simon

Simon décrit des poignées pouvant recevoir un ou plusieurs élastiques tubulaires simultanément, et un fixateur de porte utilisable en haut, en bas ou à une hauteur choisie. Cette description utilisateur précise les composants et le fonctionnement déclaré, sans remplacer une notice fabricant sur porte compatible, sens de traction, placement/fermeture, combinaisons autorisées ou allongement maximal. Ne pas déduire de cette description une autorisation sous semelles ou derrière tête.

Il dicte « 0.3, 4, 5, 6 et 7 kilos de force » ; la fiche fabricant consultée indique 3/4/5/6/7 kg. Le premier nombre est probablement une transcription de 3, sans confirmation de l’étiquette. Les nombres restent résistances nominales et ne deviennent ni charges constantes ni calcul garanti de force en combinant des tubes.

Suite documentaire possible : variantes à ancrage de porte (rowing/tirage, développé poitrine, triceps vers le bas) distinctes des fiches à bande sous pieds. Identifier chaque variante et recouper montage/retour/sortie avant adoption ; ne pas remplacer silencieusement EX19/23/38/53 ou guider un montage exact non établi.


## Photos du kit fournies par Simon

Trois images examinées visuellement et conservées avec empreintes dans docs/exercise-reference/equipment-evidence/. Marquages 3/4/5/6/7 kg lisibles : ambiguïté de transcription « 0.3 » levée sur image. Deux poignées à mousquetons, sangle d’ancrage à butée, configuration de deux tubes reliés aux poignées visible. Troisième image montre tubes sous deux chaussures, mais haut du corps et exercice hors champ : ne prouve ni rowing, ni curl, ni overhead. Images fournies sans URL originale, attribution fabricant non confirmée. Nouvelle preuve visuelle de composants/appui sous pieds, pas notice porte/allongement ni validation humaine. Rapport kit-mounting-review.md et lots force actualisés ; conserver les questions de procédure exacte sans redemander l’identification des accessoires déjà visibles.


## Intégration tubes demandée explicitement

- Simon confirme les combinaisons libres d’un ou plusieurs tubes, demande de sauter la revue humaine, d’appliquer les briefs puis d’intégrer. Ne pas redemander cette autorisation ni traiter une notice absente comme motif de nouvelle approbation du même travail. Sa confirmation reste une information utilisateur, pas une certification fabricant.
- EX19/26 disposent de variantes tubes/poignées v2 dans catalog/equipment-variants.json ; catalogue et médias v1 conservés, versions résolues selon matériel pour les nouveaux programmes. Anciens programmes passent à v2 seulement via remplacement explicite, historiques inchangés. Mode prototype requis, technical/visual null.
- Le kit permet d’enregistrer 3/4/5/6/7 seuls ou combinés dans resistanceKitTubes, champ facultatif compatible avec imports anciens ; pas somme présentée comme force constante. Poignées requises pour tubes séparés et confirmation sous pieds conservée. Aucun exercice ancré à la porte ajouté.
- Deux planches originales imagegen dans assets/sources/tubes-v2, 12 fichiers dans public/assets/exercises/v2/EX19 et EX26 ; dérivation reproductible scripts/derive-tube-variants.py. Boucles de deux positions, pas preuve de trajectoire complète, aucune revue humaine exécutée.
- Nouvelles annonces utilisent EX19.v2 / EX26.v2 pour éviter anciens clips ; préparation comprend repère technique. Gemini a répondu 429 pour huit clips F1/M2, aucun nouveau clip généré. Voix système du navigateur utilisée si disponible ; voix/médias audio historiques conservés. État reports/audio/tubes-v2/status.json.
- Recette réelle Chrome 390/1440 réussie : sélection kit et combinaison, fiches/médias v2, génération dos/bras et démarrage, aucune erreur JS/débordement. iPhone physique non testé.


## Correction de Simon : recommandations de combinaison

Simon corrige explicitement le champ « Tubes utilisés ensemble » : il possède tous les tubes et peut les combiner, c’est Tempo qui doit recommander une combinaison. Ne plus demander ce choix global dans les réglages du matériel. Le champ historique resistanceKitTubes reste accepté dans les imports pour compatibilité, mais n’impose plus les propositions des nouveaux blocs.

- Réglages : déclarer le kit disponible uniquement. Séance : combinaison proposée par exercice visible sur carte et lecteur, ajustable parmi les 31 sous-ensembles non vides dans les paramètres du bloc. La modification reste propre à cette séance, snapshots historiques inchangés.
- Première proposition prudente : tube 3 kg, calibration éditoriale, aucune force personnelle inférée du niveau. Historique du même exercice/version avec tentative validée : conserver dernière combinaison ; proposer un palier nominal supplémentaire après deux séances comparables terminées déclarées faciles et bonne qualité ; alléger si dernière difficile ou qualité à améliorer. Feedback global de séance, donc suggestion imparfaitement individualisée et ajustable. Ne pas décrire cet algorithme comme prescription validée.
- Sommes nominales utilisées uniquement pour ordonner les combinaisons, jamais affichées comme force réelle constante. Toutes les combinaisons restent ajustables. Principe général de progression technique consulté Mayo le 12 octobre 2026 : ne valide pas le seuil 3 kg ni la règle deux séances, qui sont choix Tempo.

Vérification de cette correction : 72 tests et build réussis ; Chrome 390/1440 confirme disparition du choix global, proposition visible par exercice, menu de 31 combinaisons (y compris les cinq ensemble), génération et démarrage. Rapport reports/tube-integration/recommendation-verification.json.


## Extension kit après reprise des illustrations

- Simon demande explicitement de créer/dupliquer les exercices adaptables aux tubes, avec illustrations nouvelles. Cinq variantes v2 ajoutées : EX17 épaules, EX18 élévations latérales, EX23 triceps overhead sous pied arrière, EX37 squat poignées épaules, EX38 charnière. EX19/26 v2 conservées. Cinq IDs nouveaux EX70 développé debout, EX71 écartés debout, EX72 rowing debout, EX73 triceps vers le bas ancrage haut, EX74 écartés inversés avec ancrage. Les montages de porte sont des variantes propres, pas remplacement silencieux de mouvements au sol.
- Matériel déclaré par Simon : kit avec accroche de porte, toutes combinaisons autorisées par utilisateur. Réglage facultatif resistanceKitDoorAnchor, disponibilité de l’accroche incluse par défaut avec kit connu, désactivable. Une séance à porte ne réclame pas maintien sous les pieds. Tubes seuls avec poignées sans kit déclaré ne présument pas présence d’un ancrage. Montage conforme à la notice, porte fermée et empêchée d’ouvrir, traction du côté maintenant la fermeture, contrôle de l’état des tubes/connexions et tension faible avant lâcher. Les dessins ne certifient pas une porte réelle.
- Réutiliser EX26 v2 pour curl à la place d’EX25, éviter un doublon inutile. EX20 unilatéral est seulement rapproché d’EX19 bilatéral. EX15/16/53/54/56 rapprochés d’EX70 ; EX55 d’EX71 ; EX21 d’EX74 ; EX24 d’EX23 v2. Tableau dans catalog/kit-equivalences.json, note de différence affichée. EX53 ne devient pas compatible avec des tubes : elle reste indisponible, lien vers poussée proche.
- Explorer expose originaux et versions kit séparément, recherche « kit » trouve les 12 fiches tubes. Le choix manuel d’haltères est respecté même si le kit est présent ; adaptation automatique conservée pour composition. Historique/snapshots conservés. Recommandation par exercice et menu de 31 combinaisons restent en vigueur, sans force constante ni certification de dose.
- Dix planches originales image_gen et 60 assets ajoutés ; scripts create-kit-expansion.py, derive-kit-expansion.py et create-manifest.mjs --kit-only. Dérivation ancienne derive-tube-variants.py limitée à EX19/26, afin de ne pas chercher les nouvelles sources dans l’ancien dossier.
- Texte source Thera-Band, ProsourceFit, Bodylastics, Peak Physio, Burnlab, Mirafit, Caliverse, aerobis, MON consulté avec portées enregistrées. ProsourceFit blog/guide = même groupe, Bodylastics sections barre/straps distinctes, aerobis images AI, GJELEMENTS titres seulement, vidéos non visionnées. Atemi/FitSimplify et captures PDF échoués non comptés comme validations. Niveaux, doses, cartes, mises en place/sorties et kit réel restent partiels ou éditoriaux. Aucun humain n’a revu les illustrations.
- 82 tests et build réussis ; recette Chrome 390/1440 réussie (81 cartes, 12 kit, dix nouveaux visuels, liens, choix haltères conservé, 31 combinaisons et démarrage EX70). 561 fichiers préexistants inchangés, pack 21,39 Mo. Sources et prompts dans docs/exercise-reference/kit-expansion.* et reports/kit-expansion. Audio voix système, clips F1/M2 non produits, iPhone physique non testé.


## 13 octobre 2026 - Trois pectoraux supplémentaires avec kit

- Demande de Simon appliquée : EX75 développé vers le haut avec ancrage bas, EX76 développé vers le bas avec ancrage haut, EX77 écarté unilatéral avec ancrage latéral. Nouveaux IDs car géométrie distincte des EX70/71 ; liens de mouvements proches conservés. Catalogue 84 fiches / 77 IDs, 15 fiches kit dont 5 pectoraux.
- Illustrations image_gen intégrées avec deux poses, prompts dans reports/kit-pectorals/prompts.json. EX77 repris pour conserver le même bras entre les poses puis réduire la flexion du coude. Inspection par assistant seulement ; aucune validation humaine. Sources originales dans assets/sources/kit-expansion, dérivés dans public/assets/exercises/v1/EX75-77.
- Sources consultées et limites dans kit-pectorals.json : Bodylastics, Tribe, Jim Stoppani, XBAR, TheraBand. Les sources de famille ne prouvent pas le montage exact du kit Decathlon. Les comptages ne mesurent pas l’indépendance des confirmations. Référentiel réassemblé 77 fiches ; doses et recommandations initiales de tubes restent éditoriales.
- EX77 compté par côté avec changement de côté ; tous trois compatibles avec accroche de porte, sans maintien sous pieds requis. Combinaison initiale proposée par l’app, 31 choix ajustables en séance. Audio nom/préparation par voix système, sans nouveaux clips F1/M2.
- 84 tests et build réussis, recette Chrome isolé 390/1440 : trois fiches illustrées, session EX77 lancée, 31 combinaisons, aucune erreur JS/404. Médias et catalogue préexistants contrôlés par empreintes et conservés. Rapports reports/kit-pectorals/verification.json et ui-verification.json. iPhone physique et revue technique humaine restent ouverts.
