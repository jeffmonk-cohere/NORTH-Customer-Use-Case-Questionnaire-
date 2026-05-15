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
        {
          "id": "lic_eng_fte",
          "label": "Licensing and regulatory engineers (FTEs)",
          "default": 18,
          "unit": "FTEs",
          "key": true
        },
        {
          "id": "tech_eng_fte",
          "label": "Technical report writers and analysts (FTEs)",
          "default": 35,
          "unit": "FTEs",
          "key": true
        },
        {
          "id": "senior_rate",
          "label": "Fully-loaded senior engineer $/hr",
          "default": 165,
          "unit": "$/hr",
          "key": true
        },
        {
          "id": "staff_rate",
          "label": "Fully-loaded staff engineer $/hr",
          "default": 120,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Technical Deliverable Volume",
      "inputs": [
        {
          "id": "reports_yr",
          "label": "Technical reports and deliverables per year",
          "default": 180,
          "unit": "reports",
          "key": true
        },
        {
          "id": "hrs_per_rpt_base",
          "label": "Avg engineer hours per deliverable — baseline",
          "default": 42,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "hrs_per_rpt_future",
          "label": "Avg engineer hours per deliverable — agent",
          "default": 22,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "revision_cycles_base",
          "label": "Avg revision cycles per deliverable — baseline",
          "default": 2.8,
          "unit": "cycles"
        },
        {
          "id": "revision_cycles_future",
          "label": "Avg revision cycles per deliverable — agent",
          "default": 1.6,
          "unit": "cycles",
          "key": true
        },
        {
          "id": "hrs_per_revision",
          "label": "Engineer hours per revision cycle",
          "default": 8.5,
          "unit": "hrs"
        }
      ]
    },
    {
      "title": "Regulatory Filing Cycle Time",
      "inputs": [
        {
          "id": "lar_submissions",
          "label": "License amendment requests per year",
          "default": 8,
          "unit": "LARs",
          "key": true
        },
        {
          "id": "hrs_per_lar_base",
          "label": "Engineer hours per LAR — baseline",
          "default": 220,
          "unit": "hrs"
        },
        {
          "id": "hrs_per_lar_future",
          "label": "Engineer hours per LAR — agent-assisted",
          "default": 130,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "cycle_value_day",
          "label": "Business value per day of faster LAR approval",
          "default": 15000,
          "unit": "$",
          "key": true
        },
        {
          "id": "days_saved_per_lar",
          "label": "Days saved per LAR cycle (faster filing)",
          "default": 12,
          "unit": "days"
        }
      ]
    },
    {
      "title": "Cohere North Platform",
      "inputs": [
        {
          "id": "users_y1",
          "label": "Platform users — Year 1",
          "default": 75,
          "unit": "users",
          "key": true
        },
        {
          "id": "users_y2",
          "label": "Platform users — Year 2",
          "default": 400,
          "unit": "users",
          "key": true
        },
        {
          "id": "users_y3",
          "label": "Platform users — Year 3",
          "default": 1200,
          "unit": "users",
          "key": true
        },
        {
          "id": "fee_y1",
          "label": "Cohere fee — Year 1",
          "default": 150000,
          "unit": "$",
          "key": true
        },
        {
          "id": "fee_y2",
          "label": "Cohere fee — Year 2",
          "default": 700000,
          "unit": "$",
          "key": true
        },
        {
          "id": "fee_y3",
          "label": "Cohere fee — Year 3",
          "default": 1800000,
          "unit": "$",
          "key": true
        },
        {
          "id": "rf_y1",
          "label": "Value realization — Y1",
          "default": 0.4,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "rf_y2",
          "label": "Value realization — Y2",
          "default": 0.75,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "rf_y3",
          "label": "Value realization — Y3",
          "default": 1.0,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    }
  ],
  "titleText": "Nuclear Energy Deliverables Enhancement"
});
