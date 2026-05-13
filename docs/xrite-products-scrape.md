# X-Rite — Product Scrape (IntelliTrax2, IntelliTrax Pro, MeasureColor, Offset360, eXact2)

## Metadata

- **Scrape date:** 2026-05-13
- **Source domain:** xrite.com (primary locale rendered: fr-fr — X-Rite serves localized URLs; English equivalents exist at the same paths under the canonical `/categories/...` slugs without locale prefix)
- **Pages captured per product:**
  - IntelliTrax2: 3 (product page, support page, original-IntelliTrax support page for discontinuation context, plus 2016 press release)
  - IntelliTrax Pro (resolved as **IntelliTrax2 Pro**): 3 (product page, support page, 2021 press release)
  - MeasureColor (resolved as **MeasureColor Production**): 1 (product page)
  - Offset360: 1 (solution landing page at `/page/offset360`)
  - eXact2: 6 (eXact 2 product page, eXact 2 Plus, eXact 2 Xp, eXact family overview, support page, upgrade page, 2022 press release)
- **Total pages captured:** 14
- **Products not found / disambiguated:**
  - **"IntelliTrax Pro"** as a standalone name does not exist on xrite.com. The product matching that description is **IntelliTrax2 Pro** (model 2900PRO), introduced March 1 2021. The original **IntelliTrax** (model 2246) is **discontinued** per https://www.xrite.com/service-support/product-support/scanning-instruments/intellitrax (page states: "This product has been discontinued. Talk to a color expert today about the IntelliTrax 2 to upgrade your color management solution!").
  - **"MeasureColor"** alone resolves to **MeasureColor Production** on xrite.com (model MCN-RPTS). No separate "MeasureColor Reports" product page was found — Reports is referenced as an integration / module of Production.
  - **Offset360** is not a categorized product but a solution-bundle page at `/page/offset360` combining IntelliTrax2 + MeasureColor + Rutherford closed-loop technology.

## Table of contents

