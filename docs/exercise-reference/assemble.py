"""Assemble and verify the documentary reference; never edits the app catalogue."""
from pathlib import Path
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parent
BASE_GROUPS = ('cardio', 'strength', 'core', 'mobility')
EXTENSION_GROUPS = ('extension-pectorals', 'extension-abs-stability', 'extension-abs-dynamic', 'kit-expansion', 'kit-pectorals')
GROUPS = BASE_GROUPS + EXTENSION_GROUPS
candidate_ids = {f'EX{i:02d}' for i in range(49, 78)}
base = json.loads((ROOT / 'baseline.json').read_text())
baseline = {e['id']: e for e in base['catalog']['exercises']}
assert len(baseline) == 48
sources = []
records = []
source_keys = set()

def source_ids(e):
    ids = e.get('source_ids', e.get('sources', e.get('sourceEvidence', [])))
    return [s if isinstance(s, str) else s.get('id', s.get('sourceId')) for s in ids]

for group in GROUPS:
    raw = json.loads((ROOT / f'{group}.json').read_text())
    registry = {s['id']: s for s in raw['sources']}
    assert len(registry) == len(raw['sources']), f'{group}: duplicate source IDs'
    for sid, s in registry.items():
        assert re.match(r'^https?://', s['url']), (group, sid)
        key = f'{group}:{sid}'
        assert key not in source_keys
        source_keys.add(key)
        sources.append({'referenceId': key, 'group': group, **s})
    for e in raw['exercises']:
        eid = e['id']
        existing = group in BASE_GROUPS
        assert eid in (baseline if existing else candidate_ids), eid
        if existing:
            assert e['name'] == baseline[eid]['name'], (eid, 'name mismatch')
        assert e['name'].strip(), (eid, 'empty name')
        ids = source_ids(e)
        assert len(ids) >= 2, (eid, 'fewer than two source documents')
        assert all(s in registry for s in ids), (eid, 'missing source')
        status = e.get('documentaryStatus', e.get('documentary_status', e.get('documentaryCoverage', e.get('status'))))
        assert status, (eid, 'missing documentary status')
        records.append({
            'id': eid,
            'name': e['name'],
            'group': group,
            'catalogVersionAtStart': baseline[eid]['version'] if existing else None,
            'catalogMembership': 'existing_at_snapshot' if existing else 'extension_candidate',
            'provisionalId': not existing,
            'minimumLevelProposed': e.get('minimumLevelProposed', e.get('proposedLevel', e.get('levelProposed'))),
            'levelClassificationStatus': 'editorial_not_individual_assessment' if not existing else 'see_details',
            'documentaryStatusOriginal': status,
            'sourceReferences': [f'{group}:{s}' for s in ids],
            'sourceDocumentCount': len(ids),
            'publishersAsDeclared': sorted({registry[s]['publisher'] for s in ids}),
            'reviewGates': {
                'technicalHuman': 'pending',
                'currentImagesAndAnimations': 'not_inspected_image_by_image' if existing else 'generated_illustrations_unreviewed' if e.get('localPrototypeIntegration') else 'not_produced',
                'muscleMap': 'pending',
                'audio': 'draft_text_not_approved',
                'prescription': 'not_validated_by_this_research',
                'fullyValidated': False,
            },
            'details': e,
        })
records.sort(key=lambda e: e['id'])
assert len(records) == 77
assert len({e['id'] for e in records}) == 77
assert {e['id'] for e in records} == set(baseline) | candidate_ids
obj = {
    'schemaVersion': 2,
    'editionDate': '2026-10-12',
    'scope': '48 historical exercises, 21 chest/abs extensions and 8 door-anchored exercises, plus equipment variants; documentary proof scopes, no human approval',
    'catalogBaselineSha256': base['catalogSha256'],
    'sourceCountingRule': 'Document counts are not independent confirmations. Publishers, exact variants and claim scope must be reviewed separately.',
    'exerciseCount': len(records),
    'existingExerciseCount': 48,
    'extensionCandidateCount': 29,
    'additionalEquipmentVariants': json.loads((ROOT/'kit-expansion.json').read_text())['equipmentVariants'],
    'sources': sources,
    'exercises': records,
}
(ROOT / 'reference.json').write_text(json.dumps(obj, ensure_ascii=False, indent=2) + '\n')

