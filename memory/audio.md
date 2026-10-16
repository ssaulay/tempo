# Coaching vocal préenregistré

## 13 octobre 2026 - premier test audio iPhone

- Résolution confirmée par Simon le 13 octobre : « c’est bon le son fonctionne » dans Tempo, après intégration du mode playback. Problème de son muet résolu pour son test Chrome sur iPhone en Wi-Fi HTTP. Conserver activation synchrone avant tout await, amorce silencieuse et demande AudioSession playback avec repli si API absente/refusée. Cette confirmation ne couvre pas une recette audio exhaustive (toutes les voix, annonces, hors ligne ou reprises) ni la recette globale iPhone.

- Retour physique de Simon : son entendu sur diagnostic v1, Chrome CriOS 155 / iOS 27.0.1, HTTP, AudioSession initial auto. Lecture directe en cours, F1 HTTP 200 / décodage 2,40 s / passage suspended vers running, bip running ; mode playback accepté et nouveaux essais F1/bip running. Le journal ne prouve pas quel essai était audible avant playback : ne pas attribuer la cause exacte sans cette précision.
- Tempo demande AudioSession playback si disponible, avant la création/reprise du contexte, pour employer la catégorie de lecture plutôt que le comportement ambient iOS. Absence ou refus de cette API ne bloque pas le déverrouillage. Test de régression échoué avant correction ; build et 87 tests réussis. Le blocage TypeScript du mock audio est résolu.

- Après rechargement, Simon confirme que « Tester la voix » avec F1 par défaut reste muet sur Chrome iPhone. L'activation précoce ne suffit pas ; cause physique non identifiée. Fichier réellement testé : EX03.prepare (Jumping jacks), WAV mono PCM16 24 kHz, 2,40 s, RMS 3502 et pic 27825, servi HTTP 200 audio/wav. Ce n'est pas un fichier silencieux ni absent.
- Page locale `public/audio-diagnostic.html` disponible à `/audio-diagnostic.html` : lecteur natif F1, même fichier via Web Audio, bip et essai optionnel AudioSession playback, journal visible. Vérification navigateur Mac : HTTP 200, décodage 2,40 s, contexte running, F1 démarrée/terminée et bip démarré. Réponse du téléphone nécessaire pour isoler sortie physique, mode silencieux et moteur. WebKit documente le comportement ambient de Web Audio vis-à-vis du mode silencieux (bugs 237322, 252746) ; hypothèse, pas cause confirmée pour Simon.
- Build complet et 85 tests réussis après correction du typage du mock JSON ajouté lors du test précédent. Le build de ce tour couvre bien le test modifié.

- Simon teste sur Chrome sur iPhone (précision explicite), et signale voix et sons muets lors du test Wi-Fi. Défaut constaté dans le code : unlockAudio était appelé après await prepareAssets, hors du geste utilisateur. Activation déplacée avant le premier await, amorce silencieuse Web Audio synchrone ajoutée au démarrage, à la reprise et au test vocal via unlockAudio.
- Régression reproduite avec un contexte dont resume ne se résout pas : la sortie doit démarrer pendant le geste. 85 tests passent et build réussi ; serveur LAN répond HTTP 200. Vérification Chrome indisponible (profil déjà utilisé), aucun test physique iPhone réalisé par Codex. Confirmation de Simon encore nécessaire, ne pas déclarer le son iPhone validé.
- Le test de lot vocal incomplet doit retirer explicitement un segment du manifeste de test : la production progressive peut rendre complète une annonce auparavant incomplète.

## 12 octobre 2026 - cadrage

- Simon travaille la refonte avec un autre chat. Ce chantier se concentre sur le coaching vocal ; coordonner toute future édition de App.tsx et du lecteur, préserver les changements existants.
- Une variable GEMINI_API_KEY renseignée existe dans le .env privé du projet /Users/simon.saulay/Documents/ChatGPT/histoplaymo. Valeur jamais affichée. Validité actuelle, quotas, facturation et identité du projet Google non vérifiés.
- Histoplaymo possède une référence de production TTS via Interactions, modèle 3.1 Flash TTS Preview, voix Charon. Direction documentaire à ne pas recopier pour le sport. Vérifier le schéma API du modèle retenu.
- Plan : docs/superpowers/plans/2026-10-12-coaching-vocal.md. Catalogue brouillon : reports/audio/catalogue-brouillon.json, 220 assets de base et 144 textes techniques optionnels, avant déduplication.
- Direction corrigée : voix féminines et masculines adultes jeunes, dynamiques et sympathiques, français de France obligatoire sans accent canadien/québécois. Voice Design remplace la shortlist de voix préconstruites. Clips complets pour consignes, segments pour valeurs ; production en amont, clé hors navigateur.
- Repos prolongé répétable sans limite, tentatives et snapshots historiques empêchent une couverture finie de toutes les phrases exactes. Prévoir annonce générique pour valeurs hors catalogue ; ne pas perdre la cohérence de la prochaine série.
- Consignes techniques non approuvées ; revue humaine avant production retenue. Aucune voix choisie, aucun audio ni appel API produit pendant le cadrage.
- Budget estimatif 20 à 45 minutes audio : 0,27 à 0,61 USD audio en Gemini 3.8 Flash TTS au tarif standard consulté le 12/10/2026, texte et reprises en plus. Proposition de plafond 5 USD, pas encore autorisé. Recalculer avant production avec les tarifs et métadonnées d’usage.

