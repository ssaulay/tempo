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
