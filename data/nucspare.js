window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "nucspare",
  "name": "Nuclear Spare Part Reordering",
  "meta": "Power & Utilities · Generation · Nuclear",
  "title": "Predictive Spare Part <em>Reordering</em> — Nuclear",
  "eyebrow": "Use Case · 12",
  "description": "AI-driven forecasting to predict spare part demand in nuclear plants — integrating maintenance schedules, surveillance records, outage plans, PMID history, and vendor lead times to right-size inventory, eliminate stockouts, and reduce excess stock. Agent generates reorder recommendations, flags long-lead critical items, and tracks order status against upcoming outage windows.",
  "sections": [
    {
      "title": "Plant & Inventory Profile",
      "inputs": [
        {
          "id": "units",
          "label": "Nuclear generating units in scope",
          "default": 1,
          "unit": "units"
        },
        {
          "id": "inventory_value",
          "label": "Total MRO / spare parts inventory value",
          "default": 80000000,
          "unit": "$",
          "key": true
        },
        {
          "id": "carry_rate",
          "label": "Annual inventory carrying cost rate",
          "default": 0.22,
          "unit": "%",
          "pct": true
        },
        {
          "id": "inventory_buyers",
          "label": "Nuclear procurement specialists (FTEs)",
          "default": 14,
          "unit": "FTEs"
        },
        {
          "id": "buyer_rate",
          "label": "Fully-loaded specialist $/hr",
          "default": 95,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Inventory Optimization",
      "inputs": [
        {
          "id": "inv_reduction",
          "label": "Inventory reduction via right-sizing",
          "default": 0.1,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "stockout_events",
          "label": "Stockout events per year (baseline)",
          "default": 18,
          "unit": "events",
          "key": true
        },
        {
          "id": "stockout_cost",
          "label": "Avg cost per stockout event",
          "default": 95000,
          "unit": "$",
          "key": true
        },
        {
          "id": "stockout_red",
          "label": "Stockout reduction (agent)",
          "default": 0.6,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Emergency Procurement Avoidance",
      "inputs": [
        {
          "id": "emerg_orders_yr",
          "label": "Emergency / expedite orders per year",
          "default": 45,
          "unit": "orders",
          "key": true
        },
        {
          "id": "emerg_premium",
          "label": "Avg premium on nuclear emergency orders",
          "default": 0.35,
          "unit": "%",
          "pct": true
        },
        {
          "id": "emerg_order_val",
          "label": "Avg value per emergency order",
          "default": 28000,
          "unit": "$"
        },
        {
          "id": "emerg_red",
          "label": "Emergency order reduction (agent)",
          "default": 0.4,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Outage Extension Avoidance",
      "inputs": [
        {
          "id": "outages_yr",
          "label": "Planned refueling / maintenance outages per year",
          "default": 1,
          "unit": "outages"
        },
        {
          "id": "ext_risk_days",
          "label": "Avg outage extension risk (days/outage)",
          "default": 1.2,
          "unit": "days",
          "key": true
        },
        {
          "id": "ext_red",
          "label": "Extension risk reduction (agent)",
          "default": 0.4,
          "unit": "%",
          "pct": true
        },
        {
          "id": "power_cost_day",
          "label": "Replacement power cost per day of outage",
          "default": 1200000,
          "unit": "$",
          "key": true
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
  "titleText": "Predictive Spare Part Reordering — Nuclear"
});
