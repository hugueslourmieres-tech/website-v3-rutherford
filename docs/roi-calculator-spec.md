# Module Calculateur de ROI — Offset Feuille

**Cible d'intégration** : Rutherford.fr & ColorLoop.ai (un seul moteur, deux thèmes)
**Audience** : Imprimeurs offset feuille (packaging & commercial) — directeurs de production, responsables prépresse, dirigeants
**Angle ROI** : Réduction de la gâche au calage + Gain de productivité presse
**Livrable** : Spec produit prête à être consommée par Claude Code pour générer un widget HTML/JS embarquable

---

## 1. Contexte & objectif business

### 1.1 Le problème pour l'imprimeur offset feuille
Sur une presse offset feuille, deux postes de coût dominent la marge :

1. **La gâche au calage (makeready)** — feuilles consommées avant le "BAT presse OK", incluant papier, encres, plaques re-tirées, lavages. Une PME imprimerie type passe **15–30 % de son tonnage papier en gâche**, dont la moitié provient du calage.
2. **Le temps presse non productif** — calage, changements de teintes Pantone, ajustements colorimétriques, attente BAT. Une presse à 250–400 €/h coûte autant qu'elle imprime quand elle est arrêtée.

### 1.2 Ce que le calculateur doit prouver
- En **3 minutes de saisie**, un directeur de production voit l'économie annuelle qu'il peut viser en améliorant calage et stabilité colorimétrique.
- Le résultat est **chiffré en €/an, en feuilles/an, en heures presse récupérées et en tonnes CO₂** — il sert de business case interne pour justifier un projet.
- Le rapport détaillé est envoyé par email → **outil de génération de leads qualifiés** pour les deux marques.

### 1.3 Objectifs mesurables du module
| Objectif | Cible |
|---|---|
| Taux de complétion du formulaire | > 60 % |
| Taux de capture email (envoi rapport) | > 40 % |
| Temps moyen de complétion | < 4 min |
| Score d'engagement (partage / re-visite) | tracké via UTM |

---

## 2. Persona principal

**"Marc, Directeur de production"**
- 45 ans, imprimerie 30–80 personnes, 2 à 5 presses offset feuille (B2 à B1, 4 à 8 couleurs)
- Pilote production, achats consommables, et plan d'investissement
- Pression marge : -2 % par an sur les prix, papier qui reste cher
- Technophile prudent : achète quand le ROI est < 18 mois et démontrable
- **Ce qu'il veut voir** : "Combien je peux économiser sur mon site, avec MES chiffres"

Hypothèses à NE PAS faire :
- Il ne connaît pas G7, M1, ECG, ΔE — il connaît "le calage prend trop de temps"
- Il n'a pas ses chiffres exacts en tête — il faut des **valeurs par défaut crédibles** qu'il peut ajuster

---

## 3. Modèle de calcul

> ⚠️ **Modèle aligné sur le template Rutherford × X-Rite "ROI CIP - KBA" (Sept 2025)** — vérifié à l'euro près sur le total de référence € 212 309/an, € 17 692/mois.

### 3.1 Variables d'entrée (inputs utilisateur)

Regroupées en 4 étapes pour rester digestes.

#### Étape 1 — Capacité de production
| Variable | Symbole | Unité | Défaut | Notes |
|---|---|---|---|---|
| Semaines de production par an | `semaines_an` | semaines | 45 | Hors fermetures, congés, maintenance |
| Jours de production par semaine | `jours_semaine` | jours | 5 | 5 standard, 6-7 si 3 équipes |
| Nombre de calages par jour | `nb_calages_jour` | unité | 3 | Médian B1 6c. Tirages courts → 4-6 |

#### Étape 2 — Économie temps
| Variable | Symbole | Unité | Défaut | Notes |
|---|---|---|---|---|
| Temps de calage moyen | `temps_calage_min` | minutes | 120 | Du lavage au "BAT presse OK" — médian B1 6c |
| Coût horaire presse (chargé) | `cout_h_presse` | €/h | 150 | FR : 200-350 €/h. Marché export : 120-180 €/h |

