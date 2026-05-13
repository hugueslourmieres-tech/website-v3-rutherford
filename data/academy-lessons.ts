export type Lesson = {
  title: string;
  summary: string;
  body: string[];
};

export type CourseLessons = Record<string, Lesson[]>;

export const COURSE_LESSONS: CourseLessons = {
  fundamentals: [
    {
      title: 'What "good color" actually means on a press',
      summary: 'Move from subjective approval to measurable consistency.',
      body: [
        'Walk through almost any pressroom and you will hear the same conversation in different accents: "Is this OK?". An operator looks at the sheet, glances at the proof, leans back, and decides. That decision is the most expensive judgment call in the building, and it changes every time the operator changes.',
        '"Good color" cannot mean "the operator approves it". On a busy press with three shifts, four operators and a dozen brand owners, that definition guarantees variance. Brand owners notice the variance long before you do, and they push the cost back to you in rejected pallets, audits, and lost contracts.',
        'A workable definition of good color has three parts. First, it is anchored to a target — typically a fingerprint or a brand-owner reference, expressed in spectral or CIELAB values. Second, it carries a tolerance — a ΔE budget that says "anything inside this range passes". Third, it is verified with a measurement device, not an eye.',
        'The cost of moving from "operator approves" to "device measures" is small. The benefit is that you can defend the decision, audit it, repeat it, and improve it. Everything else in this course is downstream of that one shift.',
      ],
    },
    {
      title: 'ISO 12647 in 10 minutes',
      summary: 'The standard your brand owners assume you follow.',
      body: [
        'ISO 12647 is the family of process control standards for graphic technology printing. The part you care about depends on your process: 12647-2 for offset, 12647-3 for newsprint, 12647-6 for flexo. For sheetfed offset packaging, 12647-2 is the document brand owners cite when they write specifications.',
        'The standard does three useful things at once. It defines paper classes — PT1 through PT5 — so that you and your customer can agree on which substrate behavior you are aiming for. It defines target tonal value increase (TVI) curves so that the dot gain on press lands on a predictable curve. And it defines aim points for the solids (cyan, magenta, yellow, black) in CIELAB terms, again per paper class.',
        'You do not need to memorize the tables. You need to know that they exist, that your prepress and press fingerprints should be tied to them, and that any deviation should be a deliberate choice, not an accident. When a brand owner says "we want ISO 12647-2 PT1 with G7 calibration", you should know which substrate class that maps to in your shop and which fingerprint you will print against.',
        'The most common mistake is treating ISO as a destination instead of a baseline. The standard sets the floor. Brand-owner expectations now routinely sit tighter than 12647 tolerances. Plan for the floor and aim higher.',
      ],
    },
    {
      title: 'M0, M1, M2, M3: choosing your measurement condition',
      summary: 'Same sheet, different illuminant, different number.',
      body: [
        'Every spectrophotometer reads color under a defined illuminant and observer. The illuminant matters because most modern papers contain optical brightening agents (OBAs) that fluoresce under UV light. Read the same sheet under different conditions and you will get different numbers — sometimes meaningfully different.',
        'M0 is the legacy condition: a tungsten illuminant (CIE Standard Illuminant A). It is what densitometers and older spectros used by default. It still exists, mostly because contracts written before 2010 reference it.',
        'M1 is the modern default: D50 illuminant with UV component included. It is the right choice for any paper containing OBAs, which is most coated commercial and packaging stock today. ISO 13655:2009 specifies M1, and any new equipment installed in the last decade defaults to it.',
        'M2 is D50 with UV excluded — useful when you want to read the color as it would appear without OBA contribution, for instance when matching to a non-OBA substrate.',
        'M3 is polarized — useful for reading wet ink during a press run because it removes surface gloss. M3 typically produces higher density values than M0/M1/M2 by 0.05 to 0.20 D depending on ink and coating.',
        'Modern scanning systems like IntelliTrax2 can capture two conditions in a single pass (M0/M1, M0/M3, or M1/M3), which means you can satisfy both a legacy brand specification and a modern OBA-aware measurement on the same sheet.',
      ],
    },
    {
      title: 'ΔE, ΔE 00, density: what to trust on the press floor',
      summary: 'Three numbers, three different jobs.',
      body: [
        'Density measures the absorption of a single channel — cyan, magenta, yellow, or black — in transmission or reflection. It is fast, robust, and the variable that ink-key adjustments push directly. Operators have used density for fifty years for one good reason: when density is high, you give less ink; when it is low, you give more. Density is the press floor language for "more or less ink".',
        'ΔE is the perceptual color difference between two CIELAB readings. ΔE 1976 was the original formula and is now considered too lenient at low chroma and too strict at high chroma. ΔE 94 and ΔE 2000 refined it. ΔE 00 (CIEDE2000) is the modern industry standard because it correlates much better with what the eye actually perceives.',
        'Brand owners typically specify ΔE 00 tolerances. A tight specification might require ΔE 00 < 2 on solids and ΔE 00 < 1.5 on grays. Looser specifications go to ΔE 00 < 4. Anything above ΔE 00 = 5 is generally visible to a trained eye at arm length.',
        'On the press, the operator works with density because density responds to ink-key movement. The quality system works with ΔE 00 because that is what the brand owner contract says. The bridge between the two is what closed-loop color management automates: read ΔE 00 against the target, decide which densities need to move, and adjust the ink keys.',
      ],
    },
    {
      title: 'G7, GRACoL, FOGRA: the methodologies that frame your work',
      summary: 'Three names you will hear, one shared goal.',
      body: [
        'G7 is a calibration methodology developed by Idealliance in the US. Its anchor is gray balance: if your CMY grays neutralize and your neutral print density curve matches the target, the rest of the gamut follows. G7 is process-agnostic; you can apply it to offset, flexo, digital, even gravure. Most North American shops are G7-anchored.',
        'GRACoL (General Requirements for Applications in Commercial Offset Lithography) is the US characterization for high-quality sheetfed offset on premium coated paper. GRACoL 2013 (CGATS21) is the modern reference, and its aim points are widely tied to G7 methodology.',
        'FOGRA is the German research institute. Their characterization data sets — FOGRA39, FOGRA51, FOGRA52, FOGRA55 — define aim points and proofing characteristics for European offset production on various substrate classes. ISO 12647-2 references FOGRA characterizations directly.',
        'Practically: a US packaging printer is likely calibrated to GRACoL with G7 methodology. A European packaging printer is likely calibrated to ISO 12647-2 against a FOGRA characterization. Both are valid; the difference matters when you serve customers across the Atlantic. Brand owners often specify which characterization their production should target.',
        'Pick one, document it, train against it, and measure against it. Switching methodologies in the middle of a project is the fastest way to lose trust with a brand owner. The course is methodology-agnostic — what matters is that you have one, not which one.',
      ],
    },
  ],
  'measurement-essentials': [
    {
      title: 'Handheld vs strip-reader vs inline scanner',
      summary: 'Three device classes, three different jobs.',
      body: [
        'Handheld spectrophotometers — X-Rite eXact 2, eXact 2 Plus, eXact 2 Xp — are the swiss-army knives of color measurement. Single-patch reads, mobile, low entry cost, no host computer required. They are the right device when you measure infrequently, when you need to verify a specific patch, or when you check a job at the customer site.',
        'Strip readers (scanning tables) sit beside the press and scan color bars across the full sheet width. They take a sheet from the operator, scan it in a few seconds, and feed the result back to a console or to ink-key correction software. They strike the balance between speed and capital cost, and are common in mid-volume sheetfed shops.',
        'Inline scanners like X-Rite IntelliTrax2 (model 2900) and IntelliTrax2 Pro (model 2900PRO) sit at the delivery end of the press and scan every sheet that needs measuring. Scan time is under 10 seconds. They are the right answer when you run multiple jobs per shift and cannot afford to interrupt the press for measurement.',
        'The choice is not "which is best" — it is "which fits your volume and your tolerance". A 50-makeready-per-week shop running tight ΔE specs needs inline. A 5-makeready-per-week shop printing forgiving work can live with a handheld. Most real shops own at least two device classes and use them for different jobs.',
      ],
    },
    {
      title: 'The geometry that matters: 45°/0°, polarization, UV',
      summary: 'Three optical choices that drive your results.',
      body: [
        'A 45°/0° geometry illuminates the sample at 45° and reads it at 0° (normal). This is the standard for graphic arts because it most closely simulates how the human eye views a print under typical lighting. ISO 5-4:2009 specifies the geometry for spectro measurement of printed surfaces. IntelliTrax2 uses 45°/0° ring illumination (the sample is lit from all 360° around the 45° cone) to minimize directional artifacts.',
        'Polarization is an optical filter that removes the specular component — the surface gloss — from the measurement. Polarized readings give you the "wet" ink density even on a dry sheet, which is useful when you compare wet press readings to dry proofs. Polarization typically raises density values by 0.05–0.20 D and increases inter-instrument agreement on glossy stocks.',
        'UV filtering matters because most modern papers contain optical brighteners that fluoresce under UV. A measurement that includes UV (M1) reads the paper as your customer sees it under D50 viewing booths. A measurement that excludes UV (M2) reads the substrate "as if" it had no brighteners. M1 is the safer default for new contracts; M2 is useful when you need to match a non-OBA reference.',
        'The geometry, polarization, and UV choices are not independent — they are stacked on each measurement. Every spectro reports them in the metadata. When two readings disagree, the first place to look is the measurement condition, not the ink.',
      ],
    },
    {
      title: 'Color bars decoded: what to put on the sheet and why',
      summary: 'The bar is the bridge between press and measurement.',
      body: [
        'A color bar is the strip of test patches placed on every press sheet, typically along the gripper edge or tail. It contains solids for each ink, percentage tints for tonal value, gray balance patches, overprints, and sometimes special control patches for spot colors. Without a color bar, automated measurement cannot tell what to read.',
        'Common color bar systems include System Brunner, GMI / Bestcolor, X-Rite Standard, and customer-specific bars. They differ in patch sequence, patch size, and inclusion of special tests. The right choice depends on your customer requirements and your measurement device capabilities.',
        'Patch height matters. IntelliTrax2 can read patches as small as 2 mm high — significantly tighter than the 4–5 mm minimum for older inline systems. Smaller bars steal less printable area, but they require the scan head to position the sheet precisely. Patch width is typically 3–4 mm, sized to match an ink zone (most presses have 32 mm ink zones).',
        'The edge zone — the distance between the sheet edge and the start of the color bar — matters because it determines where the scan head can position. IntelliTrax2 needs to engage the bar within 38 mm of the sheet edge. Plan the imposition accordingly: a color bar pushed too close to the edge will not scan reliably; a color bar pushed too far in steals printable area.',
        'Spot colors deserve their own discussion. If you run Pantone or custom brand colors, add dedicated solid and tint patches for each, not just the four-color overprint. A spot-color bar should mirror the structure of the process-color bar but for the extra inks in the job.',
      ],
    },
    {
      title: 'Repeatability vs reproducibility',
      summary: 'The trap that costs you hours.',
      body: [
        'Repeatability is the variation when the same instrument reads the same sample multiple times in a row, by the same operator, under the same conditions. It is an intrinsic property of the instrument. A modern handheld spectro has repeatability around 0.05 ΔE on white; a modern inline scanner like IntelliTrax2 reports 0.15 ΔE max on white. These are tight enough for most production work.',
        'Reproducibility is the variation when different instruments — or different operators, different times, different temperatures — read the same sample. Reproducibility is always worse than repeatability. The relevant industry metric is Inter-Instrument Agreement (IIA), and a good modern spectro reports IIA in the 0.3 ΔE average / 0.45 ΔE maximum range.',
        'Why this matters: a brand owner with a handheld in their lab will read a different number than your inline scanner reads on the press, even on the same sample. If you do not understand the gap, you will spend hours chasing a phantom drift that is actually just inter-instrument disagreement.',
        'The fix is procedural, not technical. Establish which instrument is the reference for each customer relationship, calibrate the others against it on known samples, and document the offsets. When the brand owner says "we measured 1.8 ΔE on your latest delivery", you should be able to say "our inline measured 1.3 ΔE; our handheld measured 1.6 ΔE; both agree with you within IIA tolerance".',
        'The other fix is hardware: scheduled annual recertification of every measurement device through the manufacturer (or a certified service partner). UV LED sources drift, sensors age, and tile references wear. Without recertification, you are slowly walking away from your own reference.',
      ],
    },
  ],
  'where-color-hurts': [
    {
      title: 'Anatomy of a makeready: 800 sheets, 120 minutes, €450 on the floor',
      summary: 'The cost stack of one makeready, multiplied by your year.',
      body: [
        'Take a typical B1 6-color sheetfed press, premium coated 250 g/m² paper at €1 200 per tonne. One sheet costs roughly €0.5346. A makeready that consumes 800 sheets to first good copy costs €428 in paper alone before you count anything else.',
        'Add press time. A loaded sheetfed B1 6-color press costs €150 per hour to run, sometimes more. A 120-minute makeready burns €300 in press time. The press is not earning while it is being set up — and the operator is paid either way.',
        'Add the smaller items: a plate change is rarely needed during makeready, but blanket washes consume cleaning solution and operator attention. Ink mileage on makeready sheets is not zero. Energy costs are not zero. Add it all up and €450–€500 per makeready is a conservative number.',
        'Multiply by your annual volume. A press running 3 makereadies per day, 5 days per week, 45 weeks per year, completes 675 makereadies. At €450 each, that is €303 750 per year — per press — that walks off the floor as paper waste, ink waste, and press time you did not bill.',
        'For a 3-press operation, the math triples. For a packaging shop with 8 presses across 2 sites, the annual cost of makeready is the salary of a small department. Closed-loop color management aims to reduce both the sheet count and the time, typically by 30 to 55 % in real installations. The math does the rest.',
      ],
    },
    {
      title: 'The "good copy" myth',
      summary: 'Why subjective approval is the silent margin killer.',
      body: [
        'On most presses, the moment a job becomes "good" is the moment an operator decides it is good. That decision varies by operator, by shift, by mood, by how rushed the operator feels, and by what the next job in the queue looks like. None of those variables are written into the brand-owner specification.',
        'You can see the variance in the makeready data if you collect it. Two operators on the same job, same press, same paper, on consecutive days, will produce different "first good copy" decisions. The faster operator might pass a sheet at ΔE 00 = 3.2; the more cautious operator on the next shift will not pass until ΔE 00 = 1.8. Both might be inside customer tolerance — but the slower operator spent extra paper and extra time getting there.',
        'The cost compounds in the other direction too. A fast operator who passes ΔE 00 = 3.2 against a customer tolerance of ΔE 00 = 2.5 may push a borderline job through. Three months later, the brand owner aggregates measurements across the supply chain and asks why your average is sitting above their specification. The conversation is uncomfortable; the cost is your contract.',
        'The fix is not to slow everyone down or to micromanage. The fix is to take the "pass / fail" decision out of subjective judgment and put it into measurement. A closed-loop system, or even a strip reader feeding a console, makes the decision the same way every time: against the same target, with the same tolerance, with the same data trail. The operator stays in charge of the press — but stops being the variance source for the color decision.',
      ],
    },
    {
      title: 'Drift, contamination, fountain solution, paper batch',
      summary: 'The four silent killers of color stability.',
      body: [
        'Drift is the slow movement of color over the run. Ink fountains warm up, blankets compress, papers absorb humidity, plates wear at the lead edge. None of these changes are visible sheet-to-sheet, but over 10 000 sheets the cyan can move 0.3 D and the magenta in the opposite direction. By the end of the run, an operator who matched the first sheet to the proof is no longer matching the proof at all.',
        'Contamination is the introduction of foreign material into the ink film: blanket residue, fountain solution carryover, paper dust, dried ink from the rollers. Each contamination event shifts color slightly. A clean press is a stable press, and that is the boring truth behind most "magic" results from veteran pressrooms.',
        'Fountain solution is its own chapter. Conductivity, pH, alcohol concentration, and temperature each affect how the ink film transfers and dries. A fountain solution that drifts out of range during the day shifts your color even when your ink keys have not moved. Many pressrooms only check fountain chemistry on Mondays — and wonder why Fridays look different.',
        'Paper batch variability is the silent ambush. Two pallets of the same nominal paper grade from the same mill can have different surface gloss, different absorption rates, different OBA loadings. Your color profile was built against the average; an outlier batch will print outside specification even when the press is perfect. This is where measurement of the paper itself — before the run — pays for itself.',
        'A closed-loop system catches drift in real time because it measures every sheet (or every Nth sheet) against the target. It cannot fix contamination — a wash-up is still required — but it can detect the moment contamination starts and alert the operator. Fountain and paper variability cannot be fixed by the color system, but they are easier to diagnose when the color system separates "ink-key adjustment can fix this" from "something else is going on".',
      ],
    },
    {
      title: 'Self-financed automation: how reduced waste pays for the system',
      summary: 'The capital case in three numbers.',
      body: [
        'A closed-loop color management system costs less than most people assume — typically a fraction of the price of the press it sits on. The capital case is built on three measurable returns: paper saved, press time recovered, and brand-owner reject reduction.',
        'Paper saved is the most direct. A 55 % reduction in makeready sheet waste on the B1 6-color baseline above (800 sheets per makeready) saves 440 sheets per makeready, 297 000 sheets per year, around €159 000 in paper per press per year. That number alone is usually larger than the system payment within the first year.',
        'Press time recovered is the second lever. A 38 % reduction in makeready time on a 120-minute baseline saves 46 minutes per makeready, 31 000 minutes per year, 513 hours of press time. At €150 per hour, that is €77 000 of capacity. The capacity does not appear as cash directly — it appears as the ability to take on more work without buying another press.',
        'Reject reduction is the third lever, harder to measure but real. Closed-loop systems produce data trails that brand owners can audit. The conversation when something goes wrong becomes "here is the measurement record" instead of "we think it was fine". Reject rates fall, audit risk falls, contract renewals go smoother.',
        'A typical installation pays for itself in 9 to 18 months on a single press, before any contract effects. The math is conservative — those numbers assume only paper and press time, and ignore the contract value of being a measurably consistent supplier. The premium course on closed-loop color goes into the full ROI methodology; this course is the warm-up.',
      ],
    },
  ],
};

export function getLessonsForCourse(slug: string): Lesson[] | undefined {
  return COURSE_LESSONS[slug];
}
