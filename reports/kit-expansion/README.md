# Extension du kit de résistance

Dix nouvelles fiches avec illustrations propres : EX17/18/23/37/38 v2 sous les pieds et EX70-74 pour les montages à la porte. EX19/26 v2 existantes conservées. Explorer affiche originaux et variantes séparément : 74 IDs, 81 fiches illustrées, dont 12 avec tubes. Recherche « kit » disponible. Les fiches originales proposent des liens vers variantes/accessoires ou mouvements proches, distinction explicite.

Les sources ouvertes et limites exactes/famille sont conservées dans docs/exercise-reference/kit-expansion.json et .md. Les PDF Atemi/FitSimplify et captures PDF non accessibles ne sont pas des confirmations consultées. Les notices d’autres marques ne certifient pas le kit ou la porte de Simon. Aucune revue humaine technique, visuelle, audio ou de dose effectuée. Les GIF = deux poses, pas trajet continu.

Originaux image_gen dans assets/sources/kit-expansion ; dérivés dans public/assets/exercises/v2/EX17, EX18, EX23, EX37, EX38 et public/assets/exercises/v1/EX70 à EX74. Prompts dans prompts.json. Aucune réutilisation d’une illustration haltères pour montrer des tubes. Portes dessinées schématisent l’ancrage, pas homologation d’un montage réel.

Reproduction : scripts/create-kit-expansion.py, scripts/derive-kit-expansion.py, puis node scripts/create-manifest.mjs --kit-only. Le mode kit-only conserve tous les lots préexistants, y compris les 21 extensions et les variantes tubes EX19/26. Ne pas lancer derive-tube-variants.py pour ce lot : il est réservé aux sources historiques EX19/26.

Tempo recommande par défaut le tube 3 kg comme calibration éditoriale, réglable parmi 31 combinaisons. Aucune force réelle inférée des kg nominaux. Le choix manuel d’un exercice à haltères reste respecté si les haltères sont déclarés ; les nouveaux programmes générés peuvent proposer la variante tube. Les snapshots précédents restent conservés. L’accroche de porte est déclarable séparément dans les détails du kit ; les mouvements à la porte ne requièrent pas la confirmation sous les pieds. Audio de préparation par voix système, aucun clip F1/M2 ajouté.

Vérification : 82 tests, build et recette Chrome 390/1440 réussis. Cartes/fiches, recherche kit, liens entre accessoires, choix explicite haltères, menu 31 combinaisons, démarrage EX70, aucun 404/erreur JS/débordement. verification.json contrôle les empreintes préexistantes ; ui-verification.json pour la recette. Aucun iPhone physique testé.
