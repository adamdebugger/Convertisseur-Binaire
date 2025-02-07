'use client'

import { useState } from 'react'

export default function NumberConverter({ updateHistory }) {
  const [number, setNumber] = useState('')
  const [binary, setBinary] = useState('')
  const [error, setError] = useState('')

  const convertToBinary = () => {
    if (!/^\d+$/.test(number)) {
      setError('Veuillez entrer un nombre entier valide.')
      setBinary('')
      return
    }
    setError('')
    const result = parseInt(number).toString(2)
    setBinary(result)
    // Ajouter à l'historique
    const historyItem = { type: 'number', input: number, output: result, timestamp: new Date().toISOString() }
    const history = JSON.parse(localStorage.getItem('conversionHistory') || '[]')
    history.push(historyItem)
    localStorage.setItem('conversionHistory', JSON.stringify(history))
    updateHistory();
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binary)
  }

  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Conversion de Numéros en Binaire</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full p-2 mb-4 bg-background text-text rounded border border-gray-600"
        placeholder="Entrez un nombre"
      />
      <button onClick={convertToBinary} className="bg-primary text-white p-2 rounded mr-2">
        Convertir
      </button>
      {binary && (
        <button onClick={copyToClipboard} className="bg-primary text-white p-2 rounded">
          Copier
        </button>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {binary && <p className="mt-4">Résultat : {binary}</p>}
    </div>
  )
}

