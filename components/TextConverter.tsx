'use client'

import { useState } from 'react'

export default function TextConverter({ updateHistory }) {
  const [text, setText] = useState('')
  const [binary, setBinary] = useState('')

  const convertToBinary = () => {
    const result = text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ')
    setBinary(result)
    // Ajouter à l'historique
    const historyItem = { type: 'text', input: text, output: result, timestamp: new Date().toISOString() }
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
      <h2 className="text-xl font-bold mb-4">Conversion de Texte en Binaire</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 mb-4 bg-background text-text rounded border border-gray-600"
        placeholder="Entrez du texte"
        rows={4}
      />
      <button onClick={convertToBinary} className="bg-primary text-white p-2 rounded mr-2">
        Convertir
      </button>
      {binary && (
        <button onClick={copyToClipboard} className="bg-primary text-white p-2 rounded">
          Copier
        </button>
      )}
      {binary && <p className="mt-4 break-words">Résultat : {binary}</p>}
    </div>
  )
}

