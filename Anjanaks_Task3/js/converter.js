/**
 * converter.js
 * Core temperature conversion logic for ThermoFlux.
 * Handles Celsius, Fahrenheit, and Kelvin with precise formulas.
 */

(function (global) {
  'use strict';

  /** @typedef {'celsius' | 'fahrenheit' | 'kelvin'} TemperatureUnit */

  /** Display metadata for each supported unit */
  const UNIT_META = {
    celsius: { symbol: '°C', label: 'Celsius', key: 'celsius' },
    fahrenheit: { symbol: '°F', label: 'Fahrenheit', key: 'fahrenheit' },
    kelvin: { symbol: 'K', label: 'Kelvin', key: 'kelvin' },
  };

  const ALL_UNITS = /** @type {TemperatureUnit[]} */ (
    Object.keys(UNIT_META)
  );

  /**
   * Rounds a number to a maximum of 4 decimal places,
   * trimming trailing zeros. Uses at most 2 decimals when possible.
   * @param {number} value
   * @returns {string}
   */
  function formatTemperature(value) {
    if (!Number.isFinite(value)) return '—';

    const rounded4 = Math.round(value * 10000) / 10000;
    const rounded2 = Math.round(rounded4 * 100) / 100;

    // Prefer 2 decimal places when equivalent (cleaner display)
    if (rounded4 === rounded2) {
      return rounded2.toFixed(2).replace(/\.?0+$/, '') || '0';
    }

    return rounded4.toFixed(4).replace(/\.?0+$/, '') || '0';
  }

  /**
   * Converts any temperature to Celsius (base unit for internal math).
   * @param {number} value
   * @param {TemperatureUnit} fromUnit
   * @returns {number}
   */
  function toCelsius(value, fromUnit) {
    switch (fromUnit) {
      case 'celsius':
        return value;
      case 'fahrenheit':
        // °C = (F - 32) * 5/9
        return (value - 32) * (5 / 9);
      case 'kelvin':
        // °C = K - 273.15
        return value - 273.15;
      default:
        throw new Error(`Unknown unit: ${fromUnit}`);
    }
  }

  /**
   * Converts Celsius to a target unit.
   * @param {number} celsius
   * @param {TemperatureUnit} toUnit
   * @returns {number}
   */
  function fromCelsius(celsius, toUnit) {
    switch (toUnit) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        // °F = (C * 9/5) + 32
        return celsius * (9 / 5) + 32;
      case 'kelvin':
        // K = C + 273.15
        return celsius + 273.15;
      default:
        throw new Error(`Unknown unit: ${toUnit}`);
    }
  }

  /**
   * Converts a value from one unit to another.
   * @param {number} value
   * @param {TemperatureUnit} fromUnit
   * @param {TemperatureUnit} toUnit
   * @returns {number}
   */
  function convert(value, fromUnit, toUnit) {
    const celsius = toCelsius(value, fromUnit);
    return fromCelsius(celsius, toUnit);
  }

  /**
   * Given a source unit, returns conversions for the OTHER two units.
   * @param {number} value
   * @param {TemperatureUnit} sourceUnit
   * @returns {{ unit: TemperatureUnit, value: number, formatted: string, meta: typeof UNIT_META.celsius }[]}
   */
  function convertToOthers(value, sourceUnit) {
    return ALL_UNITS
      .filter((unit) => unit !== sourceUnit)
      .map((unit) => {
        const result = convert(value, sourceUnit, unit);
        return {
          unit,
          value: result,
          formatted: formatTemperature(result),
          meta: UNIT_META[unit],
        };
      });
  }

  /**
   * Strict validation: accepts integers and decimals, optional leading minus.
   * Rejects empty strings, text, multiple dots, etc.
   * @param {string} raw
   * @returns {{ valid: boolean, value?: number, error?: string }}
   */
  function validateInput(raw) {
    const trimmed = raw.trim();

    if (trimmed === '') {
      return { valid: false, error: 'Temperature cannot be empty.' };
    }

    // Allow optional minus, digits, and a single decimal point
    const numericPattern = /^-?\d+(\.\d+)?$/;

    if (!numericPattern.test(trimmed)) {
      return { valid: false, error: 'Please enter a valid number (digits only).' };
    }

    const value = parseFloat(trimmed);

    if (!Number.isFinite(value)) {
      return { valid: false, error: 'Invalid numeric value.' };
    }

    return { valid: true, value };
  }

  /** Public API */
  global.ThermoFluxConverter = {
    UNIT_META,
    ALL_UNITS,
    formatTemperature,
    convert,
    convertToOthers,
    validateInput,
  };
})(window);
