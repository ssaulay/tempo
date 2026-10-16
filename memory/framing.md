# Découpage et stabilité des illustrations

Simon a signalé des fragments des scènes voisines (EX08, EX11, EX12, EX14 notamment) et des déplacements de caméra entre étapes (Dead bug). Ne pas revenir au découpage en trois tiers égaux : les séparations réelles des planches ne sont pas régulières.

Le pipeline détecte trois scènes, les isole, puis applique uniquement une translation et une mise à l’échelle uniforme. Le cadrage commun englobe les trois poses. Repères : tapis, banc, pied avant fixe, appuis immobiles ; caméra commune pour les exercices où les pieds bougent. EX16 n’a pas de tapis : repère du contact tête-sol. Ne pas chercher le tapis uniquement dans les derniers pixels : sa perspective fausse la largeur.

Sources PNG conservées. 60 planches (48 profils et 12 vues complémentaires), 180 étapes, 48 vignettes et GIF régénérés. Certaines perspectives et proportions diffèrent déjà dans les sources ; un recalage rigide ne corrige pas ces différences sans modifier les poses. Revue technique humaine toujours en attente.

Reproduction : `npm run assets:derive`, `python3 scripts/test_framing.py`, `python3 scripts/framing-contact.py`, puis build. Tests navigateur : `scripts/framing-smoke.cjs`. Audit et planches de contrôle : `reports/framing/`.

Les médias gardent leurs URLs. Le manifeste fournit maintenant une révision fondée sur leurs checksums, utilisée par le téléchargement et le service worker construit. Cela évite de conserver les anciens découpages dans le cache préparé. Conserver les anciens caches pour ne pas invalider une séance ouverte sous l’ancienne version.

Simon souhaite des étapes animées directement dans Explorer les exercices. Les cartes utilisent les GIF recalés, chargés à la demande ; une image fixe reste servie si la préférence système de réduction des animations est activée. Les vignettes de l’éditeur restent fixes.

Correction de Simon : les troisièmes poses de profil ressemblent au retour initial mais avec un décalage inutile. Toutes les animations de profil bouclent désormais 1 → 2 → 1. La troisième étape textuelle conserve ses indications de retour et affiche la première image. Les fichiers step-03 originaux et les snapshots restent conservés ; les vues de dessus restent à trois poses. Ne pas réintroduire la troisième image dans les GIF ou le diaporama de profil.

Simon confirme la même redondance pour les vues de dessus : appliquer également la boucle 1 → 2 → 1 et reprendre la première image pour la troisième étape manuelle, sans supprimer les fichiers originaux. Cette consigne remplace l’exception des vues de dessus ci-dessus.

Simon demande de retirer également la troisième étape des fiches : boutons, compteur et liste des consignes limités à 1 et 2, dans les deux angles. Les données du catalogue et les fichiers originaux restent conservés pour les snapshots historiques.
