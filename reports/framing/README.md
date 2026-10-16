# Contrôle graphique des médias

60 planches sources et 180 étapes isolées. Les limites de scènes sont détectées au lieu de découper en tiers égaux. Toutes les vignettes et animations du catalogue ont été régénérées depuis ces étapes.

Les six planches `contact-*.jpg` permettent de comparer les trois étapes de chaque angle. Elles ont été examinées pour les fragments parasites et le cadrage. `audit.json` décrit les repères et transformations. Les sources originales sont inchangées ; aucune pose anatomique n’a été retouchée.

La stabilité est améliorée par translation et échelle uniforme autour d’un tapis, d’un banc ou d’un appui fixe. Les mouvements réels des appuis sont conservés. Des variations de perspective provenant des sources subsistent et nécessitent une revue humaine si une animation parfaitement raccordée est attendue.

Vérifications : quatre tests Python sur les 60 sources (isolation, marges, échelles, tapis du Dead bug), 55 tests applicatifs et build réussis. Chromium mobile : 48 vignettes chargées et neuf séries de trois étapes contrôlées, profils et vues de dessus des exercices signalés ; cadre identique en mode animé. Voir `browser.json` et `dead-bug-mobile.png`.

La revue technique des illustrations et des mouvements reste en attente. Aucun iPhone physique n’a été testé.

Après le retour de Simon, les 48 GIF et le diaporama de profil bouclent sur les deux premières positions. La troisième étape manuelle utilise la première image pour le retour, en conservant son texte. Les fichiers sources et troisièmes images restent archivés dans le catalogue ; les vues de dessus conservent trois positions.

Simon a ensuite confirmé le même comportement attendu pour les vues de dessus : elles utilisent aussi uniquement les images 1 et 2, avec la première image pour le retour.

Dernière simplification demandée : la fiche présente deux étapes, avec compteur / 2, deux boutons et deux blocs de consignes. La troisième étape est conservée uniquement dans les données et fichiers historiques.
