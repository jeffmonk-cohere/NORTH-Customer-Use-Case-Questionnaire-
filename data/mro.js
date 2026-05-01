window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "mro",
  "name": "MRO Supply Chain Agent",
  "meta": "~$1B MRO spend · Upstream",
  "title": "MRO Supply Chain <em>&</em> Procurement Agent",
  "eyebrow": "Use Case · 06",
  "description": "Agentic orchestration of upstream MRO materials and services — inventory right-positioning, supplier intelligence and expediting, demand signal accuracy, emergency order avoidance, contract and compliance assurance, and requisition-to-PO cycle efficiency.",
  "sections": [
    {
      "title": "MRO Spend Profile",
      "inputs": [
        {
          "id": "mro_spend",
          "label": "Annual MRO spend (materials + services)",
          "default": 1000000000,
          "unit": "$",
          "key": true
        },
        {
          "id": "materials_share",
          "label": "Share that is materials (vs. services)",
          "default": 0.55,
          "unit": "%",
          "pct": true
        },
        {
          "id": "po_volume",
          "label": "Purchase orders issued per year",
          "default": 45000,
          "unit": "POs",
          "key": true
        },
        {
          "id": "buyer_fte",
          "label": "Procurement / buyers FTEs",
          "default": 85,
          "unit": "FTEs"
        },
        {
          "id": "buyer_rate",
          "label": "Fully-loaded buyer $/hr",
          "default": 95,
          "unit": "$/hr"
        },
        {
          "id": "buyer_hrs",
          "label": "Working hours / buyer / yr",
          "default": 2000,
          "unit": "hrs"
        }
      ]
    },
    {
      "title": "Inventory Optimization",
      "inputs": [
        {
          "id": "inv_value",
          "label": "Average inventory on hand (MRO)",
          "default": 180000000,
          "unit": "$",
          "key": true
        },
        {
          "id": "carry_rate",
          "label": "Carrying cost rate (capital + storage)",
          "default": 0.22,
          "unit": "%",
          "pct": true
        },
        {
          "id": "inv_reduction",
          "label": "Inventory reduction (right-positioning)",
          "default": 0.12,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "stockout_rate",
          "label": "Stockout events / yr (baseline)",
          "default": 420,
          "unit": "events"
        },
        {
          "id": "stockout_cost",
          "label": "Avg cost per stockout event",
          "default": 28000,
          "unit": "$"
        },
        {
          "id": "stockout_red",
          "label": "Stockout reduction (agent)",
          "default": 0.35,
          "unit": "%",
          "pct": true,
          "key": true
        }
      ]
    },
    {
      "title": "Emergency & Rush Order Avoidance",
      "inputs": [
        {
          "id": "emergency_share",
          "label": "Emergency / unplanned orders (% of POs)",
          "default": 0.18,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "emergency_premium",
          "label": "Cost premium on emergency orders",
          "default": 0.28,
          "unit": "%",
          "pct": true
        },
        {
          "id": "emergency_red",
          "label": "Emergency order reduction (agent)",
          "default": 0.3,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "expedite_cost",
          "label": "Avg expediting cost per emergency PO",
          "default": 1200,
          "unit": "$"
        }
      ]
    },
    {
      "title": "Supplier Intelligence & Expediting",
      "inputs": [
        {
          "id": "supplier_count",
          "label": "Active suppliers in scope",
          "default": 1800,
          "unit": "suppliers"
        },
        {
          "id": "late_delivery",
          "label": "POs with delivery issues (baseline %)",
          "default": 0.14,
          "unit": "%",
          "pct": true
        },
        {
          "id": "late_cost",
          "label": "Avg cost impact per late delivery",
          "default": 8500,
          "unit": "$"
        },
        {
          "id": "late_red",
          "label": "Late delivery reduction (early flagging)",
          "default": 0.25,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "expedite_hrs",
          "label": "Buyer hours / yr spent on manual expediting",
          "default": 0.25,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Contract & Compliance",
      "inputs": [
        {
          "id": "off_contract",
          "label": "Spend off-contract or maverick (baseline)",
          "default": 0.12,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "off_contract_red",
          "label": "Maverick spend reduction (agent)",
          "default": 0.4,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "price_delta",
          "label": "Avg premium paid on off-contract spend",
          "default": 0.17,
          "unit": "%",
          "pct": true
        },
        {
          "id": "contract_admin_hrs",
          "label": "Hrs / yr on contract admin (baseline)",
          "default": 0.12,
          "unit": "%",
          "pct": true
        },
        {
          "id": "contract_red",
          "label": "Contract admin time reduction",
          "default": 0.45,
          "unit": "%",
          "pct": true
        }
      ]
    },
    {
      "title": "Requisition-to-PO Efficiency",
      "inputs": [
        {
          "id": "hrs_per_po",
          "label": "Buyer hours per PO (baseline)",
          "default": 3.2,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "hrs_future",
          "label": "Buyer hours per PO (future)",
          "default": 1.1,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "cycle_base",
          "label": "Req-to-PO cycle time (baseline, days)",
          "default": 6.5,
          "unit": "days"
        },
        {
          "id": "cycle_future",
          "label": "Req-to-PO cycle time (future, days)",
          "default": 1.8,
          "unit": "days",
          "key": true
        },
        {
          "id": "cycle_rev_impact",
          "label": "Revenue / capacity impact per day saved",
          "default": 0.0008,
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
  "titleText": "MRO Supply Chain & Procurement Agent"
});