## 12 octobre 2026 - apprentissages Histoplaymo et correction de direction

- Lire les dernières sections de memory.md et les scripts Voice Design, pas seulement docs/gemini_voice.md : cette documentation historique était dépassée par les essais suivants.
- Méthode validée dans Histoplaymo : identité vocale conçue séparément du style par phrase, comparaison sur le même texte, réutilisation de l’ID. Changement de prompt ou recréation dans un autre projet peut modifier le timbre.
- Histoplaymo documente au 25/09 la clé PLaymo2, projet PLaymo gen-lang-client-0949365384, Tier 1 Prepay. État actuel non vérifié. Les IDs sont liés au projet.
- Brief Tempo : reports/audio/brief-voix.json, F1/F2 et M1/M2, âge adulte perçu 25-35 ans, fr-FR et accent métropolitain neutre. Écoute requise pour exclure accent canadien/québécois ; fr-FR ne suffit pas.
- Budget précédent TTS par voix uniquement ; multiplier par voix retenue et inclure séparément la conception Voice Design. Aucun appel API dans cette mise à jour.

## 12 octobre 2026 - quatre voix créées

- Simon a autorisé la création des quatre voix. Quatre identités Gemini 3.8 Voice Design et quatre extraits de la même phrase ont été générés dans reports/audio/voices/, avec identifiants persistants et usage conservés dans F1/F2/M1/M2.json.
- Durées : F1 9,24 s, F2 8,68 s, M1 8,68 s, M2 7,84 s. WAV mono 16 bits lisibles et identifiants distincts vérifiés.
- Comparatif local : reports/audio/voice-preview.html. Accent français de France, jeunesse, naturel et préférence restent à vérifier à l’écoute humaine. Aucune intégration à l’application et aucun lot complet généré.
- Le réseau du sandbox ne résolvait pas Gemini ; relance autorisée hors sandbox réussie. Aucun secret affiché ni copié.

## 12 octobre 2026 - préférence F1 et M2, variante grave

- Simon apprécie F1 et M2 ; F1 retenue, M2 appréciée avec demande d’une voix un peu plus grave. Préserver jeunesse, énergie, sympathie et français de France.
- Variante M2-deep-v2 créée comme nouvelle identité Voice Design avec prompt ajusté et même style/texte comparatif. WAV de 6,44 secondes vérifié techniquement, original M2 conservé. Timbre et accent à valider à l’écoute ; aucune sélection automatique de la variante.
- Prévisualisation complétée et métadonnées d’identité conservées. Pas de lot complet ni d’intégration.

## 12 octobre 2026 - sélection vocale confirmée

- Simon confirme M2 - Variante plus grave. Voix retenues : F1 et M2-deep-v2. Identifiants et styles figés dans reports/audio/voices/selection.json ; conserver les prises alternatives historiques.
- Sélection du timbre confirmée par Simon, sans l’assimiler à une revue technique sportive. Production complète et intégration non commencées.

## 12 octobre 2026 - reprise après acquiescement et phrases figées

- Correction de Simon : son « ok » après la prochaine étape proposée autorise à avancer ; ne pas répondre par une salutation ni perdre le chantier actif.
- Catalogue-production-v1.json et phrases-coaching-v1.md figent les 220 textes de base, nombres français de France en lettres, tutoiement et recettes de composition. Deux lots pour F1/M2-deep-v2.
- 144 consignes techniques exclues tant que la revue humaine manque. Pause interrompt la voix, décompte seulement optionnel, valeurs hors catalogue restent visuelles avec repos vocal générique.
- Couverture des 48 noms/préparations et identifiants vérifiée ; pas de génération API ni de modification du lecteur dans cette étape. Prochaine étape : pilote audio sur compositions avant production complète.

## 12 octobre 2026 - phrases complètes ou segments

