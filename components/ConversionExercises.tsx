'use client'

import { useState } from 'react'

const difficulties = {
  easy: { numberLength: 3, textLength: 5 },
  medium: { numberLength: 6, textLength: 10 },
  hard: { numberLength: 9, textLength: 15 }
}

export default function ConversionExercises() {
  const [exerciseType, setExerciseType] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [challenge, setChallenge] = useState('')
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')

  const generateExercise = () => {
    if (exerciseType === 'number') {
      const max = Math.pow(10, difficulties[difficulty].numberLength) - 1
      const number = Math.floor(Math.random() * max)
      setChallenge(number.toString())
      setCorrectAnswer(number.toString(2))
    } else {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let result = ''
      const length = difficulties[difficulty].textLength
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      setChallenge(result)
      setCorrectAnswer(result.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' '))
    }
    setUserAnswer('')
    setFeedback('')
  }

  const checkAnswer = () => {
    if (userAnswer.replace(/\s/g, '') === correctAnswer.replace(/\s/g, '')) {
      setFeedback('Correct ! Bien joué !')
    } else {
      setFeedback(`Incorrect. La bonne réponse était : ${correctAnswer}`)
    }
  }

  return (
    <div className="bg-secondary p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Exercices de Conversion</h2>
      <div className="mb-4">
        <label className="block mb-2">Type d'exercice :</label>
        <select
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
          className="w-full p-2 bg-background text-text rounded border border-gray-600"
        >
          <option value="">Sélectionnez un type</option>
          <option value="number">Nombre en binaire</option>
          <option value="text">Texte en binaire</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Difficulté :</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full p-2 bg-background text-text rounded border border-gray-600"
        >
          <option value="">Sélectionnez une difficulté</option>
          <option value="easy">Facile</option>
          <option value="medium">Moyen</option>
          <option value="hard">Difficile</option>
        </select>
      </div>
      <button
        onClick={generateExercise}
        disabled={!exerciseType || !difficulty}
        className="bg-primary text-white p-2 rounded mb-4 disabled:opacity-50"
      >
        Générer un exercice
      </button>
      {challenge && (
        <div>
          <p className="mb-2">Convertissez en binaire : {challenge}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-2 mb-4 bg-background text-text rounded border border-gray-600"
            placeholder="Votre réponse"
          />
          <button onClick={checkAnswer} className="bg-primary text-white p-2 rounded">
            Vérifier
          </button>
          {feedback && <p className="mt-4">{feedback}</p>}
        </div>
      )}
    </div>
  )
}