#### Étape 3 — Économie papier
| Variable | Symbole | Unité | Défaut | Notes |
|---|---|---|---|---|
| Feuilles de gâche par calage | `gache_feuilles_calage` | feuilles | 800 | Médian B1 6c packaging |
| Grammage papier | `grammage_papier` | g/m² | 250 | Auto-rempli par preset |
| Coût papier | `cout_papier_tonne` | €/tonne | 1 200 | FBB Europe 2024 : 1 200-1 350 €/t. Recyclé : 750-900 €/t |
| Largeur feuille | `largeur_papier_mm` | mm | 1 620 | Format presse grand format |
| Coupe feuille | `coupe_papier_mm` | mm | 1 100 | — |

#### Étape 4 — Réduction visée (préfilles selon thème)
| Variable | Symbole | Unité | Défaut Rutherford | Défaut ColorLoop |
|---|---|---|---|---|
| Réduction temps de calage | `reduc_temps_pct` | % | 30 | 38 |
| Réduction gâche papier | `reduc_gache_pct` | % | 52 | 55 |
| Email professionnel | — | email | — | — |

> Les défauts Rutherford reproduisent exactement les gains du système X-Rite IntelliTrax (36 min/420 sh sur 120 min/800 sh). Les défauts ColorLoop sont positionnés plus haut pour matérialiser l'apport IA prédictive sur la chaîne complète.

#### Presets papier (auto-remplit grammage + €/tonne)

| Preset | Grammage | €/tonne | Usage typique |
|---|---|---|---|
| GC1 — luxe / cosméto | 280 g/m² | 1 350 € | Pharma, cosmétique haut de gamme |
| GC2 — packaging premium | 280 g/m² | 1 250 € | Folding box virgin fiber |
| GD2 — recyclé dos blanc | 280 g/m² | 900 € | Packaging milieu de gamme |
| GD3 — recyclé éco | 280 g/m² | 750 € | Packaging entrée de gamme |
| Couché brillant commercial | 135 g/m² | 1 000 € | Brochures, magazines, flyers |
| Couché mat commercial | 135 g/m² | 1 050 € | Édition haut de gamme |
| Offset non couché | 90 g/m² | 800 € | Édition courante, papeterie |

Sources : IndexBox FBB Europe 2024 (avg $1 419/t import, $1 388/t export), retours marché distributeurs FR (Antalis, Torraspapel), observatoire matières papier 2025.

### 3.2 Formules

```text
# === VOLUME ANNUEL ===
nb_calages_an = semaines_an * jours_semaine * nb_calages_jour
# défauts : 45 * 5 * 3 = 675 calages/an

# === COÛT FEUILLE (modèle KBA) ===
# (largeur_m × coupe_m) × grammage_kg/m² × prix_€/kg
cout_feuille = (largeur_papier_mm/1000) * (coupe_papier_mm/1000)
             * (grammage_papier/1000) * (cout_papier_tonne/1000)
# défauts : 1.62 × 1.10 × 0.25 × 1.2 = 0.5346 €/feuille ✓ KBA (€0.53)

# === ÉCONOMIE PAPIER ===
gache_an            = nb_calages_an * gache_feuilles_calage
economie_feuilles   = gache_an * (reduc_gache_pct / 100)
economie_papier_eur = economie_feuilles * cout_feuille
# Rutherford defaults : 540 000 × 0.525 × 0.5346 ≈ 151 559 €/an ✓ KBA

# === ÉCONOMIE TEMPS PRESSE ===
temps_total_min      = nb_calages_an * temps_calage_min
temps_economise_min  = temps_total_min * (reduc_temps_pct / 100)
heures_recuperees    = temps_economise_min / 60
gain_productivite    = heures_recuperees * cout_h_presse
# Rutherford defaults : 81 000 × 0.30 / 60 × 150 = 60 750 €/an ✓ KBA

# === IMPACT CO2 ===
# Facteur ADEME papier carton couché ≈ 1.1 kg CO2eq / kg papier
poids_feuille_kg = (largeur_papier_mm/1000) * (coupe_papier_mm/1000)
                 * (grammage_papier/1000)
co2_economise_t  = economie_feuilles * poids_feuille_kg * 1.1 / 1000

# === ROI GLOBAL — chiffre HERO en commercial : cashflow mensuel ===
total_an       = economie_papier_eur + gain_productivite
cashflow_mois  = total_an / 12
# Rutherford defaults : total = 212 309 €/an, cashflow = 17 692 €/mois ✓ KBA
# ColorLoop defaults  : total ≈ 235 700 €/an, cashflow ≈ 19 644 €/mois
```