- Pour les préparations fixes (« Jumping jacks. Prépare-toi. »), privilégier la phrase complète : prosodie et rythme plus naturels, moins de raccords et de logique de lecture. Les 48 préparations du catalogue sont déjà complètes.
- Garder les segments autonomes uniquement pour combinaisons nombreuses de série/total/quantité/repos. Éviter montage mot à mot. Comparer les raccords dans le pilote et produire des phrases fréquentes complètes si nécessaire.
- Coût TTS lié surtout à la durée totale produite : la segmentation ne réduit pas mécaniquement le coût ; gain quand un segment remplace de nombreuses variantes complètes. Pour 48 préparations et deux voix, économie financière faible au tarif actuel, priorité au rendu. Aucun chronométrage de production ni écoute comparative des raccords effectués.

## 12 octobre 2026 - pilote et coût mesuré

- Pilote autorisé de 24 extraits (12 par voix F1/M2-deep-v2) généré sans recréer les identités. WAV et usages API vérifiés, montages complets/segments disponibles dans reports/audio/pilot/index.html. Aucun raccord validé à l’écoute automatique.
- Coût calculé selon usage API et tarif standard actuel : 0.010364 USD pour 45.60 secondes. Facture Google non vérifiée. Une requête rejetée 429 sans usage fourni n’est pas chiffrable.
- Extrapolation par voix/famille, familles absentes remplacées par moyenne de voix : 0.176 USD pour 440 fichiers, 0.229 avec 30 % de reprises ; environ 13 minutes audio et 84 minutes de génération séquentielle avec espacement de 7 secondes. Petit échantillon, estimation indicative hors écoute/corrections/intégration.
- Quota effectivement rencontré : 10 requêtes par minute Tier 1. Reprise en ignorant les fichiers déjà produits et pauses de 7 s entre appels. Les appels futurs doivent gérer le 429 et son délai recommandé.
- Rapport détaillé : reports/audio/pilot/cost-report.md et cost-report.json. Production complète non lancée, écoute humaine du pilote attendue.

## 12 octobre 2026 - correction du découpage « par côté »

- Simon relève une pause gênante entre répétitions et par côté dans les deux voix composées. Cause de construction : « Douze répétitions. » et « Par côté. » synthétisés séparément comme phrases autonomes, puis concaténés avec silences originaux. Ne pas séparer ces groupes syntaxiques ; couper le silence ne suffit pas à corriger une intonation de fin.
- À sa demande, un clip « Douze répétitions par côté. » a été régénéré dans chaque voix ; compositions V2 dans reports/audio/pilot-v2/. V1 conservée. WAV vérifiés, écoute en attente.
- Si ce découpage est retenu, ajouter les 19 variantes quantité + par côté au catalogue (239 textes, 478 fichiers pour deux voix) et réviser extrapolation. Ne pas lancer le lot complet avant écoute du pilote corrigé.

## 12 octobre 2026 - reprise autorisée vers production complète

- Simon demande de poursuivre après reset de son quota. Interprété comme poursuite de production avec le découpage corrigé, sans nouvelle demande d’approbation. Pas d’affirmation que le reset Codex modifie les quotas Gemini.
- Catalogue V2 : 239 textes, 478 fichiers, ajout de 19 variantes quantité/par côté ; V1 historique conservée. 22 clips du pilote réutilisables.
- Génération locale active via scripts/generate-coach-assets.py, état dans reports/audio/production/progress.json et status.md. Appels espacés de 6,5 s, reprise limitée des 429/5xx avec attente demandée, plafond logiciel 5 USD, maîtres et usages sauvegardés par clip.
- Processus scripts/finalize-coach-assets.py prépare automatiquement après génération le bilan de coût usage, le manifeste, la page d’écoute et les copies WAV locales. Fin de surveillance après deux heures ou progression inchangée quinze minutes. Les processus ne constituent pas une automation récurrente.
- Choix de livraison intermédiaire WAV : aucun ffmpeg disponible et conversion AAC via afconvert non fonctionnelle dans cet environnement. Compression/normalisation et intégration différées ; les maîtres restent intacts.
- L’application et les fichiers de refonte ne sont pas modifiés. Production encore en cours au moment de cette entrée.

## Point coût pendant production

- 74/478 fichiers sauvegardés au point demandé par Simon : 181,8 secondes audio, coût usage standard calculé 0,041331 USD. Projection linéaire provisoire 0,267 USD pour 478 fichiers ; échantillon surtout noms/préparations, donc pas un devis. Facture non vérifiée ; les essais de création de voix sont séparés et leur tarif ne doit pas être assimilé sans preuve à celui de la synthèse.

## Quota quotidien Gemini atteint pendant production

