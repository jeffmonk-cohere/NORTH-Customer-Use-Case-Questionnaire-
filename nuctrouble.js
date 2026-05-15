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
        { "id": "maint_fte",  "label": "Maintenance engineers and technicians in scope", "default": 90,  "unit": "FTEs", "key": true, "hint": "Maintenance engineers, system engineers, and I&C technicians who perform or direct troubleshooting work. Include both nuclear and balance-of-plant maintenance staff in scope." },
        { "id": "ops_fte",   "label": "Operators and shift supervisors",                 "default": 80,  "unit": "FTEs",             "hint": "Licensed operators and shift supervisors who initiate and monitor troubleshooting activities." },
        { "id": "maint_rate","label": "Fully-loaded maintenance specialist $/hr",         "default": 110, "unit": "$/hr", "key": true, "hint": "Fully-loaded cost per hour for maintenance engineers and I&C technicians including salary, benefits, and overhead. Typical nuclear range: $90–$135/hr." }
      ]
    },
    {
      "title": "Troubleshooting Cycle Time",
      "inputs": [
        { "id": "trouble_events_yr",    "label": "Significant troubleshooting events per year",  "default": 280,   "unit": "events", "key": true, "hint": "How many work orders per year require active troubleshooting rather than straightforward preventive or corrective maintenance? Check your CMMS for 'troubleshoot' or 'diagnose' task types, or estimate as a fraction of total corrective maintenance events." },
        { "id": "hrs_per_event_base",   "label": "Avg engineer hours per event — baseline",      "default": 8.5,   "unit": "hrs",    "key": true, "hint": "Average hours an engineer spends per troubleshooting event including equipment history review, procedure lookup, failure analysis, and documentation. Check your labor tracking system or estimate with your maintenance supervisor." },
        { "id": "hrs_per_event_future", "label": "Avg engineer hours per event — agent-assisted","default": 3.2,   "unit": "hrs",    "key": true, "hint": "With the agent pre-loading equipment history, similar failure patterns, and vendor bulletins, engineers focus on analysis rather than research. Target: 3–4 hours for events that currently take 8–10 hours." },
        { "id": "downtime_events",      "label": "Events per year with associated generation downtime", "default": 35, "unit": "events", "hint": "Of your total troubleshooting events, how many result in actual generation loss (forced outage or forced derating)? Check your FORA or production loss reports." },
        { "id": "downtime_hrs_saved",   "label": "Avg downtime hours saved per event (agent)",   "default": 4.0,   "unit": "hrs",    "key": true, "hint": "For events with generation impact, how many hours of downtime can be avoided with faster diagnosis? A 4-hour reduction is conservative — faster root cause identification enables faster corrective action." },
        { "id": "power_cost_hr",        "label": "Replacement power cost per hour of downtime",  "default": 50000, "unit": "$",               "hint": "Hourly cost of replacement power when unit is offline or derated. Calculation: unit MW × replacement power price ($/MWh). For a 1GW unit at $50/MWh: 1000 × $50 = $50,000/hr." }
      ]
    },
    {
      "title": "Root Cause Analysis & Repeat Failures",
      "inputs": [
        { "id": "rca_events_yr",      "label": "Formal RCA investigations per year",            "default": 45,   "unit": "events", "key": true, "hint": "How many Apparent Cause Evaluations (ACEs) or Root Cause Analyses (RCAs) does your site conduct annually? Check your Corrective Action Program database." },
        { "id": "hrs_per_rca_base",   "label": "Engineer hours per RCA — baseline",             "default": 65,   "unit": "hrs",               "hint": "Average engineering hours to complete a formal RCA including document gathering, interviews, analysis, and report writing. Industry range: 40–120 hours depending on complexity." },
        { "id": "hrs_per_rca_future", "label": "Engineer hours per RCA — agent-assisted",       "default": 32,   "unit": "hrs",    "key": true, "hint": "With agent-generated evidence packages (equipment history, similar events, causal factors), engineers spend more time on analysis and less on data gathering. Target: 45–55% reduction in RCA cycle time." },
        { "id": "repeat_failure_rate","label": "% of failures that are repeat occurrences",      "default": 0.18, "unit": "%", "pct": true,    "hint": "What fraction of your corrective maintenance events are repeat failures — the same component or failure mode recurring within 2 years? Check your CAP trending data. Industry benchmark: 15–25%." },
        { "id": "repeat_red",         "label": "Repeat failure reduction (better diagnosis)",    "default": 0.30, "unit": "%", "pct": true, "key": true, "hint": "With better root cause identification and corrective action tracking, what fraction of repeat failures can be eliminated? Conservative benchmark: 25–35% reduction." },
        { "id": "repeat_cost",        "label": "Avg cost per repeat failure event",              "default": 85000,"unit": "$",               "hint": "Fully-loaded cost of a repeat failure including labor, parts, and any generation impact. Estimate as 1.5–2× the cost of the original event due to investigation and enhanced corrective action requirements." }
      ]
    },
    {
      "title": "Cohere North Platform",
      "inputs": [
        { "id": "users_y1", "label": "Platform users — Year 1", "default": 75,    "unit": "users", "key": true },
        { "id": "users_y2", "label": "Platform users — Year 2", "default": 400,   "unit": "users", "key": true },
        { "id": "users_y3", "label": "Platform users — Year 3", "default": 1200,  "unit": "users", "key": true },
        { "id": "fee_y1",   "label": "Cohere fee — Year 1",     "default": 250000,  "unit": "$", "key": true },
        { "id": "fee_y2",   "label": "Cohere fee — Year 2",     "default": 1200000, "unit": "$", "key": true },
        { "id": "fee_y3",   "label": "Cohere fee — Year 3",     "default": 3000000, "unit": "$", "key": true },
        { "id": "rf_y1",    "label": "Value realization — Y1",  "default": 0.40, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y2",    "label": "Value realization — Y2",  "default": 0.75, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y3",    "label": "Value realization — Y3",  "default": 1.00, "unit": "%", "pct": true, "key": true }
      ]
    }
  ],
  "titleText": "Nuclear Plant Troubleshooting Acceleration"
});
