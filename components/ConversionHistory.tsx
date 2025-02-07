'use client'

import { useState, useEffect } from 'react'

export default function ConversionHistory() {
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('conversionHistory') || '[]')
    setHistory(storedHistory)
  }, [updateTrigger]);

  const toggleHistory = () => {
    setShowHistory(!showHistory)
  }

  const updateHistory = () => {
    setUpdateTrigger(prev => prev + 1);
  };

  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Historique des Conversions</h2>
      <button onClick={toggleHistory} className="bg-primary text-white p-2 rounded mb-4">
        {showHistory ? 'Masquer l\'historique' : 'Afficher l\'historique'}
      </button>
      {showHistory && (
        <ul className="max-h-60 overflow-y-auto">
          {history.map((item, index) => (
            <li key={index} className="mb-2">
              <p>Date : {new Date(item.timestamp).toLocaleString()}</p>
              <p>Type : {item.type === 'number' ? 'Nombre' : 'Texte'}</p>
              <p>Entrée : {item.input}</p>
              <p>Sortie : {item.output}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