- Vérification demandée par Simon : production arrêtée à 74/478 fichiers, 0,041331 USD. Dernières réponses HTTP 429 : quota Gemini Tier 1 de 100 requêtes par jour, et non plus seulement 10/minute. Les délais indiqués dans les erreurs sont historiques, ne pas les présenter comme délai actuel.
- Surveillance locale a constaté quinze minutes sans progrès et s’est arrêtée. Ancien statut generating était périmé ; corrigé en blocked_gemini_daily_quota. 404 fichiers restent à produire.
- Estimation d’une heure incomplète : elle ignorait le quota quotidien. Un reset de quota Codex ne renouvelle pas celui de Gemini. Pas d’affirmation de reprise en cours sans vérification.
- Reprendre avec la même clé/projet et les mêmes IDs après renouvellement Gemini, ou ajustement du palier par Simon ; ne pas changer de clé/projet pour contourner le quota, les IDs vocaux sont liés au projet.

## Relèvement du quota Gemini

- Documentation officielle consultée le 12/10/2026 : quota par projet, pas par clé ; RPD renouvelé à minuit heure du Pacifique. Google propose une demande de relèvement du palier payant sans garantie d’acceptation. Ne pas promettre un passage de 100 à 500 RPD par simple réglage.
- Critères actuels Tier 2 : 100 USD payés cumulés sur le compte de facturation Google Cloud et trois jours après premier paiement réussi. Ne pas recommander cette dépense uniquement pour un lot audio de moins d’un dollar. Vérifier les limites effectives de Gemini 3.8 Flash TTS dans AI Studio.
- Source : https://ai.google.dev/gemini-api/docs/rate-limits (mise à jour officielle 09/10/2026).


## Annonces des variantes tubes

EX19.v2.name/prepare et EX26.v2.name/prepare sont des IDs distincts pour préserver anciens clips et snapshots. Textes et générateur isolés dans reports/audio/tubes-v2/ et scripts/generate-tube-coach-audio.py. Tentative du lot de 8 F1/M2 a reçu HTTP 429, aucun fichier généré. Les annonces v2 utilisent la voix système si disponible, jamais un ancien enregistrement dont le texte diffère. Production historique non modifiée.

## 13 octobre 2026 - priorité masculine et réutilisabilité

- Simon demande reprise en priorité sur M2-deep-v2, surtout les phrases les plus utilisées. Le générateur accepte --voice et traite d’abord les annonces communes, séries/quantités courantes, puis noms/préparations courants et kit ; décompte optionnel dernier.
- Catalogue de production V3 actualisé depuis extensions, kit et variantes : 311 textes par voix, 622 cibles au total. IDs audioKey et preparationCue conservés ; historique V1/V2 non modifié.
- En cas de quota quotidien, arrêt immédiat avec statut bloqué réel, pas de réessais pendant des heures. Export des fichiers disponibles tous les dix clips et à l’arrêt/fin, sans changer le lecteur ni les fiches. Progression globale et masculine séparées dans reports/audio/production/progress.json.
- Intégration partielle déjà réalisée : F1/M2 sélectionnables, annonce système entière si un segment manque, téléchargement de chaîne annulable, fichiers disponibles précachés. Tests antérieurs 63 réussis, vérification Chrome deux voix/93 fichiers en cache/lecture hors ligne réussie ; son physique et iPhone non vérifiés.

## 13 octobre 2026 - point après priorité masculine

- M2-deep-v2 : 111/311 clips disponibles et exportés dans le manifeste applicatif ; 100 nouveaux appels réussis depuis la reprise. Production de nouveau arrêtée au quota quotidien 100 requêtes. Global : 193/622, coût calculé usage standard 0,100784 USD. Facture non vérifiée. Le délai du dernier 429 est historique, pas un délai actuel.

## 14 octobre 2026 - nouvelle reprise homme avant femme

- Simon autorise à continuer les voix manquantes avec priorité masculine conservée. Générateur lancé sans filtre voix, ordre M2-deep-v2 puis F1 si le quota le permet ; aucun fichier existant régénéré.
- Catalogue V4 est un instantané vérifié des sources actuelles ; aucun nouvel ID manquant trouvé par rapport à V3, 311 textes par voix / 622 cibles. Ordre de fréquence conservé, décompte optionnel dernier.
- Une nouvelle requête a réussi : quota utilisable constaté, sans supposer qu’il a été relevé. Départ à 111 clips masculins, 193 globaux. État générating dans reports/audio/production/progress.json ; export des nouveaux clips au fil du lot, pas de déploiement public lancé.

## 14 octobre 2026 - fin du quota du jour

- Lot arrêté proprement après 100 nouveaux clips M2 : 211/311 clips masculins générés et exportés, 100 manquants. Global 293/622, coût usage standard 0,1477755 USD, facture non vérifiée. Dernier 429 sur EX59.name : 100 requêtes quotidiennes atteintes. Aucun délai historique présenté comme délai actuel.
