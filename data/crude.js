window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "crude",
  "name": "Crude Movement Change Mgmt",
  "meta": "Midstream · Scheduling & Nominations",
  "title": "Crude Movement <em>Change Management</em> Agent",
  "eyebrow": "Use Case · 07",
  "description": "Agentic processing of shipper-requested changes to nominated or scheduled crude movements — volume, origin/receipt point, delivery point, routing, commodity/grade, timing, batch/month, contract path, and post-apportionment adjustments.",
  "sections": [
    {
      "title": "Operating Scale",
      "inputs": [
        {
          "id": "change_reqs_day",
          "label": "Shipper change requests / day",
          "default": 85,
          "unit": "requests",
          "key": true
        },
        {
          "id": "scheduler_fte",
          "label": "Pipeline schedulers in scope",
          "default": 22,
          "unit": "FTEs"
        },
        {
          "id": "scheduler_rate",
          "label": "Fully-loaded scheduler $/hr",
          "default": 115,
          "unit": "$/hr"
        },
        {
          "id": "scheduler_hrs",
          "label": "Working hours / scheduler / yr",
          "default": 2000,
          "unit": "hrs"
        },
        {
          "id": "throughput_bpd",
          "label": "Pipeline throughput (bbl/day)",
          "default": 500000,
          "unit": "bbl/d",
          "key": true
        },
        {
          "id": "crude_price",
          "label": "Realized crude price",
          "default": 75,
          "unit": "$/bbl"
        }
      ]
    },
    {
      "title": "Change Request Processing Efficiency",
      "inputs": [
        {
          "id": "hrs_per_req_base",
          "label": "Scheduler hrs per change request (baseline)",
          "default": 1.8,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "hrs_per_req_future",
          "label": "Scheduler hrs per change request (future)",
          "default": 0.3,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "conflict_rate",
          "label": "% of requests with conflicts / exceptions",
          "default": 0.38,
          "unit": "%",
          "pct": true
        },
        {
          "id": "conflict_hrs",
          "label": "Additional hrs per conflicted request",
          "default": 2.5,
          "unit": "hrs"
        },
        {
          "id": "conflict_red",
          "label": "Conflict resolution time reduction",
          "default": 0.55,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Post-Apportionment Adjustment Accuracy",
      "inputs": [
        {
          "id": "apportion_events",
          "label": "Apportionment events / month",
          "default": 18,
          "unit": "events",
          "key": true
        },
        {
          "id": "apportion_err_rate",
          "label": "Error rate on post-apportionment adj (baseline)",
          "default": 0.08,
          "unit": "%",
          "pct": true
        },
        {
          "id": "apportion_err_future",
          "label": "Error rate (future)",
          "default": 0.01,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "apportion_err_cost",
          "label": "Avg cost per apportionment error",
          "default": 42000,
          "unit": "$"
        }
      ]
    },
    {
      "title": "Cycle Time & Commercial Value",
      "inputs": [
        {
          "id": "confirm_base",
          "label": "Change confirmation cycle time (hrs, baseline)",
          "default": 6.5,
          "unit": "hrs"
        },
        {
          "id": "confirm_future",
          "label": "Change confirmation cycle time (hrs, future)",
          "default": 0.5,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "volume_at_risk_pct",
          "label": "% of throughput affected by delayed confirms",
          "default": 0.04,
          "unit": "%",
          "pct": true
        },
        {
          "id": "margin_per_bbl",
          "label": "Margin contribution per bbl (tariff less variable cost)",
          "default": 1.85,
          "unit": "$/bbl"
        }
      ]
    },
    {
      "title": "Compliance & Audit Defensibility",
      "inputs": [
        {
          "id": "regulatory_hrs",
          "label": "Scheduler hrs / yr on audit & compliance prep",
          "default": 0.12,
          "unit": "%",
          "pct": true
        },
        {
          "id": "regulatory_red",
          "label": "Compliance prep time reduction",
          "default": 0.6,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "violation_risk",
          "label": "Estimated regulatory exposure / yr",
          "default": 350000,
          "unit": "$"
        },
        {
          "id": "violation_red",
          "label": "Violation risk reduction (audit trail)",
          "default": 0.5,
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
  "titleText": "Crude Movement Change Management Agent"
});
