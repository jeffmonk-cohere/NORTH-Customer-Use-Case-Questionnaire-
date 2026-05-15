window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "nucdata",
  "name": "Nuclear Data Retrieval Acceleration",
  "meta": "Power & Utilities · Generation · Nuclear",
  "title": "Nuclear Plant Data <em>Retrieval</em> Acceleration",
  "eyebrow": "Use Case · 13",
  "description": "Natural language search across nuclear plant technical document corpuses — operating procedures, surveillance test records, maintenance histories, vendor manuals, technical specifications, and regulatory correspondence. Agent retrieves relevant data in seconds rather than hours, enabling engineers, operators, and compliance staff to spend more time on analysis and less on information hunting.",
  "sections": [
    {
      "title": "Engineering & Operations Scale",
      "inputs": [
        {
          "id": "eng_fte",
          "label": "Engineers and technical staff in scope",
          "default": 120,
          "unit": "FTEs",
          "key": true
        },
        {
          "id": "ops_fte",
          "label": "Operators and shift supervisors in scope",
          "default": 80,
          "unit": "FTEs"
        },
        {
          "id": "eng_rate",
          "label": "Fully-loaded engineer $/hr",
          "default": 145,
          "unit": "$/hr",
          "key": true
        },
        {
          "id": "ops_rate",
          "label": "Fully-loaded operator $/hr",
          "default": 105,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Document Search & Retrieval",
      "inputs": [
        {
          "id": "searches_per_day",
          "label": "Document searches per person per day (baseline)",
          "default": 4.5,
          "unit": "searches",
          "key": true
        },
        {
          "id": "mins_per_search_base",
          "label": "Avg minutes per search — baseline",
          "default": 22,
          "unit": "min",
          "key": true
        },
        {
          "id": "mins_per_search_future",
          "label": "Avg minutes per search — agent-assisted",
          "default": 2.5,
          "unit": "min",
          "key": true
        },
        {
          "id": "search_capture",
          "label": "Time savings capture factor",
          "default": 0.5,
          "unit": "%",
          "pct": true
        },
        {
          "id": "working_days",
          "label": "Working days per year",
          "default": 230,
          "unit": "days"
        }
      ]
    },
    {
      "title": "Compliance & Audit Documentation",
      "inputs": [
        {
          "id": "compliance_hrs",
          "label": "Engineer hrs/yr on document retrieval for compliance (% of total)",
          "default": 0.12,
          "unit": "%",
          "pct": true
        },
        {
          "id": "compliance_red",
          "label": "Compliance prep retrieval time reduction",
          "default": 0.55,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "audit_events_yr",
          "label": "NRC inspections / audits per year",
          "default": 4,
          "unit": "events"
        },
        {
          "id": "audit_hrs",
          "label": "Engineer hours per audit — preparation",
          "default": 120,
          "unit": "hrs"
        },
        {
          "id": "audit_red",
          "label": "Audit prep time reduction (agent)",
          "default": 0.4,
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
  "titleText": "Nuclear Plant Data Retrieval Acceleration"
});
