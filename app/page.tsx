import { useState } from 'react'
import NumberConverter from '../components/NumberConverter'
import TextConverter from '../components/TextConverter'
import ConversionHistory from '../components/ConversionHistory'
import ConversionExercises from '../components/ConversionExercises'

export default function Home() {
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const updateHistory = () => setUpdateTrigger(prev => prev + 1);

  return (
    <main className="min-h-screen bg-background text-text p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Convertisseur Binaire</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NumberConverter updateHistory={updateHistory} />
        <TextConverter updateHistory={updateHistory} />
        <ConversionHistory updateTrigger={updateTrigger} />
        <ConversionExercises />
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        Créé par Adam Dalaa, 2APIC, G4
      </footer>
    </main>
  )
}

