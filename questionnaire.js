(function () {
  const useCases = window.NORTH_USE_CASES || [];
  const APPRAISAL_URL = 'https://jeffmonk-cohere.github.io/North-for-Energy-Value-Appraisal/';
  const APPRAISAL_STORAGE_KEY = 'north-appraisal-import:v1';
  const clean = value => String(value || '').replace(/<[^>]+>/g, '');
  const esc = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  const slug = value => String(value || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const useCaseNumber = uc => {
    const match = String(uc.eyebrow || '').match(/\d+/);
    return match ? match[0].padStart(2, '0') : '';
  };

  const indexApp = document.querySelector('[data-index-app]');
  if (indexApp) {
    const grid = indexApp.querySelector('[data-card-grid]');
    grid.innerHTML = useCases.map(uc => {
      return '<a class="usecase-card" href="./' + esc(uc.id) + '.html">' +
        '<span class="card-kicker">' + esc(useCaseNumber(uc)) + '</span>' +
        '<span class="card-title">' + esc(clean(uc.title || uc.name)) + '</span>' +
      '</a>';
    }).join('');
    return;
  }

  const mount = document.querySelector('[data-questionnaire-app]');
  if (!mount) return;

  const useCaseId = mount.dataset.useCaseId;
  const uc = useCases.find(item => item.id === useCaseId) || useCases[0];
  if (!uc) return;

  const inputType = input => input.unit === '$' || (input.unit || '').includes('$') || input.unit === '%' || input.pct || typeof input.default === 'number' ? 'number' : 'text';
  const inputStep = input => input.pct ? '0.01' : Number.isInteger(input.default) ? '1' : '0.01';
  const fieldMarkup = (section, input) => {
    const type = inputType(input);
    const unit = input.unit || '';
    const placeholder = input.pct ? 'Enter percent' : input.unit === '$' ? 'Enter amount' : 'Enter value';
    return '<label class="field ' + (input.key ? 'field-key' : '') + '">' +
      '<span class="field-label">' + esc(input.label) + '</span>' +
      '<span class="control">' +
      '<input type="' + type + '" name="' + esc(input.id) + '" data-assumption="true" data-use-case="' + esc(uc.id) + '" data-section="' + esc(section.title) + '" data-label="' + esc(input.label) + '" data-unit="' + esc(unit) + '" data-model-default="' + esc(input.default ?? '') + '"' +
      (input.pct ? ' data-percent="true" max="100"' : '') +
      (input.key ? ' data-key="true"' : '') +
      (type === 'number' ? ' min="0" step="' + inputStep(input) + '"' : '') +
      ' placeholder="' + placeholder + '" />' +
      (unit ? '<span class="unit">' + esc(unit) + '</span>' : '') +
      '</span></label>';
  };

  const sectionNav = uc.sections.map(section => '<a href="#' + slug(section.title) + '">' + esc(section.title) + '</a>').join('');
  const assumptionSections = uc.sections.map(section => {
    return '<section class="form-section" id="' + slug(section.title) + '">' +
      '<div class="section-heading"><p>' + esc(uc.name) + '</p><h2>' + esc(section.title) + '</h2></div>' +
      '<div class="field-grid">' + section.inputs.map(input => fieldMarkup(section, input)).join('') + '</div>' +
    '</section>';
  }).join('');
  mount.className = 'layout';
  mount.innerHTML = '<aside class="sidebar">' +
    '<a class="back-link" href="./index.html">All questionnaires</a>' +
    '<div class="progress-card"><span class="progress-value" data-progress-value>0%</span><span class="progress-label">Assumptions complete</span><span class="progress-track"><span data-progress-fill></span></span></div>' +
    '<nav class="section-nav" aria-label="Sections">' + sectionNav + '</nav>' +
    '</aside>' +
    '<section class="content">' +
    '<header class="hero"><p class="eyebrow">' + esc(useCaseNumber(uc)) + '</p><h1>' + (uc.title || esc(uc.name)) + '</h1></header>' +
    '<form class="questionnaire" data-questionnaire data-use-case-id="' + esc(uc.id) + '" data-use-case-name="' + esc(uc.name) + '">' +
    '<section class="form-section" id="customer-context"><div class="section-heading"><p>Submission</p><h2>Customer context</h2></div><div class="field-grid">' +
    '<label class="field"><span class="field-label">Company or business unit</span><span class="control"><input type="text" name="company_business_unit" data-context="true" placeholder="Enter name" /></span></label>' +
    '<label class="field"><span class="field-label">Prepared by</span><span class="control"><input type="text" name="prepared_by" data-context="true" placeholder="Enter contact" /></span></label>' +
    '<label class="field"><span class="field-label">Email</span><span class="control"><input type="email" name="email" data-context="true" placeholder="Enter email" /></span></label>' +
    '<label class="field"><span class="field-label">Date prepared</span><span class="control"><input type="date" name="date_prepared" data-context="true" /></span></label>' +
    '</div></section>' +
    assumptionSections +
    '<section class="form-section" id="notes"><div class="section-heading"><p>Review</p><h2>Notes and confidence</h2></div><div class="field-grid">' +
    '<label class="field"><span class="field-label">Confidence level</span><span class="control select-control"><select name="confidence_level" data-context="true"><option value="">Select level</option><option>Directional estimate</option><option>Validated operating assumption</option><option>Finance-approved assumption</option></select></span></label>' +
    '<label class="field field-wide"><span class="field-label">Assumption notes</span><span class="control"><textarea name="assumption_notes" data-context="true" rows="5" placeholder="Enter notes"></textarea></span></label>' +
    '</div></section>' +
    '<footer class="actions-bar"><button type="button" class="btn secondary" data-clear>Clear</button><button type="button" class="btn" data-export-csv>Export CSV</button><button type="button" class="btn" data-copy-appraisal>Copy Appraisal Import</button><button type="button" class="btn primary" data-open-appraisal>Open Appraisal</button><button type="button" class="btn primary" data-export-json>Export JSON</button></footer>' +
    '</form></section>';

  const form = mount.querySelector('[data-questionnaire]');
  const storageKey = 'north-questionnaire:' + uc.id;
  const assumptionFields = Array.from(form.querySelectorAll('[data-assumption="true"]'));
  const allFields = Array.from(form.querySelectorAll('input, textarea, select'));
  const progressValue = mount.querySelector('[data-progress-value]');
  const progressFill = mount.querySelector('[data-progress-fill]');

  const updateProgress = () => {
    const complete = assumptionFields.filter(field => String(field.value).trim() !== '').length;
    const pct = assumptionFields.length ? Math.round((complete / assumptionFields.length) * 100) : 0;
    progressValue.textContent = pct + '%';
    progressFill.style.width = pct + '%';
  };
  const save = () => {
    localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(allFields.map(field => [field.name, field.value]))));
    updateProgress();
  };
  const restore = () => {
    try {
      const values = JSON.parse(localStorage.getItem(storageKey) || '{}');
      allFields.forEach(field => {
        if (Object.prototype.hasOwnProperty.call(values, field.name)) field.value = values[field.name];
      });
    } catch (_) {}
    updateProgress();
  };
  const serialize = () => {
    const context = {};
    const assumptions = {};
    const rows = [];
    allFields.forEach(field => {
      if (field.dataset.assumption === 'true') {
        const row = {
          section: field.dataset.section || '',
          id: field.name,
          label: field.dataset.label || field.name,
          value: field.value,
          unit: field.dataset.unit || '',
          percent: field.dataset.percent === 'true',
          key: field.dataset.key === 'true',
        };
        rows.push(row);
        assumptions[field.name] = row;
      } else {
        context[field.name] = field.value;
      }
    });
    return { useCaseId: uc.id, useCaseName: uc.name, exportedAt: new Date().toISOString(), context, assumptions, rows };
  };
  const download = (filename, content, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  const csvEscape = value => '"' + String(value ?? '').replace(/"/g, '""') + '"';
  const numericValue = value => {
    const cleaned = String(value ?? '').replace(/[$,%\s,]/g, '');
    if (!cleaned) return null;
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : null;
  };
  const displayValue = row => {
    const value = String(row.value ?? '').trim();
    return value ? value + (row.unit ? ' ' + row.unit : '') : 'Not provided';
  };
  const buildAppraisalPayload = () => {
    const data = serialize();
    const fields = {};
    data.rows.forEach(row => {
      fields[row.id] = {
        value: row.value,
        numericValue: numericValue(row.value),
        unit: row.unit,
        label: row.label,
        section: row.section,
        percent: row.percent,
        key: row.key,
      };
    });
    const keyRows = data.rows.filter(row => row.key && String(row.value).trim() !== '');
    const completedRows = data.rows.filter(row => String(row.value).trim() !== '');
    const rowsForSummary = keyRows.length ? keyRows : completedRows.slice(0, 12);
    const contextLines = [
      ['Company', data.context.company_business_unit],
      ['Prepared by', data.context.prepared_by],
      ['Email', data.context.email],
      ['Date prepared', data.context.date_prepared],
      ['Confidence', data.context.confidence_level],
    ].filter(([, value]) => String(value || '').trim() !== '').map(([label, value]) => label + ': ' + value);
    const assumptionLines = rowsForSummary.map(row => '- ' + row.label + ': ' + displayValue(row));
    const notes = String(data.context.assumption_notes || '').trim();
    const summaryText = [
      'North Energy Value Appraisal Import',
      'Use case: ' + data.useCaseName,
      contextLines.length ? contextLines.join('\n') : '',
      assumptionLines.length ? 'Key assumptions:\n' + assumptionLines.join('\n') : 'No assumptions entered yet.',
      notes ? 'Notes:\n' + notes : '',
    ].filter(Boolean).join('\n\n');

    return {
      schema: 'north-appraisal-import/v1',
      source: 'customer-use-case-questionnaire',
      sourceUrl: window.location.href,
      appraisalUrl: APPRAISAL_URL,
      exportedAt: data.exportedAt,
      useCaseId: data.useCaseId,
      useCaseName: data.useCaseName,
      context: data.context,
      fields,
      rows: data.rows,
      summaryText,
    };
  };
  const persistAppraisalPayload = () => {
    const payload = buildAppraisalPayload();
    const content = JSON.stringify(payload, null, 2);
    localStorage.setItem(APPRAISAL_STORAGE_KEY, content);
    localStorage.setItem('north-appraisal-import', content);
    localStorage.setItem('north-appraisal-import:' + uc.id, content);
    return { payload, content };
  };
  const copyText = async text => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };

  form.addEventListener('input', save);
  form.addEventListener('change', save);
  form.querySelector('[data-clear]')?.addEventListener('click', () => {
    if (!confirm('Clear this questionnaire?')) return;
    allFields.forEach(field => field.value = '');
    localStorage.removeItem(storageKey);
    updateProgress();
  });
  form.querySelector('[data-export-json]')?.addEventListener('click', () => {
    download(uc.id + '-questionnaire.json', JSON.stringify(serialize(), null, 2), 'application/json');
  });
  form.querySelector('[data-export-csv]')?.addEventListener('click', () => {
    const data = serialize();
    const header = ['Use Case', 'Section', 'Field ID', 'Label', 'Value', 'Unit', 'Key Assumption'];
    const lines = [
      header.map(csvEscape).join(','),
      ...data.rows.map(row => [data.useCaseName, row.section, row.id, row.label, row.value, row.unit, row.key ? 'Yes' : 'No'].map(csvEscape).join(',')),
    ];
    download(uc.id + '-questionnaire.csv', lines.join('\n'), 'text/csv');
  });
  form.querySelector('[data-copy-appraisal]')?.addEventListener('click', async () => {
    try {
      const { content } = persistAppraisalPayload();
      await copyText(content);
      alert('Appraisal import copied and saved for the Appraisal tool.');
    } catch (_) {
      alert('The import was saved locally, but copying was blocked by the browser.');
    }
  });
  form.querySelector('[data-open-appraisal]')?.addEventListener('click', () => {
    persistAppraisalPayload();
    const url = APPRAISAL_URL + '?import=north-questionnaire&useCase=' + encodeURIComponent(uc.id);
    const opened = window.open(url, '_blank', 'noopener');
    if (!opened) window.location.href = url;
  });
  restore();
})();
