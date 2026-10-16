# Intégration locale : rowing et curl avec tubes

Deux variantes des exercices EX19 et EX26 sont intégrées au prototype, version 2, avec tubes ronds et poignées. Les 48 IDs, catalogue principal, médias v1, fichiers audio historiques et snapshots restent conservés. Les 21 candidates documentaires ne sont pas intégrées.

La confirmation de Simon autorise combinaisons d’un ou plusieurs tubes et saut de l’étape humaine. Aucune approbation technique ou visuelle humaine n’est déclarée. Les informations de notice qui restent absentes sont conservées comme limites documentaires et ne sont pas transformées en validation fabricant.

## Utilisation

Dans Réglages, déclarer le kit Decathlon, confirmer le maintien sous les pieds, activer le prototype. Le kit déclare les cinq tubes disponibles ; aucune combinaison n’est demandée dans les réglages. Tempo propose une combinaison par exercice dans la séance, ajustable parmi les 31 possibilités. Explorer montre les variantes v2 ; la génération dos/bras les utilise. Avec bande plate seule, les fiches v1 restent sélectionnées. Un tube déclaré séparément exige les poignées.

Un ancien programme conserve son snapshot. Le bouton de remplacement peut proposer sa variante v2 si le kit est maintenant utilisé ; aucun changement automatique de l’historique. Imports des versions connues conservent les contrôles de contrat et prescription.

## Médias et voix

Images générées avec l’outil imagegen intégré, références personnage historique conservées. Sources : assets/sources/tubes-v2/EX19.png et EX26.png. Les nouveaux lots dans public/assets/exercises/v2/ comportent trois fichiers d’étapes (la troisième reprend le départ pour compatibilité), une boucle GIF de deux poses, une miniature et la carte musculaire indicative historique. Ce sont des poses générées, sans trajectoire continue prouvée ou revue humaine.

Prompts et provenance sont conservés dans [image-prompts.json](image-prompts.json). Dérivation reproductible par scripts/derive-tube-variants.py. Les fichiers version 1 ne sont pas réécrits.

Annonces distinctes EX19.v2 et EX26.v2. La préparation comprend un repère moteur. Huit fichiers F1/M2 ont été demandés, mais Gemini a retourné 429 au premier appel ; aucun nouveau clip produit. Les annonces utilisent la voix système si disponible, sans réutiliser les clips historiques dont le texte diffère. Aucun changement des voix choisies ou de la production historique. Statut reports/audio/tubes-v2/status.json ; reprise isolée par scripts/generate-tube-coach-audio.py.

## Vérification

- 72 tests unitaires passent ; build et audit assets passent, 303 fichiers principaux présents, zéro fichier manquant.
- Recette Chrome réelle à 390 et 1440 px : kit, absence de choix global, proposition par exercice et ajustement possible des 31 combinaisons, cartes/fiches v2, génération dos/bras, préchargement et démarrage de séance, aucun débordement/erreur JS. Rapport reports/tube-variants-ui.json et captures associées.
- 420 fichiers historiques vérifiés inchangés, rapport [preservation.json](preservation.json).
- Référentiel documentaire réassemblé : 69 fiches, 216 entrées, 208 URL distinctes ; aucun exercice approuvé humainement.
- iPhone physique et écoute des clips dédiés non réalisés. Aucun hébergement public ni déploiement.


## Recommandation des combinaisons

Correction explicite de Simon : disponibilité du kit dans les réglages, choix recommandé par Tempo dans la séance. Sans historique, démarrage léger à un tube 3 kg pour calibration. Avec historique du même mouvement/version et tentative validée : dernière combinaison conservée, petit palier proposé après deux séances comparables terminées faciles et bonne qualité ; allègement après difficulté ou qualité à améliorer. Retour global de séance, pas mesure individuelle de force. Proposition modifiable avant démarrage ; réglages/imports anciens et snapshots conservés.

Le [guide de technique Mayo](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/weight-training/art-20045842), consulté le 12 octobre 2026, soutient progression graduelle et diminution si technique se dégrade. Il ne valide ni les 3 kg initiaux, ni la règle de deux séances, ni une somme nominale comme force réelle. Ce sont des heuristiques Tempo.
