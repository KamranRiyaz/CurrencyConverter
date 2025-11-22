function ResultDisplay({ convertedAmount, targetCurrency, date }) {
  // If no conversion has happened, don't show anything
  if (convertedAmount === null) return null;

  return (
    <div className="mt-4 text-center">
      <div className="alert alert-success">
        <small className="text-muted">Converted Amount:</small>
        <h3 className="fw-bold my-2">
          {convertedAmount.toFixed(2)} {targetCurrency.toUpperCase()}
        </h3>
        <hr />
        <p className="mb-0 small text-muted">Rate Date: {date}</p>
      </div>
    </div>
  );
}

export default ResultDisplay;