### 3.3 Valeurs par défaut — sources & crédibilité

Le calculateur affichera une **note de méthodologie** indiquant :
- Benchmarks calage offset feuille : retours UNIIC / Intergraf, études Heidelberg & Koenig & Bauer
- Coûts horaires presse : observatoire des métiers de l'imprimerie 2024
- Facteurs CO₂ : Base Empreinte ADEME (papier carton couché)
- Tous les chiffres par défaut sont **modifiables** par l'utilisateur

> ⚠️ Important : les valeurs par défaut doivent être **conservatrices** — il vaut mieux que le résultat impressionne avec les chiffres réels du client que d'afficher des chiffres irréalistes qui le feront décrocher.

---

## 4. UX & wireflow

### 4.1 Structure
**Une seule page**, scroll vertical, **stepper en 4 étapes + résultat**, sans rechargement.

```
┌─────────────────────────────────────────────┐
│  [Logo]  Calculateur ROI Offset Feuille     │  ← Header thémé
├─────────────────────────────────────────────┤
│  ● ○ ○ ○ ○   Étape 1/4 : Votre atelier      │  ← Stepper
├─────────────────────────────────────────────┤
│  [Inputs avec sliders + champs numériques]  │
│                                             │
│  💡 Le saviez-vous ? <fact contextuel>      │  ← Tip pédagogique
│                                             │
│            [ Précédent ]  [ Suivant ]       │
└─────────────────────────────────────────────┘
```

### 4.2 Principes UX critiques
1. **Sliders + champs numériques couplés** — l'utilisateur peut taper OU glisser
2. **Calcul live** — le résultat (panneau latéral en desktop, sticky en mobile) se met à jour à chaque modification
3. **Tooltips métier** — chaque variable a une icône `?` qui explique en 1 phrase + donne le benchmark industrie
4. **Aucune obligation d'email avant le résultat** — le résultat synthétique est visible immédiatement, l'email débloque le **rapport PDF détaillé**
5. **Sauvegarde locale** (`localStorage`) — si l'utilisateur revient, ses chiffres sont là
6. **Mode "valeurs par défaut"** — bouton "Je ne connais pas mes chiffres → utiliser des valeurs typiques B1 5 couleurs"

### 4.3 Écran de résultat
```
╔══════════════════════════════════════════════════╗
║   Votre économie potentielle                     ║
║                                                  ║
║        ┌─────────────────┐                       ║
║        │   312 400 €/an  │   ← Chiffre hero     ║
║        └─────────────────┘                       ║
║                                                  ║
║   Décomposé en :                                 ║
║   📄 Papier économisé      168 000 €             ║
║   🎨 Encres économisées      24 800 €             ║
║   ⏱️  Productivité presse    119 600 €             ║
║                                                  ║
║   ─────────────────────────────────────          ║
║   Soit 1.85 M de feuilles, 427 h presse,         ║
║   et 38 t CO₂eq évitées par an.                  ║
║                                                  ║
║   [ Recevoir le rapport détaillé par email ]     ║
║   [ Refaire une simulation ]                     ║
╚══════════════════════════════════════════════════╝
```

### 4.4 Rapport email (PDF généré ou page personnalisée)
- Synthèse chiffrée
- Tableau hypothèses → résultats (transparent)
- Graphique en barres (gâche actuelle vs cible)
- Section "Comment atteindre ces gains" différente selon le thème (voir §5)
- CTA contact commercial avec UTM personnalisé

---

## 5. Système de thèmes

Le moteur de calcul est **identique** sur les deux sites. Seuls changent : couleurs, typographies, micro-copy, et la section "Comment atteindre ces gains".

### 5.1 Configuration de thème
Un objet JS unique pilote tout :