coverage = [
    '# État des preuves et décisions restantes', '',
    'Édition du 12 octobre 2026. Le référentiel comprend 77 mouvements : 48 historiques, 21 extensions pectoraux/abdominaux et 8 mouvements à la porte. Les illustrations sont intégrées au prototype, sans validation humaine. Sept variantes avec tubes existent dans l’app, dont cinq documentées dans kit-expansion.md. Chaque fiche cite au moins deux documents, mais ce seuil ne signifie pas que toutes les données sont recoupées sur la variante exacte.', '',
    f"Les registres contiennent {len(sources)} entrées de sources, dont {len({s['url'] for s in sources})} URL distinctes. Ces nombres incluent les confirmations de geste, les variantes voisines et les sources de contexte. Aucun exercice ne possède encore toutes les approbations humaines et médias.", '',
    'Les libellés ci-dessous explicitent le niveau documentaire ; leurs valeurs originales restent dans le JSON. Lire les limites et arbitrages de la fiche avant de réutiliser une consigne.', '',
    '| ID | Exercice | Documents cités | État documentaire |',
    '| --- | --- | ---: | --- |',
]
status_labels = {
    'prototype_editorial_with_variant_limits_not_human_validated': 'Prototype documenté ; portées exactes/famille et limites conservées, sans revue humaine',
    'documentary_landing_correlated_variant_details_pending': 'Vol sans claquement et amortissement recoupés ; détails du protocole à revoir',
    'corroborated_quadruped_entry_support_exit_pending': 'Entrée quatre pattes recoupée ; support et sortie à revoir',
    'corroborated_dynamic_straight_legs_stacked_feet_partial': 'Dynamique recoupée ; seconde description pieds empilés manquante',
    'description_croisee_variante_precisee_revue_humaine_en_attente': 'Descriptions croisées ; variante précisée, revue humaine en attente',
    'base_variant_corroboree_details_editoriaux_a_relire': 'Variante de base recoupée ; détails éditoriaux à relire',
    'documentary_correlated': 'Mouvement de base recoupé ; limites par donnée conservées',
    'documentary_partial': 'Montage ou variante encore partiellement recoupés',
    'geste_recoupe': 'Geste de base recoupé',
    'geste_recoupe_avec_divergence_materiel': 'Geste recoupé ; divergence sur le matériel',
    'geste_alterne_debout_recoupe_details_poignet_rotation_partiels': 'Alternance debout recoupée ; poignet et rotation partiels',
    'transfert_lateral_sans_saut_recoupe_geometrie_tempo_partielle': 'Transfert sans saut recoupé ; géométrie Tempo partielle',
    'corroborated_base_variant': 'Variante de base recoupée',
    'corroborated_base_movement_three_publishers': 'Mouvement de base recoupé par trois éditeurs',
    'corroborated_wall_variant_free_standing_adaptation': 'Variante au mur recoupée ; sans mur adaptée',
    'corroborated_end_position_with_entry_adaptation': 'Position finale recoupée ; entrée adaptée',
}
for e in records:
    display_status = status_labels.get(e['documentaryStatusOriginal'], e['documentaryStatusOriginal'])
    coverage.append(f"| [{e['id']}](REFERENCE.md#{e['id'].lower()}) | {e['name']} | {e['sourceDocumentCount']} | {(('Candidat : ' if e['catalogMembership'] == 'extension_candidate' else '') + display_status).replace('|', '/')} |")
