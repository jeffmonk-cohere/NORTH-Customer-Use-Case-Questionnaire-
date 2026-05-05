/* global QUESTIONNAIRE_DATA */
'use strict';

QUESTIONNAIRE_DATA['payrisk'] = {
  id: 'payrisk',
  cardNumber: '10',
  name: 'Payment Risk Prediction Agent',
  sector: 'Power & Utilities · AMI / Customer',
  description: 'Agentic account-level payment risk scoring and proactive intervention — predicting which customers are likely to miss payment before the bill is due, enabling personalized outreach, payment plan offers, and credit holds. Integrates AMI consumption signals, payment history, demographic indicators, and economic stress markers to produce a daily risk score for each account and a recommended intervention action.',
  appraisalId: 'payrisk',
  sections: [
    {
      title: 'Utility & Customer Profile',
      description: 'Scale and revenue profile of your service territory.',
      inputs: [
        { id: 'customers',      label: 'Total electric customers',              type: 'number', default: 600000,    unit: 'customers', key: true, hint: 'Total active metered accounts.' },
        { id: 'annual_revenue', label: 'Annual retail electric revenue',         type: 'number', default: 900000000, unit: '$',         key: true, hint: 'Total retail electric revenue (your annual report or 10-K).' },
        { id: 'delinq_rate',    label: 'Delinquency rate (% of customers/yr)',  type: 'number', default: 0.035,     unit: '%', pct: true, key: true, hint: 'What % of accounts go delinquent (past-due) in a given year? Check your CIS or collections team for this figure. Typical mid-size IOU range: 2.5–5%.' },
        { id: 'avg_bill',       label: 'Average monthly bill per customer',      type: 'number', default: 110,       unit: '$',                    hint: 'Average residential monthly bill. Used to size the delinquent balance pool.' },
      ],
    },
    {
      title: 'Bad Debt & Write-Offs',
      description: 'Current write-off rate and expected improvement from earlier intervention.',
      inputs: [
        { id: 'bad_debt_pct',        label: 'Bad debt write-off rate (% of revenue)',              type: 'number', default: 0.0045, unit: '%', pct: true, key: true, hint: 'Annual bad debt write-offs as a % of revenue. Your CFO or controller has this. Typical U.S. utility range: 0.3–0.7%.' },
        { id: 'bad_debt_red',        label: 'Bad debt reduction — proactive intervention',         type: 'number', default: 0.22,   unit: '%', pct: true, key: true, hint: 'With early risk identification and outreach, what fraction of bad debt can be converted to payment plans or partial recovery? Industry pilots show 15–30% reduction.' },
        { id: 'collection_cost_pct', label: 'Collection cost as % of delinquent balance',         type: 'number', default: 0.18,   unit: '%', pct: true,            hint: 'What does it cost to collect a delinquent balance (staff, 3rd-party agencies, legal)? Typically 15–25% of the balance collected.' },
        { id: 'collection_red',      label: 'Collection cost reduction (earlier intervention)',    type: 'number', default: 0.30,   unit: '%', pct: true,            hint: 'Proactive early-stage outreach is cheaper than late-stage collections. Expected reduction in collection cost per account: 20–40%.' },
      ],
    },
    {
      title: 'Disconnect / Reconnect Avoidance',
      description: 'The cost of disconnection events and the expected reduction from payment plan conversion.',
      inputs: [
        { id: 'disconnects_yr',   label: 'Disconnections for non-payment per year',           type: 'number', default: 14000, unit: 'events', key: true, hint: 'How many non-payment disconnections does your utility process annually? Check with your field operations or collections team.' },
        { id: 'dc_red',           label: 'Disconnection reduction (payment plans)',            type: 'number', default: 0.22,  unit: '%', pct: true, key: true, hint: 'With proactive payment plan offers before accounts reach disconnect status, what fraction of disconnections can be avoided? Typical range: 15–30%.' },
        { id: 'dc_cost',          label: 'Avg cost per disconnect + reconnect event',          type: 'number', default: 285,   unit: '$',                  hint: 'Fully-loaded cost of the disconnect and reconnect cycle including field crew, truck, administrative processing, and call center.' },
        { id: 'dc_revenue_loss',  label: 'Avg revenue foregone per disconnected account',     type: 'number', default: 420,   unit: '$',                  hint: 'Revenue not collected during the average disconnect period before reconnect (days × daily bill equivalent).' },
      ],
    },
    {
      title: 'Deposit Optimization',
      description: 'Right-sizing deposits for new and returning customers based on risk scores.',
      inputs: [
        { id: 'deposit_pool',  label: 'Annual new accounts requiring deposit', type: 'number', default: 18000, unit: 'accounts',            hint: 'How many new or returning accounts require a deposit each year?' },
        { id: 'avg_deposit',   label: 'Average deposit amount',               type: 'number', default: 220,   unit: '$',                   hint: 'Average deposit held per account. Check with your billing or credit team.' },
        { id: 'deposit_carry', label: 'Carrying cost rate on deposits held',  type: 'number', default: 0.04,  unit: '%', pct: true,        hint: 'Cost of capital applied to deposit funds held on balance sheet. Typically 3–6%.' },
        { id: 'deposit_opt',   label: 'Deposit right-sizing improvement',     type: 'number', default: 0.15,  unit: '%', pct: true, key: true, hint: 'With risk-scored deposits, some accounts can post lower deposits (reducing carrying cost) while higher-risk accounts may be appropriately sized up. Net improvement: 10–20%.' },
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
