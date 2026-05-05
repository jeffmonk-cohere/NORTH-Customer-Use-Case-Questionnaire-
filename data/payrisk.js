window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "payrisk",
  "name": "Payment Risk Prediction Agent",
  "meta": "Power & Utilities · AMI / Customer",
  "title": "Payment Risk <em>Prediction</em> Agent",
  "eyebrow": "Use Case · 10",
  "description": "Agentic account-level payment risk scoring and proactive intervention — predicting which customers are likely to miss payment before the bill is due, enabling personalized outreach, payment plan offers, and credit holds. Integrates AMI consumption signals, payment history, and economic stress markers to produce a daily risk score for each account and a recommended intervention action.",
  "sections": [
    {
      "title": "Utility & Customer Profile",
      "inputs": [
        { "id": "customers",      "label": "Total electric customers",             "default": 600000,    "unit": "customers", "key": true },
        { "id": "annual_revenue", "label": "Annual retail electric revenue",        "default": 900000000, "unit": "$",         "key": true },
        { "id": "delinq_rate",    "label": "Delinquency rate (% of customers/yr)", "default": 0.035,     "unit": "%", "pct": true, "key": true },
        { "id": "avg_bill",       "label": "Average monthly bill per customer",     "default": 110,       "unit": "$"                      }
      ]
    },
    {
      "title": "Bad Debt & Write-Offs",
      "inputs": [
        { "id": "bad_debt_pct",        "label": "Bad debt write-off rate (% of revenue)",           "default": 0.0045, "unit": "%", "pct": true, "key": true },
        { "id": "bad_debt_red",        "label": "Bad debt reduction — proactive intervention",       "default": 0.22,   "unit": "%", "pct": true, "key": true },
        { "id": "collection_cost_pct", "label": "Collection cost as % of delinquent balance",       "default": 0.18,   "unit": "%", "pct": true             },
        { "id": "collection_red",      "label": "Collection cost reduction (earlier intervention)", "default": 0.30,   "unit": "%", "pct": true             }
      ]
    },
    {
      "title": "Disconnect / Reconnect Avoidance",
      "inputs": [
        { "id": "disconnects_yr",  "label": "Disconnections for non-payment per year",        "default": 14000, "unit": "events", "key": true },
        { "id": "dc_red",          "label": "Disconnection reduction (payment plans)",         "default": 0.22,  "unit": "%", "pct": true, "key": true },
        { "id": "dc_cost",         "label": "Avg cost per disconnect + reconnect event",       "default": 285,   "unit": "$"                          },
        { "id": "dc_revenue_loss", "label": "Avg revenue foregone per disconnected account",  "default": 420,   "unit": "$"                          }
      ]
    },
    {
      "title": "Deposit Optimization",
      "inputs": [
        { "id": "deposit_pool",  "label": "Annual new accounts requiring deposit", "default": 18000, "unit": "accounts"                   },
        { "id": "avg_deposit",   "label": "Average deposit amount",               "default": 220,   "unit": "$"                          },
        { "id": "deposit_carry", "label": "Carrying cost rate on deposits held",  "default": 0.04,  "unit": "%", "pct": true             },
        { "id": "deposit_opt",   "label": "Deposit right-sizing improvement",     "default": 0.15,  "unit": "%", "pct": true, "key": true }
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
  "titleText": "Payment Risk Prediction Agent"
});
