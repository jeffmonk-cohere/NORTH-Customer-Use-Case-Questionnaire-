# North Customer Assumption Questionnaires

Static customer-facing questionnaire pages for collecting operating assumptions by use case.

## Pages

- `index.html` - questionnaire hub
- `field.html` - Field Technician Assistant
- `safety.html` - Safety Incident Agent
- `prod.html` - Production Loss Recovery
- `jobplan.html` - Job Planning Agent
- `workforce.html` - Workforce Operations Agent
- `mro.html` - MRO Supply Chain Agent
- `crude.html` - Crude Movement Change Management

## Use

Open `index.html` in a browser. Each questionnaire saves draft inputs locally in the browser and supports JSON or CSV export.

Use `Open Appraisal` to package the current questionnaire as a `north-appraisal-import/v1` payload, save it to shared browser storage for `jeffmonk-cohere.github.io`, and open the North Energy Value Appraisal tool with import hints. Use `Copy Appraisal Import` when you want the same payload on the clipboard for review, troubleshooting, or a manual import workflow.

The Appraisal tool should include the import logic from `appraisal-import-snippet.js` inside its main script before the initial `renderAll()` call. Once that snippet is present, `Open Appraisal` will populate the matching use case and assumption inputs automatically.
