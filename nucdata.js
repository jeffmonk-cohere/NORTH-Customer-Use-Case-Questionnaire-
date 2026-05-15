window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "nucdata",
  "name": "Nuclear Data Retrieval Acceleration",
  "meta": "Power & Utilities · Generation · Nuclear",
  "title": "Nuclear Plant Data <em>Retrieval</em> Acceleration",
  "eyebrow": "Use Case · 13",
  "description": "Natural language search across nuclear plant technical document corpuses — operating procedures, surveillance test records, maintenance histories, vendor manuals, technical specifications, and regulatory correspondence. Agent retrieves relevant data in seconds rather than hours, enabling engineers, operators, and compliance staff to spend more time on analysis and less on information hunting.",
  "sections": [
    {
      "title": "Engineering & Operations Scale",
      "inputs": [
        { "id": "eng_fte",  "label": "Engineers and technical staff in scope",    "default": 120, "unit": "FTEs", "key": true, "hint": "Total engineering, licensing, and technical staff who regularly search plant documentation. Include design engineers, system engineers, licensing staff, and analysts." },
        { "id": "ops_fte",  "label": "Operators and shift supervisors in scope",  "default": 80,  "unit": "FTEs",             "hint": "Operators and shift supervisors who look up procedures, technical specifications, or equipment data during shift work." },
        { "id": "eng_rate", "label": "Fully-loaded engineer $/hr",               "default": 145, "unit": "$/hr", "key": true, "hint": "Fully-loaded cost per hour for engineers (salary + benefits + overhead). Nuclear engineer range: $120–$180/hr fully loaded." },
        { "id": "ops_rate", "label": "Fully-loaded operator $/hr",               "default": 105, "unit": "$/hr",             "hint": "Fully-loaded cost per hour for licensed reactor operators and shift supervisors. Typical range: $85–$130/hr fully loaded." }
      ]
    },
    {
      "title": "Document Search & Retrieval",
      "inputs": [
        { "id": "searches_per_day",      "label": "Document searches per person per day (baseline)", "default": 4.5,  "unit": "searches", "key": true, "hint": "On average, how many times per day does each technical staff member search for information in plant documents, procedures, or databases? A reasonable estimate for nuclear technical staff is 3–7 searches/day." },
        { "id": "mins_per_search_base",  "label": "Avg minutes per search — baseline",             "default": 22,   "unit": "min",      "key": true, "hint": "How long does a typical document search take today — from query to finding the right information? Include time to navigate document management systems, search multiple sources, and verify currency. Nuclear technical environments: 15–40 min typical." },
        { "id": "mins_per_search_future","label": "Avg minutes per search — agent-assisted",       "default": 2.5,  "unit": "min",      "key": true, "hint": "Expected search time with natural language query returning relevant documents ranked by applicability. Target: <5 minutes for most queries." },
        { "id": "search_capture",        "label": "Time savings capture factor",                    "default": 0.50, "unit": "%", "pct": true, "hint": "Not every saved minute translates to productive output — some time will be absorbed by other activities. Conservative capture factor: 40–60%." },
        { "id": "working_days",          "label": "Working days per year",                          "default": 230,  "unit": "days",     "hint": "Effective working days per year per FTE after accounting for leave, training, and outage periods. Typical: 220–240 days." }
      ]
    },
    {
      "title": "Compliance & Audit Documentation",
      "inputs": [
        { "id": "compliance_hrs",  "label": "Engineer hrs/yr on document retrieval for compliance (% of total)", "default": 0.12, "unit": "%", "pct": true, "hint": "What fraction of total engineer time is spent searching for and assembling documents for compliance activities — 10CFR50 reporting, INPO self-assessments, corrective action program evidence? Estimate from your engineering organization." },
        { "id": "compliance_red",  "label": "Compliance prep retrieval time reduction",  "default": 0.55, "unit": "%", "pct": true, "key": true, "hint": "Expected reduction in document retrieval time for compliance activities. When the agent can pull relevant records instantly, compliance evidence assembly is dramatically faster. Benchmark: 45–65%." },
        { "id": "audit_events_yr", "label": "NRC inspections / audits per year",          "default": 4,    "unit": "events",             "hint": "How many NRC inspections, INPO evaluations, or major internal audits does your site prepare for annually?" },
        { "id": "audit_hrs",       "label": "Engineer hours per audit — preparation",     "default": 120,  "unit": "hrs",                "hint": "Average engineering hours spent preparing document responses and evidence packages for each audit/inspection. Check with your licensing or corrective action program team." },
        { "id": "audit_red",       "label": "Audit prep time reduction (agent)",          "default": 0.40, "unit": "%", "pct": true, "key": true, "hint": "Expected reduction in audit preparation time from faster document retrieval. Benchmark: 35–50%." }
      ]
    },
    {
      "title": "Cohere North Platform",
      "inputs": [
        { "id": "users_y1", "label": "Platform users — Year 1", "default": 75,    "unit": "users", "key": true },
        { "id": "users_y2", "label": "Platform users — Year 2", "default": 400,   "unit": "users", "key": true },
        { "id": "users_y3", "label": "Platform users — Year 3", "default": 1200,  "unit": "users", "key": true },
        { "id": "fee_y1",   "label": "Cohere fee — Year 1",     "default": 250000,  "unit": "$", "key": true },
        { "id": "fee_y2",   "label": "Cohere fee — Year 2",     "default": 1200000, "unit": "$", "key": true },
        { "id": "fee_y3",   "label": "Cohere fee — Year 3",     "default": 3000000, "unit": "$", "key": true },
        { "id": "rf_y1",    "label": "Value realization — Y1",  "default": 0.40, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y2",    "label": "Value realization — Y2",  "default": 0.75, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y3",    "label": "Value realization — Y3",  "default": 1.00, "unit": "%", "pct": true, "key": true }
      ]
    }
  ],
  "titleText": "Nuclear Plant Data Retrieval Acceleration"
});
