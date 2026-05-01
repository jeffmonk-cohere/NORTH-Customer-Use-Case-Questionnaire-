window.NORTH_USE_CASES = window.NORTH_USE_CASES || [];
window.NORTH_USE_CASES.push({
  "id": "workforce",
  "name": "Workforce Operations Agent",
  "meta": "~15,000 FTEs · Global HR",
  "title": "Workforce <em>Operations</em> Agent",
  "eyebrow": "Use Case · 05",
  "description": "Agentic workforce operations at enterprise scale — job-description lifecycle, certification tracking, personalized training, recruiting, and field readiness.",
  "sections": [
    {
      "title": "Workforce Scope (Global)",
      "inputs": [
        {
          "id": "ftes",
          "label": "Field-facing FTEs (global)",
          "default": 15000,
          "unit": "FTEs",
          "key": true
        },
        {
          "id": "hrbps",
          "label": "HRBPs supporting scope",
          "default": 40,
          "unit": "FTEs"
        },
        {
          "id": "recruiters",
          "label": "Recruiters supporting scope",
          "default": 35,
          "unit": "FTEs"
        },
        {
          "id": "coordinators",
          "label": "Ops / training coordinators",
          "default": 60,
          "unit": "FTEs"
        }
      ]
    },
    {
      "title": "Recruiting — Time-to-Fill",
      "inputs": [
        {
          "id": "reqs_year",
          "label": "Reqs opened per year",
          "default": 1500,
          "unit": "reqs",
          "key": true
        },
        {
          "id": "ttf_base",
          "label": "Time-to-fill baseline",
          "default": 65,
          "unit": "days",
          "key": true
        },
        {
          "id": "ttf_future",
          "label": "Time-to-fill future",
          "default": 50,
          "unit": "days",
          "key": true
        },
        {
          "id": "vacancy_cost_day",
          "label": "Daily crew-capacity exposure per vacancy",
          "default": 850,
          "unit": "$/day"
        },
        {
          "id": "recruiter_hrs",
          "label": "Recruiter hrs saved per req",
          "default": 10,
          "unit": "hrs"
        },
        {
          "id": "recruiter_rate",
          "label": "Fully-loaded recruiter $/hr",
          "default": 85,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Certification — Mobilization Gap Avoidance",
      "inputs": [
        {
          "id": "mobs_year",
          "label": "Mobilizations per year",
          "default": 18000,
          "unit": "mobs",
          "key": true
        },
        {
          "id": "cert_gap_base",
          "label": "Mobs with cert-gap (baseline)",
          "default": 0.08,
          "unit": "%",
          "pct": true
        },
        {
          "id": "cert_gap_future",
          "label": "Mobs with cert-gap (future)",
          "default": 0.03,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "cert_recovery_cost",
          "label": "Avg recovery cost per cert-gap mob",
          "default": 2800,
          "unit": "$"
        },
        {
          "id": "cert_npt_rate",
          "label": "% of gaps that slip to location",
          "default": 0.15,
          "unit": "%",
          "pct": true
        },
        {
          "id": "cert_npt_cost",
          "label": "Customer NPT exposure per slipped gap",
          "default": 25000,
          "unit": "$"
        }
      ]
    },
    {
      "title": "JD Refresh & Recruiting Quality",
      "inputs": [
        {
          "id": "jds_in_scope",
          "label": "Active JDs in scope",
          "default": 150,
          "unit": "JDs"
        },
        {
          "id": "jd_rewrite_hrs",
          "label": "Hours per current-state rewrite",
          "default": 40,
          "unit": "hrs"
        },
        {
          "id": "jd_refreshes",
          "label": "JDs refreshed per year",
          "default": 50,
          "unit": "JDs",
          "key": true
        },
        {
          "id": "jd_future_hrs",
          "label": "Hours per future-state review",
          "default": 8,
          "unit": "hrs"
        },
        {
          "id": "hrbp_rate",
          "label": "Fully-loaded HRBP $/hr",
          "default": 110,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Training — Capability Uplift",
      "inputs": [
        {
          "id": "training_hrs_fte",
          "label": "Training hrs per FTE / yr (baseline)",
          "default": 60,
          "unit": "hrs"
        },
        {
          "id": "training_waste",
          "label": "% training that fails to close a gap",
          "default": 0.4,
          "unit": "%",
          "pct": true
        },
        {
          "id": "training_waste_reduction",
          "label": "Reduction in wasted training hrs",
          "default": 0.4,
          "unit": "%",
          "pct": true,
          "key": true
        },
        {
          "id": "training_hr_cost",
          "label": "Cost per training hour (LMS + labor)",
          "default": 75,
          "unit": "$/hr"
        }
      ]
    },
    {
      "title": "Field Alignment — Coordinator & DM Time",
      "inputs": [
        {
          "id": "align_hrs_week",
          "label": "Coordinator alignment hrs/week (baseline)",
          "default": 8,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "align_hrs_future",
          "label": "Coordinator alignment hrs/week (future)",
          "default": 1.5,
          "unit": "hrs",
          "key": true
        },
        {
          "id": "coord_rate",
          "label": "Fully-loaded coordinator $/hr",
          "default": 75,
          "unit": "$/hr"
        },
        {
          "id": "dm_hrs_week",
          "label": "District Manager alignment hrs/week (baseline)",
          "default": 3,
          "unit": "hrs"
        },
        {
          "id": "dm_hrs_future",
          "label": "District Manager alignment hrs/week (future)",
          "default": 0.5,
          "unit": "hrs"
        },
        {
          "id": "dm_rate",
          "label": "Fully-loaded District Manager $/hr",
          "default": 180,
          "unit": "$/hr"
        },
        {
          "id": "districts",
          "label": "Districts in scope (alignment scales with)",
          "default": 45,
          "unit": "districts"
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
  "titleText": "Workforce Operations Agent"
});
