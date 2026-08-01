# Plan : Vidéo publicitaire réseaux sociaux pour Falah Institut

## Objectif
Créer une vidéo publicitaire verticale 9:16 (Reels / TikTok / Shorts) de 30 secondes avec voix-off française **et sous-titres brûlés dans l’image**, mettant en avant l’offre -50%, les cursus, l’évaluation gratuite et les avis clients.

## Format de sortie
- **Résolution** : 1080 × 1920 (9:16 vertical)
- **Durée** : 30 secondes à 30 fps
- **Audio** : voix-off française uniquement
- **Sous-titres** : synchronisés avec la voix-off, grands et lisibles sur mobile
- **Style** : design abstrait, formes géométriques, couleurs Falah (bleu nuit, doré, émeraude), pas de photos de personnes

## Scénario / storyboard (5 scènes)

| Scène | Durée | Texte visuel principal | Sous-titres (voix-off) |
|-------|-------|------------------------|------------------------|
| 1. Hook | 0–5s | Logo + "Apprenez l’arabe et le Coran en ligne" | "Vous voulez apprendre l’arabe ou le Coran, sans quitter votre maison ?" |
| 2. Offre | 5–11s | "-50% sur votre 1er mois" | "Profitez de moins 50% sur votre premier mois." |
| 3. Cursus | 11–18s | "Arabe · Coran · Tajwîd" + évaluation gratuite | "Cours en direct par Zoom, avec des enseignants qualifiés. Et votre évaluation de niveau est offerte." |
| 4. Témoignages | 18–24s | Avis clients (Myriam, Mohamed) | "Rejoignez des centaines d’élèves qui progressent chaque jour." |
| 5. CTA | 24–30s | "Démarrer sur WhatsApp" + numéro | "Écrivez-nous sur WhatsApp et démarrez dès maintenant." |

## Étapes techniques

1. **Configurer une nouvelle composition verticale** dans `remotion/src/Root.tsx` (id `social-ad`, 1080×1920, 900 frames).
2. **Adapter le système de scènes** :
   - Créer un composant `SocialAd.tsx` dédié.
   - Réutiliser `PersistentBackground` et le kit de composants existants.
   - Optimiser les tailles de texte pour la lecture mobile verticale.
3. **Générer la voix-off** via Lovable AI TTS en un seul fichier MP3 clair et dynamique.
4. **Transcrire la voix-off** pour obtenir les timings exacts de chaque phrase (sous-titres synchronisés).
5. **Intégrer les sous-titres** dans Remotion :
   - Affichage phrase par phrase, centré en bas de l’écran.
   - Fond semi-transparent (bleu nuit 80%) + texte blanc/crème, police Manrope en gras, taille 36–42 px.
   - Apparition/disparition douce synchronisée avec la voix.
6. **Synchroniser audio / scènes / sous-titres** : découper la vidéo en séquences calées sur la voix-off et les timings de sous-titres.
7. **Rendu** : générer le MP4 final via `render-remotion.mjs` avec la piste audio intégrée.
8. **Livraison** : uploader la vidéo finale en tant qu’asset Lovable et/ou la sauvegarder dans `/mnt/documents/` pour téléchargement direct.
9. **(Optionnel)** Intégrer la vidéo dans le site web si tu le souhaites — à valider après livraison.

## Notes
- Le projet Remotion existant sera conservé ; on ajoute une composition parallèle sans casser la vidéo de présentation existante.
- Aucune musique de fond : seule la voix-off sera présente.
- Les sous-titres seront brûlés dans l’image (hardcoded), donc visibles même en lecture sans son.
- Les témoignages affichés seront ceux déjà validés (Myriam, Mohamed).

Dis-moi si le scénario et le style de sous-titres te conviennent, puis je passe à la production.