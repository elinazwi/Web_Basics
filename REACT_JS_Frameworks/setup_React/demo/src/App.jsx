import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Aufgabe2 from './components/pages/Aufgabe_2'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aufgabe2/>
    </>
  )
}