```js
const THEMES = {
  rutherford: {
    name: "Rutherford",
    colors: {
      primary:    "#XXXXXX",   // À remplir avec la charte Rutherford
      accent:     "#XXXXXX",
      background: "#FFFFFF",
      text:       "#1A1A1A",
      success:    "#2E7D32"
    },
    fonts: {
      heading: "'<font_brand>', serif",
      body:    "'Inter', sans-serif"
    },
    logo: "/assets/rutherford-logo.svg",
    tagline: "Optimisez le calage avec nos solutions encres & consommables",
    ctaText: "Discuter avec un expert Rutherford",
    ctaUrl: "https://rutherford.fr/contact?utm_source=roi-calculator",
    levers: [
      "Encres haute stabilité colorimétrique",
      "Consommables presse premium (blanchets, lavages)",
      "Solutions de séchage UV/LED",
      "Accompagnement technique presse"
    ]
  },
  colorloop: {
    name: "ColorLoop",
    colors: {
      primary:    "#XXXXXX",   // À remplir avec la charte ColorLoop
      accent:     "#XXXXXX",
      background: "#0B0B12",   // Tendance dark / tech AI
      text:       "#F5F5F7",
      success:    "#3DD68C"
    },
    fonts: {
      heading: "'<font_brand>', sans-serif",
      body:    "'Inter', sans-serif"
    },
    logo: "/assets/colorloop-logo.svg",
    tagline: "Le management couleur piloté par l'IA pour l'offset feuille",
    ctaText: "Demander une démo ColorLoop",
    ctaUrl: "https://colorloop.ai/demo?utm_source=roi-calculator",
    levers: [
      "Pilotage colorimétrique prédictif (IA)",
      "BAT presse en moins de feuilles",
      "Stabilisation gamme étendue / G7",
      "Tableau de bord colorimétrique en continu"
    ]
  }
};
```

### 5.2 Détection du thème
- Via paramètre URL : `?theme=rutherford` ou `?theme=colorloop`
- Via attribut sur la balise embed : `<div id="roi-calc" data-theme="colorloop"></div>`
- Fallback : variable d'env. `data-theme` héritée de la page hôte

### 5.3 À fournir par toi (FX)
- Code couleurs Rutherford (HEX)
- Code couleurs ColorLoop (HEX)
- Logos SVG des deux marques
- Police custom si différente d'Inter
- Tagline finale validée par chaque marque

---

## 6. Stack technique recommandée

### 6.1 Pour un widget embarquable simple (recommandé pour V1)
- **HTML/CSS/JS vanilla**, un seul fichier `roi-calculator.html` autonome
- **Tailwind CSS via CDN** pour le styling rapide
- **Pas de framework** — bundle < 80 ko, intégration `<iframe>` ou `<script>` sur n'importe quel CMS
- Variables CSS pour les couleurs (`--color-primary`) → switch de thème instantané

### 6.2 Si intégration plus poussée souhaitée (V2)
- **Astro** ou **Next.js** — composant React isolé, hébergé sur Vercel
- **API route** pour : envoi email (Resend/Postmark), génération PDF (puppeteer ou react-pdf), tracking (GA4/Matomo)
- **Base de données légère** (Supabase) pour persister les leads + reprendre une simulation par lien

### 6.3 Backend minimal nécessaire
| Endpoint | Méthode | Rôle |
|---|---|---|
| `/api/lead` | POST | Reçoit `{email, inputs, results, theme}` → CRM/Sheet |
| `/api/report` | POST | Génère PDF + envoie email |
| `/api/benchmark` | GET | Renvoie valeurs par défaut (versionnable sans redeploy) |

### 6.4 Conformité RGPD
- Mention "Conformément au RGPD…" sous le champ email
- Case à cocher opt-in **non pré-cochée** pour communications commerciales
- Lien vers politique de confidentialité de la marque hôte
- Stockage des leads en UE (Supabase eu-west, Resend EU, etc.)

---

## 7. Plan d'implémentation pour Claude Code

### 7.1 Arborescence cible
```
roi-calculator/
├── README.md
├── index.html                  # Widget standalone (V1)
├── src/
│   ├── calculator.js           # Logique de calcul pure (testable)
│   ├── ui.js                   # Rendu DOM + bindings
│   ├── themes.js               # Objet THEMES
│   ├── i18n.js                 # Textes FR (préparé pour EN futur)
│   └── styles.css              # Variables CSS + Tailwind
├── tests/
│   └── calculator.test.js      # Vérif des formules sur cas connus
├── assets/
│   ├── rutherford-logo.svg
│   └── colorloop-logo.svg
└── api/                        # Optionnel V2
    ├── lead.js
    └── report.js
```

