/* global QUESTIONNAIRE_DATA */
'use strict';

QUESTIONNAIRE_DATA['billinq'] = {
  id: 'billinq',
  name: 'Billing Inquiry Resolution Agent',
  sector: 'Power & Utilities · AMI / Customer',
  description: 'Agentic resolution of customer billing inquiries across digital and IVR channels — bill spike explanation, estimated read disputes, rate plan questions, payment arrangement setup, and high-usage alerts. Agent resolves Tier 1-2 contacts without a human agent and provides structured context packages to agents for Tier 3 escalations, reducing handle time and improving first-contact resolution.',
  appraisalId: 'billinq',
  sections: [
    {
      title: 'Contact Center Scale',
      description: 'Volume and cost profile for your customer contact center, billing-related inquiries only.',
      inputs: [
        { id: 'customers',      label: 'Total electric customers',               type: 'number', default: 600000, unit: 'customers', key: true, hint: 'Total active metered accounts.' },
        { id: 'calls_per_cust', label: 'Billing-related calls per customer/yr',  type: 'number', default: 1.4,    unit: 'calls',     key: true, hint: 'How many billing-related contacts per customer per year (calls + digital combined)? Check your CIS or IVR reports.' },
        { id: 'agents_fte',     label: 'Billing CSR FTEs',                       type: 'number', default: 95,     unit: 'FTEs',                hint: 'Full-time equivalent customer service reps handling billing inquiries.' },
        { id: 'agent_rate',     label: 'Fully-loaded CSR $/hr',                  type: 'number', default: 52,     unit: '$/hr',                hint: 'Fully-loaded cost including wages, benefits, and overhead per CSR hour.' },
        { id: 'cost_per_call',  label: 'Fully-loaded cost per live call',         type: 'number', default: 8.40,   unit: '$',         key: true, hint: 'Total cost per handled contact including agent time, overhead, and technology. Typical utility range: $6–$14.' },
      ],
    },
    {
      title: 'Deflection & Self-Service',
      description: 'Current and target performance for digital and IVR self-service channels.',
      inputs: [
        { id: 'tier1_share',   label: 'Tier 1-2 calls eligible for agent deflection', type: 'number', default: 0.58, unit: '%', pct: true,            hint: 'What fraction of billing calls are routine enough that a well-designed AI agent could resolve them without a human? Includes bill explanation, outage alerts, payment status, rate plan questions.' },
        { id: 'deflect_rate',  label: 'Deflection rate — agent-assisted channels',    type: 'number', default: 0.38, unit: '%', pct: true, key: true, hint: 'Of the eligible Tier 1-2 calls, what fraction will the agent fully resolve without human transfer? Conservative benchmark: 30–45%.' },
        { id: 'digital_cost',  label: 'Cost per deflected digital / IVR interaction', type: 'number', default: 0.90, unit: '$',                       hint: 'Fully-loaded cost of a contact resolved digitally (IVR, chat, app). Typically $0.50–$1.50 vs $6–$14 for a live agent.' },
      ],
    },
    {
      title: 'Handle Time Reduction (Assisted Live Calls)',
      description: 'For calls that still reach a live agent, the agent provides context packages that reduce handle time.',
      inputs: [
        { id: 'aht_base',     label: 'Average handle time — baseline (minutes)', type: 'number', default: 6.8, unit: 'min', key: true, hint: 'Average time from call answer to disposition for billing inquiries. Check your ACD/WFM system.' },
        { id: 'aht_future',   label: 'Average handle time — agent-assisted',     type: 'number', default: 4.5, unit: 'min', key: true, hint: 'With AI-generated account summaries and suggested resolutions pre-loaded, agents spend less time on lookup and explanation.' },
        { id: 'assist_share', label: '% of live calls using agent assist',        type: 'number', default: 0.70, unit: '%', pct: true, hint: 'What fraction of live billing calls will benefit from agent-assist context packages? Typically the majority of non-escalated calls.' },
      ],
    },
    {
      title: 'First-Contact Resolution',
      description: 'How often billing issues are resolved without a callback or repeat contact.',
      inputs: [
        { id: 'fcr_base',    label: 'First-contact resolution rate — baseline', type: 'number', default: 0.74, unit: '%', pct: true,            hint: 'What % of billing contacts are resolved in a single interaction? Check your CIS or post-call survey data.' },
        { id: 'fcr_future',  label: 'First-contact resolution rate — future',   type: 'number', default: 0.86, unit: '%', pct: true, key: true, hint: 'With better information and resolution options available, first-contact resolution typically improves 10–18 percentage points.' },
        { id: 'repeat_cost', label: 'Cost of a repeat contact',                 type: 'number', default: 9.20, unit: '$',                       hint: 'Fully-loaded cost of a repeat contact for the same issue. Usually higher than first-contact cost due to escalation and complexity.' },
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
