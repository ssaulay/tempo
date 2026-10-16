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
