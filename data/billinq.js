window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "billinq",
  "name": "Billing Inquiry Resolution Agent",
  "meta": "Power & Utilities · AMI / Customer",
  "title": "Billing Inquiry <em>Resolution</em> Agent",
  "eyebrow": "Use Case · 09",
  "description": "Agentic resolution of customer billing inquiries across digital and IVR channels — bill spike explanation, estimated read disputes, rate plan questions, payment arrangement setup, and high-usage alerts. Agent resolves Tier 1-2 contacts without a human agent and provides structured context packages to agents for Tier 3 escalations, reducing handle time and improving first-contact resolution.",
  "sections": [
    {
      "title": "Contact Center Scale",
      "inputs": [
        { "id": "customers",      "label": "Total electric customers",              "default": 600000, "unit": "customers", "key": true },
        { "id": "calls_per_cust", "label": "Billing-related calls per customer/yr", "default": 1.4,    "unit": "calls",     "key": true },
        { "id": "agents_fte",     "label": "Billing CSR FTEs",                      "default": 95,     "unit": "FTEs"                  },
        { "id": "agent_rate",     "label": "Fully-loaded CSR $/hr",                 "default": 52,     "unit": "$/hr"                  },
        { "id": "cost_per_call",  "label": "Fully-loaded cost per live call",        "default": 8.40,   "unit": "$",         "key": true }
      ]
    },
    {
      "title": "Deflection & Self-Service",
      "inputs": [
        { "id": "tier1_share",  "label": "Tier 1-2 calls eligible for agent deflection", "default": 0.58, "unit": "%", "pct": true             },
        { "id": "deflect_rate", "label": "Deflection rate — agent-assisted channels",    "default": 0.38, "unit": "%", "pct": true, "key": true },
        { "id": "digital_cost", "label": "Cost per deflected digital / IVR interaction", "default": 0.90, "unit": "$"                          }
      ]
    },
    {
      "title": "Handle Time Reduction",
      "inputs": [
        { "id": "aht_base",     "label": "Average handle time — baseline (minutes)", "default": 6.8,  "unit": "min", "key": true },
        { "id": "aht_future",   "label": "Average handle time — agent-assisted",     "default": 4.5,  "unit": "min", "key": true },
        { "id": "assist_share", "label": "% of live calls using agent assist",        "default": 0.70, "unit": "%",   "pct": true }
      ]
    },
    {
      "title": "First-Contact Resolution",
      "inputs": [
        { "id": "fcr_base",    "label": "First-contact resolution rate — baseline", "default": 0.74, "unit": "%", "pct": true             },
        { "id": "fcr_future",  "label": "First-contact resolution rate — future",   "default": 0.86, "unit": "%", "pct": true, "key": true },
        { "id": "repeat_cost", "label": "Cost of a repeat contact",                 "default": 9.20, "unit": "$"                          }
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
  "titleText": "Billing Inquiry Resolution Agent"
});
