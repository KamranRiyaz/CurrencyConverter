function CurrencySelect({ currency, onCurrencyChange, currencies }) {
  return (
    <div className="mb-4">
      <label htmlFor="currency" className="form-label fw-semibold">
        Target Currency
      </label>
      <select
        id="currency"
        className="form-select text-uppercase"
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelect;