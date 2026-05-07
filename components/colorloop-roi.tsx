'use client';

import { useMemo, useState } from 'react';
import { useLanguage, type Locale } from '@/components/language-provider';

type Copy = {
  kicker: string;
  headline: string;
  intro: string;
  inputs: {
    calages: { label: string; hint: string };
    temps: { label: string; hint: string };
    gache: { label: string; hint: string };
    coutPresse: { label: string; hint: string };
  };
  table: {
    line: string;
    paper: string;
    press: string;
    total: string;
    perYear: string;
    perMonth: string;
    sheets: string;
    hours: string;
  };
  disclaimer: string;
  cta: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    kicker: 'ROI estimator',
    headline: 'How much could ColorLoop save your pressroom?',
    intro:
      'Adjust your makeready figures and see the annual saving range. Defaults reflect a B1 6-color sheetfed offset operation.',
    inputs: {
      calages: { label: 'Makereadies per day', hint: 'Median B1 6-color: 3' },
      temps: { label: 'Makeready time (minutes)', hint: 'From wash-up to press-OK' },
      gache: { label: 'Makeready waste (sheets)', hint: 'Sheets to first good copy' },
      coutPresse: { label: 'Press cost per hour (€)', hint: 'Loaded hourly press cost' },
    },
    table: {
      line: 'Item',
      paper: 'Paper saved',
      press: 'Press time recovered',
      total: 'Total saving',
      perYear: '/ year',
      perMonth: '/ month',
      sheets: 'sheets/year',
      hours: 'press hours/year',
    },
    disclaimer:
      'Estimated on 225 production days/year and ColorLoop targets of −55% sheet waste and −38% makeready time.',
    cta: 'Talk to a Rutherford expert',
  },
  fr: {
    kicker: 'Estimateur ROI',
    headline: 'Combien ColorLoop peut-il vous faire économiser ?',
    intro:
      'Ajustez vos chiffres de calage et visualisez l’économie annuelle. Les valeurs par défaut reflètent une presse offset feuille B1 6 couleurs.',
    inputs: {
      calages: { label: 'Calages par jour', hint: 'Médian B1 6c : 3' },
      temps: { label: 'Temps de calage (minutes)', hint: 'Du lavage au BAT presse OK' },
      gache: { label: 'Gâche par calage (feuilles)', hint: 'Feuilles jusqu’au premier bon' },
      coutPresse: { label: 'Coût horaire presse (€)', hint: 'Coût horaire presse chargé' },
    },
    table: {
      line: 'Poste',
      paper: 'Papier économisé',
      press: 'Temps presse récupéré',
      total: 'Économie totale',
      perYear: '/ an',
      perMonth: '/ mois',
      sheets: 'feuilles/an',
      hours: 'heures presse/an',
    },
    disclaimer:
      'Estimé sur 225 jours de production/an et les objectifs ColorLoop de −55 % gâche et −38 % temps de calage.',
    cta: 'Parler à un expert Rutherford',
  },
  de: {
    kicker: 'ROI-Rechner',
    headline: 'Wie viel kann ColorLoop in Ihrer Druckerei sparen?',
    intro:
      'Passen Sie Ihre Einrichtungswerte an und sehen Sie die jährliche Ersparnis. Die Standardwerte entsprechen einer B1-6-Farben-Bogenoffsetmaschine.',
    inputs: {
      calages: { label: 'Einrichtungen pro Tag', hint: 'Median B1 6-Farben: 3' },
      temps: { label: 'Einrichtungszeit (Minuten)', hint: 'Vom Waschen bis Druck-OK' },
      gache: { label: 'Makulatur pro Einrichtung (Bogen)', hint: 'Bogen bis zum ersten Gutbogen' },
      coutPresse: { label: 'Stundensatz Presse (€)', hint: 'Belasteter Stundensatz' },
    },
    table: {
      line: 'Position',
      paper: 'Papier eingespart',
      press: 'Pressenzeit gewonnen',
      total: 'Gesamtersparnis',
      perYear: '/ Jahr',
      perMonth: '/ Monat',
      sheets: 'Bogen/Jahr',
      hours: 'Pressenstunden/Jahr',
    },
    disclaimer:
      'Geschätzt auf 225 Produktionstage/Jahr und ColorLoop-Zielen von −55 % Makulatur und −38 % Einrichtungszeit.',
    cta: 'Mit einem Rutherford-Experten sprechen',
  },
  it: {
    kicker: 'Stima ROI',
    headline: 'Quanto può farti risparmiare ColorLoop?',
    intro:
      'Regola i tuoi parametri di avviamento e visualizza il risparmio annuo. I valori predefiniti riflettono una macchina offset a foglio B1 6 colori.',
    inputs: {
      calages: { label: 'Avviamenti al giorno', hint: 'Mediana B1 6c: 3' },
      temps: { label: 'Tempo di avviamento (minuti)', hint: 'Dal lavaggio al BAT pressa OK' },
      gache: { label: 'Scarto per avviamento (fogli)', hint: 'Fogli fino al primo buono' },
      coutPresse: { label: 'Costo orario macchina (€)', hint: 'Costo orario caricato' },
    },
    table: {
      line: 'Voce',
      paper: 'Carta risparmiata',
      press: 'Tempo macchina recuperato',
      total: 'Risparmio totale',
      perYear: '/ anno',
      perMonth: '/ mese',
      sheets: 'fogli/anno',
      hours: 'ore macchina/anno',
    },
    disclaimer:
      'Stimato su 225 giorni di produzione/anno e sui target ColorLoop di −55 % scarto e −38 % tempo di avviamento.',
    cta: 'Parla con un esperto Rutherford',
  },
  es: {
    kicker: 'Estimador de ROI',
    headline: '¿Cuánto puede ahorrarle ColorLoop a su sala de prensa?',
    intro:
      'Ajuste sus cifras de puesta a punto y vea el ahorro anual. Los valores por defecto reflejan una offset pliego B1 de 6 colores.',
    inputs: {
      calages: { label: 'Puestas a punto por día', hint: 'Mediana B1 6c: 3' },
      temps: { label: 'Tiempo de puesta a punto (minutos)', hint: 'Del lavado al BAT prensa OK' },
      gache: { label: 'Desperdicio por puesta (pliegos)', hint: 'Pliegos hasta el primer bueno' },
      coutPresse: { label: 'Coste hora prensa (€)', hint: 'Coste horario cargado' },
    },
    table: {
      line: 'Concepto',
      paper: 'Papel ahorrado',
      press: 'Tiempo prensa recuperado',
      total: 'Ahorro total',
      perYear: '/ año',
      perMonth: '/ mes',
      sheets: 'pliegos/año',
      hours: 'horas prensa/año',
    },
    disclaimer:
      'Estimado sobre 225 días de producción/año y los objetivos ColorLoop de −55 % desperdicio y −38 % tiempo de puesta a punto.',
    cta: 'Hablar con un experto Rutherford',
  },
};

// Constants from the spec (B1 6-color sheetfed offset reference)
const PRODUCTION_DAYS_PER_YEAR = 225; // 45 weeks × 5 days
const SHEET_COST_EUR = 0.5346; // 1.62m × 1.10m × 250g/m² × 1.2€/kg
const REDUCTION_PAPER = 0.55; // ColorLoop target: −55%
const REDUCTION_TIME = 0.38; // ColorLoop target: −38%

function formatEur(locale: Locale, value: number) {
  const code =
    locale === 'fr' ? 'fr-FR' : locale === 'de' ? 'de-DE' : locale === 'it' ? 'it-IT' : locale === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(code, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

function formatNum(locale: Locale, value: number) {
  const code =
    locale === 'fr' ? 'fr-FR' : locale === 'de' ? 'de-DE' : locale === 'it' ? 'it-IT' : locale === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(code, { maximumFractionDigits: 0 }).format(value);
}

type SliderProps = {
  id: string;
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
};

function SliderInput({ id, label, hint, value, min, max, step, onChange }: SliderProps) {
  return (
    <div className="roi-input">
      <label htmlFor={id} className="roi-input-label">
        {label}
      </label>
      <div className="roi-input-row">
        <input
          id={id}
          type="range"
          className="roi-input-range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <input
          aria-label={label}
          type="number"
          className="roi-input-number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (!Number.isFinite(next)) return;
            onChange(Math.min(Math.max(next, min), max));
          }}
        />
      </div>
      <p className="roi-input-hint">{hint}</p>
    </div>
  );
}

