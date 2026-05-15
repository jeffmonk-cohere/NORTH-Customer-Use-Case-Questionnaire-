window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "nuctrouble",
  "name": "Nuclear Troubleshooting Acceleration",
  "meta": "Power & Utilities · Generation · Nuclear",
  "title": "Nuclear Plant <em>Troubleshooting</em> Acceleration",
  "eyebrow": "Use Case · 14",
  "description": "Query-based troubleshooting system for nuclear plant operators and engineers — retrieving equipment maintenance histories, flagging similar past failure modes, surfacing vendor technical bulletins and corrective actions, and generating structured failure analysis packages. A feedback loop captures resolution outcomes to continuously improve diagnostic accuracy and reduce repeat failures.",
  "sections": [
    {
      "title": "Maintenance & Operations Scale",
      "inputs": [
        {
          "id": "maint_fte",
          "label": "Maintenance engineers and technicians in scope",
          "default": 90,
          "unit": "FTEs",
          "key": true
        },
        {
          "id": "ops_fte",
          "label": "Operators and shift supervisors",
          "default": 80,
          "unit": "FTEs"
        },
        {
          "id": "maint_rate",
          "label": "Fully-loaded maintenance specialist $/hr",
          "default": 110,
          "unit": "$/hr",
          "key": true
        }
      ]
    },
    {
      "title": "Troubleshooting Cycle Time",
      "inputs": [
        {
          "id": "trouble_events_yr",
          "label": "Significant troubleshooting events per year",
          "default": 280,
          "unit": "events",
          "key": true
        },
        {
          "id": "hrs_per_event_base",
          "label": "Avg engineer hours per event — baseline",
          "default": 8.5,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "hrs_per_event_future",
          "label": "Avg engineer hours per event — agent-assisted",
          "default": 3.2,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "downtime_events",
          "label": "Events per year with associated generation downtime",
          "default": 35,
          "unit": "events"
        },
        {
          "id": "downtime_hrs_saved",
          "label": "Avg downtime hours saved per event (agent)",
          "default": 4.0,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "power_cost_hr",
          "label": "Replacement power cost per hour of downtime",
          "default": 50000,
          "unit": "$"
        }
      ]
    },
    {
      "title": "Root Cause Analysis & Repeat Failures",
      "inputs": [
        {
          "id": "rca_events_yr",
          "label": "Formal RCA investigations per year",
          "default": 45,
          "unit": "events",
          "key": true
        },
        {
          "id": "hrs_per_rca_base",
          "label": "Engineer hours per RCA — baseline",
          "default": 65,
          "unit": "hrs"
        },
        {
          "id": "hrs_per_rca_future",
          "label": "Engineer hours per RCA — agent-assisted",
          "default": 32,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "repeat_failure_rate",
          "label": "% of failures that are repeat occurrences",
          "default": 0.18,
          "unit": "%",
          "pct": true
        },
        {
          "id": "repeat_red",
          "label": "Repeat failure reduction (better diagnosis)",
          "default": 0.3,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "repeat_cost",
          "label": "Avg cost per repeat failure event",
          "default": 85000,
          "unit": "$"
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
          "default": 250000,
          "unit": "$",
          "key": true
        },
        {
          "id": "fee_y2",
          "label": "Cohere fee — Year 2",
          "default": 1200000,
          "unit": "$",
          "key": true
        },
        {
          "id": "fee_y3",
          "label": "Cohere fee — Year 3",
          "default": 3000000,
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
  "titleText": "Nuclear Plant Troubleshooting Acceleration"
});
