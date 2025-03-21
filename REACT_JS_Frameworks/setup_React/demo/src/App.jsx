import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-300'>Hello you</h1>
      <div className="flex">
      <Card name={"Lenz"}jobtitle={"Abteilungsvorstand"}description={"lässig"}/>
      <Card name={"Riedmann"}jobtitle={"SWP-Lehrer"}description={"cool:)"}/>
      </div>
    </>
  )
}

export default App
