# Corrections de cohérence - lots 1 et 2

14 octobre 2026. Demande de Simon : mettre en œuvre les lots 1 et 2 proposés dans l’audit. Corrections sur `fix/recette-mobile`, publiées le 14 octobre sur instruction explicite de Simon : https://tempo.ssaulay.workers.dev/. Version `70c97f91-9996-410f-a6c8-88f66589b88c`, ressources vérifiées dans `../deployment/coherence-checks.json`.

## Livré

| Audit | Correction |
|---|---|
| C00 | Player organisé dans la hauteur disponible. Saisie des répétitions dans le bloc des commandes, sans recouvrement par la prochaine phase. Zone centrale défilable sur petite hauteur ; adaptation à VisualViewport. Commandes principales au moins 68 px. |
| C01 | Brouillon partagé entre profil, capacités et audio. Le bilan enregistré depuis les réglages rejoint ce brouillon ; sauvegarde commune explicite. Navigation interne conservée, confirmation avant abandon et retours d’erreur de sauvegarde dans le dialogue. |
| C02 | Abandon depuis l’accueil confirmé, avec même finalisation comme interrompue que dans le player. Tentatives conservées dans l’historique. |
| C03 | Un programme identique à sa copie enregistrée ne reste pas présenté comme brouillon. Une vraie modification le redevient. Supprimer le programme retire aussi son brouillon associé, sans ressusciter une copie via l’autosauvegarde. |
| C04 | Zones dérivées des blocs dans l’éditeur et les cartes, recalculées après modification et à la sauvegarde. Programme vide sans anciens badges. |
| C05 | Champ numérique commun avec texte temporaire, validation au départ du champ et blocage explicite des confirmations invalides. Plafonds réellement applicables affichés. Matériel du jour avec brouillon/confirmation/annulation ; conservation de ce matériel à la réouverture du programme dans la même utilisation. |
| C06 | Recherches normalisées (accents, casse, espaces), états sans résultat et remise à zéro. Compteur des fiches filtrées et filtre de disponibilité selon matériel/préférences/capacités. |
| C07 | Bande textile courte déclarable séparément. Déclaration informative : aucun accès indu aux exercices pour bande plate longue ou tubes. Export/import compatible avec anciens profils. |
| C08 | Effets du calibrage et du ressenti précisés : pompes/planche pour les variantes correspondantes, chaise pour le suivi, ajustements proposés dans les cas comparables et appliqués volontairement. |
| C09 | Bilan « Séance interrompue. » ; action « Refaire cette séance » distinguée d’une reprise de la séance active. |
| C10 | Navigation avec aria-current, titres de vue focalisés, ressenti et angles avec état de sélection accessible. Focus et fermeture natives des dialogues conservés. |
| C11 | Statuts distincts application/visuels/voix fondés sur les fichiers présents dans les caches de la version courante. Voix partielles expliquées ; diagnostic isolé et réinitialisation du bilan confirmée. Sauvegarde/restauration dans un fichier avec effet de fusion expliqué. |
| C12 | Réduction des animations reflétée dans les commandes, suivi des changements système, vitesse inactive en image fixe/maintien, noms accessibles cohérents avec les actions. |
| C13 | Vocabulaire des parcours harmonisé ; 126 consignes disposent d’une copie d’affichage au vouvoiement. Contrats des exercices, sources, clips et snapshots sérialisés préservés. Les enregistrements vocaux historiques gardent leur formulation ; aucune génération audio lancée. |
| C14 | Durée proposée présentée en minutes par rapport au choix initial, sans alerte négative en pourcentage. Doses conservées, sans remplissage artificiel. |
| C15, ciblé | Réglages extraits, fonctions d’état et d’affichage communes, recettes actuelles ajoutées et recette calibrage adaptée. Anciennes recettes design/mobile signalées historiques. La consolidation complète de toute la feuille CSS et de tous les écrans n’est pas une refonte entreprise ici. |

Correction complémentaire observée pendant la recette : un reste de 119,8 secondes s’affichait « 1:60 ». Arrondi effectué sur le total avant le découpage minutes/secondes, avec test de régression.

## Vérifications

- `npm test` : **135 tests réussis dans 19 fichiers**.
- `npm run build` : TypeScript et Vite réussis ; audit 507 fichiers principaux et 36 complémentaires, aucun absent. Les 540 fichiers téléchargeables des fiches ne comprennent pas les trois ressources partagées comptées dans l’audit global.
- `coherence-regression.cjs` : défauts reproduits avant correction (`before.json`), puis sept scénarios réussis (`regression.json`) : réglages persistants, édition/sauvegarde/brouillon/suppression, recherches, accessibilité et player aux trois largeurs.
- `coherence-edge-cases.cjs` : 320/390/1440 px, puis hauteurs 844/668/500 px. Champ et commandes atteignables au pointeur, commandes de 68 à environ 73 px dans les mesures courantes, pas de débordement horizontal. Préférences, audio et bilan traversant les sous-écrans ; fermeture/annulation ; matériel et masse invalides/corrigés ; filtres, saisie et pause/reprise contrôlés. Les réductions de hauteur simulent un espace contraint, pas un clavier Safari réel.
- Recette calibrage : manuel, guidé, persistance, arrêt, récupération, fins automatiques, interruption et douleur réussis aux trois largeurs (`calibration/verification.json`). Horloge simulée, aucun effort physique prétendu.
- `coherence-offline.cjs` : build de production local, service worker actif, **application prête + 540/540 visuels + 293/293 enregistrements disponibles présents**, rechargement sans réseau puis génération et démarrage d’une séance avec illustration et pause fonctionnelles. Il s’agit des clips déjà disponibles, pas d’une couverture de toutes les annonces.
- Revue de code distincte : validation manquante du matériel du jour relevée puis corrigée et ajoutée à la recette.
- `git diff --check` : aucune erreur d’espacement.

Captures dans ce dossier, en particulier `320-reps.png`, `390-reps.png`, `1440-reps.png`, les écrans de données/catalogue et `390-production-offline.png`.

## Limites maintenues

Safari/iPhone physique, clavier virtuel réel, VoiceOver, audio entendu, utilisation pendant l’effort et expérience d’installation restent à éprouver. Les tests ne constituent pas une revue technique des exercices. Aucun média d’exercice ni enregistrement existant régénéré. Aucun commit ou push effectué. Le déploiement public a ensuite été demandé par Simon et réalisé le même jour.

## Rejouer

Lancer le serveur local sur le port 5174, puis `node scripts/coherence-regression.cjs` et `node scripts/coherence-edge-cases.cjs`. Pour la recette hors ligne, construire puis servir `dist` sur le port 5175 et lancer `node scripts/coherence-offline.cjs`. Les scripts utilisent Playwright/Chrome disponibles sur cette machine ; `TEMPO_PLAYWRIGHT` et `TEMPO_URL` permettent de modifier les chemins/adresses.
