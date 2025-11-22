import { useState, useEffect } from 'react';
import './App.css';
import AmountInput from './components/AmountInput';
import CurrencySelect from './components/CurrencySelect';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [amount, setAmount] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState('eur');
  const [rates, setRates] = useState({}); 
  const [date, setDate] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'
        );
        const data = await response.json();
        setRates(data.usd);
        setDate(data.date);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rates:", error);
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const handleConvert = () => {
    if (rates[targetCurrency]) {
      const result = amount * rates[targetCurrency];
      setConvertedAmount(result);
    }
  };


  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100"></div>
    );
  }
  
  return (
    <div className="container my-5 p-4 rounded shadow-sm bg-light">
      <h1 className="mb-4">Currency Converter</h1>
      <AmountInput amount={amount} onAmountChange={setAmount} />
      <CurrencySelect
        currency={targetCurrency}
        onCurrencyChange={setTargetCurrency}
        currencies={Object.keys(rates)}
      />
      <div className="d-grid">
        <button className="btn btn-primary" onClick={handleConvert}>
          Convert
        </button>
      </div>
      <ResultDisplay
        convertedAmount={convertedAmount}
        targetCurrency={targetCurrency}
        date={date}
      />
    </div>
  );
}

export default App;