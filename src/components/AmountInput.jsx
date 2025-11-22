function AmountInput({ amount, onAmountChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="amount" className="form-label fw-semibold">
        Amount (USD)
      </label>
      <input
        id="amount"
        type="number"
        className="form-control"
        placeholder="Enter USD amount"
        value={amount}
        // If user clears input, set to 0, otherwise parse as float
        onChange={(e) => onAmountChange(parseFloat(e.target.value) || 0)}
      />
    </div>
  );
}

export default AmountInput;