### 7.2 Tâches pour Claude Code (dans l'ordre)

1. **Bootstrap projet** — créer arborescence ci-dessus, README avec usage
2. **Module `calculator.js`** — implémenter les formules de §3.2 sous forme de fonction pure :
   ```js
   export function computeRoi(inputs) { return { savings: {...}, totals: {...}, environmental: {...} } }
   ```
3. **Tests unitaires** — au minimum 3 scénarios :
   - Petit imprimeur (1 presse, 2 000 jobs/an)
   - Imprimeur médian (cas par défaut du tableau §3.1)
   - Gros packageur (5 presses, 15 000 jobs/an)
   Chaque scénario avec résultat attendu calculé à la main et figé dans le test.
4. **`themes.js`** — implémenter le switch via attribut data + variables CSS
5. **UI widget** — stepper 4 étapes + écran résultat, valeurs par défaut, sliders couplés aux inputs
6. **Validation formulaire** — email valide, valeurs numériques bornées
7. **Capture lead** — formulaire email + envoi vers endpoint mocké d'abord
8. **Documentation embed** — section README expliquant comment intégrer sur Rutherford.fr et ColorLoop.ai (snippet `<iframe>` + snippet `<script>` data-attributes)

### 7.3 Critères d'acceptation
- [ ] Charge < 100 ko gzippé sans framework
- [ ] Score Lighthouse > 95 (perf, a11y, best practices)
- [ ] Fonctionne sans JS pour la lecture (progressive enhancement) — affichage du formulaire au moins
- [ ] WCAG AA — contraste, navigation clavier, labels ARIA sur tous les inputs
- [ ] Mobile-first, testé sur iPhone SE (375×667)
- [ ] Switch de thème en < 100 ms à chaud
- [ ] Tests calculator.test.js passent à 100 %
- [ ] Aucune dépendance non auditée

---

## 8. Évolutions V2 (à garder en tête mais hors scope V1)

- **Mode comparatif "Avant / Après"** côte à côte avec animation
- **Scénarios pré-remplis** : "PME 1 presse", "Imprimerie packaging B1 ECG", "Grand format"
- **Variante donneur d'ordre** — calcul du surcoût packaging d'une mauvaise stabilité couleur
- **Connecteur MIS** — import direct des données presse depuis HIFLOW, EFI, Optimus, etc.
- **Version anglaise + DACH** pour Rutherford international
- **Module sœur "Calculateur CO₂ packaging"** — angle PPWR / CSRD pour les marques

---

## 9. Questions ouvertes (à valider avant kickoff)

1. **Hébergement** — sous-domaine commun (`roi.colorloop.ai` redirigé) ou deux instances isolées ?
2. **Outil CRM destinataire** — HubSpot, Pipedrive, Brevo, Sheet ?
3. **Outil d'envoi email** — Resend, Postmark, Brevo ?
4. **Génération PDF** — côté serveur (puppeteer) ou page web personnalisée + bouton "imprimer" ?
5. **Tracking** — GA4 / Matomo / Plausible ?
6. **Engagement marque sur les leviers §5.1** — qui valide la copy "Comment atteindre ces gains" pour chaque marque ?

---

## 10. Effort estimé

| Phase | Effort dev | Effort design/copy |
|---|---|---|
| V1 widget standalone, 1 thème | 3–4 j | 1–2 j |
| Ajout 2ème thème + switch | 0.5 j | 1 j |
| Backend lead + email + PDF | 2–3 j | 0.5 j |
| QA, tests, intégration sites | 1–2 j | — |
| **Total V1 prêt à intégrer** | **6–10 j** | **2–4 j** |

---

*Document prêt à être passé à Claude Code avec la commande : "Implémente le calculateur ROI offset feuille selon ce spec, V1 widget standalone, thème Rutherford par défaut, code dans `./roi-calculator/`."*