1. [IntelliTrax2](#1-intellitrax2)
2. [IntelliTrax2 Pro (resolves "IntelliTrax Pro")](#2-intellitrax2-pro-resolves-intellitrax-pro)
3. [MeasureColor Production (resolves "MeasureColor")](#3-measurecolor-production-resolves-measurecolor)
4. [Offset360](#4-offset360)
5. [eXact 2 (family: eXact 2, eXact 2 Xp, eXact 2 Plus)](#5-exact-2-family-exact-2-exact-2-xp-exact-2-plus)
6. [Appendix — Raw URLs discovered](#appendix--raw-urls-discovered)

---

## 1. IntelliTrax2

### 1.1 https://www.xrite.com/categories/scanning-instruments/intellitrax2

**Breadcrumb:** Home > Product Categories > Scanning Instruments > X-Rite IntelliTrax2

**Product name / model:** IntelliTrax2 (Model 2900)

**Tagline / hero copy:** "First desktop scanning solution" — automated color measurement for offset printing, delivering consistent results and precise quality control.

**Headline metrics:**
- Scan time: < 10 seconds
- Minimum color-bar height: 2.0 mm
- Measurement geometry: 45:0

**Value propositions:**
1. Automates color measurement for offset printing with consistent, precise results.
2. Scans control bars as narrow as 2 mm in seconds.
3. Integrates with MeasureColor and Rutherford for a complete production workflow.

**Core features & benefits:**
- **Automatic precision tracking** — automated color-bar detection streamlines printing operations with fast sheet positioning and accurate measurements.
- **Non-contact measurements** — contactless technology ensures precise readings while preventing smudges and scratches.
- **First-class service & support** — international service centers and 40+ certified service partners offering technical support, ISO certification, maintenance contracts, and training.
- **Closed-loop automation** — integration with Rutherford or similar systems enables automatic ink-roller adjustments using real-time spectral press data, accelerating setup times and reducing paper waste.
- **MeasureColor software integration** — converts color data into actionable insights with instant Delta E, density, and tonal values; provides detailed reports and trend analysis.

**Detailed specifications:**

| Specification | Details |
|---|---|
| Media thickness | Max 1.0 mm |
| Measurement geometry | 45°/0° ring illumination (ISO 5-4:2009) |
| Conditions | M0, M1, M3 |
| Spectral range | 400–700 nm (10 nm intervals) |
| Measurement standards | ISO 5-4:2009, ISO 13655:2009 |
| Inter-instrument agreement | Avg 0.3 ΔEab, Max 0.45 ΔEab |
| Light source | Tungsten (Type A) + UV LED |
| Measurement background | Black (ISO 12647-2/3 compliant) |
| Patch sizes | 2×3 mm (small), 3×3 mm (medium/polarizer) |
| Scanning lengths | 29"–65" (74–165 cm) |
| Max sheet sizes | 33.1"–66.9" depending on track |
| Scanning speed | 170 mm/sec |
| Color-bar zone | Within 38 mm from sheet edge |
| Repeatability (density) | ±0.01 D white; ±0.02 D cyan/magenta/black; ±0.03 D polarizer |
| Repeatability (white) | 0.15 dE max |
| Single-pass scanning | M0/M1 or M0/M3 or M1/M3 |
| Operating temperature | 10–35 °C |
| Storage temperature | −20 to 50 °C |
| Humidity | 30–85 % RH (non-condensing) |
| Power supply | 100–240 VAC, 50/60 Hz |
| Connectivity | Ethernet |
| Density range | 0.0–3.0 D |
| Calibration | Automatic on integrated, covered white reference |
| Closed-loop support | Yes |
| NetProfiler integration | Yes |
| PantoneLIVE support | Yes |
| SDK available | Yes |
| Warranty | 1 year |
| OS requirements | Windows 10/11 (64-bit, Intel only) |

**Target applications:** commercial print and flexible-packaging converters requiring fast, precise color control at press.

**Configuration options:** head type, track length, aperture, foot pedal.

**Key facts:**
- Prevents smudges/scratches with contactless measurement
- Automatic bar alignment with look-ahead sensor
- Reduces paper waste through closed-loop integration
- Compatible with Rutherford and MeasureColor
- Multiple scanning track lengths available

### 1.2 https://www.xrite.com/service-support/product-support/scanning-instruments/intellitrax2

**Breadcrumb:** Home > Service & Support > Product Support > Scanning Instruments > IntelliTrax2

**Software downloads:**
- IntelliTrax2 Software v2.1.1.3
- ToolCrib for IntelliTrax2 v2.2
- NetProfiler 3 v3.6.2.1

**Firmware:**
- ITX2 Firmware v1.03 (Build 531_307_923)

**Training:** Color Theory (Understanding the Numbers of Color); Fundamentals of Color and Appearance seminar; customized on-site training.

**Knowledge base:** IntelliTrax General Maintenance; Manually Changing the IP Address to System Default.

### 1.3 https://www.xrite.com/service-support/product-support/scanning-instruments/intellitrax (original IntelliTrax, captured for discontinuation context)

**Status:** Discontinued. Page text: *"This product has been discontinued. Talk to a color expert today about the IntelliTrax 2 to upgrade your color management solution!"*

**Model #:** 2246

**Legacy downloads still available:**
- IntelliTrax System Firmware v09609
- IntelliTrax Software v1.7.1.69
- XRGA G7 Library 2012, XRGA ISO Library 2012, XRGA Japan Color Library 2012
- G7 Kit for X-Rite IntelliTrax Auto Scanning

### 1.4 https://www.xrite.com/about-us/news-events/press-releases/xrite-announces-intellitrax2-automated-color-management-solution

**Date:** May 16, 2016 — Grand Rapids, Michigan. Launch tied to drupa 2016.

**Announced features:** automated non-contact color measurement for sheet-fed and corrugated; M1 condition support; NetProfiler integration; <15 s automatic control-strip analysis; G7 and PSO/FOGRA compliance; BestMatch ink-density recommendations; upgrade path for existing IntelliTrax users.

**Quoted:** Chris Winczewski, VP Product Marketing — "This new version brings features that will help reduce setup time and waste during a print run."

### IntelliTrax2 — Related links not captured

PDFs (skipped per instructions):
- `/-/media/xrite/files/literature/l10/l10-600_l10-699/l10-620_scanning_system_comparison/l7-620_scanning_system_comparison_fr.pdf` — Scanning Solutions Comparison
- `/-/media/xrite/files/literature/l7/l7-700_l7-799/l7-722-pressroom-closed-loop-brief/l7-722_pressroomclosedloop-applicationbrief_fr.pdf` — Pressroom Closed Loop Application Brief
- `/-/media/xrite/files/literature/l7/l7-700_l7-799/l7-740-pro-automated-scanning-solutions/l7-740_pro_automated_scanning_solutions_brochure_fr.pdf` — Automated Scanning Solutions Brochure
- `/-/media/xrite/files/literature/l7/l7-600_l7-699/l7-619_intellitrax2_spec_sheet/l7-619_intellitrax2_specs_en.pdf` — IntelliTrax2 Spec Sheet

---

## 2. IntelliTrax2 Pro (resolves "IntelliTrax Pro")

> Note: "IntelliTrax Pro" is not a current X-Rite SKU. The closest match — and what the user likely meant — is **IntelliTrax2 Pro**, announced March 1, 2021. There is no other product called "IntelliTrax Pro" on xrite.com.

### 2.1 https://www.xrite.com/categories/scanning-instruments/intellitrax2-pro

**Breadcrumb:** Home > Product Categories > Scanning Instruments > IntelliTrax2 Pro

**Product name / model:** IntelliTrax2 Pro — Model 2900PRO

**Tagline:** "First automated color-bar scanning solution at the control console."

**Value propositions:**
- Reduces setup time by over 40 %
- G7®-certified printing control system (Idealliance® certified)
- Supports PSO and ISO printing specifications
- End-to-end connected solution linking prepress, press operators, and brands
- Optimizes quality-control programs significantly

**Core features & benefits:**
- **Real-time guidance** — live performance visibility and immediate target-color recommendations; reporting to ColorCert Scorecard Server.
- **G7 certification** — process-control certified G7 by Idealliance.
- **Pantone connectivity** — direct access to current Pantone libraries and PantoneLIVE digital standards (optional licensing).
- **Integrated closed-loop support.**
- **Software integration** — connects to ColorCert for on-screen results with zone-specific ink-adjustment guidance.

**Primary applications:** design/prepress, formulation, production, quality control, specification.

**Complete technical specifications:**

| Specification | Details |
|---|---|
| Scanning lengths | 29" (74 cm), 32" (81 cm), 40" (102 cm), 44" (112 cm), 56" (142 cm), 65" (165 cm) |
| Scanning speed | 170 mm/sec |
| Scanning zone | Color bar within 38 mm from sheet edge |
| Media thickness | Max 1.0 mm |
| Patch sizes | Small: 2×3 mm; Medium: 3×3 mm; Polarizer: 3×3 mm |
| Color-difference metrics | CIE ΔE* (1976), ΔE CMC, CIE ΔE* (2000), CIE ΔE* (1994) |
| Color spaces | CIE L*a*b*, CIE L*C*h° |
| Density range | 0.0–3.0 D |
| Density standards | Status A, E, I, T, Tx, Ex, Hi-Fi |
| Spectral engine | DRS spectral engine |
| Spectral range | 400–700 nm at 10 nm intervals |
| Measurement geometry | 45°/0° ring illumination (ISO 5-4:2009) |
| Measurement conditions | M0, M1, M3 |
| Viewing angles | 2° and 10° |
| Ink/well capacity | Density: up to 8; Spectral: up to 16 |
| Short-term repeatability (density) | White: ±0.01 D max; CMK: ±0.02 D @ 1.8 D; Yellow: ±0.02 D @ 2.0 D; Polarizer: ±0.03 D @ 1.8 D |
| Short-term repeatability (white) | 0.15 dE max |
| Inter-instrument agreement | 0.3 dE*ab |
| Illuminants | A, C, D50, D65, D75, F2, F7, F11, D12 |
| Light source | Gas-filled tungsten (Type A) + UV LED |
| Measurement background | Black per ISO 12647-2 and 3 |
| White reference | Integrated, covered automatic calibration |
| Single-pass scanning | M0/M1 or M0/M3 or M1/M3 |
| Contact during measurement | No contact |
| Display resolution | Min 17" touchscreen 1280×1024; recommended 22" 1920×1080 |
| Connectivity | Ethernet |
| Software modes | Density / Spectral |
| Import/export formats | CxF3, jtl, cbl |
| Industry standards | ISO 5-4:2009(E), ISO 13655:2009 |
| G7 certification | Yes |
| NetProfiler support | Integrated |
| PantoneLIVE support | Yes |
| Software SDK | Available |
| Supported languages | Chinese (Simplified/Traditional), English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Spanish |
| Operating temperature | 10–35 °C |
| Storage temperature | −20 to 50 °C |
| Humidity | 30–85 % RH (non-condensing) |
| Power supply | 100–240 VAC, 50/60 Hz |
| Warranty | 1 year |
| OS | Windows 10/11 (64-bit, Intel only) |
| Included | Vacuum pump, cabling, power supply, Ethernet cable, software CD, manuals, device certificate |
| Configuration options | Head type, track length, aperture, handheld, foot switch |

### 2.2 https://www.xrite.com/service-support/product-support/scanning-instruments/intellitrax2-pro

**Software:** IntelliTrax2 Pro Software v3.4.3.4; NetProfiler 3 v3.6.0

**Firmware:** ITX2 Firmware v1.03 (Build 531_307_923)

**Training:** customized on-site; FOCA online; "Understanding the Numbers of Color."

**Knowledge base:** IntelliTrax General Maintenance; Manually Changing IP Address.

### 2.3 https://www.xrite.com/about-us/news-events/press-releases/introducing-itx2-pro-exact-auto-scan-pro

**Date:** March 1, 2021 — Grand Rapids, Michigan.

**Announced:** Pro versions of IntelliTrax2 and eXact Auto-Scan. Real-time feedback to press operators; ColorCert Suite one-click score submission to brand owners; G7® Press Control Certification; automated scanning; PantoneLIVE compatibility; reduced makeready times via preloaded job targets.

**Quoted:**
- Ray Cheydleur (Printing & Imaging Portfolio Manager, X-Rite): "As more consumer package goods (CPG) brands implement packaging quality control programs… converters and package printers need color measurement solutions that integrate directly with scorecard systems."
- Mike Grady (VP Global Partnerships, Idealliance): "G7® Press Control System Certification… helps printers simplify workflow processes and capture valuable time savings."

### IntelliTrax2 Pro — Related links not captured

PDFs:
- `/-/media/xrite/files/literature/l15/l15-000_l15-099/l15-052_my_xrite_flyer/l15-052_my_xrite_flyer_en.pdf` — My X-Rite flyer
- `/-/media/xrite/files/literature/l7/l7-700_l7-799/l7-722-pressroom-closed-loop-brief/l7-722_pressroomclosedloop-applicationbrief_fr.pdf` — Pressroom Closed Loop brief
- `/-/media/xrite/files/literature/l7/l7-700_l7-799/l7-740-pro-automated-scanning-solutions/l7-740_pro_automated_scanning_solutions_brochure_fr.pdf` — Automated Scanning Solutions brochure

---

## 3. MeasureColor Production (resolves "MeasureColor")

> Note: On xrite.com the product surface is **MeasureColor Production** (model MCN-RPTS). MeasureColor Reports is mentioned as an integration / reporting layer, not a separately published product page. X-Rite acquired ColorWare's MeasureColor business in November 2024 (per user context).

### 3.1 https://www.xrite.com/categories/formulation-and-quality-assurance-software/measurecolor-production

**Breadcrumb:** Home > Product Categories > Formulation and Quality Assurance Software > MeasureColor Production

**Product name / model:** MeasureColor Production — MCN-RPTS — status "New" — price on request.

**Tagline:** "Print Quality Control Software."

**Hero copy / value props:**
- "Maximize your printing room efficiency with MeasureColor"
- Faster, more consistent color throughout printing
- Reduces setup time and improves operational efficiency
- Real-time color feedback for data-driven decisions
- Easy-to-use interface, simplifying training and adoption
- Visual indicators for actionable feedback
- Client-server solution ensuring complete data ownership and security

**Key features:**
- **Unified platform** — single platform for flexo, offset, and digital with specialized modules for prepress, pressroom, and QA.
- **ChromaTrack** — analyzes and calculates optimal color matching with DeltaE, determines suitable ink-density corrections, informs operators of target density and expected DeltaE.
- **MeasureColor Reports integration** — gathers, analyzes, and visualizes print-quality data with automated transfer and customized reports.
- **Quick job setup** — jobs configured in under 30 s with presets; under 10 s with XML automation.
- **Seamless data exchange** — ICC, CXF, CGATS, MIF, MCX, PQX, CSV, XML.
- **Hardware integration** — eXact 2, IntelliTrax2, i1Pro 3, and many others.

**Applications:** commercial print, packaging converters, ink color-formulation labs, prepress, metal packaging.

**Color metrics & spaces:**
- Differences: ΔE, ΔEcmc, ΔE94, ΔE00, ΔDensity, ΔLab, ΔLCh, ΔH, ΔOpacity, wΔL, wΔCh, ΔTVI (dot gain)
- Color spaces: CIE L*a*b*, CIE L*C*h*(ab)

**Technical specifications:**

| Category | Specification |
|---|---|
| Connectivity | USB, Bluetooth, Wi-Fi (eXact 2) |
| Database | MS SQL Server 2016 (minimum) |
| Display resolution | 1920×1080 or greater |
| Storage | Server: 20 GB+; Client: 4 GB+ |
| RAM | Server: 16 GB+; Client: 8 GB+ |
| Processor | 1 GHz min / 2 GHz recommended (Server: Core i5+; Client: Core i3+) |
| Operating systems | Windows 10 (64-bit), Windows 11 (64-bit; Intel only); Mac via VM |
| Illuminants | A, B, C, D50, D55, D65, D75, F1–F12 |
| Observation angles | 2°, 10° |
| Measurement conditions | Reflectance, M0, M1, M2, M3, SPIN, SPEX |
| Configuration options | Basic, QA, Pro, Packaging, Reports |
| Supported instruments | eXact, eXact 2, Ci6x, IntelliTrax 2, eXact Auto-Scan, i1Pro 2, i1Pro 3, SpectroDens, SpectroJet, SpectroDrive, MYIRO-1, Nix Spectro 2, Nix Spectro L, Variable Spectro 1, BST iPQ-Spectral, Veoria DeltaOne, Veoria DeltaWeb, HDM ImageControl, Komori PDC, KBA Ergotronic |
| Languages | English, French, German, Spanish, Italian, Polish, Portuguese, Finnish, Swedish, Czech, Dutch, Turkish, Japanese, Simplified/Traditional Chinese, Vietnamese, Korean |
| Internet connectivity | Yes — activation, reporting, PantoneLIVE; proxy configuration available |
| NetProfiler support | Yes |
| PantoneLIVE support | Yes |
| Security | Administrator rights required for installation/updates only |

**Customer testimonials on page:**
- Rick Louthian, Digital Analyst, WestRock: "Excellent product! User-friendly. Offset, flexo, and digital modules perfectly suit customer needs. Development team listens and implements necessary updates."
- Tim Rooney, Technical Director, International Packaging: "Complete printing room solution. Extremely simple interface enables non-technical users to employ it effectively. X-Rite provides excellent support."

**Key facts:**
- Setup speed: <30 s with presets, <10 s with XML automation
- Client-server architecture for data ownership
- Cross-technology: flexo, offset, digital
- 14+ supported measurement devices
- 16 supported languages
- File formats: ICC, CXF, CGATS, MIF, MCX, PQX, CSV, XML
- MIS-system integration

### MeasureColor Production — Related links not captured

PDFs:
- `/-/media/xrite/files/literature/l10/l10-700_l10-799/l10-762_measurecolor_production_sell_sheet/l10-762_measurecolor_production_en.pdf` — MeasureColor Production sell sheet

Webinars (page-only):
- Automated Color Management for Offset Printing
- Evolving Color Control: Color Master to MeasureColor
- Navigating Print Standards: Industry vs. Custom
- Master Color Quality with MeasureColor Production
- Optimize Print Quality and Process with Data-Driven Insights
- Offset Printing Reinvented: Smarter, Greener, More Precise
- Solving Top Pressroom Challenges with Smarter Color Control
- Reproducing Packaging with Digital Color Accuracy
- Modernize Your Pressroom with X-Rite and Rutherford CIP3
- Solving Offset Pressroom Challenges with Offset360
- A Guide to Digital Standards

---

## 4. Offset360

### 4.1 https://www.xrite.com/page/offset360

**Breadcrumb:** Home > Offset360 Optimization

**Hero heading (FR rendering):** "Offset360 : la maîtrise totale de votre environnement offset."

**Hero copy:** Discover how to optimize reading precision, color accuracy, and efficiency in your pressroom through X-Rite color experts' guidance.

**Core problem statement on page:** *"The real problem may come from your reading system, not your press."* Many printers still use obsolete reading systems or expensive OEM solutions with limited capabilities, causing color inconsistencies, material waste, and costly setup delays.

**What Offset360 is:** A connected ecosystem that optimizes offset production workflows by combining three integrated components:
- **IntelliTrax2** scanning system (press-side reading)
- **MeasureColor** process-control software
- **Rutherford** closed-loop presetting technology

This delivers precise color control, modernized workflows, and specialized support services.

**Implementation process (3 stages):**
1. **Connect & collaborate** — X-Rite color experts guide a collaborative process where users communicate production objectives and color challenges.
2. **Assess & configure** — current-setup evaluation ensures compatibility; ideal configuration designed; measurable performance targets established.
3. **Proof of concept & support** — solution installation, team training, results validation. Users can cancel anytime if targets aren't met. Annual audits by Solutions Architects ensure ongoing performance.

**Key benefits & value propositions:**

| Benefit | Description |
|---|---|
| Modern reading system, reduced costs | Modernize color control via flexible financing without new-press investment; save up to 60 % on initial costs |
| Press-side process control | Real-time spectral data and visual notation on press; reduce stops, waste, color variation |
| Data-driven improvement | Transform color data into actionable insights across presses/sites; rapid problem detection |
| Included expert support | Free annual audit by Solutions Architects; guaranteed optimal performance and continuous improvement |
| Open, flexible architecture | Works with all brands/workflows without vendor lock-in costs; compatible with any press type |

**Included components:**
- IntelliTrax2 scanning system
- MeasureColor software
- Rutherford closed-loop presetting technology
- Expert color-consultant support
- Annual audit service (included)
- Professional installation and training

**Tagline used on page:** *"Your press shouldn't just print. It should measure, analyze, and improve. Transform press data into actionable intelligence and measurable ROI."*

**Featured product links on page:**
- IntelliTrax2 — `/categories/scanning-instruments/intellitrax2`
- MeasureColor — `/categories/formulation-and-quality-assurance-software/measurecolor-software`
- MeasureColor Production — `/categories/formulation-and-quality-assurance-software/measurecolor-production`
- ColorXRA 45 — `/categories/inline-spectrophotometers/colorxra-45`

### Offset360 — Related links not captured

PDFs:
- `/-/media/xrite/files/literature/l7/l7-800_l7-899/l7-820-scanning-solutions-bundle-brochure/l7-820-scanning-solutions-bundle-brochure_en.pdf` — Offset360 brochure
- `/-/media/xrite/files/literature/l7/l7-800_l7-899/l7-821-scanning-solutions-bundle-sellsheet/l7-821-scanning-solutions-bundle-sellsheet_en.pdf` — Offset360 product sheet

---

## 5. eXact 2 (family: eXact 2, eXact 2 Xp, eXact 2 Plus)

### 5.1 https://www.xrite.com/categories/portable-spectrophotometers/exact-family

**Breadcrumb:** Home > Product Categories > Portable Spectrophotometers > eXact Family

**Hero copy:** The eXact series is "the most precise, consistent and complete solution on the market," covering paper, film, flexible packaging, and other substrates.

**Variants:**

| Variant | Target use | URL |
|---|---|---|
| eXact 2 | Paper, corrugated, flat board | `/categories/portable-spectrophotometers/exact-2` |
| eXact 2 Xp (New) | All film types | `/categories/portable-spectrophotometers/exact-2-xp` |
| eXact 2 Plus | All printing and packaging substrates | `/categories/portable-spectrophotometers/exact-2-plus` |

**Common features across the family:** two-step touchscreen interface; Wi-Fi connectivity; digital magnification; integrated Pantone Master libraries with PantoneLIVE access; NetProfiler fleet management.

### 5.2 https://www.xrite.com/categories/portable-spectrophotometers/exact-2

**Breadcrumb:** Home > Product Categories > Portable Spectrophotometers > eXact 2

**Product name / model:** eXact™ 2 Portable Spectrophotometer — ETV-XRaSDbc

**Subtitle:** "Pour les supports en papier, carton ondulé et carton plat" (paper, corrugated, flat board).

**Hero copy (FR):**
- "Identifiez le point de mesure précis avec la cible de visée par caméra Mantis™"
- "Conception intuitive et écran 30 % plus grand facilitant l'apprentissage et l'utilisation"
- "Zone de mesure à faible contact pour éviter toute contamination par des encres humides"

**Value propositions:**
1. Next-generation color measurement — enhanced precision and speed, video measurement, Wi-Fi, X-Rite Link fleet management.
2. Mantis camera targeting — precise patch location, 30 % larger display, Digital Loupe.
3. Connected workflow — rapid colorimetric data, integrated QA/QC, fleet-wide Wi-Fi across multiple sites.
4. M0/M1/M2/M3 rapid measurement — single measurement alternates spot/scanning via integrated wheels and patch recognition (17 % speed improvement on eXact 2 Plus).
5. Global service & support — worldwide centers, 40+ certified partners, ISO certification, training, fleet-management dashboards via My X-Rite.

**Specifications:**

| Parameter | Value |
|---|---|
| Inter-instrument agreement | Avg 0.25 ΔEab; Max 0.45 ΔEab (M3: 0.55 ΔEab) |
| Measurement time | < 1 second |
| Measurement geometry | 45°/0° ring illumination (ISO 5-4:2009) |
| Apertures | 1.5 mm, 2 mm, 4 mm, 6 mm |
| Light source | Tungsten gas-filled (Type A) + UV LED |
| Spectral range | 400–700 nm (10 nm intervals) |
| Display | Color touchscreen, 320×240 pixels |
| Supported substrates | Paper, corrugated, carton board |
| Dimensions | 21.2 × 7.7 × 7.7 cm |
| Weight | 620 g |
| Battery | Lithium-Ion, 3.63 VDC, 4750 mAh |
| Operating temperature | 10–35 °C |
| Humidity | 30–85 % RH (non-condensing) |
| Connectivity | USB-C, Wi-Fi |
| Color-difference calcs | ΔE* (1976), ΔECMC, ΔE* (2000), ΔE* (1994) |
| Color spaces | CIE L*a*b*, CIE L*C*h° |
| Standards | ISO 5-4:2009, ISO 13655:2017 |
| Illuminants | A, C, D50, D55, D65, D75, F2, F7, F11, F12 |
| Observation angles | 2°, 10° |
| Warranty | 1 year (2 years NetProfiler with maintenance) |
| G7 certification | Yes (templates) |

**Key technologies:**
- **Mantis™** — patented camera targeting ("Avec l'eXact 2, vous mesurez ce que vous voyez").
- **Digital Loupe** — rapid zoom for inspection and image capture for traceability.
- **Print Clone integration** — AI-driven automated color matching for existing packaging (powered by Esko).
- **BestMatch** — integrated color matching.
- **G7-ready** templates (G7, PSO, Japan Color).

**Applications:** commercial print, packaging converters, ink color formulation, automotive, plastics, paint & coatings, textiles, cosmetics, building materials.

### 5.3 https://www.xrite.com/categories/portable-spectrophotometers/exact-2-xp

**Breadcrumb:** Home > Product Categories > Portable Spectrophotometers > eXact 2 Xp

**Product name / model:** eXact™ 2 Xp — ETV-XRaXPbc — status "New."

**Hero copy:** Designed for "all types of films":
- Position the device in any direction for consistent measurement.
- Measure in spot or scanning mode using integrated wheels.
- Accurate CMYK and solid color printing leveraging industry standards.

**Value prop:** matches all eXact 2 features and adds CMYK + solid color measurement on flexible films, plastics, opaque white aluminum sheets, and other unique substrates.

**Headline metrics:** 0.25 ΔEab inter-instrument agreement; < 1 s measurement; 45:0 geometry.

**Substrate / measurement capabilities:** polyester, films, aluminum sheets with opaque white background; polarizing filter for consistent measurement regardless of orientation; single-measurement M-mode readings simultaneously across M0, M1, M2, M3 (per ISO 13655:2017).

**Specifications:**

| Specification | Detail |
|---|---|
| Aperture options | 1.5 mm, 2 mm, 4 mm, 6 mm |
| Battery | Lithium-Ion, 3.63 VDC, 4750 mAh |
| Measurement geometry | 45°:0° ring illumination (ISO 13655:2017) |
| Spectral range | 400–700 nm (10 nm intervals) |
| Color spaces | CIE L*a*b*, CIE L*C*h° |
| Density range | 0.0–3.0 D |
| Standards memory | 50,000+ standards |
| Display | 800 × 480 color touchscreen |
| Connectivity | USB-C, Wi-Fi |
| Dimensions | 21.2 × 7.7 × 7.7 cm |
| Weight | 620 g |
| Operating temperature | 10–35 °C |

**Short-term repeatability:** Density ±0.01 D for CMYK (Status E/T @ 2.0 D); White 0.02 ΔEab std deviation.

**Included:** USB-C cable + USB-A adapter, power supply / charging dock, software, documentation, Quick Start Guide, carrying case, ISO 9000 certificate.

### 5.4 https://www.xrite.com/categories/portable-spectrophotometers/exact-2-plus

**Breadcrumb:** Home > Product Categories > Portable Spectrophotometers > eXact 2 Plus

**Product name / model:** eXact™ 2 Plus — ETV-XRaPLbc

**Tagline:** "Pour tous les supports d'impression et d'emballage."

**Hero value props:**
- The premier portable instrument versatile enough to alternate between polarized and non-polarized measurements.
- 100 % operator confidence with Mantis™ camera targeting.
- Extended range, speed, and security thanks to embedded Wi-Fi.

**Core features:**
1. Complete eXact 2 functionality for paper, flexible, and unique substrates.
2. Specialized modes: opacity, metamerism, color intensity.
3. Polarized / non-polarized switching.
4. Simultaneous M0/M1/M2/M3 in a single measurement.
5. Mantis™ camera targeting.
6. Digital Loupe.
7. 800 × 480 touchscreen.
8. Contactless measurement capability.
9. Embedded Wi-Fi for fleet management.
10. Scanning with pattern recognition.

**Specifications:**

| Specification | Value |
|---|---|
| Geometry | 45:0 ring illumination |
| Inter-instrument agreement | 0.25 ΔEab average |
| Measurement time | < 1 s |
| Apertures | 1.5 mm, 2 mm, 4 mm, 6 mm |
| Spectral range | 400–700 nm |
| Spectral interval | 10 nm |
| Dimensions | 21.2 × 7.7 × 7.7 cm |
| Weight | 620 g (1.4 lb) |
| Battery | Lithium-Ion, 3.63 VDC, 4750 mAh |
| Operating temperature | 10–35 °C |
| Humidity | 30–85 % RH (non-condensing) |
| Illuminants | A, C, D50, D55, D65, D75, F2, F7, F11, F12 |
| Color spaces | CIE L*a*b*, CIE L*C*h° |
| Density range | 0.0–3.0 D |
| Density standards | Status A, E, I, T, G |
| Scanning length | Max 1,120 mm (44") |
| G7 certification | Yes (templates) |
| Memory capacity | 50,000+ standards |
| Warranty | 1 year |
| Included software | NetProfiler 2 years (ISO 9001-compliant) |

### 5.5 https://www.xrite.com/service-support/product-support/portable-spectrophotometers/exact-2

**Software:** eXact 2 Suite v1.3.0; v1.2.0; eXact 2 Driver v3.0.0; NetProfiler 3 v3.6.0; NetProfiler Online.

**Firmware:** eXact 2 Firmware v1.6.178.

**Manuals (PDFs noted, not fetched):** eXact 2 Quick Start Guide; eXact 2 User Guide (FR); IT Support Guide (Wi-Fi, ports, URLs); Battery Charging & Device Performance bulletin; Media Accessory Installation Guide (ETV-504); Media Ring Calibration Template (ETV-505).

**Knowledge base:** M0/M1/M2/M3 conditions; QC Set Report troubleshooting in iQC Print.

### 5.6 https://www.xrite.com/page/upgrade-to-exact-2

**Upgrade value props (12 items):**
1. Ease of use — optimized features and intuitive interface.
2. Contamination reduction — contactless aperture.
3. Robust ergonomic design.
4. Video targeting via embedded high-res camera.
5. Print inspection via 10× digital loupe with sync.
6. Control-strip scanning (single-step from patch to range).
7. Secure Wi-Fi from the device.
8. Workflow integration with QA / formulation software.
9. Enhanced navigation, 30 % larger display.
10. Preloaded color standards + PantoneLIVE.
11. Free training resources (e-learning, videos).
12. Robust build.

### 5.7 https://www.xrite.com/about-us/news-events/press-releases/x-rite-announces-exact-2

**Date:** June 14, 2022 — Grand Rapids, Michigan.

**Key features announced:** first spectrophotometer with patented Mantis camera-based aiming; 30 % larger display; non-contact (incl. wet ink); three models (eXact 2, eXact 2 Xp, eXact 2 Plus); integrated Wi-Fi to software ecosystem; two-step max touchscreen; digital zoom with image capture/inspection.

**Quoted:**
- Chris Brooks, X-Rite President: "eXact 2 is a complete solution at the center of an integrated color production workflow."
- Ray Cheydleur, Product Portfolio Manager: "With Mantis camera targeting, operators have certainty of measuring the right area every time."

**Ecosystem integrations:** InkFormulation, ColorCert Suite, PantoneLIVE, NetProfiler; new X-Rite Link cloud dashboard for real-time instrument monitoring; G7, PSO, Japan Color standards; "17 % faster" color matching to quality standards.

### eXact 2 — Related links not captured

PDFs:
- `/-/media/xrite/files/literature/l7/l7-700_l7-799/l7-764-exact-2-brochure/l7-764-exact-2-brochure_en.pdf` — eXact 2 Brochure
- `/-/media/xrite/files/literature/l7/l7-700_l7-799/l7-738_1-exact-2-sell-sheet/exact2-specsheet_fr.pdf` — eXact 2 Specifications Sheet
- `/-/media/xrite/files/literature/l10/l10-700_l10-799/l10-721_exact-2_why_upgrade_brochure/l10-721_exact-2_why_upgrade_brochure_fr.pdf` — Why Upgrade to eXact 2
- `/-/media/xrite/files/literature/l15/l15-000_l15-099/l15-052_my_xrite_flyer/l15-052_my_xrite_flyer_en.pdf` — My X-Rite flyer
- `/-/media/xrite/files/literature/l4/l4-1764_netprofiler_for_exact_2/netprofiler-for-exact-2-flyer-fr.pdf` — NetProfiler for eXact 2 flyer

---

## Appendix — Raw URLs discovered

### IntelliTrax2
- https://www.xrite.com/categories/scanning-instruments/intellitrax2
- https://www.xrite.com/service-support/product-support/scanning-instruments/intellitrax2
- https://www.xrite.com/service-support/product-support/scanning-instruments/intellitrax (legacy, discontinued)
- https://www.xrite.com/about-us/news-events/press-releases/xrite-announces-intellitrax2-automated-color-management-solution
- https://www.xrite.com/service-support/downloads/i/intellitrax2-software-v2_1_1_3
- https://www.xrite.com/service-support/downloads/i/intellitrax2-software-v2_1_0_291
- https://www.xrite.com/service-support/downloads/t/toolcrib-for-intellitrax2-v2_2
- https://www.xrite.com/service-support/downloads/n/netprofiler_3_v3_6_2_1
- https://www.xrite.com/service-support/downloads/i/itx2_firmware_loader_v1_03_build_531_307_923
- https://www.xrite.com/service-support/intellitrax_general_maintenance
- https://www.xrite.com/service-support/manually_changing_the_ip_address_to_system_default
- https://www.xrite.com/learning-color-education/using-our-solutions/automate-offset-press
- https://www.xrite.com/page/archive/intellitrax2-trade-in
- https://www.xrite.com/promotions/2023/2023-october/free-x-rite-closed-loop-software-with-intellitrax2-purchase

### IntelliTrax2 Pro (= "IntelliTrax Pro")
- https://www.xrite.com/categories/scanning-instruments/intellitrax2-pro
- https://www.xrite.com/service-support/product-support/scanning-instruments/intellitrax2-pro
- https://www.xrite.com/about-us/news-events/press-releases/introducing-itx2-pro-exact-auto-scan-pro

### MeasureColor Production
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/measurecolor-production
- https://www.xrite.com/service-support/product-support/formulation-and-qc-software/measurecolor-production
- https://www.xrite.com/learning-color-education/using-our-solutions/centralized-color-quality-and-reporting-for-pressroom-managers
- https://www.xrite.com/learning-color-education/webinars/master-color-quality-with-measurecolor-production
- https://www.xrite.com/learning-color-education/videos/simplify-pressroom-color-management-with-measurecolor-software
- https://www.xrite.com/learning-color-education/videos/measurecolor-one-platform-for-all-your-print-processes
- https://www.xrite.com/learning-color-education/videos/measurecolor-intuitive-color-control-for-confident-print-production
- https://www.xrite.com/learning-color-education/videos/cartonajes-pans-achieves-faster-setup-and-consistent-color-with-offset360
- https://www.xrite.com/blog/measurecolor-optimize-dot-gain-for-better-print-quality
- https://www.xrite.com/blog/measurecolor-manage-digital-color-targets-with-confidence
- https://www.xrite.com/blog/measurecolor-a-user-friendly-interface
- https://www.xrite.com/blog/measurecolor-maximize-white-ink-opacity

### Offset360
- https://www.xrite.com/page/offset360
- https://www.xrite.com/learning-color-education/webinars/solving-todays-biggest-offset-pressroom-challenges-with-offset360
- https://www.xrite.com/learning-color-education/webinars/offset-printing-reinvented
- https://www.xrite.com/learning-color-education/webinars/modernize-your-pressroom-with-xrite-measure-color-and-rutherford-cip3-closed-loop-automation
- https://www.xrite.com/categories/inline-spectrophotometers/colorxra-45

### eXact 2 (family)
- https://www.xrite.com/categories/portable-spectrophotometers/exact-family
- https://www.xrite.com/categories/portable-spectrophotometers/exact-2
- https://www.xrite.com/categories/portable-spectrophotometers/exact-2-xp
- https://www.xrite.com/categories/portable-spectrophotometers/exact-2-plus
- https://www.xrite.com/categories/portable-spectrophotometers/exact-family-gen-1/exact-basic-spectro (older generation, captured incidentally via search)
- https://www.xrite.com/service-support/product-support/portable-spectrophotometers/exact-2
- https://www.xrite.com/service-support/product-support/portable-spectrophotometers/exact-2-plus
- https://www.xrite.com/page/upgrade-to-exact-2
- https://www.xrite.com/about-us/news-events/press-releases/x-rite-announces-exact-2
- https://www.xrite.com/service-support/downloads/e/exact2-suite-v1_0_8
- https://www.xrite.com/learning-color-education/videos/exact2-official-product-unboxing
- https://www.xrite.com/learning-color-education/videos/exact-vs-exact-2-feature-comparison
- https://www.xrite.com/blog/which-exact-2
- https://www.xrite.com/categories/parts-accessories/exact-2-media-glider
- https://www.xrite.com/categories/parts-accessories/exact-2-2mm-media-ring

### Cross-product / related
- https://www.xrite.com/ (homepage)
- https://www.xrite.com/categories/scanning-instruments
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/measurecolor-software
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/netprofiler-software
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/xrite-link
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/colorcert
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/color-imatch
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/color-iqc
- https://www.xrite.com/categories/formulation-and-quality-assurance-software/autura-ink
- https://www.xrite.com/categories/benchtop-spectrophotometers/ci7x00-family/ci7800
- https://www.xrite.com/categories/portable-spectrophotometers/ci6x-family/ci64
- https://www.xrite.com/categories/calibration-profiling/i1-pro-3-family
