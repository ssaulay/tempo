"""Render the cardio research data as readable French; no application mutation."""
import json
from pathlib import Path

root = Path(__file__).resolve().parent
x = json.loads((root / 'cardio.json').read_text())
registry = {s['id']: s for s in x['sources']}
md = ['# Référentiel cardio et coordination', '', 'Version documentaire du 12 octobre 2026. Aucune revue technique humaine ni validation des médias. Scripts audio et critères visuels proposés.', '', '## Sources consultées', '']
for s in x['sources']:
    md += [f"- **{s['id']}** [{s['title']}]({s['url']}) - {s['publisher']}. {s['scope']} Consultation : {s['accessedOn']}. Accès : {s['access']}."]
status_labels = {'geste_recoupe': 'Geste de base recoupé', 'geste_recoupe_avec_divergence_materiel': 'Geste recoupé ; divergence sur le matériel', 'geste_alterne_debout_recoupe_details_poignet_rotation_partiels': 'Alternance debout recoupée ; poignet et rotation encore partiels', 'transfert_lateral_sans_saut_recoupe_geometrie_tempo_partielle': 'Transfert sans saut recoupé ; géométrie Tempo encore partielle'}
for e in x['exercises']:
    md += ['', f"## {e['id']} - {e['name']}", '', f"**État : {status_labels.get(e['documentaryStatus'], e['documentaryStatus'])}**. Revue humaine : en attente.", '']
    for key, label in [('startingPosition', 'Position initiale'), ('movement', 'Mouvement et sortie'), ('breathing', 'Respiration'), ('muscles', 'Muscles'), ('equipment', 'Installation et matériel'), ('regressions', 'Adaptations'), ('stop', 'Arrêt'), ('currentCatalogueAudit', 'Audit du catalogue')]:
        md += [f'**{label}.** {e[key]}', '']
    md += ['**Prescription.** ' + e['programming']['existingRules'] + '. ' + e['programming']['progression'], '']
    for key, label in [('errorsAndCorrections', 'Erreurs et corrections'), ('mediaAcceptance', 'Médias à contrôler'), ('audioDraft', 'Audio proposé'), ('unresolved', 'Points non résolus')]:
        md += [f'**{label}**', ''] + [f'- {v}' for v in e[key]] + ['']
    if e.get('documentedAlternateVariant'):
        a = e['documentedAlternateVariant']
        md += ['**Variante documentée à distinguer.** ' + a['name'], '']
        for key, label in [('start', 'Départ'), ('action', 'Mouvement'), ('freeFoot', 'Pied libre'), ('return', 'Retour'), ('limit', 'Limite')]:
            md += [f'- {label} : {a[key]}']
        md += ['']
    md += ['**Limite de preuve.** ' + e['evidenceBoundary'], '', '**Traçabilité :** ' + ', '.join(f"[{i}]({registry[i]['url']})" for i in e['sources']) + '.', '']
(root / 'cardio.md').write_text('\n'.join(md) + '\n')
print(f"{len(x['exercises'])} fiches cardio, {len(registry)} sources rendues")
