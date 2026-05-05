/* global QUESTIONNAIRE_DATA */
'use strict';

QUESTIONNAIRE_DATA['revprot'] = {
  id: 'revprot',
  name: 'Revenue Protection Agent',
  sector: 'Power & Utilities · AMI / Customer',
  description: 'Agentic detection and investigation prioritization for non-technical loss (NTL) — meter tampering, theft, unbilled usage, and systematic billing errors. Continuously analyzes AMI interval data against consumption baselines, peer-group comparisons, and physical event signals to generate scored investigation leads, auto-assign field crews, and track recovery from case open to revenue restoration.',
  appraisalId: 'revprot',
  sections: [
    {
      title: 'Utility Scale',
      description: 'Basic scale parameters for your electric service territory.',
      inputs: [
        { id: 'customers',         label: 'Total electric customers',                type: 'number', default: 600000,    unit: 'customers',  key: true,  hint: 'Total active metered accounts in your service territory.' },
        { id: 'annual_revenue',    label: 'Annual retail electric revenue',           type: 'number', default: 900000000, unit: '$',          key: true,  hint: 'Total retail electric revenue from your last full fiscal year (your annual report or 10-K).' },
        { id: 'investigators',     label: 'Revenue protection investigators (FTEs)',  type: 'number', default: 18,        unit: 'FTEs',                   hint: 'Dedicated field investigators and analysts focused on revenue protection / NTL.' },
        { id: 'investigator_rate', label: 'Fully-loaded investigator $/hr',           type: 'number', default: 85,        unit: '$/hr',                   hint: 'Fully-loaded cost including salary, benefits, and overhead.' },
      ],
    },
    {
      title: 'Non-Technical Loss (NTL)',
      description: 'Current state of meter tampering, theft, and unbilled usage in your territory.',
      inputs: [
        { id: 'ntl_rate',              label: 'NTL as % of annual revenue (baseline)',           type: 'number', default: 0.015, unit: '%', pct: true, key: true, hint: 'Industry range is 1–3% for U.S. electric utilities. Your T&D loss report or internal revenue assurance team may have this figure.' },
        { id: 'detection_rate_base',   label: 'Detection rate — baseline (% of NTL identified)', type: 'number', default: 0.35,  unit: '%', pct: true,            hint: 'What fraction of your estimated NTL pool is currently identified and actioned each year?' },
        { id: 'detection_rate_future', label: 'Detection rate — agent-assisted',                 type: 'number', default: 0.62,  unit: '%', pct: true, key: true, hint: 'Expected detection rate with AI-assisted AMI anomaly scoring. Conservative benchmark is 55–70%.' },
        { id: 'confirmation_rate',     label: '% of flagged accounts confirmed in field',         type: 'number', default: 0.65,  unit: '%', pct: true,            hint: 'Of accounts flagged by the agent and investigated in the field, what share have confirmed NTL?' },
        { id: 'recovery_per_account',  label: 'Avg revenue recovered per confirmed account',      type: 'number', default: 1850,  unit: '$',            key: true, hint: 'Average back-billing recovery per confirmed NTL case. Check with your revenue protection team or billing system.' },
      ],
    },
    {
      title: 'Investigation Efficiency',
      description: 'Current cost and productivity of your revenue protection field operations.',
      inputs: [
        { id: 'investigations_yr',    label: 'Field investigations per year (baseline)', type: 'number', default: 2400,  unit: 'cases',            hint: 'How many field investigations does your team conduct annually?' },
        { id: 'hrs_per_case_base',    label: 'Investigator hours per case (baseline)',   type: 'number', default: 6.5,   unit: 'hrs',              hint: 'Average total investigator time per case including lead review, scheduling, field visit, and case closeout.' },
        { id: 'hrs_per_case_future',  label: 'Investigator hours per case (future)',     type: 'number', default: 3.2,   unit: 'hrs',  key: true,  hint: 'With AI-assisted lead scoring and pre-populated case files, investigators spend less time on admin and better-targeted visits.' },
        { id: 'false_pos_base',       label: 'False positive rate — baseline',           type: 'number', default: 0.42,  unit: '%',    pct: true,  hint: 'What % of investigations result in no confirmed NTL? High false-positive rates are common without AI prioritization.' },
        { id: 'false_pos_future',     label: 'False positive rate — agent-assisted',     type: 'number', default: 0.18,  unit: '%',    pct: true,  key: true, hint: 'AI-scored leads typically reduce false positives to 15–25% vs 35–55% for rule-based systems.' },
        { id: 'truck_cost',           label: 'Cost per unnecessary field visit',          type: 'number', default: 285,   unit: '$',                hint: 'Vehicle, labor, and overhead cost for a field visit that returns no confirmed NTL.' },
      ],
    },
    {
      title: 'Regulatory & Compliance',
      description: 'Time spent on regulatory reporting and compliance related to revenue protection.',
      inputs: [
        { id: 'regulatory_hrs', label: 'Investigator hrs/yr on reporting & compliance (% of total)', type: 'number', default: 0.10, unit: '%', pct: true, hint: 'What fraction of total investigator time goes to regulatory filings, audit prep, and compliance documentation?' },
        { id: 'regulatory_red', label: 'Compliance prep time reduction',                             type: 'number', default: 0.55, unit: '%', pct: true, hint: 'Agent-maintained audit trails and automated case summaries typically reduce compliance prep time by 40–65%.' },
      ],
    },
    {
      title: 'Cohere North Platform',
      description: 'Platform deployment scope and fee assumptions.',
      inputs: [
        { id: 'users_y1', label: 'Platform users — Year 1', type: 'number', default: 100,  unit: 'users', key: true },
        { id: 'users_y2', label: 'Platform users — Year 2', type: 'number', default: 900,  unit: 'users', key: true },
        { id: 'users_y3', label: 'Platform users — Year 3', type: 'number', default: 2500, unit: 'users', key: true },
        { id: 'fee_y1',   label: 'Cohere fee — Year 1',     type: 'number', default: 150000,  unit: '$', key: true },
        { id: 'fee_y2',   label: 'Cohere fee — Year 2',     type: 'number', default: 750000,  unit: '$', key: true },
        { id: 'fee_y3',   label: 'Cohere fee — Year 3',     type: 'number', default: 2000000, unit: '$', key: true },
        { id: 'rf_y1',    label: 'Value realization — Year 1', type: 'number', default: 0.50, unit: '%', pct: true, key: true },
        { id: 'rf_y2',    label: 'Value realization — Year 2', type: 'number', default: 0.80, unit: '%', pct: true, key: true },
        { id: 'rf_y3',    label: 'Value realization — Year 3', type: 'number', default: 1.00, unit: '%', pct: true, key: true },
      ],
    },
  ],
};
