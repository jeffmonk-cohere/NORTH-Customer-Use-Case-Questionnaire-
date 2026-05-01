window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "prod",
  "name": "Production Loss Recovery",
  "meta": "840 kboed · Multi-basin",
  "title": "Production <em>Loss</em> Recovery",
  "eyebrow": "Use Case · 03",
  "description": "Agent reduces externally-driven curtailments from pipelines, weather, power, logistics, midstream, and dispatch",
  "sections": [
    {
      "title": "Production Profile",
      "inputs": [
        {
          "id": "prod_total",
          "label": "Total operated production",
          "default": 840000,
          "unit": "BOE/d",
          "key": true
        },
        {
          "id": "days",
          "label": "Operating days / yr",
          "default": 365,
          "unit": "days"
        },
        {
          "id": "realized",
          "label": "Realized revenue (modeled)",
          "default": 45,
          "unit": "$/BOE",
          "key": true
        },
        {
          "id": "loe",
          "label": "Variable LOE per BOE",
          "default": 9,
          "unit": "$/BOE"
        },
        {
          "id": "royalty",
          "label": "Royalties & prod. taxes",
          "default": 0.22,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Baseline Deferred Production",
      "inputs": [
        {
          "id": "d_pipe",
          "label": "Pipeline takeaway deferral",
          "default": 0.01,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "d_facility",
          "label": "Third-party facility outages",
          "default": 0.005,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "d_weather",
          "label": "Weather impacts",
          "default": 0.005,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "d_power",
          "label": "Power outages & electrical",
          "default": 0.003,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "d_truck",
          "label": "Trucking / logistics delays",
          "default": 0.002,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "d_workforce",
          "label": "Workforce & dispatch",
          "default": 0.002,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Agent Recovery Rates",
      "inputs": [
        {
          "id": "r_pipe",
          "label": "Pipeline — recovery %",
          "default": 0.15,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "r_facility",
          "label": "Third-party facility — recovery %",
          "default": 0.12,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "r_weather",
          "label": "Weather — recovery %",
          "default": 0.2,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "r_power",
          "label": "Power — recovery %",
          "default": 0.18,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "r_truck",
          "label": "Trucking & logistics — recovery %",
          "default": 0.25,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "r_workforce",
          "label": "Workforce & dispatch — recovery %",
          "default": 0.3,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Value Adjustments",
      "inputs": [
        {
          "id": "capture",
          "label": "Netback capture factor",
          "default": 0.85,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "hedge",
          "label": "Hedge overlap haircut",
          "default": 0.05,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Cohere North Platform",
      "inputs": [
        {
          "id": "users_y1",
          "label": "Users — Year 1",
          "default": 100,
          "unit": "users",
          "key": true
        },
        {
          "id": "users_y2",
          "label": "Users — Year 2",
          "default": 900,
          "unit": "users",
          "key": true
        },
        {
          "id": "users_y3",
          "label": "Users — Year 3",
          "default": 2500,
          "unit": "users",
          "key": true
        },
        {
          "id": "fee_y1",
          "label": "Cohere fee — Year 1",
          "default": 250000,
          "unit": "$",
          "key": true
        },
        {
          "id": "fee_y2",
          "label": "Cohere fee — Year 2",
          "default": 1400000,
          "unit": "$",
          "key": true
        },
        {
          "id": "fee_y3",
          "label": "Cohere fee — Year 3",
          "default": 3500000,
          "unit": "$",
          "key": true
        },
        {
          "id": "rf_y1",
          "label": "Value realization — Y1",
          "default": 0.5,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "rf_y2",
          "label": "Value realization — Y2",
          "default": 0.8,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "rf_y3",
          "label": "Value realization — Y3",
          "default": 1,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    }
  ],
  "titleText": "Production Loss Recovery"
});
