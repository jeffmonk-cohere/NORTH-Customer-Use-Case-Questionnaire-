/* global QUESTIONNAIRE_DATA */
'use strict';

QUESTIONNAIRE_DATA['billex'] = {
  id: 'billex',
  cardNumber: '11',
  name: 'Billing Exception Resolution Agent',
  sector: 'Power & Utilities · AMI / Customer',
  description: 'Agentic triage and auto-resolution of billing exceptions — accounts that fall out of the automated billing run due to estimated reads, meter data management errors, rate code mismatches, unbilled periods, and high-bill flags. Agent resolves routine exception types autonomously, provides billing specialists with structured diagnostic packages for complex cases, and tracks exception aging to minimize revenue recognition delay.',
  appraisalId: 'billex',
  sections: [
    {
      title: 'Billing Operations Scale',
      description: 'Volume and staffing profile of your billing exception operations.',
      inputs: [
        { id: 'customers',      label: 'Total electric customers',              type: 'number', default: 600000, unit: 'customers', key: true, hint: 'Total active metered accounts.' },
        { id: 'billing_cycles', label: 'Billing cycles per year',               type: 'number', default: 12,     unit: 'cycles',              hint: 'How many billing cycles does your CIS run per year? Typically 12 (monthly) for most IOUs.' },
        { id: 'exception_rate', label: 'Exception rate (% of bills per cycle)', type: 'number', default: 0.035,  unit: '%', pct: true, key: true, hint: 'What % of bills fall into the exception worklist each cycle? Industry range: 1.5–6%. Check your CIS or billing operations team.' },
        { id: 'billing_fte',    label: 'Billing specialists working exceptions', type: 'number', default: 22,     unit: 'FTEs',              hint: 'Number of billing specialists dedicated to exception resolution.' },
        { id: 'billing_rate',   label: 'Fully-loaded billing specialist $/hr',  type: 'number', default: 58,     unit: '$/hr',              hint: 'Fully-loaded cost per hour including salary, benefits, and overhead.' },
        { id: 'billing_hrs',    label: 'Working hours / specialist / yr',       type: 'number', default: 2000,   unit: 'hrs',               hint: 'Productive hours per specialist per year (standard is 2,080 minus leave).' },
      ],
    },
    {
      title: 'Auto-Resolution',
      description: 'How much of the exception workload is routine vs. complex, and what share the agent can handle autonomously.',
      inputs: [
        { id: 'routine_share',    label: '% of exceptions that are routine / repeatable', type: 'number', default: 0.62, unit: '%', pct: true,            hint: 'What fraction of your exception queue is made up of repeating, rule-based types (estimated reads, common MDM errors, straightforward rate mismatches)? Billing operations teams typically estimate 55–70%.' },
        { id: 'auto_res_rate',    label: 'Auto-resolution rate on routine exceptions',    type: 'number', default: 0.55, unit: '%', pct: true, key: true, hint: 'Of routine exceptions, what fraction can the agent resolve autonomously without specialist review? Conservative benchmark: 45–65%.' },
        { id: 'hrs_per_exc_base', label: 'Specialist hours per exception (baseline)',     type: 'number', default: 0.85, unit: 'hrs',           key: true, hint: 'Average time a billing specialist spends on each exception including lookup, diagnosis, correction, and documentation.' },
        { id: 'hrs_per_exc_future', label: 'Specialist hours per exception (future)',     type: 'number', default: 0.28, unit: 'hrs',           key: true, hint: 'With AI-generated diagnostic packages and automated corrections, specialist time focuses on review and approval rather than diagnosis.' },
      ],
    },
    {
      title: 'Exception Error & Rework',
      description: 'Errors introduced during manual exception resolution that require subsequent correction.',
      inputs: [
        { id: 'error_rate_base',   label: 'Exception resolution error rate — baseline', type: 'number', default: 0.07, unit: '%', pct: true,            hint: 'What % of manually resolved exceptions result in a billing error that requires rework (customer dispute, re-bill, credit)? Check post-billing adjustment reports.' },
        { id: 'error_rate_future', label: 'Exception resolution error rate — future',   type: 'number', default: 0.02, unit: '%', pct: true, key: true, hint: 'Agent-verified resolutions with policy checks typically reduce error rates to 1–3%.' },
        { id: 'rework_cost',       label: 'Avg cost per billing error requiring rework', type: 'number', default: 95,   unit: '$',                       hint: 'Fully-loaded cost of a billing error including specialist rework time, customer contact, and credit processing.' },
      ],
    },
    {
      title: 'DSO & Revenue Recognition',
      description: 'Financial impact of delayed billing on revenue recognition and cash flow.',
      inputs: [
        { id: 'avg_bill_value',  label: 'Average bill value per exception account',              type: 'number', default: 145,  unit: '$',            key: true, hint: 'Exception accounts tend to have higher bills than average (high-usage flags, commercial accounts, estimated reads). What is the average bill value for exception accounts?' },
        { id: 'dso_delay_days',  label: 'Avg days delayed billing per exception (baseline)',     type: 'number', default: 8.5,  unit: 'days',                    hint: 'How many days beyond the billing cycle date do exception accounts typically get billed? Check your billing cycle close reports.' },
        { id: 'dso_future_days', label: 'Avg days delayed billing per exception (future)',       type: 'number', default: 1.5,  unit: 'days',          key: true, hint: 'With agent auto-resolution, most routine exceptions close within the billing cycle. Target: same-day or next-day for routine types.' },
        { id: 'cost_of_capital', label: 'Cost of capital / discount rate',                      type: 'number', default: 0.08, unit: '%', pct: true,             hint: 'Your weighted average cost of capital (WACC) or internal hurdle rate, used to value revenue pulled forward. Typically 6–10% for regulated utilities.' },
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
