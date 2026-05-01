window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "jobplan",
  "name": "Job Planning Agent",
  "meta": "~45 districts · Global OFS",
  "title": "Job <em>Planning</em> Agent",
  "eyebrow": "Use Case · 04",
  "description": "Agentic job planning for an oilfield services delivery organization.",
  "sections": [
    {
      "title": "Operating Scale (Global)",
      "inputs": [
        {
          "id": "jobs_month",
          "label": "Jobs per month (global, all service lines)",
          "default": 5000,
          "unit": "jobs",
          "key": true
        },
        {
          "id": "dtps",
          "label": "DTPs in scope (global)",
          "default": 400,
          "unit": "FTEs"
        },
        {
          "id": "eng_leads",
          "label": "Engineering Leads in scope",
          "default": 45,
          "unit": "FTEs"
        }
      ]
    },
    {
      "title": "Current-State Planner Effort",
      "inputs": [
        {
          "id": "hrs_baseline",
          "label": "Planner hours per job (baseline)",
          "default": 12,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "hrs_future",
          "label": "Planner hours per job (future)",
          "default": 6,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "planner_rate",
          "label": "Fully-loaded planner $/hr",
          "default": 110,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Cycle Time & Revenue",
      "inputs": [
        {
          "id": "cycle_base",
          "label": "Cycle time baseline (award→field-ready)",
          "default": 3,
          "unit": "days"
        },
        {
          "id": "cycle_future",
          "label": "Cycle time future",
          "default": 1.5,
          "unit": "days",
          "key": true
        },
        {
          "id": "global_rev",
          "label": "Global annualized service-line revenue",
          "default": 4000000000,
          "unit": "$",
          "key": true
        },
        {
          "id": "cycle_margin_uplift",
          "label": "Margin uplift on cycle-sensitive revenue",
          "default": 0.0015,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Plan Quality & Rework",
      "inputs": [
        {
          "id": "pass_base",
          "label": "First-pass approval rate (baseline)",
          "default": 0.55,
          "unit": "%",
          "pct": true
        },
        {
          "id": "pass_future",
          "label": "First-pass approval rate (future)",
          "default": 0.75,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "rework_hrs",
          "label": "Rework hours per sent-back plan",
          "default": 4,
          "unit": "hrs"
        }
      ]
    },
    {
      "title": "Plan-Defect NPT Avoidance",
      "inputs": [
        {
          "id": "npt_rate_base",
          "label": "Jobs with plan-defect NPT (baseline)",
          "default": 0.06,
          "unit": "%",
          "pct": true
        },
        {
          "id": "npt_rate_future",
          "label": "Jobs with plan-defect NPT (future)",
          "default": 0.04,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "npt_hours_avg",
          "label": "Avg NPT hours per defect event",
          "default": 6,
          "unit": "hrs"
        },
        {
          "id": "npt_cost_hour",
          "label": "Cost exposure per NPT hour",
          "default": 3500,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Knowledge Capture",
      "inputs": [
        {
          "id": "senior_share",
          "label": "Share of jobs dependent on senior DTP judgment",
          "default": 0.3,
          "unit": "%",
          "pct": true
        },
        {
          "id": "knowledge_uplift",
          "label": "Junior DTP uplift from agent-assisted plans",
          "default": 0.15,
          "unit": "%",
          "pct": true,
          "key": true
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
  "titleText": "Job Planning Agent"
});
