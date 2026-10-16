# Enchaînement et annonces - correction de Simon, 12 octobre 2026

## Commandes désactivées en pause - 13 octobre 2026

Simon signale sur iPhone « Passer la série » et « Passer l’exercice » grisées, avec « Reprendre » affiché. Cause confirmée dans l'interface et le moteur : les commandes exigeaient une séance en cours. Correction demandée et appliquée : autoriser le passage en pause et suspension en conservant cet état après la transition, sans reprendre automatiquement. Pendant préparation/repos/changement de côté, « Passer la prochaine série » saute la prochaine phase d'effort du même exercice ; désactivé si aucune ne reste. Les séries sautées restent exclues des résultats réalisés, sans temps fictif. Passer le dernier exercice termine normalement la séance. Interface et moteur utilisent les mêmes conditions. Six tests de régression, suite complète 93 tests et build réussis. Chromium mobile 320 px : boutons actifs en pause et pause conservée après passage de l’exercice. iPhone physique non vérifié.

Simon a signalé que trois séries consécutives de Dead bug étaient annoncées avec « Ensuite Crunch court » pendant les repos, alors que les séries 2 et 3 de Dead bug restaient à effectuer.

Cause : l'annonce vocale du repos lisait le bloc suivant du programme, au lieu de la phase réellement suivante de la séance. Ne jamais déduire le prochain mouvement de blockIndex + 1. Utiliser les phases actives, qui incluent repos, préparations, changements de côté et tentatives ajoutées par « Refaire ».

L'affichage « Ensuite » et l'annonce vocale partagent désormais le même libellé de prochaine phase, avec numéro de série et côté si nécessaire. Exemple : après la série 1, repos puis « Dead bug · série 2 sur 3 » ; Crunch court commence seulement après la série 3.

Ne pas modifier l'ordre du programme ni les résultats pour corriger un texte d'annonce. Les snapshots et séances actives existants restent conservés.

Vérification : les deux tests de régression échouaient avec « Ensuite, Crunch court » après les séries 1 et 2, puis passent après correction. Total : 55 tests passent, build réussi. Le scénario Chromium à 390 px confirme texte et annonce « série 2 sur 3 », puis « série 3 sur 3 », avant préparation de Crunch court. Texte vocal capturé sans tester l'audio physique. Rapport : reports/next-step.json.
