window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "revprot",
  "name": "Revenue Protection Agent",
  "meta": "Power & Utilities · AMI / Customer",
  "title": "Revenue <em>Protection</em> Agent",
  "eyebrow": "Use Case · 08",
  "description": "Agentic detection and investigation prioritization for non-technical loss (NTL) — meter tampering, theft, unbilled usage, and systematic billing errors. Continuously analyzes AMI interval data against consumption baselines, peer-group comparisons, and physical event signals to generate scored investigation leads, auto-assign field crews, and track recovery from case open to revenue restoration.",
  "sections": [
    {
      "title": "Utility Scale",
      "inputs": [
        { "id": "customers",         "label": "Total electric customers",               "default": 600000,    "unit": "customers", "key": true },
        { "id": "annual_revenue",    "label": "Annual retail electric revenue",          "default": 900000000, "unit": "$",         "key": true },
        { "id": "investigators",     "label": "Revenue protection investigators (FTEs)", "default": 18,        "unit": "FTEs"                  },
        { "id": "investigator_rate", "label": "Fully-loaded investigator $/hr",          "default": 85,        "unit": "$/hr"                  }
      ]
    },
    {
      "title": "Non-Technical Loss (NTL)",
      "inputs": [
        { "id": "ntl_rate",              "label": "NTL as % of annual revenue (baseline)",           "default": 0.015, "unit": "%", "pct": true, "key": true },
        { "id": "detection_rate_base",   "label": "Detection rate — baseline (% of NTL identified)", "default": 0.35,  "unit": "%", "pct": true             },
        { "id": "detection_rate_future", "label": "Detection rate — agent-assisted",                 "default": 0.62,  "unit": "%", "pct": true, "key": true },
        { "id": "confirmation_rate",     "label": "% of flagged accounts confirmed in field",         "default": 0.65,  "unit": "%", "pct": true             },
        { "id": "recovery_per_account",  "label": "Avg revenue recovered per confirmed account",      "default": 1850,  "unit": "$",             "key": true }
      ]
    },
    {
      "title": "Investigation Efficiency",
      "inputs": [
        { "id": "investigations_yr",   "label": "Field investigations per year (baseline)", "default": 2400, "unit": "cases"                      },
        { "id": "hrs_per_case_base",   "label": "Investigator hours per case (baseline)",   "default": 6.5,  "unit": "hrs"                        },
        { "id": "hrs_per_case_future", "label": "Investigator hours per case (future)",     "default": 3.2,  "unit": "hrs",           "key": true  },
        { "id": "false_pos_base",      "label": "False positive rate — baseline",           "default": 0.42, "unit": "%", "pct": true              },
        { "id": "false_pos_future",    "label": "False positive rate — agent-assisted",     "default": 0.18, "unit": "%", "pct": true, "key": true },
        { "id": "truck_cost",          "label": "Cost per unnecessary field visit",          "default": 285,  "unit": "$"                          }
      ]
    },
    {
      "title": "Regulatory & Compliance",
      "inputs": [
        { "id": "regulatory_hrs", "label": "Investigator hrs/yr on reporting & compliance (% of total)", "default": 0.10, "unit": "%", "pct": true },
        { "id": "regulatory_red", "label": "Compliance prep time reduction",                             "default": 0.55, "unit": "%", "pct": true }
      ]
    },
    {
      "title": "Cohere North Platform",
      "inputs": [
        { "id": "users_y1", "label": "Users — Year 1",         "default": 100,     "unit": "users", "key": true },
        { "id": "users_y2", "label": "Users — Year 2",         "default": 900,     "unit": "users", "key": true },
        { "id": "users_y3", "label": "Users — Year 3",         "default": 2500,    "unit": "users", "key": true },
        { "id": "fee_y1",   "label": "Cohere fee — Year 1",    "default": 150000,  "unit": "$",     "key": true },
        { "id": "fee_y2",   "label": "Cohere fee — Year 2",    "default": 750000,  "unit": "$",     "key": true },
        { "id": "fee_y3",   "label": "Cohere fee — Year 3",    "default": 2000000, "unit": "$",     "key": true },
        { "id": "rf_y1",    "label": "Value realization — Y1", "default": 0.5, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y2",    "label": "Value realization — Y2", "default": 0.8, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y3",    "label": "Value realization — Y3", "default": 1,   "unit": "%", "pct": true, "key": true }
      ]
    }
  ],
  "titleText": "Revenue Protection Agent"
});
