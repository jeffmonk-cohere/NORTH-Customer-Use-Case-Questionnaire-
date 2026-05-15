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
        { "id": "units",            "label": "Nuclear generating units in scope",          "default": 1,        "unit": "units",   "hint": "Number of reactor units covered by this deployment. Most sites are 1-2 units; adjust inventory value accordingly." },
        { "id": "inventory_value",  "label": "Total MRO / spare parts inventory value",    "default": 80000000, "unit": "$",       "key": true, "hint": "Current carrying value of your nuclear-grade MRO and spare parts inventory. Check your materials management or warehouse management system. Typical single-unit site range: $40M–$150M." },
        { "id": "carry_rate",       "label": "Annual inventory carrying cost rate",        "default": 0.22,     "unit": "%", "pct": true, "hint": "Total annual cost to carry inventory including capital (WACC), warehousing, insurance, and obsolescence. Typical nuclear range: 18–28%." },
        { "id": "inventory_buyers", "label": "Nuclear procurement specialists (FTEs)",     "default": 14,       "unit": "FTEs",    "hint": "Procurement staff who manage nuclear-grade part orders, vendor qualification, and expediting." },
        { "id": "buyer_rate",       "label": "Fully-loaded specialist $/hr",               "default": 95,       "unit": "$/hr",    "hint": "Fully-loaded cost per hour for nuclear procurement specialists including salary, benefits, and overhead." }
      ]
    },
    {
      "title": "Inventory Optimization",
      "inputs": [
        { "id": "inv_reduction",   "label": "Inventory reduction via right-sizing",     "default": 0.10, "unit": "%", "pct": true, "key": true, "hint": "Expected reduction in total inventory value from AI-driven demand forecasting and min/max optimization. Conservative nuclear benchmark: 8–15%. Your materials team or an inventory audit can estimate current overstock." },
        { "id": "stockout_events", "label": "Stockout events per year (baseline)",      "default": 18,   "unit": "events", "key": true, "hint": "How many times per year does your plant experience a part not being available when needed for a work order? Check your CMMS for 'material not available' deferrals." },
        { "id": "stockout_cost",   "label": "Avg cost per stockout event",              "default": 95000,"unit": "$",      "key": true, "hint": "Fully-loaded cost per stockout: labor waiting for parts + expediting premium + any schedule slip. Nuclear stockouts typically run $25K–$250K depending on criticality and outage context." },
        { "id": "stockout_red",    "label": "Stockout reduction (agent)",               "default": 0.60, "unit": "%", "pct": true, "key": true, "hint": "Expected reduction in stockout frequency from predictive reorder alerts and long-lead flagging. Conservative benchmark: 50–70%." }
      ]
    },
    {
      "title": "Emergency Procurement Avoidance",
      "inputs": [
        { "id": "emerg_orders_yr", "label": "Emergency / expedite orders per year",     "default": 45,   "unit": "orders", "key": true, "hint": "How many purchase orders per year are placed on an emergency or expedited basis? Check your procurement system for 'expedite' or 'AOG' flags." },
        { "id": "emerg_premium",   "label": "Avg premium on nuclear emergency orders",  "default": 0.35, "unit": "%", "pct": true, "hint": "Price premium over standard purchase price for expedited nuclear-grade parts. Nuclear premium range: 25–60% over standard pricing due to qualified supplier constraints and air freight." },
        { "id": "emerg_order_val", "label": "Avg value per emergency order",            "default": 28000,"unit": "$",      "hint": "Average dollar value of an emergency purchase order. Check your purchasing system for expedited POs over the last 12 months." },
        { "id": "emerg_red",       "label": "Emergency order reduction (agent)",        "default": 0.40, "unit": "%", "pct": true, "key": true, "hint": "Expected reduction in emergency orders from better demand forecasting and earlier reorder triggers. Benchmark: 30–50% reduction." }
      ]
    },
    {
      "title": "Outage Extension Avoidance",
      "inputs": [
        { "id": "outages_yr",      "label": "Planned refueling / maintenance outages per year", "default": 1, "unit": "outages", "hint": "Number of planned refueling or extended maintenance outages per unit per year. Typical PWR/BWR: 1 per 18–24 months." },
        { "id": "ext_risk_days",   "label": "Avg outage extension risk (days/outage)",  "default": 1.2, "unit": "days", "key": true, "hint": "What is the average number of days your outages have extended beyond the original schedule in the last 3–5 outages? Check your outage performance reports." },
        { "id": "ext_red",         "label": "Extension risk reduction (agent)",         "default": 0.40, "unit": "%", "pct": true, "hint": "Fraction of extension risk attributable to material unavailability that the agent eliminates. Conservative: 30–50%." },
        { "id": "power_cost_day",  "label": "Replacement power cost per day of outage", "default": 1200000, "unit": "$", "key": true, "hint": "Daily cost of replacement power when your unit is offline. Calculation: unit MW × average spot power price × 24 hrs. For a 1GW unit at $50/MWh: 1000 × $50 × 24 = $1.2M/day." }
      ]
    },
    {
      "title": "Cohere North Platform",
      "inputs": [
        { "id": "users_y1", "label": "Platform users — Year 1", "default": 75,    "unit": "users", "key": true },
        { "id": "users_y2", "label": "Platform users — Year 2", "default": 400,   "unit": "users", "key": true },
        { "id": "users_y3", "label": "Platform users — Year 3", "default": 1200,  "unit": "users", "key": true },
        { "id": "fee_y1",   "label": "Cohere fee — Year 1",     "default": 150000,  "unit": "$", "key": true },
        { "id": "fee_y2",   "label": "Cohere fee — Year 2",     "default": 700000,  "unit": "$", "key": true },
        { "id": "fee_y3",   "label": "Cohere fee — Year 3",     "default": 1800000, "unit": "$", "key": true },
        { "id": "rf_y1",    "label": "Value realization — Y1",  "default": 0.40, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y2",    "label": "Value realization — Y2",  "default": 0.75, "unit": "%", "pct": true, "key": true },
        { "id": "rf_y3",    "label": "Value realization — Y3",  "default": 1.00, "unit": "%", "pct": true, "key": true }
      ]
    }
  ],
  "titleText": "Predictive Spare Part Reordering — Nuclear"
});
