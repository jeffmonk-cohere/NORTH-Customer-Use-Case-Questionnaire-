window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "safety",
  "name": "Safety Incident Agent",
  "meta": "2,000 FTE · $3.5B CAPEX",
  "title": "Safety <em>Incident</em> Agent",
  "eyebrow": "Use Case · 02",
  "description": "Agent accelerates incident investigation, automates JSA/prequal workflows, and predicts precursor signals.",
  "sections": [
    {
      "title": "Operational Scale",
      "inputs": [
        {
          "id": "ftes",
          "label": "Total employees (FTE)",
          "default": 2000,
          "unit": "FTE",
          "key": true
        },
        {
          "id": "contr_ratio",
          "label": "Contractor-to-employee ratio",
          "default": 1.5,
          "unit": "ratio"
        },
        {
          "id": "prod_bpd",
          "label": "Daily production",
          "default": 500000,
          "unit": "bbl/d"
        },
        {
          "id": "capex",
          "label": "Annual CAPEX spend",
          "default": 3500000000,
          "unit": "$",
          "key": true
        },
        {
          "id": "hrs",
          "label": "Hours / FTE / yr",
          "default": 2000,
          "unit": "hrs"
        }
      ]
    },
    {
      "title": "Safety Baseline",
      "inputs": [
        {
          "id": "trir",
          "label": "TRIR (baseline)",
          "default": 0.75,
          "unit": "per 200K",
          "key": true
        },
        {
          "id": "ltir",
          "label": "LTIR (baseline)",
          "default": 0.45,
          "unit": "per 200K",
          "key": true
        },
        {
          "id": "sig",
          "label": "Significant incidents / yr",
          "default": 12,
          "unit": "incidents",
          "key": true
        },
        {
          "id": "cost_rec",
          "label": "Cost per recordable",
          "default": 65000,
          "unit": "$"
        },
        {
          "id": "cost_lti",
          "label": "Cost per lost-time incident",
          "default": 180000,
          "unit": "$"
        },
        {
          "id": "cost_sig",
          "label": "Cost per significant incident",
          "default": 850000,
          "unit": "$"
        }
      ]
    },
    {
      "title": "Incident Reduction",
      "inputs": [
        {
          "id": "trir_red",
          "label": "TRIR/LTIR reduction (agent)",
          "default": 0.15,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "sig_red",
          "label": "Significant incident reduction",
          "default": 0.2,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "inv_hrs",
          "label": "Investigation hrs per significant",
          "default": 90,
          "unit": "hrs"
        },
        {
          "id": "inv_red",
          "label": "Investigation time reduction",
          "default": 0.4,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "inv_rate",
          "label": "Investigator $/hr",
          "default": 125,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Lost Time",
      "inputs": [
        {
          "id": "days_lti",
          "label": "Avg days away per LTI",
          "default": 15,
          "unit": "days"
        },
        {
          "id": "cost_day",
          "label": "Cost per lost day",
          "default": 650,
          "unit": "$/day"
        }
      ]
    },
    {
      "title": "CAPEX Stop-Work",
      "inputs": [
        {
          "id": "capex_exp",
          "label": "CAPEX exposed to stoppages",
          "default": 0.6,
          "unit": "%",
          "pct": true
        },
        {
          "id": "stop_rate",
          "label": "Baseline stoppage loss rate",
          "default": 0.01,
          "unit": "%",
          "pct": true
        },
        {
          "id": "stop_red",
          "label": "Stoppage reduction (agent)",
          "default": 0.2,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "margin",
          "label": "Margin impact of delay $",
          "default": 0.25,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Contractor Safety",
      "inputs": [
        {
          "id": "prequals",
          "label": "Prequal reviews / yr",
          "default": 1200,
          "unit": "reviews"
        },
        {
          "id": "prequal_hrs",
          "label": "Hrs per prequal (baseline)",
          "default": 4,
          "unit": "hrs"
        },
        {
          "id": "prequal_red",
          "label": "Prequal time reduction",
          "default": 0.5,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "prequal_rate",
          "label": "Reviewer $/hr",
          "default": 95,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Regulatory & Insurance",
      "inputs": [
        {
          "id": "wc_premium",
          "label": "WC + GL premium / yr",
          "default": 12000000,
          "unit": "$"
        },
        {
          "id": "prem_red",
          "label": "Premium reduction (EMR)",
          "default": 0.03,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "osha_avoid",
          "label": "OSHA exposure avoided / yr",
          "default": 150000,
          "unit": "$"
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
          "default": 1,
          "unit": "x",
          "key": true
        },
        {
          "id": "rf_y2",
          "label": "Value realization — Y2",
          "default": 2,
          "unit": "x",
          "key": true
        },
        {
          "id": "rf_y3",
          "label": "Value realization — Y3",
          "default": 2.5,
          "unit": "x",
          "key": true
        }
      ]
    }
  ],
  "titleText": "Safety Incident Agent"
});
