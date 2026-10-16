# Recette mobile - 12 octobre 2026

- 13 octobre : pour le test physique demandé par Simon, reconstruire puis lancer `npm run preview -- --port 4173 --strictPort`. Le serveur doit écouter sur le réseau local ; le sandbox peut refuser cette écoute avec EPERM et nécessite alors une exécution autorisée hors sandbox. L'adresse LAN du Mac est variable, à revérifier à chaque reprise. Garder le Mac éveillé et le téléphone sur le même Wi-Fi. Aucun hébergement public nécessaire.

- Simon demande une recette locale sur le même Wi-Fi, sans publication publique. Le dépôt était propre sur main au départ, avec origin https://github.com/ssaulay/tempo.git. Branche demandée : fix/recette-mobile.
- HTTP sur l'adresse LAN ne donne pas accès à Cache Storage/service worker sur téléphone. Le player doit rester testable avec réseau, avec une indication explicite que PWA et hors ligne nécessitent HTTPS. Ne pas confondre téléchargement en mémoire et disponibilité durable hors ligne.
- Vite preview ajoute Vary: Origin aux modules. Le précache sans Origin et les requêtes de modules avec Origin ne correspondaient pas : page vide hors ligne malgré fichiers présents. Pour ces fichiers statiques de même origine, ignorer Vary dans la recherche du cache.
- Une pause change l'état de la séance mais pas la série courante. Ne pas effacer la saisie facultative de répétitions lors de pause/reprise ou d'un changement de voix.
- Les checkpoints IndexedDB en activité sont espacés de cinq secondes. Lire IndexedDB après 600 ms de reprise ne démontre pas l'avancement de l'horloge visible.
- Le générateur est variable : le deuxième exercice peut être chronométré. La recette doit chercher une série en répétitions plutôt que supposer sa position.
- Les résultats prévus, déclarés et non renseignés restent distincts. Une série validée sans saisie conserve declared=null ; les séries passées/interrompues sont exclues des séries validées. Les snapshots historiques ne suivent pas les modifications de programme.
- Tests navigateur dans un profil isolé, sans toucher aux données de Simon. Chromium simulé et localhost sécurisé ne certifient pas Safari sur iPhone physique. Audio, voix françaises hors ligne, Wake Lock, écran verrouillé, installation PWA, VoiceOver et ergonomie en vraie séance restent à tester sur appareil.
- Les 327 médias sont présents et leur intégrité passe l'audit, mais cela ne valide ni poses ni mouvements. Revue humaine toujours en attente.
- À 360 px, `1fr` en grille mobile conservait la largeur minimale des raccourcis et élargissait le viewport de mise en page. La barre fixe devenait difficile à toucher. Utiliser une colonne qui peut rétrécir et laisser les raccourcis se répartir sur plusieurs lignes.
- Pour détecter un débordement mobile, comparer scrollWidth à documentElement.clientWidth. innerWidth peut déjà être augmenté par le débordement et donner un faux positif de réussite.

- Résultat final : 49 tests unitaires passent, build réussi, quatre parcours Chromium réussis (360/390/1440 sur localhost et 390 sur LAN), dont fin automatique chronométrée hors ligne à 390 px. WebKit indisponible. Rapport dans reports/recette-mobile.md et reports/mobile-recipe.json.
# Focus des recherches - 13 octobre 2026

Simon signale une ligne gris-bleu au toucher du champ dans « Ajouter un exercice ». Reproduction Chromium mobile 320 px : le contour global bleu de focus entoure l'input interne et dépasse le conteneur avec loupe. Corriger au niveau commun `.search-field` : focus visible orange sur le conteneur via `:focus-within`, suppression du contour interne uniquement dans ce composant, loupe non rétractable. Ne pas supprimer globalement les indicateurs de focus clavier. Vérifié dans Explorer, Ajouter un exercice après création manuelle et recherche des programmes, sans débordement. iPhone physique non vérifié. Le build complet rencontre des erreurs de typage préexistantes à cette correction dans `tests/audio.test.ts` sur le champ `default` du catalogue audio.

