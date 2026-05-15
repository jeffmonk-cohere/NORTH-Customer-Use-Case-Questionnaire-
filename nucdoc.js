window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "nucdoc",
  "name": "Nuclear Deliverables Enhancement",
  "meta": "Power & Utilities · Generation · Nuclear",
  "title": "Nuclear Energy <em>Deliverables</em> Enhancement",
  "eyebrow": "Use Case · 15",
  "description": "LLM-assisted creation of nuclear technical deliverables — technical reports, operability determinations, license amendment requests, 10CFR50.59 screenings, and probabilistic risk analyses. Agent identifies applicable regulatory scenarios, auto-populates structured templates from plant databases, drafts content for senior engineer review, and tracks revision cycles to reduce rework. Improves quality, consistency, and throughput without compromising the senior engineer accountability chain.",
  "sections": [
    {
      "title": "Engineering Organization Scale",
      "inputs": [
        { "id": "lic_eng_fte",  "label": "Licensing and regulatory engineers (FTEs)",    "default": 18,  "unit": "FTEs", "key": true, "hint": "Engineers dedicated to regulatory licensing activities: license amendment requests, 10CFR50.59 screenings, operability determinations, and NRC correspondence. Include your licensing group and regulatory affairs staff." },
        { "id": "tech_eng_fte", "label": "Technical report writers and analysts (FTEs)", "default": 35,  "unit": "FTEs", "key": true, "hint": "Engineers who primarily produce technical reports, calculations, evaluations, and design change packages. Include design engineering, system engineering report writers, and PRA analysts." },
        { "id": "senior_rate",  "label": "Fully-loaded senior engineer $/hr",            "default": 165, "unit": "$/hr", "key": true, "hint": "Fully-loaded cost for senior engineers who review and approve deliverables (principal and senior principal engineers). Nuclear senior engineer range: $140–$200/hr fully loaded." },
        { "id": "staff_rate",   "label": "Fully-loaded staff engineer $/hr",             "default": 120, "unit": "$/hr",             "hint": "Fully-loaded cost for staff-level engineers who draft deliverables. Range: $95–$145/hr fully loaded." }
      ]
    },
    {
      "title": "Technical Deliverable Volume",
      "inputs": [
        { "id": "reports_yr",             "label": "Technical reports and deliverables per year", "default": 180,  "unit": "reports", "key": true, "hint": "Total number of formal technical deliverables produced annually: calculations, evaluations, technical reports, design change packages, operability determinations. Check your document management system for issued-per-year count." },
        { "id": "hrs_per_rpt_base",       "label": "Avg engineer hours per deliverable — baseline","default": 42,  "unit": "hrs",    "key": true, "hint": "Average drafting + review hours per deliverable from initiation to approved issue. Check your project management or timesheet system for actual labor hours per document. Nuclear deliverable range: 20–120 hours depending on complexity." },
        { "id": "hrs_per_rpt_future",     "label": "Avg engineer hours per deliverable — agent",  "default": 22,  "unit": "hrs",    "key": true, "hint": "With agent-assisted template population, regulatory requirement mapping, and first-draft generation, expect 40–55% reduction in drafting time. Senior engineer review time is largely preserved." },
        { "id": "revision_cycles_base",   "label": "Avg revision cycles per deliverable — baseline","default": 2.8,"unit": "cycles",             "hint": "How many review/revision cycles does a typical deliverable go through before final approval? Check your document management system for revision history. More than 2 cycles typically indicates quality or scope issues." },
        { "id": "revision_cycles_future", "label": "Avg revision cycles per deliverable — agent", "default": 1.6, "unit": "cycles", "key": true, "hint": "With agent-generated content following established templates and checklist validation before submission for review, rework cycles decrease. Target: 1.5–2.0 cycles." },
        { "id": "hrs_per_revision",       "label": "Engineer hours per revision cycle",           "default": 8.5, "unit": "hrs",               "hint": "Average hours to respond to reviewer comments and revise a deliverable. Estimate from your typical review-and-revise cycles." }
      ]
    },
    {
      "title": "Regulatory Filing Cycle Time",
      "inputs": [
        { "id": "lar_submissions",    "label": "License amendment requests per year",            "default": 8,     "unit": "LARs",  "key": true, "hint": "How many License Amendment Requests (LARs) does your site submit to the NRC annually? Check your licensing records. Industry average: 4–15 LARs/year per unit." },
        { "id": "hrs_per_lar_base",   "label": "Engineer hours per LAR — baseline",              "default": 220,   "unit": "hrs",               "hint": "Average engineering hours to prepare and submit a License Amendment Request including technical basis, regulatory evaluation, and NRC correspondence. Typical LAR range: 120–500 hours depending on complexity." },
        { "id": "hrs_per_lar_future", "label": "Engineer hours per LAR — agent-assisted",        "default": 130,   "unit": "hrs",   "key": true, "hint": "Agent assists with regulatory research, precedent identification, technical basis drafting, and format compliance. Expected reduction: 35–50% on preparable content; review and NRC interaction time is preserved." },
        { "id": "cycle_value_day",    "label": "Business value per day of faster LAR approval",  "default": 15000, "unit": "$",     "key": true, "hint": "What is the operational or revenue value of having an LAR approved sooner? Examples: faster implementation of a power uprate, earlier return to more favorable operating mode, or avoided alternative procedure costs. Estimate conservatively based on a specific pending LAR if possible." },
        { "id": "days_saved_per_lar", "label": "Days saved per LAR cycle (faster filing)",       "default": 12,    "unit": "days",              "hint": "Faster, higher-quality submissions typically result in fewer NRC Requests for Additional Information (RAIs) and shorter review timelines. A 10–15 day reduction in approval cycle is achievable for straightforward LARs." }
      ]
    },
    {
      "title": "Cohere North Platform",
      "inputs": [
        { "id": "users_y1", "label": "Platform users — Year 1", "default": 75,    "unit": "users", "key": true },
        { "id": "users_y2", "label": "Platform users — Year 2", "default": 400,   "unit": "users", "key": true },
        { "id": "users_y3", "label": "Platform users — Year 3", "default": 1200,  "unit": "users", "key": true },
        { "id": "fee_y1",   "label": "Cohere fee — Year 1",     "default": 150000,  "unit": "$", "key": true },
        { "id": "fee_y2",   "label": "Cohere fee — Year 2",     "default": 700000,  "unit": "$", "key": true },
        { "id": "fee_y3",   "label": "Cohere fee — Year 3",     "default": 1800000, "unit": "$", "key": true },
        { "id": "rf_y1",    "label": "Value realization — Y1",  "default": 0.40, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y2",    "label": "Value realization — Y2",  "default": 0.75, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y3",    "label": "Value realization — Y3",  "default": 1.00, "unit": "%", "pct": true, "key": true }
      ]
    }
  ],
  "titleText": "Nuclear Energy Deliverables Enhancement"
});
