window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "field",
  "name": "Field Technician Assistant",
  "meta": "1,200 wells · Permian",
  "title": "Field <em>Technician</em> Assistant",
  "eyebrow": "Use Case · 01",
  "description": "Agent supports alarm triage, guided procedures, work-order drafting, and failure-history retrieval.",
  "sections": [
    {
      "title": "Operating Scale",
      "inputs": [
        {
          "id": "wells",
          "label": "Total wells in portfolio",
          "default": 1200,
          "unit": "wells"
        },
        {
          "id": "crew",
          "label": "Field technician crew (Y1)",
          "default": 100,
          "unit": "FTEs",
          "key": true
        }
      ]
    },
    {
      "title": "Production Economics",
      "inputs": [
        {
          "id": "oil_price",
          "label": "Oil price (WTI realized)",
          "default": 80,
          "unit": "$/bbl",
          "key": true
        },
        {
          "id": "well_prod",
          "label": "Avg. well gross production",
          "default": 350,
          "unit": "bbl/d"
        },
        {
          "id": "nri",
          "label": "Net revenue interest",
          "default": 0.8,
          "unit": "%",
          "pct": true
        },
        {
          "id": "var_loe",
          "label": "Variable LOE per bbl",
          "default": 8,
          "unit": "$/bbl"
        }
      ]
    },
    {
      "title": "Downtime & Alarms",
      "inputs": [
        {
          "id": "alarms",
          "label": "Alarm events per well / yr",
          "default": 18,
          "unit": "events"
        },
        {
          "id": "field_resp",
          "label": "% alarms requiring field response",
          "default": 0.55,
          "unit": "%",
          "pct": true
        },
        {
          "id": "downtime_hr",
          "label": "Avg. downtime per event",
          "default": 9,
          "unit": "hours"
        },
        {
          "id": "dt_reduct",
          "label": "Downtime reduction with agent",
          "default": 0.3,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "prod_impact",
          "label": "Production impact multiplier",
          "default": 0.4,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Truck Rolls",
      "inputs": [
        {
          "id": "rolls",
          "label": "Truck rolls per well / yr",
          "default": 14,
          "unit": "rolls"
        },
        {
          "id": "roll_cost",
          "label": "Fully-loaded cost per roll",
          "default": 850,
          "unit": "$"
        },
        {
          "id": "roll_reduct",
          "label": "Truck-roll reduction",
          "default": 0.15,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Technician Productivity",
      "inputs": [
        {
          "id": "tech_cost",
          "label": "Fully-loaded tech cost / yr",
          "default": 135000,
          "unit": "$/FTE"
        },
        {
          "id": "admin_time",
          "label": "Admin & search time (baseline)",
          "default": 0.28,
          "unit": "%",
          "pct": true
        },
        {
          "id": "admin_red",
          "label": "Admin time reduction",
          "default": 0.4,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "capture",
          "label": "Capturable productivity factor",
          "default": 0.5,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Work Order Quality",
      "inputs": [
        {
          "id": "wos",
          "label": "Work orders per well / yr",
          "default": 22,
          "unit": "WOs"
        },
        {
          "id": "rework_rate",
          "label": "Rework / miscoded rate",
          "default": 0.12,
          "unit": "%",
          "pct": true
        },
        {
          "id": "rework_cost",
          "label": "Rework cost per WO",
          "default": 180,
          "unit": "$"
        },
        {
          "id": "dq_imp",
          "label": "Data quality improvement",
          "default": 0.5,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Safety",
      "inputs": [
        {
          "id": "recordables",
          "label": "Recordables per 100 FTE / yr",
          "default": 1.2,
          "unit": "incidents"
        },
        {
          "id": "incident_cost",
          "label": "Cost per recordable",
          "default": 85000,
          "unit": "$"
        },
        {
          "id": "inc_reduct",
          "label": "Incident reduction",
          "default": 0.1,
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
          "label": "Value realization factor — Y1",
          "default": 1,
          "unit": "x",
          "key": true
        },
        {
          "id": "rf_y2",
          "label": "Value realization factor — Y2",
          "default": 2,
          "unit": "x",
          "key": true
        },
        {
          "id": "rf_y3",
          "label": "Value realization factor — Y3",
          "default": 2.5,
          "unit": "x",
          "key": true
        }
      ]
    }
  ],
  "titleText": "Field Technician Assistant"
});