export function ColorLoopROI() {
  const { locale } = useLanguage();
  const t = COPY[locale];

  const [calages, setCalages] = useState(3);
  const [temps, setTemps] = useState(120);
  const [gache, setGache] = useState(800);
  const [coutPresse, setCoutPresse] = useState(150);

  const result = useMemo(() => {
    const calagesYear = PRODUCTION_DAYS_PER_YEAR * calages;
    const sheetsSaved = calagesYear * gache * REDUCTION_PAPER;
    const paperEur = sheetsSaved * SHEET_COST_EUR;
    const hoursSaved = (calagesYear * temps * REDUCTION_TIME) / 60;
    const pressEur = hoursSaved * coutPresse;
    const total = paperEur + pressEur;
    return { sheetsSaved, paperEur, hoursSaved, pressEur, total };
  }, [calages, temps, gache, coutPresse]);

  return (
    <section className="colorloop-roi" aria-labelledby="colorloop-roi-title">
      <header className="colorloop-roi-header">
        <p className="section-kicker">{t.kicker}</p>
        <h3 id="colorloop-roi-title" className="colorloop-roi-headline">
          {t.headline}
        </h3>
        <p className="colorloop-roi-intro">{t.intro}</p>
      </header>

      <div className="colorloop-roi-grid">
        <div className="colorloop-roi-inputs">
          <SliderInput
            id="roi-calages"
            label={t.inputs.calages.label}
            hint={t.inputs.calages.hint}
            value={calages}
            min={1}
            max={10}
            step={1}
            onChange={setCalages}
          />
          <SliderInput
            id="roi-temps"
            label={t.inputs.temps.label}
            hint={t.inputs.temps.hint}
            value={temps}
            min={30}
            max={240}
            step={5}
            onChange={setTemps}
          />
          <SliderInput
            id="roi-gache"
            label={t.inputs.gache.label}
            hint={t.inputs.gache.hint}
            value={gache}
            min={100}
            max={2000}
            step={50}
            onChange={setGache}
          />
          <SliderInput
            id="roi-cout"
            label={t.inputs.coutPresse.label}
            hint={t.inputs.coutPresse.hint}
            value={coutPresse}
            min={50}
            max={400}
            step={10}
            onChange={setCoutPresse}
          />
        </div>

        <div className="colorloop-roi-result">
          <table className="colorloop-roi-table">
            <thead>
              <tr>
                <th scope="col">{t.table.line}</th>
                <th scope="col" className="colorloop-roi-table-num">
                  {t.table.perYear}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="colorloop-roi-row-label">{t.table.paper}</span>
                  <span className="colorloop-roi-row-sub">
                    {formatNum(locale, result.sheetsSaved)} {t.table.sheets}
                  </span>
                </th>
                <td className="colorloop-roi-table-num">{formatEur(locale, result.paperEur)}</td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="colorloop-roi-row-label">{t.table.press}</span>
                  <span className="colorloop-roi-row-sub">
                    {formatNum(locale, result.hoursSaved)} {t.table.hours}
                  </span>
                </th>
                <td className="colorloop-roi-table-num">{formatEur(locale, result.pressEur)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">{t.table.total}</th>
                <td className="colorloop-roi-table-num colorloop-roi-table-total">
                  {formatEur(locale, result.total)}
                </td>
              </tr>
              <tr>
                <th scope="row" className="colorloop-roi-table-sub-row">
                  {t.table.perMonth}
                </th>
                <td className="colorloop-roi-table-num colorloop-roi-table-sub-row">
                  {formatEur(locale, result.total / 12)}
                </td>
              </tr>
            </tfoot>
          </table>

          <p className="colorloop-roi-disclaimer">{t.disclaimer}</p>

          <a className="button button-dark colorloop-roi-cta" href="mailto:contact@rutherford.fr">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
