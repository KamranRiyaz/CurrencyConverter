import { Currency } from 'lucide-react'
import React from 'react'

export default function currencyRow({ currencyOptions = [] }) {
  return (
    <>
      <input type="number" className="input" />
      <select>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </>
  )
}
