# Illustrations EX49-69

21 planches originales produites avec le tool intégré image_gen, personnage de référence Tempo. Sources dans `assets/sources/extensions-v1/`, dérivés dans `public/assets/exercises/v1/EX49` à `EX69`. Chaque lot contient trois images de phases (la troisième reprend la première), une vignette, un GIF et une carte musculaire SVG indicative. Les deux premières phases sont affichées.

Les prompts et reprises sont enregistrés dans prompts.json. Six fiches ont été reprises : EX56, EX58, EX60, EX63, EX67 et EX68. Les brouillons initiaux correspondants restent dans ce dossier. EX67 a connu un échec ponctuel du service de génération avant une génération réussie.

Les 21 planches ont été examinées par l’assistant en planches de contact, ainsi que les reprises en pleine définition. Aucun professionnel humain n’a réalisé de revue. Aucune pose, carte musculaire ni prescription ne devient validée par cette production. Les GIF représentent deux poses fixes successives, aucune trajectoire continue. EX57/58/62 restent fixes sur la pose de maintien dans cartes/fiches. EX52 ne montre pas la réception ; EX63 nécessite encore un contrôle de rotation du tronc ; le montage EX53 reste documentaire et indisponible en séance avec le matériel de Simon. Les vues complémentaires et démonstrations continues restent à préparer séparément.

Reproduction sans régénérer les images :

```sh
python3 scripts/integrate-exercise-extensions.py
python3 scripts/derive-extension-assets.py
node scripts/create-manifest.mjs --extensions-only
```

Le mode extensions-only conserve les entrées et médias historiques, y compris les variantes tubes. integrity.json contrôle les empreintes des fichiers historiques et les GIF statiques. ui-verification.json conserve la recette Chrome 390/1440 ; aucun iPhone physique testé. contact.jpg regroupe les poses finales.
