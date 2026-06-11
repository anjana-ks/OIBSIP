/**
 * app.js
 * UI controller for ThermoFlux — handles validation, interactions,
 * unit selection, and dynamic results rendering.
 */

(function () {
  'use strict';

  const { UNIT_META, convertToOthers, validateInput } = window.ThermoFluxConverter;

  // ── DOM References ──────────────────────────────────────────────
  const inputEl = document.getElementById('temperature-input');
  const inputWrapper = document.getElementById('input-wrapper');
  const inputUnitBadge = document.getElementById('input-unit-badge');
  const errorEl = document.getElementById('input-error');
  const errorMessageEl = document.getElementById('error-message');
  const unitSelector = document.getElementById('unit-selector');
  const unitOptions = unitSelector.querySelectorAll('.unit-selector__option');
  const unitIndicator = document.getElementById('unit-indicator');
  const convertBtn = document.getElementById('convert-btn');
  const resultsSection = document.getElementById('results-section');
  const resultsGrid = document.getElementById('results-grid');

  /** @type {'celsius' | 'fahrenheit' | 'kelvin'} */
  let selectedUnit = 'celsius';

  // ── Validation UI ───────────────────────────────────────────────

  /**
   * Shows inline error with shake micro-interaction.
   * @param {string} message
   */
  function showError(message) {
    errorMessageEl.textContent = message;
    errorEl.hidden = false;
    inputEl.setAttribute('aria-invalid', 'true');
    inputWrapper.classList.add('is-error');
    inputWrapper.classList.remove('is-valid');

    // Trigger shake animation restart
    inputWrapper.classList.remove('shake');
    void inputWrapper.offsetWidth; // reflow
    inputWrapper.classList.add('shake');
  }

  /** Clears validation error state */
  function clearError() {
    errorEl.hidden = true;
    errorMessageEl.textContent = '';
    inputEl.setAttribute('aria-invalid', 'false');
    inputWrapper.classList.remove('is-error', 'shake');
  }

  /** Marks input as valid with subtle success glow */
  function markValid() {
    inputWrapper.classList.add('is-valid');
    inputWrapper.classList.remove('is-error');
  }

  // ── Unit Selector ─────────────────────────────────────────────────

  /**
   * Updates segmented control active state and sliding indicator.
   * @param {'celsius' | 'fahrenheit' | 'kelvin'} unit
   */
  function setSelectedUnit(unit) {
    selectedUnit = unit;

    unitOptions.forEach((btn) => {
      const isActive = btn.dataset.unit === unit;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-checked', String(isActive));
    });

    // Position sliding indicator under active option
    const activeBtn = unitSelector.querySelector(`[data-unit="${unit}"]`);
    if (activeBtn && unitIndicator) {
      unitIndicator.style.width = `${activeBtn.offsetWidth}px`;
      unitIndicator.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    }

    // Sync input badge symbol
    inputUnitBadge.textContent = UNIT_META[unit].symbol;
  }

  unitOptions.forEach((btn) => {
    btn.addEventListener('click', () => {
      setSelectedUnit(/** @type {typeof selectedUnit} */ (btn.dataset.unit));
    });
  });

  // Initialize indicator position after layout
  window.addEventListener('load', () => setSelectedUnit(selectedUnit));
  window.addEventListener('resize', () => setSelectedUnit(selectedUnit));

  // ── Input Filtering ─────────────────────────────────────────────

  /**
   * Strips non-numeric characters on input (except minus and dot).
   * Provides real-time soft feedback without blocking typing entirely.
   */
  inputEl.addEventListener('input', () => {
    clearError();
    inputWrapper.classList.remove('is-valid');

    // Remove letters and special chars except . and -
    const cleaned = inputEl.value.replace(/[^0-9.\-]/g, '');

    // Prevent multiple minus signs or misplaced minus
    let sanitized = cleaned;
    const minusCount = (cleaned.match(/-/g) || []).length;
    if (minusCount > 1) {
      sanitized = '-' + cleaned.replace(/-/g, '');
    }
    if (sanitized.indexOf('-') > 0) {
      sanitized = sanitized.replace(/-/g, '');
    }

    // Prevent multiple decimal points
    const parts = sanitized.split('.');
    if (parts.length > 2) {
      sanitized = parts[0] + '.' + parts.slice(1).join('');
    }

    if (sanitized !== inputEl.value) {
      inputEl.value = sanitized;
    }
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleConvert();
    }
  });

  // ── Conversion & Results ──────────────────────────────────────────

  /**
   * Renders result cards for the two non-source units.
   * @param {number} sourceValue
   * @param {typeof selectedUnit} sourceUnit
   * @param {ReturnType<typeof convertToOthers>} results
   */
  function renderResults(sourceValue, sourceUnit, results) {
    resultsGrid.innerHTML = '';

    results.forEach((result, index) => {
      const card = document.createElement('article');
      card.className = 'result-card glass';
      card.style.animationDelay = `${index * 80}ms`;

      card.innerHTML = `
        <div class="result-card__header">
          <span class="result-card__symbol">${result.meta.symbol}</span>
          <span class="result-card__label">${result.meta.label}</span>
        </div>
        <p class="result-card__value" aria-label="${result.formatted} ${result.meta.label}">
          <span class="result-card__number">${result.formatted}</span>
          <span class="result-card__unit">${result.meta.symbol}</span>
        </p>
        <p class="result-card__from">
          from <strong>${sourceValue}</strong> ${UNIT_META[sourceUnit].symbol}
        </p>
      `;

      resultsGrid.appendChild(card);
    });

    resultsSection.hidden = false;
    resultsSection.classList.remove('results--animate');
    void resultsSection.offsetWidth;
    resultsSection.classList.add('results--animate');
  }

  /** Main convert handler */
  function handleConvert() {
    const validation = validateInput(inputEl.value);

    if (!validation.valid) {
      showError(validation.error);
      resultsSection.hidden = true;
      return;
    }

    clearError();
    markValid();

    const results = convertToOthers(validation.value, selectedUnit);
    renderResults(validation.value, selectedUnit, results);

    // Button press feedback
    convertBtn.classList.add('is-pressed');
    setTimeout(() => convertBtn.classList.remove('is-pressed'), 200);
  }

  convertBtn.addEventListener('click', handleConvert);
})();
