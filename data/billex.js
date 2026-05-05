window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "billex",
  "name": "Billing Exception Resolution Agent",
  "meta": "Power & Utilities · AMI / Customer",
  "title": "Billing Exception <em>Resolution</em> Agent",
  "eyebrow": "Use Case · 11",
  "description": "Agentic triage and auto-resolution of billing exceptions — accounts that fall out of the automated billing run due to estimated reads, meter data management errors, rate code mismatches, unbilled periods, and high-bill flags. Agent resolves routine exception types autonomously, provides billing specialists with structured diagnostic packages for complex cases, and tracks exception aging to minimize revenue recognition delay.",
  "sections": [
    {
      "title": "Billing Operations Scale",
      "inputs": [
        { "id": "customers",       "label": "Total electric customers",              "default": 600000, "unit": "customers", "key": true },
        { "id": "billing_cycles",  "label": "Billing cycles per year",               "default": 12,     "unit": "cycles"                },
        { "id": "exception_rate",  "label": "Exception rate (% of bills per cycle)", "default": 0.035,  "unit": "%", "pct": true, "key": true },
        { "id": "billing_fte",     "label": "Billing specialists working exceptions", "default": 22,     "unit": "FTEs"                  },
        { "id": "billing_rate",    "label": "Fully-loaded billing specialist $/hr",  "default": 58,     "unit": "$/hr"                  },
        { "id": "billing_hrs",     "label": "Working hours / specialist / yr",       "default": 2000,   "unit": "hrs"                   }
      ]
    },
    {
      "title": "Auto-Resolution",
      "inputs": [
        { "id": "routine_share",      "label": "% of exceptions that are routine / repeatable", "default": 0.62, "unit": "%", "pct": true             },
        { "id": "auto_res_rate",      "label": "Auto-resolution rate on routine exceptions",    "default": 0.55, "unit": "%", "pct": true, "key": true },
        { "id": "hrs_per_exc_base",   "label": "Specialist hours per exception (baseline)",     "default": 0.85, "unit": "hrs",           "key": true },
        { "id": "hrs_per_exc_future", "label": "Specialist hours per exception (future)",       "default": 0.28, "unit": "hrs",           "key": true }
      ]
    },
    {
      "title": "Exception Error & Rework",
      "inputs": [
        { "id": "error_rate_base",   "label": "Exception resolution error rate — baseline", "default": 0.07, "unit": "%", "pct": true             },
        { "id": "error_rate_future", "label": "Exception resolution error rate — future",   "default": 0.02, "unit": "%", "pct": true, "key": true },
        { "id": "rework_cost",       "label": "Avg cost per billing error requiring rework", "default": 95,   "unit": "$"                          }
      ]
    },
    {
      "title": "DSO & Revenue Recognition",
      "inputs": [
        { "id": "avg_bill_value",  "label": "Average bill value per exception account",           "default": 145,  "unit": "$",           "key": true },
        { "id": "dso_delay_days",  "label": "Avg days delayed billing per exception (baseline)",  "default": 8.5,  "unit": "days"                     },
        { "id": "dso_future_days", "label": "Avg days delayed billing per exception (future)",    "default": 1.5,  "unit": "days",        "key": true },
        { "id": "cost_of_capital", "label": "Cost of capital / discount rate",                    "default": 0.08, "unit": "%", "pct": true           }
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
  "titleText": "Billing Exception Resolution Agent"
});