coverage += [
    '', '## Limites communes', '',
    '- Les nombres de sources ne prouvent pas l’indépendance ; plusieurs documents ACE, NHS ou NSCA ne deviennent pas plusieurs confirmations indépendantes.',
    '- Les critères visuels et scripts audio restent des propositions. Aucune inspection des 48 séries de médias n’a été effectuée dans cette recherche.',
    '- Les rôles anatomiques inférés, prescriptions et adaptations ne reçoivent pas automatiquement le statut du mouvement de base.',
    '- Pour chaque arbitrage, fixer la variante exacte, enregistrer la décision et la faire relire sur la version finale. Une formulation non résolue ne doit pas devenir un prompt d’image ou un clip vocal définitif.',
    '', '## Arbitrages à traiter en priorité', '',
    '- **Bandes et tubes** : montage réellement utilisé, appuis sous pied, position derrière le dos, longueur utile, poignée et notice fabricant. Les transferts à partir de câble, bande plate ou autre modèle doivent rester identifiés.',
    '- **Développé épaules / triceps au-dessus de la tête** : ne pas immobiliser les omoplates dans une position basse pendant toute l’élévation ; sources et arbitrages détaillés dans les fiches.',
    '- **EX20** : l’appui sur la cuisse est désormais recoupé par une description originale de physiothérapeutes ; contrôler encore trajet, symétrie et média réel.',
    '- **EX19/23/38/53** : EX23 bilatéral renforcé, mais sous-semelle/enroulement distincts ; EX38 boucle/prises extérieures renforcées. Notice, longueur et compatibilité du modèle réel restent partielles.',
    '- **EX50/52/55/56** : EX50 largeur modérée éditoriale ; EX52 amortissement recoupé, protocole à revoir ; EX55 arrêt avant contact sol retenu ; EX56 provenance des guides, contact matériel et sortie encore partiels.',
    '- **EX31** : état de retour du crunch inversé, sans copier une descente des pieds différente de la variante choisie.',
    '- **EX34** : courte course et contrôle au retour de roue ; respiration et images non approuvées.',
    '- **EX35/62** : bras vers talons et transition vers longs leviers renforcés par GMB ; maintien distinct du balancement, ordre de sortie et respiration encore éditoriaux.',
    '- **EX42/44** : sans mur EX42 reste adaptation ; entrée quatre pattes EX44 désormais recoupée, support frontal et sortie à relire.',
    '- **EX47** : cycle simple alterné debout désormais décrit par NSW ; poignet, rotation, pivot et respiration restent à préciser. Ne pas importer les pivots de puissance de la boxe sportive.',
    '- **EX48** : pied libre, croisement éventuel et inclinaison. Les sources de famille et routines ne suffisent pas pour tous les repères articulaires.',
]
coverage += ['', '## Matériel réel', '', 'Simon possède le kit à tubes 8975309 et une bande textile courte fessiers, aucune bande plate longue. Notice exacte du kit non obtenue ; montages EX19/23/26 non établis pour ce modèle et bande longue EX38/53 absente. Voir [kit-mounting-review.md](kit-mounting-review.md).', '', '## Décisions de la passe complémentaire', '', '18 fiches possèdent une décision datée par domaine dans leurs lots sources. Les arbitrages sans nouvelle preuve restent explicitement éditoriaux. Voir [followup-review.md](followup-review.md) pour résultats, exclusions et critères de clôture.', '']
for record in records:
    review = record['details'].get('followupReview')
    if review:
        coverage.append(f"- **{record['id']}** : {review['decision']}")
(ROOT / 'coverage.md').write_text('\n'.join(coverage) + '\n')

parts = [(ROOT / 'README.md').read_text(), (ROOT / 'audit-initial.md').read_text(), (ROOT / 'coverage.md').read_text()]
parts += [(ROOT / 'extension-overview.md').read_text()]
parts += [(ROOT / f'{g}.md').read_text() for g in GROUPS]
parts += [(ROOT / 'followup-review.md').read_text(), (ROOT / 'kit-mounting-review.md').read_text()]
parts += [(ROOT / 'media-spot-check.md').read_text(), (ROOT / 'research-log.md').read_text()]
joined = '\n\n'.join(parts)
joined = re.sub(r'^(#{2,3} (EX\d{2})\b.*)$', lambda match: '<a id="' + match.group(2).lower() + '"></a>\n\n' + match.group(1), joined, flags=re.M)
(ROOT / 'REFERENCE.md').write_text(joined)

# Check actual reference sections and links to local documents, without fetching source websites again.
complete = (ROOT / 'REFERENCE.md').read_text()
assert len(re.findall(r'^#{2,3} EX\d{2}\b', complete, re.M)) == 77, '77 exercise sections required'
assert '\u2014' not in complete, 'em dash prohibited'
for target in re.findall(r'\]\(([^)]+)\)', complete):
    if target.startswith(('https://', 'http://', '#')):
        continue
    file_target = target.split('#')[0]
    assert (ROOT / file_target).exists(), f'Broken local link: {target}'
assert hashlib.sha256((ROOT.parents[1] / 'catalog/exercises.json').read_bytes()).hexdigest() == base['catalogSha256'], 'Live catalogue changed; reference baseline still preserved, refresh audit before claiming parity'
print(json.dumps({'exerciseCount': len(records), 'sourceEntries': len(sources), 'distinctSourceUrls': len({s['url'] for s in sources}), 'exerciseSections': 77, 'structuralChecks': 'passed', 'humanApprovedExercises': 0}, ensure_ascii=False))
